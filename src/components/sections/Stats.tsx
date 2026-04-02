"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "STORES CREATED", value: "4,200+", detail: "Enterprise Grade" },
  { label: "EARNED BY BRANDS", value: "$2.4M+", detail: "Liquid Growth" },
  { label: "DELIVERY SUCCESS", value: "98%", detail: "Optimized Protocol" },
  { label: "AVG SETUP TIME", value: "5 MINS", detail: "Zero Friction" },
];

export function Stats() {
  return (
    <section className="relative w-full bg-black border-y border-white/10 py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, i) => (
          <div key={i} className="relative group p-12 md:p-16 lg:p-20 overflow-hidden transition-all duration-700 hover:bg-white/[0.03]">
            {/* BACKGROUND TEXTURE */}
            <div 
              className="absolute -bottom-4 -right-10 font-[family-name:var(--font-display)] font-bold text-9xl text-white/[0.02] pointer-events-none select-none transition-all duration-700 group-hover:text-white/[0.05]"
              style={{ letterSpacing: "-0.05em" }}
            >
              {stat.value}
            </div>

            <div className="relative z-10">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-white/40" /> {stat.label}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="font-[family-name:var(--font-display)] font-bold text-5xl md:text-6xl text-white tracking-tighter leading-none"
              >
                {stat.value}
              </motion.div>

              <div className="mt-8 font-heading italic text-xl text-white/70">
                {stat.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
