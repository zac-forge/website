import { useRef } from "react";
import { prefersReducedMotion } from "../lib/reveal";

/**
 * Pulls its child a few pixels toward the cursor. Strength is deliberately
 * low: enough to feel responsive on approach, not enough to make the button
 * feel like it is dodging the pointer. Mouse only, and off with reduced
 * motion. The ease back is a CSS transition on .magnetic.
 */
export function Magnetic({
  children,
  strength = 0.28,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <span ref={ref} className="magnetic" onPointerMove={onPointerMove} onPointerLeave={reset}>
      {children}
    </span>
  );
}
