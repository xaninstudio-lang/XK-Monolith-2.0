import React from 'react';
import { motion } from 'framer-motion';

export default function SkewCard({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      // FIXED: Increased max-width and added better spacing
      className="group relative w-full max-w-[340px] h-[420px] shrink-0 mx-auto lg:mx-0"
    >
      {/* 1. Skewed Sculpted Panel (The "Shadow" Layer) */}
      <div
        className="absolute inset-0 left-[10%] w-[80%] h-full rounded-sm transform skew-x-[12deg] transition-all duration-700 ease-[0.22,1,0.36,1] 
                   bg-white/5 blur-[25px] group-hover:skew-x-0 group-hover:left-0 group-hover:w-full opacity-0 group-hover:opacity-100"
      />

      {/* 2. Skewed Sculpted Panel (The "Base" Layer) */}
      <div
        className="absolute inset-0 left-[10%] w-[80%] h-full rounded-sm transform skew-x-[12deg] transition-all duration-700 ease-[0.22,1,0.36,1] 
                   bg-[#0A0A0A] border border-white/10 group-hover:skew-x-0 group-hover:left-0 group-hover:w-full"
      />

      {/* 3. Floating Glass Orbs - Z-index fixed */}
      <motion.span 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 left-1/4 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30" 
      />
      <motion.span 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 right-1/4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30" 
      />

      {/* 4. Content Container */}
      {/* FIXED: Removed negative translate-x that was causing the overlap in your screenshot */}
      <div className="relative z-20 h-full p-8 md:p-10 bg-white/[0.02] backdrop-blur-[12px] border border-white/5 rounded-sm shadow-2xl 
                      transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:translate-y-[-10px] 
                      flex flex-col justify-end">
        
        <h2 className="text-xl font-light tracking-widest text-white uppercase mb-4">
          {title}
        </h2>
        
        <p className="font-mono text-[10px] leading-relaxed text-white/40 uppercase tracking-wider">
          {desc}
        </p>

        <div className="w-0 h-px bg-white/40 mt-6 transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.div>
  );
}