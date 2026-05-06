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
      className="py-24 px-6"
      style={{ background: "var(--veulr-surface-1)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium mb-4"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Values
          </p>
          <h2
            className="text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-bold"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            Veulr Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="rounded-2xl p-6 space-y-5"
              style={{
                background: "var(--veulr-surface-2)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              {/* カラー付き丸アイコン */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: `${color}20`,
                  border: `1px solid ${color}44`,
                }}
              >
                <Icon size={22} style={{ color }} />
              </div>

              <div className="space-y-2">
                <p
                  className="font-bold text-base"
                  style={{ color: "var(--veulr-text-primary)" }}
                >
                  {title}
                </p>
                <p
                  className="text-xs leading-5"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
