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
  Settings, 
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Products', icon: Package, href: '/dashboard/products' },
  { name: 'Orders', icon: ShoppingBag, href: '/dashboard/orders' },
  { name: 'Analytics', icon: BarChart2, href: '/dashboard/analytics' },
  { name: 'Payouts', icon: Wallet, href: '/dashboard/payouts' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] h-screen bg-white border-r border-[#E5E7EB] flex flex-col p-4 shrink-0 transition-all duration-300">
      {/* TOP SECTION */}
      <div className="mb-6 px-3 pt-2">
        <h1 className="font-mono font-bold text-sm tracking-widest text-[#111111]">
          DRAPE.
        </h1>
        <div className="flex items-center gap-1.5 mt-1 cursor-pointer group">
          <span className="text-xs text-[#6B7280] group-hover:text-[#111111] transition-colors">My Store</span>
          <ChevronDown size={14} className="text-[#9CA3AF] group-hover:text-[#6B7280]" />
        </div>
      </div>

      <div className="border-b border-[#E5E7EB] mb-6" />

      {/* NAV SECTION */}
      <div className="flex-1">
        <p className="text-[10px] font-medium text-[#9CA3AF] tracking-widest uppercase mb-4 px-3">
          MANAGE
        </p>
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group",
                  isActive 
                    ? "bg-[#F3F4F6] text-[#111111] font-medium" 
                    : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111111]"
                )}
              >
                <Icon size={16} strokeWidth={1.5} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-auto pt-4 border-t border-[#E5E7EB] space-y-4">
        <a 
          href="/" 
          target="_blank" 
          className="flex items-center gap-2 px-3 py-1 text-[11px] text-[#6B7280] hover:text-[#111111] transition-colors group"
        >
          <span>View your store</span>
          <ExternalLink size={12} className="opacity-40 group-hover:opacity-100" />
        </a>

        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#F9FAFB] cursor-pointer group transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-white text-xs font-medium">
            A
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-[#111111] truncate">Arjun Singh</span>
            <span className="text-[10px] text-[#6B7280] truncate">arjun@drape.in</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
