import { Reveal } from "./Reveal";
import { step } from "../lib/reveal";
import { TEAM, TEAM_INTRO } from "../pages/team";

/**
 * Team data lives in src/pages/team.ts, shared with the schema. Since
 * 2026-11-18 every card carries a full name (Drew).
 */
/**
 * Photos are found by file name in src/assets/team/ at build time (see the
 * README there), so adding one is a file drop and a rebuild.
 */
const PHOTOS = import.meta.glob("../assets/team/*.{webp,avif,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function photoFor(slug: string) {
  return Object.entries(PHOTOS).find(([path]) => path.split("/").pop()?.startsWith(`${slug}.`))?.[1];
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Team, MB11 372:1736 and 372:1735 on the grey band 394:1894 (cut top left,
 * curve bottom right). Three white 176px circles (376:1749 to 376:1751),
 * then name, role, and bio. The comp's names and bios are placeholders, so
 * the live ones ship. Until a photo exists a circle shows the person's
 * initials. Also rendered on /about. On home since 2026-11-22 (Drew's pass
 * 1 handoff) the cards drop their bios and one link goes to /about, which
 * renders this same component with the bios.
 */
export function WhoWeAre({ bios = true }: { bios?: boolean } = {}) {
  // Home (no bios) is the compact form (Drew, 2026-11-22): the intro's first
  // line is the headline in place of "Principals", its second the one
  // supporting line, and the principals sit in one row with small photos
  // and no card behind them. /about keeps "Principals", the whole intro,
  // and the cards with bios.
  const compact = !bios;
  const [headline, ...rest] = TEAM_INTRO;
  return (
    <section
      id="who-we-are"
      className={`section band band--white who-we-are${compact ? " who-we-are--compact" : ""}`}
      aria-labelledby="who-we-are-heading"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">Team</p>
          <h2 className="h2" id="who-we-are-heading">
            {compact ? headline : "Principals"}
          </h2>
          {(compact ? rest.slice(0, 1) : TEAM_INTRO).map((p) => (
            <p className="section-intro copy" key={p}>
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal className="team" stagger>
          {TEAM.map((m, i) => {
            const photo = photoFor(m.slug);
            return (
              <div className="team-member reveal-item" style={step(i)} key={m.slug}>
                <div className="team-circle" aria-hidden="true">
                  {photo ? (
                    <img className="team-photo" src={photo} alt="" width={176} height={176} loading="lazy" />
                  ) : (
                    <span className="team-initials">{initials(m.name)}</span>
                  )}
                </div>
                <div className="team-text">
                  <h3 className="team-name">{m.cardName ?? m.name}</h3>
                  <p className="team-role">{m.role}</p>
                  {bios
                    ? m.bio.map((p) => (
                        <p className="team-bio copy" key={p}>
                          {p}
                        </p>
                      ))
                    : null}
                </div>
              </div>
            );
          })}
        </Reveal>
        {bios ? null : (
          <div className="cta-row team-about-link">
            <a className="text-link" href="/about">
              <span>About ZAC</span> <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
