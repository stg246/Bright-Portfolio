"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/site-config";

const iconMap: Record<string, string> = {
  calendar: "fa-solid fa-calendar-check",
  award: "fa-solid fa-award",
  users: "fa-solid fa-users",
  code: "fa-solid fa-code",
};

export default function AboutClient() {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionTitle label="About Me" title="About Bright" description="Passionate about technology and driven by innovation." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a843]/20 to-[#b8941f]/10 rounded-3xl blur-2xl" />
              <div className="relative card-base rounded-2xl overflow-hidden gradient-border">
                <img src="/images/profile.jpg" alt="Bright Aggrey" className="w-full h-auto object-cover" width={320} height={434} />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-6">{siteConfig.about.title}</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{siteConfig.about.bio}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteConfig.about.highlights.map((h, i) => (
                <div key={i} className="card-base rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8941f] flex items-center justify-center text-[#1a1a1a] shadow-lg shadow-[#d4a843]/20">
                    <i className={iconMap[h.icon] || "fa-solid fa-code"} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--text-primary)]">{h.label}</p>
                    <p className="text-xs text-[var(--text-muted)]">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <SectionTitle label="Journey" title="My Milestones" />

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a843] via-[#e8c468] to-[#b8941f] hidden md:block" />
          <div className="space-y-12">
            {siteConfig.milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <GlassCard className="inline-block text-left">
                    <span className="text-xs font-semibold text-[var(--accent)] mb-1 block">{m.year}</span>
                    <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-2">{m.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{m.description}</p>
                  </GlassCard>
                </div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#d4a843] to-[#b8941f] shadow-lg shadow-[#d4a843]/30 z-10 shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
