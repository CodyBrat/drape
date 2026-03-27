"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "solid" | "outline";
}

export function Button({
  className,
  variant = "solid",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-full px-8 py-3.5 text-sm font-body font-medium flex items-center justify-center gap-2";
  
  const variants = {
    primary: "liquid-glass-strong text-white",
    solid: "bg-white text-black",
    outline: "border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
