"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { DataTable } from '@/components/dashboard/DataTable';
import { ShoppingBag, CheckCircle, Clock, Search, Filter, Eye, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Order {
  id: string;
  customer: string;
  products: string;
  amount: string;
  status: string;
  date: string;
}

const stats = [
  { label: "Total Orders", value: "284", change: "+12.4%", isPositive: true, icon: ShoppingBag },
  { label: "Pending", value: "12", change: "+2.5%", isPositive: false, icon: Clock },
  { label: "Processing", value: "18", change: "+4.2%", isPositive: true, icon: ShoppingBag },
  { label: "Fulfilled", value: "246", change: "+15.8%", isPositive: true, icon: CheckCircle },
];

const orders: Order[] = [
  { id: "#DRP-1042", customer: "Arjun Singh", products: "VOID OVERSIZED TEE, +1", amount: "₹2,499", status: "Fulfilled", date: "Dec 1, 2025" },
  { id: "#DRP-1041", customer: "Meera Nair", products: "ACID LOGO PUNCH", amount: "₹1,299", status: "Pending", date: "Dec 1, 2025" },
  { id: "#DRP-1040", customer: "Rohan Varma", products: "NOISE CORE GRAPHIC", amount: "₹1,599", status: "Processing", date: "Nov 30, 2025" },
  { id: "#DRP-1039", customer: "Anjali Gupta", products: "CORE BLACK BOX TEE, +2", amount: "₹4,199", status: "Cancelled", date: "Nov 30, 2025" },
  { id: "#DRP-1038", customer: "Siddharth Rao", products: "VOLTAGE DROP TEE", amount: "₹1,399", status: "Fulfilled", date: "Nov 29, 2025" },
  { id: "#DRP-1037", customer: "Priyanka Chopra", products: "DISTORTED TYPE-01", amount: "₹1,449", status: "Fulfilled", date: "Nov 29, 2025" },
  { id: "#DRP-1036", customer: "Isha Ambani", products: "LABORATORY SAMPLE, +1", amount: "₹3,499", status: "Fulfilled", date: "Nov 28, 2025" },
  { id: "#DRP-1035", customer: "Ranveer Singh", products: "RAW CUT TEE", amount: "₹1,699", status: "Fulfilled", date: "Nov 28, 2025" },
];

const orderColumns = [
  { key: "id", header: "Order ID", sortable: true },
  { key: "customer", header: "Customer" },
  { key: "products", header: "Products" },
  { key: "amount", header: "Amount", sortable: true },
  { key: "status", header: "Status" },
  { key: "date", header: "Date" },
  { key: "actions", header: "Actions", className: "text-right" },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Pending', 'Processing', 'Fulfilled', 'Cancelled'];

  const renderOrderCell = (item: Order, column: { key: string }) => {
    if (column.key === "status") {
      const statusColors: Record<string, string> = {
        Fulfilled: "bg-[#D1FAE5] text-[#065F46] border-[#D1FAE5]",
        Pending: "bg-[#FEF3C7] text-[#92400E] border-[#FEF3C7]",
        Processing: "bg-[#DBEAFE] text-[#1E40AF] border-[#DBEAFE]",
        Cancelled: "bg-[#FEE2E2] text-[#991B1B] border-[#FEE2E2]",
      };
      
      return (
        <span className={cn(
          "px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase border shadow-sm",
          statusColors[item.status]
        )}>
          {item.status}
        </span>
      );
    }

    if (column.key === "actions") {
      return (
        <div className="flex items-center justify-end gap-3 translate-x-1">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-[11px] font-semibold text-[#111111] hover:bg-[#F3F4F6] transition-all">
            <Eye size={14} />
            View
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] border border-[#111111] rounded-lg text-[11px] font-semibold text-white hover:bg-[#374151] transition-all">
            Fulfill
          </button>
        </div>
      );
    }
    
    return (item as any)[column.key];
  };

  return (
    <DashboardLayout title="Orders">
      <div className="flex flex-col">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* Filters and Tabs */}
        <div className="flex flex-col gap-6 mb-10 bg-white p-6 border border-[#E5E7EB] rounded-2xl shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2">
             <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
                {tabs.map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "text-xs font-semibold tracking-widest uppercase transition-all relative pb-4 shrink-0 px-1",
                      activeTab === tab 
                        ? "text-[#111111]" 
                        : "text-[#9CA3AF] hover:text-[#6B7280]"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111] rounded-full" />
                    )}
                  </button>
                ))}
             </div>
             <div className="hidden md:flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-1.5 cursor-pointer hover:border-[#D1D5DB] transition-all">
                <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-widest">Date Range</span>
                <span className="text-xs font-semibold text-[#111111]">Last 7 days</span>
                <ChevronDown size={14} className="text-[#9CA3AF]" />
             </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#111111] transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search by order ID or customer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm w-full focus:outline-none focus:border-[#111111] focus:bg-white transition-all shadow-inner"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#6B7280] hover:bg-[#F9FAFB] transition-colors font-medium">
              <Filter size={16} />
              More Filters
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="mb-10">
          <DataTable<Order> 
            columns={orderColumns} 
            data={orders}
            renderCell={renderOrderCell}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
