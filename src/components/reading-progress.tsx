"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: prefersReducedMotion ? 100 : 28,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0%" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 bg-[#2563eb]"
    />
  );
}
