# Iteration 002 — Evaluator Assessment

## TypeScript / Build Check
Clean. `npx next build` compiles successfully and `tsc --noEmit` reports zero errors anywhere in `src/components/lp/Hero.tsx` or `src/components/lp/HeroVisual.tsx` (the only TS errors in the repo are in `tests/e2e/veulr-qa.spec.ts` for missing `@playwright/test` types — unrelated to this iteration). Specific checks:
- No `"use client"` — correct, the component is a Server Component as the spec required.
- All inline `style={{ mixBlendMode: "screen" }}` blocks are accepted by React's `CSSProperties` type — `mixBlendMode` is in lib.dom.d.ts as a string-literal union and `"screen"` is a valid value. No cast needed and none added; this passes type-check.
- `['--drift' as string]: \`${p.drift}px\`` — same CSS-custom-property idiom as iteration 001; valid React 19 / TS 5+.
- `<style>{KEYFRAMES}</style>` inside a Server Component is valid; Next 16 inlines it during SSR.
- `role="img"` removed from the SVG (per iter-001 nit). Wrapper is `aria-hidden="true"`. Clean.
- `Hero.tsx` correctly imports the default export from `./HeroVisual` and renders `<HeroVisual />` in place of the prior `<Image>` — and the redundant radial-gradient div in the right column is gone, as the generator claimed.

No build blockers. No type errors. Functionality is solid.

## Design Quality (0.35): 8.0/10

Strengths
- The composition has a real focal axis now. The lenticular beam + dead-centre pinpoint at `(300, 280)` sits exactly between the two extended index fingertips at `(252, ~280)` and `(348, ~280)`. The gap is the focal point in fact, not just in aspiration.
- Lenticular beam (rx=78, ry=3.2 + rx=54, ry=1.1 inner) is a much sharper, more architectural light treatment than the two-stop bloom from iteration 001. It reads as "energy in the gap" instead of "fog over the scene."
- `mixBlendMode: "screen"` on every emissive layer (beam, gap-wash, fingertip rim-lights, sparks, particles, binary digits) means the purple light *adds* to the warm skin tones and dark AI lattice rather than washing over them. The warm-vs-cool palette tension iteration 001 set up is now actually visible because the bloom doesn't muddy the hands.
- The double-glow problem is gone. `Hero.tsx` no longer paints its own radial gradient behind the visual; the only atmospheric wash is the one inside `HeroVisual.tsx`. This is the right call for component encapsulation and for focal clarity.
- Subtle `perspective: 1200px` + `rotateX(-4deg)` adds genuine z-depth without being gimmicky. Honoured by `prefers-reduced-motion`.

Weaknesses
- The hand silhouettes are now legible as hands, but barely. The index fingers read clearly because they're the longest extended elements with rim lights and the gap framing them. The pinky / ring / middle / thumb read as small humps on the palm — anatomically correct as "curled-back digits" but a casual viewer at 1m on a laptop may register them as palm noise rather than fingers. This is improved enormously over iteration 001, but it's still illustrative, not virtuosic.
- The overall stance of each hand is slightly stiff. Both wrists exit at the bottom corners (`(78, 470)` / `(522, 470)`), both index fingers point dead-horizontally toward 280px, and both palms are roughly mirror-symmetric around x=300. That symmetry reinforces the "handover" reading but also makes the composition feel diagrammatic. A real photograph of two hands almost touching would have one slightly higher, one slightly tilted, one slightly in front. The current geometry is too axis-aligned to feel candid.
- The backdrop circle (`r=260` at `(300, 280)`, fill `oklch(0.07 0.02 270 / 70%)` at `opacity=0.55`) adds atmospheric depth but is a perfect circle centred behind the gap — once you notice it, the composition feels like a pictogram in a roundel. A softer, off-centre, blurred shape would feel less symmetrical.

Premium feel: yes. Award-site ship-ready: close. The composition reads correctly now; the remaining gap is between "well-executed" and "memorable."

## Originality (0.30): 7.5/10

