import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import Work, { featuredProjectsData } from './components/Work';
import StatsBanner from './components/StatsBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  const handleOpenHeroShowreel = () => {
    // Open the primary showcase video
    setSelectedProject(featuredProjectsData[0]);
  };

  return (
    <div className="min-h-screen bg-[#060B16] text-[#F2F5FA] font-sans antialiased selection:bg-brandBlue selection:text-white flex flex-col relative">
      {/* 1. Main Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onPlayShowreel={handleOpenHeroShowreel} />

        {/* 3. About & Skills Section */}
        <AboutAndSkills />

        {/* 4. Featured Projects Section */}
        <Work onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Stats & Quote Banner */}
        <StatsBanner />

        {/* 6. Testimonials Section */}
        <Testimonials />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Video Modal */}
      <VideoModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
