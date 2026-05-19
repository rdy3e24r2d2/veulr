import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ── 背景画像 ── */}
      <Image
        src="/images/hero-visual.jpg"
        alt="AI で生活をもっと便利に — Veuler"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* フラット暗化オーバーレイ */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--veuler-overlay-image)" }}
      />

      {/* 左下スクリム — テキスト可読性強化 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0 0 0 / 40%) 0%, transparent 60%)",
        }}
      />

      {/* 雑誌インセットフレーム */}
      <div
        className="absolute inset-3 lg:inset-6 pointer-events-none"
        style={{ border: "1px solid oklch(1 0 0 / 15%)" }}
      />

      {/* ── コンテンツ層 ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-8 py-10 lg:px-16 lg:py-20">

        {/* TOP ROW */}
        <div className="flex justify-between items-start">
          <p
            className="text-[10px] tracking-[0.3em] uppercase font-medium"
            style={{
              color: "var(--veuler-text-on-image)",
              textShadow: "0 1px 3px oklch(0 0 0 / 35%)",
            }}
          >
            AI-Operated Company
          </p>
          <div
            className="hidden sm:block text-right"
            style={{
              color: "oklch(1 0 0 / 60%)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              lineHeight: 1.6,
            }}
          >
            Issue 01 · 2026
            <br />
            Veuler / Tokyo
          </div>
        </div>

        {/* MIDDLE — 画像を見せる */}
        <div className="flex-1" />

        {/* BOTTOM */}
        <div className="max-w-[58ch]">
          <div
            className="mb-5"
            style={{
              width: "4rem",
              height: "1px",
              background: "oklch(1 0 0 / 50%)",
            }}
          />

          <h1
            className="font-bold leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
              color: "var(--veuler-text-on-image)",
              textShadow:
                "0 1px 2px oklch(0 0 0 / 40%), 0 0 32px oklch(0 0 0 / 25%)",
            }}
          >
            AI で生活を、
            <br />
            もっと便利に。
          </h1>

          <p
            className="text-base leading-[1.8] mt-4 max-w-md"
            style={{
              color: "oklch(1 0 0 / 85%)",
              textShadow: "0 1px 3px oklch(0 0 0 / 35%)",
            }}
          >
            仕事も生活の一部。
            <br />
            AI を使って、働く毎日から日常まで、
            <br />
            面倒を取り除き、時間を取り戻す。
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#mission"
              className="inline-flex items-center justify-center h-11 px-7 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85"
              style={{
                background: "var(--veuler-accent-primary)",
                color: "oklch(0.96 0 0)",
              }}
            >
              私たちのミッション →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-7 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/10"
              style={{
                border: "1px solid oklch(1 0 0 / 60%)",
                color: "var(--veuler-text-on-image)",
                background: "transparent",
              }}
            >
              相談する →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
