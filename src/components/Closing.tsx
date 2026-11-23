import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { ZacMark } from "./Brand";
import { ContactForm } from "./ContactForm";

/**
 * Connect, MB11 391:1886 and 391:1885: eyebrow, heading, and the live
 * contact form, with the mark over a white circle beside it, as the comp's
 * screenshot of the form (384:1811) shows. The comp's stray "Principals"
 * (390:1884) is a leftover and is not built. Home and /reality-check end
 * with the form.
 *
 * Every other page ends with the same section holding a button in place of
 * the form (`cta`, 2026-11-22): the same eyebrow, heading, and mark, and
 * the page's own existing call to action, so one component closes every
 * page and a change here reaches all of them.
 */
export function Closing({ cta }: { cta?: { label: string; href: string } } = {}) {
  return (
    <section
      id={cta ? undefined : "contact"}
      className={`section closing${cta ? " closing--cta" : ""}`}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <Reveal className="closing-grid">
          <div>
            <p className="eyebrow">Connect</p>
            <h2 className="h2 closing-heading" id="contact-heading">
              Send us <span className="h-light">what you built</span>
            </h2>
            {cta ? (
              <div className="cta-row closing-cta">
                <Magnetic>
                  <a className="btn btn-primary" href={cta.href}>
                    <span>{cta.label}</span>{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                </Magnetic>
              </div>
            ) : (
              <ContactForm />
            )}
          </div>
          <div className="closing-circle surface" aria-hidden="true">
            <ZacMark />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
