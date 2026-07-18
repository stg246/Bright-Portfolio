import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bright Aggrey's ICT journey, passion for technology education, and the founding story of Activation Technology.",
};

export default function AboutPage() {
  return <AboutClient />;
}
