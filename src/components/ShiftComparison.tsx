import { Reveal } from "./Reveal";

const COMPARISON = [
  ["Large delivery team", "Lean senior team"],
  ["Long build cycles", "Rapid iteration"],
  ["Heavy coordination", "Direct collaboration"],
  ["Ideas waiting on budget", "Ideas tested early"],
  ["Big upfront commitments", "Value proven quickly"],
];

export function ShiftComparison() {
  return (
    <section className="section shift">
      <div className="container shift-grid">
        <Reveal className="shift-copy">
          <p className="eyebrow">01 / THE SHIFT</p>
          <h2 className="h2">The cost of building changed. Your technology strategy should too.</h2>
          <p className="text-muted">
            AI does not replace experience. It increases what experienced people can accomplish.
            ZAC uses that leverage to remove layers between strategy and execution, so the person
            helping determine what should be built can also help build it.
          </p>
        </Reveal>

        <Reveal className="shift-compare">
          <div className="compare-header">
            <span>THEN</span>
            <span className="text-forge">NOW</span>
          </div>
          <ul className="compare-list">
            {COMPARISON.map(([then, now]) => (
              <li key={then}>
                <span>{then}</span>
                <span className="compare-line" aria-hidden="true" />
                <span className="text-forge">{now}</span>
              </li>
            ))}
          </ul>
          <div className="pull-quote surface">
            <p className="h3">
              Less machinery around the work.
              <br />
              <span className="text-forge">More capability applied to it.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
