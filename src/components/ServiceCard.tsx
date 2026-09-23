type Props = {
  title: string;
  statement: string;
  items: string[];
  /** A qualifying line under the list, for example "Not maintenance." */
  note?: string;
  /** Link to the offer page. Cards without a page carry neither. */
  href?: string;
  linkLabel?: string;
};

/**
 * One of the board's white cards (nodes 8:105 to 8:107): a 48px coloured
 * title over 16px body. The accent is set by position in layout.css, so the
 * card itself carries no colour. The link, when there is one, sits at the
 * bottom edge whatever the length of the list above it.
 */
export function ServiceCard({ title, statement, items, note, href, linkLabel }: Props) {
  return (
    <article className="service surface">
      <h3 className="h3 service-title">{title}</h3>
      <p className="service-statement">{statement}</p>
      <ul className="service-items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {note ? <p className="service-note">{note}</p> : null}
      {href && linkLabel ? (
        <a className="text-link service-link" href={href}>
          <span>{linkLabel}</span>
          <span aria-hidden="true">→</span>
        </a>
      ) : null}
    </article>
  );
}
