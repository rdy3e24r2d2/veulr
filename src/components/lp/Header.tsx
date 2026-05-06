"use client";

import { useScrolled } from "@/hooks/useScrolled";
import VeulrLogo from "@/components/icons/VeulrLogo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "Team", href: "#team" },
];

export default function Header() {
  const scrolled = useScrolled(20);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--veulr-surface-0)]/80 backdrop-blur-md border-b border-[var(--veulr-surface-border)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="VEULR ホームへ">
          <VeulrLogo />
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--veulr-text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--veulr-text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--veulr-text-secondary)";
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:rdy3e24r2d2@gmail.com"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: "var(--veulr-accent-primary)",
            color: "oklch(0.96 0 0)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
        >
          お問い合わせ
        </a>
      </nav>
    </header>
  );
}
