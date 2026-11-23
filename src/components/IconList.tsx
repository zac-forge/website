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
  /* What we test (/accessibility): a keyboard, sound from a speaker, a
     half-filled disc, lines under a heading bar, a gauge. */
  keyboard: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M6.500 10h.01M10 10h.01M13.500 10h.01M17 10h.01M8 14h8" />
    </>
  ),
  reader: (
    <>
      <path d="M4 9.500v5h3.500l4.500 3.500V6L7.500 9.500H4z" />
      <path d="M15.500 9a4.200 4.200 0 0 1 0 6M18 6.500a8 8 0 0 1 0 11" />
    </>
  ),
  contrast: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 2.500v19M12 7l5.500 5.500M12 12l4 4M12 17l1.500 1.500" />
    </>
  ),
  landmarks: (
    <>
      <rect x="3.5" y="4" width="17" height="5" rx="1.5" />
      <path d="M3.500 13.500h10M3.500 17h17M3.500 20.500h7" />
    </>
  ),
  speed: (
    <>
      <path d="M4.200 17.500a9.500 9.500 0 1 1 15.600 0" />
      <path d="M12 14l4-5.500M12 14h.01" />
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

export function IconList({
  items,
  icon = "check",
  tiles = false,
  icons,
}: {
  items: (string | TitledItem)[];
  icon?: IconName;
  /** A grid of tiles, the icon over the words, in place of rows. */
  tiles?: boolean;
  /** An icon for each item, by name, in place of the list's one icon. */
  icons?: string[];
}) {
  const titled = items.some((item) => typeof item !== "string");
  const compact = !tiles && !titled && items.every((item) => typeof item === "string" && item.length <= 48);
  const staged = titled || tiles;
  const iconFor = (i: number): IconName => (icons?.[i] && icons[i] in ICONS ? (icons[i] as IconName) : icon);
  return (
    <ul
      className={`icon-list${compact ? " icon-list--grid" : ""}${titled ? " icon-list--titled" : ""}${tiles ? " icon-list--tiles" : ""}`}
      data-icon={icon}
      data-count={tiles ? items.length : undefined}
    >
      {items.map((item, i) => (
        <li className={staged ? "reveal-item" : undefined} style={staged ? step(i) : undefined} key={typeof item === "string" ? item : item.title}>
          <ListIcon icon={iconFor(i)} />
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
