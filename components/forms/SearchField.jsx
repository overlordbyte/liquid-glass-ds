import React from "react";

/** SearchField — capsule search input; glass variant for floating over content. */
export function SearchField({ value, onChange, placeholder = "Search", glass = false, onClear, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const skin = glass
    ? {
        background: "var(--material-regular)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        boxShadow: focused ? "var(--specular), var(--focus-halo)" : "var(--specular)",
      }
    : {
        background: "var(--control-fill-input)",
        boxShadow: focused ? "var(--focus-halo)" : "none",
      };

  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 8, minWidth: 0,
        height: 36, padding: "0 12px", borderRadius: "var(--radius-full)",
        transition: "box-shadow var(--dur-fast) var(--ease-standard)",
        ...skin, ...style,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ color: "var(--text-tertiary)", flex: "0 0 auto" }}>
        <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" />
      </svg>
      <input
        type="search"
        role="searchbox"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ flex: 1, minWidth: 0, border: 0, background: "transparent", outline: "none", fontSize: "var(--size-15)", color: "var(--text-primary)" }}
        {...rest}
      />
      {value ? (
        <button type="button" aria-label="Clear" onClick={onClear} style={{ color: "var(--text-tertiary)", display: "grid", placeItems: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="10" opacity="0.28" />
            <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="var(--surface-page)" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
