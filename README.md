# AI Video Editor Portfolio

A production-ready, dark cinematic portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for freelance AI video editors targeting creators and brands across Pakistan, India, and internationally.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies (if you haven't already)
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build
```

The site will be available at `http://localhost:3000`.

---

## 📝 Customization Guide (Quick Checklist)

All project content and personal information are separated into **two clean data files** so you don't need to touch React components:

### 1. Replace Personal Information, Links & Pricing
Open [`src/data/content.js`](file:///c:/Users/obaid/Desktop/Portfolio/src/data/content.js) and update:
- **`ownerName`**: Replace `[YOUR NAME]` with your full name or brand name.
- **`contact.whatsappNumber`**: Put your WhatsApp number with international country code (e.g., `+923001234567` for Pakistan or `+919876543210` for India). All WhatsApp buttons and "Get a quote" buttons link here directly.
- **`contact.email`**: Your primary business email.
- **`contact.instagramUrl`**: Link to your Instagram profile.
- **`contact.formspreeEndpoint`**: *(Optional)* If you use Formspree, paste your form endpoint URL here. If left blank, it automatically falls back to a clean `mailto:` link.
- **`services`**: Edit starting prices in **PKR** and **USD**, turnaround times, or bullet points.
- **`testimonials`**: Replace the 3 placeholder reviews with actual quotes from your past clients.
- **`tools`**: Add or remove any software or AI tools you use.

---

### 2. Add or Replace Portfolio Projects
Open [`src/data/projects.js`](file:///c:/Users/obaid/Desktop/Portfolio/src/data/projects.js).

Each project has this structure:
```javascript
{
  id: "unique-project-id",
  title: "Title of Your Video",
  category: "reels", // 'reels' (9:16) | 'youtube' (16:9) | 'ads' (Brand/Goal/Result)
  aspectRatio: "9:16", // '9:16' for vertical, '16:9' for horizontal
  thumbnail: "https://your-image-host.com/poster.jpg", // High quality poster thumbnail
  previewClip: "https://your-video-host.com/short-teaser.mp4", // 3-6 second muted clip that plays on hover/tap
  fullVideoUrl: "https://www.youtube.com/watch?v=...", // YouTube URL or direct MP4 link
  videoType: "youtube", // 'youtube' or 'mp4'
  description: "Description of the edit, pacing, sound design, and retention strategies used.",
  brand: "Client or Channel Name",
  goal: "The campaign objective (e.g. increase watch time)",
  result: "+340% View Duration, 1.2M Views", // Highlight metric shown on cards & modal
  tags: ["Runway Gen-3", "After Effects", "Sound Design"],
}
```

#### How Video Playback Works:
- **Hover / Tap Preview (`previewClip`)**: A short, muted MP4 clip (typically 3–8 seconds) hosted on Cloudinary, Streamable, GitHub Releases, or AWS S3. It is lazy-loaded with an `IntersectionObserver` so it only loads when scrolled into view.
- **Full Video Modal (`fullVideoUrl` & `videoType`)**:
  - If `videoType: 'youtube'`: You can paste any standard YouTube URL (e.g., `https://www.youtube.com/watch?v=...` or `https://youtu.be/...`). The modal automatically embeds the YouTube player.
  - If `videoType: 'mp4'`: Paste any direct link to an MP4 video (Cloudinary, Google Cloud, AWS S3, Vimeo direct link). The modal uses an HTML5 video player with standard playback controls.

---

### 3. How to Change Accent Colors
Colors are configured in [`tailwind.config.js`](file:///c:/Users/obaid/Desktop/Portfolio/tailwind.config.js):
```javascript
colors: {
  brand: {
    violet: '#8B5CF6', // Change primary accent
    indigo: '#6366F1', // Change secondary accent
    cyan: '#06B6D4',   // Change highlight accent
  }
}
```
You can also adjust custom gradients in [`src/index.css`](file:///c:/Users/obaid/Desktop/Portfolio/src/index.css) under `.gradient-text`.

---

## 🚀 Deploying to Vercel (Zero Configuration)

This repository includes [`vercel.json`](file:///c:/Users/obaid/Desktop/Portfolio/vercel.json) pre-configured for Single Page Application (SPA) routing.

### Option A: Via GitHub (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New" > "Project"**.
4. Import your GitHub repository.
5. Framework Preset will automatically detect **Vite**.
6. Click **Deploy**. Your portfolio will be live with an SSL certificate within 60 seconds!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the simple prompts in your terminal to deploy immediately.

---

## 📱 Features & Highlights
- **Ultra-Dark Cinematic Theme**: Deep near-black background (`#07080D`), custom violet-to-cyan neon gradient, and glassmorphic cards.
- **Instant Video Previews**: Hover over any desktop card or tap on mobile to play a silent preview teaser.
- **Unified Video Modal**: Supports both YouTube embeds and MP4 streams with full responsiveness.
- **Category Filter Tabs**: Switch between **All**, **Reels (9:16)**, **YouTube (16:9)**, and **Ads (Metrics-driven)**.
- **Dual Currency Switcher**: Clients can toggle between USD ($) and PKR (Rs.) on the Services & Pricing table.
- **Floating WhatsApp**: Pulsing bottom-right WhatsApp quick-access button with auto-populated greeting.
- **SEO & Social Cards**: Pre-configured Open Graph tags, Twitter cards, meta descriptions, and custom SVG favicon.
