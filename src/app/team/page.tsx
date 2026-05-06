import { TEAM_MEMBERS } from "@/lib/team";
import Link from "next/link";
import GlowBadge from "@/components/ui/GlowBadge";

export const metadata = {
  title: "Team | VEULR",
  description: "9名の AI が 24時間 VEULR を動かしています。",
};

export default function TeamPage() {
  return (
    <div
      style={{ background: "var(--veulr-surface-0)", minHeight: "100vh" }}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-20">
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
            9名の AI が 24時間 VEULR を動かしています。
          </p>
        </div>

        {/* 3×3 グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug}`}
              className="group relative rounded-2xl overflow-hidden block"
              style={{
                background: "var(--veulr-surface-1)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              {/* 写真: バスト→フル ホバー切替 */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={`/team/${member.photoSlug}_bust.jpg`}
                  alt={member.nameEn}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={`/team/${member.photoSlug}_full.jpg`}
                  alt={`${member.nameEn} full`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
                {/* グラデーション（下部テキスト読みやすく） */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background:
                      "linear-gradient(to top, var(--veulr-surface-1), transparent)",
                  }}
                />
              </div>

              {/* テキスト */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <p
                    className="font-bold text-lg tracking-[0.1em]"
                    style={{ color: "var(--veulr-text-primary)" }}
                  >
                    {member.nameEn}
                  </p>
                  <GlowBadge color={member.color} size="sm">
                    {member.role}
                  </GlowBadge>
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
