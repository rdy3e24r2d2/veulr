"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, RefreshCw, Lock, ArrowRight, Check } from "lucide-react";

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

/* ── ブラウザフレーム ──────────────────────────────────────── */
function BrowserFrame({
  src,
  alt,
  width,
  height,
  url = "documentfinder.jp",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: "1px solid oklch(0.35 0.05 280)",
        boxShadow:
          "0 30px 60px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(0.55 0.22 280 / 0.15)",
      }}
    >
      {/* macOS風タイトルバー */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ background: "oklch(0.20 0.03 280)" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span
          className="flex-1 mx-4 h-5 rounded-md text-[10px] flex items-center justify-center px-3"
          style={{
            background: "oklch(0.15 0.02 280)",
            color: "oklch(0.5 0.02 280)",
          }}
        >
          {url}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </div>
  );
}

/* ── データ ────────────────────────────────────────────────── */
const PAIN_CARDS = [
  {
    num: "01",
    image: "/images/pain-01.jpg",
    title: "どのフォルダだっけ？",
    desc: "保存場所がバラバラで、探す時間が毎日発生。",
  },
  {
    num: "02",
    image: "/images/pain-02.jpg",
    title: "また同じ質問が来た",
    desc: "総務・人事への問い合わせが減らない。",
  },
  {
    num: "03",
    image: "/images/pain-03.jpg",
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
                  <div className="w-16 h-16 mb-4 rounded-xl overflow-hidden">
                    <Image src={card.image} alt={card.title} width={64} height={64} className="w-full h-full object-cover" />
                  </div>
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

      {/* ── ③ 製品ショーケース — ダークセクション ── */}
      <div
        className="relative py-24 px-6 lg:px-16 overflow-hidden"
        style={{ background: "oklch(0.09 0.02 280)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top center, oklch(0.55 0.22 280 / 0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p
                className="text-[10px] tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: "oklch(0.65 0.22 280)" }}
              >
                Actual Screen
              </p>
              <p
                className="text-sm"
                style={{ color: "oklch(0.55 0.03 270)" }}
              >
                実際の画面
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <BrowserFrame
              src="/images/df-top.jpeg"
              alt="Document Finder — トップ画面"
              width={1200}
              height={675}
            />
          </FadeIn>
        </div>
      </div>

      {/* ── ④ 機能紹介 左右交互 — ダークセクション ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "oklch(0.09 0.02 280)" }}
      >
        {/* Row 1 — テキスト左・画像右 */}
        <div className="py-24 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* テキスト */}
            <FadeIn>
              <div className="space-y-6">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase font-semibold"
                  style={{ color: "oklch(0.65 0.22 280)" }}
                >
                  Feature 01
                </p>
                <h3
                  className="font-bold leading-snug"
                  style={{
                    fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                    color: "oklch(0.97 0 0)",
                  }}
                >
                  そのまま聞ける
                </h3>
                <p
                  className="text-base leading-8"
                  style={{ color: "oklch(0.70 0.02 270)" }}
                >
                  「退職時のPC返却は？」キーワードを覚える必要なし。
                  日常の言葉でそのまま質問できます。
                </p>
                <ul className="space-y-3">
                  {["キーワード不要", "引用元付き回答", "日本語完全対応"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "oklch(0.55 0.22 280 / 0.18)",
                          border: "1px solid oklch(0.55 0.22 280 / 0.3)",
                        }}
                      >
                        <Check size={11} style={{ color: "oklch(0.65 0.22 280)" }} />
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "oklch(0.80 0.02 270)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            {/* 画像 */}
            <FadeIn delay={120}>
              <BrowserFrame
                src="/images/df-chat.png"
                alt="Document Finder — チャット検索画面"
                width={800}
                height={560}
              />
            </FadeIn>
          </div>
        </div>

        {/* 区切り */}
        <div
          className="mx-6 lg:mx-16 max-w-6xl"
          style={{
            borderTop: "1px solid oklch(0.20 0.03 280)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        {/* Row 2 — 画像左・テキスト右 */}
        <div className="py-24 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 画像（モバイルでは先に表示） */}
            <FadeIn className="lg:order-1 order-2">
              <BrowserFrame
                src="/images/df-vault.png"
                alt="Document Finder — 書庫管理画面"
                width={800}
                height={560}
              />
            </FadeIn>
            {/* テキスト */}
            <FadeIn delay={120} className="lg:order-2 order-1">
              <div className="space-y-6">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase font-semibold"
                  style={{ color: "oklch(0.65 0.22 280)" }}
                >
                  Feature 02
                </p>
                <h3
                  className="font-bold leading-snug"
                  style={{
                    fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                    color: "oklch(0.97 0 0)",
                  }}
                >
                  ファイルを追加するだけ
                </h3>
                <p
                  className="text-base leading-8"
                  style={{ color: "oklch(0.70 0.02 270)" }}
                >
                  マニュアル・規程・申請書を書庫にアップするだけ。
                  AIが自動で学習し、即座に回答できるようになります。
                </p>
                <ul className="space-y-3">
                  {["ドラッグ&ドロップ対応", "複数書庫管理", "更新即反映"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "oklch(0.55 0.22 280 / 0.18)",
                          border: "1px solid oklch(0.55 0.22 280 / 0.3)",
                        }}
                      >
                        <Check size={11} style={{ color: "oklch(0.65 0.22 280)" }} />
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "oklch(0.80 0.02 270)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── ⑤ Features 3カード — ダークセクション ── */}
      <div
        className="relative py-16 px-6 lg:px-16 overflow-hidden"
        style={{ background: "oklch(0.11 0.03 280)" }}
      >
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
              className="text-xs tracking-[0.25em] uppercase font-medium mb-10 text-center"
              style={{ color: "oklch(0.7 0.18 280)" }}
            >
              Features
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map((feat, i) => (
              <FadeIn key={feat.num} delay={i * 100}>
                <div
                  className="group relative rounded-2xl p-7 transition-all duration-300 cursor-default"
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
                  <span
                    className="absolute -top-2 -right-1 font-black select-none pointer-events-none"
                    style={{ fontSize: "5rem", color: "oklch(1 0 0 / 0.03)", lineHeight: 1 }}
                  >
                    {feat.num}
                  </span>

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.25), oklch(0.5 0.18 260 / 0.15))",
                      border: "1px solid oklch(0.55 0.22 280 / 0.3)",
                    }}
                  >
                    <feat.icon size={16} style={{ color: "oklch(0.75 0.18 280)" }} />
                  </div>

                  <p
                    className="font-bold text-sm mb-2"
                    style={{ color: "oklch(0.95 0 0)" }}
                  >
                    {feat.title}
                  </p>
                  <p
                    className="text-xs leading-6"
                    style={{ color: "oklch(0.65 0.02 270)" }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── ⑥ CTA — ダークセクション ── */}
      <div
        className="relative py-16 px-6 lg:px-16"
        style={{ background: "oklch(0.11 0.03 280)" }}
      >
        <FadeIn>
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

    </section>
  );
}
