import React, { useState } from 'react';
import { projects } from '../data/projects';
import VideoModal from './VideoModal';
import ProjectThumbnail from './ProjectThumbnail';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const reels = projects.filter((p) => p.category === 'reels');
  const youtube = projects.filter((p) => p.category === 'youtube');
  const ads = projects.filter((p) => p.category === 'ads');

  return (
    <section id="work" className="w-full bg-[#0c0e14] relative overflow-hidden py-12 sm:py-16">
      {/* Subtle Ambient Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-electric-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-0 w-[350px] h-[350px] bg-electric-purple/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-10 relative z-10">
        
        {/* 1. SECTION HEADER - Compact & Light */}
        <header className="flex flex-col items-center text-center space-y-2.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-850 border border-electric-cyan/30 shadow-[0_0_16px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
            <span className="font-space text-[11px] text-cyan-300 tracking-widest uppercase font-bold">
              Curated Portfolio
            </span>
          </div>

          <h2 className="font-space text-2xl sm:text-4xl lg:text-4xl text-white tracking-tight leading-tight font-extrabold">
            Crafted for Retention,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-electric-cyan">
              Engineered to Convert.
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-xl">
            Recent short-form Reels, YouTube narratives, and ad creatives built for maximum audience watch-time.
          </p>
        </header>

        {/* 2. FILTER TABS */}
        <nav aria-label="Portfolio Category Filters" className="flex justify-center w-full">
          <div className="inline-flex p-1 rounded-full bg-obsidian-950 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full font-space text-xs uppercase tracking-wider transition-all duration-300 font-bold ${
                activeFilter === 'all'
                  ? 'text-obsidian-950 bg-gradient-to-r from-electric-purple to-electric-cyan shadow-[0_0_18px_rgba(0,240,255,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              type="button"
            >
              All ({projects.length})
            </button>

            <button
              onClick={() => setActiveFilter('reels')}
              className={`px-4 py-1.5 rounded-full font-space text-xs uppercase tracking-wider transition-all duration-300 font-bold ${
                activeFilter === 'reels'
                  ? 'text-obsidian-950 bg-gradient-to-r from-electric-purple to-electric-cyan shadow-[0_0_18px_rgba(0,240,255,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              type="button"
            >
              Reels ({reels.length})
            </button>

            <button
              onClick={() => setActiveFilter('youtube')}
              className={`px-4 py-1.5 rounded-full font-space text-xs uppercase tracking-wider transition-all duration-300 font-bold ${
                activeFilter === 'youtube'
                  ? 'text-obsidian-950 bg-gradient-to-r from-electric-purple to-electric-cyan shadow-[0_0_18px_rgba(0,240,255,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              type="button"
            >
              YouTube ({youtube.length})
            </button>

            <button
              onClick={() => setActiveFilter('ads')}
              className={`px-4 py-1.5 rounded-full font-space text-xs uppercase tracking-wider transition-all duration-300 font-bold ${
                activeFilter === 'ads'
                  ? 'text-obsidian-950 bg-gradient-to-r from-electric-purple to-electric-cyan shadow-[0_0_18px_rgba(0,240,255,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              type="button"
            >
              Ads ({ads.length})
            </button>
          </div>
        </nav>

        {/* 3. PROJECT CARD GROUPS - Streamlined & Lighter */}
        <div className="flex flex-col gap-10" id="portfolio-container">
          
          {/* GROUP 1: Viral Reels & Shorts (9:16 Vertical) */}
          {(activeFilter === 'all' || activeFilter === 'reels') && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-electric-cyan shadow-[0_0_8px_#00f0ff]"></span>
                  <h3 className="font-space text-lg font-bold text-white tracking-tight">
                    Viral Reels &amp; Shorts (9:16)
                  </h3>
                </div>
                <span className="font-space text-[10px] text-cyan-400/80 uppercase tracking-wider font-semibold">
                  Vertical Format
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {reels.map((project, idx) => (
                  <article
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex flex-col rounded-2xl bg-obsidian-900 overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 transform hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-400/60"
                  >
                    <div className="relative w-full aspect-[9/14] sm:aspect-[9/15] overflow-hidden bg-obsidian-950">
                      <ProjectThumbnail project={project} isVertical={true} />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent pointer-events-none z-10"></div>
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                        <span className="px-2.5 py-0.5 rounded-full bg-obsidian-950/80 backdrop-blur-md text-cyan-300 font-space text-[10px] tracking-widest font-bold border border-cyan-500/30">
                          REEL
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-obsidian-950/80 backdrop-blur-md text-slate-300 font-space text-[10px]">
                          {idx === 0 ? '0:45' : idx === 1 ? '0:30' : '0:58'}
                        </span>
                      </div>

                      {/* Play Button Glow */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-obsidian-950/70 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-electric-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 border border-white/10">
                          <span className="material-symbols-outlined text-cyan-300 group-hover:text-obsidian-950 text-[24px] pl-0.5 transition-colors">
                            play_arrow
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col justify-between bg-obsidian-900 border-t border-white/5">
                      <div>
                        <h4 className="font-space text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {project.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-400 line-clamp-1 mt-1">
                          {project.description}
                        </p>
                      </div>
                      {project.result && (
                        <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 font-medium">Metric</span>
                          <span className="font-bold text-cyan-300 font-space">{project.result}</span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* GROUP 2: High-Production YouTube Videos (16:9 Widescreen) */}
          {(activeFilter === 'all' || activeFilter === 'youtube') && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-electric-purple shadow-[0_0_8px_#8b5cf6]"></span>
                  <h3 className="font-space text-lg font-bold text-white tracking-tight">
                    YouTube Videos (16:9)
                  </h3>
                </div>
                <span className="font-space text-[10px] text-purple-400/80 uppercase tracking-wider font-semibold">
                  Long-Form
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {youtube.map((project, idx) => (
                  <article
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex flex-col rounded-2xl bg-obsidian-900 overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all duration-300 transform hover:-translate-y-1 border border-purple-500/20 hover:border-purple-400/60"
                  >
                    <div className="relative w-full aspect-video overflow-hidden bg-obsidian-950">
                      <ProjectThumbnail project={project} isVertical={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent pointer-events-none z-10"></div>
                      
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                        <span className="px-2.5 py-0.5 rounded-full bg-obsidian-950/80 backdrop-blur-md text-purple-300 font-space text-[10px] tracking-widest font-bold border border-purple-500/30">
                          YOUTUBE
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-obsidian-950/80 backdrop-blur-md text-slate-300 font-space text-[10px]">
                          {idx === 0 ? '14:20' : '08:45'}
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-obsidian-950/70 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-electric-purple shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-all duration-300 border border-white/10">
                          <span className="material-symbols-outlined text-purple-300 group-hover:text-white text-[28px] pl-0.5 transition-colors">
                            play_arrow
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col justify-between bg-obsidian-900 border-t border-white/5">
                      <div>
                        <h4 className="font-space text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                          {project.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-400 line-clamp-1 mt-1">
                          {project.description}
                        </p>
                      </div>
                      {project.result && (
                        <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 font-medium">Quality</span>
                          <span className="font-bold text-purple-300 font-space">{project.result}</span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* GROUP 3: Commercials & Performance Ads (Vertical Reel Style 9:16) */}
          {(activeFilter === 'all' || activeFilter === 'ads') && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
                  <h3 className="font-space text-lg font-bold text-white tracking-tight">
                    Commercials &amp; Performance Ads (9:16)
                  </h3>
                </div>
                <span className="font-space text-[10px] text-cyan-400/80 uppercase tracking-wider font-semibold">
                  Vertical Reel Format
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
                {ads.map((project, idx) => (
                  <article
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex flex-col rounded-2xl bg-obsidian-900 overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 transform hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-400/60"
                  >
                    <div className="relative w-full aspect-[9/14] sm:aspect-[9/15] overflow-hidden bg-obsidian-950">
                      <ProjectThumbnail project={project} isVertical={true} />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent pointer-events-none z-10"></div>
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                        <span className="px-2.5 py-0.5 rounded-full bg-obsidian-950/80 backdrop-blur-md text-cyan-300 font-space text-[10px] tracking-widest font-bold border border-cyan-500/30">
                          {idx === 0 ? 'PROMO AD' : 'COMMERCIAL AD'}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-obsidian-950/80 backdrop-blur-md text-slate-300 font-space text-[10px]">
                          {idx === 0 ? '0:25' : '0:35'}
                        </span>
                      </div>

                      {/* Play Button Glow */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-obsidian-950/70 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-electric-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 border border-white/10">
                          <span className="material-symbols-outlined text-cyan-300 group-hover:text-obsidian-950 text-[24px] pl-0.5 transition-colors">
                            play_arrow
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col justify-between bg-obsidian-900 border-t border-white/5">
                      <div>
                        <h4 className="font-space text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {project.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-400 line-clamp-1 mt-1">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-medium">Brand: <strong className="text-cyan-300">{project.brand}</strong></span>
                        <span className="font-bold text-emerald-400 font-space">{project.result}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* 5. CALL TO ACTION FOOTER */}
        <div className="flex flex-col items-center justify-center text-center pt-2 pb-2 gap-2">
          <a
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-obsidian-900 hover:bg-obsidian-800 text-white shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 border border-white/10 text-xs sm:text-sm font-bold font-space"
            href="https://youtube.com/@oobiwritesofficials?si=pf72b3s5INIpCtGn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[12px]">
              ▶
            </span>
            <span>Check YouTube Channel ↗</span>
          </a>
          <p className="font-sans text-[11px] text-slate-400">
            50+ published edits across international creators &amp; brands.
          </p>
        </div>

      </div>

      {/* Connected Video Modal */}
      <VideoModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
