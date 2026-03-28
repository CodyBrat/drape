"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

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

export function DataTable<T extends Record<string, any>>({ 
  columns, 
  data, 
  title, 
  actionText, 
  onActionClick, 
  renderCell 
}: DataTableProps<T>) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {(title || actionText) && (
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#E5E7EB]">
          {title && <h2 className="text-sm font-semibold text-[#111111]">{title}</h2>}
          {actionText && (
            <button 
              onClick={onActionClick}
              className="text-xs font-medium text-[#6B7280] hover:text-[#111111] transition-colors group flex items-center gap-1.5"
            >
              {actionText}
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">→</span>
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]/50">
              {columns.map((column) => (
                <th 
                  key={column.key}
                  className={cn(
                    "px-6 py-4 text-[10px] font-medium text-[#6B7280] uppercase tracking-widest",
                    column.className
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    {column.header}
                    {column.sortable && <ArrowUpDown size={12} className="text-[#9CA3AF]" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB]">
            {data.map((item, i) => (
              <tr 
                key={i}
                className="hover:bg-[#F9FAFB]/80 transition-colors group cursor-default"
              >
                {columns.map((column) => (
                  <td 
                    key={`${i}-${column.key}`}
                    className={cn(
                      "px-6 py-4 text-sm text-[#111111]",
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
