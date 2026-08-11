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
 *    CSS animation on `transform` outranks an inline one, so the breathing
 *    and the parallax cannot share a property either. The pointer offset goes
 *    through the individual `translate` property (fed by custom properties)
 *    while the 7 second breathing animates `scale`. Different properties, so
 *    they compose rather than overwrite each other.
 */

const PARALLAX = 11; // px of travel, within the brief's 10 to 12
const GLOW_PARALLAX = 30; // the light travels further than the object it lights

/**
 * Positions read off the artwork's own bright points, so each overlay pulse
 * lands on a flare that is already painted into the image instead of floating
 * loose in the composition. Durations are deliberately coprime-ish and the
 * delays negative, so the nodes start mid-cycle and never visibly sync up.
 */
const NODES = [
  { left: "57.5%", top: "40%", size: 10, duration: "3.4s", delay: "-0.3s" },
  { left: "53.5%", top: "58.5%", size: 8, duration: "4.6s", delay: "-2.1s" },
  { left: "47%", top: "63.5%", size: 7, duration: "5.3s", delay: "-1.5s" },
  { left: "84%", top: "4.5%", size: 4, duration: "5.9s", delay: "-3.3s" },
  { left: "25%", top: "46%", size: 5, duration: "4.1s", delay: "-1.1s" },
  { left: "8.5%", top: "70%", size: 4, duration: "6.7s", delay: "-2.7s" },
  { left: "83%", top: "71.5%", size: 4, duration: "4.9s", delay: "-4.4s" },
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

    el.style.setProperty("--mx", `${(x * PARALLAX).toFixed(2)}px`);
    el.style.setProperty("--my", `${(y * PARALLAX).toFixed(2)}px`);
    el.style.setProperty("--gx", `${(x * GLOW_PARALLAX).toFixed(2)}px`);
    el.style.setProperty("--gy", `${(y * GLOW_PARALLAX).toFixed(2)}px`);
  }

  function reset() {
    const el = wrap.current;
    if (!el) return;
    for (const prop of ["--mx", "--my", "--gx", "--gy"]) {
      el.style.setProperty(prop, "0px");
    }
  }

  return (
    <div
      ref={wrap}
      className="hero-visual"
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      aria-hidden="true"
    >
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

      {/* Nodes ride the same parallax as the art so they stay pinned to their
          flares. This wrapper does create a stacking context, which is fine:
          the dots fall off to transparent and need no blend mode. */}
      <div className="hero-nodes">
        {NODES.map((n, i) => (
          <span
            className="hero-node"
            key={i}
            style={
              {
                left: n.left,
                top: n.top,
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
