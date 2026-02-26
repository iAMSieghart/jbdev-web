// ============================================================
// AboutSection.jsx
//
// Displays profile info. Receives `profile` as a prop.
// No hardcoded strings here — all data comes from portfolioData.js
// ============================================================

import { tokens, sharedStyles } from "../styles";

export function AboutSection({ profile }) {
  return (
    <div>
      <p style={sharedStyles.sectionLabel}>// hello world</p>

      <h1 style={styles.heading}>
        Senior<br />
        <span style={{ color: tokens.colors.accent }}>Developer</span>
      </h1>

      <p style={styles.tagline}>{profile.tagline}</p>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        {profile.stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      {/* Bio */}
      <div style={{ ...sharedStyles.card }}>
        <p style={styles.bio}>{profile.bio}</p>
      </div>
    </div>
  );
}

// ---- Sub-component ----
function StatCard({ label, value }) {
  return (
    <div style={sharedStyles.card}>
      <div style={styles.statLabel}>{label.toUpperCase()}</div>
      <div style={styles.statValue}>{value}</div>
    </div>
  );
}

const styles = {
  heading: {
    fontFamily:   tokens.fonts.display,
    fontSize:     "clamp(36px, 6vw, 64px)",
    fontWeight:   800,
    lineHeight:   1,
    marginBottom: "8px",
    color:        tokens.colors.text,
  },
  tagline: {
    fontFamily:   tokens.fonts.mono,
    color:        tokens.colors.textDim,
    fontSize:     "14px",
    marginBottom: "32px",
  },
  statsGrid: {
    display:             "grid",
    gridTemplateColumns: "1fr 1fr",
    gap:                 "16px",
    marginBottom:        "40px",
  },
  statLabel: {
    fontFamily:    tokens.fonts.mono,
    color:         tokens.colors.textDim,
    fontSize:      "11px",
    letterSpacing: "0.1em",
    marginBottom:  "6px",
  },
  statValue: {
    fontFamily: tokens.fonts.mono,
    color:      tokens.colors.text,
    fontSize:   "14px",
  },
  bio: {
    fontFamily: tokens.fonts.mono,
    lineHeight: 1.8,
    color:      tokens.colors.textMuted,
    fontSize:   "14px",
  },
};
