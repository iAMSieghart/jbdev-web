export const darkTokens = {
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

export const lightTokens = {
  colors: {
    bg:          "#f5f5f0",
    surface:     "rgba(0,0,0,0.03)",
    border:      "rgba(0,0,0,0.08)",
    borderHover: "rgba(0,180,100,0.4)",
    accent:      "#00a86b",
    accentBlue:  "#0077cc",
    accentWarn:  "#cc8800",
    text:        "#1a1a1a",
    textMuted:   "#555",
    textDim:     "#888",
    textDimmer:  "#bbb",
  },
  fonts: {
    mono:    "'JetBrains Mono', monospace",
    display: "'Syne', sans-serif",
  },
};

// Default export still works for files that haven't been updated yet
export const tokens = darkTokens;

export const sharedStyles = {
  card: {
    background:   "rgba(255,255,255,0.03)",
    border:       "1px solid rgba(255,255,255,0.08)",
    padding:      "24px",
    borderRadius: "4px",
    transition:   "border-color 0.2s",
  },
  sectionLabel: {
    fontFamily:   "'JetBrains Mono', monospace",
    color:        "#555",
    fontSize:     "12px",
    marginBottom: "8px",
  },
  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize:   "36px",
    fontWeight: 800,
    marginTop:  "8px",
  },
};