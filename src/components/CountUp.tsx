import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE } from "../lib/motion";

/**
 * A figure that counts up once, the first time it scrolls into view.
 *
 * The final value is the element's real text, in the prerendered HTML, so
 * screen readers, assistants, and visitors without JavaScript get the true
 * number. While it counts, the real text stays in place but transparent, so
 * it still holds the box (no layout shift) and is still what assistive tech
 * reads, and the running value is drawn over it, hidden from assistive tech.
 * Static with reduced motion. A figure with no number to speak of ("$1B+")
 * is left alone.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [running, setRunning] = useState<string | null>(null);

  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const countable = Boolean(match) && target > 1;

  useEffect(() => {
    if (!inView || !countable || shouldReduceMotion || !match) return;
    const [, prefix, digits, suffix] = match;
    const grouped = digits.includes(",");
    const controls = animate(0, target, {
      duration: 1.1,
      ease: EASE,
      onUpdate: (v) => {
        const n = Math.round(v);
        setRunning(`${prefix}${grouped ? n.toLocaleString("en-US") : n}${suffix}`);
      },
      onComplete: () => setRunning(null),
    });
    return () => controls.stop();
    // The value is fixed for the life of the element.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, countable, shouldReduceMotion]);

  return (
    <span ref={ref} className={`countup ${className}`.trim()} data-running={running !== null}>
      <span className="countup-final">{value}</span>
      {running !== null ? (
        <span className="countup-live" aria-hidden="true">
          {running}
        </span>
      ) : null}
    </span>
  );
}
