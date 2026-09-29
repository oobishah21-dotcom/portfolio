import React, { useState } from 'react';
import { siteConfig } from '../data/content';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch (err) {
      const tempInput = document.createElement('input');
      tempInput.value = siteConfig.contact.email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  return (
    <section id="contact" className="relative w-full py-16 sm:py-20 bg-[#07080c] overflow-hidden">
      {/* Ambient Atmospheric Backdrop Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-12 left-1/4 w-[520px] h-[360px] bg-electric-cyan/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[480px] h-[400px] bg-electric-purple/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-4 left-1/3 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[130px]"></div>
      </div>

      {/* Tech Grid Background Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-20 bg-[linear-gradient(to_right,#3b494b20_1px,transparent_1px),linear-gradient(to_bottom,#3b494b20_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge & Header Section */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12">
          {/* Live Availability Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse"></span>
            <span className="font-space text-[11px] uppercase tracking-widest text-cyan-300 font-bold">
              Available for new projects
            </span>
          </div>

          {/* Main Catchphrase */}
          <h2 className="font-space text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-2.5 font-extrabold">
            Let's make something{' '}
            <span className="bg-gradient-to-r from-electric-cyan via-purple-300 to-electric-purple bg-clip-text text-transparent">
              worth watching
            </span>.
          </h2>

          {/* Subline */}
          <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            Ready to elevate your watch-time and visual retention? Get in touch directly below.
          </p>
        </div>

        {/* Both Channels in ONE Single Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto items-stretch">
          
          {/* Channel 1: WhatsApp (Vibrant Emerald & Cyan) */}
          <a
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#062419]/90 via-obsidian-900/90 to-obsidian-950/95 border-2 border-emerald-500/40 hover:border-emerald-400 shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.35)] group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-obsidian-950 font-space text-[10px] tracking-wide font-extrabold shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                  FASTEST
                </span>
                <span className="material-symbols-outlined text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[18px]">
                  north_east
                </span>
              </div>
            </div>

            <div>
              <span className="font-space text-lg sm:text-xl text-white group-hover:text-emerald-300 transition-colors block mb-1 font-bold">
                WhatsApp Chat
              </span>
              <p className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold tracking-wide mb-3">
                {siteConfig.contact.whatsappNumber}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-space font-medium group-hover:text-emerald-300 transition-colors">
                <span>Start Direct Chat</span>
                <span>→</span>
              </div>
            </div>
          </a>

          {/* Channel 2: Direct Email (Vibrant Electric Cyan) */}
          <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#071f2c]/90 via-obsidian-900/90 to-obsidian-950/95 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-[0_8px_30px_rgba(0,240,255,0.15)] hover:shadow-[0_12px_40px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_18px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  aria-label="Copy email address"
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-full bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-obsidian-950 border border-cyan-400/50 shadow-[0_0_10px_rgba(0,240,255,0.2)] font-space text-[11px] flex items-center gap-1 transition-all font-bold cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
                <a
                  aria-label="Send direct email"
                  className="w-8 h-8 rounded-full bg-cyan-500/20 hover:bg-cyan-500 border border-cyan-400/40 flex items-center justify-center text-cyan-300 hover:text-obsidian-950 transition-colors"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </a>
              </div>
            </div>

            <div>
              <span className="font-space text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors block mb-1 font-bold">
                Direct Email
              </span>
              <p className="font-mono text-xs sm:text-sm text-cyan-300 font-semibold tracking-wide mb-3">
                {siteConfig.contact.email}
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-space font-medium hover:text-cyan-300 transition-colors"
              >
                <span>Compose Mail</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Global Logistics & Response Guarantee */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-obsidian-900/60 to-purple-950/40 border border-cyan-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-cyan-400 text-[22px] flex-shrink-0">public</span>
            <p className="font-sans text-xs text-slate-300">
              <span className="text-cyan-300 font-bold">Global Delivery</span> • Fast turnaround via Google Drive &amp; Frame.io
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-space text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Typical Response: &lt; 2 Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
