import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  {
    name: 'Adobe Premiere Pro',
    abbr: 'Pr',
    role: 'NLE Editor',
    desc: 'Flagship master timeline assembly, dynamic linked multicam footage, audio conforming, and rough-to-fine pacing.',
    tag: '4K Multi-Track',
    status: 'Primary Hub',
    statusColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    iconStyle: 'bg-[#00005b]/60 border-[#9999ff]/30 text-[#9999ff]',
  },
  {
    name: 'After Effects',
    abbr: 'Ae',
    role: 'Motion & VFX',
    desc: 'Kinetic typography, screen replacements, 3D camera mapping, particle simulations, and advanced transitions.',
    tag: 'Sub-pixel Tracking',
    status: 'Motion Suite',
    statusColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    iconStyle: 'bg-[#2e004f]/60 border-[#d291ff]/30 text-[#d291ff]',
  },
  {
    name: 'CapCut Pro',
    abbr: 'Cp',
    role: 'Short-Form Master',
    desc: 'Rapid turnarounds for TikTok, Reels, & YouTube Shorts. High-engagement caption styling and viral rhythm optimization.',
    tag: 'Mobile Native 9:16',
    status: 'Fast Paced',
    statusColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    iconStyle: 'bg-slate-800/80 border-cyan-400/30 text-cyan-300',
  },
  {
    name: 'Higgsfield AI',
    abbr: 'Hf',
    role: 'Neural Video Engine',
    desc: 'Cinematic camera path control, motion transfer, character rigging, and seamless agentic video production.',
    tag: 'Cinema & Genjutsu',
    status: 'Agentic Video',
    statusColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    iconStyle: 'bg-purple-950/40 border-purple-400/30 text-purple-300',
  },
  {
    name: 'Seedance',
    abbr: 'Sd',
    role: 'Cinematic Video Model',
    desc: 'High-fidelity text/image-to-video neural engine with persistent character identity and cinematic physics dynamics.',
    tag: 'Seedance 2.5 Engine',
    status: 'Generative Core',
    statusColor: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    iconStyle: 'bg-cyan-950/40 border-cyan-400/30 text-cyan-300',
  },
  {
    name: 'Nano Banana',
    abbr: 'Nb',
    role: 'Visual & Asset Gen',
    desc: 'Hyper-detailed conceptual plates, photorealistic character anchors, complex typography, and pristine video input assets.',
    tag: 'Nano Banana Pro',
    status: 'Asset Synthesis',
    statusColor: 'text-amber-400',
    dotColor: 'bg-amber-400',
    iconStyle: 'bg-amber-950/40 border-amber-400/30 text-amber-300',
  },
  {
    name: 'Flow',
    abbr: 'Fl',
    role: 'AI Filmmaking Suite',
    desc: 'Multi-clip scene builder, timeline generation, script-to-screen sequencing, and unified model orchestration.',
    tag: 'Multi-Clip Timeline',
    status: 'Filmmaking Hub',
    statusColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
    iconStyle: 'bg-blue-950/40 border-blue-400/30 text-blue-300',
  },
  {
    name: 'ElevenLabs',
    abbr: '11',
    role: 'AI Voice & Audio',
    desc: 'Photorealistic synthetic human vocal cloning, multi-dialect narrations, emotional inflections, and sound effect generation.',
    tag: 'Voice Cloning v2',
    status: 'Audio Synthesizer',
    statusColor: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    iconStyle: 'bg-slate-900 border-white/20 text-white',
  },
  {
    name: 'Topaz Video AI',
    abbr: 'Tz',
    role: 'Upscaling & 60FPS',
    desc: 'Proprietary neural frame interpolation, vintage archival restoration, artifact de-noising, and 1080p to pristine 4K upscaling.',
    tag: 'Iris & Chronos Models',
    status: 'AI Enhancer',
    statusColor: 'text-sky-400',
    dotColor: 'bg-sky-400',
    iconStyle: 'bg-sky-950/40 border-sky-400/30 text-sky-300',
  },
];

export default function ToolsStrip() {
  return (
    <section id="tools" className="relative w-full py-16 bg-[#07080c] overflow-hidden">
      {/* Ambient Atmospheric Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-electric-cyan/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-electric-purple/10 rounded-full blur-[160px]"></div>
      </div>

      {/* Cyber Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-20 bg-[linear-gradient(to_right,#3b494b20_1px,transparent_1px),linear-gradient(to_bottom,#3b494b20_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Engine Components</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-space font-extrabold text-white tracking-tight">
              Production Tech &amp;{' '}
              <span className="bg-gradient-to-r from-electric-cyan via-purple-300 to-electric-purple bg-clip-text text-transparent">
                AI Toolkit
              </span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-xs text-left sm:text-right leading-relaxed">
            Deployed across Mac Studio M2 Ultra &amp; RTX 4090 Dedicated Neural Compute Units.
          </p>
        </div>

        {/* High-End Glassmorphic Tool Matrix Grid (10 Modern Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, idx) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group relative rounded-2xl bg-gradient-to-b from-[#121622]/85 via-obsidian-900/90 to-obsidian-950/95 backdrop-blur-xl p-5 flex flex-col justify-between border border-white/10 hover:border-cyan-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_-5px_rgba(0,240,255,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top glow highlight on hover */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400 to-transparent transition-all duration-300"></div>

              <div>
                {/* Tool Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-space font-bold text-base shadow-inner ${tool.iconStyle}`}>
                      {tool.abbr}
                    </div>
                    <div>
                      <h4 className="font-space font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {tool.name}
                      </h4>
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                        {tool.role}
                      </span>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
                </div>

                {/* Tool Description */}
                <p className="text-xs text-slate-400 mb-4 leading-relaxed font-sans">
                  {tool.desc}
                </p>
              </div>

              {/* Tool Card Bottom Badges */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                  {tool.tag}
                </span>
                <span className={`text-[10px] font-mono ${tool.statusColor} flex items-center gap-1.5 font-semibold`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${tool.dotColor} animate-pulse`}></span>
                  {tool.status}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
