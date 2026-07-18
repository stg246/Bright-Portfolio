"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications } from "@/data/certifications";

export default function CertificationsClient() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Certifications"
          title="Professional Qualifications"
          description="Continuous learning and professional development credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-electric-500/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 mb-4 group-hover:bg-electric-500 group-hover:text-white transition-all duration-300">
                <Award className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                {cert.category}
              </span>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-2 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                {cert.issuer}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">
                  {cert.date}
                </span>
                {cert.credentialId && (
                  <span className="text-xs text-[var(--text-muted)]">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
