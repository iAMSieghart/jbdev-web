import '../styles/ProjectsSection.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3 className="project-title">Portfolio CMS</h3>
            <p className="project-description">React + Tailwind-powered CMS for managing your developer portfolio easily.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
