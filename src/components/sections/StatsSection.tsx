"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/data/site-config";

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="card-base rounded-3xl p-10 gradient-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
