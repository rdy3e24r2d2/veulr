# Iteration 001 — Evaluator Assessment

## TypeScript / Build Check
Clean. No `"use client"` (correct), no React state hooks, no missing imports. The CSS-custom-property cast `['--drift' as string]: \`${p.drift}px\`` is a recognized pattern that compiles fine under React 19 / TS 5+. `<style>{KEYFRAMES}</style>` inside a Server Component is valid React — Next 16 will inline it during SSR. Path constants and arrays are typed implicitly and used consistently. `aria-hidden="true"` on the wrapper + `role="img"` on the SVG is mildly redundant (aria-hidden suppresses the role from AT) but not an error. No build blockers.

## Design Quality (0.35): 7.0/10

Strengths
- Real layered depth: atmospheric blur div → vignette circle → orbital dashed rings → two-stop bloom → hands → arc → bridge dots → particles → centre spark. That is eight distinct z-layers, all working off a single 280° purple. Genuine atmosphere, not a flat gradient.
- Warm 30–60° skin vs cool 280° purple is a real, intentional palette tension. On-brief.
- Edge treatment is thoughtful — purple rim-lights at fingertips, soft cast shadows offset diagonally, hard-glow filter on edge strokes, blurred bloom that bleeds past the SVG box.
- Animation choreography is restrained: 4.5s bloom pulse, 60s ring rotation, 7s hand-breath. Nothing fights for attention.

Weaknesses
- The composition reads as "two organic forms with glow between them" rather than "two hands, fingertips almost touching." This is the core problem (see Craft). The brief says "the empty space between fingertips IS the composition's focal point" — that only works if the viewer can identify fingertips.
- Orbital dashed rings + particle drift + concentric bloom is on the edge of generic "energy / aura" vocabulary. Saved by the warm-vs-cool hand contrast, but those three motifs together are seen often on Awwwards.
- The `Hero.tsx` right-column also has a `radial-gradient` glow div behind `<HeroVisual />`. That double-glow (Hero's + HeroVisual's atmospheric div) risks washing out the purple emission rather than concentrating it. Audit whether one of these should be removed.

Premium feel: yes. Award-site ship-ready: not yet, because the silhouettes don't read.

## Originality (0.30): 7.0/10

The concept (案D 手渡し) is faithfully attempted and avoids the worst AI-cliché traps — no neural-net blob, no circuit-board overlay, no glowing CPU. The hand-laid (not random) triangulation is a real choice and shows up: the AI palm fan and finger ridges follow plausible anatomy rather than Voronoi noise. That's the most original move in the file.

But the supporting cast is conventional:
- Concentric dashed orbital rings → standard "AI / sci-fi" trope
- Upward-drifting glowing particles → standard "energy" trope
- Bright center pinpoint + halo → standard "singularity" trope
- Constellation-dot bridge across a gap → seen often in fintech/AI marketing

None of these is bad on its own; together they pull the piece toward "well-executed familiar" rather than "memorable specific." The genuinely VEULR-specific element — two reaching hands of opposite ontologies — is undermined by silhouette legibility (see Craft). If the hands read instantly as hands, originality jumps a full point.

## Craft (0.25): 6.5/10

Code-craft: 9/10. Structure is genuinely good — `defs` block grouped (gradients, filters, clips), layered groups commented, path data extracted to named constants at the bottom, animations consolidated in one keyframes block, `prefers-reduced-motion` honored, all motion on `opacity` / `transform` / `filter`. This is how SVG hero components should be authored.

Visual-craft: 4–5/10, and this drags the score down hard.

The hand path data, when rendered, will not produce a recognizable hand. Tracing `HUMAN_HAND_PATH`:
- Starts at `(30, 470)` (lower-left wrist)
- Sweeps up along the back of the hand to roughly `(142, 318)`
- Then four cubic segments oscillate between `y ≈ 254` and `y ≈ 308` from `x ≈ 142` out to `x ≈ 340`
- Then sweeps back down to the wrist

That oscillating top edge is *meant* to imply the four fingers + thumb knuckles, but the control points produce a continuous wavy contour, not five separated digits with gaps between them. There is no negative space between fingers. The "index fingertip" the comment claims is at `~(252, 278)` is not visually distinguishable as a fingertip — it is just a bump on a wavy ridge.

For a composition whose entire stated focal point is "fingertips almost meeting," this is a critical legibility miss. The mirrored AI hand has the same problem; the triangulation does help a little because the triangle endpoints suggest joints, but the outer silhouette still reads as a blobby paddle rather than a hand reaching with index extended.

