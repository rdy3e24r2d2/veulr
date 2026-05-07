import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      {/* ── 左カラム: ミッションテキスト ── */}
      <div className="relative z-10 flex flex-col justify-between px-8 py-12 lg:px-16 lg:py-20 lg:w-[52%] order-2 lg:order-1">

        {/* 上部ラベル */}
        <p
          className="text-xs tracking-[0.25em] uppercase font-medium self-start"
          style={{ color: "var(--veulr-accent-primary)" }}
        >
          AI-Operated Company
        </p>

        {/* メインコピー */}
        <div className="space-y-8 py-16 lg:py-0">
          <h1
            className="font-bold leading-[1.12] tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 6vw + 0.5rem, 5.5rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            AI で生活を、
            <br />
            もっと便利に。
          </h1>

          <p
            className="text-base leading-8 max-w-md border-l-2 pl-5"
            style={{
              color: "var(--veulr-text-secondary)",
              borderColor: "var(--veulr-accent-primary)",
            }}
          >
            仕事も生活の一部。
            <br />
            AI を使って、働く毎日から日常まで、
            <br />
            面倒を取り除き、時間を取り戻す。
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#mission"
              className="inline-flex items-center justify-center h-11 px-7 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85"
              style={{
                background: "var(--veulr-accent-primary)",
                color: "oklch(0.96 0 0)",
              }}
            >
              私たちのミッション →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-7 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-75"
              style={{
                border: "1px solid var(--veulr-surface-border)",
                color: "var(--veulr-text-primary)",
                background: "transparent",
              }}
            >
              相談する →
            </a>
          </div>
        </div>

        {/* 下部: スクロールヒント */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase self-start"
          style={{ color: "var(--veulr-text-muted)" }}
        >
          Scroll
        </p>
      </div>

      {/* ── 右カラム: ヒーロー画像 ── */}
      <div className="relative lg:w-[48%] h-[60vw] lg:h-auto order-1 lg:order-2 overflow-hidden">
        <Image
          src="/images/hero-visual.jpg"
          alt="AI で生活をもっと便利に — Veulr"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 48vw"
        />

        {/* 左端を暗く（テキストとのブレンド）*/}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, var(--veulr-surface-0) 0%, var(--veulr-overlay-dark) 25%, transparent 55%)",
          }}
        />

        {/* 上端 */}
        <div
          className="absolute inset-x-0 top-0 h-20"
          style={{
            background:
              "linear-gradient(to bottom, var(--veulr-surface-0) 0%, transparent 100%)",
          }}
        />

        {/* 下端 */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to top, var(--veulr-surface-0) 0%, transparent 100%)",
          }}
        />

        {/* スマホ: 下部フェード */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 lg:hidden"
          style={{
            background:
              "linear-gradient(to top, var(--veulr-surface-0) 0%, transparent 100%)",
          }}
        />

        {/* アンビエントグロー */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, var(--veulr-accent-glow) 0%, transparent 60%)",
          }}
        />
      </div>
    </section>
  );
}
