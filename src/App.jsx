import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion";
import lovelyGirl from "./images/first.jpg";
import happyGirl from "./images/second.jpg";

const PhotoRevealGame = () => {
  const [taps, setTaps] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const totalTaps = 20; // Adjust for difficulty

  const handleTap = () => {
    if (taps < totalTaps) {
      setTaps(taps + 1);
    }
    if (taps + 1 === totalTaps) {
      setRevealed(true);
    }
  };

  const handleNext = () => {
    setNextPage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-pink-500 text-white">
      {!nextPage ? (
        <>
          <h1 className="text-3xl font-bold text-center">Tap to Reveal Your Surprise! 😏</h1>
          <motion.div
            className="relative w-72 h-72 bg-gray-800 overflow-hidden mt-4"
            onClick={handleTap}
          >
            <motion.img
              src={lovelyGirl} // Change to your actual image
              alt="Surprise"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: taps / totalTaps }}
            />
            <div className="absolute inset-0 bg-black" style={{ opacity: 1 - taps / totalTaps }}></div>
          </motion.div>
          {!revealed ? (
            <p className="mt-4 text-lg">{totalTaps - taps} taps left!</p>
          ) : (
            <>
              <p className="mt-4 text-xl">I won't say much 😂😂😂</p>
              <button onClick={handleNext} className="mt-4 px-4 py-2 bg-white text-pink-500 font-bold rounded-lg">Next</button>
            </>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <motion.div className="w-72 h-72 overflow-hidden">
            <motion.img
  		src={happyGirl}
  		alt="Next Surprise"
  		className="w-full h-auto max-h-[70vh] object-cover rounded-lg shadow-lg"
	     />

          </motion.div>
          <p className="mt-4 text-xl text-center">Change is inevitable 😊😊😊</p>
        </div>
      )}
    </div>
  );
};

export default PhotoRevealGame;
