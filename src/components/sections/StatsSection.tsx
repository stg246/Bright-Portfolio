"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/site-config";

const icons = ["fa-solid fa-folder-open", "fa-solid fa-face-smile", "fa-solid fa-clock", "fa-solid fa-graduation-cap"];

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4a843]/5 via-[#b8941f]/3 to-[#d4a843]/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="scale" duration={0.7}>
          <div className="card-base rounded-3xl p-10 gradient-border">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" stagger={0.12}>
              {siteConfig.stats.map((stat, i) => (
                <StaggerItem key={i} direction="scale">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#d4a843] to-[#b8941f] flex items-center justify-center shadow-lg shadow-[#d4a843]/20">
                      <i className={`${icons[i]} text-[#1a1a1a] text-lg`} />
                    </div>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
