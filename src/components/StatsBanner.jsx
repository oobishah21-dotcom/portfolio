import React from 'react';

export default function StatsBanner() {
  return (
    <section className="relative py-14 sm:py-16 bg-[#060B16] border-b border-brandBorder/50 overflow-hidden">
      {/* Panoramic Mountain Landscape Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/mountain-night-panorama.jpg"
          alt="Night Mountain Panorama"
          className="w-full h-full object-cover object-left opacity-40 contrast-125"
        />
        {/* Gradients to blend smoothly with dark background and maintain high text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B16]/85 via-[#060B16]/60 to-[#060B16]/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B16] via-transparent to-[#060B16]/70"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Handwritten callout */}
        <div className="lg:col-span-3">
          <div className="font-handwritten text-2xl sm:text-3xl text-brandOrange leading-snug -rotate-6 select-none">
            Let's Create<br />
            Something<br />
            <span className="text-brandOrange">Amazing</span>
            <svg className="w-24 h-4 text-brandOrange -mt-1 stroke-current" fill="none" viewBox="0 0 100 20">
              <path d="M5 8 Q 50 18 95 6" strokeLinecap="round" strokeWidth="2.5"></path>
            </svg>
          </div>
        </div>

        {/* 3 Metrics */}
        <div className="lg:col-span-6 flex flex-wrap items-center justify-start lg:justify-center gap-8 sm:gap-12">
          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-brandBlue/60 flex items-center justify-center text-brandBlue">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-[#F2F5FA] leading-tight">20+</div>
              <div className="text-[11px] text-[#8B95A9]">Videos Created</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-brandBlue/60 flex items-center justify-center text-brandBlue">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-[#F2F5FA] leading-tight">100%</div>
              <div className="text-[11px] text-[#8B95A9]">Client Satisfaction</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-brandBlue/60 flex items-center justify-center text-brandBlue">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-[#F2F5FA] leading-tight">6+</div>
              <div className="text-[11px] text-[#8B95A9]">AI Tools Mastered</div>
            </div>
          </div>
        </div>

        {/* Right Quote Statement */}
        <div className="lg:col-span-3 text-left lg:text-right">
          <blockquote className="text-sm italic text-brandCyan/90 font-medium">
            "Great stories aren't just seen, they're felt."
          </blockquote>
          <p className="text-xs text-[#8B95A9] mt-1">— Obaid Shah</p>
        </div>
      </div>
    </section>
  );
}
