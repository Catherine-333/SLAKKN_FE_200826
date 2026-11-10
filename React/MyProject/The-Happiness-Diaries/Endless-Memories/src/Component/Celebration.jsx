const Celebration = () => {
  return (
    <section className="celebration-section" id="celebration">

      <div className="container text-center">

        <p className="section-label">SPECIAL SUNDAY</p>

        <h2>Moments of Joy & Togetherness ❤️</h2>

        <p>
          A beautiful Sunday filled with church,
          delicious food and family happiness.
        </p>

        <div className="row g-4 mt-4">

          <div className="col-md-3 col-6">
            <div className="celebration-box">
              <h1>⛪</h1>
              <h5>Church</h5>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="celebration-box">
              <h1>🍗</h1>
              <h5>Non-Veg Food</h5>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="celebration-box">
              <h1>🍰</h1>
              <h5>Sweet Moments</h5>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="celebration-box">
              <h1>🎆</h1>
              <h5>Family Fun</h5>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Celebration;