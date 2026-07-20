"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/site-config";

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="scale" duration={0.7}>
          <div className="card-base rounded-3xl p-10 gradient-border">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" stagger={0.12}>
              {siteConfig.stats.map((stat, i) => (
                <StaggerItem key={i} direction="scale">
                  <div className="text-center">
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
