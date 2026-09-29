/**
 * PORTFOLIO CONTENT CONFIGURATION
 * Configured for Obaid Shah
 */

export const siteConfig = {
  // Owner Name
  ownerName: "Obaid Shah",
  
  // Tagline and subtitles
  tagline: "Video editing that tells your story, faster with AI",
  subTagline: "High-retention Reels, viral YouTube edits, and performance-driven ads engineered to hook attention and convert.",
  
  // Hero showreel background video (Fallback gradient activates automatically if unavailable)
  heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4",
  
  // Contact & Social information
  contact: {
    whatsappNumber: "+923039199321",
    whatsappDefaultMessage: "Hi Obaid! I saw your portfolio and would like to discuss a video project.",
    email: "oobishah21@gmail.com",
    tiktokUrl: "https://www.tiktok.com/@obaidshah0199",
    tiktokHandle: "@obaidshah0199",
    youtubeUrl: "https://youtube.com/@oobiwritesofficials?si=pf72b3s5INIpCtGn",
    youtubeHandle: "@oobiwritesofficials",
    formspreeEndpoint: "",
  },

  // Dedicated Official Channels configuration (YouTube & TikTok)
  socialChannels: [
    {
      id: "youtube",
      name: "YouTube Channel",
      handle: "@oobiwritesofficials",
      url: "https://youtube.com/@oobiwritesofficials?si=pf72b3s5INIpCtGn",
      type: "Long-Form & Showcase",
      badge: "Official Channel",
      description: "Watch full 1080p widescreen video edits, cinematic storytelling, and post-production breakdowns.",
      cta: "Check Channel",
      color: "red",
    },
    {
      id: "tiktok",
      name: "TikTok Profile",
      handle: "@obaidshah0199",
      url: "https://www.tiktok.com/@obaidshah0199",
      type: "Viral Reels & Shorts",
      badge: "Trending Edits",
      description: "Daily high-retention short-form reels, kinetic typography hooks, and viral audio pacing.",
      cta: "Check Page",
      color: "fuchsia",
    },
  ],

  // Highlight metrics shown in the Hero section
  stats: [
    { label: "Views Generated", value: "2M+" },
    { label: "Avg Turnaround", value: "24-48h" },
    { label: "Projects Completed", value: "50+" },
    { label: "Retention Boost", value: "Up to 3x" },
  ],

  // Tools I Use: Software and AI platforms
  tools: [
    { name: "Adobe Premiere Pro", category: "NLE Editor" },
    { name: "After Effects", category: "Motion & VFX" },
    { name: "CapCut Pro", category: "Short-Form" },
    { name: "Higgsfield AI", category: "Neural Video Engine" },
    { name: "Seedance", category: "Cinematic Video" },
    { name: "Nano Banana", category: "Visual & Asset Gen" },
    { name: "Flow", category: "AI Filmmaking Suite" },
    { name: "ElevenLabs", category: "AI Voice & Audio" },
    { name: "Topaz Video AI", category: "Upscaling & 60FPS" },
  ],

  // Services and Pricing (Basic / Competitive Rates)
  services: [
    {
      id: "reels-shorts",
      title: "Reels & Shorts",
      subtitle: "High-retention short-form videos built for TikTok, Instagram & YouTube Shorts",
      badge: "Most Popular",
      startingPrice: {
        usd: "$20",
        pkr: "PKR 5,000",
      },
      turnaround: "24 - 48 Hours",
      features: [
        "Dynamic pacing & visual hook retention",
        "Animated subtitles with keyword highlights",
        "AI-generated contextual B-roll & sound effects",
        "Color grading optimized for mobile screens",
        "Revisions included for perfection",
      ],
      whatsappSubject: "Reels & Shorts Package",
    },
    {
      id: "youtube-longform",
      title: "YouTube Videos",
      subtitle: "Full-length storytelling that keeps audience retention high from start to finish",
      badge: "Best for Creators",
      startingPrice: {
        usd: "$65",
        pkr: "PKR 18,000",
      },
      turnaround: "3 - 5 Days",
      features: [
        "Narrative arc structuring & dead-air trimming",
        "Custom kinetic typography & motion graphics",
        "Audio remastering, leveling & noise clean-up",
        "Visual zooms, sound design & retention resets",
        "Click-worthy thumbnail consultation",
      ],
      whatsappSubject: "YouTube Long-form Package",
    },
    {
      id: "performance-ads",
      title: "Commercials & Ads",
      subtitle: "Performance-driven video creatives that stop the scroll and drive conversions",
      badge: "High ROI",
      startingPrice: {
        usd: "$90",
        pkr: "PKR 25,000",
      },
      turnaround: "2 - 4 Days",
      features: [
        "Hook variation testing for higher click-through rate",
        "Platform-specific exports (9:16, 16:9, 1:1)",
        "Call-to-action motion graphics & overlays",
        "Product feature highlights & benefits callouts",
        "Direct creative collaboration",
      ],
      whatsappSubject: "Video Ads & Commercials Package",
    },
  ],

  // Testimonials Carousel
  testimonials: [
    {
      id: 1,
      quote: "Obaid's pacing and hook edits on our Shorts dramatically improved our retention and subscriber growth.",
      author: "Digital Creator",
      role: "YouTube & TikTok Creator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      isPlaceholder: false,
    },
    {
      id: 2,
      quote: "Delivered super clean cuts with great sound design and fast delivery. Very communicative and reliable.",
      author: "E-Commerce Founder",
      role: "Online Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      isPlaceholder: false,
    },
    {
      id: 3,
      quote: "Understands the exact tempo needed for viral short-form content. Turnaround was quick and quality was top tier.",
      author: "Brand Marketer",
      role: "Social Media Strategist",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      isPlaceholder: false,
    },
  ],
};
