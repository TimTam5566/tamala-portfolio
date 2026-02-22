import skills from '../data/skills'

function Skills() {
    return (
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
                <h3>Hardware & Embedded</h3>
                <div className="skill-tags">
                {skills.hardware.map((skill, i) => (
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
    )
}

export default Skills
