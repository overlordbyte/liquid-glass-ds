The material primitive — reach for this whenever a surface should let the backdrop through: nav bars, sheets, sidebars, floating widgets, chips over photography.

```jsx
<GlassPanel density="thin" radius="capsule" style={{ padding: "8px 16px" }}>Now playing</GlassPanel>
<GlassPanel density="regular" radius="sheet" float style={{ padding: 24 }}>…</GlassPanel>
```

Densities: `ultrathin` (.28, chips on photos), `thin` (.60, chrome that must stay see-through), `regular` (.78, sheets and sidebars), `thick` (.92, when legibility wins).
It needs something behind it — put `.lg-wallpaper` on an ancestor, or place it over imagery. Use `float` for ambient occlusion; never add a `box-shadow` to the panel itself.
