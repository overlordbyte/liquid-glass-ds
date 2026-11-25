A floating capsule of actions over content — a map, a photo, a document view.

```jsx
<Toolbar position="bottom">
  <IconButton label="Back"><Icon name="chevron-left" /></IconButton>
  <IconButton label="Share"><Icon name="share" /></IconButton>
  <IconButton label="More"><Icon name="ellipsis" /></IconButton>
</Toolbar>
```

The parent needs `position: relative`. It floats clear of the edges; it never spans the full width.
