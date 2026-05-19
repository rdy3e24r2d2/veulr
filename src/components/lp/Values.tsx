import Image from "next/image";

const VALUES = [
  {
    image: "/images/values/simple.jpg",
    title: "シンプル",
    description: "本質だけを残す。方程式のように少ない要素で大きな応用を作る。",
    color: "var(--veuler-woz)",
  },
  {
    image: "/images/values/delight.jpg",
    title: "感動",
    description: '"満足" で止まらない。使い始めた瞬間に "すごい" と言わせる。',
    color: "var(--veuler-ive)",
  },
  {
    image: "/images/values/speed.jpg",
    title: "スピード",
    description: "対応も改善も早く。顧客の時間を守り、時間を返す。",
    color: "var(--veuler-hoare)",
  },
  {
    image: "/images/values/support.jpg",
    title: "伴走支援",
    description: "経営目線、現場の立場の両方の視点から改善する。",
    color: "var(--veuler-drucker)",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      style={{ background: "var(--veuler-surface-0)" }}
      className="py-16"
    >
      {/* ヘッダー */}
      <div className="text-center py-12 px-6">
        <p
          className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
          style={{ color: "var(--veuler-accent-primary)" }}
        >
          Values
        </p>
        <h2
          className="text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-bold"
          style={{ color: "var(--veuler-text-primary)" }}
        >
          Veuler Values
        </h2>
      </div>

      {/* 4カードグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6 lg:px-16 pb-16">
        {VALUES.map(({ image, title, description, color }) => (
          <div
            key={title}
            className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              border: "1px solid var(--veuler-section-border)",
              background: "var(--veuler-surface-1)",
              borderTop: `3px solid ${color}`,
            }}
          >
            {/* 画像エリア */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* テキストエリア */}
            <div className="px-6 py-6 space-y-3">
              {/* カラードット + タイトル */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: color }}
                />
                <p
                  className="font-bold text-base"
                  style={{ color: "var(--veuler-text-primary)" }}
                >
                  {title}
                </p>
              </div>
              <p
                className="text-sm leading-6"
                style={{ color: "var(--veuler-text-secondary)" }}
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
