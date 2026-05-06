# Hero Visual Brief — VEULR

## Target
Replace `<Image src="/images/hero-concept.png" ...>` in `src/components/lp/Hero.tsx` right column with a new React TSX component: `src/components/lp/HeroVisual.tsx`.

Hero.tsx should import and render `<HeroVisual />` instead of the `<Image>` tag.

## Brand
- **Dark luxury AI company**
- Background: `oklch(0.06 0.01 260)` (deep dark navy-near-black)
- Accent: `oklch(0.55 0.22 280)` (vivid purple)
- Text: `oklch(0.96 0 0)` (near white)
- CSS token aliases: `var(--veulr-surface-0)`, `var(--veulr-accent-primary)`, `var(--veulr-text-primary)`

## Visual Concept — 案D「手渡し」
Two hands almost touching — one human (organic, warm skin tones), one AI (geometric lattice / glowing wireframe) — fingertips almost meeting but not quite. Purple/violet light emanates from the narrow gap between them. The empty space between fingertips IS the composition's focal point.

Emotional message: "AI が身近に居る世界へ" — AI close at hand, human and AI coexisting.

## Technical Requirements
- **Pure TSX + CSS** — no static image files. SVG paths, CSS animations, clip-path, filter, gradients all welcome.
- Component: `src/components/lp/HeroVisual.tsx` (default export)
- Renders inside a 600×560px container on desktop; responsive on mobile
- Must be a React Server Component (no `"use client"`, no useState/useEffect) UNLESS animation absolutely requires it — if so, isolate animation to a child client component
- No external npm packages beyond what's already in the project (Tailwind CSS v4, React 19, Next.js 16)
- Dark background site — visuals must read clearly on `oklch(0.06 0.01 260)`

## Existing Project Context
- Tailwind CSS v4 (no config, uses `@theme` in CSS)
- CSS animation classes from `tw-animate-css` available (e.g., `animate-in`, `fade-in`, `slide-in-from-bottom-8`)
- Inline styles with CSS custom properties are the established pattern (see existing Hero.tsx)

## Quality Bar
This is the first thing visitors see. It must feel premium, original, and intentional — NOT a stock illustration or generic AI blob. Think: museum-quality interactive art piece embedded in a webpage.
