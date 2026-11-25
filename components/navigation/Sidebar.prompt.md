The desktop rail: 240px wide, regular material, uppercase 11px section headers, 28px dense rows.

```jsx
<Sidebar
  header={<SearchField value={q} onChange={setQ} />}
  value={view}
  onChange={setView}
  sections={[{ title: "Library", items: [{ value: "all", label: "All Files", icon: <Icon name="folder" size={16} /> }] }]}
/>
```

The active row is a 16% tint wash with tinted ink — not a filled pill. Pair with `--sidebar-width` in the window's grid.
