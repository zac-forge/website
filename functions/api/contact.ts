// POST /api/contact, the v5 contact form handler.
//
// Validates the four fields, verifies a Cloudflare Turnstile token, and sends
// the submission to drew@zacforge.com through Resend. Called from the Worker
// entry in functions/worker.ts.
//
// Keys out is a supported state, not an error. Without TURNSTILE_SECRET_KEY
// verification is skipped (the honeypot still applies). Without
// RESEND_API_KEY the submission is logged to the Worker console and the
// thank-you page offers a prefilled mailto, so nothing is lost before the
// keys exist. See README.md for both keys.

export interface ContactEnv {
  /** The static site, for the prerendered result pages. */
  ASSETS?: Fetcher;
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  /** Optional overrides. Defaults below. */
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

const DEFAULT_TO = "drew@zacforge.com";
// The sending domain must be verified in Resend before this address works.
const DEFAULT_FROM = "ZAC Forge <site@zacforge.com>";
const BOOKING_URL = "https://cal.com/zacforge/20-min-chat";

const LIMITS = { name: 200, email: 320, message: 5000, url: 500 } as const;

type Submission = { name: string; email: string; message: string; url: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(s: Submission): string[] {
  const errors: string[] = [];
  if (!s.name) errors.push("Please add your name.");
  if (!EMAIL.test(s.email)) errors.push("Please add an email address we can reply to.");
  if (!s.message) errors.push("Please tell us what you built, and what's wrong with it.");
  if (s.name.length > LIMITS.name || s.email.length > LIMITS.email || s.message.length > LIMITS.message || s.url.length > LIMITS.url) {
    errors.push("One of the fields is longer than the form allows.");
  }
  return errors;
}

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  if (!token) return false;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("contact: turnstile verification failed to run", err);
    return false;
  }
}

async function sendResend(env: ContactEnv, s: Submission): Promise<boolean> {
  const text = [
    `Name: ${s.name}`,
    `Email: ${s.email}`,
    `Link: ${s.url || "(none)"}`,
    "",
    "What did you build, and what's wrong with it?",
    s.message,
  ].join("\n");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM || DEFAULT_FROM,
      to: [env.CONTACT_TO || DEFAULT_TO],
      reply_to: s.email,
      subject: `Reality Check request from ${s.name}`,
      text,
    }),
  });
  if (!res.ok) {
    console.error("contact: resend returned", res.status, await res.text().catch(() => ""));
    return false;
  }
  return true;
}

// ------------------------------------------------------------------ Pages

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function mailto(s: Submission, to: string): string {
  const body = [
    `Name: ${s.name}`,
    `Email: ${s.email}`,
    `Link: ${s.url}`,
    "",
    "What did you build, and what's wrong with it?",
    s.message.slice(0, 1500),
  ].join("\n");
  return `mailto:${to}?subject=${encodeURIComponent("Reality Check request")}&body=${encodeURIComponent(body)}`;
}

