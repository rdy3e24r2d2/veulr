export default function AboutHeader() {
  return (
    <div
      className="relative py-8 px-6 flex items-center gap-6"
      style={{
        background: "var(--veulr-surface-0)",
        borderTop: "2px solid var(--veulr-accent-primary)",
      }}
    >
      <p
        className="text-xs tracking-[0.3em] uppercase font-medium flex-shrink-0"
        style={{ color: "var(--veulr-accent-primary)" }}
      >
        About Veulr
      </p>
      <div
        className="flex-1 h-px"
        style={{ background: "var(--veulr-surface-border)" }}
      />
    </div>
  );
}
