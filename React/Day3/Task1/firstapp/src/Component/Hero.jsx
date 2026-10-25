
const Hero = () => {
  return (
    <main className="hero" id="home">
      <section className="hero-content">
        <p className="eyebrow">Hello, I'm Bala</p>
        <h1>Frontend Developer</h1>
        <p className="tagline">
          I build modern, responsive, and user-friendly web applications.
        </p>

        <span className="hero-actions">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </span>
      </section>

      <aside className="hero-card">
        <span className="profile-badge">B</span>
        <h3>Availability</h3>
        <p>Open to freelance and full-time opportunities</p>
        <ul>
          <li>React</li>
          <li>UI Design</li>
          <li>Web Apps</li>
        </ul>
      </aside>
    </main>
  );
};

export default Hero;