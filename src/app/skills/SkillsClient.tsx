"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";

export default function SkillsClient() {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Expertise" title="My Skills" description="Technologies and tools I use to bring ideas to life." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="card-base rounded-2xl p-8">
              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-6">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-xs font-semibold text-[var(--accent)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
