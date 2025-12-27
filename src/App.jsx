import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Loader } from "./components/Loader" // Import the spinning cube loader
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import Experiments from "./components/Experiments"
import MotionSection from "./components/MotionSection"
import LayoutsSection from "./components/LayoutsSection"
import ContextSection from "./components/ContextSection"
import ContactSection from "./components/ContactSection"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="bg-[#050505] selection:bg-white/10 min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* 1. The Spinning Cube Loader */
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          /* 2. The Main Portfolio Content */
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Navbar />
            
            <section id="home">
              <Hero />
            </section>

            <section id="experiments">
              <Experiments />
            </section>

            <section id="motion">
              <MotionSection />
            </section>

            <section id="layouts">
              <LayoutsSection />
            </section>

            <section id="context">
              <ContextSection />
            </section>

            <section id="contact">
              <ContactSection />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App