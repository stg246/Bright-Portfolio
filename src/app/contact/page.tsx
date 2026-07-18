import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bright Aggrey for ICT services, web development, training, and collaboration opportunities.",
};

export default function ContactPage() {
  return <ContactClient />;
}
