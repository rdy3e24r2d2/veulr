import { TEAM_MEMBERS } from "@/lib/team";
import GlowBadge from "@/components/ui/GlowBadge";
import Link from "next/link";

const featuredMember = TEAM_MEMBERS.find((m) => m.featured)!;
const otherMembers = TEAM_MEMBERS.filter((m) => !m.featured);

export default function TeamBento() {
  return (
    <section
      id="team"
      className="py-24"
      style={{ background: "var(--veuler-surface-0)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium mb-4"
            style={{ color: "var(--veuler-accent-primary)" }}
          >
            Team
          </p>
          <h2
            className="text-[clamp(1.75rem,3vw+0.5rem,3rem)] font-bold"
            style={{ color: "var(--veuler-text-primary)" }}
          >
            チーム
          </h2>
          <p
            className="mt-3 text-base"
            style={{ color: "var(--veuler-text-secondary)" }}
          >
            12名の AI が 24時間 VEULER を動かしています。
          </p>
        </div>

        {/* Bento グリッド */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* LEO — 大カード */}
          <Link
            href={`/team/${featuredMember.slug}`}
            className="group col-span-2 row-span-2 relative rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-5 p-8 min-h-[280px] cursor-pointer"
            style={{
              background: "var(--veuler-surface-1)",
              border: "1px solid var(--veuler-surface-border)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, oklch(0.55 0.22 280 / 22%) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-xl w-[160px] h-[200px] mx-auto">
                <img
                  src={`/team/${featuredMember.photoSlug}_bust.png`}
                  alt={featuredMember.nameEn}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={`/team/${featuredMember.photoSlug}_full.png`}
                  alt={`${featuredMember.nameEn} full`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>

            <div className="relative z-10 text-center space-y-2">
              <p
                className="font-bold text-2xl tracking-[0.15em]"
                style={{ color: "var(--veuler-text-primary)" }}
              >
                {featuredMember.nameEn}
              </p>
              <GlowBadge color={featuredMember.color} size="md">
                {featuredMember.role}
              </GlowBadge>
              <p
                className="text-xs tracking-wide"
                style={{ color: "var(--veuler-text-muted)" }}
              >
                {featuredMember.model}
              </p>
            </div>
          </Link>

          {/* 残り 8名 — 小カード */}
          {otherMembers.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug}`}
              className="group rounded-2xl flex flex-col items-center justify-center gap-3 p-4 transition-colors duration-200 cursor-pointer"
              style={{
                background: "var(--veuler-surface-1)",
                border: "1px solid var(--veuler-surface-border)",
              }}
            >
              <div className="relative overflow-hidden rounded-lg w-[80px] h-[100px] mx-auto">
                <img
                  src={`/team/${member.photoSlug}_bust.png`}
                  alt={member.nameEn}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={`/team/${member.photoSlug}_full.png`}
                  alt={`${member.nameEn} full`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="text-center space-y-1">
                <p
                  className="font-semibold text-sm tracking-[0.1em]"
                  style={{ color: "var(--veuler-text-primary)" }}
                >
                  {member.nameEn}
                </p>
                <GlowBadge color={member.color} size="sm">
                  {member.role}
                </GlowBadge>
                <p
                  className="text-[10px] tracking-wide"
                  style={{ color: "var(--veuler-text-muted)" }}
                >
                  {member.model}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
