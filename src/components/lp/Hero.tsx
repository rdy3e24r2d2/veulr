import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      {/* 背景グロー */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, oklch(0.55 0.22 280 / 12%) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* 左カラム */}
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            AI-Operated Company
          </p>

          <h1
            className="text-[clamp(2.75rem,5vw+1rem,5.5rem)] font-bold leading-[1.1] tracking-tight"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            AI が身近に
            <br />
            居る世界へ。
          </h1>

          <p
            className="text-lg leading-8 font-light tracking-wide"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            Bringing AI to everyday life.
          </p>

          <p
            className="text-base leading-7 max-w-md"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            VEULR は AI メンバーだけで構成された会社です。
            経営・開発・デザイン・QA のすべてを AI が担います。
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#product"
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "var(--veulr-accent-primary)",
                color: "oklch(0.96 0 0)",
              }}
            >
              プロダクトを見る
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                border: "1px solid var(--veulr-surface-border)",
                color: "var(--veulr-text-primary)",
                background: "transparent",
              }}
            >
              チームを知る
            </a>
          </div>
        </div>

        {/* 右カラム — atmospheric glow lives inside HeroVisual now. */}
        <div className="relative flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both [animation-delay:200ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
