"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  BarChart2, 
  Wallet, 
  ChevronDown,
  Search,
  Sparkles,
  HelpCircle,
  LogOut,
  Settings2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion} from 'framer-motion';
import { useAuthStore } from '@/lib/store';

const navSections = [
  {
    label: 'Manage',
    items: [
      { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
      { name: 'Products', icon: Package, href: '/dashboard/products', badge: 8 },
      { name: 'Orders', icon: ShoppingBag, href: '/dashboard/orders', badge: 12, badgeVariant: 'pending' },
      { name: 'Analytics', icon: BarChart2, href: '/dashboard/analytics' },
      { name: 'Payouts', icon: Wallet, href: '/dashboard/payouts' },
      { name: 'Settings', icon: Settings2, href: '/dashboard/settings' },
    ]
  },
  {
    label: 'General',
    items: [
      { name: 'Help', icon: HelpCircle, href: '/dashboard/help' },
      { name: 'Logout', icon: LogOut, href: '/logout', action: 'logout' },
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();
  const logout = useAuthStore(state => state.logout);

  return (
    <aside className="w-[260px] h-screen bg-white border-r border-[#E5E7EB] flex flex-col p-5 shrink-0 transition-all duration-300 overflow-hidden">
      {/* TOP: BRAND & STORE SELECTOR */}
      <div className="mb-4">
        <h1 className="font-mono font-bold text-sm tracking-[0.3em] text-[#111111] px-2 mb-4">
          DRAPE.
        </h1>
        
        <div className="flex items-center gap-2 hover:bg-[#F5F5F5] rounded-xl px-2 py-2 cursor-pointer group transition-all duration-200">
          <div className="w-6 h-6 rounded-lg bg-[#111111] text-white text-[10px] font-bold flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            M
          </div>
          <span className="text-sm font-semibold text-[#111111] flex-1 truncate">My Store</span>
          <ChevronDown size={14} className="text-[#9CA3AF] group-hover:text-[#111111] transition-colors" />
        </div>
      </div>

      {/* SEARCH BAR (mt-4) */}
      <div className="mt-4 bg-[#F5F5F5] rounded-2xl px-3 py-2.5 flex items-center gap-2 group transition-all group-focus-within:bg-[#EEEEEE] border border-transparent focus-within:border-[#E5E7EB]">
        <Search size={14} className="text-[#9CA3AF] group-focus-within:text-[#111111]" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent text-sm placeholder-[#9CA3AF] text-[#111111] border-none outline-none flex-1 font-medium"
        />
        <div className="hidden lg:flex items-center gap-1 text-[10px] font-mono text-[#9CA3AF] bg-white rounded-md px-1.5 py-0.5 border border-[#E5E7EB] shadow-sm">
          <span>⌘</span>
          <span>F</span>
        </div>
      </div>

      {/* NAV SECTIONS */}
      <div className="flex-1 overflow-y-auto scrollbar-hide mt-6">
        {navSections.map((section, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mb-3 px-3">
              {section.label}
            </p>
            
            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={(e) => {
                      if (item.action === 'logout') {
                        e.preventDefault();
                        logout();
                      }
                    }}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all relative group",
                      isActive 
                        ? "bg-[#F5F5F5] text-[#111111] font-semibold" 
                        : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111111]"
                    )}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="navIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#111111] rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <Icon 
                      size={18} 
                      strokeWidth={isActive ? 2.5 : 2} 
                      className={cn(
                        "transition-colors",
                        isActive ? "text-[#111111]" : "text-[#9CA3AF] group-hover:text-[#111111]"
                      )} 
                    />
                    <span className="text-[13px]">{item.name}</span>
                    
                    {item.badge && (
                      <span className={cn(
                        "ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold tracking-tight shadow-sm",
                        item.badgeVariant === 'pending' 
                          ? "bg-[#111111] text-white" 
                          : "bg-[#F5F5F5] text-[#6B7280]"
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* BOTTOM UPGRADE CARD */}
      <motion.div 
        whileHover={{ y: -2 }}
        className="mt-auto bg-[#111111] rounded-2xl p-4 text-white shadow-xl shadow-black/5"
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={16} className="text-white/60" />
          <span className="text-sm font-semibold tracking-tight">Upgrade to Growth</span>
        </div>
        <p className="text-[11px] text-white/50 leading-relaxed">
          Unlimited products, 0% commission.
        </p>
        <button className="bg-white text-[#111111] rounded-xl px-4 py-2.5 text-xs font-bold mt-4 w-full active:scale-95 transition-all shadow-lg shadow-black/10 hover:bg-white/90">
          Upgrade Now
        </button>
      </motion.div>
    </aside>
  );
}
