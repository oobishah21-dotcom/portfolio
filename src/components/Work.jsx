import React from 'react';
import { projects as initialProjects } from '../data/projects';

export const featuredProjectsData = [
  {
    id: "featured-1",
    title: "Epic Cinematic Story",
    tagline: "AI Generated | Veo 3",
    duration: "0:08",
    thumbnail: "/ai-video-creator-thumb.jpg",
    gradient: "from-amber-900/40 to-slate-900",
    category: "ai-video",
    tool: "Veo 3",
    description: "High-concept cinematic story built with Google Veo 3 generative AI, featuring photorealistic motion and dramatic atmospheric lighting.",
    fullVideoUrl: initialProjects[3]?.fullVideoUrl || "https://www.youtube.com/watch?v=IqtPOyWH7qM",
    videoType: "youtube",
    tags: ["Veo 3", "Cinematic AI", "Photorealistic", "Storytelling"]
  },
  {
    id: "featured-2",
    title: "Emotional Story",
    tagline: "AI Animation | Runway",
    duration: "0:12",
    thumbnail: "/kitten-emotional-story-thumb.jpg",
    gradient: "from-sky-950/60 to-slate-900",
    category: "ai-video",
    tool: "Runway Gen-3",
    description: "Deeply emotional narrative video combining dynamic camera motions, character consistency, and sound design via Runway.",
    fullVideoUrl: initialProjects[0]?.fullVideoUrl || "https://drive.google.com/file/d/1KugLzP-K9fo7UqKdvbWWlXlGey5nii8I/view?usp=drivesdk",
    videoType: "gdrive",
    tags: ["Runway", "Gen-3", "Emotional Arc", "Motion Design"]
  },
  {
    id: "featured-3",
    title: "Game Referral Ad",
    tagline: "Vegas Vixen | Referral Promo",
    duration: "0:10",
    thumbnail: "/vegas-vixen-referral-16-9.jpg",
    gradient: "from-amber-950/60 to-slate-900",
    category: "ads",
    tool: "Kling AI",
    description: "High-converting animated Vegas Vixen game referral ad featuring dynamic character animation, fiery visual effects, and engaging call-to-action.",
    fullVideoUrl: initialProjects[6]?.fullVideoUrl || "https://youtube.com/shorts/HqJj0Tovdu0",
    videoType: "youtube",
    tags: ["Game Referral", "Vegas Vixen", "Commercial", "Viral Hook"]
  },
  {
    id: "featured-4",
    title: "Funny Cat Video",
    tagline: "AI Animation | Funny Challenge",
    duration: "0:10",
    thumbnail: "/funny-cat-video-thumb.jpg",
    gradient: "from-amber-950/50 to-slate-900",
    category: "animation",
    tool: "AI 3D Animation",
    description: "Hilarious 3D animated comedy short featuring Baahubali Kaun - Taakat Ka Muqabla funny cat challenge with expressive character acting and sound effects.",
    fullVideoUrl: initialProjects[1]?.fullVideoUrl || "https://drive.google.com/file/d/1cJuw0yEX2bSVsykpV0l5aKFoQYtTJWBO/view?usp=drivesdk",
    videoType: "gdrive",
    tags: ["Funny Cat Video", "3D Animation", "Comedy", "Viral Short"]
  },
  {
    id: "featured-5",
    title: "Batman vs Shaitan",
    tagline: "Epic Battle | Midjourney + Runway",
    duration: "0:08",
    thumbnail: "/batman-vs-shaitan-thumb.jpg",
    gradient: "from-orange-950/40 to-slate-900",
    category: "animation",
    tool: "Midjourney + Runway",
    description: "Epic cinematic battle animation between Batman and a fierce fire demon, rendered with high-fidelity visuals, dramatic lightning and VFX.",
    fullVideoUrl: initialProjects[2]?.fullVideoUrl || "https://drive.google.com/file/d/1_eqpQ0hQTMVz-xLLJqMr54c8Lbp6tlO4/view?usp=drivesdk",
    videoType: "gdrive",
    tags: ["Batman vs Shaitan", "Cinematic Battle", "VFX", "Midjourney"]
  },
  {
    id: "featured-6",
    title: "Bacchon Ka Superhero",
    tagline: "Product Commercial | Saboon & Toy",
    duration: "0:09",
    thumbnail: "/bacchon-ka-superhero-thumb.jpg",
    gradient: "from-sky-950/50 to-slate-900",
    category: "ads",
    tool: "AI Commercial",
    description: "Creative commercial product ad featuring Bacchon Ka Superhero - Saboon Bhi, Toy Bhi with vibrant bubble VFX, 3D character animation, and playful sound design.",
    fullVideoUrl: initialProjects[7]?.fullVideoUrl || "https://drive.google.com/file/d/1QdlqZ8Tcd9CBB5MU7BfrEiHl-WONYvt4/view?usp=drivesdk",
    videoType: "gdrive",
    tags: ["Product Ad", "Commercial", "3D Character", "Kids Brand"]
  }
];

export default function Work({ onSelectProject }) {
  return (
    <section className="py-16 border-b border-brandBorder/50" id="work">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold tracking-wider text-brandBlue uppercase block mb-1">MY WORK</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F2F5FA]">Featured Projects</h2>
          </div>
          <a
            className="inline-flex items-center text-xs font-semibold text-brandBlue hover:text-brandCyan transition-colors"
            href="#work"
          >
            View All Projects <span className="ml-1.5">→</span>
          </a>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProjectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="group flex flex-col bg-brandDarkCard border border-brandBorder rounded-xl overflow-hidden hover:border-brandBlue/60 hover:shadow-[0_4px_25px_rgba(47,128,255,0.25)] transition-all cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectProject && onSelectProject(project);
                }
              }}
            >
              {/* Thumbnail Container */}
              <div
                className={`relative aspect-video w-full bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
              >
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors pointer-events-none"></div>
                <span className="absolute bottom-2 left-2 z-10 px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/70 text-[#F2F5FA]">
                  {project.duration}
                </span>
                <div className="relative z-10 w-7 h-7 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-brandBlue group-hover:border-transparent transition-all">
                  <svg className="w-3.5 h-3.5 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-3 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-semibold text-[#F2F5FA] leading-tight group-hover:text-brandCyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-[#8B95A9] mt-0.5">{project.tagline}</p>
                </div>
                <span className="text-brandBlue text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
