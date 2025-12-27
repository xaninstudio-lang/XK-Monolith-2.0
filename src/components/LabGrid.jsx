import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Box, Wind, Sparkles } from 'lucide-react';

const experiments = [
  {
    title: "Fluid Motion",
    description: "Exploring liquid-like transitions and physics-based animations.",
    icon: Wind,
    tag: "Animation"
  },
  {
    title: "Glass Physics",
    description: "Dynamic refraction and depth perception in web interfaces.",
    icon: Box,
    tag: "Shaders"
  },
  {
    title: "Micro-Interactions",
    description: "The art of subtle feedback and high-fidelity button states.",
    icon: MousePointer2,
    tag: "UX"
  },
  {
    title: "Generative Art",
    description: "Using math to create unique, procedurally generated visuals.",
    icon: Sparkles,
    tag: "Creative"
  }
];

const LabCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
    >
      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <item.icon size={24} className="text-neutral-400 group-hover:text-white transition-colors" />
        </div>
        
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-2 block">
          {item.tag}
        </span>
        
        <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 group-hover:text-neutral-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const LabGrid = () => {
  return (
    <section className="py-24 px-8 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Latest Experiments</h2>
            <p className="text-neutral-500 max-w-md">
              A collection of technical explorations in frontend development and digital design.
            </p>
          </div>
          <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors underline underline-offset-8 decoration-neutral-800">
            View Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiments.map((item, idx) => (
            <LabCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};