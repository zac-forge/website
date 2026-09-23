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

/**
 * v4 hero, per docs/site-copy-v4.md. The headline does not contain "AI": the
 * offer name carries the word one section down. The hero sells the fear of
 * being left out of the answer, and the proof line carries the durability
 * claim that used to be the headline.
 */
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
            SENIOR WEB PARTNER
          </motion.p>
          <motion.h1 className="h1" variants={item}>
            When a customer asks for a recommendation,{" "}
            <span className="text-forge">is your name in the answer?</span>
          </motion.h1>
          <motion.p className="hero-body text-muted" variants={item}>
            More of your customers now ask ChatGPT, Google, or Perplexity who to call. The answer
            names two or three businesses. We find out whether you are one of them, fix what keeps
            you out, and stay on as the senior team behind your website.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <Magnetic>
              <a className="btn btn-primary" href={BOOKING_URL}>
                <span>Book a call</span>
                <span aria-hidden="true"> →</span>
              </a>
            </Magnetic>
            <a className="text-link" href="#services">
              <span>See what we check</span>
              <span aria-hidden="true"> ↓</span>
            </a>
          </motion.div>
          <motion.p className="proof-line" variants={item}>
            19 years at IBM, including IBM.com. Systems we built in 2010 are still running.
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
