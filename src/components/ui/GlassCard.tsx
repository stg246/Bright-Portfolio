"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      whileHover={
        hover
          ? { y: -6, transition: { duration: 0.3, ease: "easeOut" } }
          : undefined
      }
      className={`relative rounded-2xl bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] overflow-hidden transition-all duration-500 ease-out ${
        hover
          ? "hover:border-[var(--border-hover)] hover:shadow-[var(--card-shadow-hover)]"
          : ""
      } ${glow ? "glow-blue" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
