"use client";

import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export function StatCard({ label, value, change, isPositive, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm hover:border-[#D1D5DB] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <p className="text-[10px] font-medium text-[#6B7280] uppercase tracking-widest">{label}</p>
        <div className="bg-[#F9FAFB] p-2 rounded-lg border border-[#E5E7EB]">
          <Icon size={16} className="text-[#6B7280]" />
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold text-[#111111] tracking-tight">{value}</h3>
      
      <div className="flex items-center gap-1.5 mt-2">
        <div className={cn(
          "flex items-center gap-0.5 text-xs font-medium",
          isPositive ? "text-[#10B981]" : "text-[#EF4444]"
        )}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>{change}</span>
        </div>
        <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-wide">vs last month</span>
      </div>
    </div>
  );
}
