# Liquid Glass — Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Icons: Lucide ISC](https://img.shields.io/badge/Icons-Lucide%20ISC-green.svg)](assets/icons/lucide/LICENSE)

A translucent, Apple-adjacent visual language: frosted materials, layered depth,
soft system tints and short spring-weighted motion. Everything here is built so a
design agent can produce on-brand screens, decks and components without re-deriving
the rules each time.

**Browse it:** open `index.html` — or the Pages deployment, once this repo has one —
for the full card gallery and the three interactive UI kits.

> Not affiliated with, endorsed by, or sponsored by Apple Inc. No Apple fonts,
> icons, logos or product designs are redistributed here. See [NOTICE](NOTICE).

---

## 1 · Where this came from

**The brief.** "Apple liquid glass design system" — the Glass / Soft-Futurism family:
frosted blur, layered translucency, soft gradients.

**The source.** One repository was supplied:

- <https://github.com/rohitg00/awesome-claude-design> — a curated MIT-licensed collection
  for Claude Design. The file that drove this system is
  [`design-md/glass/apple.md`](https://github.com/rohitg00/awesome-claude-design/blob/main/design-md/glass/apple.md),
  a concrete token spec: surface and ink values for both schemes, the seven system
  tints, the three vibrancy densities (0.60 / 0.78 / 0.92), the 10-step type scale
  (11–56px), the 8pt spacing scale, component radii, and the depth rules. Every
  numeric value in `tokens/` traces back to it. The sibling
  [`design-md/remix/glass/`](https://github.com/rohitg00/awesome-claude-design/tree/main/design-md/remix/glass)
  folder holds further glass variants (Arc, Granola) worth reading if you want to
  push this system warmer or more pastel.

**Explore it further.** That repo also carries prompt packs, remix recipes and a
showcase of real builds. Reading it before extending this system will give you more
context than this file can — especially the token-budget recipe under `recipes/`.

**What was not supplied.** No product codebase, no Figma file, no slide template, no
brand assets. That shapes three things, all flagged in §7: the UI kits are original
surfaces in the language rather than recreations of a specific shipped product; there
is no slide kit; and there are no logos or font binaries in `assets/`.

---

## 2 · The products represented

Three surfaces, chosen to exercise the language at its three natural scales:

| Kit | Scale | What it stresses |
| --- | --- | --- |
| `ui_kits/ios-app/` | Phone, 390×844 | Floating chrome over full-bleed content; collapsing large title; glass over saturated artwork. |
| `ui_kits/macos-app/` | Desktop window, ~1060×600 | Dense 13px layout; a translucent window whose sidebar samples the desktop; grid vs list. |
| `ui_kits/web-marketing/` | Page, up to 1280 | Alternating translucent and opaque chapters; display type on a wallpaper. |

---

## 3 · CONTENT FUNDAMENTALS

How copy is written in this language.

**Voice.** Plain, declarative, confident without salesmanship. The product states what
it does and stops. No hedging ("we think", "maybe"), no hype adjectives ("revolutionary",
"game-changing"), no exclamation marks.

**Person.** Second person for instructions and benefits — "Sign in to sync playlists
across your devices." First-person plural only when the company is genuinely the actor
— "We never share it." Never first-person singular; the interface is not a character.

**Casing.** Sentence case everywhere: buttons, titles, list rows, menu items, section
headers. The single exception is the 11px micro label, which is uppercase with
`+0.06em` tracking — `PLAYING FROM LIBRARY`, `LIBRARY`, `TAGS`.

**Length.** Button labels are one or two words, verbs: *Continue*, *Get started*,
*Choose Studio*. Never *Click here* or *Submit*. Toast messages are three words or
fewer: *Changes saved*, *Link copied*. List-group footers are the one place longer
prose is allowed, because that is where the platform explains consequences:
"Lossless uses significantly more data and storage."

**Punctuation.** No terminal period on labels, buttons, list rows or single-line
captions. Full sentences in body copy and footers do take one. Em dashes set off a
clause — like this — and are spaced on the web surface.

**Numbers.** Always tabular numerals (`font-variant-numeric: tabular-nums`) so figures
don't shimmer when they change. Units are spaced and abbreviated: `48.2 MB`, `1.4 GB`,
`$19 / seat / mo`. Durations as `2:41`, never `2 min 41 s`.

**Emoji.** Never in product UI — not in labels, not in empty states, not in toasts.
The icon set carries that load. (Emoji in a team's internal docs is their business;
it does not belong in a rendered surface.)

**Empty and error states.** State the fact, then the fix, in that order, in one or two
short sentences. "Upload failed. Check your connection and retry." Never apologise,
never blame the user, never use "oops".

**Honest gaps.** When a surface has no source design, the kit says so on the surface
itself rather than inventing one — see the Search tab in the iOS kit. That is a content
rule, not just a build note: a placeholder that lies is worse than an empty screen.

**Examples from this system**

| Context | Copy |
| --- | --- |
| Hero | *Interfaces that let the light through.* |
| Hero sub | *A translucent design system — materials, depth and motion, shipped as tokens and components you can build on today.* |
| Primary CTA | *Start building* |
| Settings footer | *Alerts still appear on your lock screen.* |
| Destructive dialog | *Delete project?* / *This cannot be undone.* |
| Toast | *Link copied* |
| Micro label | *PLAYING FROM LIBRARY* |

---

## 4 · VISUAL FOUNDATIONS

### Colour

Neutral surfaces carry the layout; colour is reserved for accent. Light mode runs
`#ffffff` page, `#ffffff` elevated, `#f2f2f7` grouped. Dark mode runs `#000000`,
`#1c1c1e`, `#2c2c2e`. Ink is four alpha levels of a single near-black
(`#1d1d1f`, then 78% / 55% / 32% of `rgba(60,60,67,…)`), which is why text never looks
muddy against a translucent panel.

Seven system tints (blue, green, red, orange, purple, pink, yellow) brighten one step in
dark mode. **One tint per surface**, reserved for the primary action — rebind `--tint`
on a container with `.lg-tint-*`, never mix two accents in one view. Semantic status
colours alias the tints rather than introducing new hues.

### Type

`SF Pro Text` below 20px, `SF Pro Display` at 20px and up, falling back to `system-ui`
(no binaries shipped — see §7). Mono is `SF Mono` → `Menlo`. Ten sizes: 11, 12, 13, 15,
17, 22, 28, 34, 44, 56. Body is 17px on touch and 13px on dense desktop
(`data-density="dense"`). Four weights only: 400 / 500 / 600 / 700.

Tracking runs the opposite way to a web default — it **tightens** as size grows
(`-0.022em` at 34px+, `-0.006em` at body, `+0.06em` at the 11px micro label). Optical
sizing stays on.

### Spacing & layout

8pt base with 4 as the half step: 4, 8, 12, 16, 20, 24, 32, 44, 56, 80. Touch targets
are at least 44pt; dense desktop rows 28pt. Phone gutter 16, window gutter 20, page
gutter 24. The desktop split is a fixed 240px sidebar against a flexible pane. Content
runs edge to edge with chrome floating over it, and `env(safe-area-inset-*)` is always
honoured.

### Corner radii

Radius grows with the surface, never with nesting depth: 6 (tags) · 10 (inputs) ·
12 (buttons) · 14 (cards) · 16 (sheets) · 22 (glass panels) · 28 (hero containers) ·
999 (capsules, avatars, toolbars). Corners read as continuous; never mix two radii on
one object.

### Backgrounds

No raster imagery. Backdrops are pure-CSS radial gradient meshes — four of them
(`.lg-wallpaper`, `--warm`, `--cool`, `--light`), `background-attachment: fixed` so glass
samples a stable backdrop while the page scrolls. An optional 3% fractal grain
(`.lg-grain`) is available; above 3% it stops being Apple-adjacent. Imagery, when a
product adds it, should be cool-toned and low-contrast so chrome stays legible over it.

### Transparency and blur — when

This is the decision that defines the system.

- **Glass** whenever a surface sits *on top of* content the user still needs to perceive: nav bars, tab bars, toolbars, sidebars, sheets, popovers, chips over media.
- **Opaque** whenever the surface *is* the content: cards, list rows, the desktop window's main pane, marketing chapters.
- Never two glass layers stacked — a sheet's scrim is a plain dim, not a second blur.
- Blur scales with importance, not size: 8px for chips, 20px for chrome, 30px for sheets, 40px for hero panels. Saturation is always `180%`.

Four densities: ultrathin `0.28` (chips on photography), thin `0.60` (chrome that must
stay see-through), regular `0.78` (sheets, sidebars), thick `0.92` (when legibility wins).
In dark mode the body flips to `rgba(28,28,30,…)` and the **rim** carries the glass read.

### The specular anatomy

A glass surface is four layers, and the third is the one people skip:

1. `backdrop-filter: blur(…) saturate(180%)` — the lensing stand-in.
2. A low-alpha body fill.
3. `inset 0 1.5px 0 rgba(255,255,255,.85)` — the top specular edge. **This is what makes it read as glass rather than tinted film.**
4. A 0.5px perimeter rim plus a bottom inner shade, for thickness.

A `--lens-gradient` overlay on `::before` fakes edge refraction. True refraction needs
an SVG `feDisplacementMap`, which is not production-ready across browsers — the token
`--lens-gradient` is the honest approximation, and the system is designed to look
correct without it.

### Borders, shadows and depth

Hairlines are `rgba(60,60,67,0.18)` light / `rgba(84,84,88,0.65)` dark, inset to where
row text starts. Cards get **no** border — the fill is the affordance. Inputs get no
border either.

**Never drop-shadow a material surface.** Depth on glass comes from layering. Shadows
belong only to opaque objects that genuinely sit above the page: `--shadow-raised`
(cards), `--shadow-floating`, `--shadow-dragged` (a desktop window). When a glass panel
floats over a busy backdrop, ambient occlusion goes on a *wrapper* behind it
(`--shadow-ambient-glass`), never on the panel.

### Protection gradients vs capsules

Text over imagery needs protection. Static text gets a gradient
(`--protection-top` / `--protection-bottom`). Anything interactive gets an ultrathin
glass capsule instead, because a capsule also communicates that it is tappable.

### Motion

Five durations — 80ms (press) · 160ms (hover) · 240ms (most) · 360ms (sheet, push) ·
500ms (large-title collapse). Four easings, with `cubic-bezier(.32,.72,0,1)` as the
workhorse and a spring that overshoots **4% and no more**. Everything travels along one
axis or scales from its own origin; nothing fades in from nowhere, nothing eases
linearly. `prefers-reduced-motion` collapses all of it to 1ms.

### Interaction states

- **Hover** (pointer only): −1px lift, opacity to ~86%, or a step up the fill scale. Never a colour darken on a tinted control.
- **Press**: scale to `0.96` (cards and sheets to `0.985`). The scale *is* the feedback.
- **Focus**: a 4px halo in the current tint at 18% alpha. Never a hard outline.
- **Selected**: a 14–16% tint wash with tinted ink in lists and sidebars; a filled capsule for chips; a sliding opaque thumb in a segmented control.
- **Disabled**: 32% opacity, pointer events off. No grey-out, no strikethrough.

### Fallback

If a browser cannot blur the backdrop, `.lg-glass` goes **opaque** rather than shipping
unreadable transparent text. That `@supports not` block in `tokens/utilities.css` is not
optional polish — it is the accessibility floor of the system.

---

## 5 · ICONOGRAPHY

**The set.** Lucide, on a 24px grid, stroked at **1.75** — vendored into
`assets/icons/lucide/` (runtime, full sprite, and the 67-glyph subset actually used) so
pages work offline. `components/core/Icon.jsx` wraps it.

> **Substitution flagged.** The native icon set for this language is **SF Symbols**,
> which is Apple-licensed and cannot be redistributed or used off Apple platforms.
> Lucide is the closest open match — same grid, same round-cap stroke, same optical
> weight. Swap `components/core/Icon.jsx` if you hold a licence for something closer.

**Sizes.** 17px inline with body text · 20px inside controls · 24px in tab bars ·
28–36px as a hero or empty-state glyph. The stroke stays 1.75 at every size so icons
match the type's optical weight; do not scale the stroke with the box.

**Colour.** Icons inherit `currentColor`. Tertiary ink for decoration, `--tint` for the
active state, white over media. A glyph never carries a colour the text beside it does
not.

**Glyph tiles.** In grouped lists, icons sit in a 29px rounded-square tile (7px radius)
filled with a saturated hue — the platform's own settings idiom. See
`ui_kits/ios-app/SettingsScreen.jsx`.

**No emoji as iconography. No unicode characters as icons.** Both break at small sizes
and render differently per platform. There is no icon *font* in this system; the sprite
and the runtime cover both the static and dynamic cases.

**SVG vs PNG.** Everything is SVG. No PNG icons anywhere — glass surfaces sit behind
icons at arbitrary scales and a raster glyph will fringe.

**Logos.** None are shipped; see `assets/README.md`.

---

## 6 · Index

```
styles.css              ← the single entry point consumers link. @import list only.
readme.md               ← this file
SKILL.md                ← Agent Skills manifest (works in Claude Code)
package.json            ← dev-only; esbuild, for the preview bundle

tokens/                 fonts · colors · theme-dark · theme-auto · typography ·
                        spacing · radii · materials · elevation · motion ·
                        animations · semantic · base · utilities
guidelines/             27 @dsCard specimen cards, grouped Colors / Type / Spacing /
                        Glass / Motion / Brand
assets/                 icons/lucide/{lucide.min.js, sprite.svg, svg/, LICENSE}
                        assets/README.md explains what is deliberately absent
tools/                  build-preview.mjs, react-shim.js, card-head.html
preview/               generated — bundle.js and kit-*.js (do not edit)
```

**Components** — 30, all `export function <Name>(props)`, each with a sibling `.d.ts`
and `.prompt.md`:

| Group | Components |
| --- | --- |
| `components/core/` | Button · IconButton · GlassPanel · Card · Badge · Chip · Avatar · Divider · Icon |
| `components/forms/` | Input · Textarea · Select · SearchField · Switch · Checkbox · Radio · SegmentedControl · Slider |
| `components/feedback/` | Sheet · Dialog · Toast · Alert · Spinner · ProgressBar |
| `components/navigation/` | NavBar · TabBar · Sidebar · Toolbar · ListGroup · ListRow |

**UI kits** — each with its own `README.md` and interactive `index.html`:

| Kit | Screens |
| --- | --- |
| `ui_kits/ios-app/` | OnboardingScreen · LibraryScreen · NowPlayingScreen · SettingsScreen |
| `ui_kits/macos-app/` | WindowChrome (+ TrafficLights) · FileBrowser · Inspector |
| `ui_kits/web-marketing/` | SiteHeader · Hero · FeatureSection · PricingSection · SiteFooter |

**Starting points** — Button, GlassPanel, Input, SegmentedControl, NavBar, Sheet, and
all three UI kit screens are tagged `@startingPoint`.

### Running it locally

```bash
npm install                    # esbuild, dev only
node tools/build-preview.mjs   # writes preview/bundle.js and preview/kit-*.js
python3 -m http.server 8000    # open /ui_kits/ios-app/index.html
```

The `preview/` bundles exist so the cards and kits render without the project
compiler. When the compiler runs it emits `_ds_bundle.js` at the root, which every card
loads first; the preview bundle only fills in if that is absent.

---

## 7 · Caveats

1. **No font binaries.** SF Pro cannot be redistributed. The stack resolves to `system-ui`, which *is* SF Pro on Apple hardware and degrades to Segoe UI Variable / Roboto elsewhere. `tokens/fonts.css` has a commented `@font-face` block if you hold a licence.
2. **Icon substitution.** Lucide stands in for SF Symbols. Flagged above and in `Icon.prompt.md`.
3. **No slide kit.** None was supplied, so none was invented.
4. **UI kits are original surfaces, not recreations.** No product codebase or Figma file came with the brief, so the kits demonstrate the language on plausible surfaces ("Prism") rather than reproducing a real shipped product. Give me a codebase or a Figma link and the kits should be rebuilt against it — recreating from screenshots alone would be lossy and is not how these should be made.
5. **True refraction is approximated.** `backdrop-filter` cannot displace pixels. `--lens-gradient` plus the specular stack is the honest CSS approximation; SVG `feDisplacementMap` works in Chromium only and is not wired in.
6. **No logos.** See `assets/README.md`.

---

## 8 · Licence

MIT — see [LICENSE](LICENSE). Third-party attributions and the list of material
deliberately excluded are in [NOTICE](NOTICE).
