A centred alert for a decision that cannot be deferred — 272px wide, thick material, hairline-divided actions.

```jsx
<Dialog
  open={open}
  title="Delete project?"
  message="This cannot be undone."
  actions={[{ label: "Cancel", onPress: close }, { label: "Delete", emphasis: "destructive", onPress: del }]}
/>
```

One or two actions only; three or more belong in a `Sheet`. The destructive action is red and never the emphasised one.
