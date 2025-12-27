import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Maximize, Cpu, Zap, Shield, Smartphone } from "lucide-react"

/* --- 1. Sub-Animations (Animated Icons/Logos) --- */

const TypeStudy = () => (
  <div className="flex items-center justify-center h-full">
    <motion.span
      className="text-6xl md:text-7xl text-white font-light tracking-tighter"
      animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      Aa
    </motion.span>
  </div>
)

const LayoutStudy = () => {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setStep((s) => (s + 1) % 3), 2500)
    return () => clearInterval(interval)
  }, [])
  const grids = ["grid-cols-2", "grid-cols-3", "grid-cols-1"]
  return (
    <div className="h-full flex items-center justify-center p-4">
      <motion.div className={`grid ${grids[step]} gap-2 w-full max-w-[120px]`} layout>
        {[1, 2, 3].map((i) => (
          <motion.div key={i} className="bg-white/20 h-4 rounded-sm" layout />
        ))}
      </motion.div>
    </div>
  )
}

const SpeedStudy = () => (
  <div className="flex flex-col items-center justify-center h-full gap-3">
    <motion.div 
      className="text-2xl font-mono text-white"
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      60fps
    </motion.div>
    <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-white"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
)

/* --- 2. Main Layout Section --- */

const StudyCard = ({ title, desc, children, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -5 }}
    className={`group relative bg-[#080808] border border-white/5 p-8 flex flex-col justify-between overflow-hidden ${className}`}
  >
    <div className="flex-1 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
      {children}
    </div>
    <div className="mt-6 relative z-10">
      <h3 className="text-xs tracking-[0.3em] text-white uppercase font-light mb-2">{title}</h3>
      <p className="text-[10px] font-mono text-white/30 uppercase tracking-tight leading-relaxed max-w-[200px]">
        {desc}
      </p>
    </div>
  </motion.div>
)

export default function LayoutsSection() {
  return (
    <section id="layouts" className="py-32 bg-[#050505] px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.6em] text-white/20 uppercase">03 — Layout Systems</span>
          <div className="h-px w-8 bg-white/20 mt-4" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[240px]">
          
          <StudyCard 
            title="Typography" 
            desc="Scaling systems for fluid readability." 
            className="md:col-span-2 md:row-span-2"
            delay={0.1}
          >
            <TypeStudy />
          </StudyCard>

          <StudyCard 
            title="Adaptive Grids" 
            desc="Dynamic spatial distribution logic." 
            className="md:col-span-2"
            delay={0.2}
          >
            <LayoutStudy />
          </StudyCard>

          <StudyCard 
            title="Performance" 
            desc="Zero-latency interaction mapping." 
            className="md:col-span-2 md:row-span-2"
            delay={0.3}
          >
            <SpeedStudy />
          </StudyCard>

          <StudyCard 
            title="Encryption" 
            desc="Secure state management protocols." 
            className="md:col-span-2"
            delay={0.4}
          >
            <div className="flex items-center justify-center h-full gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i} 
                  animate={{ opacity: [0.1, 0.4, 0.1] }} 
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className="w-8 h-10 border border-white/20 flex items-center justify-center rounded-sm"
                >
                  <Shield size={14} className="text-white/40" />
                </motion.div>
              ))}
            </div>
          </StudyCard>

          <StudyCard 
            title="Spatial UI" 
            desc="Hierarchical depth in 2D planes." 
            className="md:col-span-3"
            delay={0.5}
          >
             <div className="flex items-center justify-center h-full">
                <div className="relative w-24 h-16 border border-white/10 rounded-sm">
                  <motion.div 
                    className="absolute inset-2 border border-white/40 opacity-20"
                    animate={{ scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
             </div>
          </StudyCard>

          <StudyCard 
            title="Responsiveness" 
            desc="Universal device compatibility." 
            className="md:col-span-3"
            delay={0.6}
          >
            <div className="flex items-center justify-center h-full">
              <Smartphone size={32} strokeWidth={1} className="text-white/20" />
            </div>
          </StudyCard>

        </div>
      </div>
    </section>
  )
}