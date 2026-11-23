import { useEffect, useRef, useState } from "react";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_ENDPOINT, TURNSTILE_SITE_KEY } from "../lib/links";

const SUBJECT = "Reality Check request";

/** The same fields the form posts, as a mailto link, so nothing depends on the backend. */
export function mailtoFor(fields: { name?: string; email?: string; message?: string; url?: string }) {
  const body = [
    `Name: ${fields.name ?? ""}`,
    `Email: ${fields.email ?? ""}`,
    `Link: ${fields.url ?? ""}`,
    "",
    "What did you build, and what's wrong with it?",
    (fields.message ?? "").slice(0, 1500),
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`;
}

/**
 * The inline messages, in the handler's own words (functions/api/contact.ts,
 * `validate`), with its email test, so the form and the result page say the
 * same thing about the same mistake.
 */
type Checked = "name" | "email" | "message";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CHECKS: Record<Checked, { ok: (v: string) => boolean; message: string }> = {
  name: { ok: (v) => v.trim() !== "", message: "Please add your name." },
  email: { ok: (v) => EMAIL.test(v.trim()), message: "Please add an email address we can reply to." },
  message: { ok: (v) => v.trim() !== "", message: "Please tell us what you built, and what's wrong with it." },
};
type FieldState = "valid" | "invalid" | undefined;

/**
 * The v5 contact form (decision 40). Fields exactly as the copy deck lists
 * them. A plain HTML form posting to /api/contact, so it works with scripting
 * off and is complete in the prerendered markup.
 *
 * With scripting on it validates inline: a field is checked when focus
 * leaves it and on submit, its message sits under it (tied to it with
 * aria-describedby, and aria-invalid set), a submit with a mistake moves
 * focus to the first field that needs fixing, and a field that passes shows
 * a mark. With scripting off the browser's own required and email checks
 * apply, and the handler validates either way.
 *
 * Two fallbacks so nothing is lost before the Resend and Turnstile keys exist:
 * the handler logs the submission and offers a prefilled mailto on its
 * thank-you page, and the email link here carries whatever has been typed.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [mailto, setMailto] = useState(() => mailtoFor({}));
  const [enhanced, setEnhanced] = useState(false);
  const [state, setState] = useState<Partial<Record<Checked, FieldState>>>({});
  const [sending, setSending] = useState(false);

  useEffect(() => setEnhanced(true), []);

  const valueOf = (name: string) => String(new FormData(formRef.current!).get(name) ?? "");

  function check(name: Checked) {
    const result: FieldState = CHECKS[name].ok(valueOf(name)) ? "valid" : "invalid";
    setState((s) => ({ ...s, [name]: result }));
    return result === "valid";
  }

  function sync(e: React.FormEvent<HTMLFormElement>) {
    const form = formRef.current;
    if (!form) return;
    setMailto(mailtoFor({ name: valueOf("name"), email: valueOf("email"), message: valueOf("message"), url: valueOf("url") }));
    // A field already marked wrong clears as soon as it is right.
    const name = (e.target as HTMLInputElement).name as Checked;
    if (state[name] === "invalid" && CHECKS[name]?.ok(valueOf(name))) check(name);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const failed = (Object.keys(CHECKS) as Checked[]).filter((name) => !check(name));
    if (failed.length) {
      e.preventDefault();
      formRef.current?.querySelector<HTMLElement>(`[name="${failed[0]}"]`)?.focus();
      return;
    }
    setSending(true);
  }

  // Turnstile renders into the .cf-turnstile element once its script runs.
  // Loaded only when a site key was present at build time.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    const id = "cf-turnstile-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }, []);

  /** The attributes a checked field carries, and the message under it. */
  const fieldProps = (name: Checked) => ({
    name,
    required: true,
    "aria-invalid": state[name] === "invalid" ? true : undefined,
    "aria-describedby": state[name] === "invalid" ? `contact-${name}-error` : undefined,
    onBlur: () => {
      if (valueOf(name) !== "" || state[name]) check(name);
    },
  });
  const error = (name: Checked) =>
    state[name] === "invalid" ? (
      <p className="field-error" id={`contact-${name}-error`}>
        {CHECKS[name].message}
      </p>
    ) : null;

  return (
    <form
      ref={formRef}
      className="contact-form"
      method="post"
      action={CONTACT_ENDPOINT}
      noValidate={enhanced}
      onInput={sync}
      onSubmit={onSubmit}
      data-sending={sending || undefined}
    >
      <div className="field" data-state={state.name}>
        <label className="field-label" htmlFor="contact-name">
          Name
        </label>
        <input className="field-input" id="contact-name" type="text" autoComplete="name" maxLength={200} {...fieldProps("name")} />
        {error("name")}
      </div>
      <div className="field" data-state={state.email}>
        <label className="field-label" htmlFor="contact-email">
          Email
        </label>
        <input className="field-input" id="contact-email" type="email" autoComplete="email" maxLength={320} {...fieldProps("email")} />
        {error("email")}
      </div>
      <div className="field" data-state={state.message}>
        <label className="field-label" htmlFor="contact-message">
          What did you build, and what's wrong with it?
        </label>
        <textarea className="field-input field-textarea" id="contact-message" rows={6} maxLength={5000} {...fieldProps("message")} />
        {error("message")}
      </div>
      <div className="field">
        <label className="field-label" htmlFor="contact-url">
          Link to it (optional)
        </label>
        {/* Text, not type=url: "example.com" without a scheme is a fine answer. */}
        <input className="field-input" id="contact-url" name="url" type="text" inputMode="url" autoComplete="url" maxLength={500} />
      </div>

      {/* Honeypot. Hidden from people and assistive tech, filled by bots. */}
      <div className="field-trap" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {TURNSTILE_SITE_KEY ? <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} /> : null}

      <div className="cta-row contact-actions">
        <Magnetic>
          <button className="btn btn-primary" type="submit" aria-busy={sending || undefined}>
            <span>Send it</span>{" "}
            <span aria-hidden="true">→</span>
          </button>
        </Magnetic>
        <a className="btn btn-secondary" href={BOOKING_URL}>
          <span>Book a 20-minute call</span>
        </a>
      </div>
      <p className="contact-alt">
        <a href={mailto}>Or email {CONTACT_EMAIL}</a>
      </p>
    </form>
  );
}
