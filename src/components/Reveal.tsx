import { useInViewOnce } from "../lib/reveal";

/**
 * Fades and lifts a block as it enters the viewport, once.
 *
 * CSS does the movement (motion.css, `.reveal`), with one duration, easing,
 * and stagger step from the motion tokens, and an IntersectionObserver only
 * adds the class that starts it. The hidden state applies only under
 * `html.js`, which index.html sets before paint, so with scripting off the
 * page is simply there. Reduced motion shows everything in place.
 *
 * With `stagger`, the block itself stays put and its `.reveal-item`
 * descendants arrive in sequence, each at `style={step(i)}`.
 */
export function Reveal({
  children,
  className = "",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();
  const classes = ["reveal", stagger ? "reveal--stagger" : "", inView ? "is-in" : "", className].filter(Boolean).join(" ");
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
