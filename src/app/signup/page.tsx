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

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboarding');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden font-body antialiased">
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
        className="relative z-10 liquid-glass-strong rounded-[2.5rem] p-8 md:p-12 max-w-[480px] w-full mx-auto"
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-10">
          <AnimatedHeadline text="Start your brand." />
          <p className="font-body font-light text-base text-white/40 mt-2">
            Free forever. No credit card required.
          </p>
        </div>

        <div className="flex gap-3 mb-10 flex-wrap">
          {['FREE FOREVER', 'NO CREDIT CARD', '5 MIN SETUP'].map((badge) => (
            <span key={badge} className="liquid-glass border border-white/5 rounded-full px-4 py-1.5 text-[9px] font-mono text-white/50 tracking-widest flex items-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              · {badge}
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 group">
              <label className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-white/60">
                YOUR NAME
              </label>
              <input 
                type="text" 
                placeholder="Arjun Singh"
                required
                className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white font-body text-sm placeholder:text-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300 w-full hover:border-white/20"
              />
            </div>

            <div className="space-y-2 group">
              <label className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-white/60">
                EMAIL ADDRESS
              </label>
              <input 
                type="email" 
                placeholder="you@example.com"
                required
                className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white font-body text-sm placeholder:text-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300 w-full hover:border-white/20"
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-white/60">
              CREATE PASSWORD
            </label>
            <input 
              type="password" 
              placeholder="Min. 8 characters"
              required
              className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white font-body text-sm placeholder:text-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300 w-full hover:border-white/20"
            />
          </div>

          <div className="space-y-2 group">
            <label className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-white/60">
              YOUR STORE NAME
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g. VOIDWEAR"
                required
                className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white font-body text-sm placeholder:text-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300 w-full hover:border-white/20"
              />
              <p className="text-[10px] font-mono text-white/20 mt-2 ml-1 flex items-center gap-1.5 animate-pulse">
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                drape.in/voidwear
              </p>
            </div>
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.01, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 bg-white text-black rounded-full px-8 py-4 w-full font-body font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Create My Store &rarr;
          </motion.button>
        </form>

        <p className="text-[10px] font-mono text-white/20 text-center mt-8 leading-relaxed uppercase tracking-widest">
          By signing up you agree to our <br/>
          <Link href="#" className="hover:text-white/40 border-b border-white/10 pb-0.5">Terms</Link> and <Link href="#" className="hover:text-white/40 border-b border-white/10 pb-0.5">Privacy Policy</Link>.
        </p>

        <div className="mt-10 text-center flex flex-col gap-3">
          <span className="text-xs font-mono text-white/20 tracking-wider">Already have an account?</span>
          <Link href="/login" className="text-sm font-body text-white/60 hover:text-white transition-all duration-300 hover:tracking-wide">
            Sign in &rarr;
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
