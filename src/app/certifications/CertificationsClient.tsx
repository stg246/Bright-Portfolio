"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications } from "@/data/certifications";

export default function CertificationsClient() {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Credentials" title="Certifications" description="Professional certifications and achievements." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="group card-base rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4a843] via-[#e8c468] to-[#d4a843]" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8941f] flex items-center justify-center text-[#1a1a1a] shadow-lg shadow-[#d4a843]/20">
                  <i className="fa-solid fa-certificate text-lg" />
                </div>
              </div>
              <h3 className="text-base font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">{cert.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">{cert.issuer}</p>
              <p className="text-xs text-[var(--text-muted)]"><i className="fa-solid fa-calendar text-[8px] mr-1" />{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
