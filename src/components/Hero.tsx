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
            TECHNOLOGY STUDIO
          </motion.p>
          <motion.h1 className="h1" variants={item}>
            The work you shelved is <span className="text-forge">back on the table.</span>
          </motion.h1>
          <motion.p className="hero-body text-muted" variants={item}>
            Every company has projects that were worth doing but never worth what they cost.
          </motion.p>
          {/* The three examples are the emotional hook, so they are set apart
              from the paragraph rather than running inside it. */}
          <motion.ul className="hero-examples" variants={item}>
            <li>The internal tool nobody funded.</li>
            <li>The integration that stayed manual.</li>
            <li>The reporting that still runs on a spreadsheet.</li>
          </motion.ul>
          <motion.p className="hero-body text-muted" variants={item}>
            Those projects did not fail a value test. They failed a price test.{" "}
            <span className="text-forge">The price changed.</span>
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <Magnetic>
              <a className="btn btn-primary" href={BOOKING_URL}>
                <span>Book a call</span>
                <span aria-hidden="true"> →</span>
              </a>
            </Magnetic>
            <a className="text-link" href="#track-record">
              <span>See what we have built</span>
              <span aria-hidden="true"> ↓</span>
            </a>
          </motion.div>
          <motion.p className="proof-line" variants={item}>
            15 years. Over 100 engagements. Systems still running after 16.
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
