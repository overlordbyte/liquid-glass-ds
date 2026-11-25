Picker for five or more options; stays a native `<select>` so the platform's own wheel or menu appears.

```jsx
<Select label="Region" options={["Tashkent", "Andijan", "Samarkand"]} value={region} onChange={setRegion} />
```

Same inset fill and 10px radius as `Input`, with a chevron at the trailing edge. Four options or fewer → `SegmentedControl`.
