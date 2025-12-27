import React from 'react';
import SkewCard from './SkewCard';

export default function MotionSection() {
  const motionStudies = [
    { 
      title: 'Kinetic Flow', 
      desc: 'An exploration of liquid easing and momentum-based transitions in spatial UI.' 
    },
    { 
      title: 'Temporal Logic', 
      desc: 'Studying the perception of time through staggered entrance and exit animations.' 
    },
    { 
      title: 'Spatial Depth', 
      desc: 'Utilizing Z-axis manipulation to create hierarchy and focus within flat interfaces.' 
    },
  ];

  return (
    <section id="motion" className="relative py-32 bg-[#050505] min-h-screen flex flex-col justify-center overflow-hidden px-6">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-20">
          <h2 className="text-sm font-light tracking-[0.5em] text-white/30 uppercase mb-4">
            02 — Motion studies
          </h2>
          <div className="h-px w-12 bg-white/20" />
        </div>

        {/* THE GRID: 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 justify-items-center">
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