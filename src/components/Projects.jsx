import React from 'react';
import '../styles/Projects.css';

const Projects = ({ data }) => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {data.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
