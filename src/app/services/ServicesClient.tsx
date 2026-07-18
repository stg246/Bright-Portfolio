"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { services } from "@/data/services";

export default function ServicesClient() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle label="Services" title="Professional ICT Services" description="Comprehensive technology solutions powered by Activation Technology." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <GlassCard className="p-6 h-full group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--glow)] text-[var(--accent)] mb-5 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-500">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <Check className="h-4 w-4 mt-0.5 text-[var(--emerald)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-4">Need a Custom Solution?</h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">Every project is unique. Contact me to discuss your specific requirements and get a tailored solution.</p>
          <AnimatedButton href="/contact" size="lg">Get in Touch</AnimatedButton>
        </motion.div>
      </div>
    </div>
  );
}
