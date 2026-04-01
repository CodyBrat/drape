"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
});

const plans = [
  {
    tier: "ENTRY",
    price: "$0",
    interval: "FOR LIFE",
    features: ["1 Node Storefront", "05 SKU Limit", "Drape Protocol Subdomain", "5% Transaction Fee"],
    action: "START FREE",
    note: "Initialize Brand"
  },
  {
    tier: "CORE",
    price: "$29",
    interval: "PER MONTH",
    features: ["Custom Endpoint Authority", "30 SKU Limit", "Full Aesthetic Sovereignty", "2% Transaction Fee", "Basic Analytics"],
    action: "UPGRADE NOW",
    note: "Scale Operation",
    highlight: true
  },
  {
    tier: "ELITE",
    price: "$79",
    interval: "PER MONTH",
    features: ["Unlimited SKU Artifacts", "0% Transaction Fee", "Priority Logistics Flow", "Real-time Data Synthesis", "Abandoned Cart Recovery"],
    action: "GO PROFESSIONAL",
    note: "Market Dominance"
  }
];

export function Pricing() {
  return (
    <section className="relative bg-black border-t border-white/10 overflow-hidden" id="pricing">
      {/* BACKGROUND TEXTURE */}
      <div 
        className="absolute right-[-10%] top-[40%] font-[family-name:var(--font-display)] font-bold text-[25vw] text-white/[0.015] pointer-events-none select-none z-0"
        style={{ letterSpacing: "-0.05em" }}
      >
        TIER
      </div>

      <div className="relative z-10 max-w-7xl mx-auto border-x border-white/10">
        <div className="border-b border-white/10 py-32 px-6 lg:px-12">
          <motion.h2 
            {...fadeUp(0)}
            className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-8xl text-white tracking-tighter leading-[0.95]"
          >
            VALUATION<br />
            <span className="text-white/50 italic font-heading tracking-normal">METRICS.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {plans.map((plan, i) => (
            <div key={i} className="flex flex-col p-8 lg:p-16 h-full group hover:bg-white/[0.02] transition-all relative overflow-hidden">
              {plan.highlight && (
                 <div className="absolute top-0 right-0 p-12 opacity-10 text-white pointer-events-none group-hover:opacity-20 transition-opacity">
                    <div className="font-heading italic text-6xl">★</div>
                 </div>
              )}
              
              <div className="font-mono text-[10px] tracking-[0.4em] text-white/50 uppercase mb-8">{plan.tier} TIER</div>
              
              <div className="mb-12">
                <div className="font-[family-name:var(--font-display)] font-bold text-6xl lg:text-8xl text-white tracking-tighter">
                  {plan.price}
                </div>
                <div className="font-heading italic text-xl text-white/60 mt-2">{plan.interval}</div>
              </div>

              <div className="space-y-6 flex-1 mb-16">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 group-hover:border-white/10 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="font-body text-sm lg:text-base text-white/70 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                 <Link href="/signup" className="block w-full">
                   <button className="w-full py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.3em] hover:bg-transparent hover:text-white border border-white transition-all">
                     {plan.action}
                   </button>
                 </Link>
                 <div className="mt-6 text-center">
                    <span className="font-heading italic text-white/20 text-lg">{plan.note}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-12 px-6 lg:px-12 text-center bg-white/[0.01]">
           <p className="font-mono text-[10px] tracking-[0.4em] text-white/50 uppercase">
             All deployments include: Global Asset Distribution · Integrated Ledger · Optimized Checkout Node
           </p>
        </div>
      </div>
    </section>
  );
}
