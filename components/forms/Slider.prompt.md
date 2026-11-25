Continuous value control — volume, brightness, a numeric range.

```jsx
<Slider value={vol} onChange={setVol} leading={<Icon name="volume-1" size={17} />} trailing={<Icon name="volume-2" size={17} />} />
```

4px track, 26px knob, filled portion in the surface tint. Don't label every tick; show the value elsewhere if it matters.
