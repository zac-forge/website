type Props = {
  index: string;
  title: string;
  statement: string;
  items: string[];
};

export function ServiceRow({ index, title, statement, items }: Props) {
  return (
    <article className="service-row surface" tabIndex={0}>
      <div className="service-index">{index}</div>
      <div>
        <div className="eyebrow">{title}</div>
        <h3 className="h3">{statement}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span aria-hidden="true">→</span>
    </article>
  );
}
