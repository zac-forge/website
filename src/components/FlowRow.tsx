import { motion, useReducedMotion } from "motion/react";
import { EASE, VIEWPORT } from "../lib/motion";

export type FlowStep = { title: string; body?: string };

const STEP_STAGGER = 0.18;

/**
 * Comp 7's step row: a grey circle per step, an arrow to the next, the step
 * title under the circle (nodes 211:1257 to 211:1264 and the process row
 * 211:1346 to 211:1357). Used for the three-step row under What changed and
 * the process row under How we work.
 *
 * The arrows carry the one v1 interaction kept through every redesign, the
 * THEN and NOW row-draw: each line draws left to right once, in order, when
 * the row scrolls into view. Static with reduced motion, and the copy never
 * depends on it.
 */
export function FlowRow({ steps, label }: { steps: FlowStep[]; label: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ol className="flow" aria-label={label} style={{ "--flow-count": steps.length } as React.CSSProperties}>
      {steps.map((step, i) => (
        <li className="flow-step" key={step.title}>
          <div className="flow-figure placeholder" aria-hidden="true" />
          {i < steps.length - 1 ? (
            <motion.span
              className="flow-arrow"
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.68, ease: EASE, delay: 0.2 + i * STEP_STAGGER }}
            />
          ) : null}
          <h3 className="flow-title">{step.title}</h3>
          {step.body ? <p className="flow-body">{step.body}</p> : null}
        </li>
      ))}
    </ol>
  );
}
