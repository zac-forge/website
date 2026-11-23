import { Reveal } from "./Reveal";
import { Callout } from "./Callout";
import { FixExamples, Statement } from "./FixExamples";
import { step } from "../lib/reveal";
import { PRINCIPLES } from "../pages/principles";
import { FIX_HOME, FIX_GUARANTEE } from "../pages/offers/fixWeek";

/**
 * Fix, the second step of the page's spine: the Fix Week, labelled "The
 * Fix" in navigation, eyebrows, and buttons (Drew, 2026-11-12). MB11
 * 366:1368, 366:1367, 366:1370, on the ground with the four-piece Z set
 * 376:1748 to the right. The heading and the intro up to its colon, then
 * the guarantee as a full-width type statement, then the three examples as
 * before-and-after cards (FixExamples, shared with /fix-week, which shows
 * them at full length), a callout, and the link.
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
          <Statement>{FIX_GUARANTEE}</Statement>
        </Reveal>

        <Reveal stagger>
          <h3 className="h3 fix-week-examples-heading reveal-item" style={step(0)}>
            {FIX_HOME.examplesHeading}
          </h3>
          <FixExamples examples={FIX_HOME.examples} first={1} />
        </Reveal>

        <Reveal className="fix-week-close">
          <Callout>{PRINCIPLES.fix}</Callout>
          <a className="text-link" href="/fix-week">
            <span>What the Fix covers</span> <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
