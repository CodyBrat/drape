"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown, ChevronRight } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  className?: string;
  sortable?: boolean;
}

interface DataTableProps<T> {
  columns: Column[];
  data: T[];
  title?: string;
  actionText?: string;
  onActionClick?: () => void;
  renderCell?: (item: T, column: Column) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<T extends Record<string, any>>({ 
  columns, 
  data, 
  title, 
  actionText, 
  onActionClick, 
  renderCell 
}: DataTableProps<T>) {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
      {(title || actionText) && (
        <div className="px-10 py-8 flex items-center justify-between bg-[#0E0E0E] border-b border-white/10">
          {title && <h2 className="text-[14px] font-mono font-medium text-white/50 tracking-[0.2em] uppercase">{title}</h2>}
          {actionText && (
            <button 
              onClick={onActionClick}
              className="text-[11px] font-mono font-medium text-white/30 hover:text-white transition-all uppercase tracking-widest flex items-center gap-2 group/btn"
            >
              {actionText}
              <ChevronRight size={14} className="opacity-40 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#111111]/50">
              {columns.map((column) => (
                <th 
                  key={column.key}
                  className={cn(
                    "px-10 py-6 text-[11px] font-mono font-medium text-white/20 uppercase tracking-[0.2em]",
                    column.className
                  )}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && <ArrowUpDown size={12} className="text-white/10" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((item, i) => (
              <tr 
                key={i}
                className="hover:bg-[#111111] transition-colors group cursor-default"
              >
                {columns.map((column) => (
                  <td 
                    key={`${i}-${column.key}`}
                    className={cn(
                      "px-10 py-7 text-[14px] text-white/70 font-body transition-colors group-hover:text-white font-light",
                      column.className
                    )}
                  >
                    {renderCell ? renderCell(item, column) : item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
