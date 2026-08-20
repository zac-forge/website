import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { ZacMark } from "./Brand";
import { Motes } from "./Motes";
import { fadeUp, EASE } from "../lib/motion";

const PRINCIPLES = [
  {
    label: "SENIOR-LED",
    body: "The person in the meeting is the person doing the work. There is no account manager between you and the build.",
  },
  {
    label: "RIGHT-SIZED",
    body: "Specialists come in when the work needs them and leave when it does not. You are not funding a permanent bench.",
  },
  {
    label: "BUILT TO KEEP",
    body: "Every project is pressure tested for security, usability, and scale against two decades of enterprise experience. Nothing ships because a tool produced it and it looked right. You own the code outright, and our systems are still running years after we handed them over.",
  },
];

const sequenceContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const sequenceItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
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

// Seven slots: node, arrow, node, arrow, node, arrow, node.
const STEPS = 7;
const STEP_MS = 240; // 7 steps lands the whole pass just under 1.7s

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();
  const sequenceRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sequenceRef, { once: true, amount: 0.4 });
  const [lit, setLit] = useState(-1);

  /**
   * A single pass of signal from the business through ZAC to working
   * technology, then it settles. `lit` is the position of the signal, not a
   * count, so the illumination travels rather than accumulating: leaving every
   * node warm afterwards would dilute ZAC as the source. It ends on -1, which
   * returns the graphite nodes to rest. Plays once, never loops.
   */
  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    const timers = Array.from({ length: STEPS }, (_, i) =>
      window.setTimeout(() => setLit(i), 260 + i * STEP_MS),
    );
    timers.push(window.setTimeout(() => setLit(-1), 260 + STEPS * STEP_MS));
    return () => timers.forEach(window.clearTimeout);
  }, [inView, shouldReduceMotion]);

  const node = (index: number) => ({ "data-lit": lit === index ? "true" : "false" });

  return (
    <section id="approach" className="section how-it-works section--grid">
      {/* Three points in the black to the right of the section label. The ZAC
          node energises its own surroundings via a halo in CSS; this section
          gets nothing beyond that. */}
      <Motes count={3} seed={17} className="mote-field--how" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">04 / HOW WE WORK</p>
        </Reveal>

        <motion.div
          ref={sequenceRef}
          className="sequence"
          variants={sequenceContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div className="sequence-node" variants={sequenceItem} {...node(0)}>
            <SignalGlyph />
            <span>Your business</span>
          </motion.div>

          <motion.span
            className="sequence-arrow"
            variants={sequenceItem}
            aria-hidden="true"
            {...node(1)}
          >
            →
          </motion.span>

          {/* ZAC is the energy source, so it is lit from the start rather than
              waiting for the signal to reach it. It does still flare as the
              signal passes through, on a fast rise and a slow settle, which is
              what makes the direction of travel readable. */}
          <motion.div
            className="sequence-node sequence-node--zac"
            variants={sequenceItem}
            data-flare={lit === 2 ? "true" : "false"}
          >
            <ZacMark className="sequence-mark" />
            <span>ZAC</span>
          </motion.div>

          <motion.span
            className="sequence-arrow"
            variants={sequenceItem}
            aria-hidden="true"
            {...node(3)}
          >
            →
          </motion.span>

          <motion.div className="sequence-node" variants={sequenceItem} {...node(4)}>
            <SpecialistsGlyph />
            <span>Senior specialists</span>
          </motion.div>

          <motion.span
            className="sequence-arrow"
            variants={sequenceItem}
            aria-hidden="true"
            {...node(5)}
          >
            →
          </motion.span>

          <motion.div className="sequence-node" variants={sequenceItem} {...node(6)}>
            <SystemGlyph />
            <span>Working technology</span>
          </motion.div>
        </motion.div>

        <div className="how-grid">
          <Reveal className="how-copy">
            <h2 className="h3">One team. No layers.</h2>
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
