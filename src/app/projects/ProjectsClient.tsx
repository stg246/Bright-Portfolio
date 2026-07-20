"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const projectImages: Record<string, string> = {
  proj1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  proj2: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  proj3: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
  proj4: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  proj5: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
};

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
              activeCategory === cat ? "bg-gradient-to-r from-[#d4a843] to-[#b8941f] text-[#1a1a1a] shadow-lg shadow-[#d4a843]/25" : "chip text-[var(--text-secondary)] hover:text-[var(--accent)]"
            }`}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group card-base rounded-2xl overflow-hidden">
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
