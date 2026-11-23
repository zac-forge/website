import { useEffect, useRef, useState } from "react";
import { step } from "../lib/reveal";
import type { TitledItem } from "../pages/offers/types";

/**
 * A list of questions as a stepper: one open at a time, the first by
 * default, its description revealed under it. A disclosure list: each
 * question is a real button with aria-expanded and aria-controls, Enter and
 * Space open it, and the arrow keys, Home, and End move between questions.
 * Shared by the home Check section and /reality-check's "What we check", so
 * both read the same items and take the same design. Set on a blue band.
 *
 * With scripting off every description shows: the collapsed state is CSS
 * under `html.js`, and aria-expanded is only set once the script is running,
 * so the markup never claims a panel is closed when it is visible.
 *
 * `id` keeps the buttons' and panels' ids unique if two steppers ever share
 * a page. Place it inside `<Reveal stagger>` for the sequenced entrance.
 */
export function QuestionStepper({ items, id = "rc-step" }: { items: TitledItem[]; id?: string }) {
  const [open, setOpen] = useState(0);
  const [ready, setReady] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => setReady(true), []);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const last = items.length - 1;
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
      {items.map((item, i) => (
        <li className="rc-step reveal-item" style={step(i)} data-open={open === i} key={item.title}>
          <h3 className="rc-step-title">
            <button
              type="button"
              className="rc-step-button"
              id={`${id}-${i}`}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              aria-expanded={ready ? open === i : undefined}
              aria-controls={`${id}-panel-${i}`}
              onClick={() => setOpen(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="rc-step-number" aria-hidden="true">
                {i + 1}
              </span>
              <span className="rc-step-label">{item.title}</span>
            </button>
          </h3>
          <div className="rc-step-panel" id={`${id}-panel-${i}`}>
            <div>
              <p className="rc-step-body copy">{item.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
