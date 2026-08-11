type Props = {
  index: string;
  title: string;
  statement: string;
  items: string[];
};

export function ServiceRow({ index, title, statement, items }: Props) {
  return (
    <article className="service-row" tabIndex={0}>
      {/* The node on the row's signal edge. Dim at rest, bright on interaction:
          energy here is reactive, never ambient. */}
      <span className="service-spark" aria-hidden="true" />
      <div className="service-index" aria-hidden="true">
        {index}
      </div>
      <div className="service-label">
        <h3 className="service-title">{title}</h3>
        <p className="service-statement">{statement}</p>
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
