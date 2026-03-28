"use client";

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { DataTable } from '@/components/dashboard/DataTable';
import { 
  IndianRupee, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Plus, 
  Store, 
  Wallet,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Product {
  name: string;
  sold: number;
  revenue: string;
  percentage: number;
}

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: string;
  date: string;
}

interface QuickAction {
  title: string;
  icon: any;
  href: string;
}

const stats = [
  { label: "Total Revenue", value: "₹1,24,500", change: "+12.5%", isPositive: true, icon: IndianRupee },
  { label: "Total Orders", value: "284", change: "+8.2%", isPositive: true, icon: ShoppingBag },
  { label: "Store Visitors", value: "12,430", change: "+23.1%", isPositive: true, icon: Users },
  { label: "Conversion Rate", value: "2.3%", change: "-0.4%", isPositive: false, icon: TrendingUp },
];

const recentOrders: Order[] = [
  { id: "#DRP-1042", customer: "Arjun Singh", product: "VOID OVERSIZED TEE", amount: "₹1,499", status: "Fulfilled", date: "Dec 1, 2025" },
  { id: "#DRP-1041", customer: "Meera Nair", product: "ACID LOGO PUNCH", amount: "₹2,598", status: "Pending", date: "Dec 1, 2025" },
  { id: "#DRP-1040", customer: "Rohan Varma", product: "NOISE CORE GRAPHIC", amount: "₹1,599", status: "Processing", date: "Nov 30, 2025" },
  { id: "#DRP-1039", customer: "Anjali Gupta", product: "CORE BLACK BOX TEE", amount: "₹1,199", status: "Cancelled", date: "Nov 30, 2025" },
  { id: "#DRP-1038", customer: "Siddharth Rao", product: "VOLTAGE DROP TEE", amount: "₹2,798", status: "Fulfilled", date: "Nov 29, 2025" },
];

const topProducts: Product[] = [
  { name: "VOID OVERSIZED TEE", sold: 124, revenue: "₹1,85,876", percentage: 80 },
  { name: "ACID LOGO PUNCH", sold: 89, revenue: "₹1,15,611", percentage: 65 },
  { name: "NOISE CORE GRAPHIC", sold: 67, revenue: "₹1,07,133", percentage: 45 },
  { name: "CORE BLACK BOX TEE", sold: 45, revenue: "₹53,955", percentage: 32 },
  { name: "VOLTAGE DROP TEE", sold: 38, revenue: "₹53,162", percentage: 28 },
];

const quickActions: QuickAction[] = [
  { title: "Add Product", icon: Plus, href: "/dashboard/products" },
  { title: "View Orders", icon: ShoppingBag, href: "/dashboard/orders" },
  { title: "Edit Store", icon: Store, href: "/dashboard/settings" },
  { title: "Manage Payouts", icon: Wallet, href: "/dashboard/payouts" },
];

const orderColumns = [
  { key: "id", header: "Order", sortable: true },
  { key: "customer", header: "Customer" },
  { key: "product", header: "Product" },
  { key: "amount", header: "Amount", sortable: true },
  { key: "status", header: "Status" },
  { key: "date", header: "Date" },
];

