import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { Embers } from "./Embers";
import { EASE } from "../lib/motion";

const COMPARISON = [
  ["Large delivery teams", "Lean senior team"],
  ["Long build cycles", "Rapid iteration"],
  ["Heavy coordination", "Direct collaboration"],
  ["Ideas waiting on budget", "Ideas tested early"],
  ["Big upfront commitments", "Value proven quickly"],
];

export function ShiftComparison() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section shift section--grid">
      <Embers count={6} seed={41} />
      <div className="container shift-grid">
        <Reveal className="shift-copy">
          <p className="eyebrow">01 / THE SHIFT</p>
          <h2 className="h2 h2--split">
            The cost of building changed.{" "}
            <span className="h2-secondary">Your technology strategy should too.</span>
          </h2>
          <p className="text-muted">
            AI does not replace experience. It increases what experienced people can accomplish.
          </p>
          <p className="text-muted">
            ZAC uses that leverage to remove the layers between strategy and execution, so the
            people who help decide what should be built are the ones who build it.
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
                <span className="compare-then">{then}</span>
                <span className="compare-line" aria-hidden="true">
                  <motion.span
                    className="compare-line-fill"
                    initial={shouldReduceMotion ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                  />
                </span>
                <span className="compare-now">{now}</span>
              </li>
            ))}
          </ul>

          <div className="pull-quote">
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
