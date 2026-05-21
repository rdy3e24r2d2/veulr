"use client";

import { useScrolled } from "@/hooks/useScrolled";
import VeulerLogo from "@/components/icons/VeulerLogo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "ミッション", href: "#mission" },
  { label: "プロダクト", href: "#products" },
  { label: "バリュー",   href: "#values" },
  { label: "チーム",     href: "#team" },
  { label: "会社情報",   href: "#company" },
];

export default function Header() {
  const scrolled = useScrolled(20);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--veuler-surface-0)]/90 backdrop-blur-md border-b border-[var(--veuler-surface-border)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="VEULER ホームへ">
          <VeulerLogo />
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm transition-colors duration-200 text-[var(--veuler-text-secondary)] hover:text-[var(--veuler-text-primary)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85"
            style={{
              background: "var(--veuler-accent-primary)",
              color: "oklch(0.96 0 0)",
            }}
          >
            お問い合わせ
          </a>
        </div>
      </nav>
    </header>
  );
}
