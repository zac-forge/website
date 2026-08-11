import { motion, useReducedMotion } from "motion/react";
import { HeroForge } from "./HeroForge";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { EASE, staggerContainer } from "../lib/motion";

const container = staggerContainer(0.11, 0.06);

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE } },
};

const art = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.15, ease: EASE, delay: 0.24 },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <motion.div className="hero-copy" variants={container} initial={initial} animate="show">
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
            <Magnetic>
              <a className="btn btn-primary" href={BOOKING_URL}>
                <span>Book a call</span>
                <span aria-hidden="true"> →</span>
              </a>
            </Magnetic>
            <a className="text-link" href="#services">
              <span>See what we build</span>
              <span aria-hidden="true"> ↓</span>
            </a>
          </motion.div>
          <motion.p className="proof-line text-muted" variants={item}>
            Senior-led. Specialist-supported. Built without agency overhead.
          </motion.p>
        </motion.div>

        <motion.div className="hero-visual" variants={art} initial={initial} animate="show">
          <HeroForge />
        </motion.div>
      </div>
    </section>
  );
}
