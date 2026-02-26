import { useNavigation }                          from "./hooks/useNavigation";
import { PROFILE, SKILLS, PROJECTS, NAV_ITEMS }  from "./data/portfolioData";
import { Navbar }                                 from "./components/Navbar";
import { AboutSection }                           from "./components/AboutSection";
import { SkillsSection }                          from "./components/SkillsSection";
import { ProjectsSection }                        from "./components/ProjectsSection";
import { ContactSection }                         from "./components/ContactSection";
import { tokens }                                 from "./styles";

const SECTION_MAP = {
  About:    (props) => <AboutSection    profile={props.profile} />,
  Skills:   (props) => <SkillsSection   skills={props.skills} />,
  Projects: (props) => <ProjectsSection projects={props.projects} />,
  Contact:  (props) => <ContactSection  links={props.profile.links} />,
};

export default function App() {
  const { activeSection, setActiveSection } = useNavigation("About");

  const appData = { profile: PROFILE, skills: SKILLS, projects: PROJECTS };

  const ActiveComponent = SECTION_MAP[activeSection];

  return (
    <div style={styles.root}>
      <GlobalStyles />

      <Navbar
        items={NAV_ITEMS}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      <main style={styles.main}>
        <div key={activeSection} style={styles.fadeIn}>
          <ActiveComponent {...appData} />
        </div>
      </main>

      <footer style={styles.footer}>
        <span style={styles.footerText}>
          built with React + Vite · {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: ${tokens.colors.bg}; }
      @keyframes blink  { 50% { opacity: 0; } }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      a:hover { opacity: 0.75; }
      input:focus, textarea:focus { border-color: ${tokens.colors.accent} !important; }
    `}</style>
  );
}

const styles = {
  root: {
    fontFamily: tokens.fonts.mono,
    background: tokens.colors.bg,
    minHeight:  "100vh",
    color:      tokens.colors.text,
    width:      "100%",
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
    borderTop: "1px solid rgba(255,255,255,0.07)",
    padding:   "24px 32px",
    textAlign: "center",
  },
  footerText: {
    fontFamily: tokens.fonts.mono,
    color:      tokens.colors.textDimmer,
    fontSize:   "12px",
  },
};