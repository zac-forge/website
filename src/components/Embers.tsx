import { useMemo } from "react";

/**
 * Ambient drifting embers. Purely decorative.
 *
 * Positions come from a seeded generator rather than CSS nth-child rules, so
 * a field can be dropped into any section at any count and still look
 * scattered instead of patterned. The seed keeps it stable across renders.
 *
 * Motion is transform and opacity only, which stays on the compositor, so
 * several fields on one page cost effectively nothing. The reduced-motion
 * rule in motion.css freezes them.
 */
type Props = {
  count?: number;
  seed?: number;
  className?: string;
};

function useEmbers(count: number, seed: number) {
  return useMemo(() => {
    let s = seed;
    const rnd = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
    return Array.from({ length: count }, () => ({
      left: rnd() * 100,
      bottom: rnd() * 78,
      delay: -rnd() * 9,
      duration: 5.5 + rnd() * 5.5,
      size: 2 + rnd() * 2.6,
      drift: 8 + rnd() * 30,
      rise: 90 + rnd() * 90,
    }));
  }, [count, seed]);
}

export function Embers({ count = 8, seed = 7, className = "" }: Props) {
  const embers = useEmbers(count, seed);

  return (
    <div className={`ember-field ${className}`} aria-hidden="true">
      {embers.map((e, i) => (
        <span
          className="ember"
          key={i}
          style={
            {
              left: `${e.left}%`,
              bottom: `${e.bottom}%`,
              width: `${e.size}px`,
              height: `${e.size}px`,
              "--ember-delay": `${e.delay}s`,
              "--ember-dur": `${e.duration}s`,
              "--ember-drift": `${e.drift}px`,
              "--ember-rise": `${e.rise}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
