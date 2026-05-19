/**
 * HeroVisual — VEULER
 *
 * Concept: 案D「手渡し」
 * Two hands almost touching across a luminous purple gap.
 *  - LEFT  : Human hand — warm skin gradient, individually-drawn fingers,
 *            faint heartbeat pulse along the rim.
 *  - RIGHT : AI hand — same anatomy rendered as a triangulated wireframe
 *            mesh. Binary digits drift along its outer edge.
 *  - GAP   : The focal point. A thin lenticular beam of light bridges
 *            the index fingertips.
 *
 * Each hand is composed from SIX separate paths (palm + 5 fingers) so
 * fingers read as fingers, not as a continuous wavy ridge.
 *
 * Pure SVG + Tailwind utilities + a small <style> block for keyframes.
 * All animations use compositor-friendly properties only
 * (opacity, transform, filter).
 *
 * No "use client" needed — keyframes are CSS, no React state.
 */

const PARTICLES = [
  { cx: 298, cy: 360, r: 1.4, delay: 0, dur: 7.5, drift: -22 },
  { cx: 304, cy: 380, r: 1.0, delay: 1.2, dur: 9, drift: 14 },
  { cx: 310, cy: 410, r: 1.7, delay: 0.6, dur: 8, drift: -10 },
  { cx: 292, cy: 420, r: 0.9, delay: 2.4, dur: 10, drift: 18 },
  { cx: 316, cy: 350, r: 1.2, delay: 3.1, dur: 7, drift: -16 },
  { cx: 286, cy: 395, r: 1.0, delay: 1.8, dur: 11, drift: 8 },
  { cx: 300, cy: 340, r: 0.7, delay: 4.2, dur: 9.5, drift: -6 },
  { cx: 320, cy: 388, r: 1.3, delay: 2.9, dur: 8.5, drift: 22 },
  { cx: 280, cy: 370, r: 0.8, delay: 0.4, dur: 12, drift: -14 },
  { cx: 308, cy: 432, r: 1.1, delay: 3.6, dur: 7.8, drift: 6 },
];

// Binary digits drifting along the AI hand's outer edge.
// Each entry sits near the silhouette and drifts on a staggered cycle.
const BINARY_STREAM = [
  { x: 480, y: 470, ch: "1", delay: 0, dur: 6 },
  { x: 502, y: 432, ch: "0", delay: 0.8, dur: 7 },
  { x: 510, y: 388, ch: "1", delay: 1.5, dur: 6.5 },
  { x: 498, y: 348, ch: "1", delay: 2.2, dur: 8 },
  { x: 478, y: 310, ch: "0", delay: 0.4, dur: 7.5 },
  { x: 458, y: 278, ch: "1", delay: 3.0, dur: 6 },
  { x: 432, y: 256, ch: "0", delay: 1.1, dur: 7 },
  { x: 398, y: 246, ch: "1", delay: 2.6, dur: 8 },
  { x: 372, y: 252, ch: "0", delay: 1.9, dur: 6.5 },
];

