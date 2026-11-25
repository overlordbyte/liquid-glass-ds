---
name: liquid-glass-design
description: Use this skill to generate well-branded interfaces and assets for Liquid Glass, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation

- `readme.md` — the design guide. §4 VISUAL FOUNDATIONS and §5 ICONOGRAPHY are the two sections to read before drawing anything.
- `styles.css` — link this one file; it imports every token and the `.lg-*` utilities.
- `components/<group>/<Name>.prompt.md` — one-paragraph "what & when" plus a usage example, per component.
- `ui_kits/<product>/README.md` — how a whole surface is composed.
- `assets/icons/lucide/` — the icon set, vendored. Use it; never hand-roll an SVG glyph.

## The five rules that matter most

1. **Glass is for surfaces that sit on top of content.** Chrome, sheets, sidebars, chips over media. Cards and page content stay opaque.
2. **Never drop-shadow a glass surface.** Ambient occlusion goes on a wrapper behind it.
3. **The inset top highlight is non-negotiable** — `inset 0 1.5px 0 rgba(255,255,255,.85)`. Without it a panel reads as tinted film.
4. **One tint per surface**, reserved for the primary action. Rebind `--tint` on a container.
5. **Glass needs a backdrop.** Put `.lg-wallpaper` (or imagery) on an ancestor, or the effect is invisible.

## Starting a static mock

```html
<link rel="stylesheet" href="styles.css">
<script src="assets/icons/lucide/lucide.min.js"></script>
<body class="lg-wallpaper">
  <div class="lg-glass" style="padding:24px;max-width:420px;margin:80px auto">…</div>
  <script>lucide.createIcons({ attrs: { "stroke-width": 1.75 } });</script>
</body>
```

Reference tokens (`var(--tint)`, `var(--space-4)`, `var(--radius-card)`) rather than literal values — that is what makes the output on-brand rather than merely similar.
