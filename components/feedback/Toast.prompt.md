A transient one-line confirmation floating at the top edge — "Copied", "Saved", "Offline".

```jsx
<Toast open={saved} message="Changes saved" tone="success" icon={<Icon name="check" size={16} />} />
```

Capsule, thick material, no buttons and no close affordance — it dismisses itself after ~2s. If the user must act on it, use an `Alert` or a `Dialog`.
