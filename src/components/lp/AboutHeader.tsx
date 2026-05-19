export default function AboutHeader() {
  return (
    <div
      className="relative py-8 px-6 flex items-center gap-6"
      style={{
        background: "var(--veuler-surface-0)",
        borderTop: "2px solid var(--veuler-accent-primary)",
      }}
    >
      <p
        className="text-xs tracking-[0.3em] uppercase font-medium flex-shrink-0"
        style={{ color: "var(--veuler-accent-primary)" }}
      >
        About Veuler
      </p>
      <div
        className="flex-1 h-px"
        style={{ background: "var(--veuler-surface-border)" }}
      />
    </div>
  );
}
