import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        {/* <h1 className="logo">JB</h1> */}
        <img src="/assets/jb-logo.ico" alt="JB Logo" className="logo-img" />
        <nav>
          <ul className="nav-list">
            <li className="nav-link"><a href="#hero">Home</a></li>
            <li className="nav-link"><a href="#about">About</a></li>
            <li className="nav-link"><a href="#projects">Projects</a></li>
            <li className="nav-link"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;