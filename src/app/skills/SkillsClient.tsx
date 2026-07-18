"use client";

import { motion } from "framer-motion";
import { Code, Server, Palette, GraduationCap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = { Code, Server, Palette, GraduationCap };

export default function SkillsClient() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle label="Skills" title="Technical Expertise" description="A comprehensive overview of my skills across development, systems, design, and education." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <motion.div key={category.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: catIndex * 0.1 }}>
                <GlassCard className="p-6" hover={false}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--glow)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-[var(--text-primary)]">{category.name}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-[var(--text-secondary)]">{skill.name}</span>
                          <span className="text-xs text-[var(--text-muted)] font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[var(--border-color)] overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: catIndex * 0.1 + skillIndex * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as const }} className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--cyan)]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
