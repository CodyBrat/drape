"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { cn } from '@/lib/utils';
import { 
  Download, 
  Search, 
  ChevronDown, 
  Package,
  Truck,
  User,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface OrderItem {
  id: string;
  name: string;
  size: string;
  qty: number;
  price: string;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  address: string;
  amount: string;
  status: 'Pending' | 'Processing' | 'Fulfilled' | 'Cancelled';
  date: string;
  items: OrderItem[];
}

const ordersData: Order[] = [
  { 
    id: "#DRP-1042", 
    customer: "Alex Sterling", 
    email: "alex@example.com",
    phone: "+1 212 555 0198",
    address: "742 Evergreen Terrace, New York, NY 10001",
    amount: "$149", 
    status: "Fulfilled", 
    date: "Dec 1, 2025",
    items: [{ id: "VOID-01", name: "VOID OVERSIZED TEE", size: "L", qty: 1, price: "$149" }]
  },
  { 
    id: "#DRP-1041", 
    customer: "Sarah Vance", 
    email: "sarah@example.com",
    phone: "+44 20 7946 0958",
    address: "Flat 12, Rose Villa, London, UK SW1A 1AA",
    amount: "$259", 
    status: "Pending", 
    date: "Dec 1, 2025",
    items: [{ id: "VOID-02", name: "ACID LOGO PUNCH", size: "M", qty: 2, price: "$129" }]
  },
  { 
    id: "#DRP-1040", 
    customer: "Julian Thorne", 
    email: "julian@example.com",
    phone: "+61 2 5550 1234",
    address: "24/B Sector 5, Sydney, AU 2000",
    amount: "$159", 
    status: "Processing", 
    date: "Nov 30, 2025",
    items: [{ id: "VOID-03", name: "NOISE CORE GRAPHIC", size: "XL", qty: 1, price: "$159" }]
  },
  { 
    id: "#DRP-1039", 
    customer: "Elena Rossi", 
    email: "elena@example.com",
    phone: "+39 06 1234 5678",
    address: "Penthouse 3, Galaxy Heights, Rome, IT 00100",
    amount: "$119", 
    status: "Cancelled", 
    date: "Nov 30, 2025",
    items: [{ id: "VOID-04", name: "CORE BLACK BOX TEE", size: "S", qty: 1, price: "$119" }]
  },
  { 
    id: "#DRP-1038", 
    customer: "Marcus Wright", 
    email: "marcus@example.com",
    phone: "+81 3 1234 5678",
    address: "Row House #7, Green Park, Tokyo, JP 100-0001",
    amount: "$279", 
    status: "Fulfilled", 
    date: "Nov 29, 2025",
    items: [{ id: "VOID-05", name: "VOLTAGE DROP TEE", size: "L", qty: 2, price: "$139" }]
  },
];

export default function OrdersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('ALL');

  const stats = [
    { label: "Total Orders", value: "284", change: "+8.2% vs last month", isPositive: true, variant: 'accent' as const },
    { label: "Pending", value: "12", change: "↓ Urgent", isPositive: false, color: "text-amber-500" },
    { label: "Processing", value: "18", change: "↑ 3 this hour", isPositive: true, color: "text-blue-500" },
    { label: "Fulfilled", value: "246", change: "↑ Healthy", isPositive: true, color: "text-emerald-500" },
  ];

  return (
    <DashboardLayout title="Orders" breadcrumb="Drape / Orders">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#111111]">
            Orders
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-1 font-medium tracking-wide uppercase">
            Log of customer transactions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-sm font-semibold text-[#111111] hover:bg-[#F9FAFB] active:scale-95 transition-all shadow-sm flex items-center gap-2">
            <Download size={14} /> Export
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#111111] text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg">
            New Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* FILTER BAR */}
      <div className="mt-8 bg-white border border-[#E5E7EB] rounded-2xl px-6 py-3 flex flex-col md:flex-row items-center gap-6 shadow-sm overflow-x-auto scrollbar-hide">
         <div className="flex gap-1 shrink-0">
           {['ALL', 'PENDING', 'PROCESSING', 'FULFILLED', 'CANCELLED'].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={cn(
                 "px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap",
                 activeTab === tab 
                   ? "bg-[#111111] text-white" 
                   : "text-[#6B7280] hover:bg-[#F5F5F5] hover:text-[#111111]"
               )}
             >
               {tab}
             </button>
           ))}
         </div>
         
         <div className="h-6 w-px bg-[#E5E7EB] hidden md:block" />

         <div className="flex items-center gap-4 bg-[#F5F5F5] rounded-xl px-4 py-2 flex-1 min-w-[200px] border border-transparent focus-within:border-[#E5E7EB] focus-within:bg-white transition-all group">
            <Search size={14} className="text-[#9CA3AF] group-hover:text-[#111111]" />
            <input type="text" placeholder="Search customer, ID, tracking..." className="bg-transparent border-none outline-none text-sm font-medium text-[#111111] placeholder-[#9CA3AF] flex-1" />
         </div>

         <div className="flex items-center gap-2 text-[11px] font-bold text-[#6B7280] uppercase tracking-widest shrink-0">
            <Clock size={14} />
            Today
            <ChevronDown size={14} />
         </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="mt-6 bg-white border border-[#E5E7EB] rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
        <table className="w-full text-left">
          <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
            <tr>
              <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Order ID</th>
              <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Client Name</th>
              <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Amount</th>
              <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Verified Status</th>
              <th className="px-8 py-5 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F5F5F5]">
            {ordersData.map((order) => (
              <React.Fragment key={order.id}>
                <tr 
                  onClick={() => setExpandedId(expandedId === order.id ? null : order.id)}
                  className={cn(
                    "group transition-all cursor-pointer",
                    expandedId === order.id ? "bg-[#F9FAFB]" : "hover:bg-[#F9FAFB]"
                  )}
                >
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-3">
                       <span className={cn(
                         "w-1 h-1 rounded-full",
                         order.status === 'Fulfilled' ? "bg-emerald-500" : order.status === 'Pending' ? "bg-amber-500" : "bg-blue-500"
                       )} />
                       <span className="text-sm font-mono font-bold text-[#111111]">{order.id}</span>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex flex-col">
                       <span className="text-sm font-bold text-[#111111]">{order.customer}</span>
                       <span className="text-[10px] font-medium text-[#9CA3AF] mt-0.5">{order.date}</span>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <span className="text-sm font-bold text-[#111111]">{order.amount}</span>
                  </td>
                  <td className="px-8 py-7">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border",
                      order.status === 'Fulfilled' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      order.status === 'Pending' ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : 
                      order.status === 'Processing' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : 
                      "bg-[#F5F5F5] text-[#9CA3AF] border-[#E5E7EB]"
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-7 text-right">
                    <motion.div 
                      animate={{ rotate: expandedId === order.id ? 180 : 0 }}
                      className="inline-block p-2 text-[#9CA3AF] group-hover:text-[#111111]"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </td>
                </tr>
                
                {/* EXPANDED ROW */}
                <AnimatePresence>
                  {expandedId === order.id && (
                    <tr>
                      <td colSpan={5} className="p-0 overflow-hidden">
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "circOut" }}
                          className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-12 py-10"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                             {/* Client Authority */}
                             <div className="space-y-6">
                                <h4 className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                   <User size={12} /> Client Authority
                                </h4>
                                <div className="space-y-1">
                                   <p className="text-sm font-bold text-[#111111]">{order.customer}</p>
                                   <p className="text-[12px] font-medium text-[#6B7280]">{order.email}</p>
                                   <p className="text-[12px] font-medium text-[#6B7280]">{order.phone}</p>
                                </div>
                                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 mt-8">
                                   <h5 className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-2 flex items-center gap-2">
                                      <MapPin size={10} /> Consignee Endpoint
                                   </h5>
                                   <p className="text-[11px] font-medium text-[#111111] leading-relaxed">
                                      {order.address}
                                   </p>
                                </div>
                             </div>

                             {/* Transit Detail */}
                             <div className="space-y-6">
                                <h4 className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                   <Truck size={12} /> Transit Detail
                                </h4>
                                <div className="space-y-4">
                                   <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 cursor-pointer hover:border-[#111111] transition-all group">
                                      <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-1">Manifest Reference</p>
                                      <div className="flex items-center justify-between">
                                         <span className="text-sm font-mono font-bold text-[#111111]">TRK-DRP-X920</span>
                                         <ArrowRight size={14} className="text-[#9CA3AF] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
                                      </div>
                                   </div>
                                   {order.status !== 'Fulfilled' && (
                                     <button className="w-full py-4 bg-[#111111] text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-black/10 hover:opacity-90 active:scale-95 transition-all">
                                        Release Parcel
                                     </button>
                                   )}
                                   {order.status === 'Fulfilled' && (
                                     <div className="flex items-center gap-3 bg-emerald-500/5 text-emerald-600 border border-emerald-500/20 rounded-2xl p-4">
                                        <CheckCircle2 size={18} />
                                        <span className="text-xs font-bold uppercase tracking-widest">Transaction Successfully Archived</span>
                                     </div>
                                   )}
                                </div>
                             </div>

                             {/* Artifact manifest */}
                             <div className="space-y-6">
                                <h4 className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                   <Package size={12} /> Artifact Manifest
                                </h4>
                                <div className="space-y-3">
                                   {order.items.map((item, idx) => (
                                     <div key={idx} className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-2xl p-4">
                                        <div className="flex items-center gap-4">
                                           <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg"></div>
                                           <div className="flex flex-col">
                                              <span className="text-xs font-bold text-[#111111]">{item.name}</span>
                                              <span className="text-[9px] font-mono text-[#9CA3AF] uppercase tracking-widest">Size {item.size} · x{item.qty}</span>
                                           </div>
                                        </div>
                                        <span className="text-[12px] font-bold text-[#111111]">{item.price}</span>
                                     </div>
                                   ))}
                                   <div className="flex justify-between items-center px-4 pt-4 border-t border-[#E5E7EB]">
                                      <span className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest">Aggregate Value</span>
                                      <span className="text-sm font-black text-[#111111]">{order.amount}</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                        </motion.div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
