type Props = {
  index: string;
  title: string;
  statement: string;
  items: string[];
  /** A qualifying line under the statement, for example "Not maintenance." */
  note?: string;
  /** Link to the offer page. Rows without a page carry neither. */
  href?: string;
  linkLabel?: string;
};

export function ServiceRow({ index, title, statement, items, note, href, linkLabel }: Props) {
  return (
    <article className="service-row" tabIndex={0}>
      {/* The node on the row's signal edge. Dim at rest, and on interaction it
          ignites and releases a single particle that crosses to the arrow.
          Energy here is reactive, never ambient: nothing runs until a pointer
          or the keyboard arrives. */}
      <span className="service-spark" aria-hidden="true" />
      <span className="service-particle" aria-hidden="true" />
      <div className="service-index" aria-hidden="true">
        {index}
      </div>
      <div className="service-label">
        <h3 className="service-title">{title}</h3>
        <p className="service-statement">{statement}</p>
        {note ? <p className="service-note">{note}</p> : null}
        {href && linkLabel ? (
          <a className="text-link service-link" href={href}>
            <span>{linkLabel}</span>
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
      </div>
      <span className="service-arrow" aria-hidden="true">
        →
      </span>
      <ul className="service-items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
