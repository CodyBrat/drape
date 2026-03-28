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
    <h1 className="font-heading italic text-4xl text-white leading-[1.2] mb-2 flex flex-wrap pb-2">
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

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      {/* Form Panel */}
      <motion.div 
        className="relative z-10 liquid-glass-strong rounded-[2rem] p-8 md:p-12 max-w-[440px] w-full mx-auto"
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-10">
          <AnimatedHeadline text="Welcome back." />
          <p className="font-body font-light text-base text-white/40 mt-2">
            Sign in to manage your store.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 group">
            <label className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-white/60">
              EMAIL ADDRESS
            </label>
            <div className="relative">
              <input 
                type="email" 
                placeholder="you@example.com"
                required
                className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white font-body text-sm placeholder:text-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300 w-full hover:border-white/20"
              />
            </div>
          </div>
          <div className="space-y-2 group">
            <div className="flex justify-between items-end px-1">
              <label className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase transition-colors group-focus-within:text-white/60">
                PASSWORD
              </label>
              <Link href="/forgot-password" hidden className="text-[10px] font-mono text-white/20 hover:text-white/60 transition-colors uppercase tracking-widest">
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••"
                required
                className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white font-body text-sm placeholder:text-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300 w-full hover:border-white/20"
              />
            </div>
            <div className="flex justify-end pt-1">
              <Link href="/forgot-password" className="text-[10px] font-mono text-white/20 hover:text-white/60 transition-colors uppercase tracking-[0.1em]">
                Forgot password?
              </Link>
            </div>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.01, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 bg-white text-black rounded-full px-8 py-4 w-full font-body font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Sign In &rarr;
          </motion.button>
        </form>
        <div className="my-10 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <span className="relative bg-black px-4 font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
            or
          </span>
        </div>

        <motion.button 
          type="button"
          whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.98 }}
          className="liquid-glass border border-white/5 rounded-full px-8 py-4 w-full flex items-center justify-center gap-3 transition-all duration-300"
        >
          <span className="font-heading italic text-xl text-white/90">G</span>
          <span className="font-body text-sm text-white/60 font-medium">Continue with Google</span>
        </motion.button>

        <div className="mt-10 text-center flex flex-col gap-3">
          <span className="text-xs font-mono text-white/20 tracking-wider">Don&apos;t have an account?</span>
          <Link href="/signup" className="text-sm font-body text-white/60 hover:text-white transition-all duration-300 hover:tracking-wide">
            Start for free &rarr;
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
