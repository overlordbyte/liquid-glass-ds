Circular identity token; renders the image when `src` is set and up to two initials otherwise.

```jsx
<Avatar name="Abduraxmon Yusupov" size={44} />
<Avatar src={user.photo} name={user.name} ring />
```

Always circular. `ring` draws a tint ring for live or active states.
