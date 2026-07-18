"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of ICT Experience", target: 8, suffix: "+" },
  { label: "Projects Completed", target: 50, suffix: "+" },
  { label: "Students Trained", target: 500, suffix: "+" },
  { label: "Certifications Earned", target: 6, suffix: "" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 border-y border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/3 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <p className="mt-3 text-sm text-text-secondary font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
