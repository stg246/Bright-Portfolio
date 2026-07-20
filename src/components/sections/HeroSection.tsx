"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    interface Dot { x: number; y: number; vx: number; vy: number; r: number; o: number; }
    const dots: Dot[] = [];
    const count = Math.min(60, Math.floor(canvas.width / 20));
    for (let i = 0; i < count; i++) {
      dots.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.5 + 0.5, o: Math.random() * 0.3 + 0.08 });
    }
    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width; if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height; if (d.y > canvas.height) d.y = 0;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${d.o})`; ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x; const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(212, 168, 67, ${0.06 * (1 - dist / 100)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  useEffect(() => { return init(); }, [init]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a08]/85 via-[#0d0d0a]/75 to-[#080806]/90" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d4a843]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#b8941f]/6 rounded-full blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#e8c468]/4 rounded-full blur-[180px]" />
      <HeroParticles />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left: Text Content */}
          <div className="max-w-[620px] text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 border border-[#d4a843]/20 bg-[#d4a843]/5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a843] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4a843]" />
              </span>
              <span className="text-sm font-medium text-[#e8c468] tracking-wide">Welcome to Activation Technology</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] mb-7">
              <span className="text-white">Empowering Businesses Through</span>
              <br />
              <span className="bg-gradient-to-r from-[#e8c468] via-[#f5d87a] to-[#e8c468] bg-clip-text text-transparent">Smart Digital Solutions</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="text-base sm:text-lg text-white/60 mb-10 leading-relaxed">
              Activation Technology delivers end-to-end digital solutions including web development,
              software engineering, ICT consultancy, networking infrastructure, graphic design,
              printing services, and comprehensive digital business solutions tailored for modern enterprises.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <a href="/contact" className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4a843] to-[#b8941f] text-[#1a1a1a] font-semibold text-sm shadow-lg shadow-[#d4a843]/30 hover:shadow-[#d4a843]/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">Get Started</span>
                <i className="fa-solid fa-arrow-right relative z-10 text-xs group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/services" className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#1a1a1a] hover:border-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                Explore Services
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div initial={{ opacity: 0, x: 60, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} className="relative flex-shrink-0 w-full max-w-[420px] lg:max-w-[480px] order-first lg:order-last">
            <div className="absolute -inset-6 bg-[#d4a843]/8 rounded-full blur-[60px]" />
            <img src="/Image1.png" alt="Bright Aggrey - ICT Professional" className="relative w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-20" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
