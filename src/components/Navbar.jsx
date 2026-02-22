function Navbar({ activeSection, setActiveSection }) {
    return (
        <header>
            <nav className="nav" aria-label="Main navigation">
                <div className="nav-container">
                    <span className="logo">Tamala Healy</span>
                    <div className="nav-links">
                        <a
                        href="#hero"
                        onClick={() => setActiveSection('hero')}
                        aria-current={activeSection === 'hero' ? 'true' : undefined}
                        >
                        Home
                        </a>
                        <a
                        href="#about"
                        onClick={() => setActiveSection('about')}
                        aria-current={activeSection === 'about' ? 'true' : undefined}
                        >
                        About
                        </a>
                        <a
                        href="#projects"
                        onClick={() => setActiveSection('projects')}
                        aria-current={activeSection === 'projects' ? 'true' : undefined}
                        >
                        Projects
                        </a>
                        <a
                        href="#skills"
                        onClick={() => setActiveSection('skills')}
                        aria-current={activeSection === 'skills' ? 'true' : undefined}
                        >
                        Skills
                        </a>
                        <a
                        href="#contact"
                        onClick={() => setActiveSection('contact')}
                        aria-current={activeSection === 'contact' ? 'true' : undefined}
                        >
                        Contact
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
