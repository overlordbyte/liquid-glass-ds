# Marketing Site Kit

The web surface. Two kinds of section alternate: translucent ones that sit directly
on the wallpaper (header, hero, pricing) and opaque ones that break the page into
readable chapters (features, footer). That alternation is what stops a glass page
from turning into soup.

## Sections

| File | What it shows |
| --- | --- |
| `SiteHeader.jsx` | A floating glass capsule rather than a full-width bar — sticky at `top: 16px`, so the wallpaper stays visible around it. |
| `Hero.jsx` | 56px display type on the wallpaper, an ultrathin announcement pill, a glass CTA beside the filled one, and a thin-glass stat strip. |
| `FeatureSection.jsx` | Opaque chapter. Six cards, each rebinding `--tint` on its own container so the glyph tile and the icon agree. |
| `PricingSection.jsx` | Back on the wallpaper. Regular-glass plans, the featured one on thick glass with ambient occlusion. Monthly/Yearly is live. |
| `SiteFooter.jsx` | Opaque close-out: four columns, hairline rule, 11px uppercase column headers. |

"Prism" is an invented product name — this kit demonstrates the language on a
plausible page, it does not reproduce any real company's site.

## Composition rules this kit follows

- `.lg-wallpaper` goes on `<body>` with `background-attachment: fixed`, so glass sections sample a backdrop that stays put while the page scrolls.
- Opaque sections set `background: var(--surface-page)` explicitly; they are what make the glass sections read as glass.
- Text on the wallpaper is white; text on glass uses `--text-primary` and inherits the theme. Never mix the two inside one panel.
- Section rhythm is `--gap-chapter` (80px), inner gutters are `--inset-page` (24px), content caps at `--content-max`.
