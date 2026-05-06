"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = new URLSearchParams();
    data.append("form-name", "contact");
    data.append("name", formData.get("name") as string);
    data.append("email", formData.get("email") as string);
    data.append("subject", formData.get("subject") as string);
    data.append("message", formData.get("message") as string);
    // honeypot
    const botField = formData.get("bot-field");
    if (botField) {
      data.append("bot-field", botField as string);
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("送信に失敗しました。しばらく経ってから再度お試しください。");
    }
  }

  if (status === "success") {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "var(--veulr-surface-0)" }}
      >
        <div
          className="rounded-2xl p-8 max-w-lg w-full text-center"
          style={{
            background: "var(--veulr-surface-1)",
            border: "1px solid var(--veulr-surface-border)",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--veulr-accent-glow)" }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--veulr-accent-primary)" }}
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1
            className="text-xl font-bold mb-3"
            style={{ color: "var(--veulr-text-primary)" }}
          >
            送信完了
          </h1>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--veulr-text-secondary)" }}
          >
            お問い合わせありがとうございます。
            <br />
            内容を確認のうえ、折り返しご連絡いたします。
          </p>
          <Link
            href="/"
            className="text-sm transition-colors duration-200"
            style={{ color: "var(--veulr-accent-primary)" }}
          >
            ← トップへ戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--veulr-surface-0)" }}
    >
      <div className="max-w-lg mx-auto">
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
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--veulr-text-primary)" }}
        >
          お問い合わせ
        </h1>
        <p
          className="text-sm mb-10"
          style={{ color: "var(--veulr-text-secondary)" }}
        >
          ご質問・ご相談はこちらからお送りください。
        </p>

        <div
          className="rounded-2xl p-8"
          style={{
            background: "var(--veulr-surface-1)",
            border: "1px solid var(--veulr-surface-border)",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {/* honeypot — hidden from real users */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out:{" "}
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="flex flex-col gap-6">
              {/* name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  お名前 <span style={{ color: "var(--veulr-accent-primary)" }}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--veulr-surface-2)",
                    border: "1px solid var(--veulr-surface-border)",
                    color: "var(--veulr-text-primary)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--veulr-accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-surface-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="山田 太郎"
                />
              </div>

              {/* email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  メールアドレス <span style={{ color: "var(--veulr-accent-primary)" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--veulr-surface-2)",
                    border: "1px solid var(--veulr-surface-border)",
                    color: "var(--veulr-text-primary)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--veulr-accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-surface-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="taro@example.com"
                />
              </div>

              {/* subject */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  件名 <span style={{ color: "var(--veulr-accent-primary)" }}>*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--veulr-surface-2)",
                    border: "1px solid var(--veulr-surface-border)",
                    color: "var(--veulr-text-primary)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--veulr-accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-surface-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="サービスについてのご質問"
                />
              </div>

              {/* message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                  style={{ color: "var(--veulr-text-secondary)" }}
                >
                  メッセージ <span style={{ color: "var(--veulr-accent-primary)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 resize-y"
                  style={{
                    background: "var(--veulr-surface-2)",
                    border: "1px solid var(--veulr-surface-border)",
                    color: "var(--veulr-text-primary)",
                    minHeight: "120px",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--veulr-accent-glow)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--veulr-surface-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* error */}
              {status === "error" && (
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.7 0.2 27)" }}
                >
                  {errorMessage}
                </p>
              )}

              {/* submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-11 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "var(--veulr-accent-primary)",
                  color: "oklch(0.96 0 0)",
                }}
                onMouseEnter={(e) => {
                  if (status !== "submitting") {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
              >
                {status === "submitting" ? "送信中..." : "送信する"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
