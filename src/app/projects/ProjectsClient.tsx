"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Portfolio" title="My Projects" description="A showcase of my work and creative endeavors." />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "chip text-[var(--text-secondary)] hover:text-[var(--accent)]"
            }`}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group card-base rounded-2xl overflow-hidden">
              <div className="relative h-52 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 flex items-center justify-center">
                <div className="text-6xl font-bold font-[family-name:var(--font-heading)] text-white/10">{project.title.charAt(0)}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full chip-accent">{project.category}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"><ExternalLink size={16} /></a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"><ArrowUpRight size={16} /></a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, j) => (
                    <span key={j} className="px-2.5 py-0.5 text-[10px] font-medium rounded-md chip text-[var(--text-secondary)]">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
