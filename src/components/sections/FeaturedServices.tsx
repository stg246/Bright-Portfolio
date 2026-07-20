"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { services } from "@/data/services";

export default function FeaturedServices() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle label="What I Do" title="Featured Services" description="Delivering comprehensive digital solutions tailored to your needs." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="group card-base rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-3">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((f: string, j: number) => (
                      <span key={j} className="px-3 py-1 text-xs font-medium rounded-full chip-accent">{f}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4">
            View All Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
