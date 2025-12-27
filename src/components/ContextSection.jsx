import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/src/assets/image-1.png', alt: 'Portrait study 01' },
  { src: '/src/assets/image-2.png', alt: 'Portrait study 02' },
  { src: '/src/assets/image-3.png', alt: 'Portrait study 03' },
  { src: '/src/assets/image-4.png', alt: 'Portrait study 04' },
  { src: '/src/assets/image-5.png', alt: 'Portrait study 05' },
  { src: '/src/assets/image-6.png', alt: 'Portrait study 06' },
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
            <h3 className="text-lg font-mono text-white/80 uppercase tracking-widest">
              Synthesizing light, code, and human intent.
            </h3>
            <p className="text-white/40 leading-relaxed font-light text-lg max-w-lg">
              I am a creator driven by the quiet intersection of art and logic. My journey is an ongoing experiment in how digital spaces can feel more organic and less mechanical. By blending design curiosity with technical rigor, I strive to build interfaces that don't just function—they breathe. For me, every line of code is a brushstroke in a much larger, evolving study of motion and rhythm.
            </p>
          </div>

          {/* Alternative Subtitles (Suggestions) 
              1. A quiet observer of digital motion.
              2. Building bridges between logic and feeling.
              3. Designing for the moments between interactions.
          */}
        </motion.div>

        {/* RIGHT SIDE: Photo Gallery */}
        <div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full h-full flex items-center justify-center [perspective:1200px]">
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
                    x: `${pos * 50}%`,
                    scale: isCenter ? 1 : isAdjacent ? 0.8 : 0.6,
                    rotateY: pos * -15,
                    opacity: isCenter ? 1 : isAdjacent ? 0.3 : 0,
                    zIndex: 10 - Math.abs(pos),
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-64 h-80 md:w-72 md:h-96"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 flex gap-4 z-30">
            <button 
              onClick={handlePrev}
              className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors group"
            >
              <ChevronLeft size={20} className="text-white/40 group-hover:text-white" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors group"
            >
              <ChevronRight size={20} className="text-white/40 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}