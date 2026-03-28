"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/store";

export function Navbar() {
  const { isLoggedIn, logout } = useAuthStore();

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent px-8 py-5 md:px-16 flex items-center justify-between">
      <div className="flex-1 flex justify-start">
        <Link href="/" className="font-mono text-white font-bold text-sm tracking-widest">
          DRAPE.
        </Link>
      </div>
      
      <div className="hidden md:flex items-center justify-center gap-4">
        <Link href="/#features" className="font-body text-sm text-white/50 hover:text-white transition-colors">
          Features
        </Link>
        <span className="text-white/20">·</span>
        <Link href="/#pricing" className="font-body text-sm text-white/50 hover:text-white transition-colors">
          Pricing
        </Link>
        <span className="text-white/20">·</span>
        <Link href="/#brands" className="font-body text-sm text-white/50 hover:text-white transition-colors">
          Brands
        </Link>
      </div>
      
      <div className="flex-1 flex justify-end items-center gap-6">
        {isLoggedIn ? (
          <>
            <Link href="/dashboard" className="text-sm font-body text-white/50 hover:text-white transition-colors uppercase tracking-widest">
              Dashboard
            </Link>
            <button 
              onClick={logout}
              className="bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-full px-5 py-2 text-sm font-body font-medium hover:bg-white/20 transition-all"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-sm font-body text-white/50 hover:text-white transition-colors uppercase tracking-widest">
              LOG IN
            </Link>
            <Link href="/signup" className="bg-white text-black rounded-full px-5 py-2 text-sm font-body font-medium hover:scale-105 active:scale-95 transition-transform">
              START FREE
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
