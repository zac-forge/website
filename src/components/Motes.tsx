import { useMemo } from "react";

/**
 * Atmospheric energy points. Purely decorative.
 *
 * Deliberately not embers. These read as energised dust and signal residue
 * suspended in a technical environment, so travel is short (10 to 35px) and
 * slow (8 to 16s) rather than a continuous rise, and the tints stay inside the
 * forge reds at low opacity. Nothing here should ever read as fire or snow.
 *
 * Performance: only `transform` and `opacity` animate, and the glow under each
 * point is a static box-shadow painted once. No blur radius, filter or shadow
 * is ever animated, so a field runs on the compositor and never repaints.
 *
 * Positions come from a seeded generator rather than nth-child rules, so a
 * field can be dropped into any zone at any count and still look scattered.
 * The seed keeps it stable across renders.
 */

const TINTS = ["#E83445", "#F04455", "#FF6875"];

type Props = {
  count?: number;
  seed?: number;
  className?: string;
};

function useMotes(count: number, seed: number) {
  return useMemo(() => {
    let s = seed;
    const rnd = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
    return Array.from({ length: count }, () => {
      // Most points are 1 to 2px. A few are 2 to 3px, and no more than that.
      const larger = rnd() > 0.78;
      return {
        left: rnd() * 100,
        top: rnd() * 100,
        size: larger ? 2 + rnd() : 1 + rnd(),
        tint: TINTS[Math.floor(rnd() * TINTS.length)],
        peak: 0.22 + rnd() * 0.34,
        // Slight diagonal, in either direction, rather than a uniform column.
        driftX: (rnd() - 0.5) * 22,
        rise: 10 + rnd() * 25,
        duration: 8 + rnd() * 8,
        delay: -rnd() * 16,
      };
    });
  }, [count, seed]);
}

export function Motes({ count = 8, seed = 7, className = "" }: Props) {
  const motes = useMotes(count, seed);

  return (
    <div className={`mote-field ${className}`} aria-hidden="true">
      {motes.map((m, i) => (
        <span
          className="mote"
          key={i}
          style={
            {
              left: `${m.left.toFixed(2)}%`,
              top: `${m.top.toFixed(2)}%`,
              width: `${m.size.toFixed(2)}px`,
              height: `${m.size.toFixed(2)}px`,
              "--mote-tint": m.tint,
              "--mote-peak": m.peak.toFixed(2),
              "--mote-x": `${m.driftX.toFixed(1)}px`,
              "--mote-y": `${(-m.rise).toFixed(1)}px`,
              "--mote-dur": `${m.duration.toFixed(1)}s`,
              "--mote-delay": `${m.delay.toFixed(1)}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
