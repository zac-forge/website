import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { Callout } from "./Callout";
import { fadeUpSmall } from "../lib/motion";
import { RC_HOME_INTRO } from "../pages/offers/realityCheck";

/** The five questions, as questions only since 2026-11-22. The line under
 *  each is on /reality-check, under "What we check". */
const QUESTIONS = [
  "Does it work?",
  "Is it fast?",
  "Can everyone use it?",
  "Can anyone find it?",
  "Does it look like you?",
];

/**
 * Check, the first step of the page's spine, on MB11's blue band 360:1260
 * (curve top right, cut bottom left). Cut on 2026-11-22 (Drew's pass 1
 * handoff): heading, two intro lines, one button, and the "How it works"
 * link on the left, the five questions set large on the right, revealed in
 * sequence. The callout is the principle line from the removed How we work
 * section's Check step.
 */
export function RealityCheck() {
  return (
    <section id="reality-check" className="section band band--blue reality-check" aria-labelledby="reality-check-heading">
      <div className="container rc-grid">
        <Reveal className="rc-lead">
          <p className="eyebrow">
            <span className="eyebrow-step">Check</span> <span className="eyebrow-name">Reality Check</span>
          </p>
          <h2 className="h2 rc-heading" id="reality-check-heading">
            <span className="h-light">Send us what you built.</span> We'll tell you straight.
          </h2>
          {RC_HOME_INTRO.map((p) => (
            <p className="section-intro copy" key={p}>
              {p}
            </p>
          ))}
          <div className="cta-row rc-close">
            <Magnetic>
              <a className="btn btn-primary" href="#contact">
                <span>Get a free Reality Check</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="text-link" href="/reality-check">
              <span>How it works</span>
            </a>
          </div>
          <Callout>The people on the call do the work.</Callout>
        </Reveal>

        <Reveal className="rc-questions" stagger={0.12}>
          {QUESTIONS.map((q, i) => (
            <motion.h3 className="rc-question" key={q} variants={fadeUpSmall}>
              <span className="rc-question-number">{i + 1}.</span> {q}
            </motion.h3>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
