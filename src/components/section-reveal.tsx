"use client";

import { motion, useReducedMotion } from "framer-motion";
import { inViewFadeUp } from "@/lib/motion";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={inViewFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
