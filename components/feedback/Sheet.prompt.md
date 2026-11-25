The platform's modal — slides up from the bottom edge on regular material, with a grabber and detents.

```jsx
<Sheet open={open} onClose={close} detent="half" title="Share">
  <ListGroup>…</ListGroup>
</Sheet>
```

The parent needs `position: relative`. The scrim is a plain dim, never a blur — two blurs stacked read as fog. On desktop use `Dialog` instead.
