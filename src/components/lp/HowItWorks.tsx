import { Link2, Search, Lightbulb } from "lucide-react";

const STEPS = [
  {
    num: "1",
    icon: Link2,
    title: "つなぐ",
    description: "社内ドキュメントを安全に連携します。",
    detail: "Google Drive・Notion・社内サーバーなど複数ソースに対応。",
  },
  {
    num: "2",
    icon: Search,
    title: "探す",
    description: "自然な言葉で展開します。",
    detail: "「退職時の PC 返却ルールを教えて」のように話しかけるだけ。",
  },
  {
    num: "3",
    icon: Lightbulb,
    title: "使う",
    description: "必要な情報、根拠、次の行動を確認できます。",
    detail: "要約・参照元・関連文書まで一覧で提示。判断が速くなる。",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 px-6"
      style={{ background: "oklch(0.97 0 0)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium mb-4"
            style={{ color: "oklch(0.55 0.22 280)" }}
          >
            How it works
          </p>
          <h2
            className="text-[clamp(1.5rem,3vw+0.5rem,2.5rem)] font-bold"
            style={{ color: "oklch(0.12 0 0)" }}
          >
            いつものファイルが、話しかけられる知識になる。
          </h2>
        </div>

        {/* ステップ 3列 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-center text-center px-8">
                {/* 矢印（最後以外）*/}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute right-0 top-12 translate-x-1/2 z-10 text-lg font-light"
                    style={{ color: "oklch(0.6 0 0)" }}
                  >
                    →
                  </div>
                )}

                {/* ステップ番号バッジ */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-lg font-bold"
                  style={{
                    background: "oklch(0.55 0.22 280 / 12%)",
                    border: "1px solid oklch(0.55 0.22 280 / 30%)",
                    color: "oklch(0.55 0.22 280)",
                  }}
                >
                  {step.num}
                </div>

                {/* アイコン */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{
                    background: "#ffffff",
                    border: "1px solid oklch(0.88 0 0)",
                    boxShadow: "0 1px 4px oklch(0 0 0 / 8%)",
                  }}
                >
                  <Icon size={24} style={{ color: "oklch(0.55 0.22 280)" }} />
                </div>

                <div className="space-y-2">
                  <p
                    className="font-bold text-lg"
                    style={{ color: "oklch(0.12 0 0)" }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.35 0 0)" }}
                  >
                    {step.description}
                  </p>
                  <p
                    className="text-xs leading-5"
                    style={{ color: "oklch(0.5 0 0)" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