Other craft notes:
- The "knuckle crease" Q-curves at `M 175 280 Q 210 268 245 272` etc. float on a contour that has no visible knuckles to attach to. They will read as random highlight strokes, not anatomy.
- The "purple-side rim light on the fingertip" path uses absolute coords like `M 250 270 Q 268 270 278 278` — but with no clear fingertip there, this reads as a stray glow blob.
- The two large bloom circles (`r=160` and `r=60`) sit centred at `(300, 280)` between the two contours. The hand silhouettes terminate around `x=252` and `x=348`, so the bloom partially overlaps the hand interiors. With `mix-blend-mode` not set and just opacity stacking, this can muddy the warm skin tones rather than enhance them. Consider drawing the bloom *clipped* to the gap or using `mix-blend-mode: screen` on the bloom layer.
- AI triangulation set has 25 paths and most are valid `M ... L ... L ... Z` triangles, but four of them omit the closing `Z` (lines like `"M 458 318 L 412 258 L 458 254"`). Those will render as open polylines, not filled/closed triangles — fine since `fill="none"` on the parent group, but inconsistent with the rest of the array.

## Functionality (0.10): 9.5/10

Compiles, imports correctly into `Hero.tsx`, the `<Image>` tag is gone, container respects `max-w-[600px] aspect-[600/560]`, mobile fallback via `w-full` is fine. `aria-hidden="true"` on the wrapper is appropriate (decorative). Reduced-motion handled. The only mark against is the redundant glow stack between `Hero.tsx` and `HeroVisual.tsx` (functional but design-redundant). One light TS/a11y nit: `role="img"` is suppressed by the parent's `aria-hidden`, so it's dead weight — drop it or move `aria-hidden` to the SVG only.

## Weighted Score
- Design Quality   7.0 × 0.35 = 2.45
- Originality      7.0 × 0.30 = 2.10
- Craft            6.5 × 0.25 = 1.625
- Functionality    9.5 × 0.10 = 0.95

**Total: 7.13 / 10**

## Pass / Iterate
ITERATE — below the 7.5 threshold. The architecture and atmosphere are strong, but the hand silhouettes — the entire premise of the brief — do not read as hands. That has to be fixed before this ships.

## Required changes for next iteration

1. **Redraw the hand silhouettes so five fingers are individually visible.** The current single-contour wavy-ridge approach must be replaced. Options, in order of preference:
   a. Composite each hand from a palm path + five separate finger paths (each finger ~10–14px wide, with visible negative space between them). Index finger of each hand should be the longest and clearly extended toward the centre, with the other four either curled into the palm or held back.
   b. If staying with a single contour, deepen the inter-finger valleys substantially — drop the y-coordinate between fingers down to roughly the knuckle line so there are real gaps between digits, not a 12–20px wave. The current oscillation of ~50px peak-to-trough across 200px of width gives ridges, not fingers.
   Either way: a viewer scanning for half a second must see "hand with extended index finger, almost touching another hand with extended index finger." Right now they see "two glowing blobs with light between them."

2. **Reduce the supporting motif density to push originality up.** Pick two of {orbital dashed rings, drifting particles, constellation bridge dots, center pinpoint spark} and remove the rest. Stacking all four pulls the piece toward generic "AI energy" vocabulary. The hands + bloom + arc alone are stronger and more specific than hands + bloom + arc + rings + particles + bridge + spark.

3. **Fix the bloom/hand overlap.** The two bloom circles (r=160, r=60 centred at gap) currently bleed across the hand interiors and risk muddying the warm skin gradient. Either:
   - Apply `style={{ mixBlendMode: "screen" }}` to the `.hv-bloom` group so it adds to the hands rather than overlaying them, or
   - Clip the bloom to a circle/ellipse that lives only in the gap between the two silhouettes (use a `<clipPath>` excluding the hand regions).

4. **Audit the double-glow between `Hero.tsx` and `HeroVisual.tsx`.** `Hero.tsx` lines 79–87 add a `radial-gradient` div behind the visual; `HeroVisual.tsx` lines 50–57 do the same thing one level in. Pick one location (recommend keeping it in `HeroVisual.tsx` so the component is self-contained) and delete the other. Two stacked atmospheric glows blur the focal centre rather than emphasizing it.

5. **Clean up small craft issues:**
   - Close the four open triangle paths in `AI_TRIANGLES` (add `Z` to the lines that lack it) for consistency.
   - Move or remove the floating knuckle/crease Q-curves until there are real knuckles in the silhouette to land on.
   - Drop `role="img"` from the SVG (it's already inside an `aria-hidden` wrapper).

If items 1, 3, and 4 land cleanly, this scores 8.0+ next round and ships.
