import { Reveal } from "./Reveal";

const PRINCIPLES = [
  { label: "SENIOR-LED", body: "No layers of junior account management." },
  { label: "AI-NATIVE", body: "Modern tools increase the output of experienced practitioners." },
  { label: "RIGHT-SIZED", body: "Bring in the expertise the work requires, then get out of the way." },
];

export function HowItWorks() {
  return (
    <section id="approach" className="section how-it-works">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / HOW ZAC WORKS</p>
        </Reveal>

        <Reveal className="sequence">
          <div className="sequence-node">Your business</div>
          <span className="sequence-arrow" aria-hidden="true">
            →
          </span>
          <div className="sequence-node sequence-node--zac">
            <img src="/brand/zac-mark.svg" alt="" aria-hidden="true" />
            <span>ZAC</span>
          </div>
          <span className="sequence-arrow" aria-hidden="true">
            →
          </span>
          <div className="sequence-node">Senior specialists</div>
          <span className="sequence-arrow" aria-hidden="true">
            →
          </span>
          <div className="sequence-node">Working technology</div>
        </Reveal>

        <div className="how-grid">
          <Reveal className="how-copy">
            <h2 className="h2">One senior point of contact.</h2>
            <p className="text-muted">
              Strategy and execution stay connected. When a project needs additional depth, ZAC
              brings in trusted senior specialists in development, design, and related
              disciplines. The team expands around the problem, not around an agency org chart.
            </p>
          </Reveal>

          <Reveal className="principles">
            {PRINCIPLES.map((p) => (
              <div className="principle surface" key={p.label}>
                <p className="eyebrow">{p.label}</p>
                <p className="text-muted">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
