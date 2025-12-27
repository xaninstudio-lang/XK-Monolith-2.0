import React from 'react';
import { motion } from 'framer-motion';

export default function SkewCard({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      // FIXED: Added flex-shrink-0 and made width more responsive
      className="group relative w-full max-w-[320px] h-[400px] shrink-0"
    >
      {/* 1. Skewed Sculpted Panel (The "Shadow" Layer) */}
      <div
        className="absolute top-0 left-[20px] w-[60%] h-full rounded-sm transform skew-x-[15deg] transition-all duration-700 ease-[0.22,1,0.36,1] 
                   bg-white/5 blur-[30px] group-hover:skew-x-0 group-hover:left-[5%] group-hover:w-[90%] opacity-0 group-hover:opacity-100"
      />

      {/* 2. Skewed Sculpted Panel (The "Base" Layer) */}
      <div
        className="absolute top-0 left-[20px] w-[60%] h-full rounded-sm transform skew-x-[15deg] transition-all duration-700 ease-[0.22,1,0.36,1] 
                   bg-[#0A0A0A] border border-white/10 group-hover:skew-x-0 group-hover:left-[5%] group-hover:w-[90%]"
      />

      {/* 3. Floating Glass Orbs */}
      <motion.span 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 left-10 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-30" 
      />
      <motion.span 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 right-10 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 z-30" 
      />

      {/* 4. Content Container */}
      <div className="relative z-20 h-full p-8 md:p-10 bg-white/[0.02] backdrop-blur-[12px] border border-white/5 rounded-sm shadow-2xl 
                      transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-x-2 group-hover:translate-y-[-10px] 
                      flex flex-col justify-end">
        
        <h2 className="text-xl font-light tracking-widest text-white uppercase mb-4 transition-colors duration-500">
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