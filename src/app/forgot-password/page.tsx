"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
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

      {/* Form Panel */}
      <motion.div 
        className="relative z-10 liquid-glass-strong rounded-2xl p-8 md:p-10 max-w-md w-full mx-auto"
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedHeadline text="Reset your password." />
              <p className="font-body font-light text-sm text-white/40 mb-8">
                Enter your email and we&apos;ll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.01, backgroundColor: "#f0f0f0" }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 bg-white text-black rounded-full px-8 py-4 w-full font-body font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  Send Reset Link &rarr;
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="text-center py-4"
            >
              <h2 className="font-heading italic text-4xl text-white mb-4">Email Sent!</h2>
              <p className="font-body text-sm text-white/60 mb-8">
                If an account exists, a reset link will be sent to your email.
              </p>
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="text-2xl">📧</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 text-center flex flex-col gap-3 border-t border-white/5 pt-8">
          <Link href="/login" className="text-[10px] font-mono text-white/20 hover:text-white transition-all duration-300 uppercase tracking-widest">
            &larr; Back to login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
