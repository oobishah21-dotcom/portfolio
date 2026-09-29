import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

export default function SocialChannels() {
  const youtube = siteConfig.socialChannels.find((s) => s.id === 'youtube') || {
    name: 'YouTube Channel',
    handle: siteConfig.contact.youtubeHandle || '@oobiwritesofficials',
    url: siteConfig.contact.youtubeUrl || 'https://youtube.com/@oobiwritesofficials?si=pf72b3s5INIpCtGn',
    type: 'Long-Form & Showcase',
    badge: 'Official Channel',
    description: 'Watch full 1080p widescreen video edits, cinematic storytelling, and post-production breakdowns.',
    cta: 'Check Channel',
  };

  const tiktok = siteConfig.socialChannels.find((s) => s.id === 'tiktok') || {
    name: 'TikTok Profile',
    handle: siteConfig.contact.tiktokHandle || '@obaidshah0199',
    url: siteConfig.contact.tiktokUrl || 'https://www.tiktok.com/@obaidshah0199',
    type: 'Viral Reels & Shorts',
    badge: 'Trending Edits',
    description: 'Daily high-retention short-form reels, kinetic typography hooks, and viral audio pacing.',
    cta: 'Check Page',
  };

  return (
    <section id="channels" className="relative w-full py-12 sm:py-16 bg-[#07080c] overflow-hidden">
      {/* Ambient Atmospheric Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-red-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-electric-cyan/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse"></span>
            <span className="font-space text-[11px] uppercase tracking-widest text-slate-300 font-bold">
              Official Creator Hub
            </span>
          </div>

          <h2 className="font-space text-2xl sm:text-4xl text-white font-extrabold tracking-tight">
            Check My Work on{' '}
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-electric-cyan bg-clip-text text-transparent">
              YouTube &amp; TikTok
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-lg mt-2 leading-relaxed">
            Direct links to my official creator channels. Catch daily vertical edits, long-form narratives, and project breakdowns.
          </p>
        </div>

        {/* 2 Big Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: YouTube Official Channel */}
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl bg-gradient-to-b from-[#1f0b0b]/90 via-obsidian-900/90 to-obsidian-950/95 border-2 border-red-500/35 hover:border-red-400 p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(239,68,68,0.12)] hover:shadow-[0_12px_45px_rgba(239,68,68,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Top Red Glow Line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)] group-hover:scale-105 transition-transform p-3">
                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space text-lg sm:text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      {youtube.name}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-red-400 font-semibold tracking-wide">
                      {youtube.handle}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 font-space text-[10px] uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                  {youtube.badge}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {youtube.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-slate-400">
                1080p High-Bitrate Showcase
              </span>

              <a
                href={youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-space text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>{youtube.cta}</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>
          </motion.article>

          {/* Card 2: TikTok Official Profile */}
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative rounded-2xl bg-gradient-to-b from-[#120724]/90 via-obsidian-900/90 to-obsidian-950/95 border-2 border-fuchsia-500/35 hover:border-cyan-400 p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(217,70,239,0.12)] hover:shadow-[0_12px_45px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Top Cyan & Fuchsia Glow Line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.35)] group-hover:scale-105 transition-transform p-3">
                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V9.05a8.27 8.27 0 0 0 4.77 1.48v-3.84z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tiktok.name}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-fuchsia-400 font-semibold tracking-wide">
                      {tiktok.handle}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-space text-[10px] uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                  {tiktok.badge}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {tiktok.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-slate-400">
                9:16 Viral Retention Edits
              </span>

              <a
                href={tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-500 hover:to-cyan-400 text-white font-space text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>{tiktok.cta}</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>
          </motion.article>

        </div>

      </div>
    </section>
  );
}
