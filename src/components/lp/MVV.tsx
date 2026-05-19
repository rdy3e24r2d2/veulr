import Image from "next/image";

export default function MVV() {
  return (
    <section style={{ background: "var(--veuler-surface-0)" }}>

      {/* ── Mission ── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ borderBottom: "1px solid var(--veuler-surface-border)" }}
      >
        {/* テキスト */}
        <div
          className="flex flex-col justify-center px-10 py-20 lg:px-16 lg:py-28 space-y-6 order-2 lg:order-1"
          id="mission"
          style={{ borderRight: "1px solid var(--veuler-surface-border)" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--veuler-accent-primary)" }}
          >
            Mission
          </p>
          <h2
            className="font-bold leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)",
              color: "var(--veuler-text-primary)",
            }}
          >
            AI で生活を
            <br />
            もっと便利に。
          </h2>
          <p
            className="text-sm leading-7 max-w-sm"
            style={{ color: "var(--veuler-text-secondary)" }}
          >
            仕事も生活の一部。AI を使って、働く毎日から日常まで、
            面倒を取り除き、時間を取り戻す。
          </p>
        </div>

        {/* 写真 */}
        <div className="relative h-72 lg:h-auto min-h-[360px] order-1 lg:order-2 overflow-hidden">
          <Image
            src="/mvv/mission.jpg"
            alt="Mission — AI で生活をもっと便利に"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* ── Vision ── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ borderBottom: "1px solid var(--veuler-surface-border)" }}
      >
        {/* 写真 */}
        <div className="relative h-72 lg:h-auto min-h-[360px] overflow-hidden">
          <Image
            src="/mvv/vision.jpg"
            alt="Vision — AI が身近に居る世界へ"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* テキスト */}
        <div
          className="flex flex-col justify-center px-10 py-20 lg:px-16 lg:py-28 space-y-6"
          id="vision"
          style={{
            background: "var(--veuler-surface-1)",
            borderLeft: "1px solid var(--veuler-surface-border)",
          }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--veuler-accent-primary)" }}
          >
            Vision
          </p>
          <h2
            className="font-bold leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)",
              color: "var(--veuler-text-primary)",
            }}
          >
            AI が身近に
            <br />
            居る世界へ。
          </h2>
          <p
            className="text-sm leading-7 max-w-sm"
            style={{ color: "var(--veuler-text-secondary)" }}
          >
            すべての人に "AI 活用が当たり前" を広げる。
          </p>
        </div>
      </div>
    </section>
  );
}
