import { Check, Search } from "lucide-react";

const FEATURES = [
  { text: "自然言語で検索" },
  { text: "複数ソース対応" },
  { text: "チーム共有" },
  { text: "月額 ¥3,000〜" },
];

const MOCK_RESULTS = [
  {
    icon: "📄",
    title: "2026年Q1 事業計画書",
    snippet: "AI オペレーション体制の確立と初回プロダクトリリースを目標に…",
  },
  {
    icon: "📋",
    title: "製品ロードマップ v2.1",
    snippet: "Document Finder のマルチソース対応を2026年Q2中に完了予定…",
  },
  {
    icon: "📊",
    title: "月次レポート 2026年4月",
    snippet: "ユーザー獲得 KPI の達成率 112%。契約継続率 94%…",
  },
];

export default function Product() {
  return (
    <section
      id="product"
      className="py-24"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 左: テキスト */}
        <div className="space-y-6">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Product
          </p>

          <h2
            className="text-[clamp(1.75rem,3vw+0.5rem,3rem)] font-bold leading-tight"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            Document Finder
          </h2>

          <p
            className="text-base leading-7"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            社内文書・Notion・Google Drive を横断検索。
            AI が文脈を理解し、必要な情報を即座に提示します。
          </p>

          <ul className="space-y-3">
            {FEATURES.map((feat) => (
              <li key={feat.text} className="flex items-center gap-3">
                <Check
                  size={16}
                  style={{ color: "var(--veulr-accent-primary)", flexShrink: 0 }}
                />
                <span
                  className="text-sm"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  {feat.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 pt-2">
            <p>
              <span
                className="text-3xl font-bold"
                style={{ color: "var(--veulr-text-primary)" }}
              >
                ¥3,000
              </span>
              <span
                className="text-sm ml-1"
                style={{ color: "var(--veulr-text-secondary)" }}
              >
                / 月〜
              </span>
            </p>
            <a
              href="https://file-search-system-production.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "var(--veulr-accent-primary)",
                color: "oklch(0.96 0 0)",
              }}
            >
              無料トライアルを始める
            </a>
          </div>
        </div>

        {/* 右: UIモックアップ */}
        <div
          className="rounded-2xl overflow-hidden p-6 space-y-4"
          style={{
            background: "var(--veulr-surface-1)",
            border: "1px solid var(--veulr-surface-border)",
          }}
        >
          {/* 検索バー */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{
              background: "var(--veulr-surface-2)",
              border: "1px solid var(--veulr-surface-border)",
            }}
          >
            <Search
              size={16}
              style={{ color: "var(--veulr-text-muted)", flexShrink: 0 }}
            />
            <span
              className="text-sm"
              style={{ color: "var(--veulr-text-muted)" }}
            >
              Q1の事業計画について教えて…
            </span>
          </div>

          {/* 結果リスト */}
          <div className="space-y-3">
            {MOCK_RESULTS.map((result, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-lg"
                style={{ background: "var(--veulr-surface-2)" }}
              >
                <span className="text-lg flex-shrink-0 mt-0.5">{result.icon}</span>
                <div className="min-w-0">
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: "var(--veulr-text-primary)" }}
                  >
                    {result.title}
                  </p>
                  <p
                    className="text-xs leading-5 mt-0.5 line-clamp-2"
                    style={{ color: "var(--veulr-text-muted)" }}
                  >
                    {result.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* バッジ */}
          <div className="flex items-center gap-2 pt-1">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.55 0.22 280 / 15%)",
                color: "var(--veulr-accent-primary)",
                border: "1px solid oklch(0.55 0.22 280 / 30%)",
              }}
            >
              AI 解析済み
            </span>
            <span
              className="text-xs"
              style={{ color: "var(--veulr-text-muted)" }}
            >
              3件の関連文書を発見
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
