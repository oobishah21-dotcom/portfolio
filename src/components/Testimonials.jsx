import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      initials: 'SA',
      name: 'Sarah Ahmed',
      role: 'Marketing Manager',
      quote: 'Obaid delivered high-quality AI videos beyond our expectations. Creative, professional and always on time.'
    },
    {
      initials: 'MK',
      name: 'M. Khan',
      role: 'Business Owner',
      quote: 'His creativity and understanding of our brand made the video truly stand out. Highly recommended!'
    },
    {
      initials: 'RT',
      name: 'Rizwan T.',
      role: 'Social Media Manager',
      quote: 'Very professional, easy to work with and super talented. Will definitely work with him again.'
    }
  ];

  return (
    <section className="py-16 border-b border-brandBorder/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-wider text-brandBlue uppercase block mb-1">TESTIMONIALS</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#071120] border border-brandBorder/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-brandBlue/40 transition-colors"
              data-purpose="testimonial-card"
            >
              <div>
                <div className="text-brandBlue text-2xl mb-3 font-serif leading-none">“</div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-[#132238] border border-brandBlue/30 text-xs font-bold text-white flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">{t.name}</h4>
                  <p className="text-[10px] text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
