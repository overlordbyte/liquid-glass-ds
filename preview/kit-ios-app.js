var __LG_KIT = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // tools/.entry-ios-app.js
  var entry_ios_app_exports = {};
  __export(entry_ios_app_exports, {
    LIBRARY_ALBUMS: () => LIBRARY_ALBUMS,
    LibraryScreen: () => LibraryScreen,
    NowPlayingScreen: () => NowPlayingScreen,
    OnboardingScreen: () => OnboardingScreen,
    SettingsScreen: () => SettingsScreen
  });

  // tools/react-shim.js
  var React = window.React;
  var react_shim_default = React;
  var useState = React.useState;
  var useEffect = React.useEffect;
  var useRef = React.useRef;
  var useId = React.useId;
  var useMemo = React.useMemo;
  var useCallback = React.useCallback;
  var Children = React.Children;
  var Fragment = React.Fragment;
  var createElement = React.createElement;

  // components/navigation/NavBar.jsx
  function NavBar({ title, largeTitle = false, collapsed = false, leading, trailing, below, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement(
      "header",
      {
        style: {
          position: "sticky",
          top: 0,
          zIndex: "var(--z-chrome)",
          paddingTop: "var(--safe-top)",
          background: "var(--surface-chrome)",
          WebkitBackdropFilter: "var(--backdrop-thin)",
          backdropFilter: "var(--backdrop-thin)",
          borderBottom: collapsed ? "var(--border-hairline)" : "1px solid transparent",
          transition: "border-color var(--dur-base) var(--ease-standard)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, height: "var(--navbar-height)", padding: "0 var(--space-2)" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2, minWidth: 44 } }, leading), /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, textAlign: "center", minWidth: 0 } }, (!largeTitle || collapsed) && /* @__PURE__ */ react_shim_default.createElement("h1", { style: {
        fontSize: "var(--size-17)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-body)",
        opacity: largeTitle && !collapsed ? 0 : 1,
        transition: "opacity var(--dur-base) var(--ease-standard)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      } }, title)), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2, minWidth: 44, justifyContent: "flex-end" } }, trailing)),
      largeTitle && !collapsed && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "0 var(--inset-screen) var(--space-2)" } }, /* @__PURE__ */ react_shim_default.createElement("h1", { style: {
        fontSize: "var(--size-34)",
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-display)",
        lineHeight: "var(--leading-tight)",
        fontFamily: "var(--font-display)"
      } }, title)),
      below && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "0 var(--inset-screen) var(--space-3)" } }, below)
    );
  }

  // components/forms/SearchField.jsx
  function SearchField({ value, onChange, placeholder = "Search", glass = false, onClear, style, ...rest }) {
    const [focused, setFocused] = react_shim_default.useState(false);
    const skin = glass ? {
      background: "var(--material-regular)",
      WebkitBackdropFilter: "var(--backdrop-regular)",
      backdropFilter: "var(--backdrop-regular)",
      boxShadow: focused ? "var(--specular), var(--focus-halo)" : "var(--specular)"
    } : {
      background: "var(--control-fill-input)",
      boxShadow: focused ? "var(--focus-halo)" : "none"
    };
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          minWidth: 0,
          height: 36,
          padding: "0 12px",
          borderRadius: "var(--radius-full)",
          transition: "box-shadow var(--dur-fast) var(--ease-standard)",
          ...skin,
          ...style
        }
      },
      /* @__PURE__ */ react_shim_default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", "aria-hidden": "true", style: { color: "var(--text-tertiary)", flex: "0 0 auto" } }, /* @__PURE__ */ react_shim_default.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ react_shim_default.createElement("line", { x1: "16.5", y1: "16.5", x2: "21", y2: "21" })),
      /* @__PURE__ */ react_shim_default.createElement(
        "input",
        {
          type: "search",
          role: "searchbox",
          value,
          placeholder,
          onChange: (e) => onChange && onChange(e.target.value),
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          style: { flex: 1, minWidth: 0, border: 0, background: "transparent", outline: "none", fontSize: "var(--size-15)", color: "var(--text-primary)" },
          ...rest
        }
      ),
      value ? /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", "aria-label": "Clear", onClick: onClear, style: { color: "var(--text-tertiary)", display: "grid", placeItems: "center" } }, /* @__PURE__ */ react_shim_default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ react_shim_default.createElement("circle", { cx: "12", cy: "12", r: "10", opacity: "0.28" }), /* @__PURE__ */ react_shim_default.createElement("path", { d: "M8.5 8.5l7 7M15.5 8.5l-7 7", stroke: "var(--surface-page)", strokeWidth: "2", strokeLinecap: "round", fill: "none" }))) : null
    );
  }

  // components/core/Chip.jsx
  function Chip({ selected = false, glass = false, leading, children, style, ...rest }) {
    const base = {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 32,
      padding: "0 14px",
      borderRadius: "var(--radius-full)",
      fontSize: "var(--size-13)",
      fontWeight: "var(--weight-medium)",
      transition: "var(--t-hover), transform var(--dur-instant) var(--ease-out)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    };
    const skin = selected ? { background: "var(--tint)", color: "var(--text-on-tint)" } : glass ? {
      background: "var(--material-ultrathin)",
      WebkitBackdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
      backdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
      color: "var(--text-on-media)",
      boxShadow: "var(--specular-rim)"
    } : { background: "var(--fill-4)", color: "var(--text-primary)" };
    return /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        type: "button",
        "aria-pressed": selected,
        onPointerDown: (e) => e.currentTarget.style.transform = "scale(var(--press-scale))",
        onPointerUp: (e) => e.currentTarget.style.transform = "scale(1)",
        onPointerLeave: (e) => e.currentTarget.style.transform = "scale(1)",
        style: { ...base, ...skin, ...style },
        ...rest
      },
      leading,
      children
    );
  }

  // components/core/Icon.jsx
  function Icon({ name, size = 20, stroke = 1.75, color = "currentColor", style, ...rest }) {
    const ref = react_shim_default.useRef(null);
    react_shim_default.useEffect(() => {
      const el = ref.current;
      if (!el || !window.lucide) return;
      el.innerHTML = "";
      const slot = document.createElement("i");
      slot.setAttribute("data-lucide", name);
      el.appendChild(slot);
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": stroke, stroke: color },
        nameAttr: "data-lucide",
        root: el
      });
    }, [name, size, stroke, color]);
    return /* @__PURE__ */ react_shim_default.createElement(
      "span",
      {
        ref,
        "aria-hidden": "true",
        style: {
          display: "inline-grid",
          placeItems: "center",
          width: size,
          height: size,
          flex: "0 0 auto",
          color,
          ...style
        },
        ...rest
      }
    );
  }

  // components/core/IconButton.jsx
  function IconButton({
    variant = "plain",
    size = "md",
    label,
    children,
    style,
    disabled = false,
    ...rest
  }) {
    const dims = { sm: 28, md: 36, lg: 44 };
    const d = dims[size];
    const variants = {
      plain: { background: "transparent", color: "var(--tint)" },
      filled: { background: "var(--tint)", color: "var(--text-on-tint)" },
      glass: {
        background: "var(--material-regular)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        color: "var(--text-primary)",
        boxShadow: "var(--specular)"
      },
      subtle: { background: "var(--fill-4)", color: "var(--text-secondary)" }
    };
    return /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        type: "button",
        "aria-label": label,
        title: label,
        disabled,
        onPointerDown: (e) => !disabled && (e.currentTarget.style.transform = "scale(var(--press-scale))"),
        onPointerUp: (e) => e.currentTarget.style.transform = "scale(1)",
        onPointerLeave: (e) => e.currentTarget.style.transform = "scale(1)",
        style: {
          display: "grid",
          placeItems: "center",
          width: d,
          height: d,
          borderRadius: "var(--radius-full)",
          transition: "var(--t-hover), transform var(--dur-instant) var(--ease-out)",
          cursor: disabled ? "default" : "pointer",
          opacity: disabled ? "var(--disabled-opacity)" : 1,
          flex: "0 0 auto",
          ...variants[variant],
          ...style
        },
        ...rest
      },
      children
    );
  }

  // components/core/Badge.jsx
  function Badge({ tone = "neutral", size = "md", children, style, ...rest }) {
    const tones = {
      neutral: { background: "var(--fill-2)", color: "var(--text-secondary)" },
      tint: { background: "var(--tint)", color: "var(--text-on-tint)" },
      success: { background: "var(--status-success)", color: "#fff" },
      warning: { background: "var(--status-warning)", color: "#fff" },
      danger: { background: "var(--status-danger)", color: "#fff" },
      glass: {
        background: "var(--material-ultrathin)",
        WebkitBackdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
        backdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
        color: "var(--text-on-media)",
        boxShadow: "var(--specular-rim)"
      }
    };
    const dims = size === "sm" ? { height: 16, padding: "0 6px", fontSize: "var(--size-11)" } : { height: 20, padding: "0 8px", fontSize: "var(--size-12)" };
    return /* @__PURE__ */ react_shim_default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: dims.height,
          borderRadius: "var(--radius-full)",
          fontWeight: "var(--weight-semibold)",
          fontVariantNumeric: "tabular-nums",
          ...dims,
          ...tones[tone],
          ...style
        },
        ...rest
      },
      children
    );
  }

  // ui_kits/ios-app/LibraryScreen.jsx
  var ALBUMS = [
    { id: 1, title: "Bahor Shamoli", artist: "Nilufar Usmonova", hue: 212, tracks: 12 },
    { id: 2, title: "Oqshom", artist: "Sevara Nazarkhan", hue: 288, tracks: 9 },
    { id: 3, title: "Kecha Yo'llari", artist: "Jahongir Poziljonov", hue: 14, tracks: 11 },
    { id: 4, title: "Chorvoq", artist: "Ulug'bek Rahmatullayev", hue: 162, tracks: 8 },
    { id: 5, title: "Registon", artist: "Yulduz Usmonova", hue: 340, tracks: 14 },
    { id: 6, title: "Shahar Ovozi", artist: "Shahzoda", hue: 44, tracks: 10 }
  ];
  function LibraryScreen({ onOpen, scrolled, onScroll, query, onQuery, filter, onFilter }) {
    const list = ALBUMS.filter(
      (a) => !query || (a.title + a.artist).toLowerCase().includes(query.toLowerCase())
    );
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%" } }, /* @__PURE__ */ react_shim_default.createElement(
      NavBar,
      {
        title: "Library",
        largeTitle: true,
        collapsed: scrolled,
        trailing: /* @__PURE__ */ react_shim_default.createElement(IconButton, { label: "Add", variant: "plain" }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "plus", size: 22 })),
        below: /* @__PURE__ */ react_shim_default.createElement(SearchField, { glass: true, value: query, onChange: onQuery, onClear: () => onQuery(""), placeholder: "Artists, Songs, Albums" })
      }
    ), /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        onScroll: (e) => onScroll(e.currentTarget.scrollTop > 16),
        style: { flex: 1, overflowY: "auto", padding: "0 var(--inset-screen) 20px" }
      },
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", gap: 8, overflowX: "auto", padding: "4px 0 14px" } }, ["All", "Recent", "Downloaded", "Playlists"].map((f) => /* @__PURE__ */ react_shim_default.createElement(Chip, { key: f, glass: true, selected: filter === f, onClick: () => onFilter(f) }, f))),
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, list.map((a) => /* @__PURE__ */ react_shim_default.createElement("button", { key: a.id, type: "button", onClick: () => onOpen(a), style: { textAlign: "left" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: {
        aspectRatio: "1",
        borderRadius: "var(--radius-lg)",
        position: "relative",
        background: `linear-gradient(145deg, hsl(${a.hue} 78% 62%), hsl(${a.hue + 34} 70% 44%))`,
        boxShadow: "var(--shadow-raised), var(--specular-rim)",
        overflow: "hidden"
      } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(70% 60% at 25% 18%, rgba(255,255,255,.42), transparent 70%)"
      } }), /* @__PURE__ */ react_shim_default.createElement("span", { style: { position: "absolute", right: 8, bottom: 8 } }, /* @__PURE__ */ react_shim_default.createElement(Badge, { tone: "glass", size: "sm" }, a.tracks))), /* @__PURE__ */ react_shim_default.createElement("div", { style: { marginTop: 8, fontSize: "var(--size-15)", fontWeight: "var(--weight-semibold)", color: "var(--text-on-media)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, a.title), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-13)", color: "rgba(255,255,255,0.68)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, a.artist)))),
      list.length === 0 && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "48px 0", textAlign: "center", color: "rgba(255,255,255,0.7)" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "search-x", size: 28 }), /* @__PURE__ */ react_shim_default.createElement("div", { style: { marginTop: 10, fontSize: "var(--size-15)" } }, "No results for \u201C", query, "\u201D"))
    ));
  }
  var LIBRARY_ALBUMS = ALBUMS;

  // components/core/GlassPanel.jsx
  function GlassPanel({
    density = "regular",
    radius = "panel",
    float = false,
    as: Tag = "div",
    children,
    style,
    ...rest
  }) {
    const fills = {
      ultrathin: ["var(--material-ultrathin)", "blur(var(--blur-sm)) saturate(var(--saturate-glass))"],
      thin: ["var(--material-thin)", "var(--backdrop-thin)"],
      regular: ["var(--material-regular)", "var(--backdrop-regular)"],
      thick: ["var(--material-thick)", "var(--backdrop-thick)"]
    };
    const radii = {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      sheet: "var(--radius-sheet)",
      panel: "var(--radius-panel)",
      hero: "var(--radius-3xl)",
      capsule: "var(--radius-full)"
    };
    const [fill, backdrop] = fills[density];
    const panel = /* @__PURE__ */ react_shim_default.createElement(
      Tag,
      {
        style: {
          position: "relative",
          isolation: "isolate",
          background: fill,
          WebkitBackdropFilter: backdrop,
          backdropFilter: backdrop,
          boxShadow: "var(--specular)",
          borderRadius: radii[radius],
          color: "var(--text-primary)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_shim_default.createElement(
        "span",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: "var(--lens-gradient)",
            pointerEvents: "none",
            zIndex: -1
          }
        }
      ),
      children
    );
    if (!float) return panel;
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { boxShadow: "var(--shadow-ambient-glass)", borderRadius: radii[radius] } }, panel);
  }

  // components/forms/Slider.jsx
  function Slider({ value = 50, min = 0, max = 100, step = 1, onChange, leading, trailing, style, ...rest }) {
    const pct = (value - min) / (max - min) * 100;
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, width: "100%", ...style } }, leading, /* @__PURE__ */ react_shim_default.createElement("span", { style: { position: "relative", flex: 1, height: 28, display: "flex", alignItems: "center" } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { position: "absolute", inset: "auto 0", height: 4, borderRadius: "var(--radius-full)", background: "var(--control-track-off)" } }), /* @__PURE__ */ react_shim_default.createElement("span", { style: { position: "absolute", left: 0, width: `${pct}%`, height: 4, borderRadius: "var(--radius-full)", background: "var(--tint)" } }), /* @__PURE__ */ react_shim_default.createElement(
      "span",
      {
        "aria-hidden": "true",
        style: {
          position: "absolute",
          left: `calc(${pct}% - 13px)`,
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "var(--control-knob)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.20), var(--specular-rim)",
          pointerEvents: "none"
        }
      }
    ), /* @__PURE__ */ react_shim_default.createElement(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange && onChange(Number(e.target.value)),
        style: { position: "absolute", inset: 0, width: "100%", opacity: 0, cursor: "pointer", margin: 0 },
        ...rest
      }
    )), trailing);
  }

  // ui_kits/ios-app/NowPlayingScreen.jsx
  function NowPlayingScreen({ album, onClose, onShare }) {
    const [playing, setPlaying] = react_shim_default.useState(true);
    const [pos, setPos] = react_shim_default.useState(74);
    const [vol, setVol] = react_shim_default.useState(62);
    const hue = album?.hue ?? 212;
    const fmt = (p) => {
      const total = 218;
      const s = Math.round(p / 100 * total);
      return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
    };
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: "var(--z-sheet)",
      display: "flex",
      flexDirection: "column",
      background: `linear-gradient(170deg, hsl(${hue} 70% 40%), hsl(${hue + 40} 62% 16%))`,
      animation: "lg-sheet-in var(--dur-slow) var(--ease-standard)",
      paddingTop: "var(--safe-top)"
    } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", padding: "10px 8px" } }, /* @__PURE__ */ react_shim_default.createElement(IconButton, { label: "Close", variant: "plain", onClick: onClose, style: { color: "rgba(255,255,255,.9)" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "chevron-down", size: 22, color: "rgba(255,255,255,.9)" })), /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, textAlign: "center", fontSize: "var(--size-12)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "rgba(255,255,255,.7)", fontWeight: 600 } }, "Playing from library"), /* @__PURE__ */ react_shim_default.createElement(IconButton, { label: "Share", variant: "plain", onClick: onShare }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "share", size: 20, color: "rgba(255,255,255,.9)" }))), /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, display: "grid", placeItems: "center", padding: "0 28px" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: {
      width: "100%",
      aspectRatio: "1",
      borderRadius: "var(--radius-3xl)",
      background: `linear-gradient(145deg, hsl(${hue} 80% 66%), hsl(${hue + 34} 72% 42%))`,
      boxShadow: "0 28px 60px rgba(0,0,0,.42), var(--specular-rim)",
      position: "relative",
      overflow: "hidden",
      transform: playing ? "scale(1)" : "scale(0.88)",
      transition: "transform var(--dur-slow) var(--ease-spring)"
    } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { position: "absolute", inset: 0, background: "radial-gradient(70% 60% at 24% 16%, rgba(255,255,255,.45), transparent 70%)" } }))), /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "0 28px 8px" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-22)", fontWeight: 700, letterSpacing: "var(--tracking-title)", color: "#fff" } }, album?.title ?? "Bahor Shamoli"), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-17)", color: "rgba(255,255,255,.66)" } }, album?.artist ?? "Nilufar Usmonova")), /* @__PURE__ */ react_shim_default.createElement("div", { className: "lg-tint-blue", style: { padding: "6px 28px 0", "--tint": "rgba(255,255,255,.92)" } }, /* @__PURE__ */ react_shim_default.createElement(Slider, { value: pos, onChange: setPos }), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "var(--size-11)", color: "rgba(255,255,255,.6)", fontVariantNumeric: "tabular-nums", marginTop: -2 } }, /* @__PURE__ */ react_shim_default.createElement("span", null, fmt(pos)), /* @__PURE__ */ react_shim_default.createElement("span", null, "-", fmt(100 - pos)))), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 26, padding: "14px 0 6px" } }, /* @__PURE__ */ react_shim_default.createElement(IconButton, { label: "Previous", variant: "plain" }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "skip-back", size: 26, color: "#fff" })), /* @__PURE__ */ react_shim_default.createElement(GlassPanel, { density: "thick", radius: "capsule", style: { width: 68, height: 68, display: "grid", placeItems: "center" } }, /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", "aria-label": playing ? "Pause" : "Play", onClick: () => setPlaying((p) => !p), style: { display: "grid", placeItems: "center", width: "100%", height: "100%" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: playing ? "pause" : "play", size: 28, color: "var(--fg-1)" }))), /* @__PURE__ */ react_shim_default.createElement(IconButton, { label: "Next", variant: "plain" }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "skip-forward", size: 26, color: "#fff" }))), /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "0 28px 10px", "--tint": "rgba(255,255,255,.8)" } }, /* @__PURE__ */ react_shim_default.createElement(
      Slider,
      {
        value: vol,
        onChange: setVol,
        leading: /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "volume-1", size: 15, color: "rgba(255,255,255,.6)" }),
        trailing: /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "volume-2", size: 15, color: "rgba(255,255,255,.6)" })
      }
    )), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", justifyContent: "center", gap: 10, padding: "0 28px calc(var(--safe-bottom) + 18px)" } }, ["list-music", "airplay", "repeat"].map((n) => /* @__PURE__ */ react_shim_default.createElement(GlassPanel, { key: n, density: "ultrathin", radius: "capsule", style: { width: 44, height: 36, display: "grid", placeItems: "center" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: n, size: 18, color: "rgba(255,255,255,.9)" })))));
  }

  // components/core/Button.jsx
  function Button({
    variant = "primary",
    size = "md",
    shape = "rounded",
    tint,
    fullWidth = false,
    disabled = false,
    loading = false,
    leading,
    trailing,
    children,
    style,
    ...rest
  }) {
    const heights = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" };
    const pads = { sm: "0 12px", md: "0 20px", lg: "0 24px" };
    const sizes = { sm: "var(--size-13)", md: "var(--size-15)", lg: "var(--size-17)" };
    const base = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--gap-inline)",
      height: heights[size],
      padding: pads[size],
      minWidth: size === "lg" ? "var(--target-touch)" : void 0,
      width: fullWidth ? "100%" : void 0,
      fontFamily: "var(--font-text)",
      fontSize: sizes[size],
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-body)",
      borderRadius: shape === "capsule" ? "var(--radius-full)" : "var(--radius-button)",
      transition: "var(--t-hover), transform var(--dur-instant) var(--ease-out)",
      cursor: disabled || loading ? "default" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      whiteSpace: "nowrap",
      ...tint ? { "--tint": `var(--tint-${tint})` } : null
    };
    const variants = {
      primary: {
        background: "var(--control-fill-primary)",
        color: "var(--text-on-tint)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)"
      },
      bordered: {
        background: "transparent",
        color: "var(--tint)",
        boxShadow: "inset 0 0 0 1px var(--tint)"
      },
      plain: { background: "transparent", color: "var(--tint)" },
      glass: {
        background: "var(--material-regular)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        color: "var(--text-primary)",
        boxShadow: "var(--specular)"
      },
      tinted: {
        background: "color-mix(in srgb, var(--tint) 14%, transparent)",
        color: "var(--tint)"
      },
      destructive: {
        background: "var(--status-danger)",
        color: "#fff",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)"
      }
    };
    const press = (e) => {
      if (disabled || loading) return;
      e.currentTarget.style.transform = `scale(var(--press-scale))`;
    };
    const release = (e) => {
      e.currentTarget.style.transform = "scale(1)";
    };
    return /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        type: "button",
        disabled: disabled || loading,
        "aria-busy": loading || void 0,
        onPointerDown: press,
        onPointerUp: release,
        onPointerLeave: release,
        style: { ...base, ...variants[variant], ...style },
        ...rest
      },
      loading ? /* @__PURE__ */ react_shim_default.createElement(Spinner16, null) : leading,
      children,
      trailing
    );
  }
  function Spinner16() {
    return /* @__PURE__ */ react_shim_default.createElement(
      "span",
      {
        "aria-hidden": "true",
        style: {
          width: 14,
          height: 14,
          borderRadius: "50%",
          border: "2px solid currentColor",
          borderTopColor: "transparent",
          animation: "lg-spin 700ms linear infinite",
          opacity: 0.8
        }
      }
    );
  }

  // components/forms/Input.jsx
  function Input({ label, hint, error, leading, trailing, size = "md", style, id, ...rest }) {
    const autoId = react_shim_default.useId();
    const fieldId = id || autoId;
    const [focused, setFocused] = react_shim_default.useState(false);
    const heights = { sm: "var(--control-sm)", md: "var(--control-lg)" };
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, width: "100%", minWidth: 0 } }, label && /* @__PURE__ */ react_shim_default.createElement("label", { htmlFor: fieldId, style: { fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" } }, label), /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          minWidth: 0,
          height: heights[size],
          padding: "0 14px",
          background: "var(--control-fill-input)",
          borderRadius: "var(--radius-input)",
          boxShadow: error ? "0 0 0 4px color-mix(in srgb, var(--status-danger) 18%, transparent)" : focused ? "var(--focus-halo)" : "none",
          transition: "box-shadow var(--dur-fast) var(--ease-standard)",
          color: "var(--text-tertiary)",
          ...style
        }
      },
      leading,
      /* @__PURE__ */ react_shim_default.createElement(
        "input",
        {
          id: fieldId,
          "aria-invalid": error ? true : void 0,
          "aria-describedby": hint || error ? `${fieldId}-d` : void 0,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          style: {
            flex: 1,
            minWidth: 0,
            border: 0,
            background: "transparent",
            outline: "none",
            fontSize: size === "sm" ? "var(--size-13)" : "var(--size-17)",
            color: "var(--text-primary)"
          },
          ...rest
        }
      ),
      trailing
    ), (hint || error) && /* @__PURE__ */ react_shim_default.createElement("span", { id: `${fieldId}-d`, style: { fontSize: "var(--size-12)", color: error ? "var(--status-danger)" : "var(--text-tertiary)" } }, error || hint));
  }

  // ui_kits/ios-app/OnboardingScreen.jsx
  function OnboardingScreen({ onSignIn }) {
    const [email, setEmail] = react_shim_default.useState("");
    const [pw, setPw] = react_shim_default.useState("");
    const [err, setErr] = react_shim_default.useState("");
    const submit = () => {
      if (!email.includes("@")) return setErr("Enter a valid email address");
      setErr("");
      onSignIn();
    };
    return /* @__PURE__ */ react_shim_default.createElement("div", { className: "lg-wallpaper", style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 20px calc(var(--safe-bottom) + 24px)"
    } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, display: "grid", placeItems: "center" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { textAlign: "center", color: "#fff" } }, /* @__PURE__ */ react_shim_default.createElement(GlassPanel, { density: "ultrathin", radius: "hero", style: { width: 76, height: 76, display: "grid", placeItems: "center", margin: "0 auto 18px" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "audio-lines", size: 34, color: "#fff" })), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)", lineHeight: 1.08 } }, "Your library,", /* @__PURE__ */ react_shim_default.createElement("br", null), "everywhere."), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-17)", color: "rgba(255,255,255,.72)", marginTop: 10, maxWidth: 280, marginInline: "auto" } }, "Sign in to sync playlists and downloads across your devices."))), /* @__PURE__ */ react_shim_default.createElement(GlassPanel, { density: "thick", radius: "panel", float: true, style: { padding: 20, display: "grid", gap: 14 } }, /* @__PURE__ */ react_shim_default.createElement(
      Input,
      {
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        error: err || void 0,
        leading: /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "mail", size: 17 })
      }
    ), /* @__PURE__ */ react_shim_default.createElement(
      Input,
      {
        label: "Password",
        type: "password",
        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
        value: pw,
        onChange: (e) => setPw(e.target.value),
        leading: /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "lock", size: 17 })
      }
    ), /* @__PURE__ */ react_shim_default.createElement(Button, { variant: "primary", size: "lg", fullWidth: true, onClick: submit }, "Sign in"), /* @__PURE__ */ react_shim_default.createElement(Button, { variant: "plain", size: "md", fullWidth: true }, "Forgot password?")));
  }

  // components/navigation/ListGroup.jsx
  function ListGroup({ title, footer, inset = 16, children, style, ...rest }) {
    const rows = react_shim_default.Children.toArray(children);
    return /* @__PURE__ */ react_shim_default.createElement("section", { style: { width: "100%", ...style }, ...rest }, title && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "0 var(--space-4) var(--space-2)", fontSize: "var(--size-13)", color: "var(--text-tertiary)" } }, title), /* @__PURE__ */ react_shim_default.createElement("div", { style: { background: "var(--surface-row)", borderRadius: "var(--radius-card)", overflow: "hidden", boxShadow: "var(--specular-rim)" } }, rows.map((row, i) => /* @__PURE__ */ react_shim_default.createElement(react_shim_default.Fragment, { key: i }, row, i < rows.length - 1 && /* @__PURE__ */ react_shim_default.createElement("div", { role: "separator", style: { height: 1, background: "var(--separator)", marginLeft: inset } })))), footer && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "var(--space-2) var(--space-4) 0", fontSize: "var(--size-12)", color: "var(--text-tertiary)", lineHeight: "var(--leading-normal)" } }, footer));
  }

  // components/navigation/ListRow.jsx
  function ListRow({ leading, title, subtitle, value, trailing, chevron = false, destructive = false, onClick, style, ...rest }) {
    const Tag = onClick ? "button" : "div";
    return /* @__PURE__ */ react_shim_default.createElement(
      Tag,
      {
        type: onClick ? "button" : void 0,
        onClick,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          minHeight: "var(--target-touch)",
          padding: "10px var(--space-4)",
          textAlign: "left",
          background: "transparent",
          cursor: onClick ? "pointer" : "default",
          transition: "background-color var(--dur-fast) var(--ease-standard)",
          color: destructive ? "var(--status-danger)" : "var(--text-primary)",
          ...style
        },
        ...rest
      },
      leading && /* @__PURE__ */ react_shim_default.createElement("span", { style: { display: "grid", placeItems: "center", flex: "0 0 auto" } }, leading),
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 1 } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-17)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, title), subtitle && /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-13)", color: "var(--text-secondary)" } }, subtitle)),
      value && /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-17)", color: "var(--text-tertiary)", flex: "0 0 auto" } }, value),
      trailing,
      chevron && /* @__PURE__ */ react_shim_default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { color: "var(--fg-4)", flex: "0 0 auto" } }, /* @__PURE__ */ react_shim_default.createElement("polyline", { points: "9 6 15 12 9 18" }))
    );
  }

  // components/forms/Switch.jsx
  function Switch({ checked = false, onChange, disabled = false, label, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        "aria-label": label,
        disabled,
        onClick: () => onChange && onChange(!checked),
        style: {
          position: "relative",
          width: 51,
          height: 31,
          flex: "0 0 auto",
          borderRadius: "var(--radius-full)",
          background: checked ? "var(--tint)" : "var(--control-track-off)",
          transition: "background-color var(--dur-base) var(--ease-standard)",
          opacity: disabled ? "var(--disabled-opacity)" : 1,
          cursor: disabled ? "default" : "pointer",
          boxShadow: "var(--specular-rim)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_shim_default.createElement(
        "span",
        {
          style: {
            position: "absolute",
            top: 2,
            left: 2,
            width: 27,
            height: 27,
            borderRadius: "50%",
            background: "var(--control-knob)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.18)",
            transform: checked ? "translateX(20px)" : "translateX(0)",
            transition: "transform var(--dur-base) var(--ease-spring)"
          }
        }
      )
    );
  }

  // components/core/Avatar.jsx
  function Avatar({ src, name = "", size = 36, ring = false, style, ...rest }) {
    const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
    return /* @__PURE__ */ react_shim_default.createElement(
      "span",
      {
        role: "img",
        "aria-label": name || void 0,
        style: {
          display: "grid",
          placeItems: "center",
          flex: "0 0 auto",
          width: size,
          height: size,
          borderRadius: "var(--radius-avatar)",
          background: src ? "transparent" : "var(--fill-2)",
          color: "var(--text-secondary)",
          fontSize: Math.max(10, Math.round(size * 0.38)),
          fontWeight: "var(--weight-semibold)",
          overflow: "hidden",
          boxShadow: ring ? "0 0 0 2px var(--surface-page), 0 0 0 4px var(--tint)" : "var(--specular-rim)",
          ...style
        },
        ...rest
      },
      src ? /* @__PURE__ */ react_shim_default.createElement("img", { src, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }) : initials
    );
  }

  // ui_kits/ios-app/SettingsScreen.jsx
  function Tile({ name, hue }) {
    return /* @__PURE__ */ react_shim_default.createElement("span", { style: {
      width: 29,
      height: 29,
      borderRadius: 8,
      display: "grid",
      placeItems: "center",
      background: `hsl(${hue} 82% 52%)`,
      boxShadow: "var(--specular-rim)"
    } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name, size: 16, color: "#fff" }));
  }
  function SettingsScreen({ scrolled, onScroll }) {
    const [downloads, setDownloads] = react_shim_default.useState(true);
    const [cellular, setCellular] = react_shim_default.useState(false);
    const [lossless, setLossless] = react_shim_default.useState(true);
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%", background: "var(--surface-grouped)" } }, /* @__PURE__ */ react_shim_default.createElement(NavBar, { title: "Settings", largeTitle: true, collapsed: scrolled }), /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        onScroll: (e) => onScroll(e.currentTarget.scrollTop > 16),
        style: { flex: 1, overflowY: "auto", padding: "4px var(--inset-screen) 24px", display: "grid", gap: 22 }
      },
      /* @__PURE__ */ react_shim_default.createElement(ListGroup, { inset: 60 }, /* @__PURE__ */ react_shim_default.createElement(
        ListRow,
        {
          leading: /* @__PURE__ */ react_shim_default.createElement(Avatar, { name: "Abduraxmon Yusupov", size: 44 }),
          title: "Abduraxmon Yusupov",
          subtitle: "Apple-adjacent \xB7 Tashkent",
          chevron: true
        }
      )),
      /* @__PURE__ */ react_shim_default.createElement(ListGroup, { title: "Playback", footer: "Lossless uses significantly more data and storage.", inset: 54 }, /* @__PURE__ */ react_shim_default.createElement(
        ListRow,
        {
          leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "download", hue: 212 }),
          title: "Automatic downloads",
          trailing: /* @__PURE__ */ react_shim_default.createElement(Switch, { checked: downloads, onChange: setDownloads, label: "Automatic downloads" })
        }
      ), /* @__PURE__ */ react_shim_default.createElement(
        ListRow,
        {
          leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "signal", hue: 162 }),
          title: "Use cellular data",
          trailing: /* @__PURE__ */ react_shim_default.createElement(Switch, { checked: cellular, onChange: setCellular, label: "Cellular" })
        }
      ), /* @__PURE__ */ react_shim_default.createElement(
        ListRow,
        {
          leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "audio-waveform", hue: 288 }),
          title: "Lossless audio",
          trailing: /* @__PURE__ */ react_shim_default.createElement(Switch, { checked: lossless, onChange: setLossless, label: "Lossless" })
        }
      ), /* @__PURE__ */ react_shim_default.createElement(ListRow, { leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "equal", hue: 14 }), title: "EQ preset", value: "Flat", chevron: true })),
      /* @__PURE__ */ react_shim_default.createElement(ListGroup, { title: "Appearance", inset: 54 }, /* @__PURE__ */ react_shim_default.createElement(ListRow, { leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "contrast", hue: 242 }), title: "Theme", value: "Automatic", chevron: true }), /* @__PURE__ */ react_shim_default.createElement(ListRow, { leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "droplet", hue: 340 }), title: "Accent", value: "Blue", chevron: true }), /* @__PURE__ */ react_shim_default.createElement(ListRow, { leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "type", hue: 44 }), title: "Text size", value: "Default", chevron: true })),
      /* @__PURE__ */ react_shim_default.createElement(ListGroup, { title: "Storage", footer: "Downloads are removed oldest-first when space runs low.", inset: 54 }, /* @__PURE__ */ react_shim_default.createElement(ListRow, { leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "hard-drive", hue: 200 }), title: "Downloads", value: "4.8 GB", chevron: true }), /* @__PURE__ */ react_shim_default.createElement(ListRow, { leading: /* @__PURE__ */ react_shim_default.createElement(Tile, { name: "bell", hue: 28 }), title: "Notifications", trailing: /* @__PURE__ */ react_shim_default.createElement(Badge, { tone: "tint" }, "3") })),
      /* @__PURE__ */ react_shim_default.createElement(ListGroup, null, /* @__PURE__ */ react_shim_default.createElement(ListRow, { title: "Sign out", destructive: true }))
    ));
  }
  return __toCommonJS(entry_ios_app_exports);
})();
window.LiquidGlassKits = window.LiquidGlassKits || {}; window.LiquidGlassKits["ios-app"] = __LG_KIT;
