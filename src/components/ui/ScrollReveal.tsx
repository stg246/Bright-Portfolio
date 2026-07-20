"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
}

const presets: Record<Direction, { hidden: TargetAndTransition; visible: TargetAndTransition }> = {
  up:    { hidden: { opacity: 0, y: 60 },          visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -60 },         visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -60 },         visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 },          visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 },    visible: { opacity: 1, scale: 1 } },
  fade:  { hidden: { opacity: 0 },                  visible: { opacity: 1 } },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  margin = "-80px",
}: ScrollRevealProps) {
  const { hidden, visible } = presets[direction];

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin }}
      transition={{ delay, duration, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function StaggerContainer({ children, className = "", stagger = 0.1 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}

export function StaggerItem({ children, direction = "up", className = "" }: StaggerItemProps) {
  const { hidden, visible } = presets[direction];

  return (
    <motion.div
      variants={{ hidden, visible }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
