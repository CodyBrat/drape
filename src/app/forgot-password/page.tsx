"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-body antialiased selection:bg-black selection:text-white">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        
        {/* Heading Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-6 left-1/2 -translate-x-[110%] w-24 h-12 pointer-events-none"
          >
            <svg viewBox="0 0 100 50" className="w-full h-full text-[#FFEB3B] opacity-60">
              <path d="M10,40 Q50,10 90,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>
          
          <h1 className="font-heading italic text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-[#111111] tracking-tight">
            Forgot <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              Passcode?
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 text-[#FFEB3B] -rotate-1 opacity-50" viewBox="0 0 100 20">
                <path d="M5,15 Q50,5 95,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 text-[#6B7280] font-light text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Don&apos;t worry, it happens. Enter your email <br className="hidden md:block" /> and we&apos;ll get you back in.
          </p>
        </div>

        {/* Action Area */}
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-6"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="relative group">
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none group-focus-within:text-black transition-colors">
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      required
                      className="w-full h-[72px] rounded-full border border-[#E5E5E5] pl-16 pr-10 text-base font-medium placeholder:text-[#9CA3AF] focus:border-[#111111] focus:ring-4 focus:ring-black/5 outline-none transition-all"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-[72px] rounded-full bg-black text-white px-10 flex items-center justify-between group hover:bg-[#222] transition-all overflow-hidden relative shadow-lg shadow-black/5"
                  >
                    <span className="text-base font-semibold">Send Reset Link</span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </form>

                <div className="text-center mt-4">
                  <Link href="/login" className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-black font-semibold text-[15px] transition-all group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Login
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-[2.5rem] p-12 text-center"
              >
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-black/10">
                   <Mail size={32} className="text-white" />
                </div>
                <h3 className="font-heading italic text-4xl text-[#111111] mb-4 tracking-tight">Check your inbox</h3>
                <p className="text-[#6B7280] text-[15px] leading-relaxed mb-10 max-w-xs mx-auto">
                  If an account exists for that email, you&apos;ll receive a reset link shortly.
                </p>
                
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setSent(false)}
                    className="w-full h-14 rounded-full border border-[#E5E5E5] text-black font-bold text-sm hover:bg-white transition-all shadow-sm"
                  >
                    Try another email
                  </button>
                  <Link href="/login" className="text-[#111111] font-bold text-[13px] uppercase tracking-widest hover:opacity-70 transition-opacity">
                    Return to Login
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center text-[13px] text-[#9CA3AF] border-t border-[#F5F5F5]">
        <p>Copyrights @drape.group 2026</p>
      </footer>
    </div>
  );
}
