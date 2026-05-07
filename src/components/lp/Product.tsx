"use client";

import { useEffect, useRef, useState } from "react";
import { Search, RefreshCw, Lock, ArrowRight } from "lucide-react";

/* ── FadeIn ──────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    const t = setTimeout(() => setVisible(true), 1500);
    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── データ ────────────────────────────────────────────────── */
const PAIN_CARDS = [
  {
    num: "01",
    emoji: "😖",
    title: "どのフォルダだっけ？",
    desc: "保存場所がバラバラで、探す時間が毎日発生。",
  },
  {
    num: "02",
    emoji: "🔄",
    title: "また同じ質問が来た",
    desc: "総務・人事への問い合わせが減らない。",
  },
  {
    num: "03",
    emoji: "📂",
    title: "更新されてない",
    desc: "古い情報が混在して、どれが最新版か分からない。",
  },
];

const FEATURES = [
  {
    num: "01",
    icon: Search,
    title: "自然言語で検索",
    desc: "「退職時のPC返却は？」そのまま聞ける。キーワードを覚える必要ゼロ。",
  },
  {
    num: "02",
    icon: RefreshCw,
    title: "自動学習",
    desc: "ファイルを追加するだけで即反映。メンテナンス不要で常に最新。",
  },
  {
    num: "03",
    icon: Lock,
    title: "BYOK 対応",
    desc: "自社の API キーで安全運用。データが外部に学習されない安心設計。",
  },
];

const MOCK_RESULTS = [
  { icon: "📄", title: "退職時の PC 返却ルール", snippet: "PC は返却前にデータを完全消去し、IT 部門へ…", date: "2026/04/07" },
  { icon: "📋", title: "PC・IT 機器貸与に関する規程", snippet: "社員に貸与する IT 機器の管理・返却に関する社内規程…", date: "2026/01/15" },
  { icon: "📊", title: "備品・機器の返却フロー", snippet: "退職・異動時における備品・機器の返却手順について…", date: "2025/11/30" },
];

