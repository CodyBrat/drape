"use client";

import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { 
  IndianRupee, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Plus, 
  Store, 
  ArrowRight,
  ChevronRight,
  TrendingDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { label: "Total Revenue", value: "₹1,24,500", change: "+12.5% vs last month", isPositive: true, icon: IndianRupee, variant: 'accent' as const, isMonetary: true },
  { label: "Total Orders", value: "284", change: "+8.2% vs last month", isPositive: true, icon: ShoppingBag, variant: 'default' as const },
  { label: "Store Visitors", value: "12,430", change: "+23.1% vs last month", isPositive: true, icon: Users, variant: 'default' as const },
  { label: "Conversion Rate", value: "2.3%", change: "-0.4% vs last month", isPositive: false, icon: TrendingUp, variant: 'default' as const },
];

const revenueData = [
  { day: 'Mon', value: 8200, label: '₹8.2k' },
  { day: 'Tue', value: 12100, label: '₹12.1k' },
  { day: 'Wed', value: 9400, label: '₹9.4k' },
  { day: 'Thu', value: 15600, label: '₹15.6k' },
  { day: 'Fri', value: 11200, label: '₹11.2k' },
  { day: 'Sat', value: 18400, label: '₹18.4k' },
  { day: 'Sun', value: 14500, label: '₹14.5k' },
];

const topProducts = [
  { name: "VOID OVERSIZED TEE", revenue: "₹1,85,876", percentage: 80 },
  { name: "ACID LOGO PUNCH", revenue: "₹1,15,611", percentage: 65 },
  { name: "NOISE CORE GRAPHIC", revenue: "₹1,07,133", percentage: 45 },
  { name: "CORE BLACK BOX TEE", revenue: "₹53,955", percentage: 32 },
  { name: "VOLTAGE DROP TEE", revenue: "₹53,162", percentage: 28 },
];

