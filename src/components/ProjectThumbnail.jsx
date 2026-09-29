import React, { useState } from 'react';

/**
 * Extracts a YouTube video ID from various YouTube URL formats
 */
function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

function getGoogleDriveId(url) {
  if (!url) return null;
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export default function ProjectThumbnail({ project, isVertical = false }) {
  // 1. Check for custom thumbnail from projects.js
  const hasCustomThumb = !!(
    project.customThumbnail ||
    (project.thumbnail &&
      !project.thumbnail.includes('img.youtube.com') &&
      !project.thumbnail.includes('youtube.com') &&
      !project.thumbnail.includes('drive.google.com'))
  );
  const customThumbUrl = project.customThumbnail || (hasCustomThumb ? project.thumbnail : null);

  // 2. Extract YouTube video ID if applicable
  const ytId = getYouTubeId(project.fullVideoUrl) || getYouTubeId(project.thumbnail);

  // 3. Extract Google Drive ID if applicable
  const gDriveId = getGoogleDriveId(project.fullVideoUrl) || getGoogleDriveId(project.thumbnail);

  // YouTube quality fallback stage: 'maxres' -> 'sd' -> 'hq'
  const [ytStage, setYtStage] = useState('maxres');
  const [isLoading, setIsLoading] = useState(true);
  const [videoPosterFailed, setVideoPosterFailed] = useState(false);

  // Check if we should attempt video poster from previewClip
  const canUseVideoPoster =
    !hasCustomThumb &&
    !!project.previewClip &&
    !videoPosterFailed &&
    (project.usePreviewPoster || (!ytId && !gDriveId && project.videoType !== 'youtube'));

  // Calculate current YouTube thumbnail URL
  const ytThumbnailUrl = ytId
    ? `https://img.youtube.com/vi/${ytId}/${
        ytStage === 'maxres' ? 'maxresdefault' : ytStage === 'sd' ? 'sddefault' : 'hqdefault'
      }.jpg`
    : null;

  // Google Drive thumbnail URL (direct high-resolution frame)
  const gDriveThumbUrl = gDriveId ? `https://lh3.googleusercontent.com/d/${gDriveId}=w1280` : null;

  // The primary resolved image source
  const imageSrc = customThumbUrl || ytThumbnailUrl || gDriveThumbUrl || project.thumbnail;

  // Handle YouTube image load - checking for YouTube 120px placeholder
  const handleImageLoad = (e) => {
    const img = e.currentTarget;
    if (ytId && !hasCustomThumb) {
      if (img.naturalWidth <= 120) {
        if (ytStage === 'maxres') {
          setYtStage('sd');
          return;
        }
        if (ytStage === 'sd') {
          setYtStage('hq');
          return;
        }
      }
    }
    setIsLoading(false);
  };

  const handleImageError = () => {
    if (ytId && !hasCustomThumb) {
      if (ytStage === 'maxres') {
        setYtStage('sd');
        return;
      }
      if (ytStage === 'sd') {
        setYtStage('hq');
        return;
      }
    }
    setIsLoading(false);
  };

  // Explicit dimensions based on orientation and custom/fallback state
  const imgWidth = isVertical ? (hasCustomThumb ? 720 : 1280) : 1280;
  const imgHeight = isVertical ? (hasCustomThumb ? 1280 : 720) : 720;

  // 16:9 YouTube thumbnail placed on a 9:16 vertical card
  const isImage16x9OnVerticalCard = isVertical && !hasCustomThumb && !canUseVideoPoster;

  return (
    <div className="relative w-full h-full overflow-hidden bg-obsidian-950 flex items-center justify-center">
      {/* Subtle Skeleton Shimmer while loading */}
      {isLoading && (
        <div className="absolute inset-0 z-0 bg-obsidian-900 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-skeleton-shimmer bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>
      )}

      {/* Case 1: Video poster from previewClip (if applicable) */}
      {canUseVideoPoster ? (
        <video
          src={`${project.previewClip}#t=0.001`}
          preload="metadata"
          muted
          playsInline
          onLoadedData={() => setIsLoading(false)}
          onError={() => setVideoPosterFailed(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : isImage16x9OnVerticalCard ? (
        /* Case 2: 16:9 image on a 9:16 vertical card:
           Blurred, scaled copy of itself as background (no black bars, no pixelation),
           with the uncropped sharp 16:9 image centered with object-contain */
        <>
          {/* Blurred, scaled background copy */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {imageSrc && (
              <img
                src={imageSrc}
                alt=""
                aria-hidden="true"
                tabIndex={-1}
                width={imgWidth}
                height={imgHeight}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover scale-150 blur-2xl opacity-60 filter brightness-75 transition-opacity duration-500"
              />
            )}
            <div className="absolute inset-0 bg-obsidian-950/25" />
          </div>

          {/* Centered uncropped sharp 16:9 image */}
          <div className="relative z-1 w-full h-full flex items-center justify-center p-2">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={project.title}
                width={imgWidth}
                height={imgHeight}
                loading="lazy"
                decoding="async"
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={`w-full max-h-full object-contain rounded-xl shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            )}
          </div>
        </>
      ) : (
        /* Case 3: Aspect ratio matches the card (16:9 on 16:9, or 9:16 custom thumb on 9:16):
           Uses object-fit: cover, with width/height, loading="lazy", decoding="async" */
        imageSrc && (
          <img
            src={imageSrc}
            alt={project.title}
            width={imgWidth}
            height={imgHeight}
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )
      )}
    </div>
  );
}
