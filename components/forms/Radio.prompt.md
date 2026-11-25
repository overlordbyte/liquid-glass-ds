One choice from a short visible set; share a `name` across the group.

```jsx
<Radio name="plan" value="monthly" checked={plan === "monthly"} onChange={setPlan} label="Monthly" />
```

For three or fewer short options on one line, prefer `SegmentedControl`.
