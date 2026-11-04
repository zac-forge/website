import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUp } from "../lib/motion";

/**
 * The three principles, unchanged from v3, laid out as the board's three
 * numbered steps: title and body on one side, a circle on the other,
 * alternating. The circles are grey placeholders on the board and stay that
 * way here. The v1 signal-flow row that used to sit above the steps was
 * retired on 2026-09-23 at Drew's request: it did not read in the flat
 * design.
 */
const PRINCIPLES = [
  {
    label: "Senior-led",
    body: "The person in the meeting is the person doing the work. There is no account manager between you and the build.",
  },
  {
    label: "Right-sized",
    body: "Specialists come in when the work needs them and leave when it does not. You are not funding a permanent bench.",
  },
  {
    label: "Built to keep",
    body: "Every project is pressure tested for security, usability, and scale against two decades of enterprise experience. Nothing ships because a tool produced it and it looked right. You own the code outright, and our systems are still running years after we handed them over.",
  },
];

export function HowItWorks() {
  return (
    <section id="approach" className="section how-it-works">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">04 / How we work</p>
            <h2 className="h2">One team. No layers.</h2>
            <p className="section-intro">
              Strategy and execution stay connected. Our core team covers development, design, and
              technology strategy, and we bring in trusted senior specialists when a project calls
              for more depth. The team expands around the problem, not around an agency org chart.
            </p>
          </div>
          {/* Nodes 8:69 and 8:86, composed at their board offsets. */}
          <div className="section-art section-art--how" aria-hidden="true">
            <img src="/art/z-how-a.svg" width={318} height={156} alt="" loading="lazy" />
            <img src="/art/z-how-b.svg" width={205} height={95} alt="" loading="lazy" />
          </div>
        </Reveal>

        <Reveal stagger={0.1}>
          <ol className="steps">
            {PRINCIPLES.map((p, i) => (
              <motion.li className="step" key={p.label} variants={fadeUp}>
                <div className="step-copy">
                  <h3 className="h3 step-title">
                    {i + 1} {p.label}
                  </h3>
                  <p className="step-body">{p.body}</p>
                </div>
                <div className="step-figure placeholder" aria-hidden="true" />
              </motion.li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
