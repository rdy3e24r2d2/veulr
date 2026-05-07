import Image from "next/image";
import { FileQuestion, UserX, AlertCircle, Clock } from "lucide-react";

const PROBLEMS = [
  {
    icon: FileQuestion,
    title: "ファイルが多すぎる",
    description: "保存場所がバラバラで、どこに何があるかわからない。",
  },
  {
    icon: UserX,
    title: "担当者に聞かないとわからない",
    description: "必要な情報を見つけるまでに、人を介する時間がかかる。",
  },
  {
    icon: AlertCircle,
    title: "最新版が不明",
    description: "どれが最新版なのかわからず、古い情報を使ってしまう。",
  },
  {
    icon: Clock,
    title: "探すだけで時間が消える",
    description: "検索・確認・やり取りの繰り返しで、業務が止まる。",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{ background: "var(--veulr-section-bg)" }}
    >
      {/* 上段: 見出し + 写真 */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* 左: 見出し */}
        <div
          className="flex flex-col justify-center px-10 py-20 lg:px-16 lg:py-24 space-y-5"
          style={{ borderRight: "1px solid var(--veulr-section-border)" }}
        >
          <h2
            className="text-[clamp(1.5rem,3vw+0.5rem,2.5rem)] font-bold leading-tight"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            社内の情報は、
            <br />
            あるのに見つからない。
          </h2>
          <p
            className="text-sm leading-7 max-w-sm"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            多くの会社では、必要な資料がどこかに存在しています。
            でも、探す手間が多すぎる。ファイルが見つけられない、最新版がわからない、
            担当者に聞かないとわからない。その繰り返しが、毎日の時間を奪っています。
          </p>
        </div>

        {/* 右: 写真 */}
        <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
          <Image
            src="/images/problem.jpg"
            alt="書類に埋もれるオフィスワーカー"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* 左からフェード */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--veulr-section-bg) 0%, transparent 40%)",
            }}
          />
          {/* 下からフェード */}
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                "linear-gradient(to top, var(--veulr-section-bg) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* 下段: 4カード */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: "1px solid var(--veulr-section-border)" }}
      >
        {PROBLEMS.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className="px-8 py-10 space-y-4"
            style={{
              borderRight:
                i < PROBLEMS.length - 1
                  ? "1px solid var(--veulr-section-border)"
                  : undefined,
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--veulr-accent-bg-soft)",
                border: "1px solid var(--veulr-accent-border-soft)",
              }}
            >
              <Icon size={20} style={{ color: "var(--veulr-accent-primary)" }} />
            </div>
            <p
              className="font-semibold text-sm"
              style={{ color: "var(--veulr-text-primary)" }}
            >
              {title}
            </p>
            <p
              className="text-xs leading-5"
              style={{ color: "var(--veulr-text-secondary)" }}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
