"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle
          label="Testimonials"
          title="What People Say"
          description="Feedback from clients, students, and colleagues."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.id} className="p-6">
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              <p className="text-text-secondary mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-text-primary font-[family-name:var(--font-heading)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-muted">
                    {testimonial.role}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-yellow-400/80 text-yellow-400/80"
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
