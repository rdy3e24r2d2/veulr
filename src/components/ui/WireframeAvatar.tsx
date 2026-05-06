interface WireframeAvatarProps {
  memberColor: string;
  size?: number;
  className?: string;
}

export default function WireframeAvatar({
  memberColor,
  size = 80,
  className = "",
}: WireframeAvatarProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={Math.round(size * 140 / 120)}
      style={{ color: memberColor }}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id={`glow-${memberColor.replace(/[^a-zA-Z0-9]/g, "")}`}>
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 頭部外形 */}
      <ellipse cx="60" cy="52" rx="36" ry="42" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />

      {/* 輪郭メッシュライン */}
      <line x1="60" y1="10" x2="24" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="60" y1="10" x2="96" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="60" y1="10" x2="60" y2="94" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
      <line x1="24" y1="52" x2="96" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="24" y1="30" x2="96" y2="30" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
      <line x1="24" y1="73" x2="96" y2="73" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
      <line x1="30" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="0.4" opacity="0.12" />
      <line x1="30" y1="85" x2="90" y2="85" stroke="currentColor" strokeWidth="0.4" opacity="0.12" />

      {/* 斜めメッシュ */}
      <line x1="24" y1="30" x2="60" y2="52" stroke="currentColor" strokeWidth="0.4" opacity="0.18" />
      <line x1="96" y1="30" x2="60" y2="52" stroke="currentColor" strokeWidth="0.4" opacity="0.18" />
      <line x1="24" y1="73" x2="60" y2="52" stroke="currentColor" strokeWidth="0.4" opacity="0.18" />
      <line x1="96" y1="73" x2="60" y2="52" stroke="currentColor" strokeWidth="0.4" opacity="0.18" />

      {/* 目（ひし形）左 */}
      <polygon
        points="43,50 49,45 55,50 49,55"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.85"
      />
      {/* 目（ひし形）右 */}
      <polygon
        points="65,50 71,45 77,50 71,55"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.85"
      />

      {/* 鼻（三角） */}
      <polygon
        points="60,60 56,70 64,70"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.6"
      />

      {/* 口（弧） */}
      <path
        d="M50 80 Q60 88 70 80"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.72"
        fill="none"
      />

      {/* 顎ライン */}
      <path
        d="M30 70 Q60 96 90 70"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.25"
        fill="none"
      />

      {/* 首 */}
      <line x1="52" y1="94" x2="48" y2="116" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="68" y1="94" x2="72" y2="116" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="48" y1="116" x2="72" y2="116" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />

      {/* 肩ライン */}
      <line x1="20" y1="130" x2="48" y2="116" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
      <line x1="100" y1="130" x2="72" y2="116" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
      <line x1="20" y1="130" x2="100" y2="130" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />

      {/* グローオーバーレイ（主要特徴のみ再描画） */}
      <g
        filter={`url(#glow-${memberColor.replace(/[^a-zA-Z0-9]/g, "")})`}
        opacity="0.5"
      >
        <polygon points="43,50 49,45 55,50 49,55" stroke="currentColor" strokeWidth="1.2" />
        <polygon points="65,50 71,45 77,50 71,55" stroke="currentColor" strokeWidth="1.2" />
        <path d="M50 80 Q60 88 70 80" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </g>
    </svg>
  );
}
