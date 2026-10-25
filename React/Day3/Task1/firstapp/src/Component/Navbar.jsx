const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <span className="brand">My Portfolio</span>

      <span className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </span>
    </nav>
  );
};

export default Navbar;