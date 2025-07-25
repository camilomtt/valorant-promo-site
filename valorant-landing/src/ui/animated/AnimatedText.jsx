import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedText = ({numberKey, text}) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    reset: true,
    config: { duration: 500 } // Ajusta la duración según lo que necesites
  });

  

  return (
    <div className="text-center">
      <animated.div key={numberKey} style={props}>
        <h1 className="text-2xl">{text}</h1>
      </animated.div>
      
    </div>
  );
};

export default AnimatedText;