Real moves added this iteration:
- **Heartbeat pulse** on the human index outline (warm-tone stroke, double-thump 0%/10%/16%/22%/30% over 2.6s). This is genuinely specific — it's a "the human side is alive" signal that no stock AI hero illustration carries. It survives a slow look and rewards it.
- **Binary stream** drifting upward along the AI hand's outer edge. Nine `0`/`1` glyphs at staggered cycles, monospace, screen-blended. Cliché on its own, but layered against a triangulated lattice with a heartbeat opposite it, it earns its keep — it's the most legible "I am made of code" detail short of full Matrix-style cascade, without going there.
- **Hand-laid triangulation** keyed to palm-fan + finger ridges (not random Voronoi). 28 polygons follow real anatomy. This was already a strength in iter-001; it survives the rewrite.
- **Removed**: orbital dashed rings, constellation bridge dots, two-stop bloom. Three of the four iter-001 "generic AI vocabulary" motifs are gone. The remaining motifs (centre pinpoint spark, drifting particles) now feel like *anchors* rather than a stack.

What still keeps this from a 9
- The two-hand-handover concept is well-known in AI / fintech editorial art (Bloomberg, MIT Tech Review, OpenAI marketing have all run something close). The execution here is on-brief and avoids the dumb traps, but the underlying motif is not a discovery.
- The AI hand is anatomically a near-mirror of the human hand. The generator's self-eval flags this trade-off and judges it correct ("breaks the handover symmetry"). I lean the same way, but a viewer wanting more "alien" AI ontology will find the contrast between "skin gradient" and "wireframe over same anatomy" is mostly a surface treatment, not a structural difference.
- 3D perspective tilt is conservative. At 4° it reads as "rendered, not flat," but it's not doing meaningful compositional work. Not a flaw, just unused potential.

The piece is now distinctively VEULR (especially the heartbeat detail), but it's not yet the kind of thing you'd screenshot for a "best of 2026 hero animations" post.

## Craft (0.25): 8.5/10

Code-craft: 9.5/10. Cleaner than iteration 001. Each hand is six discrete paths (`H_PALM` + `H_THUMB` + `H_PINKY` + `H_RING` + `H_MIDDLE` + `H_INDEX`, mirrored on the AI side). Triangulation is `<polygon points="...">` instead of `<path>` — closed by construction, no possibility of unclosed shapes. Animations all on `opacity` / `transform` / `filter`. `prefers-reduced-motion` handled, including the perspective tilt. Constants extracted to the bottom. Comments are accurate and useful (e.g., the focal-axis comment naming the actual pixel coordinates). One nit: `transform-box: fill-box` on `.hv-particle` / `.hv-node` / `.hv-spark` / `.hv-binary` is correct for SVG transform-origin to work on individual shapes — good attention to detail.

Visual-craft: 7.5/10. Big jump from iter-001's 4–5/10. The hand silhouettes now have:
- Real negative space between the curled fingers (small humps on the palm with visible gaps)
- Identifiable extended index fingers reaching toward the centre
- Knuckle-valley shadow strokes that land on actual geometry between the curl shapes (not floating on a wave ridge)
- Thumb on the gap-facing side acting as a "this hand is reaching" anchor
- Rim lights at the fingertips that actually correspond to where the fingertip is

What keeps craft from 9
- Hand silhouette construction is illustrative-cartoon level, not anatomical. The curls are circle-ish bezier blobs rather than convincing folded knuckles. From 30cm you see "five-digit hand"; from 2m you see "blob with a finger." The hands work in the composition but they aren't the precise vector illustration that would push this to award-site quality.
- The triangulation density is uneven. The palm fan from `(455, 400)` is dense; the index-finger faces are sparse (six triangles for the longest visible feature). The eye is drawn to where the lattice is dense, which is the palm — but the focal axis runs through the index fingertips. More triangle density along the index ridge would reinforce the focal axis. Currently there's a slight visual pull *away* from the gap.
- The shadow plates under each hand (`<g transform="translate(4 8)" opacity="0.5" filter="url(#rim-light)">`) use `feGaussianBlur stdDeviation="1.4"` — the same anatomy painted in `oklch(0.05 0.02 280)` at 50% opacity, blurred and offset. This works but it's a cheap version of a cast shadow. A directional drop-shadow filter would read more dimensionally.
- Binary `<text>` elements on a tilted-perspective SVG stage will have their baseline locked to the SVG coordinate system, not perspective-projected — so the text floats in a flatter plane than the lattice it's supposedly attached to. Subtle, but a craft purist will see it.

