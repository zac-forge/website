import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { fadeUpSmall } from "../lib/motion";

const OFFERS = [
  {
    name: "Backlog Review",
    terms: "2 to 3 weeks, from $6,500",
    body: "You know something should work better, but not what to do first. We go through everything that has been shelved or never funded and tell you which of it is now affordable, what each would take, and which one to do first. Including what is not worth doing.",
    note: "Credited in full against a build started within 60 days.",
  },
  {
    name: "Two-Week Proof",
    terms: "2 weeks, $5,000",
    body: "You already know what you want. Pick the smallest real version of it. We build it in two weeks for a fixed price, and you finish with working software and a clear idea of what it is like to work with us.",
  },
];

/**
 * Deliberately the calmest section on the page. No Motes, no atmos layer, no
 * arc. The deck is explicit: this is what a serious buyer screenshots, so it
 * gets no atmosphere effects at all.
 */
export function StartHere() {
  return (
    <section id="start-here" className="section start-here">
      <div className="container">
        <Reveal className="start-intro">
          <p className="eyebrow">05 / START HERE</p>
          <h2 className="h2">Two ways in. Both small.</h2>
        </Reveal>

        <Reveal className="offer-grid" stagger={0.1}>
          {OFFERS.map((offer) => (
            <motion.article className="offer surface" key={offer.name} variants={fadeUpSmall}>
              <h3 className="offer-name">{offer.name}</h3>
              <p className="offer-terms">{offer.terms}</p>
              <p className="offer-body">{offer.body}</p>
              {offer.note ? <p className="offer-note">{offer.note}</p> : null}
            </motion.article>
          ))}
        </Reveal>

        <Reveal className="start-close">
          <p className="start-numbers">
            Every quote comes with two numbers: what the work would have cost the old way, and what
            it costs now.
          </p>
          <p className="start-nudge text-muted">Not sure which? That is what the call is for.</p>
          <div className="cta-row">
            <Magnetic>
              <a className="btn btn-primary" href={BOOKING_URL}>
                <span>Book a call</span>
                <span aria-hidden="true"> →</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
