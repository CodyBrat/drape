"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0, 0, 1] as const }
});

export function HowItWorks() {
  return (
    <section className="py-32 md:py-44 border-t border-white/5 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Badge>THE PROCESS</Badge>
        </motion.div>

        <motion.h2 
          {...fadeUp(0.2)}
          className="mt-8 font-heading italic text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] text-white"
        >
          Launch in<br />
          <span className="text-white/40">three</span> steps.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <motion.div {...fadeUp(0.3)} className="liquid-glass rounded-2xl p-8 flex flex-col">
            <div className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">
              01 / SIGN UP
            </div>
            <h3 className="font-heading italic text-2xl text-white">Create your store.</h3>
            <p className="font-body font-light text-sm text-white/50 mt-3 flex-1">
              Sign up free. Pick a template. Add your brand name and logo. Your store is live in minutes.
            </p>
            <div className="liquid-glass rounded-xl p-4 mt-6 h-40 flex items-center justify-center">
              <div className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 px-4 text-white/20 font-mono text-xs flex items-center">
                <span className="animate-pulse mr-1">|</span> Enter store name
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="liquid-glass rounded-2xl p-8 flex flex-col">
            <div className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">
              02 / ADD PRODUCTS
            </div>
            <h3 className="font-heading italic text-2xl text-white">Add your products.</h3>
            <p className="font-body font-light text-sm text-white/50 mt-3 flex-1">
              Upload your designs. Set your prices. We connect you to premium print partners for fulfillment.
            </p>
            <div className="liquid-glass rounded-xl p-4 mt-6 h-40 flex flex-col items-center justify-center gap-3 border border-white/5 border-dashed">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white/50 text-xl font-light">+</span>
              </div>
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Upload Design</span>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="liquid-glass rounded-2xl p-8 flex flex-col">
            <div className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">
              03 / SELL
            </div>
            <h3 className="font-heading italic text-2xl text-white">Start selling.</h3>
            <p className="font-body font-light text-sm text-white/50 mt-3 flex-1">
              Share your store link. Customers pay via UPI, cards, or COD. Money lands in your account.
            </p>
            <div className="liquid-glass rounded-xl p-4 mt-6 h-40 flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between liquid-glass rounded-lg p-3">
                <span className="font-mono text-[10px] text-white/70 tracking-widest">UPI PAY</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              </div>
              <div className="flex items-center justify-between liquid-glass rounded-lg p-3 opacity-50">
                <span className="font-mono text-[10px] text-white/70 tracking-widest">CARDS</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
