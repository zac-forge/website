// Shared motion vocabulary. Timings live here so sections cannot drift into
// slightly different easings and durations as the site grows.

export const EASE = [0.16, 1, 0.3, 1] as const;

export const VIEWPORT = { once: true, amount: 0.2 } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function staggerContainer(staggerChildren = 0.09, delayChildren = 0) {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}
