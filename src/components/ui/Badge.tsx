import { cn } from "@/lib/utils";

export function Badge({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <span
      className={cn(
        "liquid-glass rounded-full px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white/60 inline-block",
        className
      )}
    >
      {children}
    </span>
  );
}
