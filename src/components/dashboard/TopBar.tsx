"use client";

import React from 'react';
import { Bell, Search, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface TopBarProps {
  title: string;
  breadcrumb?: string;
}

export function TopBar({ title, breadcrumb = "Drape / Overview" }: TopBarProps) {
  const router = useRouter();

  return (
    <header className="h-[64px] bg-white border-b border-[#E5E7EB] px-8 sticky top-0 z-10 flex items-center justify-between shrink-0 font-body">
      {/* LEFT: BACK BUTTON + TITLE & BREADCRUMB */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-xl bg-[#F5F5F5] border border-transparent hover:border-[#E5E7EB] flex items-center justify-center transition-all group hover:bg-[#EEEEEE] active:scale-90"
        >
          <ChevronLeft size={20} className="text-[#6B7280] group-hover:text-[#111111] transition-colors" />
        </button>
        
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-[#111111] leading-none tracking-tight">
            {title}
          </h1>
          <p className="text-[10px] font-medium text-[#9CA3AF] mt-1.5 uppercase tracking-[0.2em]">
            {breadcrumb}
          </p>
        </div>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="flex items-center gap-3">
        {/* Search Input Simulation */}
        <div className="hidden lg:flex items-center gap-3 bg-[#F5F5F5] rounded-xl px-4 py-2 w-[240px] focus-within:bg-[#F0F0F0] border border-transparent focus-within:border-[#E5E7EB] transition-all group cursor-pointer active:scale-95">
          <Search size={14} className="text-[#9CA3AF] group-hover:text-[#111111] transition-colors" />
          <span className="text-sm font-medium text-[#9CA3AF] flex-1">Search anything...</span>
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#9CA3AF] bg-white border border-[#E5E7EB] px-1.5 py-0.5 rounded shadow-sm opacity-60 group-hover:opacity-100 transition-opacity">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>

        {/* Notification Bell */}
        <button className="relative w-9 h-9 rounded-xl bg-[#F5F5F5] border border-transparent hover:border-[#E5E7EB] flex items-center justify-center transition-all group hover:bg-[#EEEEEE] active:scale-90">
          <Bell size={16} className="text-[#6B7280] group-hover:text-[#111111] transition-colors" strokeWidth={2} />
          <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#EF4444] border-2 border-white shadow-sm animate-pulse" />
        </button>

        <div className="h-6 w-px bg-[#E5E7EB] mx-1" />

        {/* User Avatar */}
        <button className="relative w-9 h-9 rounded-xl bg-[#111111] text-white text-[13px] font-bold flex items-center justify-center shadow-lg hover:translate-y-[-1px] active:scale-90 transition-all font-mono">
          A
          <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </header>
  );
}
