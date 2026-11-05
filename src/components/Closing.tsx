import { Reveal } from "./Reveal";
import { ZacMark } from "./Brand";
import { ContactForm } from "./ContactForm";

/**
 * The closing block, v5: eyebrow, heading, and the contact form, with the
 * mark over a white circle beside it (v4 board 8:116 and 42:346; comp 7 draws
 * the big Z here instead, question 17). Also rendered on /reality-check,
 * whose "How it works" points at "the form below".
 */
export function Closing() {
  return (
    <section id="contact" className="section closing" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal className="closing-grid">
          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="h2 closing-heading" id="contact-heading">
              Bring us the problem.
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
