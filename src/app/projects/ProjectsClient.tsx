"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle
          label="Portfolio"
          title="My Projects"
          description="A showcase of software development and technology projects."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                activeCategory === cat
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  : "bg-white/5 text-text-secondary border border-white/5 hover:border-accent/20 hover:text-text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-accent/10 to-cyan/5 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl font-bold text-accent/10 font-[family-name:var(--font-heading)] group-hover:scale-110 transition-transform duration-700">
                      {project.title.charAt(0)}
                    </span>
                    <div className="absolute inset-0 bg-bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                          <GithubIcon className="h-5 w-5" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-semibold text-cyan uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
