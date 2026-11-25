# macOS App Kit

A desktop window in the liquid-glass language: dense 13px body text, a 240px
regular-material sidebar, thin-material toolbar, and a trailing inspector rail.
The whole window is a single opaque object floating over the desktop wallpaper —
so the window *does* get `--shadow-dragged`, while the glass panes inside it get none.

## Screens

| File | What it shows |
| --- | --- |
| `WindowChrome.jsx` | The shell: traffic lights, thin-material toolbar with a hairline, the 240/flex/inspector split. Exports `TrafficLights` too. |
| `FileBrowser.jsx` | Grid and list layouts behind a `SegmentedControl`. Selection is a 3px tint ring in grid, a 14% tint wash in list. |
| `Inspector.jsx` | Regular-material detail rail: preview, metadata rows, a share switch, stacked actions. Has a real empty state. |

`index.html` is the interactive window: switch sidebar sections, flip grid/list,
select a file to open the inspector, create a folder to fire a toast.

## Composition rules this kit follows

- `data-density="dense"` on the window root drops body copy to 13px and rows to 28px.
- The sidebar and inspector are `--material-regular`; the toolbar is `--material-thin`. They read as one pane of glass at different depths, which is why the blur differs but the tint does not.
- Separators are inset box-shadows (`inset .5px 0 0 var(--separator)`), not borders, so they never add to layout width.
- File tiles are opaque, so they take `--shadow-raised`. Nothing translucent carries a shadow.
