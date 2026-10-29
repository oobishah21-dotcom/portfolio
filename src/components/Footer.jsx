import React from 'react';
import { siteConfig } from '../data/content';

export default function Footer() {
  const email = siteConfig?.contact?.email || 'oobishah21@gmail.com';
  const youtubeUrl = siteConfig?.contact?.youtubeUrl || 'https://youtube.com/@oobiwritesofficials?si=pf72b3s5INIpCtGn';
  const whatsappUrl = `https://wa.me/923039199321?text=${encodeURIComponent('Hi Obaid! I saw your portfolio and would like to discuss a video project.')}`;

  return (
    <footer className="bg-[#02050B] relative pt-12 pb-6 text-gray-400" id="contact">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Upper Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-brandBorder/40">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-2">
              <svg className="w-7 h-7 text-brandBlue" fill="none" viewBox="0 0 32 32">
                <path d="M7 6L25 16L7 26V6Z" fill="#0075FF"></path>
                <path d="M12 9.5L23.5 16L12 22.5V9.5Z" fill="#00D8F6" fillOpacity="0.4"></path>
              </svg>
              <span className="text-xl font-bold tracking-tight text-white">
                Obaid <span className="text-brandBlue font-extrabold">Shah</span>
              </span>
            </div>
            <p className="text-xs text-gray-400">AI Video Creator &amp; Storyteller</p>
          </div>

          {/* Center CTA: Get in Touch */}
          <div className="md:col-span-4 text-center flex flex-col items-center">
            <h3 className="text-sm font-semibold text-white mb-1">Get In Touch</h3>
            <p className="text-xs text-gray-400 mb-4 max-w-xs">Have a project in mind? Let's create something amazing together.</p>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brandBlue hover:bg-brandBlueHover text-white text-xs font-medium shadow-[0_0_15px_rgba(0,117,255,0.4)] transition-all"
                href={`mailto:${email}`}
              >
                Contact Me <span>&gt;</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#081220] border border-brandBorder hover:border-emerald-500 text-emerald-400 text-xs font-medium transition-all"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social Icons & Tagline */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <div className="flex items-center space-x-3 mb-3 text-gray-300">
              {/* YouTube */}
              <a
                className="w-8 h-8 rounded-full bg-[#081220] border border-brandBorder flex items-center justify-center hover:text-white hover:border-brandBlue transition-colors"
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                className="w-8 h-8 rounded-full bg-[#081220] border border-brandBorder flex items-center justify-center hover:text-white hover:border-brandBlue transition-colors"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                className="w-8 h-8 rounded-full bg-[#081220] border border-brandBorder flex items-center justify-center hover:text-white hover:border-brandBlue transition-colors"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>

              {/* Mail */}
              <a
                className="w-8 h-8 rounded-full bg-[#081220] border border-brandBorder flex items-center justify-center hover:text-white hover:border-brandBlue transition-colors"
                href={`mailto:${email}`}
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </a>
            </div>

            {/* Handwritten Motto */}
            <div className="font-handwritten text-lg text-cyan-300 select-none">
              Create ★ Edit ★ Inspire
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
          <div>© {new Date().getFullYear()} Obaid Shah. All rights reserved.</div>
          <div className="mt-2 sm:mt-0 font-medium text-gray-400">AI | Video | Storytelling</div>
        </div>
      </div>
    </footer>
  );
}
