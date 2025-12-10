import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const projects = [
    {
      title: "Plot Twist",
      description: "A collaborative storytelling platform where users create stories and others contribute plot developments through creative 'pledges'. Built as my She Codes Plus final project.",
      role: "Solo Developer",
      tech: ["React", "Django REST Framework", "PostgreSQL", "Heroku", "Netlify", "Cloudinary"],
      liveLink: "https://plottwistyouaretheauthor.netlify.app",
      githubFrontend: "https://github.com/TimTam5566/plottwist_front_end",
      githubBackend: "https://github.com/TimTam5566/plottwist_back_end",
      highlights: [
        "Full-stack development with separate frontend and backend",
        "User authentication and authorization",
        "Cloud storage integration with Cloudinary",
        "RESTful API design",
        "Responsive design for mobile and desktop"
      ]
    },
    {
      title: "Save Point",
      description: "A collaborative retrospective board tool for agile teams. Create customizable retro boards, manage action items, and track team progress.",
      role: "Project Manager & Quality Assurance",
      tech: ["React", "Django", "PostgreSQL", "Netlify", "Agile Methodologies"],
      liveLink: "https://save-point.netlify.app/",
      responsibilities: [
        "Project management and timeline coordination",
        "Bug checking and quality assurance",
        "Client liaison and expectation management",
        "Team collaboration and communication",
        "Feature prioritization and scope management"
      ]
    }
  ]

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    backend: ["Python", "Django", "Django REST Framework", "PostgreSQL", "RESTful APIs"],
    tools: ["Git", "GitHub", "VS Code", "Heroku", "Netlify", "Cloudinary"],
    other: ["Agile/Scrum", "Project Management", "Stakeholder Communication", "Problem Solving"]
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <h1 className="logo">Tamala Healy</h1>
          <div className="nav-links">
            <a href="#about" onClick={() => setActiveSection('about')}>About</a>
            <a href="#projects" onClick={() => setActiveSection('projects')}>Projects</a>
            <a href="#skills" onClick={() => setActiveSection('skills')}>Skills</a>
            <a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-tag">👋 Hello! I'm</span>
            <h1 className="hero-title">Tamala Healy</h1>
            <h2 className="hero-subtitle">Full-Stack Developer | Project Coordinator</h2>
            <p className="hero-description">
              Transitioning into tech after 20+ years in operations and stakeholder coordination. 
              Recent <strong>She Codes Plus</strong> graduate with hands-on experience building 
              full-stack applications using React, Python, and Django.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="/Tamala_Healy_Tech_Resume.pdf" download className="btn btn-secondary">
                Download Resume
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/TimTam5566" target="_blank" rel="noopener noreferrer" 
                 className="social-link" title="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/tamala-healy-387451182/" target="_blank" 
                 rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar">TH</div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
                With a background spanning psychology, operations management, and service coordination, 
                I bring a unique perspective to software development. My 20+ years of experience includes 
                mining operations at MRL, disability services coordination, and business management.
              </p>
              <p>
                I recently completed the <strong>She Codes Plus program</strong>, where I built full-stack 
                applications using modern web technologies. This intensive bootcamp reinforced my passion 
                for creating solutions that solve real problems while being accessible and user-friendly.
              </p>
              <p>
                I'm particularly interested in roles that combine technical skills with stakeholder 
                management and user-centered design. My experience coordinating complex projects across 
                diverse teams translates well to technical project management and customer success roles.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-icon">🎓</span>
                <h3>Education</h3>
                <p>She Codes Plus Graduate (2024)</p>
                <p>Bachelor of Arts - Psychology</p>
                <p>Advanced Diploma of Accounting</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">💼</span>
                <h3>Experience</h3>
                <p>20+ years in operations</p>
                <p>Mining sector (MRL)</p>
                <p>Service coordination</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🎯</span>
                <h3>Focus Areas</h3>
                <p>Full-stack development</p>
                <p>Project coordination</p>
                <p>Stakeholder management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-role">{project.role}</span>
                </div>
                <p className="project-description">{project.description}</p>
                
                {project.highlights && (
                  <div className="project-highlights">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.responsibilities && (
                  <div className="project-highlights">
                    <h4>My Responsibilities:</h4>
                    <ul>
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
                      Live Demo →
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" 
                       className="project-link">
                      Frontend Code →
                    </a>
                  )}
                  {project.githubBackend && (
                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" 
                       className="project-link">
                      Backend Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Professional Skills</h3>
              <div className="skill-tags">
                {skills.other.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            I'm currently seeking opportunities in full-stack development, technical project coordination, 
            or customer success roles. Let's connect!
          </p>
          <div className="contact-methods">
            <a href="mailto:tamala556@gmail.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <h3>Email</h3>
              <p>tamala556@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/tamala-healy-387451182/" target="_blank" 
               rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">💼</span>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </a>
            <a href="https://github.com/TimTam5566" target="_blank" 
               rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">👩‍💻</span>
              <h3>GitHub</h3>
              <p>View my code</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tamala Healy. Built with React.</p>
          <p>Perth, Western Australia</p>
        </div>
      </footer>
    </div>
  )
}

export default App
