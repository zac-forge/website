import { Reveal } from "./Reveal";

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
          <p className="section-intro copy">
            When the scorecard shows something worth fixing, we fix it. In one week, the same senior
            people fix the top problem in your code, show you what makes your design look
            machine-made, and rank everything else by what it's worth. If what you have isn't worth
            saving, we'll say so and build it properly from the ground up. One price, agreed before
            we start.
          </p>
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
