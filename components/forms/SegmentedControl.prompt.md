Two to four mutually exclusive options on one line — a view switcher, not navigation.

```jsx
<SegmentedControl options={["Day", "Week", "Month"]} value={range} onChange={setRange} />
```

The thumb slides; it never fades. Beyond four options the labels stop fitting — use a `Select`.
