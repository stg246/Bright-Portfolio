"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle
          label="Portfolio"
          title="Featured Projects"
          description="A selection of recent projects showcasing my expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <GlassCard key={project.id} className="overflow-hidden group">
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
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
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
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
