// ============================================================
// SkillsSection.jsx
// ============================================================

import { tokens, sharedStyles } from "../styles";

export function SkillsSection({ skills }) {
  return (
    <div>
      <p style={sharedStyles.sectionLabel}>// technical skills</p>
      <h2 style={sharedStyles.sectionTitle}>What I Know</h2>

      <div style={styles.grid}>
        <SkillGroup
          title="BACKEND / CORE"
          dotColor={tokens.colors.accent}
          skills={skills.core}
          barColor={`linear-gradient(90deg, ${tokens.colors.accent}, ${tokens.colors.accentBlue})`}
        />
        <SkillGroup
          title="LEARNING NOW"
          dotColor={tokens.colors.accentWarn}
          skills={skills.learning}
          barColor={`linear-gradient(90deg, ${tokens.colors.accentWarn}, #ff6b6b)`}
          badge="in progress"
        />
      </div>
    </div>
  );
}

// ---- Sub-components ----

function SkillGroup({ title, dotColor, skills, barColor, badge }) {
  return (
    <div>
      <div style={styles.groupHeader}>
        <span style={{ ...styles.dot, background: dotColor }} />
        <span style={{ ...styles.groupTitle, color: dotColor }}>{title}</span>
      </div>

      {skills.map((skill) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          barColor={barColor}
          badge={badge}
        />
      ))}
    </div>
  );
}

function SkillBar({ name, level, barColor, badge }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={styles.skillRow}>
        <span style={styles.skillName}>{name}</span>
        {badge && <span style={styles.badge}>{badge}</span>}
      </div>
      <div style={styles.track}>
        <div style={{ ...styles.fill, width: `${level}%`, background: barColor }} />
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display:             "grid",
    gridTemplateColumns: "1fr 1fr",
    gap:                 "40px",
    marginTop:           "32px",
  },
  groupHeader: {
    display:      "flex",
    alignItems:   "center",
    marginBottom: "16px",
  },
  dot: {
    width:        "8px",
    height:       "8px",
    borderRadius: "50%",
    marginRight:  "8px",
    display:      "inline-block",
  },
  groupTitle: {
    fontFamily:    tokens.fonts.mono,
    fontSize:      "12px",
    letterSpacing: "0.1em",
  },
  skillRow: {
    display:        "flex",
    justifyContent: "space-between",
    alignItems:     "center",
  },
  skillName: {
    fontFamily: tokens.fonts.mono,
    fontSize:   "13px",
    color:      tokens.colors.text,
  },
  badge: {
    background:   "rgba(255,180,0,0.12)",
    border:       "1px solid rgba(255,180,0,0.3)",
    color:        tokens.colors.accentWarn,
    padding:      "2px 8px",
    fontSize:     "10px",
    borderRadius: "2px",
    fontFamily:   tokens.fonts.mono,
  },
  track: {
    height:       "3px",
    background:   "rgba(255,255,255,0.1)",
    borderRadius: "2px",
    overflow:     "hidden",
    marginTop:    "6px",
  },
  fill: {
    height:       "100%",
    borderRadius: "2px",
    transition:   "width 0.8s ease",
  },
};
