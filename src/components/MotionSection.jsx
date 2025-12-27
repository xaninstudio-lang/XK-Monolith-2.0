import React from 'react';
import { motion } from 'framer-motion';
import SkewCard from './SkewCard';

// This creates the "Moving Blurry Background"
const BlurredAtmosphere = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1: Soft light moving slowly */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, 80, 120, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[140px]"
      />

      {/* Orb 2: Counter-movement at the bottom */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, -100, -50, 0],
          scale: [1, 0.8, 1.1, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-[160px]"
      />
    </div>
  );
};

export default function MotionSection() {
  const motionStudies = [
    {
      title: 'Kinetic Flow',
      desc: 'An exploration of liquid easing and momentum-based transitions in spatial UI.',
    },
    {
      title: 'Temporal Logic',
      desc: 'Studying the perception of time through staggered entrance and exit animations.',
    },
    {
      title: 'Spatial Depth',
      desc: 'Utilizing Z-axis manipulation to create hierarchy and focus within flat interfaces.',
    },
  ];

  return (
    <section id="motion" className="relative py-32 bg-[#050505] px-6 md:px-20 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Effect Layer */}
      <BlurredAtmosphere />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-light tracking-[0.5em] text-white/30 uppercase mb-4">02 — Motion studies</h2>
          <div className="h-px w-12 bg-white/20" />
        </div>

        <div className="flex justify-center items-center flex-wrap gap-12 lg:gap-4">
          {motionStudies.map((study, idx) => (
            <SkewCard 
              key={idx} 
              title={study.title} 
              desc={study.desc} 
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}