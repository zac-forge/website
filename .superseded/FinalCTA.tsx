import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { ZacMark } from "./Brand";
import { BOOKING_URL, CONTACT_EMAIL } from "../lib/links";

/**
 * The board's closing block: accent headline, 505px body, the pill button,
 * and the mark over a white circle at the right (nodes 8:108, 43:369,
 * 43:364, 8:116, 42:346). Copy unchanged from v3.
 */
export function FinalCTA() {
  return (
    <section id="contact" className="section final-cta">
      <div className="container">
        <Reveal className="final-grid">
          <div>
            <p className="eyebrow">Have something worth building?</p>
            {/* Plural by intent. ZAC is senior-led but operates as a studio with
                a curated specialist network, so the closing line carries the
                institutional voice. */}
            <h2 className="h2 final-heading">Bring us the problem.</h2>
            <p className="final-body">
              Whether you know exactly what you need or only know something should work better,
              that is enough to start.
            </p>
            <div className="cta-row">
              <Magnetic>
                <a className="btn btn-primary" href={BOOKING_URL}>
                  <span>Book a call</span>
                  <span aria-hidden="true">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn btn-secondary" href={`mailto:${CONTACT_EMAIL}`}>
                  <span>Send a message</span>
                </a>
              </Magnetic>
            </div>
          </div>
          <div className="closing-circle surface" aria-hidden="true">
            <ZacMark />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
