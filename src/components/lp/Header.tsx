"use client";

import { useScrolled } from "@/hooks/useScrolled";
import VeulrLogo from "@/components/icons/VeulrLogo";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "ミッション", href: "#mission" },
  { label: "プロダクト", href: "#product" },
  { label: "バリュー",   href: "#values" },
  { label: "チーム",     href: "#team" },
  { label: "会社情報",   href: "#company" },
];

export default function Header() {
  const scrolled = useScrolled(20);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--veulr-surface-0)]/90 backdrop-blur-md border-b border-[var(--veulr-surface-border)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="VEULR ホームへ">
          <VeulrLogo />
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm transition-colors duration-200 text-[var(--veulr-text-secondary)] hover:text-[var(--veulr-text-primary)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* テーマトグルボタン */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "ライトモードに切替" : "ダークモードに切替"}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200"
              style={{
                color: "var(--veulr-text-secondary)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85"
            style={{
              background: "var(--veulr-accent-primary)",
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
