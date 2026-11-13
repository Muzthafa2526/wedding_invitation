import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import {
  GoldenDiamondDivider,
  GoldenBotanicalLeaves,
  InterlockedGoldenRings,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Heart, Sparkles } from 'lucide-react';

export const CoupleDetails = () => {
  const { bride, groom } = weddingData.couple;

  return (
    <section id="couple" className="py-24 px-4 bg-burgundy-950 luxury-fabric-texture relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-gold-500/15 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Two Souls Blessed In Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light mt-1">
            The Groom &amp; The Bride
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* THE GROOM: Samju M.C */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-burgundy-900 to-burgundy-950 p-6 sm:p-8 rounded-3xl border border-gold-400/50 shadow-gold-glow hover:border-gold-300 transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner blossom */}
            <div className="absolute top-2 right-2 pointer-events-none opacity-40">
              <GoldenFloralBlossom className="w-12 h-12 text-gold-400" />
            </div>

            {/* Groom Portrait */}
            <div className="relative shrink-0 w-56 h-72 sm:w-60 sm:h-80 rounded-2xl overflow-hidden p-2 bg-burgundy-900 border-2 border-gold-400/70 shadow-2xl">
              <img
                src={groom.image}
                alt={groom.fullName}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-2 rounded-xl ring-1 ring-inset ring-gold-400/40 pointer-events-none"></div>
            </div>

            {/* Groom Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-400 font-serif font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{groom.title}</span>
              </div>
              <h3 className="font-calligraphy text-4xl sm:text-5xl text-gold-light font-normal leading-tight">
                {groom.fullName}
              </h3>
              <p className="font-serif text-xs text-gold-300/90 uppercase tracking-wider mt-1 mb-4">
                {groom.parents}
              </p>

              <p className="font-serif text-sm text-gold-100/90 leading-relaxed mb-4">
                {groom.bio}
              </p>

              {/* Romantic Quote */}
              <blockquote className="border-l-2 border-gold-400/80 pl-3 italic font-serif text-xs sm:text-sm text-gold-200 my-4">
                "{groom.quote}"
              </blockquote>
            </div>
          </motion.div>

          {/* THE BRIDE: Fahiza K.K */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-burgundy-900 to-burgundy-950 p-6 sm:p-8 rounded-3xl border border-gold-400/50 shadow-gold-glow hover:border-gold-300 transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner blossom */}
            <div className="absolute top-2 right-2 pointer-events-none opacity-40">
              <GoldenFloralBlossom className="w-12 h-12 text-gold-400" flip={true} />
            </div>

            {/* Bride Portrait */}
            <div className="relative shrink-0 w-56 h-72 sm:w-60 sm:h-80 rounded-2xl overflow-hidden p-2 bg-burgundy-900 border-2 border-gold-400/70 shadow-2xl">
              <img
                src={bride.image}
                alt={bride.fullName}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-2 rounded-xl ring-1 ring-inset ring-gold-400/40 pointer-events-none"></div>
            </div>

            {/* Bride Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-400 font-serif font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{bride.title}</span>
              </div>
              <h3 className="font-calligraphy text-4xl sm:text-5xl text-gold-light font-normal leading-tight">
                {bride.fullName}
              </h3>
              <p className="font-serif text-xs text-gold-300/90 uppercase tracking-wider mt-1 mb-4">
                {bride.parents}
              </p>

              <p className="font-serif text-sm text-gold-100/90 leading-relaxed mb-4">
                {bride.bio}
              </p>

              {/* Romantic Quote */}
              <blockquote className="border-l-2 border-gold-400/80 pl-3 italic font-serif text-xs sm:text-sm text-gold-200 my-4">
                "{bride.quote}"
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Center Intertwined Love Monogram */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-burgundy-900 border border-gold-400/60 text-gold-200 text-xs uppercase tracking-[0.25em] font-serif shadow-md">
            <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>United by Faith, Bound by Devotion</span>
            <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
