"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { cn } from '@/lib/utils';
import { Store, User, Bell, CreditCard, Upload, Smartphone, Mail, Camera, Send, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Store');
  const tabs = ['Store', 'Account', 'Notifications', 'Billing'];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Store':
        return (
          <div className="space-y-12">
            <section className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
               <h3 className="text-sm font-semibold text-[#111111] mb-2 flex items-center gap-2">
                  <Store size={16} className="text-[#6B7280]" />
                  Store Information
               </h3>
               <p className="text-xs text-[#6B7280] mb-8">Change how your store is identified and described online</p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Store Name</label>
                     <input 
                        type="text" 
                        defaultValue="VOIDWEAR"
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:outline-none focus:border-[#111111] transition-all shadow-inner"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Store URL</label>
                     <div className="flex items-center gap-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm cursor-not-allowed shadow-inner group transition-all">
                        <span className="font-mono text-[#9CA3AF] text-xs">mystore.drape.in</span>
                        <ArrowUpRight size={12} className="ml-auto text-[#9CA3AF]" />
                     </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Store Description</label>
                     <textarea 
                        rows={4}
                        defaultValue="Premium streetwear and oversized apparel for the modern era. Designed in Mumbai, inspired by the noise."
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:border-[#111111] transition-all shadow-inner resize-none"
                     />
                  </div>
               </div>
            </section>

            <section className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
               <h3 className="text-sm font-semibold text-[#111111] mb-2 flex items-center gap-2">
                  <Upload size={16} className="text-[#6B7280]" />
                  Brand Assets
               </h3>
               <p className="text-xs text-[#6B7280] mb-8">Upload your logos and manage brand presence</p>

               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 w-full border-2 border-dashed border-[#E5E7EB] hover:border-[#D1D5DB] rounded-2xl p-10 flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-pointer bg-[#F9FAFB] overflow-hidden relative">
                     <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#D1FAE5] text-[#065F46] rounded-full text-[8px] font-bold tracking-widest uppercase shadow-sm border border-[#D1FAE5]">Live</div>
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#9CA3AF] group-hover:text-[#111111] group-hover:scale-110 transition-all border border-[#E5E7EB] shadow-sm">
                        <Upload size={20} />
                     </div>
                     <div className="text-center">
                        <span className="text-sm font-semibold text-[#111111] block mb-1 underline underline-offset-4 decoration-[#E5E7EB]/50">Upload new logo</span>
                        <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-widest">SVG, PNG, JPG (Max 2MB)</span>
                     </div>
                  </div>

                  <div className="w-full md:w-64 space-y-6">
                     <div className="space-y-4">
                        <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Primary Color</label>
                        <div className="flex gap-3">
                           {['#111111', '#4F46E5', '#10B981', '#F59E0B', '#EF4444'].map((color) => (
                              <div 
                                 key={color} 
                                 className={cn(
                                    "w-8 h-8 rounded-full border border-[#E5E7EB] cursor-pointer hover:scale-110 transition-all shadow-sm",
                                    color === '#111111' ? 'ring-2 ring-offset-2 ring-black' : ''
                                 )}
                                 style={{ backgroundColor: color }}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
               <h3 className="text-sm font-semibold text-[#111111] mb-8 flex items-center gap-2">
                  <Smartphone size={16} className="text-[#6B7280]" />
                  Social Links
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Camera size={12} />
                        Instagram
                     </label>
                     <input 
                        type="text" 
                        defaultValue="instagram.com/voidwear"
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:outline-none focus:border-[#111111] transition-all shadow-inner"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Send size={12} />
                        Twitter
                     </label>
                     <input 
                        type="text" 
                        defaultValue="twitter.com/voidwear"
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:outline-none focus:border-[#111111] transition-all shadow-inner"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Phone size={12} />
                        WhatsApp Support
                     </label>
                     <input 
                        type="text" 
                        defaultValue="+91 98765 43210"
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:outline-none focus:border-[#111111] transition-all shadow-inner"
                     />
                  </div>
               </div>
            </section>
          </div>
        );
      case 'Account':
        return (
          <section className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
             <h3 className="text-sm font-semibold text-[#111111] mb-2 flex items-center gap-2">
                <User size={16} className="text-[#6B7280]" />
                Personal Profile
             </h3>
             <p className="text-xs text-[#6B7280] mb-8">Your account details and visibility across tools</p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Full Name</label>
                   <input 
                      type="text" 
                      defaultValue="Arjun Singh"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:outline-none focus:border-[#111111] transition-all shadow-inner"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-1.5">
                      <Mail size={12} /> Email Address
                   </label>
                   <div className="w-full bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#9CA3AF] cursor-not-allowed shadow-inner transition-all flex items-center gap-2">
                      arjun@drape.in
                      <span className="ml-auto bg-[#D1FAE5] text-[#065F46] rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest border border-[#D1FAE5] shadow-sm">Verified</span>
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Phone Number</label>
                   <input 
                      type="text" 
                      defaultValue="+91 99887 76655"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:outline-none focus:border-[#111111] transition-all shadow-inner"
                   />
                </div>
             </div>

             <div className="mt-12 py-6 border-t border-[#E5E7EB] flex flex-col items-start gap-4">
               <h4 className="text-xs font-bold text-[#991B1B] uppercase tracking-widest">Danger Zone</h4>
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-6 bg-[#FEE2E2]/30 border border-[#FEE2E2] rounded-xl gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-[#991B1B]">Archive Store</h5>
                    <p className="text-xs text-[#991B1B]/70 mt-1">Temporarily remove your store and all its data from the public web</p>
                  </div>
                  <button className="px-6 py-2 border border-[#FEE2E2] text-[#991B1B] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#FEE2E2] transition-all shadow-sm">Archive Store</button>
               </div>
             </div>
          </section>
        );
      case 'Notifications':
        return (
          <section className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
             <h3 className="text-sm font-semibold text-[#111111] mb-2 flex items-center gap-2">
                <Bell size={16} className="text-[#6B7280]" />
                Event Alerts
             </h3>
             <p className="text-xs text-[#6B7280] mb-8">Manage how and when you receive order and payout updates</p>

             <div className="divide-y divide-[#E5E7EB]">
                {[
                  { title: "New order received", desc: "Get notified as soon as a customer places a successful order", active: true },
                  { title: "Order fulfilled", desc: "Confirmation when items are marked for shipping", active: true },
                  { title: "Low stock alerts", desc: "Sent when product quantity reaches below threshold (10 units)", active: false },
                  { title: "Payout processed", desc: "Confirmation when funds are transferred to your bank", active: true },
                  { title: "Weekly store summary", desc: "Summarised overview of your sales, traffic and payouts", active: true },
                ].map((item, i) => (
                  <div key={i} className="py-6 flex justify-between items-start gap-12 group first:pt-2 last:pb-2 transition-all">
                     <div className="max-w-md">
                        <span className="text-sm font-bold text-[#111111] flex items-center gap-2 group-hover:translate-x-1 transition-transform">{item.title}</span>
                        <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">{item.desc}</p>
                     </div>
                     <div className={cn(
                        "w-10 h-5 rounded-full relative transition-all duration-300 shrink-0 mt-1 border border-[#E5E7EB] shadow-inner",
                        item.active ? "bg-[#111111]" : "bg-[#E5E7EB]"
                     )}>
                        <div className={cn(
                           "absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md border border-[#E5E7EB] transition-all duration-300",
                           item.active ? "right-1" : "left-1"
                        )} />
                     </div>
                  </div>
                ))}
             </div>
          </section>
        );
      case 'Billing':
        return (
          <div className="space-y-8">
            <section className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <CreditCard size={120} strokeWidth={1} />
               </div>
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-[#E5E7EB] pb-8 relative z-10">
                  <div>
                    <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-2 block">Current Subscription</span>
                    <div className="flex items-center gap-3">
                       <h3 className="text-2xl font-semibold text-[#111111]">Starter Plan</h3>
                       <span className="bg-[#111111] text-white rounded-full px-3 py-1 text-[9px] font-bold tracking-widest uppercase border border-[#111111] shadow-sm">ACTIVE</span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-1">₹299/mo · Monthly billing · Renews Dec 15, 2025</p>
                  </div>
                  <button className="px-6 py-2.5 bg-[#111111] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#374151] transition-all shadow-md active:scale-95">Upgrade to Growth</button>
               </div>

               <div className="relative z-10">
                  <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-6 block">Payment Method</span>
                  <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl shadow-inner gap-4 group hover:bg-white hover:shadow-md hover:border-[#D1D5DB] transition-all">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-8 bg-white border border-[#E5E7EB] rounded-lg flex items-center justify-center shadow-sm">
                           <span className="text-[8px] font-bold font-mono text-[#111111]">VISA</span>
                        </div>
                        <div>
                           <span className="text-sm font-semibold text-[#111111] block mb-0.5">Visa Ending in 4521</span>
                           <span className="text-[10px] text-[#6B7280] uppercase tracking-widest font-bold">Expires 12/28</span>
                        </div>
                        <div className="ml-2 bg-[#D1FAE5] text-[#065F46] rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest border border-[#D1FAE5]">Primary</div>
                     </div>
                     <button className="px-4 py-2 border border-[#E5E7EB] text-[#111111] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#F3F4F6] transition-all shadow-sm">Change card</button>
                  </div>
               </div>
            </section>
          </div>
        );
      default: return null;
    }
  };

  return (
    <DashboardLayout title="Settings">
      <div className="flex flex-col">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-10 mb-10 overflow-x-auto pb-4 border-b border-[#E5E7EB] scrollbar-hide shrink-0">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "text-xs font-bold tracking-[0.2em] uppercase transition-all relative pb-4 shrink-0 px-2 group",
                activeTab === tab 
                  ? "text-[#111111]" 
                  : "text-[#9CA3AF] hover:text-[#6B7280]"
              )}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)]" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111]/0 group-hover:bg-[#111111]/5 transition-all" />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl pb-20">
          {renderTabContent()}
          
          <div className="fixed bottom-0 left-[240px] right-0 h-24 bg-gradient-to-t from-[var(--dash-bg)] via-[var(--dash-bg)] to-transparent pointer-events-none z-20" />
          <div className="fixed bottom-8 right-8 z-30">
             <button className="flex items-center gap-3 bg-[#111111] text-white rounded-full px-10 py-3.5 text-[11px] font-bold tracking-widest uppercase hover:bg-black active:scale-95 transition-all shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group">
                Save Changes 
                <CheckCircle2 size={16} className="group-hover:scale-110 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
