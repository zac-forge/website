import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

const COMPARISON = [
  ["Large delivery teams", "Lean senior team"],
  ["Long build cycles", "Rapid iteration"],
  ["Heavy coordination", "Direct collaboration"],
  ["Ideas waiting on budget", "Ideas tested early"],
];

export function ShiftComparison() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section shift">
      <div className="container shift-grid">
        <Reveal className="shift-copy">
          <p className="eyebrow">01 / THE SHIFT</p>
          <h2 className="h2">The cost of building changed. Your strategy should too.</h2>
          <p className="text-muted">
            AI does not replace experience. It multiplies what experienced people can do. ZAC uses
            that leverage to collapse the layers between strategy and execution, so the people who
            help decide what to build are the ones who build it.
          </p>
        </Reveal>

        <Reveal className="shift-compare">
          <div className="compare-header">
            <span>THEN</span>
            <span className="text-forge">NOW</span>
          </div>
          <ul className="compare-list">
            {COMPARISON.map(([then, now], i) => (
              <li key={then}>
                <span>{then}</span>
                <span className="compare-line" aria-hidden="true">
                  <motion.span
                    className="compare-line-fill"
                    initial={shouldReduceMotion ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 }}
                  />
                </span>
                <span className="text-forge">{now}</span>
              </li>
            ))}
          </ul>
          <div className="pull-quote surface">
            <p className="h3">
              Less machinery around the work.
              <br />
              <span className="text-forge">More capability applied to it.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
