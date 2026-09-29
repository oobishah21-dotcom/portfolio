import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import SocialChannels from './components/SocialChannels';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col relative selection:bg-brand-violet/30 selection:text-brand-cyan transition-colors duration-300">
      {/* Navigation with Theme Switcher */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1 pt-20">
        <Hero />
        <Work />
        <SocialChannels />
        <Testimonials />
        <Services />
        <Contact />
      </main>

      {/* Footer & Floating CTA */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
