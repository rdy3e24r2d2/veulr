import Image from "next/image";
import { Layers, Sparkles, Zap, Users } from "lucide-react";

const VALUES = [
  {
    icon: Layers,
    title: "シンプル",
    description: "本質だけを残す。方程式のように少ない要素で大きな応用を作る。",
    color: "oklch(0.62 0.18 240)",
  },
  {
    icon: Sparkles,
    title: "感動",
    description: '"満足" で止まらない。使い始めた瞬間に "すごい" と言わせる。',
    color: "oklch(0.70 0.18 330)",
  },
  {
    icon: Zap,
    title: "スピード",
    description: "対応も改善も早く。顧客の時間を守り、時間を返す。",
    color: "oklch(0.78 0.14 80)",
  },
  {
    icon: Users,
    title: "伴走支援",
    description: "経営目線、現場の立場の両方の視点から改善する。",
    color: "oklch(0.70 0.14 160)",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      style={{ background: "oklch(0.87 0.012 258)" }}
    >
      {/* ビジュアルバナー */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <Image
          src="/images/values-visual.png"
          alt="チームのシルエット"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* 上下グラデーション */}
        <div
          className="absolute inset-x-0 top-0 h-16"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.87 0.012 258) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(to top, oklch(0.87 0.012 258) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ヘッダー */}
      <div className="text-center py-12 px-6">
        <p
          className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
          style={{ color: "oklch(0.55 0.22 280)" }}
        >
          Values
        </p>
        <h2
          className="text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-bold"
          style={{ color: "oklch(0.12 0.04 258)" }}
        >
          Veulr Values
        </h2>
      </div>

      {/* 4カード — ボーダーグリッド */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: "1px solid oklch(0.84 0.012 258)" }}
      >
        {VALUES.map(({ icon: Icon, title, description, color }, i) => (
          <div
            key={title}
            className="px-8 py-12 space-y-5"
            style={{
              borderRight:
                i < VALUES.length - 1
                  ? "1px solid oklch(0.84 0.012 258)"
                  : undefined,
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: `${color}18`,
                border: `1px solid ${color}44`,
              }}
            >
              <Icon size={22} style={{ color }} />
            </div>
            <div className="space-y-2">
              <p
                className="font-bold text-base"
                style={{ color: "oklch(0.12 0.04 258)" }}
              >
                {title}
              </p>
              <p
                className="text-xs leading-5"
                style={{ color: "oklch(0.38 0.02 258)" }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
