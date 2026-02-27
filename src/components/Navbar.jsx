import { PROFILE } from "../data/portfolioData";
import { tokens } from "../styles";

export function Navbar({ items, activeSection, onNavigate, tokens, isDark, onToggleTheme }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span style={{ color: tokens.colors.textDim }}>// </span>
        {PROFILE?.firstname ?? "dev.portfolio"} {PROFILE?.lastname ?? ""}
        <span style={styles.cursor}>_</span>
      </div>

      <nav style={styles.nav}>
        {items.map((item) => (
          <NavItem
            key={item}
            label={item}
            isActive={activeSection === item}
            onClick={() => onNavigate(item)}
          />
        ))}

        <button
          onClick={onToggleTheme}
          style={{
            background:   "transparent",
            border:       `1px solid ${tokens.colors.border}`,
            color:        tokens.colors.text,
            cursor:       "pointer",
            padding:      "8px 12px",
            fontSize:     "14px",
            borderRadius: "2px",
            marginLeft:   "8px",
            transition:   "all 0.2s",
          }}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

// ---- Sub-component: NavItem ----
// Even smaller pieces = easier to read, test, and change.

function NavItem({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.navItem,
        ...(isActive ? styles.navItemActive : {}),
      }}
    >
      {label}
    </button>
  );
}

// ---- Styles scoped to this file ----
const styles = {
  header: {
    borderBottom:    `1px solid rgba(255,255,255,0.07)`,
    padding:         "0 32px",
    display:         "flex",
    alignItems:      "center",
    justifyContent:  "space-between",
    height:          "60px",
    position:        "sticky",
    top:             0,
    background:      "rgba(10,10,15,0.95)",
    backdropFilter:  "blur(8px)",
    zIndex:          100,
  },
  logo: {
    fontFamily: tokens.fonts.mono,
    fontSize:   "13px",
    color:      tokens.colors.accent,
  },
  cursor: {
    animation: "blink 1s step-end infinite",
  },
  nav: {
    display: "flex",
    gap:     "4px",
  },
  navItem: {
    cursor:          "pointer",
    padding:         "8px 16px",
    border:          "1px solid transparent",
    background:      "transparent",
    color:           tokens.colors.text,
    fontFamily:      tokens.fonts.mono,
    fontSize:        "13px",
    letterSpacing:   "0.05em",
    transition:      "all 0.2s",
    borderRadius:    "2px",
  },
  navItemActive: {
    borderColor: tokens.colors.accent,
    color:       tokens.colors.accent,
  },
};
