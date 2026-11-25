import React from "react";
import { Icon } from "../../components/core/Icon.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Divider } from "../../components/core/Divider.jsx";
import { Switch } from "../../components/forms/Switch.jsx";

/** Inspector — the trailing detail rail, on regular material. */
export function Inspector({ file, onClose }) {
  const [shared, setShared] = React.useState(false);
  if (!file) {
    return (
      <aside style={{ width: 232, flex: "0 0 auto", display: "grid", placeItems: "center", padding: 20,
        background: "var(--surface-sheet)", WebkitBackdropFilter: "var(--backdrop-regular)", backdropFilter: "var(--backdrop-regular)",
        boxShadow: "inset .5px 0 0 var(--separator)" }}>
        <div style={{ textAlign: "center", color: "var(--text-tertiary)" }}>
          <Icon name="panel-right" size={22} color="var(--text-tertiary)" />
          <div style={{ fontSize: "var(--size-12)", marginTop: 8 }}>Select a file to inspect it</div>
        </div>
      </aside>
    );
  }
  const rows = [["Kind", file.kind], ["Size", file.size], ["Created", "12 Nov 2026"], ["Modified", "Today, 09:14"], ["Where", "Projects / 2026"]];
  return (
    <aside style={{ width: 232, flex: "0 0 auto", overflowY: "auto", padding: 16,
      background: "var(--surface-sheet)", WebkitBackdropFilter: "var(--backdrop-regular)", backdropFilter: "var(--backdrop-regular)",
      boxShadow: "inset .5px 0 0 var(--separator)" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}>
        <button type="button" aria-label="Close inspector" onClick={onClose} style={{ color: "var(--text-tertiary)" }}>
          <Icon name="x" size={15} color="var(--text-tertiary)" />
        </button>
      </div>
      <div style={{
        aspectRatio: "4/3", borderRadius: "var(--radius-md)", display: "grid", placeItems: "center",
        background: `linear-gradient(150deg, hsl(${file.hue} 70% 62%), hsl(${file.hue + 28} 64% 46%))`,
        boxShadow: "var(--shadow-raised)", marginBottom: 12,
      }}>
        <Icon name={file.icon} size={36} color="rgba(255,255,255,.95)" />
      </div>
      <div style={{ fontSize: "var(--size-13)", fontWeight: 600, wordBreak: "break-word" }}>{file.name}</div>
      <Divider style={{ margin: "12px 0" }} />
      {rows.map(([k, v]) => (
        <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, padding: "3px 0", fontSize: "var(--size-11)" }}>
          <span style={{ color: "var(--text-tertiary)" }}>{k}</span>
          <span style={{ textAlign: "right" }}>{v}</span>
        </div>
      ))}
      <Divider style={{ margin: "12px 0" }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span style={{ fontSize: "var(--size-12)" }}>Shared link</span>
        <Switch checked={shared} onChange={setShared} label="Shared link" />
      </div>
      <div style={{ display: "grid", gap: 6, marginTop: 14 }}>
        <Button size="sm" fullWidth>Open</Button>
        <Button size="sm" variant="bordered" fullWidth>Get Info</Button>
      </div>
    </aside>
  );
}
