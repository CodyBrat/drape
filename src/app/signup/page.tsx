"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Clock, Mail } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboarding');
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-body antialiased selection:bg-black selection:text-white">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 pt-12">

        {/* Top Feature Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { label: 'Free Forever', icon: Sparkles },
            { label: 'Secure Setup', icon: ShieldCheck },
            { label: '5 Min Start', icon: Clock }
          ].map((badge) => (
            <motion.div 
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-[#F5F5F5] rounded-full px-4 py-1.5 border border-[#E5E5E5]"
            >
              <badge.icon size={12} className="text-[#9CA3AF]" />
              <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Heading Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-6 left-1/2 -translate-x-[110%] w-24 h-12 pointer-events-none"
          >
            <svg viewBox="0 0 100 50" className="w-full h-full text-[#FFEB3B] opacity-60">
              <path d="M10,40 C30,10 70,10 90,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>
          
          <h1 className="font-heading italic text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] text-[#111111] tracking-tight">
            Create Your <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              Brand Account
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 text-[#FFEB3B] -rotate-1 opacity-50" viewBox="0 0 100 20">
                <path d="M2,18 Q50,2 98,18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 text-[#6B7280] font-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Join the Next Generation of Global Fashion Brands. <br className="hidden md:block" /> Built for Scale, Designed for You.
          </p>
        </div>

        {/* Signup Content Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8 md:gap-16">
          
          {/* Main Signup Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <input 
                   type="text" 
                   placeholder="Your Name"
                   required
                   className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-10 text-base font-medium placeholder:text-[#9CA3AF] focus:border-[#111111] focus:ring-4 focus:ring-black/5 outline-none transition-all"
                 />
                 <input 
                   type="text" 
                   placeholder="Store Name"
                   required
                   className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-10 text-base font-medium placeholder:text-[#9CA3AF] focus:border-[#111111] focus:ring-4 focus:ring-black/5 outline-none transition-all"
                 />
               </div>
               
               <input 
                 type="email" 
                 placeholder="Email Address"
                 required
                 className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-10 text-base font-medium placeholder:text-[#9CA3AF] focus:border-[#111111] focus:ring-4 focus:ring-black/5 outline-none transition-all"
               />
               
               <input 
                 type="password" 
                 placeholder="Create Passcode"
                 required
                 className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-10 text-base font-medium placeholder:text-[#9CA3AF] focus:border-[#111111] focus:ring-4 focus:ring-black/5 outline-none transition-all shadow-inner shadow-black/[0.01]"
               />
               
               <button 
                 type="submit"
                 className="w-full h-[72px] rounded-full bg-black text-white px-10 flex items-center justify-between group hover:bg-[#222] transition-all overflow-hidden relative mt-2"
               >
                 <span className="text-base font-semibold">Start Building Today</span>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                   <ArrowRight size={18} />
                 </div>
               </button>

               <p className="text-[11px] text-[#9CA3AF] text-center mt-2 px-10">
                 By creating an account, you agree to our <Link href="#" className="text-black font-bold">Terms of Service</Link> and <Link href="#" className="text-black font-bold">Privacy Policy</Link>.
               </p>
            </form>
          </motion.div>

          {/* Separator */}
          <div className="hidden md:flex flex-col items-center gap-4 py-12">
             <div className="w-px h-24 bg-[#E5E5E5]" />
             <span className="text-2xl font-serif italic text-[#E5E5E5]">/</span>
             <div className="w-px h-24 bg-[#E5E5E5]" />
          </div>

          {/* Social Signup Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4"
          >
             <button className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-8 flex items-center justify-start gap-6 hover:bg-[#F9F9F9] hover:border-[#111111]/20 transition-all font-medium text-[#111111]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-[#E5E5E5]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <span>Sync with Google Account</span>
             </button>

             <button className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-8 flex items-center justify-start gap-6 hover:bg-[#F9F9F9] hover:border-[#111111]/20 transition-all font-medium text-[#111111]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#111111] text-white">
                   <Mail size={20} className="opacity-80" />
                </div>
                <span>Continue with Email</span>
             </button>

             <div className="mt-6 p-8 bg-[#F5F5F5]/50 border border-[#E5E5E5] rounded-[2.5rem]">
                <h4 className="font-heading italic text-2xl mb-2 text-[#111111]">Exclusive Beta</h4>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">
                  Join 4,200+ creators building the future of apparel on Drape. Get first access to our AI generation tools.
                </p>
             </div>
          </motion.div>

        </div>

        {/* Bottom Switch */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <span className="text-[#9CA3AF] text-[15px] font-medium mr-2">Already have an account?</span>
          <Link href="/login" className="text-[#111111] font-bold text-[15px] hover:opacity-70 transition-opacity underline underline-offset-4 decoration-black/10">
            Sign In Here
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between border-t border-[#E5E5E5] text-[13px] text-[#9CA3AF]">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
          <span className="opacity-20">|</span>
          <Link href="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link>
        </div>
        <p>Copyrights @drape.group 2026</p>
      </footer>
    </div>
  );
}
