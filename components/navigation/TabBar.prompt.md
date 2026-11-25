Bottom chrome for three to five top-level destinations.

```jsx
<TabBar
  value={tab}
  onChange={setTab}
  items={[
    { value: "home", label: "Home", icon: <Icon name="house" size={24} /> },
    { value: "search", label: "Search", icon: <Icon name="search" size={24} /> },
    { value: "me", label: "You", icon: <Icon name="user" size={24} /> },
  ]}
/>
```

The active item takes the surface tint; inactive items are tertiary ink. Honour `--safe-bottom`.
