"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { projects } from "@/data/projects";

const cardDirections: ("left" | "scale" | "right")[] = ["left", "scale", "right"];

export default function FeaturedProjects() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full chip-accent">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--text-primary)] mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="max-w-2xl text-[var(--text-secondary)] text-lg mx-auto leading-relaxed">A selection of projects that showcase my expertise and creativity.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {projects.filter(p => p.featured).slice(0, 3).map((project, i) => (
            <StaggerItem key={i} direction={cardDirections[i]}>
              <div className="group card-base rounded-2xl overflow-hidden h-full">
                <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl font-bold font-[family-name:var(--font-heading)] text-white/10 group-hover:scale-125 transition-transform duration-500">{project.title.charAt(0)}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full chip-accent">{project.category}</span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((t, j) => (
                      <span key={j} className="px-2.5 py-0.5 text-[10px] font-medium rounded-md chip text-[var(--text-secondary)]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4">
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
