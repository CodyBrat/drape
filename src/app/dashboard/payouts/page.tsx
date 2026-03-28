"use client";

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { DataTable } from '@/components/dashboard/DataTable';
import { Wallet, IndianRupee, Clock, Download, ShieldCheck, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Payout {
  id: string;
  amount: string;
  status: string;
  bank: string;
  date: string;
}

const stats = [
  { label: "Available Balance", value: "₹8,240", change: "+12.4%", isPositive: true, icon: Wallet },
  { label: "Pending Payouts", value: "₹21,450", change: "+2.5%", isPositive: true, icon: Clock },
  { label: "Total Earned", value: "₹1,24,500", change: "+15.8%", isPositive: true, icon: IndianRupee },
];

const payouts: Payout[] = [
  { id: "PAY-1089", amount: "₹12,400", status: "Completed", bank: "SBI ****4521", date: "Nov 1, 2025" },
  { id: "PAY-1088", amount: "₹8,200", status: "Completed", bank: "SBI ****4521", date: "Oct 1, 2025" },
  { id: "PAY-1087", amount: "₹15,100", status: "Completed", bank: "SBI ****4521", date: "Sep 1, 2025" },
  { id: "PAY-1086", amount: "₹5,400", status: "Completed", bank: "SBI ****4521", date: "Aug 1, 2025" },
  { id: "PAY-1085", amount: "₹9,800", status: "Completed", bank: "SBI ****4521", date: "Jul 1, 2025" },
  { id: "PAY-1084", amount: "₹11,200", status: "Failed", bank: "SBI ****4521", date: "Jun 1, 2025" },
];

const payoutColumns = [
  { key: "id", header: "Payout ID", sortable: true },
  { key: "amount", header: "Amount", sortable: true },
  { key: "status", header: "Status" },
  { key: "bank", header: "Bank Account" },
  { key: "date", header: "Date" },
  { key: "receipt", header: "Receipt", className: "text-right" },
];

export default function PayoutsPage() {
  const renderPayoutCell = (item: Payout, column: { key: string }) => {
    if (column.key === "status") {
      const isCompleted = item.status === "Completed";
      const isFailed = item.status === "Failed";
      
      return (
        <span className={cn(
          "px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase border shadow-sm",
          isCompleted 
            ? "bg-[#D1FAE5] text-[#065F46] border-[#D1FAE5]" 
            : isFailed 
              ? "bg-[#FEE2E2] text-[#991B1B] border-[#FEE2E2]" 
              : "bg-[#DBEAFE] text-[#1E40AF] border-[#DBEAFE]"
        )}>
          {item.status}
        </span>
      );
    }

    if (column.key === "receipt") {
      return (
        <button className="flex items-center justify-end gap-1.5 ml-auto px-3 py-1.5 border border-[#E5E7EB] rounded-lg text-[11px] font-semibold text-[#6B7280] hover:text-[#111111] hover:bg-[#F9FAFB] transition-all">
          <Download size={14} />
          Receipt
        </button>
      );
    }
    
    return (item as any)[column.key];
  };

  return (
    <DashboardLayout title="Payouts">
      <div className="flex flex-col">
        {/* Main Payout Card and Secondary Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
           <div className="lg:col-span-1 bg-[#111111] border border-[#111111] rounded-2xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-5 bg-white rounded-bl-3xl">
                 <Wallet size={80} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                 <span className="text-xs font-bold text-white/50 tracking-widest uppercase mb-2 block">Available Balance</span>
                 <h2 className="text-4xl font-semibold text-white tracking-tight">₹8,240</h2>
                 <p className="text-[10px] text-white/40 mt-3 font-mono">Available for instant payout</p>
              </div>
              <button className="relative z-10 w-full mt-10 py-3 bg-white text-black rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#F3F4F6] active:scale-95 transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                 Request Payout &rarr;
              </button>
           </div>

           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.slice(1).map((stat, i) => (
                <StatCard key={i} {...stat} />
              ))}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-2">Next Scheduled</span>
                    <span className="text-sm font-semibold text-[#111111]">Dec 15, 2025</span>
                    <div className="flex items-center gap-1.5 mt-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                       <span className="text-[10px] text-[#065F46] font-bold uppercase tracking-widest">Auto-payout enabled</span>
                    </div>
                 </div>
                 <div className="p-3 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
                    <Clock size={20} className="text-[#6B7280]" />
                 </div>
              </div>
           </div>
        </div>

        {/* Payout History */}
        <div className="mb-10">
          <DataTable<Payout> 
            title="Payout History" 
            columns={payoutColumns} 
            data={payouts}
            renderCell={renderPayoutCell}
          />
        </div>

        {/* Bank Account Section */}
        <div className="max-w-2xl">
           <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm group hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                    <div className="bg-[#F9FAFB] p-2.5 rounded-xl border border-[#E5E7EB]">
                       <ShieldCheck size={20} className="text-[#10B981]" />
                    </div>
                    <div>
                       <h2 className="text-sm font-semibold text-[#111111]">Connected Bank Account</h2>
                       <p className="text-xs text-[#6B7280] mt-1 font-body">Used for automatic and requested payouts</p>
                    </div>
                 </div>
                 <button className="text-xs font-bold text-[#6B7280] hover:text-[#111111] transition-colors flex items-center gap-1.5 px-4 py-2 border border-[#E5E7EB] rounded-lg">
                    Manage Bank Accounts
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                 <div className="md:col-span-8 flex items-center gap-6">
                    <div className="w-14 h-10 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg flex items-center justify-center p-2 opacity-60 group-hover:opacity-100 transition-opacity">
                       <CreditCard size={20} className="text-[#111111]" />
                    </div>
                    <div>
                       <span className="text-sm font-semibold text-[#111111] block mb-0.5">State Bank of India</span>
                       <span className="text-xs text-[#6B7280] font-mono tracking-wide">****4521 · Arjun Singh · SBIN0001234</span>
                    </div>
                 </div>
                 <div className="md:col-span-4 flex justify-start md:justify-end">
                    <span className="bg-[#D1FAE5] text-[#065F46] rounded-full px-3 py-1 text-[9px] font-bold tracking-widest uppercase border border-[#D1FAE5] shadow-sm">Verified</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
