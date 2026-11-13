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
 * MB11 hero (357:796, 357:1058, 357:1034) on the blue band 357:764 with its
 * angled cut at the bottom left, the gradient Z (358:1060), and the dotted
 * line art. Copy is the live copy of 2026-11-06. The comp has no eyebrow,
 * booking pill, or proof line here; the booking pill (Drew, 2026-11-05) and
 * the proof line (CLAUDE.md: Fortune 50 and 2010 carry the proof) stay, and
 * both are on the list for Misha. public/og-image.jpg is rendered from this
 * copy by tools/og-card.html, so change both together.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero band band--blue">
      <img className="band-lines band-lines--hero" src="/art/mb11/lines-hero.svg" width={1280} height={568} alt="" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={container}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
        >
          <motion.h1 className="h1 hero-title" variants={item}>
            <span className="h-light hero-title-lead">Built it with AI?</span>{" "}
            <span>Find out if it actually works.</span>
          </motion.h1>
          <motion.p className="hero-body copy" variants={item}>
            Send us your site, app, or brand. Senior people check it on 5 questions and tell you
            straight. Free. A person reads it, not a scanner.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <Magnetic>
              <a className="btn btn-primary" href="/#contact">
                <span>FREE Reality Check</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="btn btn-secondary" href={BOOKING_URL}>
              <span>Book a 20-minute call</span>
            </a>
          </motion.div>
          <motion.p className="proof-line copy" variants={item}>
            Decades of Fortune 50 experience. Systems we built in 2010 still run today.
          </motion.p>
        </motion.div>

        {/* Entrance is a CSS animation on the image itself, in motion.css. */}
        <div className="hero-visual" aria-hidden="true">
          <img
            className="hero-art"
            src="/art/mb11/hero-z.svg"
            width={334}
            height={290}
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
