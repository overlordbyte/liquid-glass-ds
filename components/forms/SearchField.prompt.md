Capsule search input — under a large title, in a sidebar, or floating over a map or list.

```jsx
<SearchField value={q} onChange={setQ} onClear={() => setQ("")} />
<SearchField glass placeholder="Search places" />
```

Always a capsule. Use `glass` when it floats over scrolling content; the clear button appears only once there is a value.
