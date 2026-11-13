import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import {
  InterlockedGoldenRings,
  GoldenBotanicalLeaves,
  GoldenDiamondDivider,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Calendar, MapPin, Heart } from 'lucide-react';

export const MainHero = () => {
  const { couple, invitation, venue } = weddingData;

  return (
    <section
      id="wedding-hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-burgundy-950 luxury-fabric-texture py-24 px-4 overflow-hidden"
    >
      {/* Background Ambience & Lighting Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-burgundy-700/30 blur-[100px]"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold-600/10 blur-[80px]"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold-600/10 blur-[80px]"></div>
      </div>

      {/* Decorative Floral Blossoms in Corners */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-70 hidden md:block">
        <GoldenFloralBlossom className="w-32 h-32 text-gold-400" />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none opacity-70 hidden md:block">
        <GoldenFloralBlossom className="w-32 h-32 text-gold-400" flip={true} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Top Blessing Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-4"
        >
          <span className="font-serif text-lg sm:text-xl text-gold-300 font-semibold tracking-wider block mb-1">
            {invitation.assalamuAlaikum}
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold-400 font-medium">
            Two Hearts, One Beautiful Journey
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

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="my-4 sm:my-6"
        >
          <h1 className="font-calligraphy text-5xl sm:text-7xl md:text-8xl text-gold-light leading-none tracking-wide drop-shadow-[0_4px_20px_rgba(212,175,103,0.4)]">
            {couple.groom.fullName}
          </h1>
          <div className="flex items-center justify-center gap-4 my-2 sm:my-3">
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
            <span className="font-calligraphy text-3xl sm:text-4xl md:text-5xl text-gold-300 font-normal">
              &amp;
            </span>
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
          </div>
          <h1 className="font-calligraphy text-5xl sm:text-7xl md:text-8xl text-gold-light leading-none tracking-wide drop-shadow-[0_4px_20px_rgba(212,175,103,0.4)]">
            {couple.bride.fullName}
          </h1>
        </motion.div>

        {/* Diamond Divider */}
        <GoldenDiamondDivider className="mx-auto" />

        {/* Date & Venue Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 my-6 text-sm sm:text-base text-gold-200 font-serif"
        >
          <div className="flex items-center gap-2 tracking-[0.2em] uppercase font-semibold">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>{invitation.dateFull}</span>
          </div>
          <span className="hidden sm:inline text-gold-500">♦</span>
          <div className="flex items-center gap-2 tracking-[0.2em] uppercase font-semibold">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>{venue.name}, {venue.cityState}</span>
          </div>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#invitation-message"
            className="inline-flex flex-col items-center gap-2 text-gold-400 hover:text-gold-200 transition-colors"
          >
            <span className="text-[11px] font-serif uppercase tracking-[0.3em]">
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
