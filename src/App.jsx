import React from 'react';
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
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col relative selection:bg-brand-violet/30 selection:text-brand-cyan">
      {/* Navigation */}
      <Navbar />

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
