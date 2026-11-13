import { Reveal } from "./Reveal";
import { FlowRow } from "./FlowRow";

/**
 * MB11 places the three principles under the step each belongs to
 * (374:1738 to 374:1740), so they are no longer a separate row. Same words
 * as the live page.
 */
const PROCESS = [
  {
    title: "Check",
    icon: "/art/mb11/flow-check.svg",
    body: ["Free. You get: the scorecard and what a fix would take.", "The people on the call do the work."],
  },
  {
    title: "Fix",
    icon: "/art/mb11/flow-fix.svg",
    // "One week" links to /fix-week, so the step and the Fix section read
    // as one offer (Drew, 2026-11-12). No words added.
    body: [
      <>
        <a className="inline-link" href="/fix-week">
          One week
        </a>{" "}
        or one project, fixed price. You get: it done, in your code, before and after.
      </>,
      "We tell you what's not worth fixing.\nA lot of it isn't.",
    ],
  },
  {
    title: "Partner",
    icon: "/art/mb11/flow-partner.svg",
    body: [
      "Monthly, month to month. You get: one senior person who knows your site and improves it every month.",
      "You own the code, the accounts, and the files.",
      "If we vanished tomorrow, you'd be fine.",
    ],
  },
];

/**
 * How we work, MB11 369:1637 and 369:1636 with the two-piece Z (370:1640,
 * 370:1657) to the right, then the Check, Fix, Partner row.
 */
export function HowWeWork() {
  return (
    <section id="how-we-work" className="section how-we-work" aria-labelledby="how-we-work-heading">
      <div className="container">
        <Reveal className="art-split art-split--how">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="h2" id="how-we-work-heading">
              Check. Fix. Partner
            </h2>
          </div>
          <div className="art-split-art how-art" aria-hidden="true">
            <img className="how-art-a" src="/art/mb11/howwework-art-a.svg" width={194} height={195} alt="" loading="lazy" />
            <img className="how-art-b" src="/art/mb11/howwework-art-b.svg" width={126} height={126} alt="" loading="lazy" />
          </div>
        </Reveal>

        <FlowRow steps={PROCESS} label="Check, fix, partner" />
      </div>
    </section>
  );
}
