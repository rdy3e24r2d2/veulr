"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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
const PRODUCTS = [
  {
    id: "document-finder",
    name: "Document Finder",
    nameJa: "ドキュメントファインダー",
    tagline: "社内のあらゆる文書を AI が答える",
    description:
      "マニュアル・規程・申請書をアップロードするだけ。AI が自動学習し、社員の質問に 24 時間即答します。",
    url: "https://documentfinder.jp",
    status: "Released" as const,
    accentColor: "var(--veuler-accent-primary)",
    accentBgSoft: "var(--veuler-accent-bg-soft)",
    accentBorderSoft: "var(--veuler-accent-border-soft)",
    statusBg: "var(--veuler-accent-bg-soft)",
    statusBorder: "var(--veuler-accent-border-soft)",
    statusColor: "var(--veuler-accent-primary)",
  },
  {
    id: "ai-oya",
    name: "AI大家",
    nameJa: "AI OYA",
    tagline: "賃貸オーナー向け AI サポートプラットフォーム",
    description:
      "月次レポート・物件管理・入居者管理を AI がサポート。賃貸オーナーの面倒な業務を自動化します。",
    url: "https://ai-oya.veuler.com",
    status: "Beta" as const,
    accentColor: "var(--veuler-ai-oya)",
    accentBgSoft: "var(--veuler-ai-oya-bg-soft)",
    accentBorderSoft: "var(--veuler-ai-oya-border-soft)",
    statusBg: "var(--veuler-ai-oya-bg-soft)",
    statusBorder: "var(--veuler-ai-oya-border-soft)",
    statusColor: "var(--veuler-ai-oya-text)",
  },
];

/* ── コンポーネント ─────────────────────────────────────────── */
export default function Products() {
  return (
    <section
      id="products"
      className="py-24 px-6 lg:px-16"
      style={{ background: "var(--veuler-surface-0)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <FadeIn>
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: "var(--veuler-accent-primary)" }}
            >
              Products
            </p>
            <h2
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "var(--veuler-text-primary)",
              }}
            >
              私たちのプロダクト
            </h2>
            <p
              className="mt-3 text-base"
              style={{ color: "var(--veuler-text-secondary)" }}
            >
              AI を活用したプロダクトで、業務の自動化を支援します。
            </p>
          </div>
        </FadeIn>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product, i) => (
            <FadeIn key={product.id} delay={i * 120}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ProductCard ────────────────────────────────────────── */
function ProductCard({
  product,
}: {
  product: (typeof PRODUCTS)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300"
      style={{
        background: "var(--veuler-surface-1)",
        border: `1px solid ${hovered ? product.accentBorderSoft : "var(--veuler-surface-border)"}`,
        borderTop: `3px solid ${product.accentColor}`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 12px 40px oklch(0 0 0 / 0.08), 0 0 0 1px ${product.accentBorderSoft}`
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ステータスバッジ */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
          style={{
            background: product.statusBg,
            border: `1px solid ${product.statusBorder}`,
            color: product.statusColor,
          }}
        >
          {product.status}
        </span>
      </div>

      {/* プロダクト名 */}
      <div>
        <h3
          className="font-bold leading-tight"
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: "var(--veuler-text-primary)",
          }}
        >
          {product.name}
        </h3>
        <p
          className="mt-1 text-sm"
          style={{ color: "var(--veuler-text-muted)" }}
        >
          {product.nameJa}
        </p>
      </div>

      {/* タグライン */}
      <p
        className="text-sm font-medium"
        style={{ color: product.accentColor }}
      >
        {product.tagline}
      </p>

      {/* 説明文 */}
      <p
        className="text-sm leading-7 flex-1"
        style={{ color: "var(--veuler-text-secondary)" }}
      >
        {product.description}
      </p>

      {/* CTAボタン */}
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 self-start h-10 px-5 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
        style={{
          background: product.accentColor,
          color: "oklch(0.97 0 0)",
        }}
      >
        サービスを見る <ArrowRight size={14} />
      </a>
    </div>
  );
}
