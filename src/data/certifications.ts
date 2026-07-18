export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    id: "cert1",
    title: "ALX Software Engineering Program",
    issuer: "ALX Africa",
    date: "2023",
    credentialId: "ALX-SE-2023",
    category: "Software Engineering",
  },
  {
    id: "cert2",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2022",
    category: "Cybersecurity",
  },
  {
    id: "cert3",
    title: "ICT in Education Certificate",
    issuer: "Ghana Education Service",
    date: "2021",
    category: "Education",
  },
  {
    id: "cert4",
    title: "Linux Essentials",
    issuer: "Linux Professional Institute",
    date: "2022",
    category: "Systems",
  },
  {
    id: "cert5",
    title: "Graphic Design Professional",
    issuer: "Graphic Design Institute",
    date: "2020",
    category: "Design",
  },
  {
    id: "cert6",
    title: "Networking Fundamentals",
    issuer: "CompTIA",
    date: "2021",
    category: "Networking",
  },
];
