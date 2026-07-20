"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <span className="text-lg font-bold">{cert.title.charAt(0)}</span>
                </div>
              </div>
              <h3 className="text-base font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">{cert.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">{cert.issuer}</p>
              <p className="text-xs text-[var(--text-muted)]">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
