import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? siteConfig.testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === siteConfig.testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = siteConfig.testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-brand-cyan mb-3 inline-block">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Trusted by Creators & <span className="gradient-text">High-Growth Brands</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real feedback on audience retention, fast turnarounds, and creative execution.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="glass-card rounded-3xl p-8 sm:p-12 relative border border-white/10 shadow-2xl shadow-black/60"
            >
              <Quote className="w-12 h-12 text-brand-violet/30 absolute top-6 right-6" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-violet/50"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                      {current.author}
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan inline" />
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400">{current.role}</p>
                  </div>
                </div>

                {current.isPlaceholder && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400">
                    Placeholder Review
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {siteConfig.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-gradient-to-r from-brand-violet to-brand-cyan'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full glass-card hover:bg-white/10 border border-white/10 text-white transition-all transform active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full glass-card hover:bg-white/10 border border-white/10 text-white transition-all transform active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
