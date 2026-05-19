"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  value: number;
  suffix: string;
  unit: string;
  label: string;
  trigger: boolean;
}

function StatItem({ value, suffix, unit, label, trigger }: StatItemProps) {
  const count = useCountUp(value, 2000, trigger);

  return (
    <div className="flex flex-col items-center gap-2">
      <dt className="flex items-baseline gap-1">
        <span
          className="font-mono font-bold text-[clamp(2.5rem,5vw,4rem)]"
          style={{ color: "var(--veuler-text-primary)" }}
        >
          {count}
          {suffix}
        </span>
        {unit && (
          <span
            className="text-lg"
            style={{ color: "var(--veuler-text-secondary)" }}
          >
            {unit}
          </span>
        )}
      </dt>
      <dd
        className="text-sm font-medium tracking-wide"
        style={{ color: "var(--veuler-text-secondary)" }}
      >
        {label}
      </dd>
    </div>
  );
}

const STATS = [
  { value: 10, suffix: "", unit: "", label: "AI Members" },
  { value: 24, suffix: "h", unit: "/day", label: "稼働時間" },
  { value: 100, suffix: "%", unit: "", label: "AI Operated" },
];

export default function Proof() {
  const { ref, inView } = useInView<HTMLElement>(0.3);

  return (
    <section
      ref={ref}
      className="py-20"
      style={{
        background: "var(--veuler-surface-0)",
        borderTop: "1px solid var(--veuler-surface-border)",
        borderBottom: "1px solid var(--veuler-surface-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} trigger={inView} />
          ))}
        </dl>
      </div>
    </section>
  );
}
