import React from "react";
import { NavBar } from "../../components/navigation/NavBar.jsx";
import { SearchField } from "../../components/forms/SearchField.jsx";
import { Chip } from "../../components/core/Chip.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { IconButton } from "../../components/core/IconButton.jsx";
import { Badge } from "../../components/core/Badge.jsx";

const ALBUMS = [
  { id: 1, title: "Bahor Shamoli", artist: "Nilufar Usmonova", hue: 212, tracks: 12 },
  { id: 2, title: "Oqshom", artist: "Sevara Nazarkhan", hue: 288, tracks: 9 },
  { id: 3, title: "Kecha Yo'llari", artist: "Jahongir Poziljonov", hue: 14, tracks: 11 },
  { id: 4, title: "Chorvoq", artist: "Ulug'bek Rahmatullayev", hue: 162, tracks: 8 },
  { id: 5, title: "Registon", artist: "Yulduz Usmonova", hue: 340, tracks: 14 },
  { id: 6, title: "Shahar Ovozi", artist: "Shahzoda", hue: 44, tracks: 10 },
];

export function LibraryScreen({ onOpen, scrolled, onScroll, query, onQuery, filter, onFilter }) {
  const list = ALBUMS.filter((a) =>
    !query || (a.title + a.artist).toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <NavBar
        title="Library"
        largeTitle
        collapsed={scrolled}
        trailing={<IconButton label="Add" variant="plain"><Icon name="plus" size={22} /></IconButton>}
        below={<SearchField glass value={query} onChange={onQuery} onClear={() => onQuery("")} placeholder="Artists, Songs, Albums" />}
      />
      <div
        onScroll={(e) => onScroll(e.currentTarget.scrollTop > 16)}
        style={{ flex: 1, overflowY: "auto", padding: "0 var(--inset-screen) 20px" }}
      >
        <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "4px 0 14px" }}>
          {["All", "Recent", "Downloaded", "Playlists"].map((f) => (
            <Chip key={f} glass selected={filter === f} onClick={() => onFilter(f)}>{f}</Chip>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {list.map((a) => (
            <button key={a.id} type="button" onClick={() => onOpen(a)} style={{ textAlign: "left" }}>
              <div style={{
                aspectRatio: "1", borderRadius: "var(--radius-lg)", position: "relative",
                background: `linear-gradient(145deg, hsl(${a.hue} 78% 62%), hsl(${a.hue + 34} 70% 44%))`,
                boxShadow: "var(--shadow-raised), var(--specular-rim)", overflow: "hidden",
              }}>
                <span style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(70% 60% at 25% 18%, rgba(255,255,255,.42), transparent 70%)",
                }} />
                <span style={{ position: "absolute", right: 8, bottom: 8 }}>
                  <Badge tone="glass" size="sm">{a.tracks}</Badge>
                </span>
              </div>
              <div style={{ marginTop: 8, fontSize: "var(--size-15)", fontWeight: "var(--weight-semibold)", color: "var(--text-on-media)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {a.title}
              </div>
              <div style={{ fontSize: "var(--size-13)", color: "rgba(255,255,255,0.68)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {a.artist}
              </div>
            </button>
          ))}
        </div>
        {list.length === 0 && (
          <div style={{ padding: "48px 0", textAlign: "center", color: "rgba(255,255,255,0.7)" }}>
            <Icon name="search-x" size={28} />
            <div style={{ marginTop: 10, fontSize: "var(--size-15)" }}>No results for “{query}”</div>
          </div>
        )}
      </div>
    </div>
  );
}

export const LIBRARY_ALBUMS = ALBUMS;
