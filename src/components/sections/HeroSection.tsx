"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-electric-500/20 blur-[128px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass text-sm text-electric-400"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire &amp; collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Building Technology{" "}
            <br />
            Solutions That{" "}
            <span className="text-gradient">Solve Real Problems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl"
          >
            I help businesses, schools, and individuals leverage technology
            through software development, ICT solutions, and training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/projects" size="lg">
              <Briefcase className="h-4 w-4" />
              View Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/Bright_Aggrey_CV.pdf" variant="ghost" size="lg">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex items-center gap-8 text-sm text-[var(--text-muted)]"
          >
            <div className="flex items-center gap-2">
              <span className="text-electric-400 font-semibold">Based in</span>
              Accra, Ghana
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-electric-400 font-semibold">Company</span>
              Activation Technology
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
