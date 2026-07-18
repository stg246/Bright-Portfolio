export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Kwame Asante",
    role: "School Administrator",
    content:
      "Bright built our school management system and it transformed how we handle student records and parent communication. His ICT training sessions were exceptional.",
    rating: 5,
  },
  {
    id: "test2",
    name: "Ama Mensah",
    role: "Small Business Owner",
    content:
      "Activation Technology set up our entire network infrastructure and trained our staff on basic computer skills. Professional and reliable service.",
    rating: 5,
  },
  {
    id: "test3",
    name: "Yaw Boateng",
    role: "Student, ALX Fellow",
    content:
      "Bright's mentorship during my software engineering journey was invaluable. He has a rare ability to explain complex technical concepts in simple terms.",
    rating: 5,
  },
  {
    id: "test4",
    name: "Efua Owusu",
    role: "Non-Profit Director",
    content:
      "The website Bright designed for our organization exceeded our expectations. Modern, fast, and exactly what we needed. Highly recommended.",
    rating: 5,
  },
];
