import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

/**
 * True once the element has scrolled into view, and it stays true. One
 * IntersectionObserver per element, disconnected as soon as it fires. Where
 * the observer does not exist the element counts as in view straight away.
 */
export function useInViewOnce<T extends Element>(amount = 0.15) {
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
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
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