export default function OverviewPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <DashboardLayout title="Overview" breadcrumb="Drape / Overview">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#111111]">
            Good morning, Arjun.
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-1 font-medium tracking-wide uppercase">
            Monday, 2 December 2025
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-sm font-semibold text-[#111111] hover:bg-[#F9FAFB] active:scale-95 transition-all shadow-sm flex items-center gap-2">
            View Store <ArrowRight size={14} />
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#111111] text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center gap-2">
            <Plus size={16} strokeWidth={2.5} /> Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="lg:col-span-2 space-y-4">
          {/* Revenue Chart */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-lg transition-all duration-500 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-semibold text-[#111111] flex items-center gap-2">
                Revenue This Week
                <ChevronRight size={16} className="text-[#9CA3AF]" />
              </h3>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#D1FAE5] text-[#065F46] rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#D1FAE5]">
                <TrendingUp size={12} /> +12.4%
              </div>
            </div>

            <div className="flex items-end justify-between h-40 gap-4 mt-6">
              {revenueData.map((d, i) => {
                const isToday = d.day === 'Sun';
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                    <div className="relative w-full flex flex-col items-center gap-2">
                       <AnimatePresence>
                         <motion.span 
                           initial={{ opacity: 0, scale: 0.8, y: 5 }}
                           whileHover={{ opacity: 1, scale: 1, y: 0 }}
                           className="absolute -top-10 text-[10px] font-bold text-white bg-black px-2 py-1 rounded shadow-lg opacity-0 pointer-events-none z-10"
                         >
                           {d.label}
                         </motion.span>
                       </AnimatePresence>
                       <div className="w-10 bg-[#F5F5F5] rounded-t-xl relative overflow-hidden h-40">
                         <motion.div 
                           initial={{ height: 0 }}
                           animate={{ height: isLoaded ? `${(d.value / 20000) * 100}%` : 0 }}
                           transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                           className={cn(
                             "absolute bottom-0 left-0 right-0 rounded-t-xl transition-all duration-300",
                             isToday ? "bg-[#111111] shadow-[0_0_20px_rgba(0,0,0,0.1)]" : "bg-[#E5E7EB] group-hover/bar:bg-[#374151]"
                           )}
                         />
                       </div>
                    </div>
                    <span className={cn(
                      "text-[10px] font-bold tracking-widest uppercase",
                      isToday ? "text-[#111111]" : "text-[#9CA3AF]"
                    )}>{d.day}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Recent Orders Table */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg">
            <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-[#F5F5F5]">
              <h3 className="font-semibold text-[#111111]">Recent Orders</h3>
              <button className="text-[11px] font-bold text-[#6B7280] hover:text-[#111111] uppercase tracking-widest transition-colors flex items-center gap-1">
                View all <ArrowRight size={12} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody>
                  {[
                    { id: "#DRP-1042", name: "Arjun Singh", amount: "₹1,499", status: "Fulfilled", color: "text-emerald-500 bg-emerald-500/10" },
                    { id: "#DRP-1041", name: "Meera Nair", amount: "₹1,299", status: "Pending", color: "text-amber-500 bg-amber-500/10" },
                    { id: "#DRP-1040", name: "Rohan Varma", amount: "₹1,599", status: "Processing", color: "text-blue-500 bg-blue-500/10" },
                    { id: "#DRP-1039", name: "Anjali Gupta", amount: "₹1,199", status: "Cancelled", color: "text-rose-500 bg-rose-500/10" },
                  ].map((order, i) => (
                    <tr key={i} className="group border-b border-[#F5F5F5] last:border-0 hover:bg-[#F9FAFB] transition-all cursor-pointer">
                      <td className="px-6 py-4 text-sm font-mono font-medium text-[#111111]">{order.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#111111]">{order.name}</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#111111]">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase",
                          order.color
                        )}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-4">
          {/* Top Products Card */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500">
            <h3 className="font-semibold text-[#111111] mb-2">Top Products</h3>
            <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">By Revenue</p>
            
            <div className="mt-8 space-y-6">
              {topProducts.map((p, i) => (
                <div key={i} className="group/item">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[#9CA3AF] font-bold">0{i+1}</span>
                      <span className="text-sm font-semibold text-[#111111] group-hover/item:text-black transition-colors">{p.name}</span>
                    </div>
                    <span className="text-sm font-bold text-[#111111]">{p.revenue}</span>
                  </div>
                  <div className="w-full h-1 bg-[#F5F5F5] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: isLoaded ? `${p.percentage}%` : 0 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="bg-[#111111] h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Stats Card */}
          <section className="bg-[#111111] rounded-2xl p-6 shadow-xl shadow-black/10">
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Avg Ticket", val: "₹438", icon: IndianRupee },
                { label: "Return Rate", val: "2.1%", icon: TrendingDown },
                { label: "Repeat Cust.", val: "34%", icon: Users },
                { label: "Fulfillment", val: "3.2d", icon: ShoppingBag },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/40 mb-1">
                    <s.icon size={14} />
                  </div>
                  <span className="text-lg font-bold text-white tracking-tight">{s.val}</span>
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">{s.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Store Health Card */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500">
            <h3 className="font-semibold text-[#111111]">Store Health</h3>
            
            <div className="mt-6 space-y-5">
              {[
                { label: "Visibility", val: "Production Live", detail: "Live", color: "bg-emerald-500" },
                { label: "Endpoint", val: "mystore.drape.in", detail: "Domain" },
                { label: "Authority", val: "Growth Logistics", detail: "PRO", color: "bg-black text-white px-2 py-0.5 rounded text-[8px] font-bold" },
                { label: "Next Cycle", val: "₹8,240 on Dec 15", detail: "Payout" },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-start group/health">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mb-1">{h.label}</span>
                    <div className="flex items-center gap-2">
                      {h.color && !h.color.includes('text') && <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", h.color)} />}
                      <span className={cn("text-[13px] font-semibold text-[#111111]", h.color?.includes('text') && h.color)}>{h.val}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-[#9CA3AF] uppercase tracking-widest pt-1">{h.detail}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