/* ── コンポーネント ─────────────────────────────────────────── */
export default function Product() {
  return (
    <section id="product">

      {/* ── ① Pain — ライトセクション ── */}
      <div
        className="py-20 px-6 lg:px-16"
        style={{ background: "var(--veulr-surface-0)" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p
                className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "var(--veulr-accent-primary)" }}
              >
                Product
              </p>
              <h2
                className="font-bold leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "var(--veulr-text-primary)",
                }}
              >
                Document Finder
              </h2>
              <p
                className="mt-2 text-lg"
                style={{ color: "var(--veulr-text-secondary)" }}
              >
                社内のあらゆる文書をAIが答える
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAIN_CARDS.map((card, i) => (
              <FadeIn key={card.num} delay={i * 100}>
                <div
                  className="relative rounded-2xl p-7 overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--veulr-surface-1)",
                    border: "1px solid var(--veulr-surface-border)",
                    borderTop: "3px solid var(--veulr-accent-primary)",
                  }}
                >
                  <span
                    className="absolute -top-2 -right-1 font-black select-none pointer-events-none"
                    style={{
                      fontSize: "5rem",
                      color: "oklch(0.55 0.22 280 / 0.06)",
                      lineHeight: 1,
                    }}
                  >
                    {card.num}
                  </span>
                  <span className="text-3xl mb-4 block">{card.emoji}</span>
                  <p
                    className="font-bold text-base mb-2"
                    style={{ color: "var(--veulr-text-primary)" }}
                  >
                    「{card.title}」
                  </p>
                  <p
                    className="text-sm leading-6"
                    style={{ color: "var(--veulr-text-secondary)" }}
                  >
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── ② Solution Bridge — ダークセクション ── */}
      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: "oklch(0.13 0.04 280)" }}
      >
        {/* 放射グラデーント */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.55 0.22 280 / 0.2) 0%, transparent 55%), radial-gradient(ellipse at bottom left, oklch(0.5 0.18 260 / 0.15) 0%, transparent 55%)",
          }}
        />
        <FadeIn>
          <div className="relative max-w-2xl mx-auto text-center space-y-5">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: "oklch(0.7 0.18 280)" }}
            >
              Solution
            </p>
            <h3
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "oklch(0.97 0 0)",
              }}
            >
              ファイルをアップするだけ。
              <br />
              AI が 24 時間答える。
            </h3>
            <p
              className="text-base leading-8"
              style={{ color: "oklch(0.75 0.02 270)" }}
            >
              社内のマニュアル・規程・申請書をアップロードするだけで、
              Document Finder が自動学習。社員からの質問に即座に回答します。
            </p>
          </div>
        </FadeIn>
      </div>

      {/* ── ③ Features — ダークセクション ── */}
      <div
        className="relative py-20 px-6 lg:px-16 overflow-hidden"
        style={{ background: "oklch(0.11 0.03 280)" }}
      >
        {/* 放射グラデーント */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.55 0.22 280 / 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium mb-12 text-center"
              style={{ color: "oklch(0.7 0.18 280)" }}
            >
              Features
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map((feat, i) => (
              <FadeIn key={feat.num} delay={i * 100}>
                <div
                  className="group relative rounded-2xl p-8 transition-all duration-300 cursor-default"
                  style={{
                    background: "oklch(0.18 0.03 280 / 0.6)",
                    border: "1px solid oklch(0.35 0.05 280)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.55 0.22 280 / 0.5)";
                    e.currentTarget.style.background = "oklch(0.20 0.04 280 / 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.35 0.05 280)";
                    e.currentTarget.style.background = "oklch(0.18 0.03 280 / 0.6)";
                  }}
                >
                  {/* ウォーターマーク */}
                  <span
                    className="absolute -top-2 -right-1 font-black select-none pointer-events-none"
                    style={{ fontSize: "6rem", color: "oklch(1 0 0 / 0.03)", lineHeight: 1 }}
                  >
                    {feat.num}
                  </span>

                  {/* アイコン */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.25), oklch(0.5 0.18 260 / 0.15))",
                      border: "1px solid oklch(0.55 0.22 280 / 0.3)",
                    }}
                  >
                    <feat.icon size={18} style={{ color: "oklch(0.75 0.18 280)" }} />
                  </div>

                  <p
                    className="font-bold text-base mb-3"
                    style={{ color: "oklch(0.95 0 0)" }}
                  >
                    {feat.title}
                  </p>
                  <p
                    className="text-sm leading-6"
                    style={{ color: "oklch(0.65 0.02 270)" }}
                  >
                    {feat.desc}
                  </p>

                  {/* ボトムアクセントライン — ホバーで伸びる */}
                  <div className="mt-6 pt-4" style={{ borderTop: "1px solid oklch(0.3 0.04 280)" }}>
                    <div
                      className="h-0.5 rounded-full transition-all duration-500"
                      style={{
                        width: "2.5rem",
                        background:
                          "linear-gradient(to right, oklch(0.65 0.22 280), oklch(0.55 0.18 260))",
                      }}
                      ref={(el) => {
                        if (!el) return;
                        const parent = el.closest(".group");
                        if (!parent) return;
                        parent.addEventListener("mouseenter", () => {
                          el.style.width = "5rem";
                        });
                        parent.addEventListener("mouseleave", () => {
                          el.style.width = "2.5rem";
                        });
                      }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* ── ④ UI モック ── */}
          <FadeIn delay={200} className="mt-14">
            <div
              className="max-w-2xl mx-auto rounded-2xl p-6 space-y-4"
              style={{
                background: "oklch(1 0 0 / 0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid oklch(1 0 0 / 0.15)",
                boxShadow:
                  "0 25px 50px oklch(0 0 0 / 0.4), 0 0 0 1px oklch(0.55 0.22 280 / 0.1)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: "oklch(0.2 0 0)" }}>
                  Document Finder
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.55 0.22 280 / 0.12)",
                    color: "oklch(0.45 0.22 280)",
                    border: "1px solid oklch(0.55 0.22 280 / 0.25)",
                  }}
                >
                  総務のミカタ
                </span>
              </div>

              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl"
                style={{
                  background: "oklch(0.96 0 0)",
                  border: "1px solid oklch(0.9 0 0)",
                }}
              >
                <Search size={14} style={{ color: "oklch(0.6 0 0)" }} />
                <span className="text-sm flex-1" style={{ color: "oklch(0.55 0 0)" }}>
                  退職時の PC 返却ルールを教えて
                </span>
              </div>

              <div className="space-y-2">
                {MOCK_RESULTS.map((result, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-3 rounded-xl"
                    style={{
                      background: "oklch(0.97 0 0)",
                      border: "1px solid oklch(0.92 0 0)",
                    }}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">{result.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium truncate" style={{ color: "oklch(0.2 0 0)" }}>
                          {result.title}
                        </p>
                        <span className="text-[10px] flex-shrink-0" style={{ color: "oklch(0.6 0 0)" }}>
                          {result.date}
                        </span>
                      </div>
                      <p className="text-xs leading-5 mt-0.5 line-clamp-1" style={{ color: "oklch(0.55 0 0)" }}>
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
                    background: "oklch(0.55 0.22 280 / 0.12)",
                    color: "oklch(0.45 0.22 280)",
                    border: "1px solid oklch(0.55 0.22 280 / 0.25)",
                  }}
                >
                  AI 解析済み
                </span>
                <span className="text-xs" style={{ color: "oklch(0.55 0 0)" }}>
                  3件の関連文書を発見
                </span>
              </div>
            </div>
          </FadeIn>

          {/* ── ⑤ CTA ── */}
          <FadeIn delay={300} className="mt-10">
            <div
              className="max-w-2xl mx-auto rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{
                background: "oklch(0.55 0.22 280 / 0.12)",
                border: "1px solid oklch(0.55 0.22 280 / 0.25)",
              }}
            >
              <div>
                <p className="font-bold text-xl" style={{ color: "oklch(0.95 0 0)" }}>
                  まずは無料で試す
                </p>
                <p className="text-sm mt-1" style={{ color: "oklch(0.65 0.02 270)" }}>
                  クレジットカード不要。14日間の無料トライアル。
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a
                  href="https://documentfinder.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-xl text-sm font-bold transition-opacity hover:opacity-85"
                  style={{
                    background: "var(--veulr-accent-primary)",
                    color: "oklch(0.97 0 0)",
                  }}
                >
                  デモを体験する <ArrowRight size={14} />
                </a>
                <a
                  href="https://documentfinder.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-10 px-6 rounded-xl text-sm font-medium transition-colors hover:bg-white/10"
                  style={{
                    border: "1px solid oklch(0.55 0.22 280 / 0.4)",
                    color: "oklch(0.8 0.05 280)",
                  }}
                >
                  資料ダウンロード
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
