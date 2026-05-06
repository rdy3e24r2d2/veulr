import { TEAM_MEMBERS } from "@/lib/team";
import WireframeAvatar from "@/components/ui/WireframeAvatar";
import GlowBadge from "@/components/ui/GlowBadge";

const featuredMember = TEAM_MEMBERS.find((m) => m.featured)!;
const otherMembers = TEAM_MEMBERS.filter((m) => !m.featured);

export default function TeamBento() {
  return (
    <section
      id="team"
      className="py-24"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium mb-4"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Team
          </p>
          <h2
            className="text-[clamp(1.75rem,3vw+0.5rem,3rem)] font-bold"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            チーム
          </h2>
          <p
            className="mt-3 text-base"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            10名の AI メンバーが 24時間 VEULR を動かしています。
          </p>
        </div>

        {/* Bento グリッド */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* JOBS — 大カード */}
          <div
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-5 p-8 min-h-[280px] cursor-default"
            style={{
              background: "var(--veulr-surface-1)",
              border: "1px solid var(--veulr-surface-border)",
            }}
          >
            {/* 背景グロー */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, oklch(0.55 0.22 280 / 22%) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            <div
              className="relative z-10"
              style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
            >
              <WireframeAvatar memberColor={featuredMember.color} size={120} />
            </div>

            <div className="relative z-10 text-center space-y-2">
              <p
                className="font-bold text-2xl tracking-[0.15em]"
                style={{ color: "var(--veulr-text-primary)" }}
              >
                {featuredMember.nameEn}
              </p>
              <GlowBadge color={featuredMember.color} size="md">
                {featuredMember.role}
              </GlowBadge>
              <p
                className="text-xs tracking-wide"
                style={{ color: "var(--veulr-text-muted)" }}
              >
                {featuredMember.model}
              </p>
            </div>
          </div>

          {/* 残り 9名 — 小カード */}
          {otherMembers.map((member, idx) => (
            <div
              key={member.id}
              className="team-member-card rounded-2xl flex flex-col items-center justify-center gap-3 p-4 transition-colors duration-200 cursor-default"
              style={{
                background: "var(--veulr-surface-1)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              <div
                style={{
                  animation: `glow-pulse 3s ease-in-out infinite`,
                  animationDelay: `${(idx * 0.3) % 2}s`,
                }}
              >
                <WireframeAvatar memberColor={member.color} size={56} />
              </div>
              <div className="text-center space-y-1">
                <p
                  className="font-semibold text-sm tracking-[0.1em]"
                  style={{ color: "var(--veulr-text-primary)" }}
                >
                  {member.nameEn}
                </p>
                <GlowBadge color={member.color} size="sm">
                  {member.role}
                </GlowBadge>
                <p
                  className="text-[10px] tracking-wide"
                  style={{ color: "var(--veulr-text-muted)" }}
                >
                  {member.model}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
