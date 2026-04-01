"use client";

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { cn } from '@/lib/utils';
import { 
  Wallet,  
  Clock, 
  Download,
  CreditCard, 
  ArrowRight,
  TrendingUp,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Payout {
  id: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Failed';
  bank: string;
  date: string;
}

const payoutsData: Payout[] = [
  { id: "PAY-1089", amount: "₹12,400", status: "Completed", bank: "SBI ****4521", date: "Nov 1, 2025" },
  { id: "PAY-1088", amount: "₹8,200", status: "Completed", bank: "SBI ****4521", date: "Oct 1, 2025" },
  { id: "PAY-1087", amount: "₹15,100", status: "Completed", bank: "SBI ****4521", date: "Sep 1, 2025" },
  { id: "PAY-1086", amount: "₹5,400", status: "Completed", bank: "SBI ****4521", date: "Aug 1, 2025" },
  { id: "PAY-1085", amount: "₹9,800", status: "Completed", bank: "SBI ****4521", date: "Jul 1, 2025" },
  { id: "PAY-1084", amount: "₹11,200", status: "Failed", bank: "SBI ****4521", date: "Jun 1, 2025" },
];

export default function PayoutsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [autoPayout, setAutoPayout] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // const stats = [
  //   { label: "Available Liquid", value: "₹8,240", change: "Updated just now", isPositive: true, variant: 'accent' as const, icon: Wallet },
  //   { label: "Total Asset Generation", value: "₹1,24,500", change: "+15.8% vs last month", isPositive: true, icon: IndianRupee },
  //   { label: "Pending Settlement", value: "₹21,450", change: "Awaiting Clearance", isPositive: true, icon: Clock },
  // ];

  return (
    <DashboardLayout title="Payouts" breadcrumb="Drape / Payouts">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#111111]">
            Payouts
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-1 font-medium tracking-wide uppercase">
            Account settlements & withdrawal log
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CARD 1: ACCENT LARGE */}
        <div className="lg:col-span-1 bg-[#111111] text-white rounded-[40px] p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 p-12 opacity-10 text-white pointer-events-none group-hover:scale-110 transition-transform duration-700">
             <Wallet size={160} strokeWidth={0.5} />
          </div>
          <div className="relative z-10">
             <span className="text-[11px] font-mono font-bold text-white/40 tracking-[0.3em] uppercase mb-4 block">Liquid Authority</span>
             <h2 className="text-5xl font-heading italic text-white tracking-tighter">₹8,240</h2>
             <p className="text-[11px] font-mono text-white/20 mt-8 tracking-widest uppercase flex items-center gap-2">
                <CheckCircle2 size={12} className="text-emerald-400" /> Cleared for instant withdrawal
             </p>
          </div>

          <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-4 backdrop-blur-md">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/80">
                   <CreditCard size={20} />
                </div>
                <div className="flex flex-col">
                   <span className="text-sm font-bold">SBI ****4521</span>
                   <span className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest mt-0.5">Verified Target Mark</span>
                </div>
                <div className="ml-auto bg-white/20 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border border-white/10">PRIMARY</div>
             </div>

             <button className="relative z-10 w-full py-5 bg-white text-black rounded-2xl font-mono font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#FAFAFA] active:scale-[0.98] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 group/btn">
                Withdraw Authority <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* CARD 2: DEFAULT LARGE */}
        <div className="lg:col-span-1 bg-white border border-[#E5E7EB] rounded-[40px] p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
           <div className="relative z-10">
              <span className="text-[11px] font-mono font-bold text-[#9CA3AF] tracking-[0.3em] uppercase mb-4 block">Asset Accumulation</span>
              <h2 className="text-5xl font-heading italic text-[#111111] tracking-tighter">₹1,24,500</h2>
              <div className="flex items-center gap-2 mt-8 text-[#10B981] font-mono font-bold text-[11px] uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit">
                 <TrendingUp size={14} /> +15.8% Growth Velocity
              </div>
           </div>

           <div className="mt-12">
              <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-6 px-1">Settlement Stream (7 Days)</p>
              <div className="h-16 flex items-end gap-1 px-1">
                 {[40, 60, 45, 90, 65, 80, 100].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     animate={{ height: isLoaded ? `${h}%` : 0 }}
                     transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
                     className={cn("flex-1 rounded-t-lg transition-all", i === 6 ? "bg-[#111111]" : "bg-[#F5F5F5] group-hover:bg-[#E5E7EB]")}
                   />
                 ))}
              </div>
           </div>
        </div>

        {/* CARD 3: DEFAULT UTILITY */}
        <div className="lg:col-span-1 bg-white border border-[#E5E7EB] rounded-[40px] p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
           <div className="relative z-10">
              <span className="text-[11px] font-mono font-bold text-[#9CA3AF] tracking-[0.3em] uppercase mb-4 block">Incoming Cycle</span>
              <h2 className="text-5xl font-heading italic text-[#111111] tracking-tighter">₹21,450</h2>
              <p className="text-[11px] font-mono font-bold text-[#6B7280] mt-8 tracking-widest uppercase flex items-center gap-2">
                 <Clock size={14} /> Scheduled · Dec 15, 2025
              </p>
           </div>

           <div className="mt-12 bg-[#F5F5F5] rounded-3xl p-6 border border-[#E5E7EB] shadow-inner">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-sm font-bold text-[#111111] tracking-tight">Auto-payout protocol</span>
                 <button 
                   onClick={() => setAutoPayout(!autoPayout)}
                   className={cn(
                     "w-12 h-6 rounded-full relative transition-all duration-500 p-1 border",
                     autoPayout ? "bg-[#111111] border-[#111111]" : "bg-white border-[#E5E7EB]"
                   )}
                 >
                    <motion.div 
                      layout 
                      className={cn("w-4 h-4 rounded-full transition-colors", autoPayout ? "bg-white ml-auto" : "bg-[#E5E7EB] mr-auto")} 
                    />
                 </button>
              </div>
              <p className="text-[10px] text-[#6B7280] leading-relaxed font-medium">Automatic disbursement on the 1st and 15th of every month upon verification.</p>
           </div>
        </div>
      </div>

      {/* PAYOUT HISTORY */}
      <div className="mt-8 bg-white border border-[#E5E7EB] rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
        <div className="px-12 py-10 border-b border-[#F5F5F5] flex items-center justify-between">
           <h3 className="text-sm font-display font-bold text-[#111111] uppercase tracking-[0.4em]">Settlement Matrix</h3>
           <div className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#111111] transition-colors cursor-pointer group">
              <span className="text-[10px] font-bold uppercase tracking-widest">Activity Log</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F9FAFB]/50">
                <th className="px-12 py-6 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Registry ID</th>
                <th className="px-12 py-6 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Authority Value</th>
                <th className="px-12 py-6 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Protocol status</th>
                <th className="px-12 py-6 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Endpoint</th>
                <th className="px-12 py-6 text-right px-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F5F5F5]">
              {payoutsData.map((p) => (
                <tr key={p.id} className="group hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-12 py-8 text-sm font-mono font-bold text-[#111111]">{p.id}</td>
                  <td className="px-12 py-8 text-sm font-bold text-[#111111]">{p.amount}</td>
                  <td className="px-12 py-8">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border",
                      p.status === 'Completed' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      p.status === 'Failed' ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : 
                      "bg-blue-500/10 text-blue-500 border-blue-500/20"
                    )}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-12 py-8">
                     <div className="flex items-center gap-3">
                        <CreditCard size={14} className="text-[#9CA3AF]" />
                        <span className="text-[12px] font-mono font-medium text-[#6B7280]">{p.bank}</span>
                     </div>
                  </td>
                  <td className="px-12 py-8 text-right">
                    <button className="p-3 border border-[#E5E7EB] bg-[#F5F5F5] rounded-2xl text-[#9CA3AF] hover:text-[#111111] hover:bg-white hover:shadow-xl hover:border-[#111111] transition-all active:scale-90">
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
