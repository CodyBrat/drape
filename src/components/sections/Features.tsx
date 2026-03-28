"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0, 0, 1] as const }
});

export function Features() {
  return (
    <div id="features">
      {/* SECTION 5 — STORE BUILDER */}
      <section className="py-44 md:py-64 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp(0)}>
            <Badge>STORE BUILDER</Badge>
            <h2 className="mt-8 font-heading italic text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] text-white">
              Your store.<br />
              <span className="text-white/40">Your rules.</span>
            </h2>
            <p className="mt-6 font-body font-light text-white/50 text-base max-w-sm">
              Beautiful templates built specifically for fashion brands. Customize everything — colors, fonts, layout. No coding needed.
            </p>
            <div className="mt-8 space-y-3">
              {['Fashion-first templates', 'Custom domain support', 'Mobile-first design', 'Live preview while editing'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="font-body text-sm text-white/60">{feature}</span>
                </div>
              ))}
            </div>
            <Button variant="primary" className="mt-8">
              Start Building <ArrowUpRight size={14} />
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-16 lg:mt-0">
            <div className="liquid-glass rounded-3xl p-6 aspect-4/3 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5 border-r border-white/10 pr-4">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="liquid-glass rounded-full px-3 py-1 flex-1 max-w-[200px] flex justify-center">
                  <span className="font-mono text-[10px] text-white/30 tracking-widest">mystore.drape.in</span>
                </div>
              </div>
              
              <div 
                className="flex-1 rounded-2xl border border-white/5 relative flex items-center justify-center overflow-hidden"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              >
                <span className="font-mono text-white/10 text-xs tracking-widest">STORE PREVIEW</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — PAYMENTS */}
      <section className="py-44 md:py-64 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
          <motion.div {...fadeUp(0)} className="lg:order-2">
            <Badge>PAYMENTS</Badge>
            <h2 className="mt-8 font-heading italic text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] text-white">
              Every way<br />
              <span className="text-white/40">Indians pay.</span>
            </h2>
            <p className="mt-6 font-body font-light text-white/50 text-base max-w-sm">
              UPI, cards, net banking, wallets, and cash on delivery — all built in. No Stripe. No PayPal. Just Razorpay, the way India actually pays.
            </p>
            <div className="mt-8 space-y-3">
              {['UPI & QR payments', 'Cash on delivery', 'Instant INR payouts', 'Zero transaction fees on paid plans'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="font-body text-sm text-white/60">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-16 lg:mt-0 lg:order-1">
            <div className="liquid-glass rounded-3xl p-8 max-w-sm mx-auto lg:ml-0">
              <div className="flex items-center justify-between border-b border-white/5 py-4">
                <span className="font-mono text-xs text-white/80 tracking-widest">UPI / QR CODE</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]" />
              </div>
              <div className="flex items-center justify-between border-b border-white/5 py-4">
                <span className="font-mono text-xs text-white/50 tracking-widest">DEBIT/CREDIT CARD</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 py-4">
                <span className="font-mono text-xs text-white/50 tracking-widest">CASH ON DELIVERY</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 py-4">
                <span className="font-mono text-xs text-white/50 tracking-widest">NET BANKING</span>
              </div>
              
              <button className="bg-white text-black rounded-full w-full py-4 text-sm font-body font-medium mt-6 transition-transform hover:scale-105 active:scale-95">
                PAY ₹2,499
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — FULFILLMENT */}
      <section className="py-44 md:py-64 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp(0)}>
            <Badge>FULFILLMENT</Badge>
            <h2 className="mt-8 font-heading italic text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] text-white">
              Print. Pack.<br />
              Ship. <span className="text-white/40">Repeat.</span>
            </h2>
            <p className="mt-6 font-body font-light text-white/50 text-base max-w-sm">
              We connect your store to Indian print partners. Upload your design, set your price, and we handle everything from printing to your customer&apos;s doorstep.
            </p>
            <div className="mt-8 space-y-3">
              {['Indian print partners', '2-5 day delivery', 'Flat ₹80 shipping', 'Real-time order tracking'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="font-body text-sm text-white/60">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-16 lg:mt-0">
            <div className="liquid-glass rounded-3xl p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-white/50 tracking-widest">#ORDER-6472</span>
                <span className="liquid-glass rounded-full px-3 py-1 font-mono text-[10px] text-white/60 tracking-widest">
                  IN TRANSIT
                </span>
              </div>
              
              <div className="relative pl-6 space-y-8">
                <div className="absolute left-1.5 top-2 bottom-2 w-px bg-white/10" />
                
                {[
                  { text: 'ORDER PLACED', active: false },
                  { text: 'PRINTING', active: false },
                  { text: 'PACKED & READY', active: false },
                  { text: 'OUT FOR DELIVERY', active: true },
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center">
                    <div className={`absolute -left-6 w-3 h-3 rounded-full flex items-center justify-center -translate-x-1/2 bg-black`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${step.active ? 'bg-white' : 'bg-white/30'}`} />
                    </div>
                    <span className={`font-mono text-xs tracking-widest ${step.active ? 'text-white' : 'text-white/40'}`}>
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
