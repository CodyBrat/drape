"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { 
  Space_Grotesk, 
  Instrument_Serif, 
  Barlow, 
  JetBrains_Mono 
} from "next/font/google";
import { Footer } from "@/components/sections/Footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ChevronLeft
} from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
  variable: "--font-heading",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { 
    duration: 0.8, 
    delay, 
    ease: [0.25, 0, 0, 1] as const
  }
});

const BlurText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={cn("inline-flex flex-wrap overflow-hidden", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7, 
            delay: i * 0.08,
            ease: [0.25, 0, 0, 1]
          }}
          className="mr-[0.3em] inline-block font-[family-name:var(--font-display)]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* --- SECTIONS --- */

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col pt-48 pb-32 px-6 md:px-12">
      <Link 
        href="/" 
        className="absolute top-32 left-6 md:left-12 flex items-center gap-2 font-mono text-[10px] text-white/30 hover:text-white transition-all uppercase tracking-[0.2em] group z-20"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to home
      </Link>
      <div 
        className="absolute bottom-[-20px] left-[-20px] pointer-events-none select-none z-0"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(8rem, 25vw, 28rem)",
          color: "rgba(255,255,255,0.04)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        DRAPE.
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div {...fadeUp(0)}>
          <span className="font-mono text-xs tracking-widest text-white/30 uppercase">
            ABOUT DRAPE
          </span>
        </motion.div>

        <h1 className="mt-8 font-[family-name:var(--font-display)] font-bold text-[clamp(4rem,12vw,12rem)] tracking-tighter leading-[1.05] text-white">
          <BlurText text="BUILDING" className="block" />
          <BlurText text="FOR EVERYONE." className="block" />
        </h1>

        <motion.p 
          {...fadeUp(0.6)}
          className="font-[family-name:var(--font-heading)] italic text-white/40 text-2xl md:text-4xl my-10"
        >
          the platform that should have existed years ago.
        </motion.p>

        <div className="mt-24 flex items-end justify-between flex-wrap gap-8">
          <motion.div {...fadeUp(0.8)} className="flex flex-col gap-8">
            <div>
              <div className="font-mono text-xs text-white/30 uppercase tracking-widest">FOUNDED</div>
              <div className="font-mono text-4xl font-bold text-white mt-1">2025</div>
            </div>
            <div>
              <div className="font-mono text-xs text-white/30 uppercase tracking-widest">ORIGIN</div>
              <div className="font-mono text-lg text-white mt-1">EST. 2025</div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(1)} className="max-w-xs">
            <p className="font-body font-light text-white/50 text-lg leading-relaxed">
              One person. One idea. One platform for every brand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ManifestoSection = () => {
  return (
    <section className="relative bg-[#FAFAFA] text-black py-32 px-6 md:px-12 overflow-hidden">
      <div 
        className="absolute right-[-40px] top-[-20px] pointer-events-none z-0"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(8rem, 20vw, 20rem)",
          color: "rgba(0,0,0,0.04)",
          fontWeight: 700,
        }}
      >
        WHY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {[
            {
              label: "THE PROBLEM",
              title: "Fragmented tools.",
              body: "The old way required 10 different subscriptions. 5 different dashboards. And zero synergy between design and distribution."
            },
            {
              label: "THE MARKET",
              title: "Endless complexity.",
              body: "Modern brands are moving at light speed, but legacy platforms are still stuck in the past with rigid, complex workflows."
            },
            {
              label: "THE SOLUTION",
              title: "Unified ecosystem.",
              body: "Store builder, dynamic production, global payments, priority fulfillment. Everything. One seamless experience."
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeUp(i * 0.1)}
              className="bg-[#FAFAFA] p-8"
            >
              <div className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-4">{item.label}</div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-black">{item.title}</h3>
              <p className="font-body font-light text-black/70 text-sm mt-3 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 max-w-4xl">
          <motion.div {...fadeUp(0)}>
            <div className="font-mono text-xs tracking-widest uppercase text-black/60">OUR STORY</div>
            <p className="mt-6 font-[family-name:var(--font-heading)] italic text-3xl md:text-5xl text-black leading-[1.35] max-w-3xl">
              &quot;We built Drape because we were tired of watching brands struggle with tools that were never built for them.&quot;
            </p>
          </motion.div>

          <div className="mt-16 space-y-8 max-w-2xl">
            {[
              "I was trying to start my own brand and I quickly realized the system was broken. I spent weeks trying to connect disconnected tools — design platforms, store builders, payment gateways — all built by different people with different goals.",
              "I couldn't get my vision live without navigating a maze of tutorials and hidden fees. The barrier to entry wasn't my creativity; it was the tools I was forced to use.",
              "So I built Drape. A single, vertically integrated platform where a brand owner can sign up, create their store, add their products, and start scaling — all in under 5 minutes. No external apps. No fragmentation. No compromise."
            ].map((para, i) => (
              <motion.p 
                key={i} 
                {...fadeUp(0.2 + i * 0.1)}
                className="font-body font-light text-black/85 text-lg leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div 
            {...fadeUp(0.5)}
            className="mt-20 border border-black/5 p-8 max-w-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white text-2xl font-bold">P</div>
              <div>
                <div className="text-xl font-bold text-black">Priyabrata Singh</div>
                <div className="font-mono text-[10px] text-black/60 tracking-widest uppercase mt-1">Founder, Drape</div>
                <div className="font-mono text-[10px] text-black/60 mt-1">EST. 2025</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-black/5">
              <p className="font-[family-name:var(--font-heading)] italic text-black/80 text-lg">
                &quot;If not us, who? If not now, when?&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  return (
    <section className="bg-black border-y border-white/5 overflow-hidden">
      <div className="py-2">
        <Marquee speed={40} gradient={false} autoFill>
          {[
            "4,200+ STORES", "UNPARALLELED GROWTH", 
            "98% DELIVERY SUCCESS", "5 MIN SETUP", 
            "GLOBAL REACH", 
            "FREE TO START", "BUILT FOR ALL"
          ].map((item, i) => (
            <div key={i} className="flex items-center px-8 border-r border-white/10 last:border-none">
              <span className="font-mono text-xs tracking-widest uppercase text-white/70 py-4 mr-8">{item}</span>
              <span className="text-white/50">·</span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="border-t border-white/5 py-2">
        <Marquee speed={30} direction="right" gradient={false} autoFill>
          {[
            "NO EXTRA APPS", "NATIVE PAYMENTS", 
            "UNIFIED LOGISTICS", "PREMIUM QUOTES", 
            "PRIORITY FULFILLMENT", "FAST DELIVERY"
          ].map((item, i) => (
            <div key={i} className="flex items-center px-8 border-r border-white/10 last:border-none">
              <span className="font-mono text-xs tracking-widest uppercase text-white/40 py-4 mr-8">{item}</span>
              <span className="text-white/20">·</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

const MissionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end center"]
  });

  const rawText = "Every brand deserves a platform built for the way creators shop, pay, and create. That platform is Drape.";
  const words = rawText.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative bg-black py-48 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] italic text-white tracking-tight leading-[1.2] flex flex-wrap justify-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.08, 1]);
            const isAlwaysVisible = word === "modern" || word === "brand" || word === "creates";
            
            return (
              <motion.span 
                key={i} 
                style={{ opacity: isAlwaysVisible ? 1 : opacity }}
                className="mr-[0.3em] mb-2 inline-block"
              >
                {word}
              </motion.span>
            );
          })}
        </p>

        <motion.div {...fadeUp(0.5)} className="mt-32">
          <div className="font-mono text-xs text-white/20 tracking-widest uppercase">OUR MISSION</div>
          <p className="mt-4 font-[family-name:var(--font-heading)] italic text-2xl text-white/60">
            Democratize brand-building for every young creator.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const BleedingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-black py-32 overflow-hidden"
    >
      <div className="space-y-4">
        <div className="overflow-hidden whitespace-nowrap">
          <motion.h2 
            style={{ x: xLeft }}
            className="font-[family-name:var(--font-display)] font-bold text-[clamp(4rem,12vw,12rem)] text-white tracking-tighter leading-none"
          >
            BUILT FOR CREATORS
          </motion.h2>
        </div>
        <div className="overflow-hidden whitespace-nowrap flex justify-end">
          <motion.h2 
            style={{ x: xRight }}
            className="font-[family-name:var(--font-display)] font-bold text-[clamp(4rem,12vw,12rem)] text-white/10 tracking-tighter leading-none text-right"
          >
            FOR MODERN BRANDS
          </motion.h2>
        </div>
        <div className="pt-8 text-center">
          <motion.p 
            style={{ opacity }}
            className="font-[family-name:var(--font-heading)] italic text-white/40 text-[clamp(2rem,6vw,6rem)] leading-none"
          >
            by someone who needed it.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  return (
    <section className="bg-white py-32 px-6 md:px-12 text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <div className="font-mono text-xs tracking-widest uppercase text-black/30">WHAT WE STAND FOR</div>
          <h2 className="mt-8 font-[family-name:var(--font-display)] font-bold text-[clamp(3rem,8vw,8rem)] tracking-tighter leading-[0.9] text-black max-w-4xl">
            Three principles.<br/>Zero compromise.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-black/5 mt-24 border border-black/5">
          {[
            {
              num: "01",
              title: "Product First.",
              body: "Every decision we make starts with the brand. Quality, speed, and reliability are our only metrics."
            },
            {
              num: "02",
              title: "Simplicity Always.",
              body: "If a 20-year-old college student can't figure it out in 5 minutes, we haven't done our job."
            },
            {
              num: "03",
              title: "Brands Over Platforms.",
              body: "We exist to serve brand owners, not to lock them in. No revenue caps. No forced upgrades. No tricks."
            },
            {
              num: "04",
              title: "Build in Public.",
              body: "We're a young company. We'll make mistakes. But we'll be honest about them and fix them fast."
            }
          ].map((val, i) => (
            <motion.div 
              key={i} 
              {...fadeUp(i * 0.1)}
              className="bg-white p-12 relative overflow-hidden"
            >
              <div className="font-mono text-7xl md:text-9xl font-bold text-black/[0.03] absolute top-[-20px] right-[-20px] pointer-events-none select-none">
                {val.num}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-black relative z-10">{val.title}</h3>
              <p className="mt-6 font-body font-light text-black/60 text-lg leading-relaxed max-w-sm relative z-10">
                {val.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative bg-black py-48 px-6 text-white overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div 
        className="absolute bottom-[-10vw] left-[-5vw] pointer-events-none select-none z-0 opacity-[0.03]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "35vw",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        START
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(3rem,10vw,10rem)] tracking-tighter leading-[0.9] text-white">
          <BlurText text="YOUR BRAND" className="block" />
          <BlurText text="STARTS HERE." className="block" />
        </h2>

        <motion.p 
          {...fadeUp(0.5)}
          className="font-mono text-xs text-white/20 tracking-widest uppercase mt-12"
        >
          FREE FOREVER · NO CREDIT CARD · MADE FOR BRANDS
        </motion.p>

        <motion.div 
          {...fadeUp(0.7)}
          className="flex flex-wrap gap-4 justify-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              href="/signup" 
              className="liquid-glass-strong rounded-full px-10 py-5 font-body font-medium text-white inline-block text-lg"
            >
              Start for Free →
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              href="/#pricing" 
              className="bg-[#FAFAFA] text-black rounded-full px-10 py-5 font-body font-medium inline-block text-lg"
            >
              View Pricing
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <div className={cn(
      spaceGrotesk.variable, 
      instrumentSerif.variable, 
      barlow.variable, 
      jetbrainsMono.variable,
      "font-body min-h-screen bg-black"
    )}>
      <main>
        <HeroSection />
        <ManifestoSection />
        <MarqueeSection />
        <MissionSection />
        <BleedingSection />
        <ValuesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
