"use client";

import { motion } from "framer-motion";
import {
  Code,
  Server,
  Palette,
  GraduationCap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Server,
  Palette,
  GraduationCap,
};

export default function SkillsClient() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Skills"
          title="Technical Expertise"
          description="A comprehensive overview of my skills across development, systems, design, and education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[var(--text-secondary)]">
                          {skill.name}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--bg-secondary)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + skillIndex * 0.05,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-electric-500 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
