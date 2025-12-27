import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Initializing core...",
  "Sculpting interfaces...",
  "Rendering experiments...",
  "Welcome to XANIN-Portfolio 2.0"
];

export const Loader = ({ finishLoading }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === messages.length - 1) {
          clearInterval(timer);
          setTimeout(finishLoading, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);
    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center"
    >
      {/* THE COOL CUBE CONTAINER */}
      <div className="relative w-24 h-24 perspective-1000 mb-16 flex items-center justify-center">
        
        {/* OUTER GLASS CUBE */}
        <motion.div
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 relative preserve-3d"
        >
          {[
            "rotateY(0deg) translateZ(32px)",
            "rotateY(90deg) translateZ(32px)",
            "rotateY(180deg) translateZ(32px)",
            "rotateY(-90deg) translateZ(32px)",
            "rotateX(90deg) translateZ(32px)",
            "rotateX(-90deg) translateZ(32px)"
          ].map((transform, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-white/20 bg-white/[0.03] backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              style={{ transform }}
            />
          ))}
        </motion.div>

        {/* INNER NEON CORE (Spins Faster) */}
        <div className="absolute inset-0 flex items-center justify-center preserve-3d">
          <motion.div
            animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 relative preserve-3d"
          >
            {[
              "rotateY(0deg) translateZ(12px)",
              "rotateY(90deg) translateZ(12px)",
              "rotateY(180deg) translateZ(12px)",
              "rotateY(-90deg) translateZ(12px)",
              "rotateX(90deg) translateZ(12px)",
              "rotateX(-90deg) translateZ(12px)"
            ].map((transform, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-white shadow-[0_0_10px_#fff]"
                style={{ transform }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, letterSpacing: "0.2em", filter: "blur(8px)" }}
            animate={{ opacity: 1, letterSpacing: "0.5em", filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.8 }}
            className="text-white font-light text-[10px] uppercase text-center px-6"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};