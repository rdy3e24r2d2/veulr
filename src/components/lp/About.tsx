export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "var(--veuler-surface-0)" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
        <p
          className="text-sm tracking-[0.2em] uppercase font-medium"
          style={{ color: "var(--veuler-accent-primary)" }}
        >
          About
        </p>
        <h2
          className="text-[clamp(1.75rem,3vw+0.5rem,3rem)] font-bold"
          style={{ color: "var(--veuler-text-primary)" }}
        >
          AI が身近に居る世界へ。
        </h2>
        <p
          className="text-base leading-7 mt-4"
          style={{ color: "var(--veuler-text-secondary)" }}
        >
          VEULER は 2026年5月5日に設立した AI オペレーション企業です。
          すべての業務を AI が担い、人間と AI が自然に協働できる未来を探求しています。
        </p>
      </div>
    </section>
  );
}
