import React from 'react';

export default function SkewCard({ title, desc, index }) {
  return (
    <div className="group relative w-full max-w-[320px] h-[440px] transition-all duration-500 mx-auto">
      
      {/* 1. THE BLURRED GLOW (Gray/White) */}
      <span
        className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[35px] transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-40px)]"
        style={{
          background: 'linear-gradient(315deg, #4d4d4d, #1a1a1a)',
        }}
      />

      {/* 2. THE SKEWED BASE (The "Tail" part in your image) */}
      <span
        className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 bg-[#222] border border-white/5 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-40px)]"
      />

      {/* 3. MAIN CONTENT BOX (Glassmorphism) */}
      <div className="relative z-20 h-full p-8 bg-white/[0.03] backdrop-blur-[15px] border border-white/10 rounded-lg flex flex-col justify-end transition-all duration-500 group-hover:translate-y-[-15px] shadow-2xl">
        
        <h2 className="text-2xl font-light tracking-tight text-white mb-3">
          {title}
        </h2>
        
        <p className="text-sm leading-relaxed text-white/50 mb-6 font-light">
          {desc}
        </p>

        {/* The "Read More" styled as a quiet button */}
        <div className="inline-block w-max px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-sm transition-transform hover:scale-105">
          Focus
        </div>
      </div>
    </div>
  );
}