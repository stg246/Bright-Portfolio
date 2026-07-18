export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    role: "ICT & Mathematics Facilitator",
    company: "Novus Technical Institute",
    period: "2023 - Present",
    description:
      "Delivering ICT and Mathematics instruction to tertiary-level students. Developing curriculum-aligned course materials and assessments.",
    achievements: [
      "Designed and implemented interactive ICT curriculum for over 100 students per semester",
      "Introduced practical lab sessions improving student pass rates by 30%",
      "Mentored students in career pathways within the ICT field",
      "Developed digital learning resources and online assessment systems",
    ],
  },
  {
    id: "exp2",
    role: "Computer Technician & Graphic Designer",
    company: "Step Multimedia",
    period: "2021 - 2023",
    description:
      "Provided computer repair, maintenance, and graphic design services for corporate clients and individuals.",
    achievements: [
      "Serviced and repaired over 200 computers and peripheral devices",
      "Created brand identities, logos, and marketing materials for 50+ clients",
      "Managed network installations for small and medium businesses",
      "Reduced average repair turnaround time by implementing a ticketing system",
    ],
  },
  {
    id: "exp3",
    role: "ICT Instructor & Head of ICT Department",
    company: "Golden Child School",
    period: "2020 - 2021",
    description:
      "Led the ICT department, teaching computer science at primary and secondary levels while managing departmental resources.",
    achievements: [
      "Led a department of 5 ICT teachers across multiple grade levels",
      "Organized inter-school ICT competitions and coding clubs",
      "Introduced coding and robotics programs for junior students",
      "Achieved 95% ICT proficiency rate among graduating students",
    ],
  },
  {
    id: "exp4",
    role: "Assistant Director Administration",
    company: "IKCAN-GH",
    period: "2019 - 2020",
    description:
      "Oversaw administrative operations, digital systems management, and organizational communications.",
    achievements: [
      "Digitized administrative workflows reducing paperwork by 60%",
      "Managed website content and social media presence",
      "Coordinated technology-driven community outreach programs",
      "Developed databases for membership and event tracking",
    ],
  },
];
