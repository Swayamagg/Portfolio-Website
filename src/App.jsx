import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-900">
      <Header 
        darkMode={true} 
        toggleDarkMode={() => {}}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <Hero darkMode={true} />
        <About darkMode={true} />
        <Experience darkMode={true} />
        <Projects darkMode={true} />
        <Skills darkMode={true} />
        <Contact darkMode={true} />
      </main>

      <Footer darkMode={true} />
    </div>
  );
}

export default App; 