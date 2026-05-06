# Iteration 001 — Generator Self-Eval

## What I made

A pure-SVG `HeroVisual.tsx` (Server Component) that depicts the 案D「手渡し」
concept: a warm, organic human hand reaching from the lower-left and a cool,
geometric AI lattice hand reaching from the lower-right. Their index fingertips
stop just short of meeting at the canvas centre (~ 96 px gap), and that gap
holds the entire composition.

Visual layers (back to front):
1. Atmospheric purple bloom that bleeds beyond the SVG box via an outer
   `radial-gradient` div + blur.
2. Faint anchoring vignette circle.
3. Three concentric dashed orbital rings, slowly rotating around the gap.
4. A two-stop radial bloom (soft halo + bright core) at the gap, gently
   pulsing in scale + opacity.
5. The human hand: warm OKLCH skin gradient, layered inner shading, three
   subtle knuckle creases, and a purple rim-light kissing the index fingertip.
6. The AI hand: dark interior, hand-laid Delaunay-style triangulation across
   palm and finger ridges, glowing edge stroke, and ~26 twinkling lattice
   nodes on staggered cycles.
7. An energy arc and constellation bridge of five shimmering dots stretched
   across the gap — the actual "handover."
8. Ten upward-drifting particles seeded inside the gap, each with its own
   horizontal drift, delay, and duration so the motion never repeats.
9. A bright pinpoint spark at dead centre.

Animations are all on `opacity` / `transform` / `filter`, with a
`prefers-reduced-motion` guard that disables every loop.

## Design decisions

- **No `"use client"`.** Every animation is CSS keyframes injected via a
  `<style>` tag inside the component, so it stays a Server Component as the
  spec preferred.
- **Hands face each other in a 3/4 reach pose** rather than profile silhouettes
  — gives the viewer a clear focal axis pointing at the gap.
- **The two hand silhouettes are mirrored cubic-bezier paths** so they read as
  the same gesture, but the AI version is faceted internally; the symmetry
  amplifies the "handover" feeling.
- **Triangulation is hand-authored, not generated.** Lines follow finger
  ridges and palm anatomy, not random noise. This keeps it from looking like
  a generic "AI mesh" cliché.
- **Purple light is layered at four scales** — outer atmospheric div, mid
  orbital rings, inner bloom, dead-centre pinpoint — to build real depth
  rather than a single flat gradient.
- **Skin gradient uses warm OKLCH hues 30-60°** to read distinctly warm-organic
  against the cool 280° purple of the AI side. The palette tension *is* the
  design.
- **All path data lives at the bottom of the file** as named constants, so the
  JSX above stays scannable and reviewable.

## Potential weaknesses

- **Hand anatomy is stylised, not photographic.** The fingers are simplified
  cubic curves; on close inspection a discerning eye will read this as
  illustrative rather than realistic. I judged this a feature, not a bug, for
  a museum-style hero — but a critic looking for hyperreal hand drawing will
  ding it.
- **The triangulation is dense around the palm and could feel busy** at very
  large sizes. On the 600 × 560 desktop frame it reads cleanly; if the
  Evaluator scales the canvas up dramatically, density may need tuning.
- **No JS-driven parallax / mouse-follow.** The spec discouraged client
  components and the static animation reads strongly on its own, so I did not
  add an interactive layer. If the Evaluator expects pointer-driven motion,
  this is a gap.
- **The arc + bridge dots overlap slightly** at peak shimmer. Intentional —
  the layered shimmer is part of the "energy" — but it might read as visual
  noise to a stricter reviewer.
- **Performance check is theoretical, not measured.** I respected
  compositor-friendly properties only, but did not run a paint-flashing or
  Lighthouse pass.

## Estimated score
Design Quality: 8.5/10
Originality: 8.5/10
Craft: 8.2/10
Functionality: 9.5/10
Weighted: 8.6/10
