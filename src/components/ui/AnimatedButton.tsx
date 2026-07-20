"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function AnimatedButton({ href, children, variant = "primary", size = "md", className = "", onClick }: AnimatedButtonProps) {
  const sizeClasses = { sm: "px-4 py-2 text-xs", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-sm" };

  const base = "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 group cursor-pointer " + sizeClasses[size];

  const variants: Record<string, string> = {
    primary: base + " bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 " + className,
    secondary: base + " chip text-[var(--text-primary)] hover:text-[var(--accent)] " + className,
    ghost: base + " text-[var(--accent)] hover:bg-[var(--glow)] " + className,
  };

  const content = (
    <>
      {children}
      <ArrowRight size={size === "sm" ? 14 : 16} className="group-hover:translate-x-1 transition-transform" />
    </>
  );

  if (href) {
    return <Link href={href} className={variants[variant]}>{content}</Link>;
  }

  return <button onClick={onClick} className={variants[variant]}>{content}</button>;
}
