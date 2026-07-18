"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { certifications } from "@/data/certifications";

export default function CertificationsClient() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle label="Certifications" title="Professional Qualifications" description="Continuous learning and professional development credentials." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <GlassCard className="p-6 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--glow)] text-[var(--accent)] mb-5 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-500">
                  <Award className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-[var(--cyan)] uppercase tracking-wider">{cert.category}</span>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mt-2 mb-1">{cert.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{cert.date}</span>
                  {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
