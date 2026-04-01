"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
});

const SectionLabel = ({ number, text }: { number: string, text: string }) => (
  <div className="flex items-center gap-6 mb-12">
    <span className="font-mono text-xs tracking-[0.4em] text-white/50 whitespace-nowrap">{number}</span>
    <div className="h-px w-full bg-white/20" />
    <span className="font-mono text-xs tracking-[0.4em] text-white/50 whitespace-nowrap">{text}</span>
  </div>
);

export function Features() {
  return (
    <div id="features" className="bg-black">
      {/* 01 — THE INTERFACE */}
      <section className="relative min-h-screen py-32 md:py-48 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        {/* BACKGROUND TEXTURE */}
        <div 
          className="absolute left-[-5%] top-[10%] font-[family-name:var(--font-display)] font-bold text-[25vw] leading-none text-white/[0.02] pointer-events-none select-none z-0"
          style={{ letterSpacing: "-0.05em" }}
        >
          STORE
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionLabel number="01" text="THE INTERFACE" />
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <motion.h2 
                {...fadeUp(0)}
                className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.95] mb-12"
              >
                YOUR STORE.<br />
                <span className="text-white/50 italic font-heading pb-4 block tracking-normal">YOUR AUTHORITY.</span>
              </motion.h2>
              
              <motion.p 
                {...fadeUp(0.2)}
                className="font-body font-light text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
              >
                Zero-code architecture for the modern creator. Build an endpoint that reflects your brand&apos;s DNA, not a template&apos;s constraints.
              </motion.p>
            </div>

            <div className="lg:col-span-5 pt-12 lg:pt-0">
               <motion.div 
                 {...fadeUp(0.4)}
                 className="grid grid-cols-1 gap-px bg-white/10 border border-white/10"
               >
                 {[
                   { title: "Dynamic Themes", body: "Engineered for fashion retail." },
                   { title: "Protocol Agnostic", body: "Connect any global domain." },
                   { title: "Mobile Core", body: "Optimized for high-speed commerce." },
                   { title: "Live Synthesis", body: "Real-time visual manifest editor." }
                 ].map((feat, i) => (
                   <div key={i} className="bg-black p-8 group hover:bg-white/[0.04] transition-colors">
                     <h4 className="font-mono text-[10px] tracking-widest text-white/60 uppercase mb-2">SYSTEM.{i + 1}</h4>
                     <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                     <p className="text-sm text-white/70 font-body leading-relaxed">{feat.body}</p>
                   </div>
                 ))}
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — THE CAPITAL (WHITE SECTION) */}
      <section className="relative min-h-screen py-32 md:py-48 px-6 lg:px-12 bg-[#FAFAFA] text-black overflow-hidden border-t border-black/10">
        <div 
          className="absolute right-[-5%] top-[20%] font-[family-name:var(--font-display)] font-bold text-[25vw] leading-none text-black/[0.03] pointer-events-none select-none z-0"
          style={{ letterSpacing: "-0.05em" }}
        >
          CAPITAL
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12 text-black">
            <span className="font-mono text-xs tracking-[0.4em] text-black/50 whitespace-nowrap">02</span>
            <div className="h-px w-full bg-black/20" />
            <span className="font-mono text-xs tracking-[0.4em] text-black/50 whitespace-nowrap">THE CAPITAL</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
               <motion.div 
                 {...fadeUp(0.1)}
                 className="liquid-glass border-black/10 rounded-[40px] p-12 lg:p-16 max-w-md"
               >
                 {['Global Payments', 'Asset Payouts', 'On-Chain Ledger', 'Zero Redirection'].map((p, i) => (
                   <div key={i} className="flex justify-between items-center py-6 border-b border-black/10 last:border-0 group cursor-default">
                     <span className="font-mono text-sm tracking-widest text-black/60 group-hover:text-black transition-colors">{p}</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-black/40 group-hover:bg-black transition-all" />
                   </div>
                 ))}
               </motion.div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.h2 
                {...fadeUp(0)}
                className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-8xl lg:text-9xl text-black tracking-tighter leading-[0.95] mb-12"
              >
                GLOBAL<br />
                <span className="text-black/60 italic font-heading pb-4 block tracking-normal">LIQUIDITY.</span>
              </motion.h2>
              
              <motion.p 
                {...fadeUp(0.2)}
                className="font-body font-light text-black/70 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
              >
                Integrated global payments. No redirects. No friction. Every transaction archived in real-time.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — THE FULFILLMENT */}
      <section className="relative min-h-screen py-32 md:py-48 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div 
          className="absolute left-[50%] translate-x-[-50%] bottom-0 font-[family-name:var(--font-display)] font-bold text-[30vw] leading-none text-white/[0.02] pointer-events-none select-none z-0"
          style={{ letterSpacing: "-0.05em" }}
        >
          SYNC
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionLabel number="03" text="THE LOGISTICS" />
          
          <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.h2 
              {...fadeUp(0)}
              className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.95] mb-12"
            >
              PRINT.<br />
              PACK.<br />
              <span className="text-white/50 italic font-heading tracking-normal">SYNC.</span>
            </motion.h2>
            
            <motion.p 
              {...fadeUp(0.2)}
              className="font-body font-light text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Direct endpoint-to-printer manifest synchronization. We handle the physical layer, you scale the visual layer.
            </motion.p>
          </div>

          <motion.div 
            {...fadeUp(0.4)}
            className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-5xl mx-auto"
          >
            {[
              { label: "PROTOCOL", title: "Automated Workflow", body: "Every sale triggers a direct fulfillment packet to our priority print hubs." },
              { label: "VELOCITY", title: "Global Transit", body: "Flat rate worldwide shipping with optimized local carrier handoffs." },
              { label: "ARCHIVE", title: "Order History", body: "Real-time tracking manifest for every single parcel, integrated into your dashboard." }
            ].map((card, i) => (
              <div key={i} className="bg-black p-10 group hover:bg-white/[0.04] transition-all">
                <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-4">{card.label}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-sm text-white/70 font-body leading-relaxed">{card.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
