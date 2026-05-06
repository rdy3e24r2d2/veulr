# Iteration 002 — Generator Self-Eval

## What changed this iteration

Major rewrite of `HeroVisual.tsx` driven by the evaluator's three top issues:
silhouette legibility, motif overload, and bloom muddiness. Plus the originality
push items.

### 1. Hands now read as hands (CRITICAL fix)

Each hand is built from **six separate paths**:
`palm + thumb + pinky + ring + middle + index`. There is no single
continuous wavy contour anymore. Drawing them as discrete shapes gives the
viewer real negative space *between* fingers and unambiguous fingertips.

- **Index finger** is the longest, slender, and clearly extended toward the
  centre. Human index fingertip lands at ~(252, 280); AI index fingertip
  lands at ~(348, 280). The 96 px gap is the focal axis.
- **Middle / ring / pinky** are short curls sitting on top of the palm,
  reading as folded-back digits — small humps, not extensions.
- **Thumb** is a stubby protrusion on the gap-facing side of the palm,
  giving the silhouette a real anatomical anchor.
- **Knuckle valleys** are now drawn as thin shadow strokes
  *between* the curled fingers (where there is real geometry to land on),
  not floating Q-curves on a wave ridge.

The AI hand uses the same six-part anatomy, then overlays
**triangulated `<polygon>` faces** — all closed, all valid — keyed to palm
fan + finger ridges. Outer edges glow via `url(#hard-glow)`.

### 2. Motif density cut

Removed:
- Three concentric dashed orbital rings (generic AI/sci-fi trope)
- Constellation bridge dots (fintech-marketing trope)
- Two-stop circular bloom (replaced with lenticular beam, see #3)

Kept:
- Centre pinpoint spark (the focal anchor)
- Drifting particles in the gap (the only "energy" motif left)

Result: the hands carry the composition. Supporting elements step back.

### 3. Bloom no longer obscures hand detail

Replaced the two large circular bloom discs with a **narrow lenticular
beam**: three stacked ellipses with `rx >> ry`, drawn at the gap line:
- Soft purple wash: `rx=58, ry=36` (anchors the gap)
- Outer beam: `rx=78, ry=3.2`
- Inner near-white beam: `rx=54, ry=1.1`

All gap lighting and fingertip rim-lights now use
`mixBlendMode: "screen"` so they ADD to the hand interiors instead of
overlaying / muddying them. The particles group also screens against the
backdrop.

### 4. Hero.tsx duplicate glow removed

The radial-gradient div in `Hero.tsx` lines 79-87 is gone. The atmospheric
glow now lives only in `HeroVisual.tsx`, making the component self-contained
and removing the double-bloom wash.

### 5. Originality push

- **Perspective tilt**: `perspective: 1200px` on the wrapper +
  `transform: rotateX(-4deg)` on the SVG stage gives a subtle 3D depth
  cue (disabled under `prefers-reduced-motion`).
- **Heartbeat pulse**: the human index outline gets a warm-skin-tone
  stroke that follows a real cardiac rhythm — short double-thump every
  2.6 s (`0% off, 10% on, 16% off, 22% on, 30% off`). Layered with
  `mixBlendMode: screen` to glow rather than mask.
- **Binary stream**: nine `0`/`1` glyphs drift upward along the AI hand's
  outer edge on staggered cycles, in monospace, mix-blended to screen.
  This is the kind of detail that survives a 5-second look and gives the
  AI hand a specific "I am made of code" identity beyond just the lattice.

### 6. Cleanup

- Dropped `role="img"` from the SVG (already inside an `aria-hidden`
  wrapper).
- All triangulation polygons use `<polygon points="x,y x,y x,y" />` — no
  open/un-closed paths possible by construction.
- Knuckle creases removed from the original wave-ridge area; replaced
  with three thin valleys between the actual curled-finger humps.

## Files touched

- `src/components/lp/HeroVisual.tsx` — full rewrite
- `src/components/lp/Hero.tsx` — deleted the redundant radial-gradient
  glow div in the right column

## Known weaknesses

- The hand drawing is intentionally illustrative, not photoreal. A critic
  expecting hyperreal anatomy may still ding it — but fingers-as-fingers
  legibility was the actual blocker, and that is now solved.
- The AI hand silhouette outlines the same six anatomical parts as the
  human hand. Some reviewers may want the AI side to feel more "alien" /
  more abstract. I judged that mirrored anatomy + triangulation +
  binary-stream + cool palette is the right level of contrast — pushing
  further breaks the "handover" symmetry.
- The 3D perspective tilt is subtle (4°). Stronger tilt would be more
  showy but would also start to feel gimmicky and break the front-on
  framing of the gap.
- No interactive (mouse-follow / scroll-coupled) layer. The component
  remains a Server Component as the spec preferred.

## Estimated score

Design Quality: 8.6/10
Originality: 8.2/10
Craft: 8.5/10
Functionality: 9.5/10
Weighted: 8.5/10
