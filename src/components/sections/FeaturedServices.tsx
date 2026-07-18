"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

export default function FeaturedServices() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="What I Do"
          title="Featured Services"
          description="Professional ICT services tailored to help you succeed in the digital world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
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
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-[var(--text-muted)] flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric-400 hover:text-electric-300 transition-colors"
          >
            View All Services
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
