import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pathRelative } from '../../utils/paths';

export const Player = ({ setShowMenu }) => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    // Random 0 o 1
    const value = Math.random() < 0.5 ? 0 : 1;
    setRandomImage(value);
  }, []);

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      onAnimationComplete={() => setShowMenu(true)}
      className="hidden xl:block absolute bottom-0 left-0 w-full min-h-screen z-10"
    >
      {randomImage === 0 ? (
        <img
          src={pathRelative("/img/personajes.png")}
          alt="Agentes Phoenix y Jett"
          className="absolute h-svh object-cover z-10"
        />
      ) : (
        <img
          src={pathRelative("/img/personaje-jett.png")}
          alt="Agente Jett"
          className="absolute h-svh object-cover z-10"
        />
      )}
    </motion.div>
  );
};
