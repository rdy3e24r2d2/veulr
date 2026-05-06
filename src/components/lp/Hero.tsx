import { TEAM_MEMBERS } from "@/lib/team";
import { Search } from "lucide-react";

const MOCK_RESULTS = [
  { icon: "📄", title: "退職時の PC 返却ルール", snippet: "PC は返却前にデータを完全消去し、IT 部門へ…" },
  { icon: "📋", title: "PC・IT 機器貸与に関する規程", snippet: "社員に貸与する IT 機器の管理・返却に関する社内規程…" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      {/* 背景グロー */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 65% 40%, oklch(0.55 0.22 280 / 10%) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* ── 左カラム ── */}
        <div className="space-y-8">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            AI-Operated Company
          </p>

          <h1
            className="text-[clamp(2.5rem,5vw+0.5rem,5rem)] font-bold leading-[1.1] tracking-tight"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            AI で、
            <br />
            <span style={{ color: "var(--veulr-accent-primary)" }}>探す時間</span>
            をなくす。
          </h1>

          <p
            className="text-base leading-7 max-w-md"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            社内に眠る資料を、必要な瞬間に見つける。
            <br />
            Veulr は、日本の中小企業に向けた
            AI ドキュメント検索体験をつくります。
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://documentfinder.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-85"
              style={{
                background: "var(--veulr-accent-primary)",
                color: "oklch(0.96 0 0)",
              }}
            >
              Document Finder を見る →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-6 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-80"
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

        {/* ── 右カラム ── */}
        <div className="space-y-4">

          {/* チーム写真グリッド 3×3 */}
          <div
            className="rounded-2xl overflow-hidden p-4"
            style={{
              background: "var(--veulr-surface-1)",
              border: "1px solid var(--veulr-surface-border)",
            }}
          >
            <p
              className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3 px-1"
              style={{ color: "var(--veulr-text-muted)" }}
            >
              9 AI Members
            </p>
            <div className="grid grid-cols-3 gap-2">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="relative rounded-xl overflow-hidden aspect-square"
                >
                  <img
                    src={`/team/${member.photoSlug}_bust.png`}
                    alt={member.nameEn}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* 下部オーバーレイ */}
                  <div
                    className="absolute inset-x-0 bottom-0 px-1.5 py-1"
                    style={{
                      background: "linear-gradient(to top, oklch(0 0 0 / 75%) 0%, transparent 100%)",
                    }}
                  >
                    <p className="text-white text-[9px] font-medium leading-none">{member.nameEn}</p>
                    <p className="text-white/60 text-[8px] leading-none mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* プロダクト UI モック（縮小版） */}
          <div
            className="rounded-2xl overflow-hidden p-4 space-y-3"
            style={{
              background: "var(--veulr-surface-1)",
              border: "1px solid var(--veulr-surface-border)",
            }}
          >
            {/* 検索バー */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{
                background: "var(--veulr-surface-2)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              <Search size={13} style={{ color: "var(--veulr-text-muted)", flexShrink: 0 }} />
              <span className="text-xs" style={{ color: "var(--veulr-text-muted)" }}>
                退職時の PC 返却ルールを教えて
              </span>
              <Search
                size={13}
                className="ml-auto"
                style={{ color: "var(--veulr-accent-primary)", flexShrink: 0 }}
              />
            </div>

            {/* 結果 */}
            {MOCK_RESULTS.map((r, i) => (
              <div
                key={i}
                className="flex gap-2.5 p-2.5 rounded-lg"
                style={{ background: "var(--veulr-surface-2)" }}
              >
                <span className="text-sm flex-shrink-0 mt-0.5">{r.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs font-medium truncate" style={{ color: "var(--veulr-text-primary)" }}>
                    {r.title}
                  </p>
                  <p className="text-[10px] leading-4 mt-0.5 line-clamp-1" style={{ color: "var(--veulr-text-muted)" }}>
                    {r.snippet}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-0.5">
              <span
                className="text-[10px] px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.55 0.22 280 / 15%)",
                  color: "var(--veulr-accent-primary)",
                  border: "1px solid oklch(0.55 0.22 280 / 30%)",
                }}
              >
                AI 解析済み
              </span>
              <span className="text-[10px]" style={{ color: "var(--veulr-text-muted)" }}>
                Document Finder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
