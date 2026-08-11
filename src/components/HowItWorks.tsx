import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { fadeUp } from "../lib/motion";

const PRINCIPLES = [
  { label: "SENIOR-LED", body: "No layers of junior account management." },
  { label: "AI-NATIVE", body: "Modern tools multiply the output of experienced people." },
  { label: "RIGHT-SIZED", body: "Bring in the expertise the work requires, then get out of the way." },
];

const sequenceContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const sequenceItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

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
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="sequence-node" variants={sequenceItem}>
            Your business
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
            Senior specialists
          </motion.div>
          <motion.span className="sequence-arrow" variants={sequenceItem} aria-hidden="true">
            →
          </motion.span>
          <motion.div className="sequence-node" variants={sequenceItem}>
            Working technology
          </motion.div>
        </motion.div>

        <div className="how-grid">
          <Reveal className="how-copy">
            <h2 className="h2">One point of contact. A senior team behind it.</h2>
            <p className="text-muted">
              Strategy and execution stay connected. Our core team covers development, design,
              and technology strategy, and we bring in trusted senior specialists when a project
              calls for more depth. The team expands around the problem, not around an agency org
              chart.
            </p>
          </Reveal>

          <Reveal className="principles" stagger={0.1}>
            {PRINCIPLES.map((p) => (
              <motion.div className="principle surface" key={p.label} variants={fadeUp}>
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
