import { Reveal } from "./Reveal";
import { BOOKING_URL, CONTACT_EMAIL } from "../lib/links";

export function FinalCTA() {
  return (
    <section id="contact" className="section final-cta">
      <div className="horizon-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">HAVE SOMETHING WORTH BUILDING?</p>
          <h2 className="h2">Bring me the problem.</h2>
          <p className="text-muted">
            Whether you know exactly what you need or just know something should work better,
            that is enough to start.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={BOOKING_URL}>
              <span>Book a call</span>
              <span aria-hidden="true"> →</span>
            </a>
            <a className="btn btn-secondary" href={`mailto:${CONTACT_EMAIL}`}>
              Send a message
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
