import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import AiWorkflow from './components/AiWorkflow';
import Project from './components/Project';
import SkillsAndLab from './components/SkillsAndLab';
import Experience from './components/Experience';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#ccff00] selection:text-black">
      <Hero onPreloadComplete={() => setPreloaderComplete(true)} />
      
      {preloaderComplete && (
        <div className="animate-fade-in-up">
          <Navbar />
          <About />
          <Services />
          <AiWorkflow />
          <Project />
          <SkillsAndLab />
          <Experience />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;
