import { useEffect, useState } from "react";
import { TrapIllustration, SteadyIllustration, RankIllustration } from "./FixIllustrations";
import { step, prefersReducedMotion } from "../lib/reveal";
import type { FixExample } from "../pages/offers/types";

/** The category chip and the illustration for each example, in the order of
 *  the examples in fixWeek.ts: the carousel, the hacked site, the SEO work. */
const KINDS = [
  { chip: "Accessibility", Illustration: TrapIllustration },
  { chip: "Security", Illustration: SteadyIllustration },
  { chip: "SEO", Illustration: RankIllustration },
];

/**
 * One before-and-after card: the illustration, which plays from the broken
 * state to the fixed one when the card is revealed, the category chip, what
 * was wrong, and the outcome band. Hovering the card replays the
 * illustration, and so does the illustration itself, which is a button once
 * the script is running and motion is allowed (so it is in the tab order
 * only when it does something). Remounting the SVG by key restarts its CSS
 * animations.
 */
function ExampleCard({ example, index, first }: { example: FixExample; index: number; first: number }) {
  const { chip, Illustration } = KINDS[index % KINDS.length];
  const [run, setRun] = useState(0);
  const [canReplay, setCanReplay] = useState(false);
  useEffect(() => setCanReplay(!prefersReducedMotion()), []);
  const replay = () => setRun((n) => n + 1);

  return (
    <li
      className="fix-example reveal-item"
      style={step(index + first)}
      onPointerEnter={(e) => e.pointerType === "mouse" && canReplay && replay()}
    >
      {canReplay ? (
        <button type="button" className="fix-example-ill" aria-label={`Replay the ${chip} illustration`} onClick={replay}>
          <Illustration key={run} />
        </button>
      ) : (
        <div className="fix-example-ill">
          <Illustration />
        </div>
      )}
      <div className="fix-example-body">
        <p className="chip">{chip}</p>
        <p className="fix-example-problem case-text">{example.problem}</p>
      </div>
      <p className="fix-example-outcome">
        <span>{example.outcome}</span>
      </p>
    </li>
  );
}

/**
 * The "Things we've fixed" cards, shared by the home Fix section (the short
 * examples) and /fix-week (the full ones), both from fixWeek.ts. Place it
 * inside `<Reveal stagger>`. `first` is the stagger position of the first
 * card, for when a heading is revealed ahead of the cards.
 */
export function FixExamples({ examples, first = 0 }: { examples: FixExample[]; first?: number }) {
  return (
    <ul className="fix-examples">
      {examples.map((example, i) => (
        <ExampleCard example={example} index={i} first={first} key={example.problem} />
      ))}
    </ul>
  );
}

/** The guarantee, or any one-line promise, as a full-width type statement. */
export function Statement({ children }: { children: React.ReactNode }) {
  return <p className="fix-guarantee">{children}</p>;
}
