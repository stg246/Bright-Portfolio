import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software development projects by Bright Aggrey including web applications, mobile apps, and network infrastructure.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
