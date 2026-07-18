"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data/experiences";

export default function ExperienceClient() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Experience"
          title="Professional Journey"
          description="A timeline of my career in ICT, education, and technology leadership."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--border-color)]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 pl-16"
            >
              <div className="absolute left-3 top-1 h-7 w-7 rounded-full bg-electric-500 flex items-center justify-center border-4 border-[var(--bg-primary)] z-10">
                <Briefcase className="h-3.5 w-3.5 text-white" />
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <span className="text-xs font-semibold text-electric-400 uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-emerald-400 mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-electric-400 mt-1.5 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
