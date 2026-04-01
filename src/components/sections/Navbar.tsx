"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { isLoggedIn, logout } = useAuthStore();
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed left-0 w-full z-[60] flex justify-center px-6 transition-all duration-500",
      isDashboard ? "top-4 scale-90 opacity-40 hover:opacity-100 hover:scale-100" : "top-8"
    )}>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500",
          (scrolled || isDashboard) 
            ? "bg-black border border-white/10" 
            : "bg-white/5 border border-white/5"
        )}
      >
        <Link href="/" className="font-mono text-white font-bold text-sm tracking-widest mr-4">
          DRAPE.
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="font-body text-[13px] text-white/50 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="font-body text-[13px] text-white/50 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="font-body text-[13px] text-white/50 hover:text-white transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center gap-6 ml-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="text-[13px] font-body text-white/50 hover:text-white transition-colors uppercase tracking-widest">
                Dashboard
              </Link>
              <button 
                onClick={logout}
                className="bg-white/10 text-white border border-white/10 rounded-full px-4 py-2 text-[12px] font-body font-medium hover:bg-white/20 transition-all"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-[13px] font-body text-white/50 hover:text-white transition-colors uppercase tracking-widest">
                LOG IN
              </Link>
              <Link href="/signup" className="bg-white text-black rounded-full px-5 py-2 text-[12px] font-body font-medium hover:scale-105 active:scale-95 transition-transform">
                START FREE
              </Link>
            </>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
