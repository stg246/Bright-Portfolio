"use client";

import { Star } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full chip-accent">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--text-primary)] mb-4">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="max-w-2xl text-[var(--text-secondary)] text-lg mx-auto leading-relaxed">Feedback from people I&apos;ve had the pleasure of working with.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {testimonials.slice(0, 3).map((t, i) => (
            <StaggerItem key={i} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <div className="card-base rounded-2xl p-8 relative overflow-hidden h-full">
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
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
