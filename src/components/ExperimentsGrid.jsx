import React, { useEffect, useRef, forwardRef } from 'react';

const BioluminescentGridItem = forwardRef(({ className, children }, ref) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Setting variables for the spotlight effect
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);
    return () => item.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={itemRef} 
      className={`group relative overflow-hidden bg-[#080808] border border-white/5 min-h-[240px] transition-all duration-500 hover:border-white/20 ${className || ''}`}
    >
      {/* 1. THE SPOTLIGHT EFFECT: Follows mouse to illuminate the background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 80%)`
        }}
      />

      {/* 2. THE BORDER GLOW: High-intensity light that "sculpts" the edges on hover */}
      <div 
        className="pointer-events-none absolute inset-[-1px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(150px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.15), transparent 100%)`,
          maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px'
        }}
      />
      
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
});

export const BioluminescentGrid = forwardRef(({ className, children }, ref) => {
  return (
    <div 
      ref={ref} 
      className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${className || ''}`}
    >
      {children}
    </div>
  );
});

export { BioluminescentGridItem };