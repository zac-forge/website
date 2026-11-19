import { Reveal } from "./Reveal";
import { fixWeek } from "../pages/offers/fixWeek";
import type { Block } from "../pages/offers/types";

/** "Things we've fixed", the guarantee, and the close: the first block of
 *  the /fix-week page (Drew's copy handoff of 2026-11-18). */
const examples = fixWeek.blocks[0] as Extract<Block, { kind: "paragraphs" }>;

/**
 * The Fix Week, labelled "The Fix" in navigation, eyebrows, and buttons
 * (Drew, 2026-11-12). MB11 366:1368, 366:1367, 366:1370, on the ground with the
 * four-piece Z set 376:1748 to the right. The link to /fix-week stays from
 * the live page (the comp has none), so the offer page keeps its one
 * internal link from home.
 */
export function FixWeek() {
  return (
    <section id="fix-week" className="section fix-week" aria-labelledby="fix-week-heading">
      <div className="container art-split">
        <Reveal>
          <p className="eyebrow">The Fix</p>
          <h2 className="h2" id="fix-week-heading">
            <span className="h-light">One week. Start with</span> what matters{" "}
            <span className="h-light">most.</span>
          </h2>
          {fixWeek.intro.map((p) => (
            <p className="section-intro copy" key={p}>
              {p}
            </p>
          ))}
          <h3 className="h3 fix-week-examples-heading">{examples.heading}</h3>
          {[...examples.items, ...(examples.outro ?? [])].map((p) => (
            <p className="section-intro copy" key={p}>
              {p}
            </p>
          ))}
          <div className="cta-row fix-week-link">
            <a className="text-link" href="/fix-week">
              <span>What the Fix covers</span> <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
        <div className="art-split-art art-split-art--fixweek" aria-hidden="true">
          <img src="/art/mb11/fixweek-art.svg" width={317} height={214} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
