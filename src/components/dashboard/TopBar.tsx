"use client";

import React from 'react';
import { Bell, Plus } from 'lucide-react';

interface TopBarProps {
  title: string;
  showActionButton?: boolean;
  actionText?: string;
  onActionClick?: () => void;
}

export function TopBar({ title, showActionButton, actionText, onActionClick }: TopBarProps) {
  return (
    <header className="h-[57px] bg-white border-b border-[#E5E7EB] px-8 sticky top-0 z-30 flex items-center justify-between shrink-0">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-[#111111] tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-[#6B7280] hover:text-[#111111] p-1.5 rounded-lg hover:bg-[#F9FAFB] transition-all">
          <Bell size={18} strokeWidth={1.5} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white" />
        </button>

        <div className="h-4 w-px bg-[#E5E7EB] mx-1" />

        {showActionButton && (
          <button 
            onClick={onActionClick}
            className="bg-[#111111] text-white rounded-lg px-3.5 py-1.5 text-xs font-medium flex items-center gap-2 hover:bg-[#374151] transition-all duration-200 active:scale-95"
          >
            <Plus size={14} />
            {actionText || 'New Item'}
          </button>
        )}
      </div>
    </header>
  );
}
