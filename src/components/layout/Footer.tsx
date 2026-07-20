"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-color)] bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25">BA</div>
              <span className="font-bold text-lg font-[family-name:var(--font-heading)] gradient-text">{siteConfig.name}</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm mb-6">ICT Professional building innovative digital solutions that empower businesses and transform communities.</p>
            <div className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"><Phone size={14} />{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"><Mail size={14} />{siteConfig.email}</a>
              <span className="flex items-center gap-2"><MapPin size={14} />{siteConfig.location}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[{ label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Projects", href: "/projects" }, { label: "Contact", href: "/contact" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl chip flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl chip flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl chip flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300" aria-label="Twitter">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-[var(--text-muted)]">Let&apos;s build something great together.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-xs text-[var(--text-muted)]">Crafted with precision and purpose</p>
        </div>
      </div>
    </footer>
  );
}
