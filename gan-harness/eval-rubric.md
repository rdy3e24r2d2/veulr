# Eval Rubric — VEULR Hero Visual

Score 0.0–10.0 per criterion. Final = weighted sum.

## Design Quality (weight: 0.35)
- Does it feel premium and intentional, not template-like?
- Is hierarchy clear (focal point = the gap between hands)?
- Is depth/layering present (glow, shadow, parallax, z-depth)?
- Would it look at home on a design award site (Awwwards, CSS Design Awards)?

## Originality (weight: 0.30)
- Is the visual concept distinctive and specific to VEULR (not generic AI aesthetics)?
- Does it avoid clichés (no generic network blobs, no plain circuit boards, no stock-photo hands)?
- Does it create a memorable emotional moment?
- Does the human+AI hand concept feel fresh and executed with a unique perspective?

## Craft (weight: 0.25)
- Is the SVG/CSS work clean and precise (no jagged edges, inconsistent curves)?
- Are animations smooth (compositor-friendly: opacity, transform, filter only)?
- Does it render correctly on dark background `oklch(0.06 0.01 260)`?
- Is the code well-structured (no inline style soup, clear variable names)?

## Functionality (weight: 0.10)
- Does HeroVisual.tsx compile without TypeScript errors?
- Is it importable into Hero.tsx?
- Does it respect the 600×560px container on desktop?
- Does it degrade gracefully on mobile?

## Scoring Guide
- 9.0–10.0: Ship immediately, would win a design award
- 7.5–8.9: Strong, minor polish needed
- 6.0–7.4: Good concept, needs more craft or originality
- below 6.0: Needs rethink
