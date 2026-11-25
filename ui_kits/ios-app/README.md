# iOS App Kit

A phone-sized surface in the liquid-glass language: full-bleed content with floating
translucent chrome, a collapsing large title, and every control that sits over
artwork rendered on glass.

## Screens

| File | What it shows |
| --- | --- |
| `OnboardingScreen.jsx` | Sign-in over a gradient wallpaper. Thick-glass form card, inset fields, 44px primary button. |
| `LibraryScreen.jsx` | Collapsing large title, glass search field, horizontally scrolling glass chips, 2-up artwork grid. Search filters live. |
| `NowPlayingScreen.jsx` | Full-bleed player. Artwork scales on pause; transport sits on thick glass; secondary actions on ultrathin capsules. |
| `SettingsScreen.jsx` | Grouped lists on the grouped surface — tinted glyph tiles, switches, value rows, footers that carry the "why". |

`index.html` is the interactive click-through: sign in → browse → tap an album → player →
share sheet → toast. The tab bar switches surfaces; `Search` is deliberately left blank
with a disclaimer, because no source design was supplied for it.

## Composition rules this kit follows

- Content runs edge to edge; the nav bar and tab bar float over it on thin material.
- The wallpaper lives on the screen root, so the chrome has something to blur.
- One tint per surface. The player rebinds `--tint` to white because its backdrop is saturated artwork.
- No drop shadows on any glass. Artwork tiles — which are opaque — do get `--shadow-raised`.
- `--safe-top` / `--safe-bottom` are set on the phone frame in `index.html`; real devices get them from `env()`.

## Run it

```bash
node tools/build-preview.mjs   # from the project root
python3 -m http.server 8000    # then open /ui_kits/ios-app/index.html
```
