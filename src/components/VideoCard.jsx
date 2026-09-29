import React, { useState, useRef, useEffect } from 'react';
import { Play, Sparkles, Award, Target, Building, Maximize2 } from 'lucide-react';

export default function VideoCard({ project, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  // Lazy-load using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Preload when within 200px of viewport
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video hover playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    if (isHovered || isPlayingPreview) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented or interrupted, silence error
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, isPlayingPreview, isInView]);

  const isReel = project.category === 'reels';
  const isAd = project.category === 'ads';

  const categoryBadgeColors = {
    reels: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    youtube: 'bg-red-500/20 text-red-300 border-red-500/30',
    ads: 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30',
  };

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl glass-card glass-card-hover overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ${
        isReel ? 'col-span-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Video Preview Container */}
      <div
        className={`relative w-full overflow-hidden bg-dark-900 ${
          isReel ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        {/* Poster Thumbnail Image */}
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isHovered || isPlayingPreview ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Hover/Tap Preview Video (Lazy loaded) */}
        {isInView && project.previewClip && (
          <video
            ref={videoRef}
            src={project.previewClip}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered || isPlayingPreview ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md ${
              categoryBadgeColors[project.category] || 'bg-white/10 text-white border-white/20'
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* Hover Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div
            className={`w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg shadow-black/40 transition-all duration-300 ${
              isHovered || isPlayingPreview
                ? 'opacity-80 scale-100 bg-brand-violet/80 border-brand-violet'
                : 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
            }`}
          >
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* Mobile tap preview toggle button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlayingPreview(!isPlayingPreview);
          }}
          className="sm:hidden absolute top-3 right-3 z-20 px-2 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-medium text-slate-200 border border-white/10"
        >
          {isPlayingPreview ? 'Pause' : 'Preview'}
        </button>

        {/* Hover Hint */}
        <div className="hidden sm:flex absolute bottom-3 right-3 z-10 items-center gap-1.5 text-[11px] font-medium text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-3 h-3 text-brand-cyan" />
          <span>Click to play</span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
            {project.title}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Specific Ads metadata layout */}
        {isAd && (
          <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
            {project.brand && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-brand-cyan" /> Brand:
                </span>
                <span className="font-semibold text-slate-200">{project.brand}</span>
              </div>
            )}
            {project.goal && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-indigo-400" /> Goal:
                </span>
                <span className="text-slate-300 truncate max-w-[180px]">{project.goal}</span>
              </div>
            )}
            {project.result && (
              <div className="flex items-center justify-between text-xs bg-brand-violet/10 border border-brand-violet/20 px-2.5 py-1.5 rounded-lg mt-1">
                <span className="text-brand-violet flex items-center gap-1.5 font-medium">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> Result:
                </span>
                <span className="font-bold text-white gradient-text">{project.result}</span>
              </div>
            )}
          </div>
        )}

        {/* Regular result badge for Reels/YouTube */}
        {!isAd && project.result && (
          <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-400">Metric Highlight:</span>
            <span className="text-xs font-semibold text-brand-cyan">{project.result}</span>
          </div>
        )}
      </div>
    </div>
  );
}
