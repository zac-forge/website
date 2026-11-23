import { step } from "../lib/reveal";
import type { TitledItem } from "../pages/offers/types";

/**
 * A list with a line icon per row, drawn in code in the credential band's
 * style (24px grid, 1.5 stroke, round joins). The icon says what kind of
 * list it is: a check for what is included, a cross for what is not, a
 * calendar for dates. Rows sit in two columns when every item is short. A
 * row may be a title with a body under it, so every "What you get" and
 * "What we check" on the offer pages is this one list (2026-11-22). The
 * icons take the page's accent where a page sets one (--offer-accent-deep).
 */
const ICONS = {
  check: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M7.8 12.4l2.800 2.800L16.200 9.400" />
    </>
  ),
  cross: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.500 9.800h17M8 3v4M16 3v4" />
    </>
  ),
};
export type IconName = keyof typeof ICONS;

/** The icon alone, for the steps rail's discs. */
export function ListIcon({ icon, className = "icon-list-icon" }: { icon: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {ICONS[icon]}
    </svg>
  );
}

export function IconList({ items, icon = "check" }: { items: (string | TitledItem)[]; icon?: IconName }) {
  const titled = items.some((item) => typeof item !== "string");
  const compact = !titled && items.every((item) => typeof item === "string" && item.length <= 48);
  return (
    <ul
      className={`icon-list${compact ? " icon-list--grid" : ""}${titled ? " icon-list--titled" : ""}`}
      data-icon={icon}
    >
      {items.map((item, i) => (
        <li className={titled ? "reveal-item" : undefined} style={titled ? step(i) : undefined} key={typeof item === "string" ? item : item.title}>
          <ListIcon icon={icon} />
          {typeof item === "string" ? (
            <span>{item}</span>
          ) : (
            <div>
              <h3 className="icon-list-title">{item.title}</h3>
              {item.body ? <p className="icon-list-body">{item.body}</p> : null}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
