"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({ children, className = "", hover = true, gradient = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`card-base rounded-2xl p-6 ${gradient ? "gradient-border" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
