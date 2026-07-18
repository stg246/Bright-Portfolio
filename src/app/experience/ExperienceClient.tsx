"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { experiences } from "@/data/experiences";

export default function ExperienceClient() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle
          label="Experience"
          title="Professional Journey"
          description="A timeline of my career in ICT, education, and technology leadership."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 pl-16"
            >
              <div className="absolute left-3 top-1 h-7 w-7 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center z-10">
                <Briefcase className="h-3 w-3 text-accent" />
              </div>

              <GlassCard className="p-6" hover={false}>
                <span className="text-xs font-bold text-accent tracking-wider uppercase">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-cyan mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
