import { motion, useReducedMotion } from "motion/react";
import { Magnetic } from "./Magnetic";
import { SubpageHero } from "./SubpageHero";
import { BOOKING_URL } from "../lib/links";
import { EASE, staggerContainer } from "../lib/motion";

const container = staggerContainer(0.1, 0.05);

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

/**
 * Misha's home banner of 2026-11-13 (412:1907 and its siblings, cached in
 * design/home-hero/): the offer pages' swoosh band through SubpageHero's
 * home variant, with the header clear over it at the top, the headline,
 * subline, and buttons, and the gradient Z (412:1934, the same art as MB11's
 * 358:1060). The band has no dotted line art now. Copy is the live copy of 2026-11-06. The comp has no eyebrow or
 * booking pill here; the booking pill (Drew, 2026-11-05) stays. The proof
 * line under the buttons was removed by Drew on 2026-11-13. The OG cards
 * (public/og/) are drawn from this hero by `npm run og`; rerun it after a change.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SubpageHero variant="home">
      <div className="hero-grid">
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
            Send us your site, app, or brand. A senior person checks it against 5 questions and
            tells you what's wrong, in plain English. Free.
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
    </SubpageHero>
  );
}
