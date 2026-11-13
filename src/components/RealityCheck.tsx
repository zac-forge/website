import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { fadeUpSmall } from "../lib/motion";

/**
 * MB11's four icon points (365:1297 to 365:1345 over 365:1329 to 365:1336),
 * in the comp's wording (Drew, 2026-11-12).
 */
const POINTS = [
  { icon: "icon-free", w: 88, h: 41, text: "Completely FREE assessment" },
  { icon: "icon-question", w: 64, h: 63, text: "Short list of 5 questions" },
  {
    icon: "icon-scorecard",
    w: 51,
    h: 64,
    text: "A one-page scorecard in plain English, with evidence and what a fix would take.",
  },
  { icon: "icon-people", w: 72, h: 67, text: "Checked by people, not software." },
];

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
 * The front door, on MB11's blue band 360:1260 (curve top right, cut bottom
 * left): heading, four icon points, a dotted rule, the five questions
 * numbered 1 to 5 (the comp numbers only 2 and 4), and the button. The
 * booking pill and the "How it works" link to /reality-check stay from the
 * live page; the comp has the button only.
 */
export function RealityCheck() {
  return (
    <section id="reality-check" className="section band band--blue reality-check" aria-labelledby="reality-check-heading">
      <img className="band-lines band-lines--rc" src="/art/mb11/lines-reality-check.svg" width={1280} height={966} alt="" aria-hidden="true" loading="lazy" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">Reality Check</p>
          <h2 className="h2 rc-heading" id="reality-check-heading">
            <span className="h-light">Send us what you built.</span> We'll tell you straight.
          </h2>
        </Reveal>

        <Reveal className="rc-points" stagger={0.06}>
          {POINTS.map((p) => (
            <motion.div className="rc-point" key={p.icon} variants={fadeUpSmall}>
              <span className="rc-point-icon" aria-hidden="true">
                <img src={`/art/mb11/${p.icon}.svg`} width={p.w} height={p.h} alt="" loading="lazy" />
              </span>
              <p className="rc-point-text copy">{p.text}</p>
            </motion.div>
          ))}
        </Reveal>

        <div className="rc-rule" aria-hidden="true" />

        <Reveal className="rc-questions" stagger={0.06}>
          {QUESTIONS.map((item, i) => (
            <motion.div className="rc-question" key={item.q} variants={fadeUpSmall}>
              <h3 className="rc-question-title">
                <span className="rc-question-number">{i + 1}.</span> {item.q}
              </h3>
              <p className="rc-question-body copy">{item.a}</p>
            </motion.div>
          ))}
        </Reveal>

        <Reveal className="rc-close">
          <div className="cta-row">
            <Magnetic>
              <a className="btn btn-primary" href="#contact">
                <span>FREE Reality Check</span>{" "}
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
