import { motion, useReducedMotion } from "motion/react";
import { Magnetic } from "./Magnetic";
import { EASE, staggerContainer } from "../lib/motion";

const container = staggerContainer(0.1, 0.05);

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

/**
 * v5 hero on comp 7's navy band (198:428) with the rounded sweep at the
 * bottom left. Misha's headline is the H1, the proof. The problem line is the
 * body. Comp 7 sets the headline in light caps with "still running" heavy:
 * the build keeps sentence case (CLAUDE.md) and carries the emphasis with the
 * two existing weights.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero band band--navy">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={container}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
        >
          <motion.p className="eyebrow" variants={item}>
            / ZAC / Senior team, plain answers
          </motion.p>
          <motion.h1 className="h1 hero-title" variants={item}>
            <span className="hero-title-light">The systems we built in 2010 are</span>{" "}
            <span>still running.</span>
          </motion.h1>
          <motion.p className="hero-body" variants={item}>
            AI made everyone an IT expert. It didn't make it work. If you built something with AI
            this year, or paid someone who did, and it half works, looks like everyone else's, or
            nobody can find it, send it to us. We'll check it, free, and tell you straight.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <Magnetic>
              <a className="btn btn-primary" href="#reality-check">
                <span>Get a Reality Check</span>
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="text-link" href="#track-record">
              <span>See what we've built</span>
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
          <motion.p className="proof-line" variants={item}>
            19 years at IBM, including IBM.com, and a practice run alongside it since 2010 for
            clients who still run what we built.
          </motion.p>
        </motion.div>

        {/* Entrance is a CSS animation on the image itself, in motion.css. */}
        <div className="hero-visual" aria-hidden="true">
          <img
            className="hero-art"
            src="/art/z-hero.svg"
            width={358}
            height={311}
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
