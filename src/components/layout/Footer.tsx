"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-bg-primary/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent font-bold text-sm">
                BA
              </div>
              <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary tracking-tight">
                Bright Aggrey
              </span>
            </Link>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              ICT Professional, Frontend Developer, Systems Engineer, and
              Founder of Activation Technology.
            </p>
            <div className="flex gap-3">
              {[
                { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-accent hover:bg-accent/10 hover:border-accent/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-5 uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-5 uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Systems Engineering",
                "Graphic Design",
                "ICT Training",
                "IT Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-text-secondary">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-5 uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-text-secondary">{siteConfig.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {siteConfig.name}. Built by{" "}
            <span className="text-accent">{siteConfig.company}</span>.
          </p>
          <p className="text-xs text-text-muted">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
