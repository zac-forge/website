import { useEffect, useState } from "react";
import { useInViewOnce, prefersReducedMotion } from "../lib/reveal";

/**
 * A figure that counts up once, the first time it scrolls into view.
 *
 * The final value is the element's real text, in the prerendered HTML, so
 * screen readers, assistants, and visitors without JavaScript get the true
 * number. While it counts, the real text stays in place but transparent, so
 * it still holds the box (no layout shift) and is still what assistive tech
 * reads, and the running value is drawn over it, hidden from assistive tech.
 * Static with reduced motion. A figure with no number to speak of ("$1B+")
 * is left alone. The duration is the --duration-count token.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const [ref, inView] = useInViewOnce<HTMLSpanElement>(0.6);
  const [running, setRunning] = useState<string | null>(null);

  useEffect(() => {
    const match = value.match(/^(\D*)([\d,]+)(.*)$/);
    if (!inView || !match || prefersReducedMotion()) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    if (target <= 1) return;
    const grouped = digits.includes(",");
    const duration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--duration-count")) || 1100;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      if (t === 1) return setRunning(null);
      const n = Math.round(target * (1 - Math.pow(1 - t, 4)));
      setRunning(`${prefix}${grouped ? n.toLocaleString("en-US") : n}${suffix}`);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

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