export default function OverviewPage() {
  const renderOrderCell = (item: Order, column: any) => {
    if (column.key === "status") {
      const statusColors: Record<string, string> = {
        Fulfilled: "bg-[#D1FAE5] text-[#065F46]",
        Pending: "bg-[#FEF3C7] text-[#92400E]",
        Processing: "bg-[#DBEAFE] text-[#1E40AF]",
        Cancelled: "bg-[#FEE2E2] text-[#991B1B]",
      };
      
      return (
        <span className={cn(
          "px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase",
          statusColors[item.status]
        )}>
          {item.status}
        </span>
      );
    }
    return (item as any)[column.key];
  };

  return (
    <DashboardLayout title="Overview">
      <div className="flex flex-col">
        <div className="mb-0">
          <h2 className="text-2xl font-semibold text-[#111111] tracking-tight">Good morning, Arjun.</h2>
          <p className="text-sm text-[#6B7280] mt-1 font-body">Here&apos;s what&apos;s happening with your store today.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Recent Orders Table */}
          <div className="lg:col-span-2">
            <DataTable<Order> 
              title="Recent Orders" 
              actionText="View all orders"
              columns={orderColumns} 
              data={recentOrders}
              renderCell={renderOrderCell}
            />
          </div>

          {/* Top Products Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-semibold text-[#111111]">Top Products</h2>
              <button className="text-[10px] font-medium text-[#6B7280] hover:text-[#111111] uppercase tracking-widest transition-colors">By Units Sold</button>
            </div>
            
            <div className="space-y-6">
              {topProducts.map((product, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium text-[#111111] truncate">{product.name}</span>
                      <span className="text-[10px] text-[#6B7280] uppercase tracking-widest mt-0.5">{product.sold} units sold</span>
                    </div>
                    <span className="text-sm font-semibold text-[#111111]">{product.revenue}</span>
                  </div>
                  <div className="w-full bg-[#F3F4F6] rounded-full h-1 overflow-hidden">
                    <div 
                      className="bg-[#111111] h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${product.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mb-10">
          {/* Quick Actions Card */}
          <div>
            <h2 className="text-sm font-semibold text-[#111111] mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <div 
                    key={i}
                    className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-xl p-5 hover:bg-[#F9FAFB] hover:border-[#D1D5DB] group cursor-pointer transition-all duration-300 shadow-sm"
                  >
                    <div className="bg-[#F9FAFB] p-2 rounded-lg border border-[#E5E7EB] group-hover:bg-white group-hover:border-[#D1D5DB] transition-all">
                      <Icon size={18} className="text-[#6B7280] group-hover:text-[#111111]" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium text-[#111111]">{action.title}</span>
                    <ArrowRight size={14} className="ml-auto text-[#9CA3AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Store Status Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-sm font-semibold text-[#111111] mb-6">Store Status</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                <div className="flex flex-col">
                  <span className="text-xs text-[#6B7280] font-medium uppercase tracking-widest mb-1.5">Visibility</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="text-sm font-medium text-[#111111]">Store Live</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-xs text-[#6B7280] font-medium uppercase tracking-widest mb-1.5">Current Plan</span>
                   <span className="bg-[#111111] text-white rounded-full px-5 py-0.5 text-[9px] font-semibold tracking-widest uppercase shadow-sm">STARTER</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-[#6B7280] font-medium uppercase tracking-widest mb-2">Public Domain</span>
                <div className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-2 group cursor-pointer hover:border-[#D1D5DB] transition-colors shadow-inner">
                  <Store size={14} className="text-[#9CA3AF]" />
                  <span className="font-mono text-xs text-[#111111]">mystore.drape.in</span>
                  <ExternalLink size={12} className="ml-auto text-[#9CA3AF] group-hover:text-[#111111] transition-colors" />
                </div>
                <button className="text-[10px] font-medium text-[#6B7280] hover:text-[#111111] transition-colors uppercase tracking-[0.1em] text-left mt-3 underline underline-offset-4 decoration-white/0 hover:decoration-[#111111]/20">Upgrade to Growth to use custom domain &rarr;</button>
              </div>

              <div className="flex items-center gap-4 pt-2">
                 <div className="flex flex-col">
                    <span className="text-xs text-[#6B7280] font-medium uppercase tracking-widest mb-1">Next Payout</span>
                    <span className="text-sm font-semibold text-[#111111]">₹8,240 on Dec 15</span>
                 </div>
                 <button className="ml-auto text-xs font-semibold text-[#111111] hover:text-black transition-colors flex items-center gap-1.5 px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB]">
                    Manage <Wallet size={14} />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// Minimal icons for internal usage
function ExternalLink(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || "24"} 
      height={props.size || "24"} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
  );
}
