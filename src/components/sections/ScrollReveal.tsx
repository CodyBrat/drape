"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollReveal() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end center"]
  });

  const text = "We built Drape because we were tired of watching Indian brands struggle with tools built for America. Your brand deserves better.";
  
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative py-44 md:py-64 bg-black px-6 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[1.2] flex flex-wrap justify-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            const isIndianBrands = word === "Indian" || word === "brands";
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.08, 1]
            );

            return (
              <motion.span
                key={i}
                style={{ opacity: isIndianBrands ? 1 : opacity }}
                className="mr-2 lg:mr-3 mb-2"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
