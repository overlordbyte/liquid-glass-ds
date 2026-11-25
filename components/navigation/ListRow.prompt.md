One row in a grouped list — 44px minimum height, with slots for a leading glyph, a value and a trailing control.

```jsx
<ListRow leading={<Avatar name="Ali" size={32} />} title="Ali Karimov" subtitle="Online" chevron onClick={open} />
<ListRow title="Appearance" value="Automatic" chevron />
<ListRow title="Sign out" destructive onClick={signOut} />
```

Use `chevron` only when the row pushes a new screen — never alongside a `Switch`.
