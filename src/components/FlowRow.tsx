import { motion, useReducedMotion } from "motion/react";
import { EASE, VIEWPORT } from "../lib/motion";

export type FlowStep = {
  title: string;
  /** MB11's ring icon for the step, a file in public/art/mb11/ (110 x 110). */
  icon?: string;
  /** One paragraph per entry. A line break inside a string entry is kept. */
  body?: React.ReactNode[];
};

const STEP_STAGGER = 0.18;

/**
 * MB11's step row (369:1639 to 374:1740): a ring icon per step, the title
 * under it, an arrow from each title to the next (371:1683, 371:1684), and
 * the step's paragraphs below.
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
          {step.icon ? (
            <img className="flow-figure" src={step.icon} width={110} height={110} alt="" aria-hidden="true" loading="lazy" />
          ) : (
            <div className="flow-figure placeholder" aria-hidden="true" />
          )}
          <h3 className="flow-title">{step.title}</h3>
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
          {step.body ? (
            <div className="flow-body case-text">
              {step.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
