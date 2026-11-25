Opaque elevated container for content that sits on the page rather than floating over it — 14px radius, no border, a soft raised shadow.

```jsx
<Card padding="lg"><h3 className="lg-title2">Weekly report</h3></Card>
<Card interactive onClick={open}>…</Card>
```

Never put a 1px hard border on a card and never give it a coloured left border. If the surface should show the backdrop through it, use `GlassPanel` instead.
