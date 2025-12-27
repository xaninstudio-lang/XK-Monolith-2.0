import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/20 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        
        {/* 1. Logo / Home Trigger */}
        <a 
          href="#home" 
          onClick={handleHomeClick}
          className="text-white text-xl tracking-[0.3em] font-light hover:opacity-50 transition-opacity"
        >
          XK
        </a>

        {/* 2. Navbar Items */}
        <div className="hidden md:flex gap-12">
          {['Experiments', 'Motion', 'Layouts', 'Context'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};