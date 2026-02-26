import { useState, useEffect } from "react";

const skills = {
  backend: ["C# / .NET Framework", "ASP.NET MVC / Web API", "Entity Framework Core", "MySQL", "REST APIs", "LINQ"],
  learning: ["React.js", "Node.js", "Express.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS"],
};

const projects = [
  {
    title: "Inventory Management System",
    desc: "Full-stack desktop app built with C# .NET and MySQL. Features real-time stock tracking, reporting, and role-based access control.",
    tags: ["C#", ".NET", "MySQL", "EF Core"],
    status: "completed",
  },
  {
    title: "Employee Leave Portal",
    desc: "Web-based HR portal using ASP.NET MVC with MySQL backend. Handles leave requests, approvals, and email notifications.",
    tags: ["ASP.NET MVC", "MySQL", "C#", "Bootstrap"],
    status: "completed",
  },
  {
    title: "Portfolio Website",
    desc: "This portfolio! Currently learning React + Node.js to rebuild it as a full-stack project.",
    tags: ["React", "Node.js", "In Progress"],
    status: "in-progress",
  },
];

const navItems = ["About", "Skills", "Projects", "Contact"];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div style={{ fontFamily: "'Courier New', Courier, monospace", background: "#0a0a0f", minHeight: "100vh", color: "#e2e2e2" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .syne { font-family: 'Syne', sans-serif; }
        .nav-item { cursor: pointer; padding: 8px 16px; border: 1px solid transparent; transition: all 0.2s; font-size: 13px; letter-spacing: 0.05em; }
        .nav-item:hover, .nav-item.active { border-color: #00ff9d; color: #00ff9d; }
        .tag { background: rgba(0,255,157,0.08); border: 1px solid rgba(0,255,157,0.25); color: #00ff9d; padding: 3px 10px; border-radius: 2px; font-size: 11px; letter-spacing: 0.05em; }
        .tag.gray { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.15); color: #aaa; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 24px; border-radius: 4px; transition: border-color 0.2s; }
        .card:hover { border-color: rgba(0,255,157,0.3); }
        .skill-bar { height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; margin-top: 6px; }
        .skill-fill { height: 100%; background: linear-gradient(90deg, #00ff9d, #00c9ff); border-radius: 2px; }
        .fade-in { opacity: 0; transform: translateY(16px); animation: fadeUp 0.6s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .badge { background: rgba(255,180,0,0.12); border: 1px solid rgba(255,180,0,0.3); color: #ffb400; padding: 2px 8px; font-size: 10px; border-radius: 2px; }
        .badge.green { background: rgba(0,255,157,0.1); border-color: rgba(0,255,157,0.3); color: #00ff9d; }
        input, textarea { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: #e2e2e2; padding: 10px 14px; font-family: 'JetBrains Mono', monospace; font-size: 13px; outline: none; transition: border-color 0.2s; width: 100%; }
        input:focus, textarea:focus { border-color: #00ff9d; }
        .btn { background: transparent; border: 1px solid #00ff9d; color: #00ff9d; padding: 10px 24px; cursor: pointer; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em; transition: all 0.2s; }
        .btn:hover { background: #00ff9d; color: #0a0a0f; }
        .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 6px; }
      `}</style>

      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px", position: "sticky", top: 0, background: "rgba(10,10,15,0.95)", backdropFilter: "blur(8px)", zIndex: 100 }}>
        <div className="mono" style={{ fontSize: "13px", color: "#00ff9d" }}>
          <span style={{ color: "#666" }}>// </span>dev.portfolio<span className="blink">_</span>
        </div>
        <nav style={{ display: "flex", gap: "4px" }}>
          {navItems.map(item => (
            <div key={item} className={`nav-item mono ${active === item ? "active" : ""}`} onClick={() => setActive(item)}>
              {item}
            </div>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        {/* ABOUT */}
        {active === "About" && (
          <div className="fade-in">
            <div style={{ marginBottom: "16px" }}>
              <span className="mono" style={{ color: "#666", fontSize: "12px" }}>// hello world</span>
            </div>
            <h1 className="syne" style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1, marginBottom: "8px" }}>
              Senior<br />
              <span style={{ color: "#00ff9d" }}>Developer</span>
            </h1>
            <p className="mono" style={{ color: "#555", fontSize: "14px", marginBottom: "32px" }}>C# · .NET Framework · MySQL · (learning React + Node)</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
              {[
                { label: "Experience", value: "Senior Level" },
                { label: "Primary Stack", value: "C# / .NET" },
                { label: "Database", value: "MySQL + EF Core" },
                { label: "Currently Learning", value: "React + Node.js" },
              ].map(item => (
                <div key={item.label} className="card">
                  <div style={{ color: "#555", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "6px" }} className="mono">{item.label.toUpperCase()}</div>
                  <div style={{ color: "#e2e2e2", fontSize: "14px" }} className="mono">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="card">
              <p style={{ lineHeight: 1.8, color: "#aaa", fontSize: "14px" }} className="mono">
                I am JB Shame Gabriel, a Senior Developer specializing in <span style={{ color: "#00ff9d" }}>C# and .NET Framework</span>, with solid experience building backend systems and database-driven applications using MySQL and Entity Framework Core. Recently promoted, I'm now expanding my skill set into the web world — learning <span style={{ color: "#00c9ff" }}>React.js and Node.js</span> to become a full-stack developer.
              </p>
            </div>
          </div>
        )}

        {/* SKILLS */}
        {active === "Skills" && (
          <div className="fade-in">
            <div style={{ marginBottom: "32px" }}>
              <span className="mono" style={{ color: "#666", fontSize: "12px" }}>// technical skills</span>
              <h2 className="syne" style={{ fontSize: "36px", fontWeight: 800, marginTop: "8px" }}>What I Know</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                  <span className="dot" style={{ background: "#00ff9d" }}></span>
                  <span className="mono" style={{ fontSize: "12px", color: "#00ff9d", letterSpacing: "0.1em" }}>BACKEND / CORE</span>
                </div>
                {skills.backend.map((s, i) => (
                  <div key={s} style={{ marginBottom: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span className="mono" style={{ fontSize: "13px" }}>{s}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${95 - i * 5}%`, animationDelay: `${i * 0.1}s` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                  <span className="dot" style={{ background: "#ffb400" }}></span>
                  <span className="mono" style={{ fontSize: "12px", color: "#ffb400", letterSpacing: "0.1em" }}>LEARNING NOW</span>
                </div>
                {skills.learning.map((s, i) => (
                  <div key={s} style={{ marginBottom: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="mono" style={{ fontSize: "13px" }}>{s}</span>
                      <span className="badge">in progress</span>
                    </div>
                    <div className="skill-bar">
                      <div style={{ width: `${40 - i * 4}%`, height: "100%", background: "linear-gradient(90deg, #ffb400, #ff6b6b)", borderRadius: "2px" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {active === "Projects" && (
          <div className="fade-in">
            <div style={{ marginBottom: "32px" }}>
              <span className="mono" style={{ color: "#666", fontSize: "12px" }}>// selected work</span>
              <h2 className="syne" style={{ fontSize: "36px", fontWeight: 800, marginTop: "8px" }}>Projects</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {projects.map((p, i) => (
                <div key={i} className="card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <h3 className="syne" style={{ fontSize: "18px", fontWeight: 700 }}>{p.title}</h3>
                    <span className={`badge ${p.status === "completed" ? "green" : ""}`}>
                      {p.status === "completed" ? "✓ completed" : "⟳ in progress"}
                    </span>
                  </div>
                  <p className="mono" style={{ color: "#888", fontSize: "13px", lineHeight: 1.7, marginBottom: "14px" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tags.map(tag => (
                      <span key={tag} className={`tag mono ${tag === "In Progress" ? "gray" : ""}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT */}
        {active === "Contact" && (
          <div className="fade-in">
            <div style={{ marginBottom: "32px" }}>
              <span className="mono" style={{ color: "#666", fontSize: "12px" }}>// get in touch</span>
              <h2 className="syne" style={{ fontSize: "36px", fontWeight: 800, marginTop: "8px" }}>Contact</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "500px" }}>
              <input placeholder="Your name" />
              <input placeholder="Your email" type="email" />
              <textarea placeholder="Your message..." rows={5} style={{ resize: "vertical" }} />
              <button className="btn mono">SEND_MESSAGE.exe</button>
            </div>
            <div style={{ marginTop: "40px", display: "flex", gap: "16px" }}>
              {["GitHub", "LinkedIn", "Email"].map(link => (
                <div key={link} className="nav-item mono" style={{ cursor: "pointer" }}>→ {link}</div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px 32px", textAlign: "center" }}>
        <span className="mono" style={{ color: "#333", fontSize: "12px" }}>built with React · {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
