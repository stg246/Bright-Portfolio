import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Bright Aggrey | ICT Professional & Digital Solutions Expert", template: "%s | Bright Aggrey" },
  description: "Portfolio of Bright Aggrey — ICT Professional, Frontend Developer, Systems Engineer, and Founder of Activation Technology in Accra, Ghana.",
  keywords: ["Bright Aggrey", "ICT", "developer", "portfolio", "Accra", "Ghana", "Activation Technology", "frontend", "systems engineer"],
  authors: [{ name: "Bright Aggrey" }],
  openGraph: { type: "website", locale: "en_US", siteName: "Bright Aggrey Portfolio", title: "Bright Aggrey | ICT Professional", description: "Building innovative digital solutions.", images: [{ url: "/images/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Bright Aggrey | ICT Professional", description: "Building innovative digital solutions.", images: ["/images/og-image.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="antialiased min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400">
        <ThemeProvider>
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
