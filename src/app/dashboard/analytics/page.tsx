"use client";

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { cn } from '@/lib/utils';
import { 
  Wallet, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Download, 
  BarChart3, 
  Eye, 
  Clock, 
  Smartphone,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { label: "Pageviews", value: "48,230", change: "+42.5% vs last month", isPositive: true, variant: 'accent' as const, icon: Eye },
  { label: "Unique Visitors", value: "12,430", change: "+23.1% vs last month", isPositive: true, icon: Users },
  { label: "Avg Session", value: "2m 14s", change: "+12.4% vs last month", isPositive: true, icon: Clock },
  { label: "Bounce Rate", value: "64.2%", change: "-2.5% vs last month", isPositive: false, icon: Smartphone },
];

const trafficSources = [
  { name: 'Direct', value: 42, color: 'bg-[#111111]' },
  { name: 'Instagram', value: 31, color: 'bg-[#374151]' },
  { name: 'Google', value: 18, color: 'bg-[#6B7280]' },
  { name: 'WhatsApp', value: 9, color: 'bg-[#9CA3AF]' },
];

const topPages = [
  { path: '/shop', views: '8,240', time: '1m 42s' },
  { path: '/product/void-tee', views: '3,120', time: '2m 15s' },
  { path: '/product/acid-punch', views: '2,450', time: '1m 58s' },
  { path: '/about', views: '1,890', time: '0m 45s' },
];

export default function AnalyticsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeRange, setActiveRange] = useState('7D');
  const ranges = ['7D', '30D', '90D', '12M'];

  useEffect(() => setIsLoaded(true), []);

  return (
    <DashboardLayout title="Analytics" breadcrumb="Drape / Analytics">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#111111]">
            Analytics
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-1 font-medium tracking-wide uppercase">
            Traffic & behavior analysis
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-white border border-[#E5E7EB] p-1.5 rounded-2xl shadow-sm">
          {ranges.map((range) => (
            <button 
              key={range}
              onClick={() => setActiveRange(range)}
              className={cn(
                "px-5 py-2 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all",
                activeRange === range 
                  ? "bg-[#111111] text-white shadow-lg shadow-black/10" 
                  : "text-[#6B7280] hover:text-[#111111]"
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="lg:col-span-2 space-y-4">
           {/* Revenue Chart (Extended) */}
           <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h3 className="font-semibold text-[#111111] flex items-center gap-2 tracking-tight">Revenue Trajectory</h3>
                    <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest mt-2">Daily Settlement Summary</p>
                 </div>
                 <button className="p-2.5 bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl text-[#9CA3AF] hover:text-[#111111] transition-all">
                    <Download size={16} />
                 </button>
              </div>

              <div className="flex items-end justify-between h-56 gap-5 px-4 mb-2">
                 {[8200, 12100, 9400, 15600, 11200, 18400, 14500].map((val, i) => {
                    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                    const isToday = days[i] === 'Sun';
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-6 group/bar">
                        <div className="w-12 bg-[#F5F5F5] rounded-t-2xl relative overflow-hidden h-56">
                           <motion.div 
                             initial={{ height: 0 }}
                             animate={{ height: isLoaded ? `${(val / 20000) * 100}%` : 0 }}
                             transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
                             className={cn("absolute bottom-0 left-0 right-0 rounded-t-2xl transition-all", isToday ? "bg-[#111111] shadow-[0_0_30px_rgba(0,0,0,0.1)]" : "bg-[#E5E7EB] group-hover/bar:bg-[#111111]/40")}
                           />
                        </div>
                        <span className={cn("text-[10px] font-bold uppercase tracking-widest", isToday ? "text-[#111111]" : "text-[#9CA3AF]")}>{days[i]}</span>
                      </div>
                    );
                 })}
              </div>
           </section>

           {/* Traffic Sources */}
           <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="font-semibold text-[#111111] mb-2 tracking-tight">Traffic Vectors</h3>
              <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-10">Inbound Acquisition Sources</p>
              
              <div className="space-y-10">
                 {trafficSources.map((source, i) => (
                   <div key={i} className="group/src">
                      <div className="flex justify-between items-center mb-3">
                         <span className="text-sm font-bold text-[#111111] group-hover/src:translate-x-1 transition-transform">{source.name}</span>
                         <span className="text-[12px] font-mono font-black text-[#9CA3AF]">{source.value}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#F5F5F5] rounded-full overflow-hidden shadow-inner relative">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: isLoaded ? `${source.value}%` : 0 }}
                           transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }}
                           className={cn("h-full rounded-full transition-all", source.color)} 
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="lg:col-span-1 space-y-4">
           {/* Top Pages */}
           <section className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="font-semibold text-[#111111] mb-6 tracking-tight">Engagement Flow</h3>
              <div className="space-y-1 divide-y divide-[#F5F5F5]">
                 {topPages.map((page, i) => (
                   <div key={i} className="py-4 flex items-center justify-between group/page">
                      <div className="flex flex-col gap-1">
                         <span className="text-sm font-bold text-[#111111] group-hover/page:underline decoration-[#E5E7EB] underline-offset-4">{page.path}</span>
                         <span className="text-[10px] font-mono font-medium text-[#9CA3AF] uppercase tracking-widest mt-0.5">{page.views} Sessions</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#111111] bg-[#F5F5F5] px-2.5 py-1 rounded-lg">{page.time}</span>
                   </div>
                 ))}
              </div>
           </section>

           {/* Devices Distribution */}
           <section className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="font-semibold text-[#111111] mb-10 tracking-tight">Hardware Protocol</h3>
              <div className="space-y-8">
                 {[
                   { label: "Desktop Authority", val: "58%", icon: "D" },
                   { label: "Mobile Endpoint", val: "38%", icon: "M" },
                   { label: "Tablet / Other", val: "4%", icon: "O" },
                 ].map((d, i) => (
                   <div key={i} className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">{d.label}</span>
                         <span className="text-[12px] font-mono font-black text-[#111111]">{d.val}</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F5F5F5] rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: isLoaded ? d.val : 0 }}
                           transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                           className="bg-[#111111] h-full"
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </section>

           {/* Conversion Funnel */}
           <section className="bg-[#111111] rounded-3xl p-8 shadow-2xl shadow-black/20 text-white">
              <h3 className="font-semibold text-white/50 text-[10px] font-mono uppercase tracking-[0.3em] mb-10">Conversion Funnel</h3>
              <div className="space-y-3">
                 {[
                   { label: "Total Visitors", val: "12,430", pct: "100%" },
                   { label: "Product View", val: "8,240", pct: "66%" },
                   { label: "Add to Cart", val: "2,100", pct: "17%" },
                   { label: "Purchase Mark", val: "284", pct: "2.3%" },
                 ].map((s, i) => (
                   <div key={i} className="relative group/step">
                      <div 
                        className="bg-white/10 hover:bg-white/20 border border-white/5 rounded-2xl p-4 flex items-center justify-between transition-all duration-500 cursor-pointer"
                        style={{ width: `${100 - (i * 10)}%` }}
                      >
                         <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{s.label}</span>
                            <span className="text-sm font-bold mt-1">{s.val}</span>
                         </div>
                         <span className="text-[11px] font-mono font-black text-white/20 group-hover/step:text-white/60 transition-colors">{s.pct}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
