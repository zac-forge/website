import { motion, useReducedMotion } from "motion/react";
import { Magnetic } from "./Magnetic";
import { BOOKING_URL } from "../lib/links";
import { EASE, staggerContainer } from "../lib/motion";

const container = staggerContainer(0.1, 0.05);

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

/**
 * v5 hero on comp 7's navy band (198:428) with the rounded sweep at the
 * bottom left. Copy set by Drew on 2026-11-04: the question leads, the 2010
 * proof moves to the proof line. Comp 7 sets its headline light with the
 * last phrase heavy; the build keeps sentence case (CLAUDE.md) and carries
 * that emphasis with the two existing weights. public/og-image.jpg is
 * rendered from this copy by tools/og-card.html, so change both together.
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
            / ZAC / A senior team
          </motion.p>
          <motion.h1 className="h1 hero-title" variants={item}>
            <span className="hero-title-light">Built it with AI?</span>{" "}
            <span>Find out if it actually works.</span>
          </motion.h1>
          <motion.p className="hero-body" variants={item}>
            Send us your site, app, or brand. Senior people check it on 5 questions and tell you
            straight. Free. A person reads it, not a scanner.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <Magnetic>
              <a className="btn btn-primary" href="/#contact">
                <span>Get a free Reality Check</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="btn btn-secondary" href={BOOKING_URL}>
              <span>Book a 20-minute call</span>
            </a>
            <a className="text-link" href="#track-record">
              <span>See what we've built</span>{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
          <motion.p className="proof-line" variants={item}>
            Decades of Fortune 50 experience. Systems we built in 2010 still run today.
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
