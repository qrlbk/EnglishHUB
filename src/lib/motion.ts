"use client";

import type { Transition, Variants } from "framer-motion";

export const quickSpring: Transition = {
  type: "spring",
  stiffness: 360,
  damping: 30,
  mass: 0.7,
};

export const hoverLift = {
  y: -5,
  scale: 1.02,
  boxShadow: "0 14px 34px rgba(15, 23, 42, 0.16)",
  transition: quickSpring,
};

export const tapPress = {
  scale: 0.96,
  transition: { duration: 0.16 },
};

export const inViewFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...quickSpring, duration: 0.26 },
  },
};
