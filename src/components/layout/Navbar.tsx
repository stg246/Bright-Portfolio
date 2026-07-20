"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";
import { siteConfig } from "@/data/site-config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-black/5 dark:shadow-black/30 py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8941f] flex items-center justify-center text-[#1a1a1a] font-bold text-sm font-[family-name:var(--font-heading)] shadow-lg shadow-[#d4a843]/25 group-hover:shadow-[#d4a843]/40 transition-shadow">
            BA
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1 relative">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-[var(--glow)] border border-[var(--border-hover)]/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg chip flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-hover)]/40 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {theme === "dark" ? <i className="fa-solid fa-sun text-sm" /> : <i className="fa-solid fa-moon text-sm" />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button
            className="md:hidden w-9 h-9 rounded-lg chip flex items-center justify-center text-[var(--text-secondary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            onKeyDown={handleKeyDown}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <i className="fa-solid fa-xmark text-sm" /> : <i className="fa-solid fa-bars text-sm" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-strong border-t border-[var(--border-color)]"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive ? "text-[var(--accent)] bg-[var(--glow)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glow)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
