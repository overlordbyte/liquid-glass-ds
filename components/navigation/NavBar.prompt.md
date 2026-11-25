Top chrome on thin material, with the platform's collapsing large title.

```jsx
<NavBar
  title="Library"
  largeTitle
  collapsed={scrollY > 20}
  trailing={<IconButton label="Add"><Icon name="plus" /></IconButton>}
  below={<SearchField value={q} onChange={setQ} />}
/>
```

Content scrolls *under* it — that is the whole point of the material. The hairline appears only once something is behind the bar.
