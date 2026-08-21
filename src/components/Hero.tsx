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
            The systems we built in 2010 are{" "}
            <span className="text-forge">still running.</span>
          </motion.h1>
          <motion.p className="hero-body text-muted" variants={item}>
            Most custom software does not survive the people who built it. The team moves on, the
            documentation was never written, and in a few years someone is paying to rebuild it.
          </motion.p>
          {/* The promise, set apart from the paragraph. The headline is the
              proof, so these are what the buyer actually gets rather than a
              second recital of the case studies. */}
          <motion.ul className="hero-examples" variants={item}>
            <li>You own the code outright.</li>
            <li>Your team runs it without us.</li>
            <li>It is still working years after handover.</li>
          </motion.ul>
          <motion.p className="hero-body text-muted" variants={item}>
            Most software is disposable. <span className="text-forge">Ours has not been.</span>
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
            15 years. Over 100 engagements. Live since 2010 and still in production.
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
