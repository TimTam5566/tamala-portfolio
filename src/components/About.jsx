function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>
                        <p>
                        With over a decade of experience in the disability and mining sectors,
                        I bring analytical thinking, strong accountability and a risk-aware mindset
                        to software development. My background in structured, compliance-driven
                        environments has shaped the way I approach engineering — with care,
                        precision and a focus on reliability.
                        </p>
                        <p>
                        I completed the <strong>She Codes Plus industry bootcamp</strong> in December 2025,
                        where I built and deployed full-stack applications using React, JavaScript,
                        Python and Django. Through collaborative projects and independent builds,
                        I developed hands-on experience in API design, relational databases and
                        modern deployment workflows.
                        </p>
                        <p>
                        I'm motivated by building secure, scalable systems that are accessible,
                        protect user data and operate reliably under real-world constraints. I enjoy
                        collaborating within technical teams, translating user needs into structured
                        solutions and continuously expanding my engineering capability.
                        </p>
                    </div>
                <div className="about-highlights">
                    <div className="highlight-card">
                        <span className="highlight-icon" role="img" aria-label="Education">🎓</span>
                        <h3>Education</h3>
                        <p>She Codes Plus Graduate (2025)</p>
                        <p>Bachelor of Arts – Psychology</p>
                        <p>Advanced Diploma of Accounting</p>
                    </div>
                    <div className="highlight-card">
                        <span className="highlight-icon" role="img" aria-label="Professional background">💼</span>
                        <h3>Professional Background</h3>
                        <p>Disability & mining sectors</p>
                        <p>Compliance-driven environments</p>
                        <p>Complex stakeholder coordination</p>
                    </div>
                    <div className="highlight-card">
                        <span className="highlight-icon" role="img" aria-label="Engineering focus">🎯</span>
                        <h3>Engineering Focus</h3>
                        <p>Full-stack development (React & Django)</p>
                        <p>API design & relational databases</p>
                        <p>Accessible, secure & scalable systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
