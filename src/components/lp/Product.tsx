import Image from "next/image";
import { Check, Search } from "lucide-react";

const FEATURES = [
  { text: "社内資料・マニュアル・申請フォームをすぐ発見" },
  { text: "稟議・バックオフィスの問い合わせを削減" },
  { text: "BYOK型で安心して AI 活用" },
  { text: "中小企業でも導入しやすいシンプル設計" },
];

const MOCK_RESULTS = [
  {
    icon: "📄",
    title: "退職時の PC 返却ルール",
    snippet: "PC は返却前にデータを完全消去し、IT 部門へ…",
    date: "2026/04/07",
  },
  {
    icon: "📋",
    title: "PC・IT 機器貸与に関する規程",
    snippet: "社員に貸与する IT 機器の管理・返却に関する社内規程…",
    date: "2026/01/15",
  },
  {
    icon: "📊",
    title: "備品・機器の返却フロー",
    snippet: "退職・異動時における備品・機器の返却手順について…",
    date: "2025/11/30",
  },
];

export default function Product() {
  return (
    <section
      id="product"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      {/* ライフスタイル写真 — 上部フルワイド */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <Image
          src="/images/product-lifestyle.png"
          alt="Document Finder を使う様子"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* 上下グラデーション */}
        <div
          className="absolute inset-x-0 top-0 h-20"
          style={{
            background:
              "linear-gradient(to bottom, var(--veulr-surface-0) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to top, var(--veulr-surface-0) 0%, transparent 100%)",
          }}
        />
        {/* テキストオーバーレイ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <p
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: "var(--veulr-accent-primary)" }}
            >
              Product
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,3rem)] font-bold"
              style={{ color: "var(--veulr-text-primary)" }}
            >
              Document Finder
            </h2>
            <p className="text-base font-medium" style={{ color: "var(--veulr-accent-primary)" }}>
              総務のミカタ
            </p>
          </div>
        </div>
      </div>

      {/* 詳細: 左テキスト + 右モック */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ borderTop: "1px solid var(--veulr-surface-border)" }}
      >
        {/* 左: 説明 */}
        <div
          className="px-10 py-16 lg:px-16 lg:py-20 space-y-6"
          style={{
            background: "var(--veulr-surface-1)",
            borderRight: "1px solid var(--veulr-surface-border)",
          }}
        >
          <p
            className="text-sm leading-7"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            Gemini File Search を活用した、日本の中小企業向け
            社内ドキュメント検索 SaaS。
          </p>

          <ul className="space-y-3">
            {FEATURES.map((feat) => (
              <li key={feat.text} className="flex items-start gap-3">
                <Check
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "var(--veulr-accent-primary)" }}
                />
                <span className="text-sm" style={{ color: "var(--veulr-text-secondary)" }}>
                  {feat.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://documentfinder.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--veulr-accent-primary)", color: "oklch(0.96 0 0)" }}
            >
              資料ダウンロード
            </a>
            <a
              href="https://documentfinder.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
              style={{
                border: "1px solid var(--veulr-surface-border)",
                color: "var(--veulr-text-primary)",
                background: "transparent",
              }}
            >
              デモを体験する
            </a>
          </div>
        </div>

        {/* 右: UI モック */}
        <div className="px-10 py-16 lg:px-12 lg:py-20 space-y-4">
          {/* タイトルバー */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-bold" style={{ color: "var(--veulr-text-primary)" }}>
              Document Finder
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.55 0.22 280 / 15%)",
                color: "var(--veulr-accent-primary)",
                border: "1px solid oklch(0.55 0.22 280 / 30%)",
              }}
            >
              総務のミカタ
            </span>
          </div>

          {/* 検索バー */}
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-lg"
            style={{
              background: "var(--veulr-surface-2)",
              border: "1px solid var(--veulr-surface-border)",
            }}
          >
            <Search size={14} style={{ color: "var(--veulr-text-muted)" }} />
            <span className="text-sm flex-1" style={{ color: "var(--veulr-text-muted)" }}>
              退職時の PC 返却ルールを教えて
            </span>
            <Search size={14} style={{ color: "var(--veulr-accent-primary)" }} />
          </div>

          {/* 結果リスト */}
          <div className="space-y-2">
            {MOCK_RESULTS.map((result, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-lg"
                style={{
                  background: "var(--veulr-surface-2)",
                  border: "1px solid var(--veulr-surface-border)",
                }}
              >
                <span className="text-base flex-shrink-0 mt-0.5">{result.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--veulr-text-primary)" }}
                    >
                      {result.title}
                    </p>
                    <span
                      className="text-[10px] flex-shrink-0"
                      style={{ color: "var(--veulr-text-muted)" }}
                    >
                      {result.date}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-5 mt-0.5 line-clamp-1"
                    style={{ color: "var(--veulr-text-muted)" }}
                  >
                    {result.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.55 0.22 280 / 15%)",
                color: "var(--veulr-accent-primary)",
                border: "1px solid oklch(0.55 0.22 280 / 30%)",
              }}
            >
              AI 解析済み
            </span>
            <span className="text-xs" style={{ color: "var(--veulr-text-muted)" }}>
              3件の関連文書を発見
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
