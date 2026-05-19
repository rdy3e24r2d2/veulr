import { type ReactNode } from "react";

interface GlowBadgeProps {
  color: string;
  size?: "sm" | "md";
  children: ReactNode;
}

export default function GlowBadge({ color, size = "md", children }: GlowBadgeProps) {
  return (
    <span
      style={{
        color,
        boxShadow: `0 0 8px color-mix(in oklch, ${color} 60%, transparent)`,
        border: `1px solid color-mix(in oklch, ${color} 50%, transparent)`,
      }}
      className={
        size === "sm"
          ? "inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-[var(--veuler-surface-2)]"
          : "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--veuler-surface-2)]"
      }
    >
      {children}
    </span>
  );
}
