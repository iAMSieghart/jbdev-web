import { useState }                               from "react";
import { useNavigation }                          from "./hooks/useNavigation";
import { PROFILE, SKILLS, PROJECTS, NAV_ITEMS }  from "./data/portfolioData";
import { Navbar }                                 from "./components/Navbar";
import { AboutSection }                           from "./components/AboutSection";
import { SkillsSection }                          from "./components/SkillsSection";
import { ProjectsSection }                        from "./components/ProjectsSection";
import { ContactSection }                         from "./components/ContactSection";
import { darkTokens, lightTokens }                from "./styles";

const SECTION_MAP = {
  About:    (props) => <AboutSection    profile={props.profile} tokens={props.tokens} />,
  Skills:   (props) => <SkillsSection   skills={props.skills}   tokens={props.tokens} />,
  Projects: (props) => <ProjectsSection projects={props.projects} tokens={props.tokens} />,
  Contact:  (props) => <ContactSection  links={props.profile.links} tokens={props.tokens} />,
};

export default function App() {
  const { activeSection, setActiveSection } = useNavigation("About");

  // ✨ THIS IS useState — isDark is our state, setIsDark updates it
  const [isDark, setIsDark] = useState(true);

  // Pick token set based on current mode
  const tokens = isDark ? darkTokens : lightTokens;

  const appData = {
    profile:  PROFILE,
    skills:   SKILLS,
    projects: PROJECTS,
    tokens,
  };

  const ActiveComponent = SECTION_MAP[activeSection];

  return (
    <div style={{ ...styles.root, background: tokens.colors.bg, color: tokens.colors.text }}>
      <GlobalStyles tokens={tokens} />

      <Navbar
        items={NAV_ITEMS}
        activeSection={activeSection}
        onNavigate={setActiveSection}
        tokens={tokens}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}  // ← flips true/false
      />

      <main style={styles.main}>
        <div key={activeSection} style={styles.fadeIn}>
          <ActiveComponent {...appData} />
        </div>
      </main>

      <footer style={{ ...styles.footer, borderColor: tokens.colors.border }}>
        <span style={{ ...styles.footerText, color: tokens.colors.textDimmer }}>
          built with React + Vite · {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

function GlobalStyles({ tokens }) {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: ${tokens.colors.bg}; transition: background 0.3s; }
      @keyframes blink  { 50% { opacity: 0; } }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      a:hover { opacity: 0.75; }
      input:focus, textarea:focus { border-color: ${tokens.colors.accent} !important; }
    `}</style>
  );
}

const styles = {
  root: {
    fontFamily: "'JetBrains Mono', monospace",
    minHeight:  "100vh",
    width:      "100%",
    transition: "background 0.3s, color 0.3s",
  },
  main: {
    maxWidth: "900px",
    margin:   "0 auto",
    padding:  "60px 32px",
  },
  fadeIn: {
    animation: "fadeUp 0.5s ease forwards",
  },
  footer: {
    borderTop: "1px solid",
    padding:   "24px 32px",
    textAlign: "center",
  },
  footerText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize:   "12px",
  },
};