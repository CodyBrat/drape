"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { cn } from '@/lib/utils';
import { 
  Store, 
  User, 
  Bell, 
  CreditCard, 
  Camera, 
  ArrowUpRight, 
  CheckCircle2,
  Globe,
  Wallet,
  Shield,
  Trash2,
  ChevronRight,
  Settings2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const settingsTabs = [
  { id: 'Store', label: 'Store Information', icon: Store },
  { id: 'Appearance', label: 'Appearance', icon: Camera },
  { id: 'Domain', label: 'Domain Authority', icon: Globe },
  { id: 'Payments', label: 'Capital Logistics', icon: Wallet },
  { id: 'Notifications', label: 'Event Signals', icon: Bell },
  { id: 'Team', label: 'Authority Mesh', icon: User },
  { id: 'Billing', label: 'Registry Tier', icon: CreditCard },
  { id: 'Danger', label: 'Critical Overrides', icon: Shield, variant: 'danger' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Store');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Store':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="space-y-10"
          >
            <section className="bg-white border border-[#E5E7EB] rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-500 group">
               <h3 className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.3em] mb-12 flex items-center gap-2">
                  <Store size={14} className="group-hover:text-[#111111] transition-colors" /> Store Architecture
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Brand Designation</label>
                     <input 
                        type="text" 
                        defaultValue="VOIDWEAR"
                        className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#E5E7EB] focus:bg-white rounded-2xl px-5 py-4 text-sm font-bold text-[#111111] focus:outline-none transition-all shadow-inner"
                     />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Public Endpoint</label>
                     <div className="flex items-center gap-2 bg-[#F5F5F5] border border-[#E5E7EB] rounded-2xl px-5 py-4 text-sm font-mono text-[#9CA3AF] cursor-not-allowed shadow-inner transition-all group-hover:bg-[#EEEEEE]">
                        mystore.drape.in
                        <ArrowUpRight size={14} className="ml-auto text-[#E5E7EB] group-hover:text-[#9CA3AF] transition-colors" />
                     </div>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Creative Mission</label>
                     <textarea 
                        rows={4}
                        defaultValue="Premium streetwear and oversized apparel for the modern era. Designed in Mumbai, inspired by the noise."
                        className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#E5E7EB] focus:bg-white rounded-2xl px-5 py-4 text-sm font-medium text-[#111111] focus:outline-none transition-all shadow-inner resize-none leading-relaxed"
                     />
                  </div>
               </div>

               <button className="mt-12 px-8 py-4 bg-[#111111] text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] shadow-xl shadow-black/10 hover:opacity-90 active:scale-95 transition-all">
                  Synchronize Data
               </button>
            </section>
          </motion.div>
        );
      case 'Danger':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="bg-rose-50 border border-rose-200 rounded-[32px] p-10 shadow-inner group"
          >
             <h3 className="text-[10px] font-bold text-rose-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <Shield size={14} /> Critical Overrides
             </h3>
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 p-10 bg-white/40 border border-white rounded-[40px] shadow-sm relative overflow-hidden transition-all hover:bg-white/60">
                <div className="absolute top-0 right-0 p-12 opacity-5 text-rose-500 pointer-events-none">
                   <Shield size={120} />
                </div>
                <div className="max-w-md relative z-10">
                   <h4 className="text-[18px] font-bold text-rose-600 tracking-tight">Erase Store Authority</h4>
                   <p className="text-[12px] font-medium text-rose-400 mt-2 leading-relaxed">Instantly liquidate this store and purge all associated customer data and transaction logs from the Drape infrastructure.</p>
                </div>
                <button className="relative z-10 px-10 py-5 bg-rose-600 text-white rounded-[24px] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-rose-600/20 hover:bg-rose-700 active:scale-95 transition-all flex items-center gap-3 group/btn">
                   <Trash2 size={16} /> Initiative Purge
                </button>
             </div>
          </motion.div>
        );
      // Simplify logic for demo, rest follow same pattern as Store
      default:
        return (
          <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-12 flex flex-col items-center justify-center gap-6 min-h-[400px]">
             <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#9CA3AF] group-hover:text-[#111111] transition-all border border-[#E5E7EB]">
                <Settings2 size={24} strokeWidth={1.5} />
             </div>
             <div className="text-center">
                <h4 className="text-sm font-bold text-[#111111] uppercase tracking-widest mb-2">Protocol Unmounted</h4>
                <p className="text-xs text-[#9CA3AF] max-w-xs font-medium uppercase tracking-widest font-mono">Registry tier {activeTab} initialization pending backend development.</p>
             </div>
          </div>
        );
    }
  };

  return (
    <DashboardLayout title="Settings" breadcrumb="Drape / Settings">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT NAV (fixed width) */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-4 shadow-sm h-fit sticky top-24">
             <div className="px-5 pt-5 pb-8">
               <h2 className="text-[14px] font-black text-[#111111] uppercase tracking-[0.4em]">System</h2>
               <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mt-3">Node Maintenance</p>
             </div>
             <nav className="space-y-1">
               {settingsTabs.map((tab) => {
                 const Icon = tab.icon;
                 const isActive = activeTab === tab.id;
                 return (
                   <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id)}
                     className={cn(
                       "w-full flex items-center justify-between px-5 py-4 rounded-2xl text-[12px] font-bold uppercase tracking-[0.2em] transition-all group",
                       isActive 
                        ? "bg-[#111111] text-white shadow-xl shadow-black/10 scale-[1.02]" 
                        : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111111]"
                     )}
                   >
                     <div className="flex items-center gap-4">
                        <Icon size={16} className={cn("transition-colors", isActive ? "text-white" : "text-[#9CA3AF] group-hover:text-[#111111]")} />
                        <span className="truncate">{tab.id}</span>
                     </div>
                     <ChevronRight size={14} className={cn("transition-all", isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-40")} />
                   </button>
                 );
               })}
             </nav>
          </div>
        </div>

        {/* RIGHT CONTENT (flex-1) */}
        <div className="flex-1 pb-32">
           <AnimatePresence mode="wait">
             <div key={activeTab}>
               {renderTabContent()}
             </div>
           </AnimatePresence>
        </div>

        {/* Floating Global Save */}
        <div className="fixed bottom-12 right-12 z-50">
           <button className="flex items-center gap-4 bg-[#111111] text-white rounded-[32px] px-12 py-5 text-[12px] font-mono font-bold tracking-[0.3em] uppercase hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
              Update Mesh
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <CheckCircle2 size={16} className="text-white" />
              </div>
           </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
