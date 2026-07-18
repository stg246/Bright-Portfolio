import type { Metadata } from "next";
import SkillsClient from "./SkillsClient";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Bright Aggrey in frontend development, systems engineering, graphic design, and ICT education.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
