import { useRef } from "react";
import { Motes } from "./Motes";

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
// The light reacts more visibly than the artwork does, and the core lags
// furthest behind the pointer, so the Z keeps reading as the heavy object and
// the illumination as the thing moving through it.
const GLOW_PARALLAX = 42;
const CORE_PARALLAX = 26;

/**
 * Eleven points, positioned off the artwork's own bright spots so each pulse
 * lands on a flare already painted into the image rather than floating loose.
 *
 * Three intensity classes, per the brief: micro (1 to 2px), standard (2 to
 * 4px) and primary (4 to 6px), with only two primaries in the whole field.
 *
 * `floor` is the opacity a node falls back to between pulses, and it is what
 * makes the field feel like a system rather than a string of blinking lights:
 * points near 0.03 disappear almost completely, while points near 0.3 hold a
 * dim red state throughout. Durations spread across 3.6 to 6.9s with negative
 * delays, so nodes start mid-cycle and never visibly synchronise.
 */
const NODES = [
  // Primary. Never more than two, and their cycles are far enough apart that
  // they rarely peak together.
  { id: "core", left: 57.5, top: 40, size: 5.5, duration: "4.6s", delay: "-0.3s", floor: 0.32 },
  { id: "mid", left: 53.5, top: 58.5, size: 4.4, duration: "5.9s", delay: "-2.1s", floor: 0.26 },
  // Standard.
  { id: "low", left: 47, top: 63.5, size: 3.4, duration: "6.6s", delay: "-1.5s", floor: 0.05 },
  { id: "w", left: 25, top: 46, size: 3, duration: "4.1s", delay: "-1.1s", floor: 0.22 },
  { id: "ne", left: 84, top: 4.5, size: 2.6, duration: "5.3s", delay: "-3.3s", floor: 0.04 },
  { id: "se", left: 83, top: 71.5, size: 2.5, duration: "4.9s", delay: "-4.4s", floor: 0.2 },
  { id: "sw", left: 8.5, top: 70, size: 2.4, duration: "6.3s", delay: "-2.7s", floor: 0.04 },
  // Micro.
  { id: "m1", left: 68, top: 22, size: 1.8, duration: "3.6s", delay: "-2.4s", floor: 0.03 },
  { id: "m2", left: 38, top: 30, size: 1.4, duration: "5.5s", delay: "-0.9s", floor: 0.18 },
  { id: "m3", left: 72, top: 84, size: 1.6, duration: "6.9s", delay: "-5.1s", floor: 0.03 },
  { id: "m4", left: 91, top: 52, size: 1.5, duration: "4.4s", delay: "-3.8s", floor: 0.16 },
];

const nodeAt = (id: string) => NODES.find((n) => n.id === id)!;

/**
 * Three hairline paths between nodes. Each carries a faint constant trace plus
 * a bright dash that crosses it in about 1.5 seconds, then nothing for the rest
 * of the cycle.
 *
 * All three share one 21s period and are separated by phase rather than given
 * periods of their own. Independent periods were tried first and measured
 * badly: 20 / 24 / 28s drift in and out of phase, which produced two signals
 * one second apart and then a fourteen second dead gap. One shared cycle with
 * offsets of 0, 6.4 and 13.2s fires exactly one path at a time, every 6.4 to
 * 7.8 seconds, forever. The offsets are deliberately uneven so it reads as a
 * system processing something rather than as a metronome.
 */
const LINK_CYCLE = "21s";
const LINKS = [
  { from: "w", to: "core", dur: LINK_CYCLE, delay: "0s" },
  { from: "core", to: "se", dur: LINK_CYCLE, delay: "-6.4s" },
  { from: "sw", to: "low", dur: LINK_CYCLE, delay: "-13.2s" },
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
    el.style.setProperty("--cx", `${(x * CORE_PARALLAX).toFixed(2)}px`);
    el.style.setProperty("--cy", `${(y * CORE_PARALLAX).toFixed(2)}px`);
  }

  function reset() {
    const el = wrap.current;
    if (!el) return;
    for (const prop of ["--mx", "--my", "--gx", "--gy", "--cx", "--cy"])
      el.style.setProperty(prop, "0px");
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

      {/* A tighter illumination sitting on the Z's own red core. The artwork's
          own breathing stays where it was, at 1% of scale; the added energy
          goes here instead, so the effect reads as heat moving through black
          material rather than the whole object inflating. */}
      <div className="hero-core" />

      {/* Suspended energy in the black around the artwork. Sixteen points on
          desktop, thinned to six on narrow screens by CSS. */}
      <Motes count={16} seed={5} className="mote-field--hero" />

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
                "--node-floor": n.floor,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
