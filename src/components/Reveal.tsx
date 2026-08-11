import { motion, useReducedMotion } from "motion/react";
import { fadeUp, VIEWPORT } from "../lib/motion";

/**
 * Fades and lifts a block as it enters the viewport, once.
 *
 * Motion drives this rather than the original IntersectionObserver plus CSS
 * class, so it shares easing with the rest of the site and can stagger its
 * children when asked.
 */
export function Reveal({
  children,
  className = "",
  stagger,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  // With a stagger the parent only orchestrates, children carry the movement.
  const variants = stagger
    ? { hidden: {}, show: { transition: { staggerChildren: stagger } } }
    : fadeUp;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}
