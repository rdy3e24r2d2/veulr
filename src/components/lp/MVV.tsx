import Image from "next/image";

const VALUES = [
  {
    num: "01",
    title: "シンプル",
    description:
      "本質だけを残す。方程式のように少ない要素で大きな応用を作る。",
  },
  {
    num: "02",
    title: "感動",
    description:
      '"満足" で止まらない。使い初めた瞬間に "すごい" と言わせる。',
  },
  {
    num: "03",
    title: "スピード",
    description: "対応も改善も早く。顧客の時間を守り、時間を返す。",
  },
  {
    num: "04",
    title: "伴走支援",
    description:
      "経営目線、現場の立場の両方の視点から改善する。",
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
          className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-32 order-2 lg:order-1"
          style={{ borderRight: "1px solid var(--veulr-surface-border)" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium mb-8"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Mission
          </p>
          <h2
            id="mvv-mission-heading"
            className="font-bold leading-[1.15] mb-8"
            style={{
              fontSize: "clamp(2.5rem, 5vw + 1rem, 4rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            AI で生活を
            <br />
            もっと便利に。
          </h2>
          <p
            className="text-base leading-8 max-w-md"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            仕事も生活の一部。AI を使って、働く毎日から日常まで、
            面倒を取り除き、時間を取り戻す。
          </p>
        </div>

        {/* Image */}
        <div className="relative h-72 lg:h-auto min-h-[400px] order-1 lg:order-2 overflow-hidden">
          <Image
            src="/mvv/mission.png"
            alt="Mission — AI で生活をもっと便利に"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--veulr-surface-0) 0%, transparent 50%)",
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
        <div className="relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
          <Image
            src="/mvv/vision.png"
            alt="Vision — AI が身近に居る世界へ"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, var(--veulr-surface-1) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Text */}
        <div
          className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-32"
          style={{ borderLeft: "1px solid var(--veulr-surface-border)" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium mb-8"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Vision
          </p>
          <h2
            className="font-bold leading-[1.15] mb-8"
            style={{
              fontSize: "clamp(2.5rem, 5vw + 1rem, 4rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            AI が身近に
            <br />
            居る世界へ。
          </h2>
          <p
            className="text-base leading-8 max-w-md"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            すべての人に "AI 活用が当たり前" を広げる。
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
            className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            Values
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(2rem, 4vw + 0.5rem, 3rem)",
              color: "var(--veulr-text-primary)",
            }}
          >
            行動を導く、4つの原則。
          </h2>
        </div>

        {/* Values 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {VALUES.map((v, i) => {
            const isLeft = i % 2 === 0;
            const isTop = i < 2;
            return (
              <div
                key={v.num}
                className="relative overflow-hidden px-8 py-12 lg:px-12 lg:py-14"
                style={{
                  borderRight: isLeft
                    ? "1px solid var(--veulr-surface-border)"
                    : undefined,
                  borderBottom: isTop
                    ? "1px solid var(--veulr-surface-border)"
                    : undefined,
                }}
              >
                {/* Large background number */}
                <span
                  className="absolute top-4 right-6 font-bold leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(5rem, 10vw, 8rem)",
                    color: "var(--veulr-accent-primary)",
                    opacity: 0.12,
                  }}
                  aria-hidden="true"
                >
                  {v.num}
                </span>

                {/* Number label */}
                <p
                  className="text-xs tracking-[0.25em] uppercase font-medium mb-5"
                  style={{ color: "var(--veulr-accent-primary)" }}
                >
                  {v.num}
                </p>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--veulr-text-primary)" }}
                >
                  {v.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-7 max-w-xs"
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
