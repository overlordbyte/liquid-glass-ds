import React from "react";
import { NavBar } from "../../components/navigation/NavBar.jsx";
import { ListGroup } from "../../components/navigation/ListGroup.jsx";
import { ListRow } from "../../components/navigation/ListRow.jsx";
import { Switch } from "../../components/forms/Switch.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Avatar } from "../../components/core/Avatar.jsx";
import { Badge } from "../../components/core/Badge.jsx";

function Tile({ name, hue }) {
  return (
    <span style={{
      width: 29, height: 29, borderRadius: 8, display: "grid", placeItems: "center",
      background: `hsl(${hue} 82% 52%)`, boxShadow: "var(--specular-rim)",
    }}>
      <Icon name={name} size={16} color="#fff" />
    </span>
  );
}

export function SettingsScreen({ scrolled, onScroll }) {
  const [downloads, setDownloads] = React.useState(true);
  const [cellular, setCellular] = React.useState(false);
  const [lossless, setLossless] = React.useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--surface-grouped)" }}>
      <NavBar title="Settings" largeTitle collapsed={scrolled} />
      <div onScroll={(e) => onScroll(e.currentTarget.scrollTop > 16)}
        style={{ flex: 1, overflowY: "auto", padding: "4px var(--inset-screen) 24px", display: "grid", gap: 22 }}>
        <ListGroup inset={60}>
          <ListRow
            leading={<Avatar name="Abduraxmon Yusupov" size={44} />}
            title="Abduraxmon Yusupov"
            subtitle="Apple-adjacent · Tashkent"
            chevron
          />
        </ListGroup>

        <ListGroup title="Playback" footer="Lossless uses significantly more data and storage." inset={54}>
          <ListRow leading={<Tile name="download" hue={212} />} title="Automatic downloads"
            trailing={<Switch checked={downloads} onChange={setDownloads} label="Automatic downloads" />} />
          <ListRow leading={<Tile name="signal" hue={162} />} title="Use cellular data"
            trailing={<Switch checked={cellular} onChange={setCellular} label="Cellular" />} />
          <ListRow leading={<Tile name="audio-waveform" hue={288} />} title="Lossless audio"
            trailing={<Switch checked={lossless} onChange={setLossless} label="Lossless" />} />
          <ListRow leading={<Tile name="equal" hue={14} />} title="EQ preset" value="Flat" chevron />
        </ListGroup>

        <ListGroup title="Appearance" inset={54}>
          <ListRow leading={<Tile name="contrast" hue={242} />} title="Theme" value="Automatic" chevron />
          <ListRow leading={<Tile name="droplet" hue={340} />} title="Accent" value="Blue" chevron />
          <ListRow leading={<Tile name="type" hue={44} />} title="Text size" value="Default" chevron />
        </ListGroup>

        <ListGroup title="Storage" footer="Downloads are removed oldest-first when space runs low." inset={54}>
          <ListRow leading={<Tile name="hard-drive" hue={200} />} title="Downloads" value="4.8 GB" chevron />
          <ListRow leading={<Tile name="bell" hue={28} />} title="Notifications" trailing={<Badge tone="tint">3</Badge>} />
        </ListGroup>

        <ListGroup>
          <ListRow title="Sign out" destructive />
        </ListGroup>
      </div>
    </div>
  );
}
