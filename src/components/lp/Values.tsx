import Image from "next/image";

const VALUES = [
  {
    image: "/images/values/simple.jpg",
    title: "シンプル",
    description: "本質だけを残す。方程式のように少ない要素で大きな応用を作る。",
    color: "var(--veulr-woz)",
  },
  {
    image: "/images/values/delight.jpg",
    title: "感動",
    description: '"満足" で止まらない。使い始めた瞬間に "すごい" と言わせる。',
    color: "var(--veulr-ive)",
  },
  {
    image: "/images/values/speed.jpg",
    title: "スピード",
    description: "対応も改善も早く。顧客の時間を守り、時間を返す。",
    color: "var(--veulr-hoare)",
  },
  {
    image: "/images/values/support.jpg",
    title: "伴走支援",
    description: "経営目線、現場の立場の両方の視点から改善する。",
    color: "var(--veulr-drucker)",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      style={{ background: "var(--veulr-section-bg)" }}
    >
      {/* ビジュアルバナー */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <Image
          src="/images/values-visual.jpg"
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
              "linear-gradient(to bottom, var(--veulr-section-bg) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(to top, var(--veulr-section-bg) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ヘッダー */}
      <div className="text-center py-12 px-6">
        <p
          className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
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

      {/* 4カード — ボーダーグリッド */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: "1px solid var(--veulr-section-border)" }}
      >
        {VALUES.map(({ image, title, description, color }, i) => (
          <div
            key={title}
            className="flex flex-col"
            style={{
              borderRight:
                i < VALUES.length - 1
                  ? "1px solid var(--veulr-section-border)"
                  : undefined,
            }}
          >
            {/* 抽象画像 */}
            <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* 下部グラデーション */}
              <div
                className="absolute inset-x-0 bottom-0 h-10"
                style={{
                  background: `linear-gradient(to top, ${color}33 0%, transparent 100%)`,
                }}
              />
            </div>
            {/* テキスト */}
            <div className="px-8 py-8 space-y-2">
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
    </section>
  );
}
