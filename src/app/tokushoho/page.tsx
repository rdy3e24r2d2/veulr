import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | VEULR",
};

const ITEMS = [
  {
    term: "販売事業者の名称",
    description: "tanaka（屋号: Veulr）",
  },
  {
    term: "代表者または責任者",
    description: "tanaka",
  },
  {
    term: "所在地",
    description: "愛知県岩倉市大地町葉広64-2",
  },
  {
    term: "電話番号",
    description:
      "電話番号は保有しておりません。お問い合わせはメールにて対応いたします。",
  },
  {
    term: "メールアドレス",
    description: "rdy3e24r2d2@gmail.com",
  },
  {
    term: "販売 URL",
    description: "https://veulr.com",
  },
  {
    term: "商品の販売価格",
    description: "月額 ¥3,000〜（税込）",
  },
  {
    term: "代金の支払い時期",
    description: "利用開始月の月末（クレジットカード決済）",
  },
  {
    term: "代金の支払い方法",
    description: "クレジットカード",
  },
  {
    term: "商品の引渡し時期",
    description: "申込完了後即時",
  },
  {
    term: "返品・キャンセルの条件",
    description:
      "月途中解約の場合、当月末まで利用可能です。日割り返金は行っておりません。",
  },
];

export default function TokushohoPage() {
  return (
    <main
      className="max-w-2xl mx-auto px-6 py-20"
      style={{ background: "var(--veulr-surface-0)", minHeight: "100vh" }}
    >
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm transition-colors duration-200"
          style={{ color: "var(--veulr-accent-primary)" }}
        >
          ← トップへ戻る
        </Link>
      </div>

      <h1
        className="text-2xl font-bold mb-10"
        style={{ color: "var(--veulr-text-primary)" }}
      >
        特定商取引法に基づく表記
      </h1>

      <dl className="space-y-0">
        {ITEMS.map(({ term, description }) => (
          <div
            key={term}
            className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-4 py-5"
            style={{ borderBottom: "1px solid var(--veulr-surface-border)" }}
          >
            <dt
              className="text-sm font-medium"
              style={{ color: "var(--veulr-text-secondary)" }}
            >
              {term}
            </dt>
            <dd
              className="text-sm leading-6"
              style={{ color: "var(--veulr-text-primary)" }}
            >
              {description}
            </dd>
          </div>
        ))}
      </dl>

      <p
        className="mt-12 text-xs"
        style={{ color: "var(--veulr-text-muted)" }}
      >
        最終更新: 2026年5月6日
      </p>
    </main>
  );
}
