import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { Embers } from "./Embers";
import { BOOKING_URL, CONTACT_EMAIL } from "../lib/links";

export function FinalCTA() {
  return (
    <section id="contact" className="section final-cta">
      {/* The red planetary horizon from the reference mockup: a bloom, the
          lit limb itself, and embers rising off it. */}
      <div className="horizon" aria-hidden="true">
        <div className="horizon-bloom" />
        <div className="horizon-arc" />
      </div>
      <Embers count={14} seed={23} className="ember-field--horizon" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">HAVE SOMETHING WORTH BUILDING?</p>
          <h2 className="h2">Bring us the problem.</h2>
          <p className="text-muted">
            Whether you know exactly what you need or just know something should work better,
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
