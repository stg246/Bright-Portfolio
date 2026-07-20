"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { projects } from "@/data/projects";

const cardDirections: ("left" | "scale" | "right")[] = ["left", "scale", "right"];

const projectImages: Record<string, string> = {
  proj1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  proj2: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  proj3: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
  proj4: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  proj5: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
};

export default function FeaturedProjects() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a843]/3 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full chip-accent"><i className="fa-solid fa-layer-group text-[10px]" /> Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight text-[var(--text-primary)] mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <p className="max-w-2xl text-[var(--text-secondary)] text-lg mx-auto leading-relaxed">A selection of projects that showcase my expertise and creativity.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {projects.filter(p => p.featured).slice(0, 3).map((project, i) => (
            <StaggerItem key={i} direction={cardDirections[i]}>
              <div className="group card-base rounded-2xl overflow-hidden h-full">
                <div className="relative h-52 overflow-hidden">
                  <img src={projectImages[project.id] || `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop`} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-[#d4a843] transition-all"><i className="fa-brands fa-github text-xs" /></a>}
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-[#d4a843] transition-all"><i className="fa-solid fa-arrow-up-right-from-square text-xs" /></a>}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full chip-accent">{project.category}</span>
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
              View All Projects <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
