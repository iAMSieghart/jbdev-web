import { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
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
};

export default Header;
