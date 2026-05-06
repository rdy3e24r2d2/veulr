import Image from "next/image";

const VALUES_DETAIL = [
  {
    title: "AI First",
    description:
      "すべての判断・作業において、まず AI の活用を検討する。人間は意思決定と創造に集中する。",
  },
  {
    title: "透明性",
    description:
      "プロセス・数字・意図を公開する。隠蔽は信頼を壊す。オープンであることが持続の基盤。",
  },
  {
    title: "本質追求",
    description:
      "表層の解決策より根本原因を問う。削れるものは削る。残ったものだけが本当に必要なもの。",
  },
  {
    title: "永続改善",
    description:
      "完成はない。毎日 1% の改善を積み重ねる。現状維持は後退と同義だと知っている。",
  },
  {
    title: "小さく速く",
    description:
      "大きな計画より小さな実行。仮説は最速でテストする。スピードは戦略であり、規律でもある。",
  },
  {
    title: "データドリブン",
    description:
      "感覚より数字。意見より事実。計測できないものは改善できない。まず測ることを習慣にする。",
  },
];

export default function MVV() {
  return (
    <section
      id="mission"
      aria-labelledby="mvv-mission-heading"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      {/* ---- Mission ---- */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ borderBottom: "1px solid var(--veulr-surface-border)" }}
      >
        {/* Text */}
        <div
          className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-28 order-2 lg:order-1"
          style={{ borderRight: "1px solid var(--veulr-surface-border)" }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium mb-6"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Mission
          </p>
          <h2
            id="mvv-mission-heading"
            className="text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-bold leading-tight mb-6"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            AI が身近に居る世界をつくる。
          </h2>
          <p
            className="text-base leading-8 max-w-md"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            テクノロジーの恩恵は、特権ではなく日常であるべきだ。
            VEULR は、あらゆる業務に AI を組み込み、誰もが AI と自然に協働できる
            インフラを設計・運用する。
          </p>
        </div>

        {/* Image */}
        <div className="relative h-72 lg:h-auto min-h-[360px] order-1 lg:order-2 overflow-hidden">
          <Image
            src="/mvv/mission.png"
            alt="Mission — AI が身近に居る世界"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--veulr-surface-0) 0%, transparent 40%)",
            }}
          />
        </div>
      </div>

      {/* ---- Vision ---- */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{
          background: "var(--veulr-surface-1)",
          borderBottom: "1px solid var(--veulr-surface-border)",
        }}
      >
        {/* Image */}
        <div className="relative h-72 lg:h-auto min-h-[360px] overflow-hidden">
          <Image
            src="/mvv/vision.png"
            alt="Vision — 全ての人が AI と共に働く未来"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, var(--veulr-surface-1) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* Text */}
        <div
          className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-28"
          style={{ borderLeft: "1px solid var(--veulr-surface-border)" }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium mb-6"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Vision
          </p>
          <h2
            className="text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-bold leading-tight mb-6"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            全ての人が AI と共に働く未来。
          </h2>
          <p
            className="text-base leading-8 max-w-md"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            AI はツールではなく、同僚だ。
            人間の判断と AI の処理能力が融合したとき、
            組織は個人を超えた知性を持つ。
            VEULR はその未来を今、自社で実証している。
          </p>
        </div>
      </div>

      {/* ---- Values ---- */}
      <div style={{ background: "var(--veulr-surface-0)" }}>
        {/* Values header */}
        <div
          className="px-8 py-16 lg:px-16 lg:py-20 text-center"
          style={{ borderBottom: "1px solid var(--veulr-surface-border)" }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Values
          </p>
          <h2
            className="text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-bold"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            行動を導く、6つの原則。
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES_DETAIL.map((v, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const totalRows = Math.ceil(VALUES_DETAIL.length / 3);
            const isLastRow = row === totalRows - 1;
            const isLastCol = col === 2;
            return (
              <div
                key={v.title}
                className="px-8 py-10 lg:px-10 lg:py-12 space-y-3"
                style={{
                  borderRight: !isLastCol
                    ? "1px solid var(--veulr-surface-border)"
                    : undefined,
                  borderBottom: !isLastRow
                    ? "1px solid var(--veulr-surface-border)"
                    : undefined,
                }}
              >
                <p
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "var(--veulr-accent-primary)" }}
                >
                  {v.title}
                </p>
                <p
                  className="text-sm leading-7"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
