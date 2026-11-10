const About = () => {
  return (
    <section className="container about-section" id="about">

      <div className="text-center">

        <p className="section-label">MY STORY</p>

        <h2>Every Day Has Its Own Story</h2>

        <p className="about-description">
          Three beautiful days filled with prayer,
          productivity, family happiness and learning.
          Every moment is special and every memory
          is worth remembering.
        </p>

      </div>

      <div className="row g-4 mt-4">

        <div className="col-md-4">
          <div className="about-box">
            <h1>📚</h1>
            <h4>Productivity</h4>
            <p>Complete tasks and finish pending work.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="about-box">
            <h1>❤️</h1>
            <h4>Family Happiness</h4>
            <p>Enjoy special moments with family.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="about-box">
            <h1>🎯</h1>
            <h4>Learning</h4>
            <p>Prepare for tests and complete tasks.</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;