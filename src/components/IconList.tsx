/**
 * A list with a line icon per row, drawn in code in the credential band's
 * style (24px grid, 1.5 stroke, round joins). The icon says what kind of
 * list it is: a check for what is included, a cross for what is not, a
 * calendar for dates. Rows sit in two columns when every item is short.
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

export function IconList({ items, icon = "check" }: { items: string[]; icon?: IconName }) {
  const compact = items.every((item) => item.length <= 48);
  return (
    <ul className={`icon-list${compact ? " icon-list--grid" : ""}`} data-icon={icon}>
      {items.map((item) => (
        <li key={item}>
          <svg className="icon-list-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {ICONS[icon]}
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
