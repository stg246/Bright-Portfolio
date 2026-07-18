import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-500 text-white font-bold text-sm">
                BA
              </div>
              <span className="text-lg font-bold text-[var(--text-primary)]">
                Bright Aggrey
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              ICT Professional, Frontend Developer, Systems Engineer, and
              Founder of Activation Technology.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-electric-400 hover:bg-electric-500/10 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-electric-400 hover:bg-electric-500/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-electric-400 hover:bg-electric-500/10 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Me" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/shop", label: "Digital Shop" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-electric-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Systems Engineering",
                "Graphic Design",
                "ICT Training",
                "IT Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-electric-400 shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  {siteConfig.location}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-electric-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-electric-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-electric-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-electric-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Built by{" "}
            <span className="text-electric-400">{siteConfig.company}</span>.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="text-xs text-[var(--text-muted)] hover:text-electric-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-[var(--text-muted)] hover:text-electric-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
