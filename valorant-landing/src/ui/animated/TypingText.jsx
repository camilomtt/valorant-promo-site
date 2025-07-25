import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const TypingText = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 } // Ajustar la duración de la animación
  });

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <animated.div style={props}>
      <h3 className='text-2xl'>{currentText}</h3>
    </animated.div>
  );
};

export default TypingText;
