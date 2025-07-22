import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import images from '../../constants'; // Make sure astronaut image is in here
import './Header.scss';

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="app__header-container">
        {/* Left Column: Info */}
        <div className="app__header-info">
          <div className="badge">
            <span>C# .NET Framework Developer</span>
          </div>
          <div className="badge">
            <span>React.js Enthusiast</span>
          </div>
          <h1 className="app__header-title">Hi! I'm JB</h1>
          <p className="app__header-desc">
            Welcome to my portfolio! I'm a passionate developer with a focus on C# and .NET technologies. I love building dynamic web applications and exploring new technologies.
            <br />
          </p>
          <button className="app__header-button">Let’s Connect</button>
        </div>

        {/* Right Column: Image */}
        <div className="app__header-img" style={{ backgroundImage: `url(${images.planet})` }}>
          <img src={images.jbpng} alt="astronaut" />
        </div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