/** A plain page. It carries the site's ground, type, and button colours inline. */
function page(status: number, title: string, inner: string): Response {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>${esc(title)} | ZAC Forge</title>
<style>
  body { margin: 0; background: #EBEBEB; color: #000; font: 16px/1.4 Avenir, "Avenir Next", system-ui, sans-serif; }
  main { max-width: 568px; margin: 0 auto; padding: 96px 24px; }
  h1 { font-size: 40px; font-weight: 900; line-height: 1.1; margin: 0 0 24px; }
  p, ul { margin: 0 0 16px; }
  a { color: inherit; font-weight: 900; }
  .btn { display: inline-block; margin-top: 8px; padding: 10px 24px; border-radius: 999px; background: #56246F; color: #fff; text-decoration: none; }
  a:focus-visible { outline: 2px solid #9D4DFF; outline-offset: 3px; }
</style>
</head>
<body><main>${inner}<p><a href="/">Back to zacforge.com</a></p></main></body>
</html>`;
  return new Response(html, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

// The result pages are prerendered by the site build (src/pages/ContactResult.tsx)
// at /contact/thanks, /contact/not-sent, and /contact/error. The handler fetches
// the template, rewrites the [data-slot] elements, and embeds the same values
// as #contact-data so the client hydrates to exactly what the HTML shows.

type Variant = "thanks" | "not-sent" | "error";
type ContactData = { firstName?: string; errors?: string[]; mailto?: string };

function firstName(name: string): string {
  return (name.trim().split(/\s+/)[0] ?? "").slice(0, 40);
}

async function result(request: Request, env: ContactEnv, variant: Variant, status: number, data: ContactData, fallback: () => Response): Promise<Response> {
  if (!env.ASSETS) return fallback();
  const tpl = await env.ASSETS.fetch(new Request(new URL(`/contact/${variant}`, request.url)));
  if (!tpl.ok) {
    console.error("contact: result template missing", variant, tpl.status);
    return fallback();
  }
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  const rewritten = new HTMLRewriter()
    .on("head", { element: (e) => void e.append(`<script id="contact-data" type="application/json">${json}</script>`, { html: true }) })
    .on('[data-slot="name"]', { element: (e) => void e.setInnerContent(data.firstName ? `, ${data.firstName}` : "") })
    .on('[data-slot="mailto"]', { element: (e) => void (data.mailto && e.setAttribute("href", data.mailto)) })
    .on('[data-slot="errors"]', {
      element: (e) => void e.setInnerContent((data.errors ?? []).map((x) => `<li>${esc(x)}</li>`).join(""), { html: true }),
    })
    .transform(tpl);
  return new Response(rewritten.body, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex, nofollow" },
  });
}

// Plain fallbacks, used only when the templates cannot be fetched.
function thanksFallback(s: Submission, delivered: boolean, to: string): Response {
  if (delivered) {
    return page(200, "Thank you", `<h1>Thank you.</h1><p>Your message reached us.</p>`);
  }
  return page(
    200,
    "Something went wrong",
    `<h1>Something went wrong on our end.</h1>
<p>Your message didn't send. Nothing's wrong on your side. <a href="${esc(mailto(s, to))}">Email it to ${esc(to)}</a> instead, or <a href="${BOOKING_URL}">book a 20-minute call</a>.</p>
<p><a class="btn" href="${BOOKING_URL}">Book a 20-minute call</a></p>`,
  );
}

function invalidFallback(errors: string[], s: Submission, to: string): Response {
  return page(
    400,
    "Something is missing",
    `<h1>Something is missing.</h1>
<ul>${errors.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
<p><a href="/#contact">Go back to the form</a>, or <a href="${esc(mailto(s, to))}">email it to ${esc(to)}</a> instead.</p>`,
  );
}

function thanks(request: Request, env: ContactEnv, s: Submission, delivered: boolean, to: string) {
  return delivered
    ? result(request, env, "thanks", 200, { firstName: firstName(s.name) }, () => thanksFallback(s, true, to))
    : result(request, env, "not-sent", 200, { mailto: mailto(s, to) }, () => thanksFallback(s, false, to));
}

function invalid(request: Request, env: ContactEnv, errors: string[], s: Submission, to: string) {
  return result(request, env, "error", 400, { errors, mailto: mailto(s, to) }, () => invalidFallback(errors, s, to));
}

// ---------------------------------------------------------------- Handler

export async function handleContact(request: Request, env: ContactEnv): Promise<Response> {
  if (request.method !== "POST") {
    return Response.redirect(new URL("/#contact", request.url).toString(), 303);
  }

  const to = env.CONTACT_TO || DEFAULT_TO;
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return invalid(request, env, ["The form did not arrive in a shape we could read."], { name: "", email: "", message: "", url: "" }, to);
  }
  const get = (k: string) => String(form.get(k) ?? "").trim();
  const s: Submission = { name: get("name"), email: get("email"), message: get("message"), url: get("url") };

  // Honeypot filled: a bot. Answer as if it worked and do nothing.
  if (get("company")) return thanks(request, env, s, true, to);

  const errors = validate(s);
  if (errors.length) return invalid(request, env, errors, s, to);

  if (env.TURNSTILE_SECRET_KEY) {
    const ok = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, get("cf-turnstile-response"), request.headers.get("cf-connecting-ip"));
    if (!ok) return invalid(request, env, ["The spam check did not pass. Please try again."], s, to);
  }

  let delivered = false;
  if (env.RESEND_API_KEY) {
    try {
      delivered = await sendResend(env, s);
    } catch (err) {
      console.error("contact: resend request failed", err);
    }
  }
  if (!delivered) {
    // Keys out, or Resend failed: the submission is kept in the Worker log.
    console.log("contact: submission not emailed", JSON.stringify({ ...s, at: new Date().toISOString() }));
  }
  return thanks(request, env, s, delivered, to);
}
