import React from 'react';

export default function Hero({ onPlayShowreel }) {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden border-b border-brandBorder/50" id="home">
      {/* Atmospheric background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-4 z-10">
          <span className="inline-block text-[12px] font-bold tracking-widest text-[#FF9E2C] uppercase mb-4">
            AI VIDEO CREATOR &amp; STORYTELLER
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.15] mb-6">
            Turning Ideas into Stunning<br />
            <span className="bg-gradient-to-r from-brandBlue to-[#00E5FF] bg-clip-text text-transparent">
              Visual Stories
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            I create engaging AI-powered videos for brands, businesses and social media – using the latest tools like{' '}
            <strong className="font-semibold text-white">Higgsfield</strong>,{' '}
            <strong className="font-semibold text-white">Runway</strong>,{' '}
            <strong className="font-semibold text-white">Veo</strong>,{' '}
            <strong className="font-semibold text-white">Kling</strong> and more.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex items-center gap-5">
            <a
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brandBlue hover:bg-brandBlueHover text-white text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(0,117,255,0.4)] transition-all"
              href="#work"
            >
              View My Work <span className="ml-2 font-normal">&gt;</span>
            </a>
            <a className="inline-flex items-center text-sm font-medium text-gray-200 hover:text-white group" href="#about">
              About Me
              <span className="ml-2 w-5 h-5 rounded-full border border-brandBlue/60 flex items-center justify-center group-hover:border-brandBlue transition-colors">
                <svg className="w-3 h-3 text-brandBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Center Hero Showcase Image */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-4" data-purpose="hero-visual">
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square flex items-center justify-center">
            {/* Outer Neon Triangle Outline */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-[90%] h-[90%] drop-shadow-[0_0_25px_#00D8F6]" viewBox="0 0 100 100">
                <polygon fill="none" points="15,10 88,48 15,90" stroke="#00D8F6" strokeLinejoin="round" strokeWidth="1.8"></polygon>
              </svg>
            </div>

            {/* Video Setup & Subject Mockup */}
            <div className="relative w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#081326] via-[#0D1D38] to-[#122340] border border-cyan-500/20 flex items-end">
              {/* Warm Cinematic Lighting / Bokeh */}
              <div className="absolute -right-10 top-0 w-44 h-44 bg-amber-600/30 rounded-full blur-2xl"></div>
              <div className="absolute left-0 bottom-0 w-32 h-32 bg-brandBlue/30 rounded-full blur-xl"></div>

              {/* Silhouetted subject / camera background presentation */}
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/obaid-portrait.jpg"
                  alt="Obaid Shah - AI Video Creator"
                  className="w-full h-full object-cover object-top opacity-50 contrast-125 saturate-50 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-[#040810]/40 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-brandBlue/15 mix-blend-screen pointer-events-none"></div>

                {/* Central Play Button Badge */}
                <button
                  type="button"
                  onClick={onPlayShowreel}
                  className="absolute z-20 w-14 h-14 rounded-full bg-black/60 border border-white/40 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 hover:border-brandCyan hover:shadow-[0_0_20px_#00D8F6] transition-all"
                  aria-label="Play Featured Video"
                >
                  <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </button>

                {/* Angled handwritten script label overlay */}
                <div className="absolute bottom-10 left-4 z-20 -rotate-12 font-handwritten text-2xl text-cyan-300 tracking-wide select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  AI<br />Video<br />Creator
                  <svg className="w-20 h-4 text-cyan-300 stroke-current -mt-1" fill="none" viewBox="0 0 100 20">
                    <path d="M5 12 Q 50 2 95 14" strokeLinecap="round" strokeWidth="2.5"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Tool Stack Column */}
        <div className="lg:col-span-2 flex flex-col space-y-3 justify-center" data-purpose="tool-badges">
          {/* Badge: Higgsfield */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#091322]/80 border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#14233D] flex items-center justify-center text-xs font-bold text-white">8</div>
            <span className="text-xs font-medium text-gray-200">Higgsfield</span>
          </div>

          {/* Badge: Runway */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#091322]/80 border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#14233D] flex items-center justify-center text-xs font-bold text-white">R</div>
            <span className="text-xs font-medium text-gray-200">Runway</span>
          </div>

          {/* Badge: Veo */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#091322]/80 border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#14233D] flex items-center justify-center text-xs font-bold text-white">
              <span className="text-red-400">G</span>
            </div>
            <span className="text-xs font-medium text-gray-200">Veo</span>
          </div>

          {/* Badge: Kling */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#091322]/80 border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#14233D] flex items-center justify-center text-xs font-bold text-cyan-400">⟲</div>
            <span className="text-xs font-medium text-gray-200">Kling</span>
          </div>

          {/* Badge: Midjourney */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#091322]/80 border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#14233D] flex items-center justify-center text-xs font-bold text-white">⛵</div>
            <span className="text-xs font-medium text-gray-200">Midjourney</span>
          </div>

          {/* Badge: Canva */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#091322]/80 border border-brandBorder hover:border-brandBlue/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#00C4CC] flex items-center justify-center text-xs font-bold text-white italic">C</div>
            <span className="text-xs font-medium text-gray-200">Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
}
