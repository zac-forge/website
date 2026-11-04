/**
 * "Where our team has worked." Comp 7 draws five grey circles here (198:528
 * to 198:532). Per the copy deck the names are set as plain muted text until
 * each mark is cleared, and they are never labelled as clients. IBM is where
 * the team worked, per CLAUDE.md, which is exactly what this band says.
 */
const PLACES = ["IBM", "Walmart", "Ogilvy", "Viacom", "Nike"];

export function LogoBand() {
  return (
    <section className="logo-band" aria-labelledby="logo-band-heading">
      <div className="container">
        <h2 className="eyebrow logo-band-label" id="logo-band-heading">
          Where our team has worked
        </h2>
        <ul className="logo-band-list">
          {PLACES.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
