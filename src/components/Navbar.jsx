import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Navbar({ theme = 'dark', toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  const navLinks = [
    { name: 'Selected Work', href: '#work', id: 'work' },
    { name: 'Channels', href: '#channels', id: 'channels' },
    { name: 'Pricing & Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity & Availability Pill */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a className="flex items-center gap-3 group" href="#">
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform">
              <img
                src="/obaid-shah.jpg"
                alt="Obaid Shah"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-primary font-space text-base font-bold">O</span>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-space text-base sm:text-lg tracking-tight text-on-surface font-bold group-hover:text-primary transition-colors">
                OBAID SHAH
              </span>
              <span className="font-sans text-[10px] text-on-surface-variant hidden sm:block tracking-wider uppercase">
                AI Media Director
              </span>
            </div>
          </a>

          {/* Live Availability Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span className="font-space text-[11px] text-on-surface-variant tracking-wider uppercase font-semibold">
              Available For Q2/Q3
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-surface-container-low border border-white/5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`px-4 py-1.5 rounded-full font-space text-xs tracking-wider transition-all duration-200 font-semibold ${
                  isActive
                    ? 'bg-surface-container-high text-primary shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Quick Action Button, Theme Switcher & Direct Contact */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-white/10 hover:border-cyan-400/40 text-on-surface transition-all duration-300 shadow-sm cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <span className="material-symbols-outlined text-[17px] text-amber-300">light_mode</span>
                  <span className="font-space text-[11px] font-bold text-slate-200 hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[17px] text-indigo-500">dark_mode</span>
                  <span className="font-space text-[11px] font-bold text-slate-800 hidden sm:inline">Dark</span>
                </>
              )}
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-surface-container-high font-space text-xs tracking-wider text-primary hover:bg-primary-container hover:text-on-primary-container shadow-[0_0_20px_-3px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 font-bold border border-white/5"
          >
            Initiate Brief
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition-all"
            aria-label="Direct WhatsApp"
            title="Chat on WhatsApp"
          >
            <span className="material-symbols-outlined text-[19px]">chat</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-on-surface-variant hover:text-white md:hidden rounded-full bg-surface-container-high border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-surface-container-low border-b border-white/10 px-6 py-4 space-y-2 shadow-2xl backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2.5 rounded-xl font-space text-xs tracking-wider text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-surface-container-high text-primary font-space text-xs font-bold border border-primary/20"
              >
                Initiate Brief
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-primary-container text-on-primary-container font-space text-xs font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                Chat on WhatsApp (+92 303 9199321)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
