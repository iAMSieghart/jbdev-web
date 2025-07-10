import '../styles/HeroSection.css';
import { useEffect, useState } from 'react';

const HeroTitle = ({ text, size = '', onFinish, typingSpeed = 100 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isFinished) {
      setIsFinished(true);
      if (onFinish) onFinish();
    }
  }, [currentIndex, text, onFinish, typingSpeed, isFinished]);

  return (
    <h1 className={`hero-title ${size}`}>
      {text.split('').map((char, index) => {
        const isCurrent = index === currentIndex - 1;
        const isVisible = index < currentIndex;

        return (
          <span key={index} style={{ color: isVisible ? '#ecf0f1' : 'transparent' }}>
            {char}
            {!isFinished && isCurrent && (
              <span className="blinking-cursor">|</span>
            )}
          </span>
        );
      })}
    </h1>
  );
};


const HeroSection = () => {
  const titles = [
    { text: "Hello, I am", size: "text-2xl md:text-3xl" },
    { text: "JB Shame Gabriel", size: "text-5xl md:text-7xl" },
    { text: "Full Stack Developer", size: "text-3xl md:text-4xl" },
    { text: "Specializing in .NET Framework & React", size: "text-base md:text-lg" }
  ];


  const [currentLine, setCurrentLine] = useState(0);
  const [logoDone, setLogoDone] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [typedLines, setTypedLines] = useState([]);

  const handleFinish = () => {
    // Add the finished line to the list
    setTypedLines((prev) => [...prev, currentLine]);

    if (currentLine < titles.length - 1) {
      setCurrentLine((prev) => prev + 1);
    } else {
      setTypingDone(true);
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-body">
          {/* Logo with animation */}
          <div className="hero-logo">
            <img
              src="./assets/jb_logo-01.png"
              alt="Logo"
              className="opacity-0 animate-fade-in-up"
              onAnimationEnd={() => setLogoDone(true)}
            />
          </div>

          {/* Typing Text */}
          <div className="hero-text">
            {logoDone &&
              titles.map((title, index) => {
                if (index < currentLine) {
                  // Already typed lines
                  return (
                    <h1 key={index} className={`hero-title ${title.size}`}>
                      {title.text}
                    </h1>
                  );
                } else if (index === currentLine) {
                  // Currently typing line
                  return (
                    <HeroTitle
                      key={index}
                      text={title.text}
                      size={title.size}
                      typingSpeed={40}
                      onFinish={handleFinish}
                    />
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>

        {/* Mouse animation after all done */}
        {logoDone && typingDone && (
          <div className="mouse animate-pop-up">
            <div className="scroll-wheel"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
