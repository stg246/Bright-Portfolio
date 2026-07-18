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
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={
        hover
          ? { y: -6, transition: { duration: 0.3, ease: "easeOut" } }
          : undefined
      }
      className={`relative rounded-2xl bg-bg-card/60 backdrop-blur-xl border border-border overflow-hidden transition-all duration-500 ease-out ${
        hover
          ? "hover:border-border-hover hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
          : ""
      } ${glow ? "glow-blue" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
