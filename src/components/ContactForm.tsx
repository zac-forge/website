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
 * The v5 contact form (decision 40). Fields exactly as the copy deck lists
 * them. A plain HTML form posting to /api/contact, so it works with scripting
 * off and is complete in the prerendered markup.
 *
 * Two fallbacks so nothing is lost before the Resend and Turnstile keys exist:
 * the handler logs the submission and offers a prefilled mailto on its
 * thank-you page, and the email link here carries whatever has been typed.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [mailto, setMailto] = useState(() => mailtoFor({}));

  function sync() {
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "");
    setMailto(mailtoFor({ name: get("name"), email: get("email"), message: get("message"), url: get("url") }));
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

  return (
    <form
      ref={formRef}
      className="contact-form"
      method="post"
      action={CONTACT_ENDPOINT}
      onInput={sync}
    >
      <div className="field">
        <label className="field-label" htmlFor="contact-name">
          Name
        </label>
        <input className="field-input" id="contact-name" name="name" type="text" autoComplete="name" required maxLength={200} />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="contact-email">
          Email
        </label>
        <input className="field-input" id="contact-email" name="email" type="email" autoComplete="email" required maxLength={320} />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="contact-message">
          What did you build, and what's wrong with it?
        </label>
        <textarea className="field-input field-textarea" id="contact-message" name="message" rows={6} required maxLength={5000} />
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
          <button className="btn btn-primary" type="submit">
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
