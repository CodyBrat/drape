"use client";

import React, { useEffect, useState } from 'react';
import { LucideIcon, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, animate } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon?: LucideIcon;
  variant?: 'accent' | 'default';
  isMonetary?: boolean;
}

function Counter({ value, isMonetary }: { value: string, isMonetary?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extract number from string (remove $ and ,)
  const numericValue = parseFloat(value.replace(/[$,]/g, '')) || 0;
  const isPercentage = value.includes('%');
  const isTime = value.includes('m') || value.includes('s');

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(latest)
    });
    return () => controls.stop();
  }, [numericValue]);

  if (isTime) return <span>{value}</span>;

  let formatted = "";
  if (isPercentage) {
    formatted = `${displayValue.toFixed(1)}%`;
  } else {
    formatted = Math.floor(displayValue).toLocaleString();
    if (isMonetary) formatted = `$${formatted}`;
  }

  return <span>{formatted}</span>;
}

export function StatCard({ 
  label, 
  value, 
  change, 
  isPositive, 
  variant = 'default',
  isMonetary
}: StatCardProps) {
  const isAccent = variant === 'accent';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, translateY: -2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        isAccent 
          ? "bg-[#111111] text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
          : "bg-white border border-[#E5E7EB] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <p className={cn(
          "text-sm font-medium uppercase tracking-wide",
          isAccent ? "text-white/60" : "text-[#6B7280]"
        )}>
          {label}
        </p>
        
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
          isAccent 
            ? "border border-white/20 hover:bg-white/10" 
            : "border border-[#E5E7EB] text-[#9CA3AF] hover:border-[#111111] hover:text-[#111111]"
        )}>
          <ArrowUpRight size={14} className={isAccent ? "text-white/60" : ""} />
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className={cn(
          "text-3xl font-bold tracking-tight",
          isAccent ? "text-white" : "text-[#111111]"
        )}>
          <Counter value={value} isMonetary={isMonetary} />
        </h3>
        
        <div className="flex items-center gap-1.5 mt-2">
          <div className={cn(
            "flex items-center gap-0.5 text-xs font-medium",
            isAccent 
              ? "text-white/60" 
              : isPositive ? "text-[#10B981]" : "text-[#EF4444]"
          )}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{change}</span>
          </div>
          {!isAccent && (
            <span className="text-xs text-[#9CA3AF]">vs last month</span>
          )}
        </div>
      </div>

      {isAccent && (
        <div className="absolute bottom-6 right-6 flex items-end gap-[3px] h-6">
           {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((h, i) => (
             <motion.div 
               key={i}
               initial={{ height: 0 }}
               animate={{ height: `${h * 100}%` }}
               transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
               className="w-[3px] bg-white/20 rounded-full"
             />
           ))}
        </div>
      )}
    </motion.div>
  );
}
