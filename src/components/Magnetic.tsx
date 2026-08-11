import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * Pulls its child a few pixels toward the cursor. Strength is deliberately
 * low: enough to feel responsive on approach, not enough to make the button
 * feel like it is dodging the pointer.
 */
export function Magnetic({
  children,
  strength = 0.28,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  function onPointerMove(e: React.PointerEvent<HTMLSpanElement>) {
    if (shouldReduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      className="magnetic"
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={shouldReduceMotion ? undefined : { x: springX, y: springY }}
    >
      {children}
    </motion.span>
  );
}
