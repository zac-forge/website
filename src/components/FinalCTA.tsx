import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { Embers } from "./Embers";
import { RedArc } from "./RedArc";
import { BOOKING_URL, CONTACT_EMAIL } from "../lib/links";

export function FinalCTA() {
  return (
    <section id="contact" className="section final-cta">
      <RedArc />
      {/* One light making a very slow pass along the limb. */}
      <span className="arc-traveller" aria-hidden="true" />
      <Embers count={10} seed={23} className="ember-field--horizon" />

      <div className="container">
        <Reveal>
          <p className="eyebrow">HAVE SOMETHING WORTH BUILDING?</p>
          {/* Plural by intent. ZAC is senior-led but operates as a studio with
              a curated specialist network, so the closing line carries the
              institutional voice and matches "See what we build" in the hero. */}
          <h2 className="h2 final-heading">Bring us the problem.</h2>
          <p className="final-body">
            Whether you know exactly what you need or only know something should work better,
            that is enough to start.
          </p>
          <div className="cta-row">
            <Magnetic>
              <a className="btn btn-primary" href={BOOKING_URL}>
                <span>Book a call</span>
                <span aria-hidden="true"> →</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-secondary" href={`mailto:${CONTACT_EMAIL}`}>
                Send a message
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
