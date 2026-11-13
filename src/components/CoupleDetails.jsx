import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import {
  GoldenDiamondDivider,
  GoldenBotanicalLeaves,
  InterlockedGoldenRings,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Heart, Sparkles, Quote } from 'lucide-react';

export const CoupleDetails = () => {
  const { bride, groom } = weddingData.couple;

  return (
    <section id="couple" className="py-24 px-4 bg-burgundy-950/70 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-invitation-serif italic text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Two Souls Blessed In Love
          </span>
          <h2 className="font-invitation-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            The Groom &amp; The Bride
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
        </div>

        {/* Profiles Grid — Borderless, Elegant Glowing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* THE GROOM: Samju M.C */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-burgundy-900/90 via-burgundy-950/95 to-burgundy-950 p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,103,0.2)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,103,0.35)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner blossom */}
            <div className="absolute top-2 right-2 pointer-events-none opacity-40">
              <GoldenFloralBlossom className="w-12 h-12 text-gold-400" />
            </div>

            {/* Groom Portrait */}
            <div className="relative shrink-0 w-52 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden p-2 bg-burgundy-900 shadow-2xl">
              <img
                src={groom.image}
                alt={groom.fullName}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Groom Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-400 font-invitation-serif italic font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{groom.title}</span>
              </div>
              <h3 className="font-invitation-script italic text-3xl sm:text-4xl text-gold-light font-normal leading-tight">
                {groom.fullName}
              </h3>
              <p className="font-invitation-serif italic text-[11px] sm:text-xs text-gold-300/90 uppercase tracking-wider mt-1 mb-4">
                {groom.parents}
              </p>

              <p className="font-invitation-body italic text-sm sm:text-base text-gold-100/90 leading-relaxed mb-4">
                {groom.bio}
              </p>

              {/* Romantic Quote */}
              <div className="bg-burgundy-950/60 p-4 rounded-xl my-4">
                <p className="font-invitation-body italic text-sm text-gold-200">
                  "{groom.quote}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* THE BRIDE: Fahiza K */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-burgundy-900/90 via-burgundy-950/95 to-burgundy-950 p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,103,0.2)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,103,0.35)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner blossom */}
            <div className="absolute top-2 right-2 pointer-events-none opacity-40">
              <GoldenFloralBlossom className="w-12 h-12 text-gold-400" flip={true} />
            </div>

            {/* Bride Portrait */}
            <div className="relative shrink-0 w-52 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden p-2 bg-burgundy-900 shadow-2xl">
              <img
                src={bride.image}
                alt={bride.fullName}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Bride Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-400 font-invitation-serif italic font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{bride.title}</span>
              </div>
              <h3 className="font-invitation-script italic text-3xl sm:text-4xl text-gold-light font-normal leading-tight">
                {bride.fullName}
              </h3>
              <p className="font-invitation-serif italic text-[11px] sm:text-xs text-gold-300/90 uppercase tracking-wider mt-1 mb-4">
                {bride.parents}
              </p>

              <p className="font-invitation-body italic text-sm sm:text-base text-gold-100/90 leading-relaxed mb-4">
                {bride.bio}
              </p>

              {/* Romantic Quote */}
              <div className="bg-burgundy-950/60 p-4 rounded-xl my-4">
                <p className="font-invitation-body italic text-sm text-gold-200">
                  "{bride.quote}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center Intertwined Love Monogram — Borderless */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-burgundy-900/90 text-gold-200 text-xs uppercase tracking-[0.25em] font-invitation-serif italic shadow-xl">
            <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>United by Faith, Bound by Devotion</span>
            <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
