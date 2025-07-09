import '../styles/HeroSection.css';
import { useEffect, useState } from 'react';

const HeroTitle = ({ text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } 
    else {
      setIsFinished(true);
    }
  }, [currentIndex, text]);

  return (
    <h1 className="hero-title">
      {text.split('').map((char, index) => {
        let style = {};
        if (!isFinished && index === currentIndex - 1) {
          style.color = '#2ecc71'; /// Green while typing
        } else if (isFinished || index < currentIndex) {
          style.color = '#ecf0f1'; /// White if typed
        } else {
          style.color = 'transparent'; /// Hide if not yet typed
        }

        return (
          <span key={index} style={style}>
            {char}
            {/* Inject cursor right after the active character */}
            {!isFinished && index === currentIndex - 1 && (
              <span className="blinking-cursor">|</span>
            )}
          </span>
        );
      })}
    </h1>
  );
};

const HeroSection = () => {
  return (
    <section className="hero" id="hero" 
      style={{ backgroundImage: 'url(/assets/minimalist.jpg)' }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img
          src="/assets/me.png"
          alt="JB Shame Gabriel"
          className="hero-avatar"
        />
        <HeroTitle text="Hi, I'm JB Shame Gabriel" />
        <p className="hero-subtitle">
          Full Stack Developer
          <br />
          Specializing in .NET & React
        </p>
        <div
          className="scroll-indicator"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
