"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionTitle({ label, title, description, align = "center" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full chip-accent">{label}</span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--text-primary)] mb-4">
        {title.split(" ").map((word, i) => {
          const isGradient = word === "Bright" || word === "skills" || word === "Services" || word === "Projects" || word === "Experience" || word === "Certifications" || word === "Contact" || word === "About";
          return isGradient ? <span key={i} className="gradient-text">{word} </span> : <span key={i}>{word} </span>;
        })}
      </h2>
      {description && <p className="max-w-2xl text-[var(--text-secondary)] text-lg mx-auto leading-relaxed">{description}</p>}
    </motion.div>
  );
}
