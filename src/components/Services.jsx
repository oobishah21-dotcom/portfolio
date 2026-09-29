import React, { useState } from 'react';
import { siteConfig } from '../data/content';

export default function Services() {
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'PKR'

  const getWhatsAppLink = (serviceTitle) => {
    const message = `Hello Obaid! I would like to get a quote for the "${serviceTitle}" package.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="w-full bg-[#07080c] relative z-10 py-12 sm:py-16 overflow-hidden">
      {/* Ambient Atmospheric Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric-cyan/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-4 w-[400px] h-[400px] bg-electric-purple/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Tech Grid Background Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-20 bg-[linear-gradient(to_right,#3b494b20_1px,transparent_1px),linear-gradient(to_bottom,#3b494b20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>

      {/* SECTION HEADER - Compact & Light */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 flex flex-col items-center text-center relative z-10 w-full">
        {/* Top Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850/90 border border-electric-cyan/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)] mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
          <span className="font-space text-[11px] uppercase tracking-widest text-cyan-300 font-bold">
            Transparent Pricing
          </span>
        </div>

        {/* Big Headline */}
        <h2 className="font-space text-2xl sm:text-4xl text-white tracking-tight leading-tight font-extrabold">
          Engineered for Retention.{' '}
          <span className="bg-gradient-to-r from-electric-cyan via-purple-300 to-electric-purple bg-clip-text text-transparent">
            Priced for Scale.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-lg mt-2 leading-relaxed">
          Predictable editing rates with Hollywood pacing and custom AI workflows.
        </p>

        {/* Currency Toggle Control */}
        <div className="mt-6 p-1 rounded-full bg-obsidian-950/90 backdrop-blur-xl shadow-lg flex items-center gap-1.5 relative border border-white/10">
          <button
            onClick={() => setCurrency('USD')}
            className={`relative z-10 px-4 py-1.5 rounded-full font-space text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 font-bold ${
              currency === 'USD'
                ? 'bg-gradient-to-r from-electric-purple to-electric-cyan text-obsidian-950 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">public</span>
            <span>USD ($) International</span>
          </button>
          
          <button
            onClick={() => setCurrency('PKR')}
            className={`relative z-10 px-4 py-1.5 rounded-full font-space text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 font-bold ${
              currency === 'PKR'
                ? 'bg-gradient-to-r from-electric-purple to-electric-cyan text-obsidian-950 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">payments</span>
            <span>PKR (Rs) Local</span>
          </button>
        </div>
      </div>

      {/* 3 COMPACT & VIBRANT PRICING CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* ================= CARD 1: Reels & Shorts ================= */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-[#071d2b]/90 via-obsidian-900/90 to-obsidian-950/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border-2 border-cyan-500/30 hover:border-cyan-400/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.25)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-electric-cyan to-transparent"></div>

            <div>
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 font-space text-[10px] tracking-widest uppercase border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.2)] font-bold">
                  <span className="material-symbols-outlined text-[13px]">local_fire_department</span>
                  <span>Most Popular</span>
                </span>
                <span className="font-space text-[10px] text-cyan-400/80 uppercase tracking-wider font-semibold">9:16</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-space text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Reels &amp; Shorts
              </h3>
              <p className="font-sans text-xs text-slate-300 mt-1 leading-relaxed">
                High-retention vertical videos for TikTok, Reels &amp; Shorts.
              </p>

              {/* Price Block */}
              <div className="mt-5 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-space text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Starting</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-space text-[10px] tracking-wider border border-cyan-400/30">
                    <span className="material-symbols-outlined text-[11px]">bolt</span>
                    <span>24 - 48h</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-space text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-100 tracking-tight transition-all duration-300">
                    {currency === 'USD' ? '$20' : 'Rs 5,500'}
                  </span>
                  <span className="font-sans text-[11px] text-cyan-300/70 tracking-normal">/ project</span>
                </div>
              </div>

              {/* Feature List - Crisp & Concise */}
              <div className="mt-5 space-y-2.5">
                <p className="font-space text-[11px] uppercase tracking-widest text-cyan-400 font-bold">Included</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-cyan-300 text-[11px]">check</span>
                    </div>
                    <span>Retention hooks &amp; visual pacing</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-cyan-300 text-[11px]">check</span>
                    </div>
                    <span>Animated keyword subtitles</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-cyan-300 text-[11px]">check</span>
                    </div>
                    <span>AI contextual B-roll &amp; SFX</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-cyan-300 text-[11px]">check</span>
                    </div>
                    <span>Mobile color grade + revisions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={getWhatsAppLink('Reels & Shorts')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-obsidian-950 font-space text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 font-bold"
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* ================= CARD 2: YouTube Videos (FEATURED STAR) ================= */}
          <div className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-electric-purple via-indigo-500 to-electric-cyan lg:-translate-y-2 hover:-translate-y-3 transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.55)]">
            <div className="relative rounded-[15px] bg-gradient-to-b from-[#180d2d]/95 via-obsidian-900/95 to-obsidian-950/98 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between h-full overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-electric-purple via-electric-cyan to-indigo-400"></div>

              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan text-white font-space text-[10px] tracking-widest uppercase shadow-[0_0_15px_rgba(139,92,246,0.6)] font-extrabold">
                    <span className="material-symbols-outlined text-[13px]">stars</span>
                    <span>Best for Creators</span>
                  </span>
                  <span className="font-space text-[10px] text-electric-cyan uppercase tracking-wider font-extrabold">
                    ★ Featured
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-space text-xl font-bold text-white tracking-tight group-hover:text-electric-cyan transition-colors">
                  YouTube Videos
                </h3>
                <p className="font-sans text-xs text-slate-300 mt-1 leading-relaxed">
                  Full-length storytelling that holds high retention.
                </p>

                {/* Price Block */}
                <div className="mt-5 p-4 rounded-xl bg-purple-950/50 border border-electric-purple/40 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-space text-[10px] uppercase tracking-widest text-purple-300 font-bold">Starting</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-electric-purple/30 text-purple-200 font-space text-[10px] tracking-wider border border-purple-400/40">
                      <span className="material-symbols-outlined text-[11px]">bolt</span>
                      <span>3 - 5 Days</span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-space text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-white tracking-tight transition-all duration-300">
                      {currency === 'USD' ? '$65' : 'Rs 18,000'}
                    </span>
                    <span className="font-sans text-[11px] text-purple-200/70 tracking-normal">/ project</span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="mt-5 space-y-2.5">
                  <p className="font-space text-[11px] uppercase tracking-widest text-purple-300 font-bold">Included</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2.5 text-xs text-white">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-[11px]">check</span>
                      </div>
                      <span>Narrative flow &amp; dead-air trimming</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-white">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-[11px]">check</span>
                      </div>
                      <span>Custom kinetic motion graphics</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-white">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-[11px]">check</span>
                      </div>
                      <span>Audio remastering &amp; noise cleanup</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-white">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-electric-purple to-electric-cyan flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-[11px]">check</span>
                      </div>
                      <span>Visual zooms + thumbnail consultation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Featured Vibrant Gradient Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href={getWhatsAppLink('YouTube Long-Form')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-electric-purple via-indigo-600 to-electric-cyan text-white font-space text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all duration-300 font-extrabold"
                >
                  <span>Get a Quote</span>
                  <span className="material-symbols-outlined text-[15px]">bolt</span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= CARD 3: Commercials & Ads ================= */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-[#19102b]/90 via-obsidian-900/90 to-obsidian-950/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border-2 border-purple-500/30 hover:border-purple-400/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

            <div>
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 font-space text-[10px] tracking-widest uppercase border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.2)] font-bold">
                  <span className="material-symbols-outlined text-[13px]">trending_up</span>
                  <span>High ROI</span>
                </span>
                <span className="font-space text-[10px] text-purple-400/80 uppercase tracking-wider font-semibold">Multi-ratio</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-space text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                Commercials &amp; Ads
              </h3>
              <p className="font-sans text-xs text-slate-300 mt-1 leading-relaxed">
                Performance video creatives that drive high ROAS &amp; conversions.
              </p>

              {/* Price Block */}
              <div className="mt-5 p-4 rounded-xl bg-purple-950/40 border border-purple-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-space text-[10px] uppercase tracking-widest text-purple-400 font-bold">Starting</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-space text-[10px] tracking-wider border border-purple-400/30">
                    <span className="material-symbols-outlined text-[11px]">bolt</span>
                    <span>2 - 4 Days</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-space text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-100 tracking-tight transition-all duration-300">
                    {currency === 'USD' ? '$90' : 'Rs 25,000'}
                  </span>
                  <span className="font-sans text-[11px] text-purple-300/70 tracking-normal">/ project</span>
                </div>
              </div>

              {/* Feature List */}
              <div className="mt-5 space-y-2.5">
                <p className="font-space text-[11px] uppercase tracking-widest text-purple-400 font-bold">Included</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-purple-300 text-[11px]">check</span>
                    </div>
                    <span>3 distinct hook variations (A/B testing)</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-purple-300 text-[11px]">check</span>
                    </div>
                    <span>Multi-ratio exports (9:16, 16:9, 1:1)</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-purple-300 text-[11px]">check</span>
                    </div>
                    <span>High-converting motion graphic CTAs</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-purple-300 text-[11px]">check</span>
                    </div>
                    <span>Direct creative collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={getWhatsAppLink('Commercials & Ads')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-purple-500/20 hover:bg-purple-500 text-purple-300 hover:text-white font-space text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 font-bold"
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
