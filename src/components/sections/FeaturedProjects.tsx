"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle label="Portfolio" title="Featured Projects" description="A selection of projects that showcase my expertise and creativity." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(p => p.featured).slice(0, 3).map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="group card-base rounded-2xl overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-5xl font-bold font-[family-name:var(--font-heading)] text-white/10">{project.title.charAt(0)}</div>
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
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4">
            View All Projects <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
