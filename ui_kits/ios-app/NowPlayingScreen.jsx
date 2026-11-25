import React from "react";
import { GlassPanel } from "../../components/core/GlassPanel.jsx";
import { IconButton } from "../../components/core/IconButton.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Slider } from "../../components/forms/Slider.jsx";

/** Full-bleed now-playing view: artwork behind, every control on glass. */
export function NowPlayingScreen({ album, onClose, onShare }) {
  const [playing, setPlaying] = React.useState(true);
  const [pos, setPos] = React.useState(74);
  const [vol, setVol] = React.useState(62);
  const hue = album?.hue ?? 212;

  const fmt = (p) => {
    const total = 218;
    const s = Math.round((p / 100) * total);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: "var(--z-sheet)",
      display: "flex", flexDirection: "column",
      background: `linear-gradient(170deg, hsl(${hue} 70% 40%), hsl(${hue + 40} 62% 16%))`,
      animation: "lg-sheet-in var(--dur-slow) var(--ease-standard)",
      paddingTop: "var(--safe-top)",
    }}>
      <div style={{ display: "flex", alignItems: "center", padding: "10px 8px" }}>
        <IconButton label="Close" variant="plain" onClick={onClose} style={{ color: "rgba(255,255,255,.9)" }}>
          <Icon name="chevron-down" size={22} color="rgba(255,255,255,.9)" />
        </IconButton>
        <div style={{ flex: 1, textAlign: "center", fontSize: "var(--size-12)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "rgba(255,255,255,.7)", fontWeight: 600 }}>
          Playing from library
        </div>
        <IconButton label="Share" variant="plain" onClick={onShare}>
          <Icon name="share" size={20} color="rgba(255,255,255,.9)" />
        </IconButton>
      </div>

      <div style={{ flex: 1, display: "grid", placeItems: "center", padding: "0 28px" }}>
        <div style={{
          width: "100%", aspectRatio: "1", borderRadius: "var(--radius-3xl)",
          background: `linear-gradient(145deg, hsl(${hue} 80% 66%), hsl(${hue + 34} 72% 42%))`,
          boxShadow: "0 28px 60px rgba(0,0,0,.42), var(--specular-rim)",
          position: "relative", overflow: "hidden",
          transform: playing ? "scale(1)" : "scale(0.88)",
          transition: "transform var(--dur-slow) var(--ease-spring)",
        }}>
          <span style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 60% at 24% 16%, rgba(255,255,255,.45), transparent 70%)" }} />
        </div>
      </div>

      <div style={{ padding: "0 28px 8px" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-22)", fontWeight: 700, letterSpacing: "var(--tracking-title)", color: "#fff" }}>
          {album?.title ?? "Bahor Shamoli"}
        </div>
        <div style={{ fontSize: "var(--size-17)", color: "rgba(255,255,255,.66)" }}>{album?.artist ?? "Nilufar Usmonova"}</div>
      </div>

      <div className="lg-tint-blue" style={{ padding: "6px 28px 0", "--tint": "rgba(255,255,255,.92)" }}>
        <Slider value={pos} onChange={setPos} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--size-11)", color: "rgba(255,255,255,.6)", fontVariantNumeric: "tabular-nums", marginTop: -2 }}>
          <span>{fmt(pos)}</span><span>-{fmt(100 - pos)}</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 26, padding: "14px 0 6px" }}>
        <IconButton label="Previous" variant="plain"><Icon name="skip-back" size={26} color="#fff" /></IconButton>
        <GlassPanel density="thick" radius="capsule" style={{ width: 68, height: 68, display: "grid", placeItems: "center" }}>
          <button type="button" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((p) => !p)} style={{ display: "grid", placeItems: "center", width: "100%", height: "100%" }}>
            <Icon name={playing ? "pause" : "play"} size={28} color="var(--fg-1)" />
          </button>
        </GlassPanel>
        <IconButton label="Next" variant="plain"><Icon name="skip-forward" size={26} color="#fff" /></IconButton>
      </div>

      <div style={{ padding: "0 28px 10px", "--tint": "rgba(255,255,255,.8)" }}>
        <Slider value={vol} onChange={setVol}
          leading={<Icon name="volume-1" size={15} color="rgba(255,255,255,.6)" />}
          trailing={<Icon name="volume-2" size={15} color="rgba(255,255,255,.6)" />} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 10, padding: "0 28px calc(var(--safe-bottom) + 18px)" }}>
        {["list-music", "airplay", "repeat"].map((n) => (
          <GlassPanel key={n} density="ultrathin" radius="capsule" style={{ width: 44, height: 36, display: "grid", placeItems: "center" }}>
            <Icon name={n} size={18} color="rgba(255,255,255,.9)" />
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}
