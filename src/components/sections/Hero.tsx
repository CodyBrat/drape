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
    <section 
      className="relative min-h-screen w-full flex flex-col items-center pt-40 pb-32 px-6 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05) 0%, transparent 70%)"
      }}
    >
      <div className="flex flex-col items-center text-center z-10 w-full max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Badge>THE PLATFORM FOR INDIAN BRANDS</Badge>
        </motion.div>

        <h1 className="mt-8 font-heading italic text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight leading-[0.88] text-white max-w-4xl mx-auto">
          <BlurText text="Start Your Brand Today." />
        </h1>

        <motion.p 
          {...fadeUp(0.6)}
          className="font-body font-light text-white/50 text-base md:text-lg max-w-md mx-auto mt-6"
        >
          Everything you need to launch, sell, and grow your clothing brand. No Shopify. No apps. Just Drape.
        </motion.p>

        <motion.div 
          {...fadeUp(0.8)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <Button variant="primary">
            Start for Free <ArrowUpRight size={14} />
          </Button>
          <Button variant="solid">
            See How It Works
          </Button>
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
        className="relative w-full max-w-[900px] mx-auto mt-20 aspect-video liquid-glass rounded-3xl overflow-hidden z-10"
      >
        <div 
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="font-mono text-white/10 text-xs tracking-widest">DRAPE DASHBOARD</span>
        </div>

        <div className="absolute -top-4 -left-4 md:top-6 md:-left-6 liquid-glass rounded-2xl p-4 md:p-6 z-20">
          <div className="font-heading italic text-3xl md:text-4xl text-white">4,200+</div>
          <div className="font-mono text-xs text-white/40 tracking-wider mt-1 uppercase">stores created</div>
        </div>

        <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 liquid-glass rounded-2xl p-4 md:p-6 z-20">
          <div className="font-heading italic text-3xl md:text-4xl text-white">₹2.4Cr+</div>
          <div className="font-mono text-xs text-white/40 tracking-wider mt-1 uppercase">earned by brands</div>
        </div>
      </motion.div>
    </section>
  );
}
