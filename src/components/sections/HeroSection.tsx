"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            opacity: 0.12,
            filter: "blur(6px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, var(--bg-primary) 75%)",
          }}
        />
      </div>

      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[var(--accent)]/10 blur-[150px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--cyan)]/8 blur-[150px] animate-float" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full chip-accent text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-[var(--emerald)] animate-pulse" />
              Available for hire & collaboration
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight mb-6"
          >
            Building Technology
            <br />
            Solutions That{" "}
            <span className="text-gradient">Solve Real Problems</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg sm:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed">
            I help businesses, schools, and individuals leverage technology
            through software development, ICT solutions, and training.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <AnimatedButton href="/projects" size="lg">
              <Briefcase className="h-4 w-4" />
              View Projects
            </AnimatedButton>
            <AnimatedButton href="/contact" variant="secondary" size="lg">
              Hire Me
            </AnimatedButton>
            <AnimatedButton href="/Bright_Aggrey_CV.pdf" variant="ghost" size="lg">
              <Download className="h-4 w-4" />
              Download CV
            </AnimatedButton>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6">
            <div className="flex gap-3">
              {[
                { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl chip text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--glow)] transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <div className="h-6 w-px bg-[var(--border-color)]" />
            <div className="text-sm text-[var(--text-muted)]">
              <span className="text-[var(--accent)] font-semibold">Based in</span>{" "}
              {siteConfig.location}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
