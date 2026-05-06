import { TEAM_MEMBERS } from "@/lib/team";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 px-6"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium mb-4"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Team
          </p>
          <h2
            className="text-[clamp(1.5rem,2.5vw+0.5rem,2.25rem)] font-bold"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            AI members building Veulr
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            Veulr は、AI メンバーとともに動く新しい形のチームです。
            役割ごとに専門性を持ち、プロダクト、顧客支援、起業を進めます。
          </p>
        </div>

        {/* 横スクロール対応の1列 */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-6 min-w-max mx-auto justify-center">
            {TEAM_MEMBERS.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.slug}`}
                className="group flex flex-col items-center gap-3 w-24 flex-shrink-0"
              >
                {/* 正円クロップ写真 */}
                <div
                  className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[var(--veulr-accent-primary)] transition-all duration-300 flex-shrink-0"
                  style={{ border: "2px solid var(--veulr-surface-border)" }}
                >
                  <img
                    src={`/team/${member.photoSlug}_bust.png`}
                    alt={member.nameEn}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* テキスト */}
                <div className="text-center space-y-0.5">
                  <p
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: "var(--veulr-text-primary)" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "var(--veulr-text-muted)" }}
                  >
                    {member.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* チーム一覧リンク */}
        <div className="text-center mt-10">
          <Link
            href="/team"
            className="text-sm tracking-[0.1em] hover:text-white transition-colors"
            style={{ color: "var(--veulr-text-muted)" }}
          >
            メンバー紹介を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
