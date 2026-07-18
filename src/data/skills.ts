export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "Code",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "TypeScript", level: 78 },
    ],
  },
  {
    name: "Systems Engineering",
    icon: "Server",
    skills: [
      { name: "Linux Administration", level: 85 },
      { name: "Networking (TCP/IP, DNS)", level: 82 },
      { name: "Server Administration", level: 80 },
      { name: "Hardware Troubleshooting", level: 90 },
      { name: "Network Security", level: 75 },
    ],
  },
  {
    name: "Design",
    icon: "Palette",
    skills: [
      { name: "Figma", level: 88 },
      { name: "CorelDraw", level: 85 },
      { name: "Graphic Design", level: 90 },
      { name: "UI/UX Design", level: 80 },
      { name: "Brand Identity", level: 82 },
    ],
  },
  {
    name: "ICT Education",
    icon: "GraduationCap",
    skills: [
      { name: "Curriculum Development", level: 90 },
      { name: "ICT Training", level: 92 },
      { name: "Student Mentorship", level: 88 },
      { name: "Workshop Facilitation", level: 85 },
      { name: "E-Learning Design", level: 80 },
    ],
  },
];
