import type { Metadata } from "next";
import CertificationsClient from "./CertificationsClient";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications and qualifications earned by Bright Aggrey in ICT and software engineering.",
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
