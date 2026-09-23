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
 * v4 hero copy in the board's hero layout: a two-tone headline with the
 * second clause in the accent, body copy, the pill button, and the Z
 * illustration (node 4:89) to the right. The headline does not contain
 * "AI": the offer name carries the word one section down.
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
            / ZAC / Senior web partner
          </motion.p>
          <motion.h1 className="h1" variants={item}>
            When a customer asks for a recommendation,{" "}
            <span className="text-accent">is your name in the answer?</span>
          </motion.h1>
          <motion.p className="hero-body" variants={item}>
            More of your customers now ask ChatGPT, Google, or Perplexity who to call. The answer
            names two or three businesses. We find out whether you are one of them, fix what keeps
            you out, and stay on as the senior team behind your website.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <Magnetic>
              <a className="btn btn-primary" href={BOOKING_URL}>
                <span>Book a call</span>
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="text-link" href="#services">
              <span>See what we check</span>
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
          <motion.p className="proof-line" variants={item}>
            19 years at IBM, including IBM.com. Systems we built in 2010 are still running.
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
