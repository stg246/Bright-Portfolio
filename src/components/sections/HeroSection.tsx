"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 dark:from-blue-600/10 dark:to-purple-600/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full chip-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-sm font-medium">Available for opportunities</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-6">
            <span className="text-[var(--text-primary)]">Hi, I&apos;m </span>
            <span className="gradient-text">Bright</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--text-secondary)] mb-4">
            ICT Professional & Founder of Activation Technology
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
            {siteConfig.description.split(".")[0]}.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <AnimatedButton href="/projects" size="lg">View My Work</AnimatedButton>
            <AnimatedButton href="/contact" variant="secondary" size="lg">Get In Touch</AnimatedButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }} className="flex items-center justify-center gap-4">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl chip flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl chip flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl chip flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <TwitterIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-6 h-10 rounded-full border-2 border-[var(--border-color)] flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
