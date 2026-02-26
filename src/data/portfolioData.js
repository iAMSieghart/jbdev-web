// ============================================================
// portfolioData.js
// All static data lives here — never hardcode inside components.
// If data changes, you only update ONE file.
// ============================================================

export const PROFILE = {
  name: "JB",
  title: ".NET Framework Developer",
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
    title: "BNCSystem v2.0 (Billing and Collection)",
    description:
      "A billing and collection system that generates Delivery Receipts, Invoices, RCSM, Cost Distribution, and Sales Reports for streamlined financial operations.",
    tags: ["C#", ".NET Framework 4.6", "MySQL", "EF Core"],
    status: "completed",
    github: "#",
    demo: null,
  },
  {
    title: "Production Management System (PMS)",
    description:
      "Manages production jobs with real-time status monitoring, enabling teams to track and oversee job progress throughout the production workflow.",
    tags: ["C#", ".NET Framework 4.6", "MySQL", "EF Core"],
    status: "completed",
    github: "#",
    demo: null,
  },
  {
    title: "Check Order Entry System (COES)",
    description:
      "An order entry system for processing client cheque orders, built on the latest .NET 8.0 with a modern MySQL Entity Framework Core backend.",
    tags: ["C#", ".NET 8.0", "MySQL", "EF Core"],
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
