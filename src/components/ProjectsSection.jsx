// ============================================================
// ProjectsSection.jsx
// ============================================================

import { tokens, sharedStyles } from "../styles";

export function ProjectsSection({ projects }) {
  return (
    <div>
      <p style={sharedStyles.sectionLabel}>// selected work</p>
      <h2 style={sharedStyles.sectionTitle}>Projects</h2>

      <div style={styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

// ---- Sub-component ----

function ProjectCard({ project }) {
  const isCompleted = project.status === "completed";

  return (
    <div style={sharedStyles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.title}>{project.title}</h3>
        <StatusBadge completed={isCompleted} />
      </div>

      <p style={styles.description}>{project.description}</p>

      <div style={styles.footer}>
        <div style={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>

        <div style={styles.links}>
          {project.github && (
            <a href={project.github} style={styles.link}>GitHub →</a>
          )}
          {project.demo && (
            <a href={project.demo} style={styles.link}>Live Demo →</a>
          )}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ completed }) {
  return (
    <span style={{
      ...styles.badge,
      background:   completed ? "rgba(0,255,157,0.1)"   : "rgba(255,180,0,0.12)",
      borderColor:  completed ? "rgba(0,255,157,0.3)"   : "rgba(255,180,0,0.3)",
      color:        completed ? tokens.colors.accent     : tokens.colors.accentWarn,
    }}>
      {completed ? "✓ completed" : "⟳ in progress"}
    </span>
  );
}

const styles = {
  list: {
    display:       "flex",
    flexDirection: "column",
    gap:           "16px",
    marginTop:     "32px",
  },
  cardHeader: {
    display:        "flex",
    justifyContent: "space-between",
    alignItems:     "flex-start",
    marginBottom:   "10px",
  },
  title: {
    fontFamily: tokens.fonts.display,
    fontSize:   "18px",
    fontWeight: 700,
    color:      tokens.colors.text,
  },
  badge: {
    padding:      "2px 10px",
    fontSize:     "11px",
    borderRadius: "2px",
    border:       "1px solid",
    fontFamily:   tokens.fonts.mono,
    whiteSpace:   "nowrap",
  },
  description: {
    fontFamily:   tokens.fonts.mono,
    color:        tokens.colors.textMuted,
    fontSize:     "13px",
    lineHeight:   1.7,
    marginBottom: "14px",
  },
  footer: {
    display:        "flex",
    justifyContent: "space-between",
    alignItems:     "center",
  },
  tags: {
    display: "flex",
    gap:     "6px",
    flexWrap:"wrap",
  },
  tag: {
    background:    "rgba(0,255,157,0.08)",
    border:        "1px solid rgba(0,255,157,0.25)",
    color:         tokens.colors.accent,
    padding:       "3px 10px",
    borderRadius:  "2px",
    fontSize:      "11px",
    letterSpacing: "0.05em",
    fontFamily:    tokens.fonts.mono,
  },
  links: {
    display: "flex",
    gap:     "12px",
  },
  link: {
    fontFamily:     tokens.fonts.mono,
    fontSize:       "12px",
    color:          tokens.colors.accentBlue,
    textDecoration: "none",
  },
};
