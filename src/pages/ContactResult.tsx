import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Magnetic } from "../components/Magnetic";
import { mailtoFor } from "../components/ContactForm";
import { BOOKING_URL, CONTACT_EMAIL } from "../lib/links";

export type ContactResultVariant = "thanks" | "not-sent" | "error";

/** Values the contact handler fills in. Shape shared with functions/api/contact.ts. */
type ContactData = { firstName?: string; errors?: string[]; mailto?: string };

/**
 * The handler (functions/api/contact.ts) serves these prerendered pages,
 * rewrites the [data-slot] elements with the submission's values, and puts
 * the same values in #contact-data so hydration renders exactly what the
 * rewritten HTML already shows. Visited directly, each page shows its
 * neutral defaults.
 */
function readContactData(): ContactData {
  if (typeof document === "undefined") return {};
  try {
    return JSON.parse(document.getElementById("contact-data")?.textContent || "{}") as ContactData;
  } catch {
    return {};
  }
}

const NEXT_STEPS = [
  "Andrew replies within one business day to confirm we have what we need.",
  "We check it. A few days. We don't change anything.",
  "You get the scorecard. Five questions, plain English, by email. If something's worth doing, one agreed price to put it right. If not, we'll say so.",
];

function BackLink() {
  return (
    <a className="text-link" href="/">
      <span>Back to zacforge.com</span>
    </a>
  );
}

/**
 * The pages after the contact form, in the hero's layout: navy band with the
 * bottom-left sweep, copy left, the board's Z right. Copy for the thank-you
 * page set by Drew on 2026-11-04. The two other pages keep the wording the
 * handler has always used, except delivery failed, reworded by Drew on
 * 2026-11-04. All three are noindex and out of the sitemap.
 */
export default function ContactResult({ variant }: { variant: ContactResultVariant }) {
  const [data] = useState(readContactData);
  const mailto = data.mailto ?? mailtoFor({});
  const first = data.firstName ?? "";

  return (
    <>
      {/* The thank-you page drops the header's Reality Check button: the
          visitor has just asked for one. */}
      <Header hideCta={variant === "thanks"} />
      <main>
        <section id="top" className="result band band--navy">
          <div className="container result-grid">
            <div className="result-copy">
              {variant === "thanks" ? (
                <>
                  <p className="eyebrow">Got it</p>
                  <h1 className="h1 result-title">
                    Thanks<span data-slot="name">{first ? `, ${first}` : ""}</span>. We've got it.
                  </h1>
                  <p className="result-intro">Here's what happens next.</p>
                  <ol className="result-steps">
                    {NEXT_STEPS.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="result-line">Want to talk it through sooner?</p>
                  <div className="cta-row">
                    <Magnetic>
                      <a className="btn btn-primary" href={BOOKING_URL}>
                        <span>Book a 20-minute call</span>{" "}
                        <span aria-hidden="true">→</span>
                      </a>
                    </Magnetic>
                    <BackLink />
                  </div>
                </>
              ) : null}

              {variant === "not-sent" ? (
                <>
                  <h1 className="h1 result-title">Something went wrong on our end.</h1>
                  <p className="result-intro">
                    Your message didn't send. Nothing's wrong on your side.{" "}
                    <a className="inline-link" href={mailto} data-slot="mailto">
                      Email it to {CONTACT_EMAIL}
                    </a>{" "}
                    instead, or <a className="inline-link" href={BOOKING_URL}>book a 20-minute call</a>.
                  </p>
                  <div className="cta-row result-actions">
                    <Magnetic>
                      <a className="btn btn-primary" href={BOOKING_URL}>
                        <span>Book a 20-minute call</span>{" "}
                        <span aria-hidden="true">→</span>
                      </a>
                    </Magnetic>
                    <BackLink />
                  </div>
                </>
              ) : null}

              {variant === "error" ? (
                <>
                  <h1 className="h1 result-title">Something is missing.</h1>
                  <ul className="result-errors" data-slot="errors">
                    {(data.errors ?? []).map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                  <p className="result-line">
                    <a className="inline-link" href="/#contact">Go back to the form</a>, or{" "}
                    <a className="inline-link" href={mailto} data-slot="mailto">
                      email it to {CONTACT_EMAIL}
                    </a>{" "}
                    instead.
                  </p>
                  <div className="cta-row result-actions">
                    <BackLink />
                  </div>
                </>
              ) : null}
            </div>

            <div className="result-visual" aria-hidden="true">
              <img src="/art/z-hero.svg" width={358} height={311} alt="" decoding="async" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
