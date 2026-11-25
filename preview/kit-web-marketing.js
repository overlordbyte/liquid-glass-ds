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

  // tools/.entry-web-marketing.js
  var entry_web_marketing_exports = {};
  __export(entry_web_marketing_exports, {
    FeatureSection: () => FeatureSection,
    Hero: () => Hero,
    PricingSection: () => PricingSection,
    SiteFooter: () => SiteFooter,
    SiteHeader: () => SiteHeader
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

  // ui_kits/web-marketing/FeatureSection.jsx
  var FEATURES = [
    { icon: "layers", title: "Four material densities", body: "Ultrathin through thick, each with its own blur and saturation pass, so chrome stays legible over anything.", tint: "blue" },
    { icon: "palette", title: "Tokens, not hex codes", body: "Base values and semantic aliases. Rebind one custom property and the whole surface follows.", tint: "purple" },
    { icon: "moon", title: "Dark mode that holds up", body: "Dark glass flips to a dark body with a brighter rim \u2014 the highlight is what keeps it reading as glass.", tint: "indigo" },
    { icon: "gauge", title: "Motion with a budget", body: "Five durations, four easings. Everything travels on one axis or scales from its own origin.", tint: "green" },
    { icon: "accessibility", title: "Legible by default", body: "Focus halos instead of outlines, 44pt touch targets, and an opaque fallback when blur is unavailable.", tint: "orange" },
    { icon: "code", title: "Drop-in React", body: "Thirty components with prop contracts, no runtime dependencies beyond React itself.", tint: "teal" }
  ];
  function FeatureSection() {
    return /* @__PURE__ */ react_shim_default.createElement("section", { style: { background: "var(--surface-page)", padding: "var(--gap-chapter) var(--inset-page)" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { maxWidth: "var(--content-max)", margin: "0 auto" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { maxWidth: 620, marginBottom: 44 } }, /* @__PURE__ */ react_shim_default.createElement(Badge, { tone: "tint" }, "Foundations"), /* @__PURE__ */ react_shim_default.createElement("h2", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)", lineHeight: 1.1, marginTop: 14 } }, "Everything a translucent interface needs, already decided."), /* @__PURE__ */ react_shim_default.createElement("p", { style: { fontSize: "var(--size-17)", color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)", marginTop: 12 } }, "The hard calls \u2014 how thick the glass is, where the highlight sits, when a shadow is allowed \u2014 are made once and encoded as tokens.")), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 } }, FEATURES.map((f) => /* @__PURE__ */ react_shim_default.createElement(Card, { key: f.title, padding: "lg", className: `lg-tint-${f.tint}`, style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      display: "grid",
      placeItems: "center",
      background: "color-mix(in srgb, var(--tint) 14%, transparent)"
    } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: f.icon, size: 20, color: "var(--tint)" })), /* @__PURE__ */ react_shim_default.createElement("h3", { style: { fontSize: "var(--size-17)", fontWeight: 600, letterSpacing: "var(--tracking-body)" } }, f.title), /* @__PURE__ */ react_shim_default.createElement("p", { style: { fontSize: "var(--size-15)", color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)" } }, f.body))))));
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

  // ui_kits/web-marketing/Hero.jsx
  function Hero() {
    return /* @__PURE__ */ react_shim_default.createElement("section", { style: { padding: "96px var(--inset-page) 80px", textAlign: "center", color: "#fff" } }, /* @__PURE__ */ react_shim_default.createElement(
      GlassPanel,
      {
        density: "ultrathin",
        radius: "capsule",
        style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", marginBottom: 26 }
      },
      /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "sparkles", size: 15, color: "#fff" }),
      /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-13)", fontWeight: 500, color: "#fff" } }, "Version 3 is out"),
      /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "arrow-right", size: 14, color: "rgba(255,255,255,.7)" })
    ), /* @__PURE__ */ react_shim_default.createElement("h1", { style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(40px, 6.4vw, 56px)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-display)",
      lineHeight: 1.06,
      maxWidth: "18ch",
      marginInline: "auto"
    } }, "Interfaces that let", /* @__PURE__ */ react_shim_default.createElement("br", null), "the light through."), /* @__PURE__ */ react_shim_default.createElement("p", { style: {
      fontSize: "var(--size-22)",
      lineHeight: 1.4,
      color: "rgba(255,255,255,.72)",
      maxWidth: 560,
      marginInline: "auto",
      marginTop: 20,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-title)"
    } }, "A translucent design system \u2014 materials, depth and motion, shipped as tokens and components you can build on today."), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" } }, /* @__PURE__ */ react_shim_default.createElement(Button, { size: "lg", shape: "capsule" }, "Start building"), /* @__PURE__ */ react_shim_default.createElement(Button, { size: "lg", shape: "capsule", variant: "glass", leading: /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "play", size: 17 }) }, "Watch the tour")), /* @__PURE__ */ react_shim_default.createElement(
      GlassPanel,
      {
        density: "thin",
        radius: "panel",
        float: true,
        style: { marginTop: 64, padding: "22px 12px", maxWidth: 820, marginInline: "auto" }
      },
      /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 } }, [["30", "components"], ["120+", "design tokens"], ["3", "UI kits"]].map(([n, l], i) => /* @__PURE__ */ react_shim_default.createElement("div", { key: l, style: { textAlign: "center", boxShadow: i ? "inset 1px 0 0 var(--separator)" : "none" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)", color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" } }, n), /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-13)", color: "var(--text-secondary)" } }, l))))
    ));
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

  // ui_kits/web-marketing/PricingSection.jsx
  var PLANS = [
    { name: "Solo", monthly: 0, yearly: 0, blurb: "For one designer and a prototype.", features: ["All tokens", "30 components", "Community support"] },
    { name: "Studio", monthly: 24, yearly: 19, blurb: "For a team shipping product.", features: ["Everything in Solo", "3 UI kits", "Figma library", "Priority support"], featured: true },
    { name: "Enterprise", monthly: 0, yearly: 0, custom: true, blurb: "For brand systems at scale.", features: ["Everything in Studio", "Custom tint sets", "Design review", "SLA"] }
  ];
  function PricingSection() {
    const [cycle, setCycle] = react_shim_default.useState("Yearly");
    return /* @__PURE__ */ react_shim_default.createElement("section", { style: { padding: "var(--gap-chapter) var(--inset-page)", textAlign: "center", color: "#fff" } }, /* @__PURE__ */ react_shim_default.createElement("h2", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)" } }, "Pricing"), /* @__PURE__ */ react_shim_default.createElement("p", { style: { fontSize: "var(--size-17)", color: "rgba(255,255,255,.7)", marginTop: 10 } }, "Two months free on yearly. Cancel whenever."), /* @__PURE__ */ react_shim_default.createElement("div", { style: { width: 220, margin: "26px auto 36px" } }, /* @__PURE__ */ react_shim_default.createElement(GlassPanel, { density: "thin", radius: "sm", style: { padding: 3 } }, /* @__PURE__ */ react_shim_default.createElement(SegmentedControl, { options: ["Monthly", "Yearly"], value: cycle, onChange: setCycle }))), /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(258px, 1fr))", gap: 18, maxWidth: 940, margin: "0 auto", textAlign: "left" } }, PLANS.map((p) => {
      const price = cycle === "Yearly" ? p.yearly : p.monthly;
      return /* @__PURE__ */ react_shim_default.createElement(
        GlassPanel,
        {
          key: p.name,
          density: p.featured ? "thick" : "regular",
          radius: "panel",
          float: p.featured,
          style: { padding: 24, display: "flex", flexDirection: "column", gap: 14 }
        },
        /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-17)", fontWeight: 600 } }, p.name), p.featured && /* @__PURE__ */ react_shim_default.createElement(Badge, { tone: "tint" }, "Most popular")),
        /* @__PURE__ */ react_shim_default.createElement("div", null, /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-44)", fontWeight: 700, letterSpacing: "var(--tracking-display)", fontVariantNumeric: "tabular-nums" } }, p.custom ? "Talk to us" : price === 0 ? "Free" : `$${price}`), !p.custom && price > 0 && /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-15)", color: "var(--text-tertiary)" } }, " / seat / mo")),
        /* @__PURE__ */ react_shim_default.createElement("p", { style: { fontSize: "var(--size-15)", color: "var(--text-secondary)" } }, p.blurb),
        /* @__PURE__ */ react_shim_default.createElement("ul", { style: { display: "grid", gap: 8, marginTop: 2 } }, p.features.map((f) => /* @__PURE__ */ react_shim_default.createElement("li", { key: f, style: { display: "flex", gap: 9, alignItems: "flex-start", fontSize: "var(--size-15)" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "check", size: 17, color: "var(--tint)" }), /* @__PURE__ */ react_shim_default.createElement("span", null, f)))),
        /* @__PURE__ */ react_shim_default.createElement(Button, { fullWidth: true, size: "lg", shape: "capsule", variant: p.featured ? "primary" : "bordered", style: { marginTop: "auto" } }, p.custom ? "Contact sales" : "Choose " + p.name)
      );
    })));
  }

  // ui_kits/web-marketing/SiteFooter.jsx
  var COLUMNS = [
    ["Product", ["Overview", "Components", "UI kits", "Changelog"]],
    ["Resources", ["Documentation", "Tokens reference", "Accessibility", "Support"]],
    ["Company", ["About", "Careers", "Contact", "Privacy"]]
  ];
  function SiteFooter() {
    return /* @__PURE__ */ react_shim_default.createElement("footer", { style: { background: "var(--surface-page)", padding: "56px var(--inset-page) 36px" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { maxWidth: "var(--content-max)", margin: "0 auto" } }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: 32 } }, /* @__PURE__ */ react_shim_default.createElement("div", null, /* @__PURE__ */ react_shim_default.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "hexagon", size: 20, color: "var(--tint)" }), /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-17)", fontWeight: 700 } }, "Prism")), /* @__PURE__ */ react_shim_default.createElement("p", { style: { fontSize: "var(--size-13)", color: "var(--text-secondary)", marginTop: 10, maxWidth: 260, lineHeight: "var(--leading-relaxed)" } }, "A translucent design system for interfaces that sit on top of real content.")), COLUMNS.map(([title, items]) => /* @__PURE__ */ react_shim_default.createElement("div", { key: title }, /* @__PURE__ */ react_shim_default.createElement("div", { style: { fontSize: "var(--size-11)", fontWeight: 600, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 12 } }, title), /* @__PURE__ */ react_shim_default.createElement("ul", { style: { display: "grid", gap: 8 } }, items.map((i) => /* @__PURE__ */ react_shim_default.createElement("li", { key: i }, /* @__PURE__ */ react_shim_default.createElement("a", { href: "#", style: { fontSize: "var(--size-13)", color: "var(--text-secondary)" } }, i))))))), /* @__PURE__ */ react_shim_default.createElement("div", { style: { borderTop: "var(--border-hairline)", marginTop: 32, paddingTop: 18, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontSize: "var(--size-12)", color: "var(--text-tertiary)" } }, "\xA9 2026 Prism. A demonstration surface for the Liquid Glass design system."), /* @__PURE__ */ react_shim_default.createElement("span", { style: { display: "flex", gap: 14 } }, ["code-xml", "rss", "mail"].map((n) => /* @__PURE__ */ react_shim_default.createElement(Icon, { key: n, name: n, size: 16, color: "var(--text-tertiary)" }))))));
  }

  // ui_kits/web-marketing/SiteHeader.jsx
  function SiteHeader({ active = "Product", onNavigate }) {
    const links = ["Product", "Design", "Pricing", "Docs"];
    return /* @__PURE__ */ react_shim_default.createElement("header", { style: {
      position: "sticky",
      top: 16,
      zIndex: "var(--z-chrome)",
      display: "flex",
      justifyContent: "center",
      padding: "0 var(--inset-page)"
    } }, /* @__PURE__ */ react_shim_default.createElement("nav", { style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: 6,
      paddingLeft: 18,
      borderRadius: "var(--radius-full)",
      background: "var(--material-regular)",
      WebkitBackdropFilter: "var(--backdrop-regular)",
      backdropFilter: "var(--backdrop-regular)",
      boxShadow: "var(--specular)",
      maxWidth: "100%",
      overflowX: "auto"
    } }, /* @__PURE__ */ react_shim_default.createElement("span", { style: { display: "flex", alignItems: "center", gap: 7, marginRight: 14, flex: "0 0 auto" } }, /* @__PURE__ */ react_shim_default.createElement(Icon, { name: "hexagon", size: 18, color: "var(--tint)" }), /* @__PURE__ */ react_shim_default.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: "var(--size-15)", fontWeight: 700, letterSpacing: "var(--tracking-title)" } }, "Prism")), links.map((l) => /* @__PURE__ */ react_shim_default.createElement(
      "button",
      {
        key: l,
        type: "button",
        onClick: () => onNavigate && onNavigate(l),
        style: {
          height: 32,
          padding: "0 14px",
          borderRadius: "var(--radius-full)",
          flex: "0 0 auto",
          fontSize: "var(--size-13)",
          fontWeight: active === l ? 600 : 500,
          color: active === l ? "var(--text-primary)" : "var(--text-secondary)",
          background: active === l ? "var(--fill-4)" : "transparent",
          transition: "var(--t-hover)"
        }
      },
      l
    )), /* @__PURE__ */ react_shim_default.createElement(Button, { size: "sm", shape: "capsule", style: { marginLeft: 8, flex: "0 0 auto" } }, "Get started")));
  }
  return __toCommonJS(entry_web_marketing_exports);
})();
window.LiquidGlassKits = window.LiquidGlassKits || {}; window.LiquidGlassKits["web-marketing"] = __LG_KIT;