export default function HeroVisual() {
  return (
    <div
      className="relative w-full max-w-[600px] aspect-[600/560] mx-auto"
      style={{ perspective: "1200px" }}
      aria-hidden="true"
    >
      <style>{KEYFRAMES}</style>

      {/* Soft outer atmospheric glow — drawn behind the SVG so it bleeds
          into the page background without any hard rectangular edge.
          (This is the SOLE atmospheric glow; Hero.tsx no longer adds one.) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 51%, oklch(0.55 0.22 280 / 30%) 0%, oklch(0.55 0.22 280 / 9%) 30%, transparent 64%)",
          filter: "blur(10px)",
        }}
      />

      <svg
        viewBox="0 0 600 560"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-full hv-stage"
      >
        <defs>
          {/* ── Gradients ───────────────────────────────────────────── */}

          {/* Warm organic skin gradient for the human hand. */}
          <radialGradient id="skin" cx="38%" cy="42%" r="85%">
            <stop offset="0%" stopColor="oklch(0.84 0.05 60)" />
            <stop offset="55%" stopColor="oklch(0.72 0.07 48)" />
            <stop offset="100%" stopColor="oklch(0.5 0.07 32)" />
          </radialGradient>

          {/* Purple-side rim shading on the human hand (kisses the gap). */}
          <linearGradient id="skin-rim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 280 / 0%)" />
            <stop offset="80%" stopColor="oklch(0.55 0.22 280 / 0%)" />
            <stop offset="100%" stopColor="oklch(0.78 0.2 290 / 70%)" />
          </linearGradient>

          {/* AI hand interior — almost invisible, just enough to read mass. */}
          <linearGradient id="ai-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.16 0.04 280 / 75%)" />
            <stop offset="100%" stopColor="oklch(0.08 0.02 280 / 92%)" />
          </linearGradient>

          {/* Edge glow on the AI lattice strokes. */}
          <linearGradient id="ai-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.88 0.16 290)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 280)" />
          </linearGradient>

          {/* Lenticular beam — narrow, very bright at center, soft falloff. */}
          <linearGradient id="beam-core" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 280 / 0%)" />
            <stop offset="35%" stopColor="oklch(0.85 0.2 290 / 55%)" />
            <stop offset="50%" stopColor="oklch(0.99 0.05 295 / 100%)" />
            <stop offset="65%" stopColor="oklch(0.85 0.2 290 / 55%)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 280 / 0%)" />
          </linearGradient>

          {/* Soft purple wash that anchors the gap. */}
          <radialGradient id="gap-wash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.2 290 / 70%)" />
            <stop offset="35%" stopColor="oklch(0.55 0.22 280 / 28%)" />
            <stop offset="100%" stopColor="oklch(0.4 0.2 280 / 0%)" />
          </radialGradient>

          {/* ── Filters ─────────────────────────────────────────────── */}

          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="hard-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.4" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="b2" />
            <feMerge>
              <feMergeNode in="b1" />
              <feMergeNode in="b2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft light wrap around silhouettes. */}
          <filter id="rim-light" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>

        {/* ───────────────────────────────────────────────────────────
            BACKDROP CIRCLE — a faint dark vignette anchoring the piece.
           ─────────────────────────────────────────────────────────── */}
        <circle
          cx="300"
          cy="280"
          r="260"
          fill="oklch(0.07 0.02 270 / 70%)"
          opacity="0.55"
        />

        {/* ───────────────────────────────────────────────────────────
            HUMAN HAND (left, reaching right with index extended).
            Composed of: palm + thumb + 4 finger paths.
           ─────────────────────────────────────────────────────────── */}
        <g
          className="hv-hand-human"
          style={{ transformOrigin: "150px 360px" }}
        >
          {/* warm cast shadow */}
          <g transform="translate(4 8)" opacity="0.5" filter="url(#rim-light)">
            <path d={H_PALM} fill="oklch(0.05 0.02 280)" />
            <path d={H_THUMB} fill="oklch(0.05 0.02 280)" />
            <path d={H_PINKY} fill="oklch(0.05 0.02 280)" />
            <path d={H_RING} fill="oklch(0.05 0.02 280)" />
            <path d={H_MIDDLE} fill="oklch(0.05 0.02 280)" />
            <path d={H_INDEX} fill="oklch(0.05 0.02 280)" />
          </g>

          {/* palm + curled fingers (drawn back-to-front so index reads on top) */}
          <path d={H_PALM} fill="url(#skin)" />
          <path d={H_THUMB} fill="url(#skin)" />
          <path d={H_PINKY} fill="url(#skin)" />
          <path d={H_RING} fill="url(#skin)" />
          <path d={H_MIDDLE} fill="url(#skin)" />
          <path d={H_INDEX} fill="url(#skin)" />

          {/* Knuckle valleys — thin shadow lines BETWEEN fingers,
              now landing on real geometry. */}
          <path
            d="M 152 312 L 148 296"
            stroke="oklch(0.32 0.05 30 / 60%)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M 174 308 L 175 290"
            stroke="oklch(0.32 0.05 30 / 60%)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M 196 308 L 200 292"
            stroke="oklch(0.32 0.05 30 / 60%)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />

          {/* Heartbeat pulse — a soft warm glow that breathes along the
              outer index-finger rim. Layered behind to avoid masking detail. */}
          <path
            d={H_INDEX}
            fill="none"
            stroke="oklch(0.92 0.1 60 / 55%)"
            strokeWidth="2"
            className="hv-heartbeat"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Purple rim-light kissing the index fingertip (gap-side). */}
          <path
            d="M 232 268 Q 246 268 252 276 Q 248 286 238 286 Q 230 280 232 268 Z"
            fill="oklch(0.85 0.18 290 / 65%)"
            filter="url(#hard-glow)"
            style={{ mixBlendMode: "screen" }}
          />
        </g>

        {/* ───────────────────────────────────────────────────────────
            AI HAND (right, reaching left with index extended).
            Built as triangulated polygons over the same anatomy.
           ─────────────────────────────────────────────────────────── */}
        <g
          className="hv-hand-ai"
          style={{ transformOrigin: "450px 360px" }}
        >
          {/* faint shadow plate (full silhouette) */}
          <g transform="translate(-3 7)" opacity="0.55">
            <path d={A_PALM} fill="oklch(0.04 0.02 280)" />
            <path d={A_THUMB} fill="oklch(0.04 0.02 280)" />
            <path d={A_PINKY} fill="oklch(0.04 0.02 280)" />
            <path d={A_RING} fill="oklch(0.04 0.02 280)" />
            <path d={A_MIDDLE} fill="oklch(0.04 0.02 280)" />
            <path d={A_INDEX} fill="oklch(0.04 0.02 280)" />
          </g>

          {/* dark interior so the triangulation reads on top */}
          <path d={A_PALM} fill="url(#ai-fill)" />
          <path d={A_THUMB} fill="url(#ai-fill)" />
          <path d={A_PINKY} fill="url(#ai-fill)" />
          <path d={A_RING} fill="url(#ai-fill)" />
          <path d={A_MIDDLE} fill="url(#ai-fill)" />
          <path d={A_INDEX} fill="url(#ai-fill)" />

          {/* triangulated mesh — one polygon per face. No fill, just stroke. */}
          <g
            stroke="oklch(0.55 0.22 280)"
            strokeWidth="0.7"
            strokeLinejoin="round"
            fill="none"
            opacity="0.9"
          >
            {AI_TRIANGLES.map((pts, i) => (
              <polygon key={i} points={pts} />
            ))}
          </g>

          {/* glowing finger outlines on top */}
          <g
            stroke="url(#ai-edge)"
            strokeWidth="1.3"
            strokeLinejoin="round"
            fill="none"
            filter="url(#hard-glow)"
          >
            <path d={A_PALM} />
            <path d={A_THUMB} />
            <path d={A_PINKY} />
            <path d={A_RING} />
            <path d={A_MIDDLE} />
            <path d={A_INDEX} />
          </g>

          {/* node dots at lattice vertices */}
          <g className="hv-nodes">
            {AI_NODES.map((n, i) => (
              <circle
                key={i}
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="oklch(0.95 0.12 290)"
                style={{
                  animationDelay: `${(i % 7) * 0.35}s`,
                }}
                className="hv-node"
              />
            ))}
          </g>

          {/* purple rim-light on the AI fingertip (gap-side) */}
          <path
            d="M 368 268 Q 354 268 348 276 Q 352 286 362 286 Q 370 280 368 268 Z"
            fill="oklch(0.9 0.2 290 / 70%)"
            filter="url(#hard-glow)"
            style={{ mixBlendMode: "screen" }}
          />

          {/* binary digits drifting along the silhouette edge */}
          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="9"
            fill="oklch(0.85 0.15 290 / 80%)"
            className="hv-binary-group"
            style={{ mixBlendMode: "screen" }}
          >
            {BINARY_STREAM.map((b, i) => (
              <text
                key={i}
                x={b.x}
                y={b.y}
                className="hv-binary"
                style={{
                  animationDelay: `${b.delay}s`,
                  animationDuration: `${b.dur}s`,
                }}
              >
                {b.ch}
              </text>
            ))}
          </g>
        </g>

        {/* ───────────────────────────────────────────────────────────
            GAP LIGHT — narrow lenticular beam between the fingertips.
            Drawn AFTER both hands, with mix-blend-mode: screen so it
            adds to the silhouettes rather than obscuring them.
           ─────────────────────────────────────────────────────────── */}
        <g
          className="hv-bloom"
          style={{
            mixBlendMode: "screen",
            transformOrigin: "300px 280px",
          }}
        >
          {/* soft purple wash anchoring the gap (kept tight). */}
          <ellipse
            cx="300"
            cy="280"
            rx="58"
            ry="36"
            fill="url(#gap-wash)"
          />
          {/* thin lenticular beam — wide horizontal, narrow vertical. */}
          <ellipse
            cx="300"
            cy="280"
            rx="78"
            ry="3.2"
            fill="url(#beam-core)"
          />
          {/* even thinner inner beam, near-white */}
          <ellipse
            cx="300"
            cy="280"
            rx="54"
            ry="1.1"
            fill="oklch(0.99 0.04 295)"
          />
        </g>

        {/* Bright pinpoint at the dead centre of the gap. */}
        <circle
          cx="300"
          cy="280"
          r="2.4"
          fill="oklch(0.99 0.04 295)"
          filter="url(#hard-glow)"
          className="hv-spark"
          style={{ mixBlendMode: "screen" }}
        />

        {/* ───────────────────────────────────────────────────────────
            FLOATING PARTICLES drifting upward through the gap.
            (Kept; orbital rings + bridge dots removed.)
           ─────────────────────────────────────────────────────────── */}
        <g filter="url(#soft-glow)" style={{ mixBlendMode: "screen" }}>
          {PARTICLES.map((p, i) => (
            <circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill="oklch(0.94 0.14 295 / 90%)"
              className="hv-particle"
              style={{
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.dur}s`,
                ['--drift' as string]: `${p.drift}px`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PATH DATA — kept at the bottom so the JSX above stays readable.

   HUMAN HAND — composed of 6 separate paths so individual fingers read.
   - Palm spans roughly (78, 300) → (210, 450)
   - Index finger extended toward centre, fingertip at ~(252, 278)
   - Middle/Ring/Pinky are curled (small humps on top of palm)
   - Thumb is a stubby protrusion on the lower edge (closest to viewer)
   ══════════════════════════════════════════════════════════════════ */

// Palm + wrist mass.
const H_PALM = `
M 78 470
C 70 430 78 392 102 372
C 122 354 134 332 138 308
C 142 286 152 278 168 282
C 184 290 188 308 188 326
C 192 344 200 358 214 372
C 226 384 224 408 218 426
C 210 444 196 458 178 466
C 152 478 116 480 92 478
C 82 478 78 474 78 470 Z
`.trim();

// Thumb — a stubby protrusion on the gap-facing side of the palm.
const H_THUMB = `
M 200 374
C 218 366 240 372 246 388
C 250 402 240 414 226 416
C 212 416 200 408 196 396
C 194 388 196 380 200 374 Z
`.trim();

// Pinky — most curled, smallest hump on the back of the palm.
const H_PINKY = `
M 124 304
C 122 288 130 278 142 280
C 152 282 156 294 154 306
C 152 314 144 318 136 316
C 128 314 124 310 124 304 Z
`.trim();

// Ring finger — slightly more visible curl.
const H_RING = `
M 150 296
C 148 278 158 266 172 268
C 184 272 188 288 184 302
C 180 312 170 316 160 312
C 152 308 150 304 150 296 Z
`.trim();

// Middle finger — a touch longer than ring, still curled.
const H_MIDDLE = `
M 178 290
C 178 268 192 254 208 258
C 222 264 224 282 218 296
C 210 308 198 310 188 304
C 182 300 178 296 178 290 Z
`.trim();

// Index finger — the reaching one. Long, slender, fingertip at ~(252, 278).
const H_INDEX = `
M 196 322
C 192 298 200 280 220 270
C 234 264 246 268 250 274
Q 254 280 250 286
C 244 292 234 294 224 296
C 220 304 218 314 220 322
C 218 332 208 334 200 330
C 196 328 196 326 196 322 Z
`.trim();

/* ══════════════════════════════════════════════════════════════════
   AI HAND — mirrored anatomy, same six-part structure.
   Index fingertip arrives at ~(348, 278).
   ══════════════════════════════════════════════════════════════════ */

const A_PALM = `
M 522 470
C 530 430 522 392 498 372
C 478 354 466 332 462 308
C 458 286 448 278 432 282
C 416 290 412 308 412 326
C 408 344 400 358 386 372
C 374 384 376 408 382 426
C 390 444 404 458 422 466
C 448 478 484 480 508 478
C 518 478 522 474 522 470 Z
`.trim();

const A_THUMB = `
M 400 374
C 382 366 360 372 354 388
C 350 402 360 414 374 416
C 388 416 400 408 404 396
C 406 388 404 380 400 374 Z
`.trim();

const A_PINKY = `
M 476 304
C 478 288 470 278 458 280
C 448 282 444 294 446 306
C 448 314 456 318 464 316
C 472 314 476 310 476 304 Z
`.trim();

const A_RING = `
M 450 296
C 452 278 442 266 428 268
C 416 272 412 288 416 302
C 420 312 430 316 440 312
C 448 308 450 304 450 296 Z
`.trim();

const A_MIDDLE = `
M 422 290
C 422 268 408 254 392 258
C 378 264 376 282 382 296
C 390 308 402 310 412 304
C 418 300 422 296 422 290 Z
`.trim();

const A_INDEX = `
M 404 322
C 408 298 400 280 380 270
C 366 264 354 268 350 274
Q 346 280 350 286
C 356 292 366 294 376 296
C 380 304 382 314 380 322
C 382 332 392 334 400 330
C 404 328 404 326 404 322 Z
`.trim();

/**
 * Triangulated mesh polygons for the AI hand.
 * Each entry is a "x,y x,y x,y" string for <polygon points>.
 * Vertices follow palm + finger anatomy (not random).
 */
const AI_TRIANGLES: string[] = [
  // Palm: fanned triangles around the palm centre (455, 400).
  "455,400 522,470 498,372",
  "455,400 498,372 462,308",
  "455,400 462,308 412,326",
  "455,400 412,326 386,372",
  "455,400 386,372 382,426",
  "455,400 382,426 422,466",
  "455,400 422,466 484,480",
  "455,400 484,480 522,470",

  // Palm-to-thumb bridge.
  "412,326 400,374 386,372",
  "400,374 386,372 374,416",
  "400,374 374,416 354,388",

  // Index finger faces (the long one).
  "412,326 404,322 380,270",
  "412,326 380,270 350,274",
  "412,326 350,274 350,286",
  "412,326 350,286 376,296",
  "412,326 376,296 380,322",
  "412,326 380,322 400,330",

  // Middle-finger faces.
  "412,326 412,308 422,290",
  "412,308 422,290 392,258",
  "412,308 392,258 382,296",
  "412,308 382,296 412,304",

  // Ring-finger faces.
  "412,308 462,308 450,296",
  "462,308 450,296 428,268",
  "450,296 428,268 416,302",
  "450,296 416,302 440,312",

  // Pinky faces.
  "462,308 476,304 458,280",
  "462,308 458,280 446,306",
  "462,308 446,306 464,316",

  // Wrist faces.
  "498,372 522,470 484,480",
  "382,426 422,466 386,372",
];

/**
 * Lattice nodes — small bright dots placed at intersections of the
 * triangulation. They twinkle on a staggered cycle.
 */
const AI_NODES = [
  { x: 522, y: 470, r: 1.4 },
  { x: 498, y: 372, r: 1.3 },
  { x: 462, y: 308, r: 1.4 },
  { x: 412, y: 326, r: 1.3 },
  { x: 412, y: 308, r: 1.0 },
  { x: 386, y: 372, r: 1.0 },
  { x: 382, y: 426, r: 1.1 },
  { x: 422, y: 466, r: 1.0 },
  { x: 484, y: 480, r: 1.2 },
  { x: 455, y: 400, r: 1.4 },
  { x: 400, y: 374, r: 1.0 },
  { x: 354, y: 388, r: 1.0 },
  { x: 374, y: 416, r: 0.9 },
  { x: 404, y: 322, r: 1.1 },
  { x: 380, y: 270, r: 1.2 },
  { x: 350, y: 274, r: 1.1 },
  { x: 350, y: 286, r: 0.9 },
  { x: 376, y: 296, r: 0.9 },
  { x: 380, y: 322, r: 0.9 },
  { x: 422, y: 290, r: 1.0 },
  { x: 392, y: 258, r: 1.1 },
  { x: 450, y: 296, r: 1.0 },
  { x: 428, y: 268, r: 1.0 },
  { x: 476, y: 304, r: 0.9 },
  { x: 458, y: 280, r: 0.9 },
];

/* ══════════════════════════════════════════════════════════════════
   KEYFRAMES
   All animations are compositor-friendly: opacity, transform, filter.
   ══════════════════════════════════════════════════════════════════ */

const KEYFRAMES = `
.hv-stage {
  transform: rotateX(-4deg) rotateY(0deg);
  transform-style: preserve-3d;
}

@keyframes hv-bloom-pulse {
  0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.9; }
  50%      { transform: scaleX(1.04) scaleY(1.08); opacity: 1; }
}
@keyframes hv-hand-human-breathe {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50%      { transform: translate(2px, -1px) rotate(0.4deg); }
}
@keyframes hv-hand-ai-breathe {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50%      { transform: translate(-2px, -1px) rotate(-0.4deg); }
}
@keyframes hv-particle-drift {
  0%   { transform: translate(0, 0); opacity: 0; }
  10%  { opacity: 0.9; }
  90%  { opacity: 0.4; }
  100% { transform: translate(var(--drift, 0), -120px); opacity: 0; }
}
@keyframes hv-node-twinkle {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%      { opacity: 1;    transform: scale(1.35); }
}
@keyframes hv-spark {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.6); }
}
/* heartbeat: short double-thump every ~2.6s. */
@keyframes hv-heartbeat {
  0%, 30%, 100% { opacity: 0.0; }
  10%           { opacity: 0.55; }
  16%           { opacity: 0.15; }
  22%           { opacity: 0.55; }
}
/* binary digits drift up and fade as they leave the silhouette. */
@keyframes hv-binary-drift {
  0%   { transform: translate(0, 0); opacity: 0; }
  15%  { opacity: 0.9; }
  85%  { opacity: 0.6; }
  100% { transform: translate(0, -28px); opacity: 0; }
}

.hv-bloom        { animation: hv-bloom-pulse 4.5s ease-in-out infinite; }
.hv-hand-human   { animation: hv-hand-human-breathe 7s ease-in-out infinite; }
.hv-hand-ai      { animation: hv-hand-ai-breathe 7s ease-in-out infinite; }
.hv-particle     { animation: hv-particle-drift 8s linear infinite; transform-box: fill-box; transform-origin: center; }
.hv-node         { animation: hv-node-twinkle 3.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.hv-spark        { animation: hv-spark 2.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.hv-heartbeat    { animation: hv-heartbeat 2.6s ease-in-out infinite; }
.hv-binary       { animation: hv-binary-drift 7s linear infinite; transform-box: fill-box; transform-origin: center; }

@media (prefers-reduced-motion: reduce) {
  .hv-stage { transform: none; }
  .hv-bloom, .hv-hand-human, .hv-hand-ai,
  .hv-particle, .hv-node, .hv-spark,
  .hv-heartbeat, .hv-binary {
    animation: none !important;
  }
}
`;
