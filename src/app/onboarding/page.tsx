"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Package, Box, Sparkles } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const entranceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const AnimatedHeadline = ({ text, className="text-3xl mb-8" }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <h1 className={cn("font-heading italic text-white leading-[0.9]", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="mr-2.5 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSellOption, setSelectedSellOption] = useState<number | null>(null);

  const categories = [
    'Streetwear', 'Casual Wear', 'Athleisure', 'Accessories', 'Mixed', 'Other'
  ];

  const sellOptions = [
    {
      icon: Package,
      title: 'Print on Demand',
      desc: 'We print and ship when customers order.'
    },
    {
      icon: Box,
      title: 'My Own Inventory',
      desc: 'I have stock ready to ship myself.'
    },
    {
      icon: Sparkles,
      title: 'Both',
      desc: 'Mix of my own stock and print on demand.'
    }
  ];

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const finishOnboarding = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative px-6 py-12 overflow-hidden font-body antialiased">
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          src="/background.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60" 
        />
        
        {/* Seamless transition to black at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/90 to-transparent" />
        
        {/* Subtle radial glow at the top for aesthetic */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* LOGO */}
      <div className="relative z-10 mb-8 w-full max-w-md flex justify-center">
        <Link href="/" className="font-mono font-bold text-sm tracking-widest text-white">
          DRAPE.
        </Link>
      </div>

      {/* Form Panel */}
      <motion.div 
        className="relative z-10 liquid-glass-strong rounded-2xl p-8 md:p-10 max-w-md w-full mx-auto"
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
      >
        {/* STEP INDICATOR */}
        <div className="flex items-center gap-2 mb-8">
          {/* Step 1 */}
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono transition-colors",
            step === 1 ? "bg-white text-black" : "bg-white/20 text-white"
          )}>
            {step > 1 ? <Check size={12} /> : "1"}
          </div>
          
          <div className="flex-1 h-px bg-white/10" />
          
          {/* Step 2 */}
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono transition-colors",
            step === 2 ? "bg-white text-black" : step > 2 ? "bg-white/20 text-white" : "border border-white/20 text-white/30"
          )}>
            {step > 2 ? <Check size={12} /> : "2"}
          </div>
          
          <div className="flex-1 h-px bg-white/10" />

          {/* Step 3 */}
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono transition-colors",
            step === 3 ? "bg-white text-black" : "border border-white/20 text-white/30"
          )}>
            3
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedHeadline text="What's your brand about?" />
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {categories.map((cat) => (
                  <div 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "liquid-glass rounded-xl p-4 cursor-pointer text-sm font-body transition-colors",
                      selectedCategory === cat 
                        ? "border border-white/20 bg-white/5 text-white" 
                        : "border border-white/0 text-white/60 hover:bg-white/[0.02]"
                    )}
                  >
                    {cat}
                  </div>
                ))}
              </div>

              <motion.button 
                type="button"
                onClick={nextStep}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black rounded-full px-6 py-3 w-full font-body font-medium text-sm transition duration-150"
                disabled={!selectedCategory}
                style={!selectedCategory ? { opacity: 0.5, pointerEvents: 'none' } : {}}
              >
                Continue &rarr;
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedHeadline text="How do you want to sell?" />
              
              <div className="space-y-3 mb-8">
                {sellOptions.map((opt, i) => {
                  const Icon = opt.icon;
                  return (
                    <div 
                      key={i}
                      onClick={() => setSelectedSellOption(i)}
                      className={cn(
                        "liquid-glass rounded-xl p-5 flex items-start gap-4 cursor-pointer transition-colors border",
                        selectedSellOption === i 
                          ? "border border-white/20 bg-white/5" 
                          : "border border-white/0 hover:bg-white/[0.02]"
                      )}
                    >
                      <Icon size={20} className="text-white/60 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-body font-medium text-sm text-white">{opt.title}</h3>
                        <p className="font-body text-xs text-white/40 mt-1">{opt.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <motion.button 
                type="button"
                onClick={nextStep}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black rounded-full px-6 py-3 w-full font-body font-medium text-sm transition duration-150"
                disabled={selectedSellOption === null}
                style={selectedSellOption === null ? { opacity: 0.5, pointerEvents: 'none' } : {}}
              >
                Continue &rarr;
              </motion.button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedHeadline text="Your store is ready." className="text-4xl !mb-4" />
              <p className="font-mono text-sm text-white/40 mb-8 mt-4">
                mystore.drape.in is live.
              </p>
              
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                className="text-6xl text-center mb-8"
              >
                🎉
              </motion.div>

              <div className="space-y-3 mb-8">
                {[
                  "Store created",
                  "Templates ready",
                  "Payments configured",
                  "Ready to add products"
                ].map((task, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                  >
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white/60" />
                    </div>
                    <span className="font-body text-sm text-white/60">{task} ✓</span>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                type="button"
                onClick={finishOnboarding}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black rounded-full px-6 py-3 w-full font-body font-medium text-sm transition duration-150 mb-4"
              >
                Go to Dashboard &rarr;
              </motion.button>

              <div className="text-center">
                <Link href="/dashboard" className="text-xs font-mono text-white/20 hover:text-white/40 transition-colors">
                  I&apos;ll explore on my own &rarr;
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
