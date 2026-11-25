The system's action control — use it for anything the user taps or clicks to commit, and keep exactly one `primary` button per surface.

```jsx
<Button variant="primary" size="lg">Continue</Button>
<Button variant="bordered">Learn more</Button>
<Button variant="plain">Cancel</Button>
<Button variant="glass" shape="capsule" leading={<Icon name="plus" />}>New</Button>
```

Variants: `primary` (filled tint), `bordered` (1px tint border, clear fill), `plain` (text only), `glass` (floats over imagery or a wallpaper), `tinted` (14% tint wash), `destructive` (red fill).
Sizes: `sm` 28px for dense desktop, `md` 36px, `lg` 44px — the touch minimum.
Press feedback is a 0.96 scale, never a colour darken. `loading` replaces the leading slot with a spinner.
