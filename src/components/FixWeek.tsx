import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Callout } from "./Callout";
import { fadeUpSmall } from "../lib/motion";
import { FIX_HOME, FIX_GUARANTEE } from "../pages/offers/fixWeek";

/**
 * Fix, the second step of the page's spine: the Fix Week, labelled "The
 * Fix" in navigation, eyebrows, and buttons (Drew, 2026-11-12). MB11
 * 366:1368, 366:1367, 366:1370, on the ground with the four-piece Z set
 * 376:1748 to the right. Cut on 2026-11-22 (Drew's pass 1 handoff): the
 * heading, the intro up to its colon, the guarantee set largest, the three
 * examples shortened by whole sentences (the full ones are on /fix-week),
 * and the link. The callout is the principle line from the removed How we
 * work section's Fix step.
 */
export function FixWeek() {
  return (
    <section id="fix-week" className="section fix-week" aria-labelledby="fix-week-heading">
      <div className="container">
        <div className="art-split">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-step">Fix</span> <span className="eyebrow-name">The Fix</span>
            </p>
            <h2 className="h2" id="fix-week-heading">
              <span className="h-light">One week. Start with</span> what matters{" "}
              <span className="h-light">most.</span>
            </h2>
            <p className="section-intro copy">{FIX_HOME.intro}</p>
          </Reveal>
          <div className="art-split-art art-split-art--fixweek" aria-hidden="true">
            <img src="/art/mb11/fixweek-art.svg" width={317} height={214} alt="" loading="lazy" />
          </div>
        </div>

        <Reveal>
          <p className="fix-guarantee">{FIX_GUARANTEE}</p>
        </Reveal>

        <Reveal stagger={0.08}>
          <h3 className="h3 fix-week-examples-heading">{FIX_HOME.examplesHeading}</h3>
          <ul className="fix-examples">
            {FIX_HOME.examples.map((p) => (
              <motion.li className="copy" key={p} variants={fadeUpSmall}>
                {p}
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="fix-week-close">
          <Callout>We tell you what's not worth fixing. A lot of it isn't.</Callout>
          <a className="text-link" href="/fix-week">
            <span>What the Fix covers</span> <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
