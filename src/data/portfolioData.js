// ============================================================
// portfolioData.js
// All static data lives here — never hardcode inside components.
// If data changes, you only update ONE file.
// ============================================================

export const PROFILE = {
  name: "Your Name",
  title: "Senior Developer",
  tagline: "C# · .NET Framework · MySQL · (learning React + Node)",
  bio: `I'm a Senior Developer specializing in C# and .NET Framework, 
with solid experience building backend systems and database-driven 
applications using MySQL and Entity Framework Core. Recently promoted, 
I'm expanding into the web world — learning React.js and Node.js to 
become a full-stack developer.`,
  stats: [
    { label: "Level",            value: "Senior Developer" },
    { label: "Primary Stack",    value: "C# / .NET"        },
    { label: "Database",         value: "MySQL + EF Core"  },
    { label: "Learning",         value: "React + Node.js"  },
  ],
  links: [
    { label: "GitHub",   href: "https://github.com/yourhandle"         },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile"   },
    { label: "Email",    href: "mailto:your@email.com"                 },
  ],
};

export const SKILLS = {
  core: [
    { name: "C# / .NET Framework",        level: 95 },
    { name: "Entity Framework Core",       level: 88 },
    { name: "MySQL",                       level: 85 },
    { name: "LINQ",                        level: 83 },
  ],
  learning: [
    { name: "React.js",       level: 35 },
    { name: "Node.js",        level: 30 },
    { name: "Express.js",     level: 28 },
    { name: "JavaScript ES6", level: 50 },
    { name: "HTML5 / CSS3",   level: 55 },
  ],
};

export const PROJECTS = [
  {
    title: "Inventory Management System",
    description:
      "Full-stack desktop app built with C# .NET and MySQL. Features real-time stock tracking, reporting, and role-based access control.",
    tags: ["C#", ".NET", "MySQL", "EF Core"],
    status: "completed",
    github: "#",
    demo: null,
  },
  {
    title: "Employee Leave Portal",
    description:
      "Web-based HR portal using ASP.NET MVC with MySQL backend. Handles leave requests, approvals, and email notifications.",
    tags: ["ASP.NET MVC", "MySQL", "C#", "Bootstrap"],
    status: "completed",
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio! Currently learning React + Node.js to rebuild it as a full-stack project.",
    tags: ["React", "Node.js", "Vite"],
    status: "in-progress",
    github: "#",
    demo: null,
  },
];

export const NAV_ITEMS = ["About", "Skills", "Projects", "Contact"];
