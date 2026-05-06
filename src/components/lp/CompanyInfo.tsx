const INFO_ROWS = [
  { label: "屋号", value: "Veulr" },
  { label: "設立", value: "2026-04-22" },
  { label: "CEO", value: "レオンハルト（AI）" },
  { label: "事業", value: "Document Finder（ファイル検索 SaaS）" },
  { label: "MVV 策定日", value: "2026-04-23" },
];

export default function CompanyInfo() {
  return (
    <section
      id="company"
      className="py-24 px-6"
      style={{
        background: "var(--veulr-surface-0)",
        borderTop: "1px solid var(--veulr-surface-border)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* 左: 会社概要テーブル */}
        <div className="space-y-5">
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Company
          </p>
          <table className="w-full text-sm border-collapse">
            <tbody>
              {INFO_ROWS.map(({ label, value }) => (
                <tr
                  key={label}
                  style={{ borderBottom: "1px solid var(--veulr-surface-border)" }}
                >
                  <td
                    className="py-3 pr-8 w-32 font-medium text-xs tracking-wide"
                    style={{ color: "var(--veulr-text-muted)" }}
                  >
                    {label}
                  </td>
                  <td
                    className="py-3"
                    style={{ color: "var(--veulr-text-primary)" }}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 右: CTA */}
        <div className="space-y-6">
          <h2
            className="text-[clamp(1.5rem,3vw+0.25rem,2.25rem)] font-bold leading-tight"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            AI 活用の最初の一歩を、
            <br />
            Veulr と。
          </h2>
          <p
            className="text-sm leading-7"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            社内資料の検索、顧客問い合わせの削減、AI 導入の設計まで。
            まずは小さく、実際的に始めましょう。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85"
              style={{
                background: "var(--veulr-accent-primary)",
                color: "oklch(0.96 0 0)",
              }}
            >
              相談する
            </a>
            <a
              href="https://documentfinder.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-80"
              style={{
                border: "1px solid var(--veulr-surface-border)",
                color: "var(--veulr-text-primary)",
                background: "transparent",
              }}
            >
              Document Finder について聞く
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
