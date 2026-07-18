"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CTASection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] p-12 md:p-16 text-center"
        >
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[var(--cyan)]/10 blur-[120px]" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--text-primary)] mb-5">
              Ready to Build Something{" "}
              <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need a website, network setup, ICT training, or a
              custom technology solution, I&apos;m here to help you achieve your
              goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton href="/contact" size="lg">Start a Conversation</AnimatedButton>
              <AnimatedButton href="/services" variant="secondary" size="lg">Explore Services</AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
