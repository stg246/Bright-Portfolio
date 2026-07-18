"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesClient() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Services"
          title="Professional ICT Services"
          description="Comprehensive technology solutions powered by Activation Technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-electric-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 mb-4 group-hover:bg-electric-500 group-hover:text-white transition-all duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <Check className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Every project is unique. Contact me to discuss your specific
            requirements and get a tailored solution.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
