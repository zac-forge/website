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

function thanks(s: Submission, delivered: boolean, to: string): Response {
  if (delivered) {
    return page(200, "Thank you", `<h1>Thank you.</h1><p>Your message reached us.</p>`);
  }
  return page(
    200,
    "Thank you",
    `<h1>Thank you.</h1>
<p>We have your message. Our email delivery isn't switched on yet, so please send it by email too, so nothing gets lost.</p>
<p><a class="btn" href="${esc(mailto(s, to))}">Email it to ${esc(to)}</a></p>
<p>Or <a href="${BOOKING_URL}">book a 20-minute call</a>.</p>`,
  );
}

function invalid(errors: string[], s: Submission, to: string): Response {
  return page(
    400,
    "Something is missing",
    `<h1>Something is missing.</h1>
<ul>${errors.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
<p><a href="/#contact">Go back to the form</a>, or <a href="${esc(mailto(s, to))}">email it to ${esc(to)}</a> instead.</p>`,
  );
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
    return invalid(["The form did not arrive in a shape we could read."], { name: "", email: "", message: "", url: "" }, to);
  }
  const get = (k: string) => String(form.get(k) ?? "").trim();
  const s: Submission = { name: get("name"), email: get("email"), message: get("message"), url: get("url") };

  // Honeypot filled: a bot. Answer as if it worked and do nothing.
  if (get("company")) return thanks(s, true, to);

  const errors = validate(s);
  if (errors.length) return invalid(errors, s, to);

  if (env.TURNSTILE_SECRET_KEY) {
    const ok = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, get("cf-turnstile-response"), request.headers.get("cf-connecting-ip"));
    if (!ok) return invalid(["The spam check did not pass. Please try again."], s, to);
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
  return thanks(s, delivered, to);
}
