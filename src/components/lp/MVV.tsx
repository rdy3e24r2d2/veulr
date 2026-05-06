export default function MVV() {
  return (
    <section style={{ background: "var(--veulr-surface-0)" }}>

      {/* ── Mission / Vision 横並び ── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ borderBottom: "1px solid var(--veulr-surface-border)" }}
      >
        {/* Mission */}
        <div
          className="px-10 py-20 lg:px-16 lg:py-24 space-y-6"
          id="mission"
          style={{ borderRight: "1px solid var(--veulr-surface-border)" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Mission
          </p>
          <h2
            className="font-bold leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            AI で生活を
            <br />
            もっと便利に。
          </h2>
          <p
            className="text-sm leading-7 max-w-sm"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            仕事も生活の一部。AI を使って、働く毎日から日常まで、
            面倒を取り除き、時間を取り戻す。
          </p>
        </div>

        {/* Vision */}
        <div
          className="px-10 py-20 lg:px-16 lg:py-24 space-y-6"
          id="vision"
          style={{ background: "var(--veulr-surface-1)" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Vision
          </p>
          <h2
            className="font-bold leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            AI が身近に
            <br />
            居る世界へ。
          </h2>
          <p
            className="text-sm leading-7 max-w-sm"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            すべての人に "AI 活用が当たり前" を広げる。
          </p>
        </div>
      </div>
    </section>
  );
}
