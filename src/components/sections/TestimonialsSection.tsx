"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Testimonials" title="What Clients Say" description="Feedback from people I've had the pleasure of working with." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="card-base rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 italic">&quot;{t.content}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">{t.name.charAt(0)}</div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
