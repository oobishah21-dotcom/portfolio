import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="w-full bg-[#040810]/90 backdrop-blur-md sticky top-0 z-50 border-b border-brandBorder/40">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a className="flex items-center gap-2.5 group" data-purpose="brand-logo" href="#home">
          <svg className="w-8 h-8 text-brandBlue transform transition-transform group-hover:scale-105" fill="none" viewBox="0 0 32 32">
            <path d="M7 6L25 16L7 26V6Z" fill="#0075FF"></path>
            <path d="M12 9.5L23.5 16L12 22.5V9.5Z" fill="#00D8F6" fillOpacity="0.4"></path>
          </svg>
          <span className="text-xl font-bold tracking-tight text-white">
            Obaid <span className="text-brandBlue font-extrabold">Shah</span>
          </span>
        </a>

        {/* Primary Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium" data-purpose="primary-navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-brandBlue'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-600 hover:border-brandBlue text-sm font-medium text-gray-200 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,117,255,0.4)]"
            href="#contact"
          >
            <span>Let's Work Together</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#091322] border border-brandBorder transition-colors"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040810]/95 border-b border-brandBorder/60 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors ${
                activeSection === link.id ? 'text-brandBlue font-bold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
