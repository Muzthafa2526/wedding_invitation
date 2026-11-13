import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import {
  InterlockedGoldenRings,
  GoldenDiamondDivider,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Calendar, MapPin } from 'lucide-react';

export const MainHero = () => {
  const { couple, invitation, venue } = weddingData;

  return (
    <section
      id="wedding-hero"
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-burgundy-950 luxury-fabric-texture py-20 px-4 overflow-hidden"
    >
      {/* Background Soft Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy-700/30 blur-[100px]"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold-600/10 blur-[80px]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gold-600/10 blur-[80px]"></div>
      </div>

      {/* Decorative Blossoms in Top Corners */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-70 hidden md:block">
        <GoldenFloralBlossom className="w-28 h-28 text-gold-400" />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none opacity-70 hidden md:block">
        <GoldenFloralBlossom className="w-28 h-28 text-gold-400" flip={true} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
        {/* Top Blessing Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-3"
        >
          <span className="font-serif text-xl sm:text-2xl text-gold-light font-medium tracking-wide block mb-1">
            {invitation.assalamuAlaikum}
          </span>
          <span className="font-invitation-serif text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold block">
            {invitation.badge}
          </span>
        </motion.div>

        {/* Interlocked Rings Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-3"
        >
          <InterlockedGoldenRings className="mx-auto text-gold-400" />
        </motion.div>

        {/* Couple Names in Refined, Authentic Calligraphy (Proper Size) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="my-4 sm:my-5"
        >
          {/* Groom Name */}
          <h1 className="font-invitation-script text-4xl sm:text-5xl md:text-6xl text-gold-light leading-snug drop-shadow-[0_2px_12px_rgba(212,175,103,0.35)]">
            {couple.groom.shortName}
          </h1>

          {/* Elegant & with horizontal lines */}
          <div className="flex items-center justify-center gap-4 my-1.5 sm:my-2">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
            <span className="font-invitation-script text-2xl sm:text-3xl text-gold-300 font-normal">
              &amp;
            </span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
          </div>

          {/* Bride Name */}
          <h1 className="font-invitation-script text-4xl sm:text-5xl md:text-6xl text-gold-light leading-snug drop-shadow-[0_2px_12px_rgba(212,175,103,0.35)]">
            {couple.bride.shortName}
          </h1>
        </motion.div>

        {/* Diamond Divider */}
        <GoldenDiamondDivider className="mx-auto max-w-[220px]" />

        {/* Date & Venue Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-5 text-xs sm:text-sm text-gold-200 font-invitation-serif"
        >
          <div className="flex items-center gap-2 tracking-[0.22em] uppercase font-semibold">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>{invitation.dateFormatted}</span>
          </div>
          <span className="hidden sm:inline text-gold-500">♦</span>
          <div className="flex items-center gap-2 tracking-[0.2em] uppercase font-semibold">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>{venue.name}, {venue.cityState}</span>
          </div>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10"
        >
          <a
            href="#invitation-message"
            className="inline-flex flex-col items-center gap-2 text-gold-400 hover:text-gold-200 transition-colors"
          >
            <span className="text-[10px] sm:text-[11px] font-invitation-serif uppercase tracking-[0.3em]">
              Explore The Wedding Story
            </span>
            <div className="w-5 h-8 rounded-full border border-gold-400/60 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-gold-400 rounded-full animate-bounce"></div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
