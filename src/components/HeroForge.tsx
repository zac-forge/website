import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { Embers } from "./Embers";

const EMBER_COUNT = 10;

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

      <motion.div className="hero-forge-tilt" style={{ rotateX, rotateY, x: tiltX, y: tiltY }}>
        <img
          className="hero-forge"
          src="/brand/hero-forge.webp"
          width={1536}
          height={1024}
          alt=""
          aria-hidden="true"
          draggable={false}
          fetchPriority="high"
          decoding="async"
        />
        <div className="forge-hotspots" aria-hidden="true">
          <span className="hotspot hotspot-1" />
          <span className="hotspot hotspot-2" />
        </div>
      </motion.div>

      <Embers count={EMBER_COUNT} seed={11} />
    </div>
  );
}
