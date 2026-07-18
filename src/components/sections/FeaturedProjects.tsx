"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Portfolio"
          title="Featured Projects"
          description="A selection of recent projects showcasing my expertise in software development and technology solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden hover:border-electric-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/10"
            >
              <div className="relative h-48 bg-gradient-to-br from-electric-500/20 to-emerald-500/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-electric-500/30">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-electric-500/10 text-electric-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric-400 hover:text-electric-300 transition-colors"
          >
            View All Projects
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
