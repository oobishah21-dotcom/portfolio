import React from 'react';

export default function AboutAndSkills() {
  const skills = [
    { name: 'AI Video Generation', percent: 95 },
    { name: 'Video Editing & Motion Design', percent: 90 },
    { name: 'Storytelling & Scripting', percent: 85 },
    { name: 'Social Media Content', percent: 88 },
    { name: 'Creative Direction', percent: 80 },
  ];

  return (
    <section className="py-16 border-b border-brandBorder/50" id="about">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait & Slogan */}
        <div className="lg:col-span-4 relative flex flex-col items-center">
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#101F38] to-[#060D1A] border border-brandBorder p-1 flex items-end group shadow-2xl">
            {/* Handwritten overlay text */}
            <div className="absolute top-6 left-6 font-handwritten text-cyan-300 text-2xl -rotate-12 leading-tight select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] z-20 pointer-events-none">
              Ideas<br />
              <span className="text-3xl font-bold text-[#FF9E2C]">+</span><br />
              AI<br />
              <span className="text-3xl font-bold text-[#00D8F6]">=</span><br />
              Impact
            </div>

            {/* Real Professional Portrait of Obaid Shah */}
            <div className="w-full h-full relative overflow-hidden rounded-xl">
              <img
                src="/obaid-portrait.jpg"
                alt="Obaid Shah - AI Video Creator & Storyteller"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle cinematic gradient overlays for seamless dark theme integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-transparent to-transparent opacity-75 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Middle Column: About Bio */}
        <div className="lg:col-span-4 flex flex-col justify-center pt-2">
          <span className="text-xs font-semibold tracking-wider text-brandBlue uppercase mb-2">ABOUT ME</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Hi, I'm Obaid Shah</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            I'm an <strong className="text-white font-medium">AI video creator and storyteller</strong>, passionate about turning simple ideas into <strong className="text-white font-medium">powerful visual stories</strong>. I specialize in <strong className="text-white font-medium">creating marketing, advertising and social media videos using cutting-edge AI tools</strong>. With a focus on creativity, quality and storytelling, I help brands stand out in the digital world.
          </p>

          {/* 3 Feature Icon Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081220] border border-brandBorder text-xs text-gray-300">
              <svg className="w-4 h-4 text-brandBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              Creative Mindset
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081220] border border-brandBorder text-xs text-gray-300">
              <svg className="w-4 h-4 text-brandBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              Fast Learner
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081220] border border-brandBorder text-xs text-gray-300">
              <svg className="w-4 h-4 text-brandBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              Detail Oriented
            </div>
          </div>
        </div>

        {/* Right Column: Skills Progress Bars */}
        <div className="lg:col-span-4 bg-[#07101E] border border-brandBorder/80 rounded-2xl p-6 shadow-xl" data-purpose="skills-card" id="skills">
          <h3 className="text-xs font-bold tracking-wider text-brandBlue uppercase mb-6">MY SKILLS</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-gray-400">{skill.percent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#0F2038] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brandBlue rounded-full shadow-[0_0_8px_#0075FF] transition-all duration-1000"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
