The system's text field — inset fill, no border, tint halo on focus.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" hint="We never share it." />
<Input leading={<Icon name="search" />} placeholder="Search" size="sm" />
<Input label="Name" error="Required" />
```

Never give a field a 1px border: the fill *is* the affordance. Keep the 44px height on touch surfaces.
