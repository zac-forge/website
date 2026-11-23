import { Reveal } from "./Reveal";
import { Callout } from "./Callout";
import { step } from "../lib/reveal";
import { FIX_HOME, FIX_GUARANTEE } from "../pages/offers/fixWeek";

/**
 * Fix, the second step of the page's spine: the Fix Week, labelled "The
 * Fix" in navigation, eyebrows, and buttons (Drew, 2026-11-12). MB11
 * 366:1368, 366:1367, 366:1370, on the ground with the four-piece Z set
 * 376:1748 to the right. The heading and the intro up to its colon, then
 * the guarantee as a full-width type statement, then the three examples as
 * cards split into what was wrong and how it came out (whole sentences from
 * /fix-week, where the full examples are), a callout, and the link.
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

        <Reveal stagger>
          <h3 className="h3 fix-week-examples-heading reveal-item" style={step(0)}>
            {FIX_HOME.examplesHeading}
          </h3>
          <ul className="fix-examples">
            {FIX_HOME.examples.map((example, i) => (
              <li className="fix-example reveal-item" style={step(i + 1)} key={example.problem}>
                <p className="fix-example-problem case-text">{example.problem}</p>
                <p className="fix-example-outcome">{example.outcome}</p>
              </li>
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
