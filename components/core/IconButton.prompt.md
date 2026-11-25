A circular glyph-only control for toolbars, nav bars and floating glass chrome; `label` is required and becomes the accessible name.

```jsx
<IconButton label="Search" variant="glass" size="lg"><Icon name="search" /></IconButton>
<IconButton label="More" variant="plain"><Icon name="ellipsis" /></IconButton>
```

Always circular (`--radius-full`). Use `glass` when it floats over media, `subtle` for a neutral fill inside an opaque card.
