import type { Metadata } from "next";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Bright Aggrey in ICT education, systems engineering, and technology leadership.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
