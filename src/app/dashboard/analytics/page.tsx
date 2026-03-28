"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { DataTable } from '@/components/dashboard/DataTable';
import { Eye, Users, MousePointer2, Clock, BarChart3, TrendingUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { label: "Pageviews", value: "48,230", change: "+42.5%", isPositive: true, icon: Eye },
  { label: "Unique Visitors", value: "12,430", change: "+23.1%", isPositive: true, icon: Users },
  { label: "Avg Session", value: "2m 14s", change: "+12.4%", isPositive: true, icon: Clock },
  { label: "Bounce Rate", value: "64.2%", change: "-2.5%", isPositive: true, icon: MousePointer2 },
];

const revenueData = [
  { day: 'Mon', value: 8200, label: '₹8.2k' },
  { day: 'Tue', value: 12100, label: '₹12.1k' },
  { day: 'Wed', value: 9500, label: '₹9.5k' },
  { day: 'Thu', value: 14200, label: '₹14.2k' },
  { day: 'Fri', value: 11800, label: '₹11.8k' },
  { day: 'Sat', value: 18400, label: '₹18.4k' },
  { day: 'Sun', value: 16200, label: '₹16.2k' },
];

const trafficSources = [
  { name: 'Direct', value: 42, color: 'bg-[#111111]' },
  { name: 'Instagram', value: 31, color: 'bg-[#6B7280]' },
  { name: 'Google', value: 18, color: 'bg-[#9CA3AF]' },
  { name: 'WhatsApp', value: 9, color: 'bg-[#E5E7EB]' },
];

const topPages = [
  { path: '/shop', views: '8,240', time: '1m 42s' },
  { path: '/product/void-tee', views: '3,120', time: '2m 15s' },
  { path: '/product/acid-punch', views: '2,450', time: '1m 58s' },
  { path: '/about', views: '1,890', time: '0m 45s' },
];

const pageColumns = [
  { key: 'path', header: 'Page Path' },
  { key: 'views', header: 'Views', sortable: true },
  { key: 'time', header: 'Avg Time' },
];

export default function AnalyticsPage() {
  const [activeRange, setActiveRange] = useState('7D');
  const ranges = ['7D', '30D', '90D', '12M'];

  const maxRevenue = Math.max(...revenueData.map(d => d.value));

  return (
    <DashboardLayout title="Analytics">
      <div className="flex flex-col">
        {/* Header with Selector */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-1.5 bg-white border border-[#E5E7EB] rounded-xl px-4 py-2 hover:border-[#D1D5DB] transition-all cursor-pointer shadow-sm group">
            <BarChart3 size={16} className="text-[#6B7280]" />
            <span className="text-sm font-semibold text-[#111111]">Store Performance</span>
            <ChevronDown size={14} className="text-[#9CA3AF] group-hover:text-[#6B7280]" />
          </div>

          <div className="flex items-center gap-1 bg-[#F3F4F6] p-1 rounded-xl border border-[#E5E7EB] shadow-inner">
            {ranges.map((range) => (
              <button 
                key={range}
                onClick={() => setActiveRange(range)}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all",
                  activeRange === range 
                    ? "bg-white text-[#111111] shadow-sm ring-1 ring-[#E5E7EB]" 
                    : "text-[#6B7280] hover:text-[#111111]"
                )}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-10">
               <div>
                  <h2 className="text-sm font-semibold text-[#111111]">Revenue over time</h2>
                  <p className="text-xs text-[#6B7280] mt-1">Daily revenue generated for the last 7 days</p>
               </div>
               <div className="flex items-center gap-2 text-[#10B981] bg-[#D1FAE5] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#D1FAE5]">
                  <TrendingUp size={12} />
                  +12.4%
               </div>
            </div>

            <div className="flex items-end justify-between h-48 gap-4 px-2">
              {revenueData.map((d, i) => {
                const height = (d.value / maxRevenue) * 100;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-[#111111] bg-[#F9FAFB] px-2 py-1 rounded-md border border-[#E5E7EB] mb-1">{d.label}</span>
                    <div className="w-full bg-[#F3F4F6] rounded-t-lg relative overflow-hidden group-hover:bg-[#E5E7EB] transition-colors" style={{ height: '100%' }}>
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-[#111111] rounded-t-lg transition-all duration-1000 ease-out shadow-sm"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">{d.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <h2 className="text-sm font-semibold text-[#111111] mb-2">Traffic Sources</h2>
            <p className="text-xs text-[#6B7280] mb-8">Where your visitors are coming from</p>
            
            <div className="space-y-6 flex-1">
               {trafficSources.map((source, i) => (
                 <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-sm font-medium text-[#111111]">{source.name}</span>
                       <span className="text-xs font-bold text-[#6B7280]">{source.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden shadow-inner">
                       <div className={cn("h-full rounded-full transition-all duration-1000", source.color)} style={{ width: `${source.value}%` }} />
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-6 border-t border-[#E5E7EB] mt-6">
               <button className="w-full py-2.5 text-xs font-bold text-[#111111] bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:bg-[#F3F4F6] transition-all tracking-widest uppercase">
                  View Full Report
               </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <DataTable title="Top Pages" columns={pageColumns} data={topPages} />
          
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
             <h2 className="text-sm font-semibold text-[#111111] mb-2">Device Breakdown</h2>
             <p className="text-xs text-[#6B7280] mb-10">Visitors by device type</p>

             <div className="flex items-end gap-6 h-12">
                <div className="flex-1 bg-[#111111] rounded-lg relative group" style={{ width: '58%' }}>
                   <div className="absolute -top-6 left-0 text-[10px] font-bold text-[#111111] uppercase tracking-widest">Desktop (58%)</div>
                </div>
                <div className="flex-[0.7] bg-[#6B7280] rounded-lg relative group">
                   <div className="absolute -top-6 left-0 text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">Mobile (38%)</div>
                </div>
                <div className="flex-[0.1] bg-[#E5E7EB] rounded-lg relative group">
                   <div className="absolute -top-6 left-0 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">Other (4%)</div>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-[#111111]">12.4k</span>
                   <span className="text-[10px] font-medium text-[#6B7280] uppercase tracking-widest mt-1">Desktop</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-[#111111]">8.1k</span>
                   <span className="text-[10px] font-medium text-[#6B7280] uppercase tracking-widest mt-1">Mobile</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-[#111111]">0.8k</span>
                   <span className="text-[10px] font-medium text-[#6B7280] uppercase tracking-widest mt-1">Other</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
