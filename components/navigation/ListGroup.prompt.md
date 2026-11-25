The grouped list — settings, detail pages, option sets. Wraps `ListRow` children and draws the inset hairlines itself.

```jsx
<ListGroup title="Notifications" footer="Alerts still appear on your lock screen.">
  <ListRow title="Allow notifications" trailing={<Switch checked={on} onChange={setOn} />} />
  <ListRow title="Sounds" value="Chime" chevron />
</ListGroup>
```

Set `inset` to 56 when rows start with an avatar or icon, so the rule starts under the text.
