import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#050609] py-8 sm:py-10 border-t border-cyan-500/20 shadow-[0_-1px_16px_rgba(0,240,255,0.06)] relative overflow-hidden">
      {/* Subtle top rainbow/cyber glowing line */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-space text-lg text-white font-bold tracking-tight">
              OBAID SHAH
            </span>
            <span className="font-space text-[10px] text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              AI MEDIA LAB
            </span>
          </div>
          <p className="font-sans text-xs text-slate-400 text-center md:text-left max-w-sm">
            Ultra-velocity post-production &amp; algorithmic video engineering for disruptive creators.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-300 font-space text-xs">
          <a className="hover:text-cyan-300 transition-colors" href="#work">
            Showreel
          </a>
          <a className="hover:text-cyan-300 transition-colors" href="#channels">
            Channels
          </a>
          <a className="hover:text-cyan-300 transition-colors" href="#services">
            Pricing
          </a>
          <a className="hover:text-red-400 transition-colors flex items-center gap-1" href="https://youtube.com/@oobiwritesofficials?si=pf72b3s5INIpCtGn" target="_blank" rel="noopener noreferrer">
            <span className="text-red-500 font-bold">▶</span> YouTube
          </a>
          <a className="hover:text-fuchsia-400 transition-colors flex items-center gap-1" href="https://www.tiktok.com/@obaidshah0199" target="_blank" rel="noopener noreferrer">
            <span className="text-fuchsia-400 font-bold">♪</span> TikTok
          </a>
        </div>

        {/* Copyright */}
        <div className="font-sans text-xs text-slate-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00f0ff]"></span>
          <span>&copy; {new Date().getFullYear()} Obaid Shah. Engineered for High-Retention.</span>
        </div>

      </div>
    </footer>
  );
}
