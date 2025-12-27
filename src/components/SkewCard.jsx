import React from 'react';
import { motion } from 'framer-motion';

export default function SkewCard({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-[300px] h-[380px] m-4"
    >
      {/* 1. Skewed Sculpted Panel (The "Shadow" Layer) */}
      <div
        className="absolute top-0 left-[40px] w-1/2 h-full rounded-sm transform skew-x-[15deg] transition-all duration-700 ease-[0.22,1,0.36,1] 
                   bg-white/5 blur-[20px] group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-40px)]"
      />

      {/* 2. Skewed Sculpted Panel (The "Base" Layer) */}
      <div
        className="absolute top-0 left-[40px] w-1/2 h-full rounded-sm transform skew-x-[15deg] transition-all duration-700 ease-[0.22,1,0.36,1] 
                   bg-[#0A0A0A] border border-white/10 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-40px)]"
      />

      {/* 3. Floating Glass Orbs (Adapted from "Blobs") */}
      <motion.span 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-10 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" 
      />
      <motion.span 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-10 right-10 w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300" 
      />

      {/* 4. Content Container */}
      <div className="relative z-20 h-full p-10 bg-white/[0.02] backdrop-blur-[12px] border border-white/5 rounded-sm shadow-2xl 
                      transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-x-4 group-hover:translate-y-[-10px] 
                      flex flex-col justify-end">
        
        <h2 className="text-xl font-light tracking-widest text-white uppercase mb-4 transition-colors duration-500 group-hover:text-white">
          {title}
        </h2>
        
        <p className="font-mono text-[11px] leading-relaxed text-white/40 uppercase tracking-wider">
          {desc}
        </p>

        {/* Quiet "Focus" Bar */}
        <div className="w-0 h-px bg-white/40 mt-6 transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.div>
  );
}