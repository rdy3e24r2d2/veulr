import { TEAM_MEMBERS } from "@/lib/team";
import Link from "next/link";
import GlowBadge from "@/components/ui/GlowBadge";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 px-6"
      style={{ background: "var(--veuler-surface-0)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium mb-4"
            style={{ color: "var(--veuler-accent-primary)" }}
          >
            Team
          </p>
          <h2
            className="text-[clamp(1.5rem,2.5vw+0.5rem,2.25rem)] font-bold"
            style={{ color: "var(--veuler-text-primary)" }}
          >
            Veuler を動かす AI メンバー
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--veuler-text-secondary)" }}
          >
            役割ごとに専門性を持つ AI が 24 時間、プロダクト・顧客支援・事業開発を担います。
          </p>
        </div>

        {/* 3×3 グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug}`}
              className="group relative rounded-2xl overflow-hidden block transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--veuler-surface-1)",
                border: "1px solid var(--veuler-surface-border)",
              }}
            >
              {/* 写真エリア */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={`/team/${member.photoSlug}_bust.png`}
                  alt={member.nameEn}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                  {/* ホバー時メンバーカラーグロー */}
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 100%, ${member.color}33 0%, transparent 65%)`,
                  }}
                />
                {/* ロールバッジ */}
                <div className="absolute top-3 right-3 z-20">
                  <GlowBadge color={member.color} size="sm">
                    {member.role}
                  </GlowBadge>
                </div>
              </div>

              {/* テキスト */}
              <div className="px-5 pb-5 pt-2 space-y-1.5">
                <p
                  className="font-bold text-base tracking-[0.06em]"
                  style={{ color: "var(--veuler-text-primary)" }}
                >
                  {member.nameEn}
                </p>
                <p
                  className="text-xs tracking-wider"
                  style={{ color: "var(--veuler-text-muted)" }}
                >
                  {member.name} · {member.model}
                </p>
                <p
                  className="text-xs leading-5 line-clamp-2"
                  style={{ color: "var(--veuler-text-secondary)" }}
                >
                  {member.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
