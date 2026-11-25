import React from "react";
import { Icon } from "../../components/core/Icon.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { SegmentedControl } from "../../components/forms/SegmentedControl.jsx";

const FILES = [
  { id: 1, name: "Brand Refresh.sketch", kind: "Design", size: "48.2 MB", hue: 212, icon: "pen-tool" },
  { id: 2, name: "Q4 Roadmap.pdf", kind: "Document", size: "2.1 MB", hue: 14, icon: "file-text" },
  { id: 3, name: "Chorvoq.mov", kind: "Movie", size: "1.4 GB", hue: 288, icon: "clapperboard" },
  { id: 4, name: "tokens.css", kind: "Stylesheet", size: "14 KB", hue: 162, icon: "braces" },
  { id: 5, name: "Team Photo.heic", kind: "Image", size: "6.8 MB", hue: 340, icon: "image" },
  { id: 6, name: "Budget 2027.numbers", kind: "Spreadsheet", size: "820 KB", hue: 96, icon: "table" },
  { id: 7, name: "Launch Deck.key", kind: "Presentation", size: "92 MB", hue: 44, icon: "presentation" },
  { id: 8, name: "notes.md", kind: "Markdown", size: "3 KB", hue: 242, icon: "notebook-pen" },
];

export function FileBrowser({ selected, onSelect, layout, onLayout }) {
  return (
    <div style={{ padding: "var(--space-4)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
        <div style={{ fontSize: "var(--size-11)", fontWeight: 600, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-tertiary)" }}>
          {FILES.length} items
        </div>
        <div style={{ width: 160 }}>
          <SegmentedControl size="sm" options={["Grid", "List"]} value={layout} onChange={onLayout} />
        </div>
      </div>

      {layout === "Grid" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))", gap: "var(--space-4)" }}>
          {FILES.map((f) => (
            <button key={f.id} type="button" onClick={() => onSelect(f)} style={{ textAlign: "center" }}>
              <div style={{
                aspectRatio: "4/3", borderRadius: "var(--radius-md)", display: "grid", placeItems: "center",
                background: `linear-gradient(150deg, hsl(${f.hue} 70% 62%), hsl(${f.hue + 28} 64% 46%))`,
                boxShadow: selected?.id === f.id
                  ? "var(--shadow-raised), 0 0 0 3px color-mix(in srgb, var(--tint) 45%, transparent)"
                  : "var(--shadow-raised), var(--specular-rim)",
                transition: "box-shadow var(--dur-fast) var(--ease-standard)",
              }}>
                <Icon name={f.icon} size={28} color="rgba(255,255,255,.95)" />
              </div>
              <div style={{ marginTop: 7, fontSize: "var(--size-12)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
              <div style={{ fontSize: "var(--size-11)", color: "var(--text-tertiary)" }}>{f.size}</div>
            </button>
          ))}
        </div>
      ) : (
        <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-card)", overflow: "hidden", boxShadow: "var(--specular-rim)" }}>
          {FILES.map((f, i) => (
            <button key={f.id} type="button" onClick={() => onSelect(f)}
              style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%",
                height: 34, padding: "0 12px", textAlign: "left",
                background: selected?.id === f.id ? "color-mix(in srgb, var(--tint) 14%, transparent)" : "transparent",
                boxShadow: i > 0 ? "inset 0 .5px 0 var(--separator)" : "none",
              }}>
              <span style={{ width: 20, height: 20, borderRadius: 5, display: "grid", placeItems: "center", background: `hsl(${f.hue} 70% 55%)` }}>
                <Icon name={f.icon} size={12} color="#fff" />
              </span>
              <span style={{ flex: 1, minWidth: 0, fontSize: "var(--size-13)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
              <span style={{ fontSize: "var(--size-11)", color: "var(--text-tertiary)", width: 90 }}>{f.kind}</span>
              <span style={{ fontSize: "var(--size-11)", color: "var(--text-tertiary)", width: 64, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{f.size}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export const BROWSER_FILES = FILES;
