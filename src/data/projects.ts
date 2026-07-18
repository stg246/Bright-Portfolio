export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Activation Technology Website",
    description:
      "Corporate website for Activation Technology showcasing ICT services, digital products, and company profile with modern design and responsive layout.",
    longDescription:
      "A full-featured corporate website built with Next.js and Tailwind CSS. Features include service showcases, product catalog, contact forms, admin dashboard, and SEO optimization. Designed to establish a strong online presence for Activation Technology.",
    image: "/images/project-activation.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    live: "https://activationtech.com",
    featured: true,
    category: "Web Development",
  },
  {
    id: "proj2",
    title: "School Management System",
    description:
      "Comprehensive school management platform handling student records, grades, attendance, timetables, and parent-teacher communication.",
    longDescription:
      "A complete school management solution designed for Ghanaian schools. Features student enrollment, fee tracking, grade management, attendance monitoring, report card generation, and a parent portal for real-time updates on student progress.",
    image: "/images/project-school.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/brightaggrey/school-mgmt",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "proj3",
    title: "Farmer Mobile Application",
    description:
      "ALX capstone project - a mobile app connecting farmers with market prices, weather data, and agricultural resources.",
    longDescription:
      "Built as part of the ALX Software Engineering program, this React Native mobile application helps smallholder farmers in Ghana access real-time market prices, weather forecasts, farming tips, and connect directly with buyers to eliminate middlemen.",
    image: "/images/project-farmer.jpg",
    technologies: ["React Native", "Firebase", "REST API", "Maps"],
    github: "https://github.com/brightaggrey/farmer-app",
    featured: true,
    category: "Mobile",
  },
  {
    id: "proj4",
    title: "Digital Product Marketplace",
    description:
      "E-commerce platform for selling digital products including e-books, templates, and educational materials with secure payments.",
    longDescription:
      "A secure digital marketplace integrated with Paystack for payments. Features product listings, search and filtering, secure payment processing, automated delivery of digital products, and an admin panel for product management.",
    image: "/images/project-marketplace.jpg",
    technologies: ["Next.js", "TypeScript", "Paystack", "Tailwind CSS"],
    featured: true,
    category: "E-Commerce",
  },
  {
    id: "proj5",
    title: "ICT Network Installation Projects",
    description:
      "Enterprise network setup and configuration for schools and businesses including structured cabling, server setup, and security.",
    longDescription:
      "Multiple network infrastructure projects including LAN setup for a 200-device school campus, server room configuration, VLAN implementation, CCTV network integration, and ongoing maintenance contracts for small businesses in Accra.",
    image: "/images/project-network.jpg",
    technologies: ["Linux", "MikroTik", "Network Design", "Server Admin"],
    featured: false,
    category: "Infrastructure",
  },
];
