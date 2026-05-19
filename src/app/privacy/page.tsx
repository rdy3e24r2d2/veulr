import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | VEULER",
};

export default function PrivacyPage() {
  return (
    <main
      className="max-w-2xl mx-auto px-6 py-20"
      style={{ background: "var(--veuler-surface-0)", minHeight: "100vh" }}
    >
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm transition-colors duration-200"
          style={{ color: "var(--veuler-accent-primary)" }}
        >
          ← トップへ戻る
        </Link>
      </div>

      <h1
        className="text-2xl font-bold mb-10"
        style={{ color: "var(--veuler-text-primary)" }}
      >
        プライバシーポリシー
      </h1>

      <div className="space-y-10 text-sm leading-7" style={{ color: "var(--veuler-text-primary)" }}>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            1. 事業者
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            tanaka（屋号: Veuler）は、Document Finder（documentfinder.jp）をはじめとするサービス（以下「本サービス」）を提供するにあたり、利用者の個人情報を適切に取り扱います。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            2. 収集する個人情報
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            本サービスでは、以下の個人情報を収集することがあります。
          </p>
          <ul className="mt-3 space-y-1 list-disc list-inside" style={{ color: "var(--veuler-text-secondary)" }}>
            <li>氏名またはユーザー名</li>
            <li>メールアドレス</li>
            <li>決済情報（クレジットカード番号等。決済代行会社 Stripe を通じて処理し、当社は保持しません）</li>
            <li>アクセスログ・IPアドレス・ブラウザ情報等の技術情報</li>
            <li>お問い合わせ時にご提供いただいた情報</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            3. 利用目的
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            収集した個人情報は、以下の目的で利用します。
          </p>
          <ul className="mt-3 space-y-1 list-disc list-inside" style={{ color: "var(--veuler-text-secondary)" }}>
            <li>本サービスの提供・運営・改善</li>
            <li>ご利用料金の請求・決済処理</li>
            <li>お問い合わせへの対応</li>
            <li>サービスに関する重要なお知らせの送付</li>
            <li>利用規約違反の調査・対応</li>
            <li>アクセス状況の分析によるサービス改善</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            4. 第三者への提供
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            当社は、法令に基づく場合を除き、利用者の個人情報を事前の同意なく第三者に提供しません。ただし、以下の外部サービスを利用しており、それぞれのプライバシーポリシーに従い情報が処理されます。
          </p>
          <ul className="mt-3 space-y-1 list-disc list-inside" style={{ color: "var(--veuler-text-secondary)" }}>
            <li>Stripe（決済処理）— <a href="https://stripe.com/jp/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "var(--veuler-accent-primary)" }}>stripe.com/jp/privacy</a></li>
            <li>Google（アクセス解析・インフラ）— <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "var(--veuler-accent-primary)" }}>policies.google.com/privacy</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            5. 安全管理措置
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            当社は、個人情報の漏洩・滅失・毀損を防ぐため、適切なアクセス制御・暗号化・セキュリティ監視等の技術的・組織的措置を講じます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            6. 開示・訂正・削除の請求
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            利用者は、当社が保有する自己の個人情報について、開示・訂正・削除・利用停止を請求できます。ご請求は下記の問い合わせ窓口までメールにてお申し付けください。本人確認を行った上で、合理的な期間内に対応します。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            7. Cookie・アクセス解析
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            本サービスは、Cookie およびこれに類する技術を使用してアクセス状況を解析し、サービスの改善に役立てています。ブラウザの設定により Cookie を無効にすることができますが、一部の機能が利用できなくなる場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            8. ポリシーの改定
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            本ポリシーは、法令の改正やサービスの変更に伴い、予告なく改定することがあります。重要な変更がある場合は、本サービス上または登録メールアドレス宛にお知らせします。改定後も本サービスを継続してご利用いただいた場合、改定後のポリシーに同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: "var(--veuler-text-primary)" }}>
            9. お問い合わせ窓口
          </h2>
          <p style={{ color: "var(--veuler-text-secondary)" }}>
            個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
          </p>
          <address className="mt-3 not-italic space-y-1" style={{ color: "var(--veuler-text-secondary)" }}>
            <p>tanaka（屋号: Veuler）</p>
            <p>愛知県岩倉市大地町葉広64-2</p>
            <p>
              メール:{" "}
              <a
                href="mailto:info@veuler.com"
                className="underline underline-offset-2"
                style={{ color: "var(--veuler-accent-primary)" }}
              >
                info@veuler.com
              </a>
            </p>
          </address>
        </section>
      </div>

      <p
        className="mt-12 text-xs"
        style={{ color: "var(--veuler-text-muted)" }}
      >
        制定日: 2026年5月6日
      </p>
    </main>
  );
}
