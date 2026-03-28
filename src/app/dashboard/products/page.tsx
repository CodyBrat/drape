"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { DataTable } from '@/components/dashboard/DataTable';
import { cn } from '@/lib/utils';
import { Search, Filter, Pencil, Trash2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: string;
  sales: number;
}

const products: Product[] = [
  { id: "VOID-01", name: "VOID OVERSIZED TEE", category: "T-Shirts", price: "₹1,499", stock: 124, status: "Active", sales: 124 },
  { id: "VOID-02", name: "ACID LOGO PUNCH", category: "T-Shirts", price: "₹1,299", stock: 89, status: "Active", sales: 89 },
  { id: "VOID-03", name: "NOISE CORE GRAPHIC", category: "T-Shirts", price: "₹1,599", stock: 8, status: "Active", sales: 67 },
  { id: "VOID-04", name: "CORE BLACK BOX TEE", category: "T-Shirts", price: "₹1,199", stock: 0, status: "Draft", sales: 45 },
  { id: "VOID-05", name: "VOLTAGE DROP TEE", category: "T-Shirts", price: "₹1,399", stock: 38, status: "Active", sales: 38 },
  { id: "VOID-06", name: "DISTORTED TYPE-01", category: "T-Shirts", price: "₹1,449", stock: 29, status: "Active", sales: 29 },
  { id: "VOID-07", name: "LABORATORY SAMPLE", category: "Limited", price: "₹1,899", stock: 12, status: "Active", sales: 18 },
  { id: "VOID-08", name: "RAW CUT TEE", category: "Essentials", price: "₹1,699", stock: 52, status: "Active", sales: 52 },
];

const productColumns = [
  { key: "product", header: "Product" },
  { key: "category", header: "Category" },
  { key: "price", header: "Price", sortable: true },
  { key: "stock", header: "Stock", sortable: true },
  { key: "status", header: "Status" },
  { key: "sales", header: "Sales", sortable: true },
  { key: "actions", header: "Actions", className: "text-right" },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const renderProductCell = (item: Product, column: any) => {
    if (column.key === "product") {
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] shrink-0 border border-[#E5E7EB] shadow-sm overflow-hidden" />
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-[#111111] truncate">{item.name}</span>
            <span className="text-[10px] text-[#9CA3AF] font-medium tracking-widest uppercase mt-0.5">{item.id}</span>
          </div>
        </div>
      );
    }
    
    if (column.key === "stock") {
      const isLow = item.stock > 0 && item.stock <= 10;
      const isOut = item.stock === 0;
      
      return (
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">{item.stock} in stock</span>
          {isLow && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#FEF3C7] text-[#92400E] uppercase tracking-wider w-fit">
              Low Stock
            </span>
          )}
          {isOut && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#FEE2E2] text-[#991B1B] uppercase tracking-wider w-fit">
              Out of Stock
            </span>
          )}
          {!isLow && !isOut && (
            <div className="w-16 h-1 bg-[#F3F4F6] rounded-full overflow-hidden">
               <div className="bg-[#10B981] h-full rounded-full w-[100%]" />
            </div>
          )}
        </div>
      );
    }

    if (column.key === "status") {
      const isActive = item.status === "Active";
      return (
        <span className={cn(
          "px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm border",
          isActive 
            ? "bg-[#D1FAE5] text-[#065F46] border-[#D1FAE5]" 
            : "bg-[#F3F4F6] text-[#6B7280] border-[#E5E7EB]"
        )}>
          {item.status}
        </span>
      );
    }

    if (column.key === "actions") {
      return (
        <div className="flex items-center justify-end gap-3 translate-x-1">
          <button className="p-2 text-[#6B7280] hover:text-[#111111] hover:bg-[#F9FAFB] rounded-lg transition-all">
            <Pencil size={16} strokeWidth={1.5} />
          </button>
          <button className="p-2 text-[#6B7280] hover:text-[#EF4444] hover:bg-[#FEE2E2]/30 rounded-lg transition-all">
            <Trash2 size={16} strokeWidth={1.5} />
          </button>
        </div>
      );
    }

    return (item as any)[column.key];
  };

  return (
    <DashboardLayout 
      title="Products" 
      showActionButton={true} 
      actionText="Add Product"
    >
      <div className="flex flex-col">
        {/* Filter Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-white p-4 border border-[#E5E7EB] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-72 group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#111111] transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm w-full focus:outline-none focus:border-[#111111] focus:bg-white transition-all shadow-inner"
              />
            </div>
            <button className="flex items-center gap-2 px-3.5 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#6B7280] hover:bg-[#F9FAFB] transition-colors shrink-0 font-medium">
              <Filter size={14} />
              Filters
            </button>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-widest">Category:</span>
                <select className="bg-transparent border-none text-[11px] font-semibold text-[#111111] focus:ring-0 p-0 cursor-pointer">
                  <option>All Products</option>
                  <option>T-Shirts</option>
                  <option>Limited</option>
                  <option>Essentials</option>
                </select>
             </div>
             
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-widest">Status:</span>
                <select className="bg-transparent border-none text-[11px] font-semibold text-[#111111] focus:ring-0 p-0 cursor-pointer">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Draft</option>
                </select>
             </div>

             <div className="h-4 w-px bg-[#E5E7EB] hidden md:block" />
             <span className="text-xs text-[#6B7280] whitespace-nowrap font-medium">8 products</span>
          </div>
        </div>

        {/* Products Table */}
        <div className="mb-10">
          <DataTable<Product> 
            columns={productColumns} 
            data={products}
            renderCell={renderProductCell}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
