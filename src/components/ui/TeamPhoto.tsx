"use client";

import { useState } from "react";

interface TeamPhotoProps {
  photoSlug: string;
  nameEn: string;
  name: string;
  color: string;
  variant: "bust" | "full";
  className?: string;
}

function InitialAvatar({
  name,
  nameEn,
  color,
  className,
}: {
  name: string;
  nameEn: string;
  color: string;
  className?: string;
}) {
  const initial = nameEn.charAt(0).toUpperCase();
  return (
    <div
      className={`flex items-center justify-center w-full h-full ${className ?? ""}`}
      style={{ background: `${color}18` }}
    >
      <span
        className="font-bold select-none"
        style={{
          fontSize: "clamp(3rem, 12vw, 8rem)",
          color: color,
          opacity: 0.85,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.02em",
        }}
        aria-label={name}
      >
        {initial}
      </span>
    </div>
  );
}

/** バスト写真 + full写真のホバー切替。画像が存在しない場合はイニシャルアバターを表示。 */
export function TeamPhotoCard({
  photoSlug,
  nameEn,
  name,
  color,
}: Omit<TeamPhotoProps, "variant" | "className">) {
  const [bustError, setBustError] = useState(false);
  const [fullError, setFullError] = useState(false);

  const showFallback = bustError && fullError;

  return (
    <>
      {showFallback ? (
        <InitialAvatar name={name} nameEn={nameEn} color={color} />
      ) : (
        <>
          <img
            src={`/team/${photoSlug}_bust.png`}
            alt={nameEn}
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            onError={() => setBustError(true)}
          />
          <img
            src={`/team/${photoSlug}_full.png`}
            alt={`${nameEn} full`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            onError={() => setFullError(true)}
          />
        </>
      )}
    </>
  );
}

/** 詳細ページ用 full 写真。画像がない場合はイニシャルアバター。 */
export function TeamPhotoFull({
  photoSlug,
  nameEn,
  name,
  color,
}: Omit<TeamPhotoProps, "variant" | "className">) {
  const [error, setError] = useState(false);

  if (error) {
    return <InitialAvatar name={name} nameEn={nameEn} color={color} />;
  }

  return (
    <img
      src={`/team/${photoSlug}_full.png`}
      alt={nameEn}
      className="w-full h-full object-cover object-top"
      onError={() => setError(true)}
    />
  );
}
