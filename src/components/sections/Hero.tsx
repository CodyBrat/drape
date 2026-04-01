"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0, 0, 1] as const }
});

const BlurText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  
  return (
    <span className="inline-flex flex-wrap justify-center overflow-hidden">
      {words.map((word, i) => {
        const isBrand = word.includes("Brand");
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`mr-3 ${isBrand ? "text-white/50" : ""}`}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-32 px-6 overflow-hidden">
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          src="/background.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-90" 
        />
        
        {/* Seamless transition to black at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        {/* Subtle radial glow at the top for aesthetic */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="flex flex-col items-center text-center z-10 w-full max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Badge>THE PLATFORM FOR EVERY BRAND</Badge>
        </motion.div>

        <h1 className="mt-8 font-heading italic text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight leading-[1.1] text-white max-w-5xl mx-auto pb-4">
          <BlurText text="Start Your Brand Today." />
        </h1>

        <motion.p 
          {...fadeUp(0.6)}
          className="font-body font-light text-white/50 text-base md:text-lg max-w-md mx-auto mt-6"
        >
          Everything you need to launch, sell, and grow your clothing brand. No Shopify. No apps. Just Drape.
        </motion.p>

        <motion.div 
          {...fadeUp(1)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <Link href="/signup">
            <Button variant="primary">
              Start for Free <ArrowUpRight size={14} />
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="solid">
              See How It Works
            </Button>
          </Link>
        </motion.div>

        <motion.p 
          {...fadeUp(1)}
          className="font-mono text-xs text-white/25 tracking-widest uppercase mt-6"
        >
          Free forever · No credit card · 5 minute setup
        </motion.p>
      </div>

      <motion.div 
        {...fadeUp(0.9)}
        className="relative w-full max-w-[900px] mx-auto mt-20 aspect-video z-10"
      >
        <div className="absolute inset-0 z-10">
          <div className="liquid-glass rounded-3xl w-full h-full flex flex-col overflow-hidden relative">
            {/* Background Grid */}
            <div 
              className="absolute inset-0 z-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            
            {/* Mockup Header */}
            <div className="w-full h-12 md:h-16 border-b border-white/5 flex items-center px-6 gap-4 z-10 relative bg-white/[0.02]">
              <div className="flex gap-2 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="w-32 h-3 rounded-full bg-white/10" />
              <div className="ml-auto w-8 h-8 rounded-full bg-white/10" />
            </div>

            {/* Mockup Body */}
            <div className="flex-1 flex p-6 gap-6 z-10 relative">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 w-48 border-r border-white/5 pr-6">
                <div className="w-full h-3 rounded-full bg-white/20 mb-4" />
                <div className="w-3/4 h-3 rounded-full bg-white/10" />
                <div className="w-4/5 h-3 rounded-full bg-white/10" />
                <div className="w-2/3 h-3 rounded-full bg-white/10" />
                <div className="w-1/2 h-3 rounded-full bg-white/10" />
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Stats Row */}
                <div className="flex gap-4">
                  <div className="flex-1 h-24 md:h-32 rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-end">
                    <div className="w-1/3 h-2 rounded-full bg-white/20 mb-auto" />
                    <div className="w-1/2 h-4 md:h-6 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 h-24 md:h-32 rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-end">
                    <div className="w-1/3 h-2 rounded-full bg-white/20 mb-auto" />
                    <div className="w-2/3 h-4 md:h-6 rounded-full bg-white/10" />
                  </div>
                  <div className="hidden lg:flex flex-1 h-32 rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex-col justify-end">
                    <div className="w-1/3 h-2 rounded-full bg-white/20 mb-auto" />
                    <div className="w-1/2 h-6 rounded-full bg-white/10" />
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden flex items-end">
                  {/* Fake Chart Gradient */}
                  <div 
                    className="w-full h-[60%] bg-gradient-to-t from-white/10 to-transparent flex items-end opacity-50"
                    style={{ clipPath: "polygon(0 100%, 0 60%, 15% 40%, 30% 50%, 45% 20%, 60% 30%, 80% 10%, 100% 25%, 100% 100%)" }}
                  />
                  {/* overlay text */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="font-mono text-white/20 text-xs tracking-widest hidden md:block">DRAPE DASHBOARD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20">
          <div className="liquid-glass rounded-2xl p-4 md:p-6">
            <div className="font-heading italic text-3xl md:text-4xl text-white">4,200+</div>
            <div className="font-mono text-xs text-white/40 tracking-wider mt-1 uppercase">stores created</div>
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20">
          <div className="liquid-glass rounded-2xl p-4 md:p-6">
            <div className="font-heading italic text-3xl md:text-4xl text-white">₹2.4Cr+</div>
            <div className="font-mono text-xs text-white/40 tracking-wider mt-1 uppercase">earned by brands</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
