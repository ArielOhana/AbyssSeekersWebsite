import React from "react";
import { motion } from "framer-motion";

const PixelArtText = ({ text, pixelSize }) => {
  const pixelStyle = {
    fontSize: `${pixelSize}px`,
    fontFamily: "'Press Start 2P', cursive",
    display: "inline-block",
  };

  return (
    <div style={pixelStyle}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const TitleCard = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="text-center mt-16 text-6xl">
      <motion.header
        variants={textVariants}
        className="text-4xl mb-4 font-extrabold tracking-wider text-yellow-400"
      >
        <PixelArtText text="Abyss Seekers" pixelSize={8} />
      </motion.header>

      {/* Tagline */}
      <motion.h1 variants={textVariants} className="text-lg mb-6">
        <PixelArtText
          text='"Emerging from the depths of the abyss, your mission is to reclaim them."'
          pixelSize={4}
        />
      </motion.h1>
    </div>
  );
};

export default TitleCard;
