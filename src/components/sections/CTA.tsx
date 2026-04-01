"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
});

export function CTA() {
  return (
    <section className="relative bg-black border-t border-white/10 overflow-hidden" id="cta">
      {/* BACKGROUND TEXTURE */}
      <div 
        className="absolute inset-0 font-[family-name:var(--font-display)] font-bold text-[35vw] text-white/[0.02] pointer-events-none select-none z-0 flex items-center justify-center leading-none"
        style={{ letterSpacing: "-0.08em" }}
      >
        START
      </div>

      <div className="relative z-10 max-w-7xl mx-auto border-x border-white/10 py-44 md:py-64 lg:py-80 px-6 lg:px-12 text-center">
        <motion.h2 
          {...fadeUp(0)}
          className="font-[family-name:var(--font-display)] font-bold text-7xl md:text-9xl lg:text-[12rem] text-white tracking-tighter leading-[0.8] mb-12"
        >
          OWN THE<br />
          <span className="text-white/20 italic font-heading">ASSET.</span>
        </motion.h2>

        <motion.p 
          {...fadeUp(0.2)}
          className="font-body font-light text-white/40 text-xl md:text-2xl lg:text-3xl max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Initialize your brand on the Drape protocol. No credit card required for initial deployment.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-col items-center gap-8">
          <Link href="/signup">
            <button className="group relative bg-white text-black px-12 md:px-20 py-6 md:py-8 font-bold text-base md:text-lg uppercase tracking-[0.4em] overflow-hidden transition-all hover:pr-24 active:scale-95">
              <span className="relative z-10">INITIALIZE FREE</span>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all">
                <ArrowUpRight size={24} />
              </div>
            </button>
          </Link>
          
          <div className="flex items-center gap-4 text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase">
            <div className="w-8 h-px bg-white/10" />
            Join 4,200+ Creators
            <div className="w-8 h-px bg-white/10" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-white/[0.01] py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "AVAILABILITY", value: "99.9% Uptime" },
            { label: "LATENCY", value: "< 200ms" },
            { label: "PROTECTION", value: "SSL Encrypted" },
            { label: "DISTRIBUTION", value: "Global Node" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">{item.label}</span>
              <span className="font-heading italic text-lg text-white/40">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
