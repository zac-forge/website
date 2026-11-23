import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { Callout } from "./Callout";
import { step } from "../lib/reveal";
import { realityCheck, RC_HOME_INTRO } from "../pages/offers/realityCheck";
import type { Block } from "../pages/offers/types";

/** The five questions and the line under each: the "What we check" block of
 *  /reality-check, word for word, so the two cannot drift. */
const QUESTIONS = (realityCheck.blocks[0] as Extract<Block, { kind: "numbered" }>).items;

/**
 * The five questions as a stepper: one question open at a time, the first
 * by default, its description revealed under it. A disclosure list: each
 * question is a real button with aria-expanded and aria-controls, Enter and
 * Space open it, and the arrow keys, Home, and End move between questions.
 *
 * With scripting off every description shows: the collapsed state is CSS
 * under `html.js`, and aria-expanded is only set once the script is running,
 * so the markup never claims a panel is closed when it is visible.
 */
function QuestionStepper() {
  const [open, setOpen] = useState(0);
  const [ready, setReady] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => setReady(true), []);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const last = QUESTIONS.length - 1;
    const next =
      e.key === "ArrowDown" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowUp" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    buttons.current[next]?.focus();
  }

  return (
    <ol className="rc-stepper">
      {QUESTIONS.map((item, i) => (
        <li className="rc-step reveal-item" style={step(i)} data-open={open === i} key={item.title}>
          <h3 className="rc-step-title">
            <button
              type="button"
              className="rc-step-button"
              id={`rc-step-${i}`}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              aria-expanded={ready ? open === i : undefined}
              aria-controls={`rc-step-panel-${i}`}
              onClick={() => setOpen(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="rc-step-number" aria-hidden="true">
                {i + 1}
              </span>
              <span className="rc-step-label">{item.title}</span>
            </button>
          </h3>
          <div className="rc-step-panel" id={`rc-step-panel-${i}`}>
            <div>
              <p className="rc-step-body copy">{item.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * Check, the first step of the page's spine, on MB11's blue band 360:1260
 * (curve top right, cut bottom left): heading, two intro lines, one button,
 * and the "How it works" link on the left, the five questions as a stepper
 * on the right. The callout is the principle line from the removed How we
 * work section's Check step.
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
          <QuestionStepper />
        </Reveal>
      </div>
    </section>
  );
}
