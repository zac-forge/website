import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { fadeUpSmall } from "../lib/motion";

/** Five lines, shown in full: no accordion, no carousel. */
const QUESTIONS = [
  { q: "Does it work?", a: "Sign-in, forms, data, and what happens when it fails." },
  { q: "Is it fast?", a: "Measured on a real phone." },
  { q: "Can everyone use it?", a: "Keyboard, screen reader, WCAG 2.2 AA." },
  {
    q: "Can anyone find it?",
    a: "What ChatGPT, Google, and Perplexity say when a customer asks. Screenshots.",
  },
  { q: "Does it look like you?", a: "Our design principal's read." },
];

/**
 * The front door, and the visual stop on the page: comp 7's maroon band
 * (198:429) with its two sweeps, moved here from What changed by Drew on
 * 2026-11-04, as the copy deck asks. The five questions sit on it as white
 * cards. Logged for Misha, question 15. The paid step moved out to its own
 * section, FixWeek, in the copy pass of 2026-11-06.
 */
export function RealityCheck() {
  return (
    <section id="reality-check" className="section band band--maroon reality-check" aria-labelledby="reality-check-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 / The Reality Check</p>
          <h2 className="h2" id="reality-check-heading">
            Send us what you built. We'll tell you straight.
          </h2>
          <p className="section-intro section-intro--wide">
            Free. 5 questions. A one-page scorecard in plain English, with evidence and what a fix
            would take. Checked by people, not software.
          </p>
        </Reveal>

        <Reveal className="check-grid" stagger={0.08}>
          {QUESTIONS.map((item, i) => (
            <motion.div className="check surface" key={item.q} variants={fadeUpSmall}>
              <h3 className="check-title">
                <span className="check-number">{i + 1}.</span> {item.q}
              </h3>
              <p className="check-body">{item.a}</p>
            </motion.div>
          ))}
        </Reveal>

        <Reveal className="check-close">
          <div className="cta-row">
            <Magnetic>
              <a className="btn btn-primary" href="#contact">
                <span>Get a free Reality Check</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="btn btn-secondary" href={BOOKING_URL}>
              <span>Book a 20-minute call</span>
            </a>
            <a className="text-link" href="/reality-check">
              <span>How it works</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
