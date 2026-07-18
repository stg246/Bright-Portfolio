import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional ICT services by Bright Aggrey and Activation Technology: web development, systems engineering, graphic design, ICT training, and IT consulting.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
