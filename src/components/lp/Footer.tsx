import VeulrLogo from "@/components/icons/VeulrLogo";

const NAV_ITEMS = [
  { label: "ミッション",           href: "#mission" },
  { label: "プロダクト",           href: "#product" },
  { label: "チーム",               href: "#team" },
  { label: "会社情報",             href: "#company" },
  { label: "プライバシーポリシー", href: "/privacy", underline: true },
];

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        background: "var(--veulr-surface-0)",
        borderTop: "1px solid var(--veulr-surface-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <VeulrLogo />
          <p className="text-xs" style={{ color: "var(--veulr-text-muted)" }}>
            AI が身近に居る世界へ。
          </p>
        </div>

        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm transition-colors duration-200 hover:text-white ${
                    item.underline ? "underline underline-offset-2" : ""
                  }`}
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs" style={{ color: "var(--veulr-text-muted)" }}>
          © 2026 Veulr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
