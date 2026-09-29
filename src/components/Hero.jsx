import React from 'react';
import { siteConfig } from '../data/content';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16">
      {/* Ambient Light Backdrops with smooth motion */}
      <div className="ambient-glow-purple"></div>
      <div className="ambient-glow-cyan"></div>
      <div className="ambient-glow-bottom"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Editorial Column: Headline, Description, CTAs & Frosted Glass Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-purpose="hero-copy-and-stats">
            
            {/* Glowing Live Reel Eyebrow Pill with floating motion */}
            <div className="inline-flex items-center self-start animate-float-badge-header">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-electric-purple/20 to-electric-cyan/20 border border-electric-purple/40 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <span className="flex h-2 w-2 rounded-full bg-electric-cyan live-dot-pulse"></span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-300 font-space flex items-center gap-1.5">
                  <span>✨</span>
                  <span>AI-POWERED EDITING STUDIO</span>
                </span>
                <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wide font-sans">CINEMATIC GRADE</span>
              </div>
            </div>

            {/* Punchy Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight leading-[1.12] text-white">
              Architecting Viral Stories with <span className="title-gradient">Cinematic AI Precision.</span>
            </h1>

            {/* High-Impact Concise Value Proposition */}
            <p className="text-sm sm:text-base text-slate-300/90 max-w-xl leading-relaxed font-sans font-normal">
              Hollywood pacing meets custom AI video workflows. Viral Reels, YouTube edits, and performance ads engineered to hook attention and convert across <strong className="text-white font-semibold">Pakistan, UAE, USA &amp; worldwide.</strong>
            </p>

            {/* Premium Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1" data-purpose="action-buttons">
              {/* Primary CTA: Explore Showreel */}
              <a 
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white font-bold text-xs sm:text-sm tracking-wide btn-glow-primary active:scale-95 group" 
                href="#work"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Explore Showreel</span>
              </a>

              {/* Secondary CTA: Direct WhatsApp with glassmorphism border */}
              <a 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-obsidian-900/80 hover:bg-obsidian-800 text-slate-200 hover:text-white border border-white/10 hover:border-emerald-500/50 backdrop-blur-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 group active:scale-95" 
                href={whatsappUrl} 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
                  <svg className="w-3 h-3 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <span>Direct WhatsApp</span>
              </a>
            </div>

            {/* Rich Frosted Glass Metrics Row - Compact & Light */}
            <div className="pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl">
                {/* Metric 1 */}
                <div className="glass-card-frosted rounded-xl p-3 group">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyanSoft font-space tracking-tight">
                      2M+
                    </span>
                    <span className="material-symbols-outlined text-electric-cyan/70 text-xs">
                      visibility
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium block">Views</span>
                </div>

                {/* Metric 2 */}
                <div className="glass-card-frosted rounded-xl p-3 group">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 font-space tracking-tight">
                      24-48h
                    </span>
                    <span className="material-symbols-outlined text-electric-purple/70 text-xs">
                      bolt
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium block">Delivery</span>
                </div>

                {/* Metric 3 */}
                <div className="glass-card-frosted rounded-xl p-3 group">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyanSoft font-space tracking-tight">
                      50+
                    </span>
                    <span className="material-symbols-outlined text-electric-cyan/70 text-xs">
                      public
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium block">Brands</span>
                </div>

                {/* Metric 4 */}
                <div className="glass-card-frosted rounded-xl p-3 group">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 font-space tracking-tight">
                      3x
                    </span>
                    <span className="material-symbols-outlined text-emerald-400/80 text-xs">
                      trending_up
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium block">Retention</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Studio Showcase Visual (Compact & Sleek) */}
          <div className="lg:col-span-5 flex justify-center relative" data-purpose="hero-studio-visual">
            <div className="relative w-full max-w-[400px]">
              
              {/* Aura glow behind right profile card */}
              <div className="profile-card-aura"></div>
              
              <div className="relative w-full rounded-2xl p-2.5 bg-gradient-to-b from-obsidian-800 via-obsidian-900 to-obsidian-950 studio-frame-glow">
                
                {/* Chrome Window Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 bg-obsidian-950/70 rounded-t-xl">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-1.5 text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                      STUDIO_PROFILE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot-pulse"></span>
                      Available
                    </span>
                  </div>
                </div>

                {/* Portrait Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-obsidian-950 border border-white/10 group">
                  <img 
                    alt="Obaid Shah - Creative AI Video Director Portrait" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                    src="/obaid-shah.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent"></div>

                  {/* Top Left Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-electric-cyan/30 shadow-md animate-float-badge-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan live-dot-pulse"></div>
                    <span className="text-[11px] font-bold text-white tracking-wide font-sans">Obaid Shah</span>
                  </div>

                  {/* Top Right Floating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-obsidian-900/90 backdrop-blur-md border border-electric-purple/40 shadow-md animate-float-badge-2">
                    <span className="material-symbols-outlined text-electric-purple text-xs">verified</span>
                    <span className="text-[10px] font-bold text-white font-sans">88% Peak</span>
                  </div>

                  {/* Bottom Left Floating Badge */}
                  <div className="absolute bottom-14 left-3 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-obsidian-950/90 backdrop-blur-md border border-white/10 shadow-md animate-float-badge-3">
                    <span className="material-symbols-outlined text-electric-cyan text-xs">bolt</span>
                    <span className="text-[10px] font-bold text-white font-sans">24-48h SLA</span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-obsidian-950 via-obsidian-950/90 to-transparent flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white font-sans">Obaid Shah Studio</span>
                      <span className="text-[10px] text-slate-400 font-sans">Hollywood Pacing + AI</span>
                    </div>
                    <span className="text-[9px] font-bold text-purple-300 font-mono px-2 py-0.5 rounded-full bg-electric-purple/20 border border-electric-purple/40">
                      AI DIRECTOR
                    </span>
                  </div>
                </div>

                {/* Animated Timeline Scrubber / Progress Bar under the profile photo */}
                <div className="relative w-full h-1 bg-obsidian-950 rounded-full mt-1.5 overflow-hidden border border-white/5">
                  <div className="timeline-scrubber-light"></div>
                </div>

                {/* Tools Strip Footer */}
                <div className="mt-1.5 px-3 py-1.5 rounded-lg bg-obsidian-900/60 border border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan live-dot-pulse"></span>
                    <span>RUNWAY • MIDJOURNEY • PREMIERE</span>
                  </div>
                  <span className="text-emerald-400 font-bold uppercase text-[9px]">100% Quality</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
