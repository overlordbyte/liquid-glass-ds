import React from "react";
import { GlassPanel } from "../../components/core/GlassPanel.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Icon } from "../../components/core/Icon.jsx";

/** Sign-in over a wallpaper: the clearest demonstration of thick glass. */
export function OnboardingScreen({ onSignIn }) {
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [err, setErr] = React.useState("");

  const submit = () => {
    if (!email.includes("@")) return setErr("Enter a valid email address");
    setErr("");
    onSignIn();
  };

  return (
    <div className="lg-wallpaper" style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      justifyContent: "flex-end", padding: "0 20px calc(var(--safe-bottom) + 24px)",
    }}>
      <div style={{ flex: 1, display: "grid", placeItems: "center" }}>
        <div style={{ textAlign: "center", color: "#fff" }}>
          <GlassPanel density="ultrathin" radius="hero" style={{ width: 76, height: 76, display: "grid", placeItems: "center", margin: "0 auto 18px" }}>
            <Icon name="audio-lines" size={34} color="#fff" />
          </GlassPanel>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)", lineHeight: 1.08 }}>
            Your library,<br />everywhere.
          </div>
          <div style={{ fontSize: "var(--size-17)", color: "rgba(255,255,255,.72)", marginTop: 10, maxWidth: 280, marginInline: "auto" }}>
            Sign in to sync playlists and downloads across your devices.
          </div>
        </div>
      </div>

      <GlassPanel density="thick" radius="panel" float style={{ padding: 20, display: "grid", gap: 14 }}>
        <Input label="Email" type="email" placeholder="you@example.com" value={email}
          onChange={(e) => setEmail(e.target.value)} error={err || undefined}
          leading={<Icon name="mail" size={17} />} />
        <Input label="Password" type="password" placeholder="••••••••" value={pw}
          onChange={(e) => setPw(e.target.value)} leading={<Icon name="lock" size={17} />} />
        <Button variant="primary" size="lg" fullWidth onClick={submit}>Sign in</Button>
        <Button variant="plain" size="md" fullWidth>Forgot password?</Button>
      </GlassPanel>
    </div>
  );
}
