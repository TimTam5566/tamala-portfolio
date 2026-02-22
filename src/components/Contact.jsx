function Contact() {
    return (
        <section id="contact" className="contact">
        <div className="container">
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-text">
            I'm seeking opportunities where I can apply my full-stack capability
            and continue building my engineering skills within a collaborative,
            structured environment. Let's connect.
            </p>
            <div className="contact-methods">
            <a href="mailto:tamala556@gmail.com" className="contact-card" aria-label="Email tamala556@gmail.com">
                <span className="contact-icon" role="img" aria-label="Email">📧</span>
                <h3>Email</h3>
                <p>tamala556@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/tamala-healy" target="_blank"
                rel="noopener noreferrer" className="contact-card" aria-label="LinkedIn profile (opens in a new tab)">
                <span className="contact-icon" role="img" aria-label="LinkedIn">💼</span>
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
            </a>
            <a href="https://github.com/TimTam5566" target="_blank"
                rel="noopener noreferrer" className="contact-card" aria-label="GitHub profile (opens in a new tab)">
                <span className="contact-icon" role="img" aria-label="GitHub">👩‍💻</span>
                <h3>GitHub</h3>
                <p>View my code</p>
            </a>
            </div>
        </div>
        </section>
    )
}

export default Contact
