import { Reveal } from "./Reveal";

/**
 * 03 / The Fix Week, copy pass of 2026-11-06. Until then the paid step was a
 * paragraph under the Reality Check. It is its own section now, built only
 * from the existing primitives (eyebrow, h2, section intro, text link) on
 * the ground, so it adds no new style.
 */
export function FixWeek() {
  return (
    <section id="fix-week" className="section" aria-labelledby="fix-week-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / The Fix Week</p>
          <h2 className="h2" id="fix-week-heading">
            One week. Start with what matters most.
          </h2>
          <p className="section-intro section-intro--wide">
            When the scorecard shows something worth fixing, a senior team takes over. The top item
            resolved in your code, a Design Read on the screen that most looks machine-made, and the
            rest ranked. One price, agreed up front.
          </p>
          <div className="cta-row check-close">
            <a className="text-link" href="/fix-week">
              <span>What a Fix Week covers</span> <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
