import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

const EMBER_COUNT = 6;

export function HeroForge() {
  const wrap = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 20, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 20, mass: 0.6 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [2.5, -2.5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2.5, 2.5]);
  const tiltX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const tiltY = useTransform(springY, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    pointerX.set((e.clientX - r.left) / r.width - 0.5);
    pointerY.set((e.clientY - r.top) / r.height - 0.5);
  }

  function reset() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      ref={wrap}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className="hero-forge-wrap"
    >
      <motion.div className="forge-glow" style={{ x: glowX, y: glowY }} aria-hidden="true" />

      <motion.div style={{ rotateX, rotateY, x: tiltX, y: tiltY }}>
        <img className="hero-forge" src="/brand/hero-forge.svg" alt="" aria-hidden="true" draggable={false} />
      </motion.div>

      <div className="ember-field" aria-hidden="true">
        {Array.from({ length: EMBER_COUNT }).map((_, i) => (
          <span className="ember" key={i} />
        ))}
      </div>
    </div>
  );
}
