import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { HeroForge } from "./HeroForge";
import { BOOKING_URL } from "../lib/links";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={container}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
        >
          <motion.p className="eyebrow" variants={item}>
            ZAC / TECHNOLOGY + AI
          </motion.p>
          <motion.h1 className="h1" variants={item}>
            Technology has <span className="text-forge">new economics.</span>
          </motion.h1>
          <motion.p className="hero-body text-muted" variants={item}>
            AI changed what it takes to turn an idea into working technology. ZAC pairs senior
            judgment with AI-native execution to advise, design, and build faster than used to be
            possible, without cutting corners.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <a className="btn btn-primary" href={BOOKING_URL}>
              <span>Book a call</span>
              <span aria-hidden="true"> →</span>
            </a>
            <a className="text-link" href="#services">
              <span>See what we build</span>
              <span aria-hidden="true"> ↓</span>
            </a>
          </motion.div>
          <motion.p className="proof-line text-muted" variants={item}>
            Senior-led. Specialist-supported. Built without agency overhead.
          </motion.p>
        </motion.div>

        <Reveal className="hero-visual">
          <HeroForge />
        </Reveal>
      </div>
    </section>
  );
}
