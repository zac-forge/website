import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { fadeUpSmall } from "../lib/motion";

/** Two snapshots, no prices. The v3 Backlog Review and Two-Week Proof are retired. */
const SNAPSHOTS = [
  {
    name: "AI Visibility Snapshot",
    body: "We run 20 of your customers' real questions through ChatGPT, Google, Perplexity, and Claude, compare you with three competitors, and check whether the assistants can read your site at all. Then we walk you through the five fixes that matter most. Results in about a week.",
  },
  {
    name: "Accessibility and Performance Snapshot",
    body: "We test your key pages by hand with a keyboard and a screen reader, measure page weight and load time, and give you the top issues in plain English, ranked by risk. Results in about a week.",
  },
];

/**
 * Deliberately the calmest section on the page. No Motes, no atmos layer, no
 * arc. Two equal cards, per the deck's note for Misha.
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
          {SNAPSHOTS.map((offer) => (
            <motion.article className="offer surface" key={offer.name} variants={fadeUpSmall}>
              <h3 className="offer-name">{offer.name}</h3>
              <p className="offer-body">{offer.body}</p>
            </motion.article>
          ))}
        </Reveal>

        <Reveal className="start-close">
          <p className="start-numbers">Either one credits toward a Web Partner plan.</p>
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
