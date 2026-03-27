"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0, 0, 1] as const }
});

export function Pricing() {
  return (
    <section className="py-32 md:py-44 border-t border-white/5 px-6" id="pricing">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div {...fadeUp(0)}>
          <Badge>PRICING</Badge>
        </motion.div>

        <motion.h2 
          {...fadeUp(0.2)}
          className="mt-8 font-heading italic text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] text-white text-center"
        >
          Pay when<br />
          <span className="text-white/40">you earn.</span>
        </motion.h2>

        <motion.p 
          {...fadeUp(0.3)}
          className="mt-4 font-body font-light text-white/40 text-center"
        >
          Start free. Upgrade when you&apos;re ready. No lock-ins.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 mt-16 w-full">
          {/* FREE PLAN */}
          <motion.div {...fadeUp(0.4)} className="liquid-glass rounded-3xl p-8 flex flex-col">
            <div className="font-mono text-xs tracking-widest text-white/30 uppercase">FREE</div>
            <div className="mt-4 flex items-baseline">
              <span className="font-heading italic text-5xl text-white">₹0</span>
              <span className="font-body text-sm text-white/30 ml-2">/month</span>
            </div>
            
            <div className="border-t border-white/5 my-6" />
            
            <div className="space-y-3 flex-1">
              {[
                '1 store',
                'Up to 5 products',
                'Drape subdomain',
                '5% commission per sale'
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                  <span className="font-body text-sm text-white/50">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-8 py-3 bg-transparent hover:bg-white/5 border-white/10 text-white/60">
              START FREE
            </Button>
          </motion.div>

          {/* STARTER PLAN */}
          <motion.div {...fadeUp(0.5)} className="liquid-glass-strong rounded-3xl p-8 border border-white/20 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 liquid-glass rounded-full px-4 py-1 font-mono text-[10px] tracking-widest text-white">
              MOST POPULAR
            </div>
            <div className="font-mono text-xs tracking-widest text-white/30 uppercase">STARTER</div>
            <div className="mt-4 flex items-baseline">
              <span className="font-heading italic text-5xl text-white">₹299</span>
              <span className="font-body text-sm text-white/30 ml-2">/month</span>
            </div>
            
            <div className="border-t border-white/5 my-6" />
            
            <div className="space-y-3 flex-1">
              {[
                'Up to 30 products',
                'Custom domain',
                'Remove Drape branding',
                'All templates',
                '2% commission per sale',
                'Basic analytics'
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-1.5 shrink-0" />
                  <span className="font-body text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="solid" className="w-full mt-8 py-3">
              GET STARTED
            </Button>
          </motion.div>

          {/* GROWTH PLAN */}
          <motion.div {...fadeUp(0.6)} className="liquid-glass rounded-3xl p-8 flex flex-col">
            <div className="font-mono text-xs tracking-widest text-white/30 uppercase">GROWTH</div>
            <div className="mt-4 flex items-baseline">
              <span className="font-heading italic text-5xl text-white">₹799</span>
              <span className="font-body text-sm text-white/30 ml-2">/month</span>
            </div>
            
            <div className="border-t border-white/5 my-6" />
            
            <div className="space-y-3 flex-1">
              {[
                'Unlimited products',
                '0% commission',
                'WhatsApp notifications',
                'Abandoned cart recovery',
                'Full analytics',
                'Priority fulfillment'
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                  <span className="font-body text-sm text-white/50">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-8 py-3 bg-transparent hover:bg-white/5 border-white/10 text-white/60">
              GO PRO
            </Button>
          </motion.div>
        </div>

        <motion.div 
          {...fadeUp(0.8)}
          className="mt-12 text-center"
        >
          <p className="font-mono text-xs tracking-widest text-white/20 leading-relaxed uppercase">
            All plans include: Razorpay payments · UPI + COD · Indian fulfillment · Mobile-optimized storefront
          </p>
        </motion.div>
      </div>
    </section>
  );
}
