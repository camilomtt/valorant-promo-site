import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const ProgressBar = ({ progress }) => {
  const props = useSpring({ width: `${progress}%`, from: { width: '0%' }, config: config.molasses });

  return (
    <div className="w-full bg-gray-100 rounded-full h-6">
      <animated.div style={props} className="bg-purple-300 h-6 rounded-full" />
    </div>
  );
};

export default ProgressBar;
