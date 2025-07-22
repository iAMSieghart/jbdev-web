import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import images from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    
  </div>
);

export default AppWrap(Header, 'home');