/**
 * The three "Things we've fixed" illustrations (design pass, 2026-11-22):
 * abstract, drawn in code, no numbers and no data. Each is drawn in its
 * fixed state, and CSS (motion.css, `.ill`) plays it from the broken state
 * to that one when its card is revealed. With scripting off or reduced
 * motion the fixed state is simply what shows. Colours are tokens, set on
 * the classes in layout.css.
 */

/** Focus trapped inside a carousel, then moving freely down the page. */
export function TrapIllustration() {
  return (
    <svg className="ill ill--trap" viewBox="0 0 240 132" aria-hidden="true" focusable="false">
      <rect className="ill-frame" x="18" y="12" width="204" height="60" rx="10" />
      <rect className="ill-block" x="30" y="24" width="52" height="36" rx="5" />
      <rect className="ill-block" x="94" y="24" width="52" height="36" rx="5" />
      <rect className="ill-block" x="158" y="24" width="52" height="36" rx="5" />
      <rect className="ill-line" x="22" y="90" width="150" height="9" rx="4.5" />
      <rect className="ill-line" x="22" y="110" width="104" height="9" rx="4.5" />
      {/* The trapped ring loops over the slides, then lets go. */}
      <rect className="ill-ring ill-ring--trapped" x="26" y="20" width="60" height="44" rx="8" />
      {/* The free ring rests on the content the visitor came for. */}
      <rect className="ill-ring ill-ring--free" x="15" y="83" width="164" height="23" rx="9" />
    </svg>
  );
}

/** A row of status ticks, some down, settling to steady. */
const TICKS = [1, 1, 0.22, 0.22, 1, 1, 0.3, 1, 1, 0.18, 0.18, 1];
export function SteadyIllustration() {
  return (
    <svg className="ill ill--steady" viewBox="0 0 240 132" aria-hidden="true" focusable="false">
      <rect className="ill-line" x="22" y="112" width="196" height="4" rx="2" />
      {TICKS.map((h, i) => (
        <rect
          className={`ill-tick${h < 1 ? " ill-tick--down" : ""}`}
          key={i}
          x={27 + i * 16.4}
          y="40"
          width="6"
          height="62"
          rx="3"
          style={{ "--h": h, "--i": i } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}

/** A results list with one row rising to the top. */
export function RankIllustration() {
  return (
    <svg className="ill ill--rank" viewBox="0 0 240 132" aria-hidden="true" focusable="false">
      <rect className="ill-frame" x="22" y="10" width="196" height="20" rx="10" />
      <circle className="ill-glass" cx="36" cy="20" r="4" />
      <g className="ill-row ill-row--ours">
        <rect className="ill-row-bg" x="22" y="38" width="196" height="20" rx="6" />
        <rect className="ill-row-dot" x="28" y="43" width="10" height="10" rx="3" />
        <rect className="ill-row-bar" x="46" y="44.5" width="120" height="7" rx="3.5" />
      </g>
      {[61, 84, 107].map((y, i) => (
        <g className="ill-row ill-row--other" key={y}>
          <rect className="ill-block" x="28" y={y + 5} width="10" height="10" rx="3" />
          <rect className="ill-line" x="46" y={y + 6.5} width={[132, 96, 116][i]} height="7" rx="3.5" />
        </g>
      ))}
    </svg>
  );
}
