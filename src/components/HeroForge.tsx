import { useRef } from "react";

export function HeroForge() {
  const wrap = useRef<HTMLDivElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = wrap.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", `${x * 12}px`);
    el.style.setProperty("--my", `${y * 12}px`);
    el.style.setProperty("--rx", `${-y * 2.5}deg`);
    el.style.setProperty("--ry", `${x * 2.5}deg`);
  }

  function reset() {
    const el = wrap.current;
    if (!el) return;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={wrap}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className="hero-forge-wrap"
      style={
        {
          position: "relative",
          transform:
            "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translate3d(var(--mx, 0), var(--my, 0), 0)",
          transition: "transform 260ms cubic-bezier(.16,1,.3,1)",
        } as React.CSSProperties
      }
    >
      <div className="forge-glow" aria-hidden="true" />
      <img className="hero-forge" src="/brand/hero-forge.svg" alt="" aria-hidden="true" draggable={false} />
    </div>
  );
}
