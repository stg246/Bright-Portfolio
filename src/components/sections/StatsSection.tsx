"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Years of ICT Experience", target: 8, suffix: "+" },
  { label: "Projects Completed", target: 50, suffix: "+" },
  { label: "Students Trained", target: 500, suffix: "+" },
  { label: "Certifications Earned", target: 6, suffix: "" },
];

export default function StatsSection() {
  return (
    <section className="py-20 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
