"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block mb-3 text-sm font-semibold text-electric-400 uppercase tracking-wider">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-[var(--text-secondary)] text-lg mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
