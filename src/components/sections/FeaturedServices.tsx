"use client";

import { ArrowUpRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { services } from "@/data/services";

const cardDirections: ("left" | "up" | "right")[] = ["left", "up", "right"];

export default function FeaturedServices() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full chip-accent">What I Do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--text-primary)] mb-4">
              Featured <span className="gradient-text">Services</span>
            </h2>
            <p className="max-w-2xl text-[var(--text-secondary)] text-lg mx-auto leading-relaxed">Delivering comprehensive digital solutions tailored to your needs.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {services.slice(0, 3).map((service, i) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={i} direction={cardDirections[i]}>
                <div className="group card-base rounded-2xl p-8 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-3">{service.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((f: string, j: number) => (
                        <span key={j} className="px-3 py-1 text-xs font-medium rounded-full chip-accent">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4">
              View All Services <ArrowUpRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
