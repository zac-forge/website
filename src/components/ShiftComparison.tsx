import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { EASE } from "../lib/motion";

const COMPARISON = [
  ["Ten links", "Three names"],
  ["Keywords", "Questions"],
  ["A ranking you can check", "An answer that changes run to run"],
  ["Your site as the brochure", "Your site as the source"],
  ["Tracked by position", "Tracked by how often you are named"],
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
    <section className="section shift">
      <div className="container shift-grid">
        <Reveal className="shift-copy">
          <p className="eyebrow">02 / What changed</p>
          <h2 className="h2 h2--split">
            Your customers stopped searching.{" "}
            <span className="h2-secondary">They started asking.</span>
          </h2>
          <p>
            For twenty years, people typed a few words into Google and chose from ten links. Now
            more of them ask an assistant and get a short answer with two or three names in it.
            There is no page two.
          </p>
          <p>
            Assistants decide who to name from what they can read: your site, your reviews, your
            listings, and what other sites say about you. Much of that is technical, and most of it
            is fixable.
          </p>
        </Reveal>

        <Reveal className="shift-compare">
          <div className="compare-header">
            <span>THEN</span>
            <span className="text-accent">NOW</span>
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
        </Reveal>
      </div>
    </section>
  );
}
