"use client";

import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  showActionButton?: boolean;
  actionText?: string;
  onActionClick?: () => void;
}

export default function DashboardLayout({ 
  children, 
  title, 
  showActionButton, 
  actionText, 
  onActionClick 
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#FAFAFA] text-[#111111] overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopBar 
          title={title} 
          showActionButton={showActionButton} 
          actionText={actionText}
          onActionClick={onActionClick}
        />
        
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-8">
          <div className="max-w-[1240px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
