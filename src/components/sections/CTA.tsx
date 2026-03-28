"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        const isHere = word.includes("here.");
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`mr-3 ${isHere ? "text-white/40" : ""}`}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export function CTA() {
  return (
    <section className="relative py-44 md:py-64 bg-black overflow-hidden border-t border-white/5 px-6">
      <div 
        className="absolute inset-x-0 bottom-0 top-[30%] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-heading italic text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-white">
          <BlurText text="Your brand starts here." />
        </h2>

        <motion.p 
          {...fadeUp(0.5)}
          className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/25 mt-8"
        >
          Free forever. No credit card. Setup in 5 minutes.
        </motion.p>

        <motion.div 
          {...fadeUp(0.7)}
          className="w-full max-w-lg mx-auto"
        >
          <div className="liquid-glass-strong rounded-full p-2 mt-10 flex items-center gap-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-transparent border-none outline-none px-6 font-body text-sm text-white placeholder:text-white/20 flex-1 w-full"
            />
            <Link href="/signup">
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.97 }}
                className="bg-white text-black rounded-full px-6 md:px-8 py-3 font-body font-medium text-sm flex items-center justify-center whitespace-nowrap gap-2 shrink-0"
              >
                START FOR FREE <ArrowRight size={14} />
              </motion.button>
            </Link>
          </div>
          
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/20 mt-6 text-center">
            Join 4,200+ Indian brands on Drape
          </p>

          <div className="mt-16 md:mt-24 w-full h-[1px] relative flex justify-center opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[120px] bg-white/20 blur-[80px] rounded-[100%]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[60px] bg-white/30 blur-[40px] rounded-[100%]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
