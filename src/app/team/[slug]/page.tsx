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

      {/* ── Hero ── */}
      <section className="relative flex flex-col lg:flex-row lg:min-h-screen overflow-hidden">

        {/* 写真ペイン（モバイル: 上, デスクトップ: 右）*/}
        <div className="relative w-full h-[72vw] min-h-[280px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[48%] lg:h-auto overflow-hidden order-1 lg:order-2">
          <img
            src={`/team/${member.photoSlug}_full.png`}
            alt={member.nameEn}
            className="w-full h-full object-cover object-top"
          />
          {/* デスクトップ: 左エッジブレンド */}
          <div
            className="absolute inset-0 z-10 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--veulr-surface-0) 0%, transparent 40%)",
            }}
          />
          {/* 上端 */}
          <div
            className="absolute inset-x-0 top-0 h-20 z-10"
            style={{ background: "linear-gradient(to bottom, var(--veulr-surface-0), transparent)" }}
          />
          {/* 下端フェード */}
          <div
            className="absolute inset-x-0 bottom-0 h-28 z-10"
            style={{ background: "linear-gradient(to top, var(--veulr-surface-0), transparent)" }}
          />
          {/* カラーグロー */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 60% 60%, ${member.color}22 0%, transparent 60%)` }}
          />
        </div>

        {/* テキストペイン（モバイル: 下, デスクトップ: 左）*/}
        <div className="relative z-10 w-full lg:w-[52%] flex flex-col gap-8 px-5 pt-6 pb-10 lg:px-16 lg:py-20 order-2 lg:order-1">

          {/* 戻るリンク */}
          <Link
            href="/#team"
            className="text-xs tracking-[0.2em] uppercase hover:text-white transition-colors self-start"
            style={{ color: "var(--veulr-text-muted)" }}
          >
            ← Team
          </Link>

          {/* メイン情報 */}
          <div className="space-y-5">
            <GlowBadge color={member.color} size="md">{member.role}</GlowBadge>

            {/* 英語名 */}
            <h1
              className="font-bold leading-none tracking-tighter"
              style={{
                fontSize: "clamp(2.2rem, 8vw, 6rem)",
                color: "var(--veulr-text-primary)",
              }}
            >
              {member.nameEn}
            </h1>

            {/* 日本語名 + モデル */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="text-lg font-medium tracking-widest"
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
              className="text-base leading-relaxed max-w-md border-l-2 pl-4"
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
          <nav className="flex justify-between items-center pt-2">
            {prev ? (
              <Link
                href={`/team/${prev.slug}`}
                style={{ color: "var(--veulr-text-muted)" }}
                className="text-sm hover:text-white transition-colors py-2 pr-4"
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
                className="text-sm hover:text-white transition-colors py-2 pl-4"
              >
                {next.nameEn} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </section>

      {/* ── Bio セクション ── */}
      <section
        className="py-12 px-5 lg:py-24 lg:px-6"
        style={{ borderTop: `1px solid ${member.color}33` }}
      >
        <div className="max-w-2xl mx-auto space-y-10 lg:space-y-14">

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

          {/* 趣味・関心 */}
          <div className="space-y-4">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: member.color }}
            >
              Hobbies &amp; Interests
            </p>
            <ul className="space-y-2">
              {member.hobbies.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  <span
                    className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: member.color }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* 休日の過ごし方 */}
          <div
            className="space-y-4 rounded-2xl p-6"
            style={{ background: `${member.color}0a`, border: `1px solid ${member.color}22` }}
          >
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: member.color }}
            >
              Weekend
            </p>
            <p
              className="text-sm leading-8"
              style={{ color: "var(--veulr-text-secondary)" }}
            >
              {member.weekend}
            </p>
          </div>

          {/* 最近気になっていること */}
          <div className="space-y-4">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: member.color }}
            >
              Recently on my mind
            </p>
            <p
              className="text-sm leading-8 border-l-2 pl-5"
              style={{
                color: "var(--veulr-text-secondary)",
                borderColor: `${member.color}66`,
              }}
            >
              {member.recentInterest}
            </p>
          </div>

          {/* チームに戻る */}
          <div
            className="pt-4"
            style={{ borderTop: "1px solid var(--veulr-surface-border)" }}
          >
            <Link
              href="/#team"
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
