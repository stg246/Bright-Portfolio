"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/data/services";

export default function FeaturedServices() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle
          label="Services"
          title="What I Do"
          description="Professional ICT services tailored to help you succeed in the digital world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <GlassCard key={service.id} className="p-6 group">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-500"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-text-muted flex items-center gap-2.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors duration-300"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
