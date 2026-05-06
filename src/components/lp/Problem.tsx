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
      className="py-24 px-6"
      style={{ background: "var(--veulr-surface-1)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-[clamp(1.5rem,3vw+0.5rem,2.5rem)] font-bold leading-tight"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            社内の情報は、あるのに見つからない。
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            多くの会社では、必要な資料がどこかに存在しています。
            でも、探す手間が多すぎる。それが毎日の悩みです。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: "var(--veulr-surface-2)",
                border: "1px solid var(--veulr-surface-border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "oklch(0.55 0.22 280 / 15%)",
                  border: "1px solid oklch(0.55 0.22 280 / 25%)",
                }}
              >
                <Icon size={20} style={{ color: "var(--veulr-accent-primary)" }} />
              </div>
              <div className="space-y-1.5">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
