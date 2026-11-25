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

  // tools/.entry-macos-app.js
  var entry_macos_app_exports = {};
  __export(entry_macos_app_exports, {
    BROWSER_FILES: () => BROWSER_FILES,
    FileBrowser: () => FileBrowser,
    Inspector: () => Inspector,
    TrafficLights: () => TrafficLights,
    WindowChrome: () => WindowChrome
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

  // components/forms/SegmentedControl.jsx
  function SegmentedControl({ options = [], value, onChange, size = "md", style, ...rest }) {
    const idx = Math.max(0, options.findIndex((o) => (o.value ?? o) === value));
    const h = size === "sm" ? 28 : 36;
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        role: "tablist",
        style: {
          position: "relative",
          display: "grid",
          gridTemplateColumns: `repeat(${options.length}, 1fr)`,
          padding: 2,
          height: h,
          background: "var(--fill-3)",
          borderRadius: "var(--radius-input)",
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
            top: 2,
            bottom: 2,
            left: 2,
            width: `calc((100% - 4px) / ${options.length})`,
            transform: `translateX(${idx * 100}%)`,
            background: "var(--surface-card)",
            borderRadius: `calc(var(--radius-input) - 2px)`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.10)",
            transition: "transform var(--dur-base) var(--ease-standard)"
          }
        }
      ),
      options.map((o) => {
        const val = o.value ?? o;
        const active = val === value;
        return /* @__PURE__ */ react_shim_default.createElement(
          "button",
          {
            key: val,
            type: "button",
            role: "tab",
            "aria-selected": active,
            onClick: () => onChange && onChange(val),
            style: {
              position: "relative",
              zIndex: 1,
              fontSize: size === "sm" ? "var(--size-12)" : "var(--size-13)",
              fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
              color: active ? "var(--text-primary)" : "var(--text-secondary)",
              transition: "color var(--dur-fast) var(--ease-standard)"
            }
          },
          o.label ?? o
        );
      })
    );
  }

  // ui_kits/macos-app/FileBrowser.jsx
  var FILES = [
    { id: 1, name: "Brand Refresh.sketch", kind: "Design", size: "48.2 MB", hue: 212, icon: "pen-tool" },
    { id: 2, name: "Q4 Roadmap.pdf", kind: "Document", size: "2.1 MB", hue: 14, icon: "file-text" },
    { id: 3, name: "Chorvoq.mov", kind: "Movie", size: "1.4 GB", hue: 288, icon: "clapperboard" },
    { id: 4, name: "tokens.css", kind: "Stylesheet", size: "14 KB", hue: 162, icon: "braces" },
    { id: 5, name: "Team Photo.heic", kind: "Image", size: "6.8 MB", hue: 340, icon: "image" },
    { id: 6, name: "Budget 2027.numbers", kind: "Spreadsheet", size: "820 KB", hue: 96, icon: "table" },
    { id: 7, name: "Launch Deck.key", kind: "Presentation", size: "92 MB", hue: 44, icon: "presentation" },
    { id: 8, name: "notes.md", kind: "Markdown", size: "3 KB", hue: 242, icon: "notebook-pen" }
  ];
  function FileBrowser({ selected, onSelect, layout, onLayout }) {
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "var(--space-4)" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-3)" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-11)", fontWeight: 600, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-tertiary)" } }, FILES.length, " items"), /* @__PURE__ */ react_shim_default.createElement("div", { style: { width: 160 } }, /* @__PURE__ */ react_shim_default.createElement(SegmentedControl, { size: "sm", options: ["Grid", "List"], value: layout, onChange: onLayout }))), layout === "Grid" ? /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))", gap: "var(--space-4)" } }, FILES.map((f) => /* @__PURE__ */ react_shim_default.createElement("button", { key: f.id, type: "button", onClick: () => onSelect(f), style: { textAlign: "center" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: {
      aspectRatio: "4/3",
      borderRadius: "var(--radius-md)",
      display: "grid",
      placeItems: "center",
      background: `linear-gradient(150deg, hsl(${f.hue} 70% 62%), hsl(${f.hue + 28} 64% 46%))`,
      boxShadow: selected?.id === f.id ? "var(--shadow-raised), 0 0 0 3px color-mix(in srgb, var(--tint) 45%, transparent)" : "var(--shadow-raised), var(--specular-rim)",
      transition: "box-shadow var(--dur-fast) var(--ease-standard)"
    } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: f.icon, size: 28, color: "rgba(255,255,255,.95)" })), /* @__PURE__ */ react_shim_default.createElement("div", { style: { marginTop: 7, fontSize: "var(--size-12)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, f.name), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-11)", color: "var(--text-tertiary)" } }, f.size)))) : /* @__PURE__ */ react_shim_default.createElement("div", { style: { background: "var(--surface-card)", borderRadius: "var(--radius-card)", overflow: "hidden", boxShadow: "var(--specular-rim)" } }, FILES.map((f, i) => /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        key: f.id,
        type: "button",
        onClick: () => onSelect(f),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "100%",
          height: 34,
          padding: "0 12px",
          textAlign: "left",
          background: selected?.id === f.id ? "color-mix(in srgb, var(--tint) 14%, transparent)" : "transparent",
          boxShadow: i > 0 ? "inset 0 .5px 0 var(--separator)" : "none"
        }
      },
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { width: 20, height: 20, borderRadius: 5, display: "grid", placeItems: "center", background: `hsl(${f.hue} 70% 55%)` } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: f.icon, size: 12, color: "#fff" })),
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { flex: 1, minWidth: 0, fontSize: "var(--size-13)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, f.name),
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-11)", color: "var(--text-tertiary)", width: 90 } }, f.kind),
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-11)", color: "var(--text-tertiary)", width: 64, textAlign: "right", fontVariantNumeric: "tabular-nums" } }, f.size)
    ))));
  }
  var BROWSER_FILES = FILES;

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

  // components/core/Divider.jsx
  function Divider({ inset = 0, vertical = false, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        role: "separator",
        style: vertical ? { width: 1, alignSelf: "stretch", background: "var(--separator)", margin: `${inset}px 0`, ...style } : { height: 1, background: "var(--separator)", marginLeft: inset, ...style },
        ...rest
      }
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

  // ui_kits/macos-app/Inspector.jsx
  function Inspector({ file, onClose }) {
    const [shared, setShared] = react_shim_default.useState(false);
    if (!file) {
      return /* @__PURE__ */ react_shim_default.createElement("aside", { style: {
        width: 232,
        flex: "0 0 auto",
        display: "grid",
        placeItems: "center",
        padding: 20,
        background: "var(--surface-sheet)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        boxShadow: "inset .5px 0 0 var(--separator)"
      } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { textAlign: "center", color: "var(--text-tertiary)" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "panel-right", size: 22, color: "var(--text-tertiary)" }), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-12)", marginTop: 8 } }, "Select a file to inspect it")));
    }
    const rows = [["Kind", file.kind], ["Size", file.size], ["Created", "12 Nov 2026"], ["Modified", "Today, 09:14"], ["Where", "Projects / 2026"]];
    return /* @__PURE__ */ react_shim_default.createElement("aside", { style: {
      width: 232,
      flex: "0 0 auto",
      overflowY: "auto",
      padding: 16,
      background: "var(--surface-sheet)",
      WebkitBackdropFilter: "var(--backdrop-regular)",
      backdropFilter: "var(--backdrop-regular)",
      boxShadow: "inset .5px 0 0 var(--separator)"
    } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 } }, /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", "aria-label": "Close inspector", onClick: onClose, style: { color: "var(--text-tertiary)" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "x", size: 15, color: "var(--text-tertiary)" }))), /* @__PURE__ */ react_shim_default.createElement("div", { style: {
      aspectRatio: "4/3",
      borderRadius: "var(--radius-md)",
      display: "grid",
      placeItems: "center",
      background: `linear-gradient(150deg, hsl(${file.hue} 70% 62%), hsl(${file.hue + 28} 64% 46%))`,
      boxShadow: "var(--shadow-raised)",
      marginBottom: 12
    } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: file.icon, size: 36, color: "rgba(255,255,255,.95)" })), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-13)", fontWeight: 600, wordBreak: "break-word" } }, file.name), /* @__PURE__ */ react_shim_default.createElement(Divider, { style: { margin: "12px 0" } }), rows.map(([k, v]) => /* @__PURE__ */ react_shim_default.createElement("div", { key: k, style: { display: "flex", justifyContent: "space-between", gap: 8, padding: "3px 0", fontSize: "var(--size-11)" } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { color: "var(--text-tertiary)" } }, k), /* @__PURE__ */ react_shim_default.createElement("span", { style: { textAlign: "right" } }, v))), /* @__PURE__ */ react_shim_default.createElement(Divider, { style: { margin: "12px 0" } }), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-12)" } }, "Shared link"), /* @__PURE__ */ react_shim_default.createElement(Switch, { checked: shared, onChange: setShared, label: "Shared link" })), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", gap: 6, marginTop: 14 } }, /* @__PURE__ */ react_shim_default.createElement(Button, { size: "sm", fullWidth: true }, "Open"), /* @__PURE__ */ react_shim_default.createElement(Button, { size: "sm", variant: "bordered", fullWidth: true }, "Get Info")));
  }

  // ui_kits/macos-app/WindowChrome.jsx
  function WindowChrome({ title, subtitle, toolbar, sidebar, inspector, children, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        "data-density": "dense",
        style: {
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: "var(--radius-2xl)",
          boxShadow: "var(--shadow-dragged)",
          /* The window itself is transparent so the sidebar, toolbar and
             inspector materials blur the desktop behind it. Only the content
             pane is opaque. */
          background: "transparent",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", flex: 1, minHeight: 0 } }, sidebar, /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ react_shim_default.createElement("header", { style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: "var(--toolbar-height)",
        padding: "0 12px",
        flex: "0 0 auto",
        background: "var(--surface-chrome)",
        WebkitBackdropFilter: "var(--backdrop-thin)",
        backdropFilter: "var(--backdrop-thin)",
        boxShadow: "var(--shadow-hairline)"
      } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { minWidth: 0, flex: 1 } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-13)", fontWeight: "var(--weight-semibold)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, title), subtitle && /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-11)", color: "var(--text-tertiary)" } }, subtitle)), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, toolbar)), /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, minHeight: 0, display: "flex" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, minWidth: 0, overflow: "auto", background: "var(--surface-page)" } }, children), inspector)))
    );
  }
  function TrafficLights() {
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", gap: 8, padding: "12px 12px 6px" } }, ["#ff5f57", "#febc2e", "#28c840"].map((c) => /* @__PURE__ */ react_shim_default.createElement("span", { key: c, style: { width: 12, height: 12, borderRadius: "50%", background: c, boxShadow: "inset 0 0 0 .5px rgba(0,0,0,.14)" } })));
  }
  return __toCommonJS(entry_macos_app_exports);
})();
window.LiquidGlassKits = window.LiquidGlassKits || {}; window.LiquidGlassKits["macos-app"] = __LG_KIT;
