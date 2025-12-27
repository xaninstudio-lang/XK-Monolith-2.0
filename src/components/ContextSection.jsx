import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// FIXED: Removed /src/assets/ and used absolute public paths
const images = [
  { src: '/image-1.png', alt: 'Portrait study 01' },
  { src: '/image-2.png', alt: 'Portrait study 02' },
  { src: '/image-3.png', alt: 'Portrait study 03' },
  { src: '/image-4.png', alt: 'Portrait study 04' },
  { src: '/image-5.png', alt: 'Portrait study 05' },
  { src: '/image-6.png', alt: 'Portrait study 06' },
];

export default function ContextSection() {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(images.length / 2));

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="context" className="relative min-h-screen bg-[#050505] flex items-center overflow-hidden px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Narrative Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-8 order-2 lg:order-1"
        >
          <div>
            <h2 className="text-sm font-light tracking-[0.5em] text-white/30 uppercase mb-4">04 — Context</h2>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter">
              About Me
            </h1>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-mono text-white/80 uppercase tracking-widest leading-relaxed">
              Synthesizing light, code, and human intent.
            </h3>
            <p className="text-white/40 leading-relaxed font-light text-lg max-w-lg">
              I am a creator driven by the quiet intersection of art and logic. My journey is an ongoing experiment in how digital spaces can feel more organic and less mechanical. By blending design curiosity with technical rigor, I strive to build interfaces that don't just function—they breathe. For me, every line of code is a brushstroke in a much larger, evolving study of motion and rhythm.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Photo Gallery */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center order-1 lg:order-2">
          {/* FIXED: Added better perspective handling and touch-safety */}
          <div className="relative w-full h-full flex items-center justify-center [perspective:1200px] pointer-events-none lg:pointer-events-auto">
            {images.map((image, index) => {
              const offset = index - currentIndex;
              const total = images.length;
              let pos = (offset + total) % total;
              if (pos > Math.floor(total / 2)) pos -= total;

              const isCenter = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: `${pos * 40}%`, // Slightly reduced for better mobile fit
                    scale: isCenter ? 1 : isAdjacent ? 0.8 : 0.4,
                    rotateY: pos * -20, // Sculpted rotation
                    opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                    zIndex: 10 - Math.abs(pos),
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-56 h-72 md:w-72 md:h-96"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="absolute -bottom-8 lg:bottom-4 flex gap-6 z-30">
            <button 
              onClick={handlePrev}
              className="p-3 border border-white/5 rounded-full hover:bg-white/5 transition-all group"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} className="text-white/20 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 border border-white/5 rounded-full hover:bg-white/5 transition-all group"
              aria-label="Next image"
            >
              <ChevronRight size={18} className="text-white/20 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}