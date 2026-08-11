import { useMemo } from "react";

/**
 * The closing horizon's own activity. Two behaviours, both riding the limb.
 *
 * Travellers are lights making slow passes along the limb, dispersed in
 * height, size, speed, brightness and phase so no two ever sit at the same
 * point on the curve.
 *
 * Embers lift off the planet surface and cool as they go. Their launch points
 * are not placed by eye: the limb was traced by taking the peak-luminance row
 * of every column of red-arc.webp, then converting those asset coordinates
 * through the arc's CSS placement (left 58%, bottom -30%, width 1920) into
 * section-relative percentages. The five below sit on the brightest stretch of
 * the curve, which runs from roughly 56% to 93% across and 39% to 14% up from
 * the section floor.
 *
 * Both animate transform and opacity only; every glow is a static shadow.
 */

const LIMB = [
  { left: 56, bottom: 39 },
  { left: 67, bottom: 33 },
  { left: 77, bottom: 27 },
  { left: 86, bottom: 20 },
  { left: 93, bottom: 14 },
];

type Props = { travellers?: number; embers?: number; seed?: number };

export function HorizonField({ travellers = 7, embers = 5, seed = 91 }: Props) {
  const { paths, sparks } = useMemo(() => {
    let s = seed;
    const rnd = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
    const paths = Array.from({ length: travellers }, () => ({
      bottom: 6 + rnd() * 30,
      size: 2 + rnd() * 2.2,
      // 1.5x the original 15 to 27s. The delay range grows with it so the
      // phases stay spread across the full cycle rather than bunching into
      // its first half.
      dur: 22.5 + rnd() * 18,
      delay: -(rnd() * 40),
      peak: 0.55 + rnd() * 0.4,
      // Each pass carries its own shallow arc, so the group never reads as a
      // single track with beads on it.
      y0: 28 + rnd() * 26,
      y1: -(14 + rnd() * 26),
      y2: 46 + rnd() * 34,
    }));
    const sparks = Array.from({ length: embers }, (_, i) => {
      const p = LIMB[i % LIMB.length];
      return {
        left: p.left + (rnd() - 0.5) * 6,
        bottom: p.bottom + (rnd() - 0.5) * 5,
        size: 1.4 + rnd() * 1.8,
        rise: 40 + rnd() * 50,
        drift: 4 + rnd() * 14,
        // 1.5x the original 6 to 11s. Same travel, taken more slowly.
        dur: 9 + rnd() * 7.5,
        delay: -(rnd() * 17),
        peak: 0.4 + rnd() * 0.4,
      };
    });
    return { paths, sparks };
  }, [travellers, embers, seed]);

  return (
    <div className="horizon-field" aria-hidden="true">
      {paths.map((t, i) => (
        <span
          className="arc-traveller"
          key={`t${i}`}
          style={
            {
              bottom: `${t.bottom.toFixed(1)}%`,
              width: `${t.size.toFixed(2)}px`,
              height: `${t.size.toFixed(2)}px`,
              "--t-dur": `${t.dur.toFixed(1)}s`,
              "--t-delay": `${t.delay.toFixed(1)}s`,
              "--t-peak": t.peak.toFixed(2),
              "--t-y0": `${t.y0.toFixed(0)}px`,
              "--t-y1": `${t.y1.toFixed(0)}px`,
              "--t-y2": `${t.y2.toFixed(0)}px`,
            } as React.CSSProperties
          }
        />
      ))}
      {/* The embers are positioned against this band rather than the whole
          section, because the arc does not occupy the same share of the
          section at every width: at 1440 it fills most of the lower half, at
          390 it is only the bottom 44px. Compressing the band on narrow
          screens keeps the launch points on the planet instead of leaving
          them suspended in empty black above it. */}
      <div className="horizon-embers">
      {sparks.map((e, i) => (
        <span
          className="arc-ember"
          key={`e${i}`}
          style={
            {
              left: `${e.left.toFixed(1)}%`,
              bottom: `${e.bottom.toFixed(1)}%`,
              width: `${e.size.toFixed(2)}px`,
              height: `${e.size.toFixed(2)}px`,
              "--e-dur": `${e.dur.toFixed(1)}s`,
              "--e-delay": `${e.delay.toFixed(1)}s`,
              "--e-peak": e.peak.toFixed(2),
              "--e-rise": `${e.rise.toFixed(0)}px`,
              "--e-drift": `${e.drift.toFixed(0)}px`,
            } as React.CSSProperties
          }
        />
      ))}
      </div>
    </div>
  );
}
