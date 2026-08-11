import { motion, useReducedMotion } from "motion/react";
import { HeroArt } from "./HeroArt";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { EASE, staggerContainer } from "../lib/motion";

const container = staggerContainer(0.1, 0.05);

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
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
            <span className="eyebrow-slash">/</span> ZAC <span className="eyebrow-slash">/</span>{" "}
            TECHNOLOGY + AI
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
          <motion.p className="proof-line" variants={item}>
            Senior-led. Specialist-supported. Built without agency overhead.
          </motion.p>
        </motion.div>

        {/* Deliberately not wrapped in a Motion element. Its entrance is a CSS
            animation on the image itself, because any transform or opacity on
            a wrapper would create a stacking context and break the screen
            blend that drops the artwork's black plate out. */}
        <HeroArt />
      </div>
    </section>
  );
}
