"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 p-12 md:p-16 text-center"
        >
          <div className="absolute top-0 left-0 h-full w-full bg-grid opacity-10" />
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-electric-500/30 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/30 blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Something{" "}
              <span className="text-electric-400">Amazing</span>?
            </h2>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
              Whether you need a website, network setup, ICT training, or digital
              products for your organization, I&apos;m here to help you achieve
              your technology goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start a Conversation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
