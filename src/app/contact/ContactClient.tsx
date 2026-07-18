"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { siteConfig } from "@/data/site-config";

export default function ContactClient() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formState) });
      if (res.ok) { setStatus("sent"); setFormState({ name: "", email: "", phone: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-hover)] transition-all duration-300";

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionTitle label="Contact" title="Get in Touch" description="Have a project in mind or need ICT services? Let's discuss how I can help." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Location", value: siteConfig.location },
              { icon: Mail, label: "Email", value: siteConfig.email },
              { icon: Phone, label: "Phone", value: siteConfig.phone },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlassCard className="p-5" hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--glow)] text-[var(--accent)] shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">{item.label}</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-0.5">{item.value}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <GlassCard className="p-6 sm:p-8" hover={false} glow>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2 font-[family-name:var(--font-heading)]">Name *</label>
                    <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2 font-[family-name:var(--font-heading)]">Email *</label>
                    <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2 font-[family-name:var(--font-heading)]">Phone</label>
                  <input type="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className={inputClass} placeholder="+233 XX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2 font-[family-name:var(--font-heading)]">Message *</label>
                  <textarea required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell me about your project or inquiry..." />
                </div>

                {status === "sent" && <div className="flex items-center gap-2 text-sm text-[var(--emerald)]"><CheckCircle className="h-4 w-4" />Message sent successfully! I&apos;ll get back to you soon.</div>}
                {status === "error" && <p className="text-sm text-red-400">Failed to send message. Please try again.</p>}

                <AnimatedButton type="submit" disabled={status === "sending"} size="lg">
                  {status === "sending" ? "Sending..." : <><Send className="h-4 w-4" />Send Message</>}
                </AnimatedButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
