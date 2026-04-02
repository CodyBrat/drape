"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useAuthStore } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const loginStore = useAuthStore(state => state.login);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Mock verification (matching existing admin credentials)
    if (email === 'admin@drape.in' && password === 'admin123') {
      loginStore(email, 'Arjun Singh');
      router.push('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-body antialiased selection:bg-black selection:text-white">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">

        {/* Top Badge Accent */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 bg-[#F5F5F5] rounded-full px-4 py-1.5 mb-10 border border-[#E5E5E5]"
        >
          <span className="text-[11px] font-medium text-[#6B7280]">Are you a Brand?</span>
          <span className="text-[11px] font-bold text-[#111111]">Explore how to use Drape for growth.</span>
          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
            <ArrowRight size={10} className="text-white" />
          </div>
        </motion.div>

        {/* Heading Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-4 left-1/2 -translate-x-[110%] w-24 h-12 pointer-events-none"
          >
            <svg viewBox="0 0 100 50" className="w-full h-full text-[#FFEB3B] opacity-40">
              <path d="M10,40 Q50,10 90,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>
          
          <h1 className="font-heading italic text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] text-[#111111] tracking-tight">
            Login <span className="relative">to
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 text-[#FFEB3B] -rotate-2 opacity-50" viewBox="0 0 100 20">
                <path d="M5,15 Q50,5 95,15" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> Your <br className="hidden md:block" /> Account
          </h1>
          <p className="mt-8 text-[#6B7280] font-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Uncover the Untapped Potential of Your Growth to <br className="hidden md:block" /> Connect with Clients
          </p>
        </div>

        {/* Auth Content Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-16">
          
          {/* Email/Pass Login Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
               <input 
                 type="email" 
                 placeholder="Phone / Email / ArtistID"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-10 text-base font-medium placeholder:text-[#9CA3AF] focus:border-[#111111] focus:ring-4 focus:ring-black/5 outline-none transition-all"
               />
               <input 
                 type="password" 
                 placeholder="Passcode"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-10 text-base font-medium placeholder:text-[#9CA3AF] focus:border-[#111111] focus:ring-4 focus:ring-black/5 outline-none transition-all shadow-inner shadow-black/[0.01]"
               />
               
               <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex justify-center"
                  >
                    <span className="text-[13px] text-red-500 font-medium">{error}</span>
                  </motion.div>
                )}
               </AnimatePresence>

               <button 
                 type="submit"
                 className="w-full h-[72px] rounded-full bg-black text-white px-10 flex items-center justify-between group hover:bg-[#222] transition-all overflow-hidden relative"
               >
                 <span className="text-base font-semibold">Login to Your Account</span>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                   <ArrowRight size={18} />
                 </div>
               </button>
            </form>
          </motion.div>

          {/* Separator */}
          <div className="hidden md:flex flex-col items-center gap-4">
             <div className="w-px h-12 bg-[#E5E5E5]" />
             <span className="text-2xl font-serif italic text-[#E5E5E5]">/</span>
             <div className="w-px h-12 bg-[#E5E5E5]" />
          </div>

          {/* Social Login Column */}
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
                <span>Sign in with Gmail Account</span>
             </button>

             <button className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-8 flex items-center justify-start gap-6 hover:bg-[#F9F9F9] hover:border-[#111111]/20 transition-all font-medium text-[#111111]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1877F2] text-white">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span>Sign in Facebook Account</span>
             </button>

             <button className="w-full h-[72px] rounded-full border border-[#E5E5E5] px-8 flex items-center justify-start gap-6 hover:bg-[#F9F9F9] hover:border-[#111111]/20 transition-all font-medium text-[#111111]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-1.915.548-2.43 1.258a3.178 3.178 0 00-.77 2.115c0 .034.004.067.012.102a2.316 2.316 0 011.815-.921c.884 0 1.636.566 2.051 1.353l.006.012c.074.137.126.27.16.4l.008.031c.21.6 1.056 3.118 1.056 3.118l1.37-1.37-.84-2.496a3.144 3.144 0 00-.868-1.503c-.571-.564-1.306-.899-2.17-.899zM19.43 12.91a2.82 2.82 0 01-.157 1.05l-1.18 3.518-2.8-2.8 1.18-3.519c.148-.445.364-.817.618-1.11.233-.27.49-.405.772-.405a1.144 1.144 0 011.144 1.144c0 .4-.183.824-.577 1.272z" className="hidden" />
                    <path d="M17.05 20.28c-.96 0-2.04-.58-2.71-1.39-.61-.74-1.18-2.06-1.18-3.37 0-1.59.88-3.13 2.18-4.14 1.05-.82 2.38-1.22 3.73-1.13.04.003.078.006.117.009l.011-.035c.105-.333.15-.658.15-.968 0-1.787-1.488-3.264-3.275-3.264-.993 0-1.875.46-2.457 1.17-.3.365-.54.804-.712 1.285-.3.844-1.21 1.71-2.103 1.71-.55 0-1.04-.336-1.265-.85-.143-.326-.217-.683-.217-1.06 0-2.313 1.944-4.195 4.332-4.195 1.554 0 2.92.59 3.86 1.636 1 1.112 1.554 2.653 1.554 4.331 0 .807-.123 1.631-.365 2.457l-1.314 4.5c-.477 1.632-1.95 2.78-3.642 2.78z" />
                    <path d="M12.067 0C5.405 0 0 5.403 0 12.067s5.405 12.067 12.067 12.067 12.067-5.403 12.067-12.067S18.73 0 12.067 0zm.012 21.011c-4.932 0-8.944-4.01-8.944-8.943 0-4.933 4.012-8.945 8.944-8.945 1.053 0 2.054.183 2.984.516l-3.235 11.085c-.426 1.458-.103 2.822.868 3.76.626.606 1.442.92 2.3.882-.295.344-.5.58-.917.645z" className="hidden" />
                    <path d="M12.067 0C5.403 0 0 5.403 0 12.067s5.403 12.067 12.067 12.067 12.067-5.403 12.067-12.067S18.73 0 12.067 0zm0 2c5.56 0 10.067 4.507 10.067 10.067S17.627 22.133 12.067 22.133 2 17.627 2 12.067 6.507 2 12.067 2z" className="hidden" />
                    <path d="M12.067 22c5.486 0 9.932-4.446 9.932-9.932S17.553 2.135 12.067 2.135s-9.932 4.446-9.932 9.933c0 5.485 4.446 9.932 9.932 9.932zm0-18.367c4.65 0 8.435 3.785 8.435 8.435s-3.785 8.435-8.435 8.435-8.435-3.785-8.435-8.435 3.785-8.435 8.435-8.435z" className="hidden" />
                    <path d="M17.05 20.28c-1.692 0-3.165-1.148-3.642-2.78l-1.314-4.5c-.242-.826-.365-1.65-.365-2.457 0-1.678.554-3.219 1.554-4.331.94-1.046 2.306-1.636 3.86-1.636 2.388 0 4.332 1.882 4.332 4.195 0 .377-.074.734-.217 1.06-.225.514-.715.85-1.265.85-.893 0-1.803-.866-2.103-1.71-.172-.481-.412-.92-.712-1.285-.582-.71-1.464-1.17-2.457-1.17-1.787 0-3.275 1.477-3.275 3.264 0 .31.045.635.15.968l.011.035c.039-.003.078-.006.117-.009 1.35-.09 2.68.31 3.73 1.13 1.3 1.01 2.18 2.55 2.18 4.14 0 1.31-.57 2.63-1.18 3.37-.67.81-1.75 1.39-2.71 1.39z" />
                  </svg>
                </div>
                <span>Sign in Apple Secure ID</span>
             </button>
          </motion.div>

        </div>

        {/* Footer Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/forgot-password" className="text-[#111111]/60 hover:text-black font-medium text-[15px] transition-colors underline underline-offset-4 decoration-black/10">
            Forgot Passcode?
          </Link>
        </motion.div>
      </main>

      {/* Actual Page Footer */}
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
