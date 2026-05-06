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

      {/* ── Hero: ビューポート全体 ── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        {/* 左ペイン: テキスト */}
        <div className="relative z-10 flex flex-col justify-between p-8 lg:p-16 lg:w-[52%] order-2 lg:order-1">

          {/* 戻るリンク */}
          <Link
            href="/team"
            className="text-xs tracking-[0.2em] uppercase hover:text-white transition-colors self-start"
            style={{ color: "var(--veulr-text-muted)" }}
          >
            ← Team
          </Link>

          {/* メイン情報 */}
          <div className="space-y-7 py-16 lg:py-0">
            <GlowBadge color={member.color} size="md">{member.role}</GlowBadge>

            {/* 英語名（大見出し）*/}
            <h1
              className="font-bold leading-none tracking-tighter"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "var(--veulr-text-primary)",
              }}
            >
              {member.nameEn}
            </h1>

            {/* 日本語名 + モデル */}
            <div className="flex items-center gap-4">
              <span
                className="text-xl font-medium tracking-widest"
                style={{ color: "var(--veulr-text-secondary)" }}
              >
                {member.name}
              </span>
              <span
                className="text-xs tracking-[0.15em] px-3 py-1 rounded-full border"
                style={{
                  color: member.color,
                  borderColor: `${member.color}55`,
                  background: `${member.color}11`,
                }}
              >
                {member.model}
              </span>
            </div>

            {/* タグライン */}
            <p
              className="text-lg leading-relaxed max-w-md border-l-2 pl-5"
              style={{
                color: "var(--veulr-text-secondary)",
                borderColor: member.color,
                fontStyle: "italic",
              }}
            >
              {member.tagline}
            </p>
          </div>

          {/* Prev / Next ナビ */}
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
        <div className="relative lg:w-[48%] h-[70vw] lg:h-auto order-1 lg:order-2 overflow-hidden">
          <img
            src={`/team/${member.photoSlug}_full.png`}
            alt={member.nameEn}
            className="w-full h-full object-cover object-top"
          />

          {/* 左から暗く（デスクトップ: テキストペインへのブレンド）*/}
          <div
            className="absolute inset-0 z-10 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--veulr-surface-0) 0%, oklch(0.06 0.01 260 / 30%) 30%, transparent 55%)",
            }}
          />

          {/* 上端を暗く */}
          <div
            className="absolute inset-x-0 top-0 h-24 z-10"
            style={{
              background:
                "linear-gradient(to bottom, var(--veulr-surface-0) 0%, transparent 100%)",
            }}
          />

          {/* 下端を暗く（bio セクションへのフェード）*/}
          <div
            className="absolute inset-x-0 bottom-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to top, var(--veulr-surface-0) 0%, transparent 100%)",
            }}
          />

          {/* スマホ: 下から暗く（テキストペインとの境界）*/}
          <div
            className="absolute inset-x-0 bottom-0 h-24 z-10 lg:hidden"
            style={{
              background:
                "linear-gradient(to top, var(--veulr-surface-0) 0%, transparent 100%)",
            }}
          />

          {/* メンバーカラーのアンビエントグロー */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 60% 60%, ${member.color}22 0%, transparent 60%)`,
            }}
          />
        </div>
      </section>

      {/* ── Bio セクション ── */}
      <section
        className="py-24 px-6"
        style={{ borderTop: `1px solid ${member.color}33` }}
      >
        <div className="max-w-2xl mx-auto space-y-14">

          {/* バイオ */}
          <div className="space-y-4">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: member.color }}
            >
              Profile
            </p>
            <p
              className="text-lg leading-9"
              style={{ color: "var(--veulr-text-secondary)" }}
            >
              {member.bio}
            </p>
          </div>

          {/* スペシャリティ */}
          <div className="space-y-4">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: member.color }}
            >
              Specialties
            </p>
            <div className="flex flex-wrap gap-3">
              {member.specialties.map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    border: `1px solid ${member.color}66`,
                    color: member.color,
                    background: `${member.color}0d`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* チームに戻る */}
          <div
            className="pt-4"
            style={{ borderTop: "1px solid var(--veulr-surface-border)" }}
          >
            <Link
              href="/team"
              className="text-sm tracking-[0.15em] uppercase hover:text-white transition-colors"
              style={{ color: "var(--veulr-text-muted)" }}
            >
              ← チーム一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
