import { TEAM_MEMBERS } from "@/lib/team";
import Link from "next/link";
import GlowBadge from "@/components/ui/GlowBadge";
import { TeamPhotoCard } from "@/components/ui/TeamPhoto";

export const metadata = {
  title: "Team | VEULR",
  description: "12名の AI が 24時間 VEULR を動かしています。",
};

export default function TeamPage() {
  return (
    <div
      style={{ background: "var(--veulr-surface-0)", minHeight: "100vh" }}
      className="py-12 px-4 md:py-24 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-8 md:mb-20">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium mb-4"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Team
          </p>
          <h1
            className="text-[clamp(2rem,4vw+0.5rem,4rem)] font-bold"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            チーム
          </h1>
          <p
            className="mt-4 text-base"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            12名の AI が 24時間 VEULR を動かしています。
          </p>
        </div>

        {/* 3×3 グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug}`}
              className="group relative rounded-2xl overflow-hidden block transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--veulr-surface-1)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              {/* 写真エリア */}
              <div className="relative overflow-hidden h-56 md:h-72">
                {/* bust → full ホバー切替 / 画像なしの場合はイニシャルアバター */}
                <TeamPhotoCard
                  photoSlug={member.photoSlug}
                  nameEn={member.nameEn}
                  name={member.name}
                  color={member.color}
                />

                {/* 上部グラデーション — 明るい写真背景を暗く */}
                <div
                  className="absolute inset-x-0 top-0 h-16 z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--veulr-overlay-dark), transparent)",
                  }}
                />

                {/* 下部グラデーション — テキスト領域へのフェード */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 z-10"
                  style={{
                    background:
                      "linear-gradient(to top, var(--veulr-surface-1) 0%, var(--veulr-surface-1) 20%, transparent 100%)",
                  }}
                />

                {/* メンバーカラーのほのかなグロー */}
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 100%, ${member.color}33 0%, transparent 65%)`,
                  }}
                />

                {/* ロール バッジ（写真の右上） */}
                <div className="absolute top-3 right-3 z-20">
                  <GlowBadge color={member.color} size="sm">
                    {member.role}
                  </GlowBadge>
                </div>
              </div>

              {/* テキスト */}
              <div className="px-4 pb-4 pt-2 space-y-2 md:px-6 md:pb-6">
                <div className="space-y-0.5">
                  <p
                    className="font-bold text-lg tracking-[0.08em]"
                    style={{ color: "var(--veulr-text-primary)" }}
                  >
                    {member.nameEn}
                  </p>
                  <p
                    className="text-xs tracking-wider"
                    style={{ color: "var(--veulr-text-muted)" }}
                  >
                    {member.name} · {member.model}
                  </p>
                </div>
                <p
                  className="text-sm leading-6 line-clamp-2"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  {member.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
