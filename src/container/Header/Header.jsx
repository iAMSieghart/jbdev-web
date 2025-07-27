import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import images from '../../constants'; 
import './Header.scss';

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="app__header-container">
        {/* Left Column: Info */}
        <div className="app__header-info">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
          <div className="badge">
            <span>C# .NET Framework Developer</span>
          </div>
          </motion.div>
          
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="badge">
              <span>React.js Enthusiast</span>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <h1 className="app__header-title">Hi! I'm JB</h1>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
          <p className="app__header-desc">
            Welcome to my portfolio! I'm a passionate developer with a focus on C# and .NET technologies. I love building dynamic web applications and exploring new technologies.
            <br />
          </p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <button className="app__header-button">Contact me</button>
          </motion.div>
        </div>

        
        {/* Right Column: Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <div className="app__header-img" style={{ backgroundImage: `url(${images.planet})` }}>
              <img src={images.jbpng} alt="astronaut"/>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <div className="app__header-down" onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
            style={{ cursor: 'pointer' }}
          >
            <div className="mouse">
              <div className="scroll-wheel" />
            </div>
            <p className="scroll-text">Scroll Down</p>
          </div>
        </motion.div>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
