import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { EASE } from "../lib/motion";

const COMPARISON = [
  ["Large delivery teams", "Lean senior team"],
  ["Long build cycles", "Rapid iteration"],
  ["Heavy coordination", "Direct collaboration"],
  ["Ideas waiting on budget", "Ideas tested early"],
  ["Big upfront commitments", "Value proven quickly"],
];

const ROW_STAGGER = 0.09;
const VIEW = { once: true, amount: 0.5 } as const;

export function ShiftComparison() {
  const shouldReduceMotion = useReducedMotion();

  // No ambient ember field here. In the motion hierarchy this section carries
  // exactly one thing, the one-shot signal that draws the comparison.
  // Continuous ambience belongs to the hero and the closing horizon, so motion
  // falls away through the information-heavy middle of the page and returns at
  // the end.
  return (
    <section className="section shift section--grid">
      <div className="container shift-grid">
        <Reveal className="shift-copy">
          <p className="eyebrow">02 / WHY NOW</p>
          <h2 className="h2 h2--split">
            The cost of building changed.{" "}
            <span className="h2-secondary">Your technology plan should too.</span>
          </h2>
          <p className="text-muted">
            Experience did not get cheaper. Judgment about what is worth building is still the hard
            part, and it still decides whether a project works.
          </p>
          <p className="text-muted">
            What changed is everything downstream of that decision. Experienced people now produce
            far more than they did two years ago, so the arithmetic that killed half your backlog no
            longer holds.
          </p>
        </Reveal>

        <Reveal className="shift-compare">
          <div className="compare-header">
            <span>THEN</span>
            <span className="text-forge">NOW</span>
          </div>
          <ul className="compare-list">
            {COMPARISON.map(([then, now], i) => {
              // Each row resolves in order: the line draws left to right, the
              // endpoint lights, then the NOW copy arrives. Once only.
              const base = i * ROW_STAGGER;
              return (
                <li key={then}>
                  <span className="compare-then">{then}</span>
                  <span className="compare-line" aria-hidden="true">
                    <motion.span
                      className="compare-line-fill"
                      initial={shouldReduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={VIEW}
                      transition={{ duration: 0.68, ease: EASE, delay: base }}
                    />
                    <motion.span
                      className="compare-node"
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.2 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={VIEW}
                      transition={{ duration: 0.34, ease: EASE, delay: base + 0.6 }}
                    />
                  </span>
                  <motion.span
                    className="compare-now"
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEW}
                    transition={{ duration: 0.45, ease: EASE, delay: base + 0.7 }}
                  >
                    {now}
                  </motion.span>
                </li>
              );
            })}
          </ul>

          <div className="pull-quote">
            <p className="h3">
              Less machinery around the work.
              <br />
              <span className="text-forge">More capability applied to it.</span>
            </p>
            {/* The site is the example. Concrete and checkable, which is the
                whole argument of this section in one number. */}
            <p className="pull-quote-proof">
              This site is the example. Domain name to live site, including design, email, hosting,
              and certificates: about 14 hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
