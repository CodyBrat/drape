"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { cn } from '@/lib/utils';
import { 
  Plus, 
  Search, 
  LayoutGrid, 
  List, 
  Trash2, 
  Edit3, 
  X,
  Camera,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'Active' | 'Draft';
  sales: number;
}

const productsData: Product[] = [
  { id: "VOID-01", name: "VOID OVERSIZED TEE", category: "T-Shirts", price: "₹1,499", stock: 124, status: "Active", sales: 124 },
  { id: "VOID-02", name: "ACID LOGO PUNCH", category: "T-Shirts", price: "₹1,299", stock: 89, status: "Active", sales: 89 },
  { id: "VOID-03", name: "NOISE CORE GRAPHIC", category: "T-Shirts", price: "₹1,599", stock: 8, status: "Active", sales: 67 },
  { id: "VOID-04", name: "CORE BLACK BOX TEE", category: "T-Shirts", price: "₹1,199", stock: 0, status: "Draft", sales: 45 },
  { id: "VOID-05", name: "VOLTAGE DROP TEE", category: "T-Shirts", price: "₹1,399", stock: 38, status: "Active", sales: 38 },
  { id: "VOID-06", name: "DISTORTED TYPE-01", category: "T-Shirts", price: "₹1,449", stock: 29, status: "Active", sales: 29 },
  { id: "VOID-07", name: "LABORATORY SAMPLE", category: "Limited", price: "₹1,899", stock: 12, status: "Active", sales: 18 },
  { id: "VOID-08", name: "RAW CUT TEE", category: "Essentials", price: "₹1,699", stock: 52, status: "Active", sales: 52 },
];

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: "Total Products", value: "8", change: "+2 this month", isPositive: true, variant: 'accent' as const },
    { label: "Active", value: "7", change: "↑ Healthy", isPositive: true },
    { label: "Low Stock", value: "2", change: "↓ 2 items", isPositive: false, color: "text-amber-500" },
    { label: "Out of Stock", value: "1", change: "↓ 1 item", isPositive: false, color: "text-rose-500" },
  ];

  return (
    <DashboardLayout title="Products" breadcrumb="Drape / Products">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-display font-bold tracking-tight text-[#111111]">
            Products
          </h2>
          <p className="text-[10px] font-mono text-[#9CA3AF] mt-2 font-bold tracking-[0.2em] uppercase">
            Manage your store inventory
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 rounded-2xl bg-[#111111] text-white text-sm font-bold hover:opacity-90 active:scale-95 transition-all shadow-xl flex items-center gap-2 group"
        >
          <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform" /> 
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* FILTER BAR */}
      <div className="mt-8 bg-white border border-[#E5E7EB] rounded-3xl px-6 py-4 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-lg transition-all duration-500">
        <div className="relative flex-1 group w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#111111] transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#E5E7EB] focus:bg-white rounded-2xl pl-12 pr-4 py-3 text-sm font-medium transition-all outline-none"
          />
        </div>

        <div className="h-8 w-px bg-[#E5E7EB] hidden md:block" />

        <div className="flex gap-2 w-full md:w-auto overflow-x-auto scrollbar-hide">
          {['ALL', 'T-SHIRTS', 'LIMITED', 'ESSENTIALS'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-2xl text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap",
                selectedCategory === cat 
                  ? "bg-[#111111] text-white shadow-lg shadow-black/10" 
                  : "bg-transparent text-[#6B7280] hover:bg-[#F5F5F5] hover:text-[#111111]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto shrink-0 bg-[#F5F5F5] p-1.5 rounded-2xl border border-[#E5E7EB]">
           <button 
             onClick={() => setViewMode('grid')}
             className={cn("p-2 rounded-xl transition-all", viewMode === 'grid' ? "bg-white text-black shadow-sm" : "text-[#9CA3AF] hover:text-[#111111]")}
           >
             <LayoutGrid size={18} />
           </button>
           <button 
             onClick={() => setViewMode('list')}
             className={cn("p-2 rounded-xl transition-all", viewMode === 'list' ? "bg-white text-black shadow-sm" : "text-[#9CA3AF] hover:text-[#111111]")}
           >
             <List size={18} />
           </button>
        </div>
      </div>

      {/* PRODUCTS DISPLAY */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
          >
            {productsData.map((p) => (
              <motion.div 
                key={p.id}
                whileHover={{ y: -4, borderColor: "#111111" }}
                className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden cursor-pointer shadow-sm group transition-all duration-300 relative"
              >
                <div className="h-56 bg-[#F5F5F5] flex items-center justify-center relative overflow-hidden group-hover:bg-[#EEEEEE] transition-colors">
                  <span className="text-5xl font-mono font-bold text-[#E5E7EB] group-hover:text-[#D1D5DB] transition-colors">{p.id.split('-')[0]}</span>
                  <div className={cn(
                    "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border",
                    p.status === 'Active' 
                      ? "bg-[#D1FAE5] text-[#065F46] border-[#D1FAE5] shadow-sm animate-pulse" 
                      : "bg-[#F3F4F6] text-[#6B7280] border-[#E5E7EB]"
                  )}>
                    {p.status}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-display font-bold text-[#111111] truncate uppercase tracking-tight">{p.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold text-[#111111]">{p.price}</span>
                    <span className={cn(
                      "text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-md",
                      p.stock === 0 ? "bg-rose-500/10 text-rose-500" : p.stock <= 10 ? "bg-amber-500/10 text-amber-500" : "bg-[#F5F5F5] text-[#6B7280]"
                    )}>
                      {p.stock === 0 ? 'Out of Stock' : `${p.stock} units`}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-all">
                    <button className="flex-1 px-4 py-2.5 bg-[#111111] text-white rounded-xl text-xs font-bold hover:bg-black active:scale-95 transition-all">
                      Edit
                    </button>
                    <button className="p-2.5 border border-[#E5E7EB] text-[#9CA3AF] hover:text-rose-500 hover:border-rose-500 hover:bg-rose-500/5 rounded-xl transition-all active:scale-90">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-white border border-[#E5E7EB] rounded-3xl mt-6 overflow-hidden shadow-sm"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Product</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Pricing</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Inventory</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">Status</th>
                  <th className="px-8 py-5 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F5F5]">
                {productsData.map((p) => (
                  <tr key={p.id} className="group hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center font-mono font-bold text-[#D1D5DB] text-xs">IMG</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[#111111] tracking-tight">{p.name}</span>
                          <span className="text-[10px] font-mono font-medium text-[#9CA3AF] uppercase tracking-widest mt-1">{p.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-[#111111]">{p.price}</span>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex flex-col gap-1.5">
                          <span className="text-sm font-medium text-[#111111]">{p.stock} units</span>
                          <div className="w-24 h-1 bg-[#F5F5F5] rounded-full overflow-hidden">
                             <div className={cn("h-full", p.stock === 0 ? "bg-rose-500" : p.stock <= 10 ? "bg-amber-500" : "bg-[#111111]")} style={{ width: `${Math.min(p.stock, 40) * 2.5}%` }} />
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <span className={cn(
                         "px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border",
                         p.status === 'Active' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-[#F5F5F5] text-[#9CA3AF] border-[#E5E7EB]"
                       )}>
                         {p.status}
                       </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2.5 text-[#9CA3AF] hover:text-[#111111] hover:bg-[#F5F5F5] rounded-xl transition-all"><Edit3 size={16} /></button>
                          <button className="p-2.5 text-[#9CA3AF] hover:text-rose-500 hover:bg-rose-500/5 rounded-xl transition-all"><Trash2 size={16} /></button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ADD PRODUCT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[40px] p-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto scrollbar-hide shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-display font-bold tracking-tight text-[#111111]">Add New Product</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2.5 hover:bg-[#F5F5F5] rounded-full transition-all text-[#9CA3AF] hover:text-[#111111]">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-8">
                {/* Basic Info */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Product Designation</label>
                    <input type="text" placeholder="e.g. VOID OVERSIZED TEE" className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#E5E7EB] focus:bg-white rounded-2xl px-5 py-4 text-sm font-medium transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Composition Description</label>
                    <textarea placeholder="Tell your brand story..." rows={4} className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#E5E7EB] focus:bg-white rounded-2xl px-5 py-4 text-sm font-medium transition-all outline-none resize-none" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Classification</label>
                    <select className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#E5E7EB] focus:bg-white rounded-2xl px-5 py-4 text-sm font-medium transition-all outline-none appearance-none">
                      <option>T-Shirts</option>
                      <option>Outerwear</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Retail Valuation</label>
                     <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-[#111111]">₹</span>
                        <input type="number" placeholder="0.00" className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#E5E7EB] focus:bg-white rounded-2xl pl-10 pr-5 py-4 text-sm font-bold transition-all outline-none" />
                     </div>
                  </div>
                </div>

                {/* Attributes */}
                <div className="space-y-6">
                   <div className="space-y-3">
                      <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Size Matrix</label>
                      <div className="flex gap-2">
                         {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                           <button key={size} className={cn(
                             "w-12 h-12 rounded-xl text-xs font-bold border transition-all",
                             size === 'L' ? "bg-[#111111] text-white border-[#111111] shadow-lg" : "bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#111111]"
                           )}>
                             {size}
                           </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Tonal Options</label>
                      <div className="flex gap-3">
                         {['#111111', '#FFFFFF', '#6B7280', '#1E3A8A'].map(color => (
                           <div key={color} className={cn(
                             "w-10 h-10 rounded-full border border-[#E5E7EB] cursor-pointer hover:scale-110 transition-all flex items-center justify-center",
                             color === '#111111' ? "ring-2 ring-black ring-offset-4" : ""
                           )} style={{ backgroundColor: color }}>
                             {color === '#111111' && <Check size={14} className="text-white" />}
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Media */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Product Artifacts</label>
                  <div className="border-2 border-dashed border-[#E5E7EB] hover:border-[#111111] hover:bg-[#F9FAFB] rounded-[32px] p-12 text-center transition-all cursor-pointer group">
                     <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-[#9CA3AF] group-hover:text-[#111111]">
                        <Camera size={24} />
                     </div>
                     <p className="text-sm font-bold text-[#111111] mb-1">Drag and drop assets here</p>
                     <p className="text-xs text-[#9CA3AF] uppercase font-mono tracking-widest">SVG, PNG, Studio Shots (Max 10MB)</p>
                  </div>
                </div>

                {/* Action */}
                <div className="flex gap-4 pt-6 border-t border-[#F5F5F5]">
                   <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 bg-[#F5F5F5] text-[#6B7280] rounded-[24px] font-bold text-sm hover:bg-[#EEEEEE] transition-all">Reject Changes</button>
                   <button className="flex-[2] py-4 bg-[#111111] text-white rounded-[24px] font-bold text-sm hover:opacity-90 transition-all shadow-xl shadow-black/20">Commit Product</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}
