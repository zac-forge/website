import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { fadeUpSmall } from "../lib/motion";

/** Five lines, shown in full: no accordion, no carousel. */
const QUESTIONS = [
  { q: "Does it work?", a: "Security, sign-in, data, and what happens when something fails." },
  { q: "Is it fast?", a: "Load time and Core Web Vitals, measured, not guessed." },
  { q: "Can everyone use it?", a: "Keyboard and screen reader tests against WCAG 2.2 AA." },
  {
    q: "Can anyone find it?",
    a: "What ChatGPT, Google, and Perplexity say when a customer asks, with screenshots.",
  },
  {
    q: "Does it look like you, or like AI?",
    a: "Our design principal's read, and what one screen would look like done right.",
  },
];

/**
 * The front door, and the visual stop on the page: comp 7's maroon band
 * (198:429) with its two sweeps, moved here from What changed by Drew on
 * 2026-11-04, as the copy deck asks. The five questions sit on it as white
 * cards. Logged for Misha, question 15.
 */
export function RealityCheck() {
  return (
    <section id="reality-check" className="section band band--maroon reality-check" aria-labelledby="reality-check-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / The Reality Check</p>
          <h2 className="h2" id="reality-check-heading">
            Five questions. One straight answer.
          </h2>
          <p className="section-intro section-intro--wide">
            Free. Five questions. A short scorecard in plain English, with the evidence, and what it
            would take to fix. Whether it's a site, an app, a brand, a landing page, or a workflow,
            and whether AI made it or someone you hired did.
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
                <span>Get a Reality Check</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="btn btn-secondary" href={BOOKING_URL}>
              <span>Book a 20-minute call</span>
            </a>
            <a className="text-link" href="/reality-check">
              <span>How the check works</span>
            </a>
          </div>
          <p className="check-next">
            If something needs work, the next step is <strong>the Handoff.</strong> One week, one
            price agreed up front. We take the worst thing on the scorecard off your plate, redesign
            the one screen that looks most like AI made it, and hand back a ranked list of what's
            left.{" "}
            <a className="inline-link" href="/handoff">
              What the Handoff covers <span aria-hidden="true">→</span>
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
