// ============================================================
// styles.js — Design Tokens
//
// All colors, spacing, fonts in ONE place.
// Change the accent color here → updates everywhere.
// Same concept as CSS variables or a Design System.
// ============================================================

export const tokens = {
  colors: {
    bg:          "#0a0a0f",
    surface:     "rgba(255,255,255,0.03)",
    border:      "rgba(255,255,255,0.08)",
    borderHover: "rgba(0,255,157,0.3)",
    accent:      "#00ff9d",
    accentBlue:  "#00c9ff",
    accentWarn:  "#ffb400",
    text:        "#e2e2e2",
    textMuted:   "#888",
    textDim:     "#555",
    textDimmer:  "#333",
  },
  fonts: {
    mono:    "'JetBrains Mono', monospace",
    display: "'Syne', sans-serif",
  },
};

// Reusable inline style objects — like CSS classes but in JS
export const sharedStyles = {
  card: {
    background:   tokens.colors.surface,
    border:       `1px solid ${tokens.colors.border}`,
    padding:      "24px",
    borderRadius: "4px",
    transition:   "border-color 0.2s",
  },
  sectionLabel: {
    fontFamily:    tokens.fonts.mono,
    color:         tokens.colors.textDim,
    fontSize:      "12px",
    marginBottom:  "8px",
  },
  sectionTitle: {
    fontFamily: tokens.fonts.display,
    fontSize:   "36px",
    fontWeight: 800,
    marginTop:  "8px",
  },
};
