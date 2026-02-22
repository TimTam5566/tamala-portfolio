function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-role">{project.role}</span>
            </div>
            <p className="project-description">{project.description}</p>
            {project.highlights && (
                <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul role="list">
                    {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                    ))}
                </ul>
                </div>
            )}
            {project.responsibilities && (
                <div className="project-highlights">
                <h4>My Responsibilities:</h4>
                <ul role="list">
                    {project.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                    ))}
                </ul>
                </div>
            )}
            <div className="project-tech">
                {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
                ))}
            </div>
            <div className="project-links">
                {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="project-link">
                    Live Demo <span aria-hidden="true">→</span>
                </a>
                )}
                {project.githubFrontend && (
                <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer"
                    className="project-link">
                    Frontend Code <span aria-hidden="true">→</span>
                </a>
                )}
                {project.githubBackend && (
                <a href={project.githubBackend} target="_blank" rel="noopener noreferrer"
                    className="project-link">
                    Backend Code <span aria-hidden="true">→</span>
                </a>
                )}
                {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                    className="project-link">
                    GitHub Repo <span aria-hidden="true">→</span>
                </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
