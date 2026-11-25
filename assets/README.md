# Assets

## What is here

| Path | What it is | Licence |
| --- | --- | --- |
| `icons/lucide/lucide.min.js` | The Lucide runtime, vendored so pages work offline. Drop-in replacement for the unpkg CDN tag. | ISC |
| `icons/lucide/sprite.svg` | The full Lucide sprite — reference a glyph with `<svg><use href="…/sprite.svg#search"/></svg>`. | ISC |
| `icons/lucide/svg/` | The 67-glyph subset this system actually uses, as individual files. | ISC |
| `icons/lucide/LICENSE` | Lucide's licence. Keep it alongside the files. | — |

## What is NOT here, and why

**No logos or brand marks.** No product codebase, Figma file or brand kit was supplied
with this system, so there is nothing authentic to copy in. Where a mark is needed the
UI kits use a Lucide glyph plus a wordmark set in the display face — see
`ui_kits/web-marketing/SiteHeader.jsx`. Drop your own SVG in `assets/logos/` and swap
that one element.

**No font binaries.** SF Pro Text / Display / Mono are Apple-licensed and cannot be
redistributed. `tokens/fonts.css` resolves to the host system face instead, which *is*
SF Pro on Apple hardware. If you hold a licence, put the `.woff2` files in
`assets/fonts/` and uncomment the `@font-face` block at the bottom of that file.

**No raster imagery.** Every backdrop in this system is a pure-CSS gradient mesh
(`.lg-wallpaper`, `--warm`, `--cool`, `--light` in `tokens/utilities.css`). They scale to
any viewport, cost nothing to download, and carry no licensing question. If you add
photography, keep it cool-toned and low-contrast — glass chrome placed over a busy warm
photo stops being legible.

**No SF Symbols.** Lucide is the substitute: same 24px grid, same round-cap stroke, same
optical weight at 1.75. Flagged as a substitution — swap `components/core/Icon.jsx` if
you have a licensed set.
