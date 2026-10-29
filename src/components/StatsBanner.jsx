import React from 'react';

export default function StatsBanner() {
  return (
    <section className="relative py-12 bg-gradient-to-r from-[#030914] via-[#081224] to-[#040A16] border-b border-brandBorder/50 overflow-hidden">
      {/* Mountain ridge silhouette background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path
            d="M0 120 L80 80 L180 110 L280 50 L420 100 L560 40 L700 85 L840 30 L980 95 L1120 45 L1200 70 L1200 120 Z"
            fill="#3B82F6"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Handwritten callout */}
        <div className="lg:col-span-3">
          <div className="font-handwritten text-2xl sm:text-3xl text-cyan-200 leading-snug -rotate-6 select-none">
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
              <div className="text-xl font-bold text-white leading-tight">20+</div>
              <div className="text-[11px] text-gray-400">Videos Created</div>
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
              <div className="text-xl font-bold text-white leading-tight">100%</div>
              <div className="text-[11px] text-gray-400">Client Satisfaction</div>
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
              <div className="text-xl font-bold text-white leading-tight">6+</div>
              <div className="text-[11px] text-gray-400">AI Tools Mastered</div>
            </div>
          </div>
        </div>

        {/* Right Quote Statement */}
        <div className="lg:col-span-3 text-left lg:text-right">
          <blockquote className="text-sm italic text-cyan-200/90 font-medium">
            "Great stories aren't just seen, they're felt."
          </blockquote>
          <p className="text-xs text-gray-400 mt-1">— Obaid Shah</p>
        </div>
      </div>
    </section>
  );
}
