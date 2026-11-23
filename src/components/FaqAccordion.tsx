import { useEffect, useState } from "react";
import type { Faq } from "../pages/offers";

/**
 * The subline and FAQ answers may carry one inline link, written
 * [text](/path). Plain text otherwise. The schema strips the markup.
 */
export function InlineText({ text }: { text: string }) {
  const m = text.match(/^(.*)\[([^\]]+)\]\(([^)]+)\)(.*)$/);
  if (!m) return <>{text}</>;
  return (
    <>
      {m[1]}
      <a className="inline-link" href={m[3]}>
        {m[2]}
      </a>
      {m[4]}
    </>
  );
}

/**
 * Questions and answers as an accordion, shared by the offer pages and
 * /faq. Each question is a real button in a heading, with aria-expanded and
 * aria-controls. Any number can be open, and the first starts open. With
 * scripting off every answer shows: the collapsed state is CSS under
 * `html.js`, and aria-expanded is only set once the script is running. The
 * answers are always in the HTML, so assistants and the FAQPage schema see
 * the same words.
 *
 * `id` keeps ids unique when a page carries more than one list, and
 * `openFirst` is off for every list on a page but the first.
 */
export function FaqAccordion({ items, id, openFirst = true }: { items: Faq[]; id: string; openFirst?: boolean }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set(openFirst ? [0] : []));
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className="faq-row" data-open={open.has(i)} key={item.question}>
          <h3 className="faq-question">
            <button
              type="button"
              className="faq-button"
              id={`${id}-q-${i}`}
              aria-expanded={ready ? open.has(i) : undefined}
              aria-controls={`${id}-a-${i}`}
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>
              <span className="faq-mark" aria-hidden="true" />
            </button>
          </h3>
          <div className="faq-panel" id={`${id}-a-${i}`}>
            <div>
              <p className="faq-answer">
                <InlineText text={item.answer} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
