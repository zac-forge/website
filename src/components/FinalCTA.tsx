import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { Motes } from "./Motes";
import { HorizonField } from "./HorizonField";
import { RedArc } from "./RedArc";
import { BOOKING_URL, CONTACT_EMAIL } from "../lib/links";

export function FinalCTA() {
  return (
    <section id="contact" className="section final-cta">
      <RedArc />
      {/* Seven lights making slow passes along the limb, plus embers lifting
          off the planet surface. */}
      <HorizonField />
      {/* Energy travelling through the horizon rather than the image sliding:
          a soft heat band drifting along the limb on a 15s cycle. */}
      <span className="arc-heat" aria-hidden="true" />
      {/* Two distant points, nothing more. The limb is the visual event here,
          so this section gets no field. */}
      <Motes count={2} seed={23} className="mote-field--horizon" />

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
