export default function AboutHeader() {
  return (
    <div
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      {/* 上部の区切り線 — 太め */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--veulr-accent-primary)" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3">
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            About Veulr
          </p>
          <h2
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            会社概要
          </h2>
          <p
            className="text-base max-w-lg leading-7"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            Veulr のミッション・ビジョン・バリュー、そして AI メンバーをご紹介します。
          </p>
        </div>

        <div
          className="text-right hidden lg:block"
          style={{ color: "var(--veulr-text-muted)", fontSize: "11px", letterSpacing: "0.15em" }}
        >
          <p className="uppercase">Veulr Inc.</p>
          <p className="uppercase">Est. 2026 · Tokyo</p>
        </div>
      </div>
    </div>
  );
}
