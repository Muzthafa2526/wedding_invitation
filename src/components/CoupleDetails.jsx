import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider, CornerFlourish } from './FloralDecorations';
import { Heart } from 'lucide-react';

const InstagramIcon = ({ className = "w-3.5 h-3.5 text-gold-600" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const CoupleDetails = () => {
  const { bride, groom } = weddingData.couple;

  return (
    <section id="couple" className="py-24 px-4 bg-cream-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold-300/20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-olive-700 font-semibold">
            Two Hearts, One Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 mt-1">
            The Bride &amp; The Groom
          </h2>
          <BotanicalDivider className="mx-auto" />
        </div>

        {/* Side-by-side grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* THE BRIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-cream-100/70 p-6 sm:p-8 rounded-3xl border border-gold-300/50 shadow-luxury hover:border-gold-400 transition-all duration-300 relative"
          >
            <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 text-gold-500/60" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-gold-500/60" />

            {/* Portrait Frame */}
            <div className="relative shrink-0 w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden p-2 bg-cream-50 border-2 border-gold-400/60 shadow-lg">
              <img
                src={bride.image}
                alt={bride.fullName}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-2 rounded-xl ring-1 ring-inset ring-gold-500/30 pointer-events-none"></div>
            </div>

            {/* Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block text-xs uppercase tracking-widest text-olive-600 font-serif font-bold mb-1">
                {bride.title}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-olive-900 font-semibold">
                {bride.fullName}
              </h3>
              <p className="font-serif text-xs text-gold-700 uppercase tracking-wider mt-1 mb-4">
                {bride.parents}
              </p>

              <p className="font-serif text-sm text-olive-800 leading-relaxed mb-4">
                {bride.bio}
              </p>

              {/* Romantic Quote */}
              <blockquote className="border-l-2 border-gold-400 pl-3 italic font-serif text-xs sm:text-sm text-olive-700 my-4">
                "{bride.quote}"
              </blockquote>

              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-olive-600 font-serif">
                <InstagramIcon className="w-3.5 h-3.5 text-gold-600" />
                <span>{bride.instagram}</span>
              </div>
            </div>
          </motion.div>

          {/* THE GROOM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-cream-100/70 p-6 sm:p-8 rounded-3xl border border-gold-300/50 shadow-luxury hover:border-gold-400 transition-all duration-300 relative"
          >
            <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 text-gold-500/60" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-gold-500/60" />

            {/* Portrait Frame */}
            <div className="relative shrink-0 w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden p-2 bg-cream-50 border-2 border-gold-400/60 shadow-lg">
              <img
                src={groom.image}
                alt={groom.fullName}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-2 rounded-xl ring-1 ring-inset ring-gold-500/30 pointer-events-none"></div>
            </div>

            {/* Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block text-xs uppercase tracking-widest text-olive-600 font-serif font-bold mb-1">
                {groom.title}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-olive-900 font-semibold">
                {groom.fullName}
              </h3>
              <p className="font-serif text-xs text-gold-700 uppercase tracking-wider mt-1 mb-4">
                {groom.parents}
              </p>

              <p className="font-serif text-sm text-olive-800 leading-relaxed mb-4">
                {groom.bio}
              </p>

              {/* Romantic Quote */}
              <blockquote className="border-l-2 border-gold-400 pl-3 italic font-serif text-xs sm:text-sm text-olive-700 my-4">
                "{groom.quote}"
              </blockquote>

              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-olive-600 font-serif">
                <InstagramIcon className="w-3.5 h-3.5 text-gold-600" />
                <span>{groom.instagram}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center Intertwined Love Monogram */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-cream-200 border border-gold-300 text-olive-800 text-xs uppercase tracking-[0.2em] font-serif">
            <Heart className="w-4 h-4 text-gold-500 fill-gold-500" />
            <span>Celebrating Love, Trust &amp; Devotion</span>
            <Heart className="w-4 h-4 text-gold-500 fill-gold-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
