"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    primary: base + " bg-gradient-to-r from-[#d4a843] to-[#b8941f] text-[#1a1a1a] hover:from-[#e8c468] hover:to-[#d4a843] shadow-lg shadow-[#d4a843]/25 hover:shadow-[#d4a843]/40 hover:-translate-y-0.5 " + className,
    secondary: base + " chip text-[var(--text-primary)] hover:text-[var(--accent)] " + className,
    ghost: base + " text-[var(--accent)] hover:bg-[var(--glow)] " + className,
  };

  const content = (
    <>
      {children}
      <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
    </>
  );

  if (href) {
    return <Link href={href} className={variants[variant]}>{content}</Link>;
  }

  return <button onClick={onClick} className={variants[variant]}>{content}</button>;
}
