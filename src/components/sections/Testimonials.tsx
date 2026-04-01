"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
});

const testimonials = [
  {
    quote: "I was spending $100/month on fragmented platforms and apps. Drape simplified everything. One interface, one bill.",
    name: "Alex S.",
    role: "Director",
    brand: "VOIDWEAR"
  },
  {
    quote: "The speed of setup is unmatched. Our storefront was live and processing orders before the first cup of coffee.",
    name: "Sarah V.",
    role: "Founder",
    brand: "KORA STUDIOS"
  },
  {
    quote: "The unified checkout experience is a direct revenue driver. We've seen a massive boost in global conversion.",
    name: "Julian T.",
    role: "CEO",
    brand: "THORNE"
  }
];

export function Testimonials() {
  return (
    <section className="relative bg-black border-t border-white/10 overflow-hidden" id="testimonials">
      {/* BACKGROUND TEXTURE */}
      <div 
        className="absolute left-[-10%] top-[30%] font-[family-name:var(--font-display)] font-bold text-[25vw] text-white/[0.015] pointer-events-none select-none z-0"
        style={{ letterSpacing: "-0.05em" }}
      >
        WITNESS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto border-x border-white/10">
        <div className="border-b border-white/10 py-32 px-6 lg:px-12">
          <motion.h2 
            {...fadeUp(0)}
            className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-8xl text-white tracking-tighter leading-[0.95]"
          >
            CLIENT<br />
            <span className="text-white/50 italic font-heading tracking-normal">TESTIMONY.</span>
          </motion.h2>
        </div>

        <div className="divide-y divide-white/10">
          {testimonials.map((t, i) => (
            <div key={i} className="py-24 lg:py-44 px-6 lg:px-12 group hover:bg-white/[0.02] transition-all">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="lg:col-span-3">
                  <div className="font-mono text-[10px] tracking-[0.4em] text-white/50 uppercase mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-white/40" /> SIGNAL {i + 1}
                  </div>
                  <div className="mt-4">
                    <div className="text-white font-bold tracking-tight">{t.name}</div>
                    <div className="font-heading italic text-white/60 mt-1">{t.role}</div>
                    <div className="font-mono text-[9px] tracking-widest text-[#111111] bg-white px-2 py-0.5 rounded-full inline-block mt-4 uppercase font-black">{t.brand}</div>
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <motion.blockquote 
                    {...fadeUp(0.1)}
                    className="font-heading italic text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight relative"
                  >
                    <span className="absolute -left-12 -top-12 text-[10rem] text-white/[0.05] pointer-events-none leading-none select-none font-[family-name:var(--font-display)]">&quot;</span>
                    {t.quote}
                  </motion.blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
