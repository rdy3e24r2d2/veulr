import { TEAM_MEMBERS } from "@/lib/team";
import { notFound } from "next/navigation";
import Link from "next/link";
import GlowBadge from "@/components/ui/GlowBadge";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TEAM_MEMBERS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} (${member.nameEn}) | VEULR`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);
  if (!member) notFound();

  const idx = TEAM_MEMBERS.findIndex((m) => m.slug === slug);
  const prev = TEAM_MEMBERS[idx - 1] ?? null;
  const next = TEAM_MEMBERS[idx + 1] ?? null;

  return (
    <div style={{ background: "var(--veulr-surface-0)", minHeight: "100vh" }}>
      {/* Hero: ビューポート全体 */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* 左ペイン: テキスト */}
        <div className="relative z-10 flex flex-col justify-between p-8 lg:p-16 lg:w-1/2 order-2 lg:order-1">
          {/* 戻るリンク */}
          <Link
            href="/team"
            className="text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
            style={{ color: "var(--veulr-text-muted)" }}
          >
            ← Team
          </Link>

          {/* メイン情報 */}
          <div className="space-y-6 py-16 lg:py-0">
            <GlowBadge color={member.color} size="md">{member.role}</GlowBadge>
            <h1
              className="font-bold leading-none tracking-tighter"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "var(--veulr-text-primary)",
              }}
            >
              {member.nameEn}
            </h1>
            <p
              className="text-lg italic leading-relaxed max-w-md"
              style={{ color: "var(--veulr-text-secondary)" }}
            >
              {member.tagline}
            </p>
          </div>

          {/* Prev/Next */}
          <nav className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/team/${prev.slug}`}
                style={{ color: "var(--veulr-text-muted)" }}
                className="text-sm hover:text-white transition-colors"
              >
                ← {prev.nameEn}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/team/${next.slug}`}
                style={{ color: "var(--veulr-text-muted)" }}
                className="text-sm hover:text-white transition-colors"
              >
                {next.nameEn} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>

        {/* 右ペイン: 全身写真 */}
        <div className="relative lg:w-1/2 h-[60vw] lg:h-auto order-1 lg:order-2 overflow-hidden">
          {/* グラデーションオーバーレイ（左から暗く） */}
          <div
            className="absolute inset-0 z-10 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--veulr-surface-0) 0%, transparent 40%)",
            }}
          />
          <img
            src={`/team/${member.photoSlug}_full.jpg`}
            alt={member.nameEn}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* Bio section */}
      <section
        className="py-24 px-6"
        style={{ borderTop: "1px solid var(--veulr-surface-border)" }}
      >
        <div className="max-w-2xl mx-auto space-y-12">
          <p
            className="text-lg leading-9"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            {member.bio}
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-3">
            {member.specialties.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  border: `1px solid ${member.color}`,
                  color: member.color,
                  background: "transparent",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
