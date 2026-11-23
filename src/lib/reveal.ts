import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

/**
 * True once the element has scrolled into view, and it stays true. One
 * IntersectionObserver per element, disconnected as soon as it fires. Where
 * the observer does not exist the element counts as in view straight away.
 *
 * By default it fires as the element's top edge crosses the bottom of the
 * viewport (Drew, 2026-11-22: at 15% in, sections sat blank until well into
 * view), so the reveal has run by the time a reader gets there. `amount`
 * asks for more of the element first, which the count-up uses so the number
 * is on screen while it counts.
 */
export function useInViewOnce<T extends Element>(amount = 0) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: amount },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);
  return [ref, inView] as const;
}

/** Position in a staggered reveal: `<li className="reveal-item" style={step(i)}>`. */
export const step = (i: number) => ({ "--i": i }) as CSSProperties;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
