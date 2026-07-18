"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Heart, Rocket, Users } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

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
    title: "Expanding Digital Services",
    description:
      "Expanding service offerings and building impactful technology solutions across Ghana.",
  },
];

export default function AboutClient() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle
          label="About Me"
          title="The Story Behind the Code"
          description="My journey in ICT, from curiosity to career, and building solutions that make a difference."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8 glow-blue" hover={false}>
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Bright Aggrey"
                  className="w-32 h-32 rounded-2xl object-cover border-2 border-accent/20"
                />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                Bright Aggrey
              </h3>
              <div className="flex items-center gap-4 mb-6 text-sm text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  Accra, Ghana
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  Since 2018
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m an ICT Professional, Frontend Developer, Systems
                Engineer, and the founder of Activation Technology. Based in
                Accra, Ghana, I combine technical expertise with a genuine
                passion for teaching and empowering others through technology.
              </p>
            </GlassCard>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                icon: Heart,
                color: "text-accent",
                title: "Passion for Technology & Education",
                text: "My greatest joy comes from seeing someone grasp a new technology concept. Whether it's teaching a student their first line of code or helping a business digitize their operations.",
              },
              {
                icon: Rocket,
                color: "text-cyan",
                title: "The Activation Technology Story",
                text: "Founded in 2021, Activation Technology was born from the realization that many organizations in Ghana need comprehensive, affordable ICT solutions.",
              },
              {
                icon: Users,
                color: "text-accent",
                title: "Industry Meets Teaching",
                text: "My teaching is enriched with real-world industry experience. Students learn practical skills that employers and clients actually need.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6" hover={false}>
                  <card.icon className={`h-6 w-6 ${card.color} mb-3`} />
                  <h4 className="font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {card.text}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionTitle
          label="Journey"
          title="Key Milestones"
          description="Every step of my career has been building toward something bigger."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 pl-16"
            >
              <div className="absolute left-3 top-1 h-7 w-7 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center z-10">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <GlassCard className="p-5" hover={false}>
                <span className="text-xs font-bold text-accent tracking-wider">
                  {milestone.year}
                </span>
                <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mt-1 mb-2">
                  {milestone.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {milestone.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <AnimatedButton href="/contact" size="lg">
            Let&apos;s Work Together
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
