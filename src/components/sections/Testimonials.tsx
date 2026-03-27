"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0, 0, 1] as const }
});

export function Testimonials() {
  const testimonials = [
    {
      quote: "I was spending ₹8,000/month on Shopify and apps. Drape cut that to ₹299. Same features, built for India.",
      name: "Arjun S.",
      brand: "VOIDWEAR"
    },
    {
      quote: "Setup took literally 4 minutes. My store was live before I finished my chai.",
      name: "Priya M.",
      brand: "KORA STUDIOS"
    },
    {
      quote: "The UPI checkout alone is worth it. My conversion rate went up 40% because customers could just scan and pay.",
      name: "Rahul K.",
      brand: "STATIC NOISE"
    }
  ];

  return (
    <section className="py-32 md:py-44 border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Badge>WHAT BRANDS SAY</Badge>
        </motion.div>

        <motion.h2 
          {...fadeUp(0.2)}
          className="mt-8 font-heading italic text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] text-white"
        >
          They started<br />
          with <span className="text-white/40">Drape.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              {...fadeUp(0.3 + (i * 0.1))} 
              className="liquid-glass rounded-2xl p-8 flex flex-col"
            >
              <div className="font-heading italic text-6xl text-white/10 leading-none mb-4">
                &quot;
              </div>
              <p className="font-heading italic text-lg text-white/80 leading-relaxed flex-1">
                {t.quote}
              </p>
              
              <div className="border-t border-white/5 mt-6 pt-6 flex flex-col">
                <span className="font-body font-medium text-sm text-white">{t.name}</span>
                <span className="font-mono text-[10px] text-white/30 mt-1 uppercase tracking-widest">{t.brand}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
