import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { Callout } from "./Callout";
import { QuestionStepper } from "./QuestionStepper";
import { realityCheck, RC_HOME_INTRO } from "../pages/offers/realityCheck";
import type { Block } from "../pages/offers/types";

/** The five questions and the line under each: the "What we check" block of
 *  /reality-check, word for word, so the two cannot drift. */
const QUESTIONS = (realityCheck.blocks[0] as Extract<Block, { kind: "numbered" }>).items;

/**
 * Check, the first step of the page's spine, on MB11's blue band 360:1260
 * (curve top right, cut bottom left): heading, two intro lines, one button,
 * and the "How it works" link on the left, the five questions as a stepper
 * (QuestionStepper, shared with /reality-check) on the right. The callout
 * is the principle line from the removed How we work section's Check step.
 */
export function RealityCheck() {
  return (
    <section id="reality-check" className="section band band--blue reality-check" aria-labelledby="reality-check-heading">
      <div className="container rc-grid">
        <Reveal className="rc-lead">
          <p className="eyebrow">
            <span className="eyebrow-step">Check</span> <span className="eyebrow-name">Reality Check</span>
          </p>
          <h2 className="h2 rc-heading" id="reality-check-heading">
            <span className="h-light">Send us what you built.</span> We'll tell you straight.
          </h2>
          {RC_HOME_INTRO.map((p) => (
            <p className="section-intro copy" key={p}>
              {p}
            </p>
          ))}
          <div className="cta-row rc-close">
            <Magnetic>
              <a className="btn btn-primary" href="#contact">
                <span>Get a free Reality Check</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <a className="text-link" href="/reality-check">
              <span>How it works</span>
            </a>
          </div>
          <Callout>The people on the call do the work.</Callout>
        </Reveal>

        <Reveal stagger>
          <QuestionStepper items={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
