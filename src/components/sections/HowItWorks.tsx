"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
});

const steps = [
  {
    number: "01",
    title: "ARCHITECT.",
    body: "Initialize your store blueprint. Map your brand designation and aesthetic to our enterprise-grade storefront nodes.",
    detail: "3 Minute Deployment"
  },
  {
    number: "02",
    title: "SYNTHESIZE.",
    body: "Upload your design artifacts. Set your valuation. Our system automatically distributes your creative assets across the fulfillment protocol.",
    detail: "Zero-Loss Assets"
  },
  {
    number: "03",
    title: "LIQUIDATE.",
    body: "Your store is active. Customers enter the endpoint, process global payments, and trigger automated logistics. Capital flows directly to your account.",
    detail: "Instant Payouts"
  }
];

export function HowItWorks() {
  return (
    <section className="relative bg-black border-t border-white/10 overflow-hidden" id="how-it-works">
      {/* SECTION HEADER */}
      <div className="border-b border-white/10 py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
          <motion.h2 
            {...fadeUp(0)}
            className="font-[family-name:var(--font-display)] font-bold text-7xl md:text-9xl text-white tracking-tighter leading-[0.8] max-w-2xl"
          >
            THE<br />
            <span className="text-white/20 italic font-heading">PROTOCOL.</span>
          </motion.h2>
          
          <motion.p 
            {...fadeUp(0.2)}
            className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase max-w-xs leading-relaxed"
          >
            A triple-node deployment system engineered for maximum brand velocity and zero friction.
          </motion.p>
        </div>
      </div>

      {/* STEPS GRID */}
      <div>
        {steps.map((step, i) => (
          <div key={i} className="relative border-b border-white/10 group last:border-b-0">
            {/* LARGE BACKGROUND NUMBER */}
            <div 
              className="absolute left-[5%] top-[50%] -translate-y-1/2 font-[family-name:var(--font-display)] font-bold text-[30vw] md:text-[20vw] text-white/[0.015] pointer-events-none select-none z-0 group-hover:text-white/[0.04] transition-all duration-1000"
              style={{ letterSpacing: "-0.05em" }}
            >
              {step.number}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-48 lg:py-64">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                <div className="lg:col-span-3">
                  <div className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-px bg-white/20" /> PHASE {step.number}
                  </div>
                </div>
                
                <div className="lg:col-span-6">
                  <motion.h3 
                    {...fadeUp(0.1)}
                    className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-[8rem] lg:text-[10rem] text-white tracking-tighter leading-[0.85] mb-8"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    {...fadeUp(0.3)}
                    className="font-body font-light text-white/50 text-xl md:text-2xl lg:text-3xl max-w-2xl leading-relaxed"
                  >
                    {step.body}
                  </motion.p>
                </div>

                <div className="lg:col-span-3 flex justify-end">
                   <div className="font-heading italic text-2xl text-white/20 whitespace-nowrap lg:rotate-90 origin-right lg:translate-x-full">
                     {step.detail}
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
