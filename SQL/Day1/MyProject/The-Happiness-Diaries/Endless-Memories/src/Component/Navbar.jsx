const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          Happy Moments ❤️
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#plans">My Plans</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#celebration">Celebration</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;