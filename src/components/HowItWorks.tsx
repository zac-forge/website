import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUp, EASE } from "../lib/motion";

const PRINCIPLES = [
  { label: "SENIOR-LED", body: "No layers of junior account management." },
  { label: "AI-NATIVE", body: "Modern tools increase the output of experienced practitioners." },
  {
    label: "RIGHT-SIZED",
    body: "Bring in the expertise the work requires, then get out of the way.",
  },
];

const sequenceContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const sequenceItem = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Abstract glyphs only. Nothing here stands in for a real client or person. */
function SignalGlyph() {
  return (
    <svg className="node-glyph" viewBox="0 0 56 24" fill="none" aria-hidden="true">
      {[0, 8, 16].map((offset) => (
        <path
          key={offset}
          d={`M2 ${12 + offset - 8}c6-7 12 7 18 0s12 7 18 0 12 7 16 0`}
          stroke="var(--color-forge)"
          strokeOpacity={1 - offset / 26}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function SpecialistsGlyph() {
  return (
    <svg className="node-glyph" viewBox="0 0 62 24" fill="none" aria-hidden="true">
      {[13, 31, 49].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy="12" r="9" fill="var(--color-surface-2)" />
          <circle cx={cx} cy="12" r="9" stroke="var(--color-forge)" strokeOpacity={0.75 - i * 0.15} />
          <circle cx={cx} cy="12" r="3.2" fill="var(--color-forge)" fillOpacity={0.8 - i * 0.18} />
        </g>
      ))}
    </svg>
  );
}

function SystemGlyph() {
  return (
    <svg className="node-glyph" viewBox="0 0 56 26" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="55" height="25" rx="2.5" stroke="var(--color-border-hover)" />
      <path d="M9 19l10-8 9 5 8-9 11 6" stroke="var(--color-forge)" strokeWidth="1.5" />
      {[
        [9, 19],
        [19, 11],
        [28, 16],
        [36, 7],
        [47, 13],
      ].map(([cx, cy]) => (
        <circle key={`${cx}`} cx={cx} cy={cy} r="2" fill="var(--color-forge-hot)" />
      ))}
    </svg>
  );
}

const PRINCIPLE_RING = (
  <svg className="principle-ring" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="11" stroke="var(--color-forge)" strokeOpacity="0.35" />
    <circle cx="12" cy="12" r="6.5" stroke="var(--color-forge)" strokeOpacity="0.7" />
    <circle cx="12" cy="12" r="2.5" fill="var(--color-forge)" />
  </svg>
);

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="approach" className="section how-it-works section--grid">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / HOW ZAC WORKS</p>
        </Reveal>

        <motion.div
          className="sequence"
          variants={sequenceContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div className="sequence-node" variants={sequenceItem}>
            <SignalGlyph />
            <span>Your business</span>
          </motion.div>

          <motion.span className="sequence-arrow" variants={sequenceItem} aria-hidden="true">
            →
          </motion.span>

          <motion.div className="sequence-node sequence-node--zac" variants={sequenceItem}>
            <img src="/brand/zac-mark.svg" alt="" aria-hidden="true" />
            <span>ZAC</span>
          </motion.div>

          <motion.span className="sequence-arrow" variants={sequenceItem} aria-hidden="true">
            →
          </motion.span>

          <motion.div className="sequence-node" variants={sequenceItem}>
            <SpecialistsGlyph />
            <span>Senior specialists</span>
          </motion.div>

          <motion.span className="sequence-arrow" variants={sequenceItem} aria-hidden="true">
            →
          </motion.span>

          <motion.div className="sequence-node" variants={sequenceItem}>
            <SystemGlyph />
            <span>Working technology</span>
          </motion.div>
        </motion.div>

        <div className="how-grid">
          <Reveal className="how-copy">
            <h2 className="h3">One point of contact. A senior team behind it.</h2>
            <p className="text-muted">
              Strategy and execution stay connected. Our core team covers development, design, and
              technology strategy, and we bring in trusted senior specialists when a project calls
              for more depth. The team expands around the problem, not around an agency org chart.
            </p>
          </Reveal>

          <Reveal className="principles" stagger={0.1}>
            {PRINCIPLES.map((p) => (
              <motion.div className="principle" key={p.label} variants={fadeUp}>
                {PRINCIPLE_RING}
                <p className="eyebrow">{p.label}</p>
                <p className="text-muted">{p.body}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
