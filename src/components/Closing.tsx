import { Reveal } from "./Reveal";
import { ZacMark } from "./Brand";
import { ContactForm } from "./ContactForm";

/**
 * Connect, MB11 391:1886 and 391:1885: eyebrow, heading, and the live
 * contact form, with the mark over a white circle beside it, as the comp's
 * screenshot of the form (384:1811) shows. The comp's stray "Principals"
 * (390:1884) is a leftover and is not built. Also rendered on
 * /reality-check, whose "How it works" points at "the form below".
 */
export function Closing() {
  return (
    <section id="contact" className="section closing" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal className="closing-grid">
          <div>
            <p className="eyebrow">Connect</p>
            <h2 className="h2 closing-heading" id="contact-heading">
              Send us <span className="h-light">what you built.</span>
            </h2>
            <ContactForm />
          </div>
          <div className="closing-circle surface" aria-hidden="true">
            <ZacMark />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
