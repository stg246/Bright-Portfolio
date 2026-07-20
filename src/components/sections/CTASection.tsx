"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a843]/8 via-[#b8941f]/5 to-[#d4a843]/8" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4a843]/10 rounded-full blur-[120px]" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal direction="scale" duration={0.8}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]">
            <i className="fa-solid fa-rocket text-[var(--accent)] text-xs" />
            <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Let&apos;s Collaborate</span>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="scale" duration={0.8} delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-6">
            Ready to Start Your <span className="gradient-text">Next Project</span>?
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">Let&apos;s collaborate and build something extraordinary together. I&apos;m always excited to take on new challenges.</p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton href="/contact" size="lg">Start a Conversation</AnimatedButton>
            <AnimatedButton href="/projects" variant="secondary" size="lg">See My Work</AnimatedButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
