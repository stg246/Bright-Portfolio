import {
  Code,
  Server,
  Palette,
  GraduationCap,
  Shield,
  Monitor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "svc1",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks. Responsive, fast, and optimized for search engines.",
    features: [
      "React & Next.js applications",
      "Responsive mobile-first design",
      "SEO optimization",
      "E-commerce solutions",
      "Progressive Web Apps",
    ],
    icon: Code,
  },
  {
    id: "svc2",
    title: "Systems Engineering",
    description:
      "Network infrastructure, server setup, and maintenance. From small office LANs to multi-site enterprise networks.",
    features: [
      "Network design & installation",
      "Linux server administration",
      "Hardware troubleshooting",
      "Security auditing",
      "Backup & disaster recovery",
    ],
    icon: Server,
  },
  {
    id: "svc3",
    title: "Graphic Design",
    description:
      "Professional visual identities, marketing materials, and digital assets that make your brand stand out.",
    features: [
      "Brand identity & logos",
      "Business cards & stationery",
      "Social media graphics",
      "Poster & flyer design",
      "UI/UX design",
    ],
    icon: Palette,
  },
  {
    id: "svc4",
    title: "ICT Training",
    description:
      "Customized computer literacy and advanced ICT training for individuals, schools, and corporate organizations.",
    features: [
      "Computer literacy courses",
      "Web development bootcamps",
      "Corporate training workshops",
      "Student mentorship programs",
      "Exam preparation",
    ],
    icon: GraduationCap,
  },
  {
    id: "svc5",
    title: "IT Consulting",
    description:
      "Strategic technology advice to help your organization choose and implement the right solutions.",
    features: [
      "Technology needs assessment",
      "Digital transformation strategy",
      "Software selection guidance",
      "IT infrastructure planning",
      "Vendor management",
    ],
    icon: Shield,
  },
  {
    id: "svc6",
    title: "Computer Sales & Repair",
    description:
      "Quality refurbished and new computers, peripherals, and professional repair services.",
    features: [
      "Computer sales & assembly",
      "Hardware diagnostics & repair",
      "Software installation",
      "Virus & malware removal",
      "Data recovery",
    ],
    icon: Monitor,
  },
];
