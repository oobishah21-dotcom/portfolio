import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Award, Target, Building } from 'lucide-react';

/**
 * Extracts YouTube Video ID from any standard URL (including /shorts/)
 */
function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  if (url.includes('/embed/')) return url;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;

  return videoId 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` 
    : url;
}

/**
 * Extracts TikTok Embed URL
 */
function getTikTokEmbedUrl(url, tiktokId) {
  if (tiktokId) return `https://www.tiktok.com/embed/v2/${tiktokId}`;
  const match = url?.match(/video\/(\d+)/);
  if (match && match[1]) {
    return `https://www.tiktok.com/embed/v2/${match[1]}`;
  }
  return null;
}

/**
 * Extracts Google Drive Embed/Preview URL from any sharing link
 */
function getGoogleDriveEmbedUrl(url) {
  if (!url) return '';
  if (url.includes('/preview')) return url;
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

export default function VideoModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isYouTube = project.videoType === 'youtube' || project.fullVideoUrl?.includes('youtube.com') || project.fullVideoUrl?.includes('youtu.be');
  const isTikTok = project.videoType === 'tiktok' || project.fullVideoUrl?.includes('tiktok.com');
  const isGoogleDrive = project.videoType === 'gdrive' || project.fullVideoUrl?.includes('drive.google.com');
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(project.fullVideoUrl) : null;
  const tikTokEmbedUrl = isTikTok ? getTikTokEmbedUrl(project.fullVideoUrl, project.tiktokId) : null;
  const googleDriveEmbedUrl = isGoogleDrive ? getGoogleDriveEmbedUrl(project.fullVideoUrl) : null;
  const isVertical = project.aspectRatio === '9:16' || project.category === 'reels';

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full ${
            isVertical ? 'max-w-md' : 'max-w-4xl'
          } rounded-2xl bg-dark-900 border border-white/10 shadow-2xl shadow-brand-violet/20 overflow-hidden flex flex-col my-auto max-h-[92vh]`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-dark-950/60 shrink-0">
            <div className="flex items-center gap-2">
              <span className="uppercase text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-brand-violet/20 text-brand-cyan border border-brand-violet/30">
                {project.category}
              </span>
              <h3 id="modal-title" className="text-sm sm:text-base font-semibold text-white truncate max-w-xs sm:max-w-md">
                {project.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              {project.fullVideoUrl && (
                <a
                  href={project.fullVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Open original video"
                  aria-label="Open original video in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Player Container */}
          <div className={`relative bg-black flex items-center justify-center ${
            isVertical ? 'aspect-[9/16] max-h-[60vh] sm:max-h-[65vh]' : 'aspect-video w-full'
          }`}>
            {isYouTube ? (
              <iframe
                src={embedUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : isTikTok ? (
              <iframe
                src={tikTokEmbedUrl || project.fullVideoUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : isGoogleDrive ? (
              <iframe
                src={googleDriveEmbedUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                src={project.fullVideoUrl}
                poster={project.thumbnail}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Project Details Panel */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4 bg-dark-900/90 shrink-0">
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Campaign Metrics / Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10">
              {project.brand && (
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-dark-850 border border-white/5">
                  <Building className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Client / Brand</span>
                    <span className="text-xs font-semibold text-white">{project.brand}</span>
                  </div>
                </div>
              )}

              {project.goal && (
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-dark-850 border border-white/5">
                  <Target className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Objective</span>
                    <span className="text-xs font-medium text-slate-200">{project.goal}</span>
                  </div>
                </div>
              )}

              {project.result && (
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-dark-850 border border-brand-violet/30 bg-gradient-to-br from-brand-violet/10 to-transparent">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Key Result</span>
                    <span className="text-xs font-bold text-white gradient-text">{project.result}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
