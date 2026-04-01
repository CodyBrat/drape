"use client";

import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { AnimatePresence, motion } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumb?: string;
  showActionButton?: boolean;
  actionText?: string;
  onActionClick?: () => void;
}

export default function DashboardLayout({ 
  children, 
  title, 
  breadcrumb,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#F5F5F5] text-[#111111] overflow-hidden font-body selection:bg-black selection:text-white antialiased">
      {/* Sidebar - Fixed Width */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopBar 
          title={title} 
          breadcrumb={breadcrumb || `Drape / ${title}`}
        />
        
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-8 scroll-smooth scrollbar-hide bg-[#F5F5F5]">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="max-w-[1280px] mx-auto w-full pb-10"
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* GLOBAL OVERLAYS (SIMULATIONS) */}
      <AnimatePresence>
        {/* Notifications or Command Palette could be mounted here */}
      </AnimatePresence>
    </div>
  );
}
