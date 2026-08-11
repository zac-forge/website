import { useRef } from "react";

/**
 * The hero artwork layer.
 *
 * Two constraints shape this component:
 *
 * 1. The supplied art sits on a solid black plate with no alpha, so it is
 *    composited with `mix-blend-mode: screen`. Screen blends against the
 *    backdrop of the *parent* stacking context, which means nothing between
 *    the image and the page background may create one: no transform, no
 *    opacity, no filter, no isolation on any wrapper. Break that and the
 *    plate reappears as a visible rectangle.
 *
 * 2. Because of (1) the parallax cannot ride on a transformed wrapper, and a
 *    CSS animation on `transform` outranks an inline one. So the work is split
 *    across three separate CSS properties that compose rather than collide:
 *    `translate` carries the pointer parallax, `scale` carries the breathing,
 *    and `transform` carries the perspective tilt. The browser applies them in
 *    that order, so all three coexist on one element.
 */

const PARALLAX_X = 11; // px, within the brief's 10 to 12
const PARALLAX_Y = 9; // px, within the brief's 8 to 10
const TILT = 1.8; // degrees, kept under the brief's 2 degree ceiling
const GLOW_PARALLAX = 30; // the light travels further than the object it lights

/**
 * Positions read off the artwork's own bright points, so each overlay pulse
 * lands on a flare that is already painted into the image instead of floating
 * loose in the composition. Cores stay small (2 to 5px) and do the work
 * through their glow. Durations are deliberately spread across the 3.8 to 6.5
 * second band and the delays are negative, so nodes start mid-cycle and never
 * visibly synchronise.
 */
const NODES = [
  { id: "core", left: 57.5, top: 40, size: 5, duration: "4.3s", delay: "-0.3s" },
  { id: "mid", left: 53.5, top: 58.5, size: 4, duration: "5.6s", delay: "-2.1s" },
  { id: "low", left: 47, top: 63.5, size: 3.5, duration: "6.4s", delay: "-1.5s" },
  { id: "ne", left: 84, top: 4.5, size: 2.5, duration: "5.1s", delay: "-3.3s" },
  { id: "w", left: 25, top: 46, size: 3, duration: "3.9s", delay: "-1.1s" },
  { id: "sw", left: 8.5, top: 70, size: 2.5, duration: "6.1s", delay: "-2.7s" },
  { id: "se", left: 83, top: 71.5, size: 2.5, duration: "4.7s", delay: "-4.4s" },
];

const nodeAt = (id: string) => NODES.find((n) => n.id === id)!;

/**
 * A few hairline paths between nodes. Each carries a faint constant trace plus
 * a bright dash that travels the line rarely, on a long cycle, so the effect
 * reads as occasional signal rather than continuous circuitry.
 */
const LINKS = [
  { from: "w", to: "core", dur: "17s", delay: "-2s" },
  { from: "core", to: "se", dur: "21s", delay: "-11s" },
  { from: "sw", to: "low", dur: "19s", delay: "-16s" },
];

export function HeroArt() {
  const wrap = useRef<HTMLDivElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    // Mouse only. On touch the brief calls for no pointer behaviour at all,
    // and a pen or finger drag would otherwise drag the artwork with it.
    if (e.pointerType !== "mouse") return;
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;

    // Values are written as custom properties and eased by CSS transitions,
    // so the artwork lags the pointer and reads as heavy rather than pinned
    // to the cursor.
    el.style.setProperty("--mx", `${(x * PARALLAX_X).toFixed(2)}px`);
    el.style.setProperty("--my", `${(y * PARALLAX_Y).toFixed(2)}px`);
    el.style.setProperty("--rx", `${(-y * TILT).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * TILT).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(x * GLOW_PARALLAX).toFixed(2)}px`);
    el.style.setProperty("--gy", `${(y * GLOW_PARALLAX).toFixed(2)}px`);
  }

  function reset() {
    const el = wrap.current;
    if (!el) return;
    for (const prop of ["--mx", "--my", "--gx", "--gy"]) el.style.setProperty(prop, "0px");
    for (const prop of ["--rx", "--ry"]) el.style.setProperty(prop, "0deg");
  }

  return (
    <div
      ref={wrap}
      className="hero-visual"
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      {/* Construction layer: grid, orbital hairlines and sparse points. Sits
          under the artwork and is mostly invisible until the red light passes
          over it. */}
      <div className="hero-substrate">
        <div className="hero-grid-layer" />
        <svg className="hero-orbits" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <ellipse cx="56" cy="50" rx="42" ry="30" />
          <ellipse cx="56" cy="50" rx="30" ry="43" />
        </svg>
      </div>

      <img
        className="hero-art"
        src="/art/hero-z.webp"
        width={1536}
        height={1024}
        alt=""
        draggable={false}
        fetchPriority="high"
        decoding="async"
      />

      {/* Sits above the art and tracks the pointer further than it does, so the
          forge reads as lit from a moving source rather than evenly glowing. */}
      <div className="hero-glow" />

      <svg
        className="hero-links"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {LINKS.map(({ from, to, dur, delay }) => {
          const a = nodeAt(from);
          const b = nodeAt(to);
          const common = { x1: a.left, y1: a.top, x2: b.left, y2: b.top };
          return (
            <g key={`${from}-${to}`}>
              <line className="hero-link" {...common} />
              <line
                className="hero-link-signal"
                {...common}
                style={{ "--link-dur": dur, "--link-delay": delay } as React.CSSProperties}
              />
            </g>
          );
        })}
      </svg>

      {/* Nodes ride the same parallax as the art so they stay pinned to their
          flares. This wrapper does create a stacking context, which is fine:
          the dots fall off to transparent and need no blend mode. */}
      <div className="hero-nodes">
        {NODES.map((n) => (
          <span
            className="hero-node"
            key={n.id}
            style={
              {
                left: `${n.left}%`,
                top: `${n.top}%`,
                width: `${n.size}px`,
                height: `${n.size}px`,
                "--node-dur": n.duration,
                "--node-delay": n.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
