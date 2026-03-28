"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";

export function ConditionalNavbar() {
  const pathname = usePathname();

  const hideNavbar = [
    '/dashboard',
    '/login', 
    '/signup',
    '/forgot-password',
    '/onboarding'
  ].some(route => pathname?.startsWith(route));

  if (hideNavbar) {
    return null;
  }

  return <Navbar />;
}
