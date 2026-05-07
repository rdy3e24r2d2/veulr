import { Search, RefreshCw, Lock } from "lucide-react";

const PAIN_CARDS = [
  {
    emoji: "😖",
    title: "「どのフォルダだっけ？」",
    desc: "探す時間が毎日発生。規程・マニュアルがどこにあるか分からない。",
  },
  {
    emoji: "🔄",
    title: "「また同じ質問が来た」",
    desc: "総務・人事への問い合わせが減らない。同じ回答を何度も繰り返す。",
  },
  {
    emoji: "📂",
    title: "「更新されてない」",
    desc: "古い情報が混在して信頼できない。最新版がどれかも分からない。",
  },
];

const FEATURES = [
  {
    icon: Search,
    title: "自然言語で検索",
    desc: "「退職時のPC返却は？」そのまま聞ける。キーワードを覚えなくていい。",
  },
  {
    icon: RefreshCw,
    title: "自動学習",
    desc: "ファイルを追加するだけで即反映。メンテナンス不要で常に最新状態。",
  },
  {
    icon: Lock,
    title: "BYOK 対応",
    desc: "自社の API キーで安全運用。データが外部に学習されない安心設計。",
  },
];

const MOCK_RESULTS = [
  {
    icon: "📄",
    title: "退職時の PC 返却ルール",
    snippet: "PC は返却前にデータを完全消去し、IT 部門へ…",
    date: "2026/04/07",
  },
  {
    icon: "📋",
    title: "PC・IT 機器貸与に関する規程",
    snippet: "社員に貸与する IT 機器の管理・返却に関する社内規程…",
    date: "2026/01/15",
  },
  {
    icon: "📊",
    title: "備品・機器の返却フロー",
    snippet: "退職・異動時における備品・機器の返却手順について…",
    date: "2025/11/30",
  },
];

export default function Product() {
  return (
    <section id="product" style={{ background: "var(--veulr-surface-0)" }}>

      {/* ── ① Pain セクション ── */}
      <div className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: "var(--veulr-accent-primary)" }}
            >
              Product
            </p>
            <h2
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "var(--veulr-text-primary)",
              }}
            >
              Document Finder
            </h2>
            <p
              className="mt-2 text-lg font-medium"
              style={{ color: "var(--veulr-text-secondary)" }}
            >
              社内のあらゆる文書をAIが答える
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAIN_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 space-y-3"
                style={{
                  background: "var(--veulr-surface-1)",
                  border: "1px solid var(--veulr-surface-border)",
                  borderTop: `3px solid var(--veulr-accent-primary)`,
                }}
              >
                <span className="text-3xl">{card.emoji}</span>
                <p
                  className="font-bold text-base leading-snug"
                  style={{ color: "var(--veulr-text-primary)" }}
                >
                  {card.title}
                </p>
                <p
                  className="text-sm leading-6"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ② Solution Bridge ── */}
      <div
        className="py-16 px-6"
        style={{
          background: "var(--veulr-surface-2)",
          borderTop: "1px solid var(--veulr-surface-border)",
          borderBottom: "1px solid var(--veulr-surface-border)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Solution
          </p>
          <h3
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            ファイルをアップするだけ。
            <br />
            AIが24時間答える。
          </h3>
          <p
            className="text-base leading-8"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            社内のマニュアル・規程・申請書をアップロードするだけで、
            Document Finder が自動学習。
            社員からの質問に即座に回答します。
          </p>
        </div>
      </div>

      {/* ── ③ Features ── */}
      <div className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl p-6 space-y-4"
                style={{
                  background: "var(--veulr-surface-1)",
                  border: "1px solid var(--veulr-surface-border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "oklch(0.55 0.22 280 / 12%)",
                    border: "1px solid oklch(0.55 0.22 280 / 25%)",
                  }}
                >
                  <feat.icon size={18} style={{ color: "var(--veulr-accent-primary)" }} />
                </div>
                <p
                  className="font-bold text-base"
                  style={{ color: "var(--veulr-text-primary)" }}
                >
                  {feat.title}
                </p>
                <p
                  className="text-sm leading-6"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── ④ UI モック ── */}
          <div
            className="max-w-2xl mx-auto rounded-2xl p-6 space-y-4"
            style={{
              background: "var(--veulr-surface-1)",
              border: "1px solid var(--veulr-surface-border)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold" style={{ color: "var(--veulr-text-primary)" }}>
                Document Finder
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.55 0.22 280 / 15%)",
                  color: "var(--veulr-accent-primary)",
                  border: "1px solid oklch(0.55 0.22 280 / 30%)",
                }}
              >
                総務のミカタ
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-lg"
              style={{
                background: "var(--veulr-surface-2)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              <Search size={14} style={{ color: "var(--veulr-text-muted)" }} />
              <span className="text-sm flex-1" style={{ color: "var(--veulr-text-muted)" }}>
                退職時の PC 返却ルールを教えて
              </span>
            </div>
            <div className="space-y-2">
              {MOCK_RESULTS.map((result, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-lg"
                  style={{
                    background: "var(--veulr-surface-2)",
                    border: "1px solid var(--veulr-surface-border)",
                  }}
                >
                  <span className="text-base flex-shrink-0 mt-0.5">{result.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: "var(--veulr-text-primary)" }}
                      >
                        {result.title}
                      </p>
                      <span
                        className="text-[10px] flex-shrink-0"
                        style={{ color: "var(--veulr-text-muted)" }}
                      >
                        {result.date}
                      </span>
                    </div>
                    <p
                      className="text-xs leading-5 mt-0.5 line-clamp-1"
                      style={{ color: "var(--veulr-text-muted)" }}
                    >
                      {result.snippet}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
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
              <span className="text-xs" style={{ color: "var(--veulr-text-muted)" }}>
                3件の関連文書を発見
              </span>
            </div>
          </div>

          {/* ── ⑤ CTA ── */}
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "oklch(0.55 0.22 280 / 8%)",
              border: "1px solid oklch(0.55 0.22 280 / 20%)",
            }}
          >
            <div>
              <p
                className="font-bold text-xl"
                style={{ color: "var(--veulr-text-primary)" }}
              >
                まずは無料で試す
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--veulr-text-secondary)" }}
              >
                クレジットカード不要。14日間の無料トライアル。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="https://documentfinder.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
                style={{ background: "var(--veulr-accent-primary)", color: "oklch(0.96 0 0)" }}
              >
                資料ダウンロード
              </a>
              <a
                href="https://documentfinder.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  border: "1px solid var(--veulr-surface-border)",
                  color: "var(--veulr-text-primary)",
                  background: "transparent",
                }}
              >
                デモを体験する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
