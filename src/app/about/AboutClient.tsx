"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Heart, Rocket, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const milestones = [
  {
    year: "2018",
    title: "Started ICT Journey",
    description:
      "Began professional career in ICT, combining technical skills with a passion for education.",
  },
  {
    year: "2019",
    title: "Head of ICT Department",
    description:
      "Led the ICT department at Golden Child School, mentoring students and developing curricula.",
  },
  {
    year: "2021",
    title: "Founded Activation Technology",
    description:
      "Established Activation Technology to provide comprehensive ICT solutions and digital services.",
  },
  {
    year: "2023",
    title: "ALX Software Engineering",
    description:
      "Completed the ALX Software Engineering program, expanding full-stack development capabilities.",
  },
  {
    year: "2024",
    title: "Digital Products Launch",
    description:
      "Launched digital product marketplace offering educational materials and professional templates.",
  },
];

export default function AboutClient() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="About Me"
          title="The Story Behind the Code"
          description="My journey in ICT, from curiosity to career, and building solutions that make a difference."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-electric-500/20 to-emerald-500/20 p-8 border border-[var(--border-color)]">
              <img
                src="/images/profile.jpg"
                alt="Bright Aggrey"
                className="w-32 h-32 rounded-2xl object-cover mb-4 border-2 border-electric-500/30"
              />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Bright Aggrey
              </h3>
              <div className="flex items-center gap-4 mb-6 text-sm text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-electric-400" />
                  Accra, Ghana
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-electric-400" />
                  Since 2018
                </span>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I&apos;m an ICT Professional, Frontend Developer, Systems
                Engineer, and the founder of Activation Technology. Based in
                Accra, Ghana, I combine technical expertise with a genuine
                passion for teaching and empowering others through technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <Heart className="h-6 w-6 text-electric-400 mb-3" />
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                Passion for Technology & Education
              </h4>
              <p className="text-sm text-[var(--text-secondary)]">
                My greatest joy comes from seeing someone grasp a new technology
                concept. Whether it&apos;s teaching a student their first line
                of code or helping a business digitize their operations, I
                believe technology should be accessible to everyone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <Rocket className="h-6 w-6 text-emerald-400 mb-3" />
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                The Activation Technology Story
              </h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Founded in 2021, Activation Technology was born from the
                realization that many organizations in Ghana need comprehensive,
                affordable ICT solutions. From web development to network
                infrastructure and training, we provide end-to-end technology
                services.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <Users className="h-6 w-6 text-electric-400 mb-3" />
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                Industry Meets Teaching
              </h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Unlike pure academics, my teaching is enriched with real-world
                industry experience. Students learn not just theory, but
                practical skills that employers and clients actually need. This
                dual approach has produced graduates who are job-ready from day
                one.
              </p>
            </div>
          </motion.div>
        </div>

        <SectionHeader
          subtitle="My Journey"
          title="Key Milestones"
          description="Every step of my career has been building toward something bigger."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)]" />
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 pl-12 md:pl-0 ${
                index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
              }`}
            >
              <div className="absolute left-2 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-electric-500 border-4 border-[var(--bg-primary)] z-10" />
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <span className="text-sm font-bold text-electric-400">
                  {milestone.year}
                </span>
                <h4 className="text-lg font-semibold text-[var(--text-primary)] mt-1 mb-2">
                  {milestone.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Let&apos;s Work Together
          </Button>
        </div>
      </div>
    </div>
  );
}
