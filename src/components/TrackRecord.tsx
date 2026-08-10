import { Reveal } from "./Reveal";

const EXPERIENCE = [
  "Enterprise systems",
  "Digital products",
  "Web + applications",
  "AI + automation",
  "Technology strategy",
  "Design + media",
];

// Roles only, no names. Swap in real people once those are ready to be
// public, the layout takes a name line without restructuring.
const ROLES = [
  { label: "FOUNDER", body: "Technology strategy and direction." },
  { label: "DEVELOPMENT", body: "Software, web, and AI integration." },
  { label: "DESIGN", body: "Product and brand design." },
];

export function TrackRecord() {
  return (
    <section id="about" className="section track-record">
      <div className="container">
        <div className="track-grid">
          <Reveal className="track-copy">
            <p className="eyebrow">04 / TRACK RECORD</p>
            <h2 className="h2">Built on experience. Structured for what comes next.</h2>
            <p className="text-muted">
              ZAC is led by founder Andrew Johnston, whose experience spans enterprise systems,
              independent digital, web, media, and product work, alongside a senior team of
              developers and designers. That range matters, because good technology starts before
              the first line of code: understanding the business problem, choosing what is worth
              building, and knowing how to ship it.
            </p>
          </Reveal>

          <Reveal className="experience-grid">
            {EXPERIENCE.map((item) => (
              <div className="experience-item surface" key={item}>
                {item}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="roles-row">
          {ROLES.map((role) => (
            <div className="role surface" key={role.label}>
              <p className="eyebrow">{role.label}</p>
              <p className="text-muted">{role.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
