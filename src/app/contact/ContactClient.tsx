"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site-config";

export default function ContactClient() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }, 3000);
  };

  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Contact" title="Get In Touch" description="Have a project in mind? Let&apos;s work together." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: <Phone size={20} />, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: <Mail size={20} />, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: <MapPin size={20} />, label: "Location", value: siteConfig.location, href: null },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="card-base rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-base rounded-2xl p-8 gradient-border space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Name</label>
                  <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Email</label>
                  <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Subject</label>
                <input type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all" placeholder="Project inquiry" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Message</label>
                <textarea required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" disabled={submitted} className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 cursor-pointer">
                {submitted ? <><CheckCircle size={18} /> Message Sent!</> : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
