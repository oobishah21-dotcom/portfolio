import React from 'react';

export default function Hero({ onPlayShowreel }) {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden border-b border-brandBorder/50" id="home">
      {/* Atmospheric background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-brandCyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-4 z-10">
          <span className="inline-block text-[12px] font-bold tracking-widest text-brandOrange uppercase mb-4">
            AI VIDEO CREATOR &amp; STORYTELLER
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#F2F5FA] leading-[1.15] mb-6">
            Turning Ideas into Stunning<br />
            <span className="bg-gradient-to-r from-brandBlue to-brandCyan bg-clip-text text-transparent">
              Visual Stories
            </span>
          </h1>
          <p className="text-[#8B95A9] text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            I create engaging AI-powered videos for brands, businesses and social media – using the latest tools like{' '}
            <strong className="font-semibold text-[#F2F5FA]">Higgsfield</strong>,{' '}
            <strong className="font-semibold text-[#F2F5FA]">Runway</strong>,{' '}
            <strong className="font-semibold text-[#F2F5FA]">Veo</strong>,{' '}
            <strong className="font-semibold text-[#F2F5FA]">Kling</strong> and more.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex items-center gap-5">
            <a
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brandBlue hover:bg-brandBlueHover text-white text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all"
              href="#work"
            >
              View My Work <span className="ml-2 font-normal">&gt;</span>
            </a>
            <a className="inline-flex items-center text-sm font-medium text-[#8B95A9] hover:text-[#F2F5FA] group" href="#about">
              About Me
              <span className="ml-2 w-5 h-5 rounded-full border border-brandBlue/60 flex items-center justify-center group-hover:border-brandBlue transition-colors">
                <svg className="w-3 h-3 text-brandBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Center Hero Showcase Video Thumbnail */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-4" data-purpose="hero-visual">
          <div className="relative w-full max-w-[520px] flex items-center justify-center">
            {/* Ambient Background Glows matching the artwork colors (blue on left, warm amber on right) */}
            <div className="absolute -left-4 top-1/4 w-48 h-48 bg-brandBlue/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -right-4 bottom-1/4 w-48 h-48 bg-brandOrange/35 rounded-full blur-3xl pointer-events-none"></div>

            {/* Glowing Border Card Wrapper */}
            <div
              onClick={onPlayShowreel}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onPlayShowreel && onPlayShowreel();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Play Featured AI Video Showreel"
              className="group relative w-full rounded-2xl p-[1.5px] bg-gradient-to-tr from-brandBlue/50 via-brandCyan/30 to-brandOrange/50 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_50px_rgba(47,128,255,0.35)] transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
              {/* Inner Image Container */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#0A101D] aspect-[1024/735]">
                <img
                  src="/ai-video-creator-thumb.jpg"
                  alt="Obaid Shah - AI Video Creator Featured Showreel Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                {/* Subtle dark gradient overlay to make play button pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 group-hover:from-black/30 transition-colors pointer-events-none"></div>

                {/* Pulsing Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Subtle Pulse Rings */}
                  <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brandBlue/20 animate-ping opacity-60"></div>
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-[0_0_25px_rgba(0,212,255,0.4)] group-hover:scale-115 group-hover:border-brandCyan group-hover:bg-brandBlue group-hover:shadow-[0_0_35px_#00D4FF] transition-all duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white translate-x-0.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>

                {/* "Watch Reel" floating pill badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-2 group-hover:border-brandCyan/60 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-brandOrange animate-pulse"></span>
                  <span className="text-[11px] font-semibold text-[#F2F5FA] tracking-wide">Watch Reel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Tool Stack Column */}
        <div className="lg:col-span-2 flex flex-col space-y-3 justify-center" data-purpose="tool-badges">
          {/* Badge: Higgsfield */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-brandDarkCard border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#142036] flex items-center justify-center text-xs font-bold text-white">8</div>
            <span className="text-xs font-medium text-[#F2F5FA]">Higgsfield</span>
          </div>

          {/* Badge: Runway */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-brandDarkCard border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#142036] flex items-center justify-center text-xs font-bold text-white">R</div>
            <span className="text-xs font-medium text-[#F2F5FA]">Runway</span>
          </div>

          {/* Badge: Veo */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-brandDarkCard border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#142036] flex items-center justify-center text-xs font-bold text-white">
              <span className="text-red-400">G</span>
            </div>
            <span className="text-xs font-medium text-[#F2F5FA]">Veo</span>
          </div>

          {/* Badge: Kling */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-brandDarkCard border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#142036] flex items-center justify-center text-xs font-bold text-brandCyan">⟲</div>
            <span className="text-xs font-medium text-[#F2F5FA]">Kling</span>
          </div>

          {/* Badge: Midjourney */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-brandDarkCard border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#142036] flex items-center justify-center text-xs font-bold text-white">⛵</div>
            <span className="text-xs font-medium text-[#F2F5FA]">Midjourney</span>
          </div>

          {/* Badge: Canva */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-brandDarkCard border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#00C4CC] flex items-center justify-center text-xs font-bold text-white italic">C</div>
            <span className="text-xs font-medium text-[#F2F5FA]">Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
}
