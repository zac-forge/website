import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { ZacMark } from "./Brand";
import { fadeUp, EASE } from "../lib/motion";

/**
 * The three principles, unchanged from v3, laid out as the board's three
 * numbered steps: title and body on one side, a circle on the other,
 * alternating. The circles are grey placeholders on the board and stay that
 * way here.
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
          stroke="var(--color-accent)"
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
          <circle cx={cx} cy="12" r="9" stroke="var(--color-accent)" strokeOpacity={0.75 - i * 0.15} />
          <circle cx={cx} cy="12" r="3.2" fill="var(--color-accent)" fillOpacity={0.8 - i * 0.18} />
        </g>
      ))}
    </svg>
  );
}

function SystemGlyph() {
  return (
    <svg className="node-glyph" viewBox="0 0 56 26" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="55" height="25" rx="2.5" stroke="var(--color-line)" />
      <path d="M9 19l10-8 9 5 8-9 11 6" stroke="var(--color-accent)" strokeWidth="1.5" />
      {[
        [9, 19],
        [19, 11],
        [28, 16],
        [36, 7],
        [47, 13],
      ].map(([cx, cy]) => (
        <circle key={`${cx}`} cx={cx} cy={cy} r="2" fill="var(--color-accent)" />
      ))}
    </svg>
  );
}

// Seven slots: node, arrow, node, arrow, node, arrow, node.
const STEPS = 7;
const STEP_MS = 240;

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();
  const sequenceRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sequenceRef, { once: true, amount: 0.4 });
  const [lit, setLit] = useState(-1);

  /**
   * A single pass of signal from the business through ZAC to working
   * technology, then it settles. `lit` is the position of the signal, not a
   * count, so the highlight travels rather than accumulating. Plays once.
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
          <motion.span className="sequence-arrow" variants={sequenceItem} aria-hidden="true" {...node(1)}>
            →
          </motion.span>
          <motion.div
            className="sequence-node sequence-node--zac"
            variants={sequenceItem}
            data-flare={lit === 2 ? "true" : "false"}
          >
            <ZacMark className="sequence-mark" />
            <span>ZAC</span>
          </motion.div>
          <motion.span className="sequence-arrow" variants={sequenceItem} aria-hidden="true" {...node(3)}>
            →
          </motion.span>
          <motion.div className="sequence-node" variants={sequenceItem} {...node(4)}>
            <SpecialistsGlyph />
            <span>Senior specialists</span>
          </motion.div>
          <motion.span className="sequence-arrow" variants={sequenceItem} aria-hidden="true" {...node(5)}>
            →
          </motion.span>
          <motion.div className="sequence-node" variants={sequenceItem} {...node(6)}>
            <SystemGlyph />
            <span>Working technology</span>
          </motion.div>
        </motion.div>

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
