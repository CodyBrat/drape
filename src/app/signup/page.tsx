"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const entranceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const AnimatedHeadline = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <h1 className="font-heading italic text-4xl text-white leading-[0.9] mb-2 flex flex-wrap">
      {words.map((word, i) => (
        <motion.span
          key={i}
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

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboarding');
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
        <AnimatedHeadline text="Start your brand." />
        <p className="font-body font-light text-sm text-white/40 mb-8">
          Free forever. No credit card required.
        </p>

        <div className="flex gap-4 mb-8 flex-wrap">
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-mono text-white/40 tracking-widest flex items-center">
            · FREE FOREVER
          </span>
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-mono text-white/40 tracking-widest flex items-center">
            · NO CREDIT CARD
          </span>
          <span className="liquid-glass rounded-full px-3 py-1 text-xs font-mono text-white/40 tracking-widest flex items-center mt-2 md:mt-0">
            · 5 MIN SETUP
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">
              YOUR NAME
            </label>
            <input 
              type="text" 
              placeholder="Arjun Singh"
              required
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-[rgba(255,255,255,0.25)] focus:border-[rgba(255,255,255,0.3)] focus:outline-none transition-colors duration-150 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">
              EMAIL ADDRESS
            </label>
            <input 
              type="email" 
              placeholder="you@example.com"
              required
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-[rgba(255,255,255,0.25)] focus:border-[rgba(255,255,255,0.3)] focus:outline-none transition-colors duration-150 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">
              CREATE PASSWORD
            </label>
            <input 
              type="password" 
              placeholder="Min. 8 characters"
              required
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-[rgba(255,255,255,0.25)] focus:border-[rgba(255,255,255,0.3)] focus:outline-none transition-colors duration-150 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">
              YOUR STORE NAME
            </label>
            <input 
              type="text" 
              placeholder="e.g. VOIDWEAR"
              required
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-[rgba(255,255,255,0.25)] focus:border-[rgba(255,255,255,0.3)] focus:outline-none transition-colors duration-150 w-full"
            />
            <p className="text-xs font-mono text-white/20 mt-1">drape.in/voidwear</p>
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 bg-white text-black rounded-full px-6 py-3 w-full font-body font-medium text-sm transition duration-150"
          >
            Create My Store &rarr;
          </motion.button>
        </form>

        <p className="text-xs font-mono text-white/20 text-center mt-4 leading-relaxed">
          By signing up you agree to our Terms <br/>and Privacy Policy.
        </p>

        <div className="mt-8 text-center flex flex-col gap-1">
          <span className="text-xs font-mono text-white/30">Already have an account?</span>
          <Link href="/login" className="text-xs font-mono text-white/60 hover:text-white transition-colors">
            Sign in &rarr;
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