## Functionality (0.10): 9.5/10

Compiles, builds, type-checks. Renders inside `Hero.tsx` right column with no `<Image>` left over. Container is `max-w-[600px] aspect-[600/560]` — correct desktop bounds. `w-full` + `aspect-[600/560]` gives clean responsive scaling on mobile. `aria-hidden="true"` on the wrapper, `role="img"` removed (per iter-001 nit). Reduced-motion fully honored — disables tilt, bloom, hand breathe, particles, nodes, spark, heartbeat, and binary drift. The component is self-contained (no Hero.tsx-side glow, all atmospherics inside `HeroVisual.tsx`).

The only mark against — and it's tiny — is that the `<style>{KEYFRAMES}</style>` block is inlined inside the SVG wrapper rather than scoped via a CSS module or `style jsx`. In practice this is fine in Next 16 SSR (a real `<style>` element gets emitted into the DOM and applies globally to anything matching `.hv-*` — which only this component uses). But it's technically a global stylesheet injected from inside a component. Acceptable for a single hero but worth noting if `HeroVisual` ever gets reused elsewhere on the page.

## Weighted Score
- Design Quality   8.0 × 0.35 = 2.80
- Originality      7.5 × 0.30 = 2.25
- Craft            8.5 × 0.25 = 2.125
- Functionality    9.5 × 0.10 = 0.95

**Total: 8.13 / 10**

## Pass / Iterate
**PASS** — above the 7.5 threshold. The required iter-001 changes (legible hands, motif density cut, bloom/hand overlap fix, double-glow audit, small craft cleanup) all landed cleanly. The piece now communicates the brief: two hands, fingertips almost touching across a luminous purple gap. The heartbeat pulse and binary stream are genuine originality wins. Code-craft is on its game.

This is a ship. It is not yet a "we screenshot this for the company portfolio for years" piece, but it clears the premium-website hero bar.

## What improved since iteration 001
- Hand silhouettes are legible. The single biggest blocker is solved.
- Bloom no longer obscures hand interiors (`mixBlendMode: "screen"` everywhere; lenticular beam instead of two-stop disc).
- Double atmospheric glow eliminated (Hero.tsx-side gradient gone).
- Triangulation polygons are all closed `<polygon>` elements (no unclosed paths possible).
- `role="img"` correctly dropped.
- Two of the four "generic AI vocabulary" motifs removed (orbital rings, bridge dots).
- Heartbeat pulse and binary stream are net-new originality moves.

## What did not regress
- Atmospheric layering still present (vignette circle + outer wash + bloom + particles + spark).
- Warm-cool palette tension preserved.
- Animation choreography still restrained.
- Code structure still clean (constants at bottom, defs grouped, comments useful).

## Suggestions for a future iteration (not required for ship)
1. **Break the symmetry slightly.** Tilt the AI hand 2–3° relative to the human hand; offset one wrist a few px in y. Right now both hands enter the frame at the same height, both indexes point dead-horizontal, both palms mirror around x=300. Asymmetry would push from "diagrammatic" to "candid."
2. **Densify the AI lattice along the index ridge.** Currently the palm fan has the densest triangulation, which pulls the eye toward the palm. Adding 4–6 more polygons along the AI index finger (between `(412, 326)` and `(350, 274)`) would reinforce the focal axis through the gap.
3. **Replace the perfect-circle backdrop vignette with a softer, asymmetric blurred shape.** A `<filter>` with two offset Gaussian blurs, or a freeform path with heavy blur, would read less "logo roundel" and more "atmospheric haze."
4. **Consider a slow scroll-coupled or pointer-coupled parallax on the gap beam only.** Even a 4-line client child component that nudges the beam ±6px on `mousemove` would push this from "static art" to "alive art" without breaking the Server Component boundary for the hands.
5. **Shadow plates** under each hand could be replaced with a single `feDropShadow` filter (cheaper, more directional, reads more dimensional than the current "duplicate-paths-and-blur" trick).

None of these are blocking. Ship this iteration.
