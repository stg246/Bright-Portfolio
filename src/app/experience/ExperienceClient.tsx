"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experiences";

export default function ExperienceClient() {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-4xl mx-auto px-6">
        <SectionTitle label="Career" title="Experience" description="My professional journey and career milestones." />

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a843] via-[#e8c468] to-[#b8941f]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="relative pl-16">
                <div className="absolute left-4 w-5 h-5 rounded-full bg-gradient-to-br from-[#d4a843] to-[#b8941f] shadow-lg shadow-[#d4a843]/30 border-4 border-[var(--bg-primary)] z-10" />
                <div className="card-base rounded-2xl p-8 gradient-border">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] mb-2">
                    <i className="fa-solid fa-calendar-days" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-1">{exp.role}</h3>
                  <p className="text-sm font-medium text-[var(--text-secondary)] mb-4">{exp.company}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <i className="fa-solid fa-check text-[var(--accent)] text-xs mt-1 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
