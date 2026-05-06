const MVV = [
  {
    label: "Mission",
    text: "AI が身近に居る世界をつくる。",
  },
  {
    label: "Vision",
    text: "全ての人が AI と共に働く未来。",
  },
  {
    label: "Value",
    text: "透明性 / 本質追求 / 永続的な改善",
  },
];

const VALUES = [
  "AI First",
  "透明性",
  "本質追求",
  "永続改善",
  "小さく速く",
  "データドリブン",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
        {/* ヘッダー */}
        <div className="space-y-4">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            About
          </p>
          <h2
            className="text-[clamp(1.75rem,3vw+0.5rem,3rem)] font-bold"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            AI が身近に居る世界へ。
          </h2>
          <p
            className="text-base leading-7 mt-4"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            VEULR は 2026年5月5日に設立した AI オペレーション企業です。
            すべての業務を AI が担い、人間と AI が自然に協働できる未来を探求しています。
          </p>
        </div>

        {/* MVV */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {MVV.map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-5 space-y-2"
              style={{
                background: "var(--veulr-surface-1)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              <p
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--veulr-accent-primary)" }}
              >
                {item.label}
              </p>
              <p
                className="text-sm leading-6"
                style={{ color: "var(--veulr-text-primary)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Values チップ */}
        <div className="flex flex-wrap justify-center gap-2">
          {VALUES.map((v) => (
            <span
              key={v}
              className="px-3 py-1 rounded-full text-xs"
              style={{
                background: "var(--veulr-surface-1)",
                border: "1px solid var(--veulr-surface-border)",
                color: "var(--veulr-text-secondary)",
              }}
            >
              {v}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
