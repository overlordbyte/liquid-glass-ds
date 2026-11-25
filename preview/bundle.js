var __LG_NS = (() => {
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

  // tools/.entry.js
  var entry_exports = {};
  __export(entry_exports, {
    Alert: () => Alert,
    Avatar: () => Avatar,
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Chip: () => Chip,
    Dialog: () => Dialog,
    Divider: () => Divider,
    GlassPanel: () => GlassPanel,
    Icon: () => Icon,
    IconButton: () => IconButton,
    Input: () => Input,
    ListGroup: () => ListGroup,
    ListRow: () => ListRow,
    NavBar: () => NavBar,
    ProgressBar: () => ProgressBar,
    Radio: () => Radio,
    SearchField: () => SearchField,
    SegmentedControl: () => SegmentedControl,
    Select: () => Select,
    Sheet: () => Sheet,
    Sidebar: () => Sidebar,
    Slider: () => Slider,
    Spinner: () => Spinner,
    Switch: () => Switch,
    TabBar: () => TabBar,
    Textarea: () => Textarea,
    Toast: () => Toast,
    Toolbar: () => Toolbar
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

  // components/core/Card.jsx
  function Card({ padding = "md", interactive = false, children, style, ...rest }) {
    const pads = { none: 0, sm: "var(--space-3)", md: "var(--space-4)", lg: "var(--space-6)" };
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        style: {
          background: "var(--surface-card)",
          borderRadius: "var(--radius-card)",
          padding: pads[padding],
          boxShadow: "var(--shadow-raised)",
          transition: "var(--t-hover), transform var(--dur-fast) var(--ease-out)",
          cursor: interactive ? "pointer" : void 0,
          ...style
        },
        onPointerDown: interactive ? (e) => e.currentTarget.style.transform = "scale(var(--press-scale-large))" : void 0,
        onPointerUp: interactive ? (e) => e.currentTarget.style.transform = "scale(1)" : void 0,
        onPointerLeave: interactive ? (e) => e.currentTarget.style.transform = "scale(1)" : void 0,
        ...rest
      },
      children
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

  // components/feedback/Alert.jsx
  function Alert({ tone = "info", title, children, action, style, ...rest }) {
    const tones = {
      info: "var(--status-info)",
      success: "var(--status-success)",
      warning: "var(--status-warning)",
      danger: "var(--status-danger)"
    };
    const c = tones[tone];
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        role: tone === "danger" ? "alert" : "status",
        style: {
          display: "flex",
          gap: 12,
          padding: "var(--space-3) var(--space-4)",
          background: `color-mix(in srgb, ${c} 10%, transparent)`,
          borderRadius: "var(--radius-md)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: c, marginTop: 7, flex: "0 0 auto" } }),
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, minWidth: 0 } }, title && /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-15)", fontWeight: "var(--weight-semibold)", marginBottom: 2 } }, title), children && /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-13)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)" } }, children)),
      action
    );
  }

  // components/feedback/Dialog.jsx
  function Dialog({ open = false, title, message, actions, onClose, style, ...rest }) {
    if (!open) return null;
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { position: "absolute", inset: 0, zIndex: "var(--z-sheet)", display: "grid", placeItems: "center" }, role: "presentation" }, /* @__PURE__ */ react_shim_default.createElement("div", { onClick: onClose, style: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.32)" } }), /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        role: "alertdialog",
        "aria-modal": "true",
        "aria-label": title,
        style: {
          position: "relative",
          width: 272,
          textAlign: "center",
          overflow: "hidden",
          background: "var(--surface-panel)",
          WebkitBackdropFilter: "var(--backdrop-thick)",
          backdropFilter: "var(--backdrop-thick)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--specular)",
          animation: "lg-dialog-in var(--dur-base) var(--ease-spring)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "20px 16px 16px" } }, title && /* @__PURE__ */ react_shim_default.createElement("h2", { style: { fontSize: "var(--size-17)", fontWeight: "var(--weight-semibold)", marginBottom: 4 } }, title), message && /* @__PURE__ */ react_shim_default.createElement("p", { style: { fontSize: "var(--size-13)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)" } }, message)),
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", borderTop: "var(--border-hairline)" } }, (actions || []).map((a, i) => /* @__PURE__ */ react_shim_default.createElement(
        "button",
        {
          key: a.label,
          type: "button",
          onClick: a.onPress,
          style: {
            flex: 1,
            height: 44,
            borderLeft: i > 0 ? "var(--border-hairline)" : "none",
            fontSize: "var(--size-17)",
            fontWeight: a.emphasis === "primary" ? "var(--weight-semibold)" : "var(--weight-regular)",
            color: a.emphasis === "destructive" ? "var(--status-danger)" : "var(--tint)"
          }
        },
        a.label
      )))
    ));
  }

  // components/feedback/ProgressBar.jsx
  function ProgressBar({ value = 0, max = 100, label, style, ...rest }) {
    const pct = Math.min(100, Math.max(0, value / max * 100));
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { width: "100%", ...style }, ...rest }, label && /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: "var(--size-12)", color: "var(--text-secondary)" } }, /* @__PURE__ */ react_shim_default.createElement("span", null, label), /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontVariantNumeric: "tabular-nums" } }, Math.round(pct), "%")), /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": 0,
        "aria-valuemax": max,
        "aria-label": label,
        style: { height: 4, borderRadius: "var(--radius-full)", background: "var(--control-track-off)", overflow: "hidden" }
      },
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { width: `${pct}%`, height: "100%", borderRadius: "inherit", background: "var(--tint)", transition: "width var(--dur-base) var(--ease-standard)" } })
    ));
  }

  // components/feedback/Sheet.jsx
  function Sheet({ open = false, onClose, detent = "half", title, children, style, ...rest }) {
    const heights = { half: "50%", full: "92%", content: "auto" };
    if (!open) return null;
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          zIndex: "var(--z-sheet)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center"
        },
        role: "presentation"
      },
      /* @__PURE__ */ react_shim_default.createElement(
        "div",
        {
          onClick: onClose,
          style: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.32)", animation: "lg-fade-in var(--dur-base) var(--ease-standard)" }
        }
      ),
      /* @__PURE__ */ react_shim_default.createElement(
        "section",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": title,
          style: {
            position: "relative",
            width: "100%",
            maxWidth: 560,
            height: heights[detent],
            maxHeight: "92%",
            background: "var(--surface-sheet)",
            WebkitBackdropFilter: "var(--backdrop-regular)",
            backdropFilter: "var(--backdrop-regular)",
            borderTopLeftRadius: "var(--radius-sheet)",
            borderTopRightRadius: "var(--radius-sheet)",
            boxShadow: "var(--specular-top), var(--specular-rim)",
            paddingBottom: "var(--safe-bottom)",
            animation: "lg-sheet-in var(--dur-slow) var(--ease-standard)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            ...style
          },
          ...rest
        },
        /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", placeItems: "center", paddingTop: 8, flex: "0 0 auto" } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { width: 36, height: 5, borderRadius: "var(--radius-full)", background: "var(--fg-4)" } })),
        title && /* @__PURE__ */ react_shim_default.createElement("header", { style: { padding: "8px 20px 12px", textAlign: "center" } }, /* @__PURE__ */ react_shim_default.createElement("h2", { style: { fontSize: "var(--size-17)", fontWeight: "var(--weight-semibold)" } }, title)),
        /* @__PURE__ */ react_shim_default.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "0 20px 20px" } }, children)
      )
    );
  }

  // components/feedback/Spinner.jsx
  function Spinner({ size = 20, stroke = 2, label = "Loading", style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement(
      "span",
      {
        role: "status",
        "aria-label": label,
        style: {
          display: "inline-block",
          width: size,
          height: size,
          borderRadius: "50%",
          border: `${stroke}px solid var(--fill-1)`,
          borderTopColor: "var(--tint)",
          animation: "lg-spin 700ms linear infinite",
          ...style
        },
        ...rest
      }
    );
  }

  // components/feedback/Toast.jsx
  function Toast({ open = false, message, icon, tone = "neutral", style, ...rest }) {
    if (!open) return null;
    const colors = {
      neutral: "var(--text-primary)",
      success: "var(--status-success)",
      danger: "var(--status-danger)"
    };
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        role: "status",
        "aria-live": "polite",
        style: {
          position: "absolute",
          top: "calc(var(--safe-top) + 12px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "var(--z-toast)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 18px",
          maxWidth: "calc(100% - 32px)",
          background: "var(--material-thick)",
          WebkitBackdropFilter: "var(--backdrop-regular)",
          backdropFilter: "var(--backdrop-regular)",
          borderRadius: "var(--radius-full)",
          boxShadow: "var(--specular)",
          fontSize: "var(--size-13)",
          fontWeight: "var(--weight-medium)",
          animation: "lg-toast-in var(--dur-base) var(--ease-spring)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { color: colors[tone], display: "grid", placeItems: "center" } }, icon),
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, message)
    );
  }

  // components/forms/Checkbox.jsx
  function Checkbox({ checked = false, onChange, disabled = false, label, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "default" : "pointer", opacity: disabled ? "var(--disabled-opacity)" : 1, ...style } }, /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        type: "button",
        role: "checkbox",
        "aria-checked": checked,
        disabled,
        onClick: () => onChange && onChange(!checked),
        style: {
          width: 22,
          height: 22,
          flex: "0 0 auto",
          display: "grid",
          placeItems: "center",
          borderRadius: 7,
          background: checked ? "var(--tint)" : "transparent",
          boxShadow: checked ? "none" : "inset 0 0 0 1.5px var(--fg-4)",
          transition: "var(--t-hover)"
        },
        ...rest
      },
      checked && /* @__PURE__ */ react_shim_default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ react_shim_default.createElement("polyline", { points: "20 6 9 17 4 12" }))
    ), label && /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-17)" } }, label));
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

  // components/forms/Radio.jsx
  function Radio({ checked = false, onChange, disabled = false, label, name, value, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "default" : "pointer", opacity: disabled ? "var(--disabled-opacity)" : 1, ...style } }, /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        type: "button",
        role: "radio",
        "aria-checked": checked,
        name,
        value,
        disabled,
        onClick: () => onChange && onChange(value),
        style: {
          width: 22,
          height: 22,
          flex: "0 0 auto",
          display: "grid",
          placeItems: "center",
          borderRadius: "50%",
          boxShadow: checked ? "inset 0 0 0 7px var(--tint)" : "inset 0 0 0 1.5px var(--fg-4)",
          background: "transparent",
          transition: "box-shadow var(--dur-fast) var(--ease-standard)"
        },
        ...rest
      }
    ), label && /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-17)" } }, label));
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

  // components/forms/Select.jsx
  function Select({ label, options = [], value, onChange, hint, style, id, ...rest }) {
    const autoId = react_shim_default.useId();
    const fieldId = id || autoId;
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, width: "100%", minWidth: 0 } }, label && /* @__PURE__ */ react_shim_default.createElement("label", { htmlFor: fieldId, style: { fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" } }, label), /* @__PURE__ */ react_shim_default.createElement("span", { style: { position: "relative", display: "block" } }, /* @__PURE__ */ react_shim_default.createElement(
      "select",
      {
        id: fieldId,
        value,
        onChange: (e) => onChange && onChange(e.target.value),
        style: {
          appearance: "none",
          WebkitAppearance: "none",
          width: "100%",
          height: "var(--control-lg)",
          padding: "0 38px 0 14px",
          border: 0,
          background: "var(--control-fill-input)",
          borderRadius: "var(--radius-input)",
          fontSize: "var(--size-17)",
          color: "var(--text-primary)",
          outline: "none",
          ...style
        },
        ...rest
      },
      options.map((o) => {
        const val = o.value ?? o;
        return /* @__PURE__ */ react_shim_default.createElement("option", { key: val, value: val }, o.label ?? o);
      })
    ), /* @__PURE__ */ react_shim_default.createElement(
      "svg",
      {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        style: { position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-tertiary)", pointerEvents: "none" }
      },
      /* @__PURE__ */ react_shim_default.createElement("polyline", { points: "6 9 12 15 18 9" })
    )), hint && /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-12)", color: "var(--text-tertiary)" } }, hint));
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

  // components/forms/Textarea.jsx
  function Textarea({ label, hint, rows = 4, style, id, ...rest }) {
    const autoId = react_shim_default.useId();
    const fieldId = id || autoId;
    const [focused, setFocused] = react_shim_default.useState(false);
    return /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, width: "100%", minWidth: 0 } }, label && /* @__PURE__ */ react_shim_default.createElement("label", { htmlFor: fieldId, style: { fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" } }, label), /* @__PURE__ */ react_shim_default.createElement(
      "textarea",
      {
        id: fieldId,
        rows,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        style: {
          width: "100%",
          padding: "11px 14px",
          border: 0,
          resize: "vertical",
          background: "var(--control-fill-input)",
          borderRadius: "var(--radius-input)",
          fontSize: "var(--size-17)",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--text-primary)",
          outline: "none",
          boxShadow: focused ? "var(--focus-halo)" : "none",
          transition: "box-shadow var(--dur-fast) var(--ease-standard)",
          ...style
        },
        ...rest
      }
    ), hint && /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-12)", color: "var(--text-tertiary)" } }, hint));
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

  // components/navigation/Sidebar.jsx
  function Sidebar({ header, sections = [], value, onChange, footer, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement(
      "aside",
      {
        style: {
          width: "var(--sidebar-width)",
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          background: "var(--surface-sheet)",
          WebkitBackdropFilter: "var(--backdrop-regular)",
          backdropFilter: "var(--backdrop-regular)",
          boxShadow: "inset -0.5px 0 0 var(--separator)",
          ...style
        },
        ...rest
      },
      header && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "var(--space-3) var(--space-3) var(--space-2)" } }, header),
      /* @__PURE__ */ react_shim_default.createElement("nav", { style: { flex: 1, overflowY: "auto", padding: "0 var(--space-2) var(--space-3)" } }, sections.map((s) => /* @__PURE__ */ react_shim_default.createElement("div", { key: s.title || "_", style: { marginBottom: "var(--space-4)" } }, s.title && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "var(--space-2) var(--space-2) var(--space-1)", fontSize: "var(--size-11)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-tertiary)" } }, s.title), s.items.map((it) => {
        const active = it.value === value;
        return /* @__PURE__ */ react_shim_default.createElement(
          "button",
          {
            key: it.value,
            type: "button",
            onClick: () => onChange && onChange(it.value),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 9,
              width: "100%",
              height: "var(--target-dense)",
              padding: "0 var(--space-2)",
              borderRadius: "var(--radius-xs)",
              background: active ? "color-mix(in srgb, var(--tint) 16%, transparent)" : "transparent",
              color: active ? "var(--tint)" : "var(--text-primary)",
              fontSize: "var(--size-13)",
              fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)",
              transition: "var(--t-hover)",
              textAlign: "left"
            }
          },
          /* @__PURE__ */ react_shim_default.createElement("span", { style: { display: "grid", placeItems: "center", color: active ? "var(--tint)" : "var(--text-secondary)" } }, it.icon),
          /* @__PURE__ */ react_shim_default.createElement("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, it.label),
          it.badge
        );
      })))),
      footer && /* @__PURE__ */ react_shim_default.createElement("div", { style: { padding: "var(--space-2) var(--space-3)", borderTop: "var(--border-hairline)" } }, footer)
    );
  }

  // components/navigation/TabBar.jsx
  function TabBar({ items = [], value, onChange, style, ...rest }) {
    return /* @__PURE__ */ react_shim_default.createElement(
      "nav",
      {
        role: "tablist",
        style: {
          position: "sticky",
          bottom: 0,
          zIndex: "var(--z-chrome)",
          display: "grid",
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
          paddingBottom: "var(--safe-bottom)",
          background: "var(--surface-chrome)",
          WebkitBackdropFilter: "var(--backdrop-thin)",
          backdropFilter: "var(--backdrop-thin)",
          boxShadow: "inset 0 0.5px 0 var(--separator)",
          ...style
        },
        ...rest
      },
      items.map((it) => {
        const active = it.value === value;
        return /* @__PURE__ */ react_shim_default.createElement(
          "button",
          {
            key: it.value,
            type: "button",
            role: "tab",
            "aria-selected": active,
            onClick: () => onChange && onChange(it.value),
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              height: "var(--tabbar-height)",
              justifyContent: "center",
              color: active ? "var(--tint)" : "var(--text-tertiary)",
              transition: "color var(--dur-fast) var(--ease-standard)"
            }
          },
          /* @__PURE__ */ react_shim_default.createElement("span", { style: { display: "grid", placeItems: "center", height: 24 } }, it.icon),
          /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-11)", fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)" } }, it.label)
        );
      })
    );
  }

  // components/navigation/Toolbar.jsx
  function Toolbar({ position = "bottom", children, style, ...rest }) {
    const pos = position === "bottom" ? { bottom: "calc(var(--safe-bottom) + 16px)" } : { top: "calc(var(--safe-top) + 16px)" };
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        role: "toolbar",
        style: {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "var(--z-chrome)",
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: 4,
          borderRadius: "var(--radius-full)",
          background: "var(--material-regular)",
          WebkitBackdropFilter: "var(--backdrop-regular)",
          backdropFilter: "var(--backdrop-regular)",
          boxShadow: "var(--specular)",
          ...pos,
          ...style
        },
        ...rest
      },
      children
    );
  }
  return __toCommonJS(entry_exports);
})();
if (!window.LiquidGlass) { window.LiquidGlass = __LG_NS; }
