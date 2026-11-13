import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ChevronDown, Calendar } from 'lucide-react';
import {
  InterlockedGoldenRings,
  GoldenDiamondDivider,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { weddingData } from '../data/weddingData';

export const InvitationCardCover = ({ onOpenWebsite }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { couple, invitation } = weddingData;

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Immediately trigger audio playback & unlock scrolling in direct click handler!
    onOpenWebsite();

    // 2. Celebratory royal gold and champagne confetti shower
    try {
      confetti({
        particleCount: 150,
        spread: 95,
        origin: { y: 0.65 },
        colors: ['#D4AF67', '#F1D99A', '#FFF4DF', '#A77B35', '#590014', '#FFE6A3'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    // 3. Smooth scroll down to main hero section
    setTimeout(() => {
      const heroElem = document.getElementById('wedding-hero');
      if (heroElem) {
        heroElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 450);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 w-full h-full flex flex-col justify-between items-center overflow-hidden select-none luxury-fabric-texture"
    >
      {/* 
        1. AMBIENT LUXURY LIGHTING & DEPTH 
        Warm radial gold spotlights & deep wine vignette
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-burgundy-700/35 blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gold-500/15 blur-[110px]"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-gold-400/10 blur-[90px]"></div>
      </div>

      {/* 
        2. THIN METALLIC GOLD OUTER FRAME (FILL TO COVER)
        Runs around the entire screen perimeter, just like the reference luxury card
      */}
      <div className="absolute inset-3 sm:inset-5 md:inset-7 pointer-events-none border border-gold-400/40 rounded-2xl md:rounded-3xl z-20">
        {/* Subtle corner blossom accents */}
        <div className="absolute -top-3 -left-3 text-gold-400/70 w-8 h-8 pointer-events-none">
          <GoldenFloralBlossom className="w-8 h-8" />
        </div>
        <div className="absolute -top-3 -right-3 text-gold-400/70 w-8 h-8 pointer-events-none">
          <GoldenFloralBlossom className="w-8 h-8" flip={true} />
        </div>
        <div className="absolute -bottom-3 -left-3 text-gold-400/70 w-8 h-8 pointer-events-none">
          <GoldenFloralBlossom className="w-8 h-8" />
        </div>
        <div className="absolute -bottom-3 -right-3 text-gold-400/70 w-8 h-8 pointer-events-none">
          <GoldenFloralBlossom className="w-8 h-8" flip={true} />
        </div>
      </div>

      {/* 
        3. AUTHENTIC GOLDEN GLITTER RIBBON & BOTANICAL LEAVES (RIGHT SIDE)
        Extracted directly from the reference invitation card, anchored gracefully to the right edge
      */}
      <div className="absolute top-0 right-0 bottom-0 h-full w-[42vw] max-w-[460px] pointer-events-none flex items-center justify-end overflow-hidden z-10">
        <img
          src="/golden-ribbon-transparent.png"
          alt="Golden Glitter Ribbon and Botanical Leaves"
          className="h-full w-auto object-contain object-right opacity-90 drop-shadow-[0_0_25px_rgba(212,175,103,0.35)]"
        />
      </div>

      {/* 
        4. TOP SECTION: Royal Rings & "THE WEDDING OF"
      */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative z-20 pt-8 sm:pt-12 md:pt-16 text-center max-w-2xl px-4"
      >
        {/* Interlocked Golden Rings with Shimmer Lines */}
        <InterlockedGoldenRings className="mx-auto mb-2 text-gold-400" />

        {/* Regal Title Badge */}
        <p className="font-invitation-serif italic text-xs sm:text-sm md:text-base uppercase tracking-[0.38em] text-gold-300 font-semibold drop-shadow">
          {invitation.badge}
        </p>
      </motion.div>

      {/* 
        5. CENTERPIECE: Couple Names in Magnificent Authentic Calligraphy
        Scales responsively to fill the screen with breathtaking beauty
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 my-auto text-center px-4 w-full max-w-4xl"
      >
        {/* Groom Name */}
        <h1 className="font-invitation-script italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-light leading-tight drop-shadow-[0_4px_24px_rgba(212,175,103,0.45)]">
          {couple.groom.shortName}
        </h1>

        {/* Elegant & with Flourish Dividers */}
        <div className="flex items-center justify-center gap-4 my-2 sm:my-3">
          <div className="h-[1px] w-12 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-gold-400/80 to-transparent"></div>
          <span className="font-invitation-script italic text-3xl sm:text-4xl md:text-5xl text-gold-300 font-normal">
            &amp;
          </span>
          <div className="h-[1px] w-12 sm:w-24 md:w-32 bg-gradient-to-l from-transparent via-gold-400/80 to-transparent"></div>
        </div>

        {/* Bride Name */}
        <h1 className="font-invitation-script italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-light leading-tight drop-shadow-[0_4px_24px_rgba(212,175,103,0.45)]">
          {couple.bride.shortName}
        </h1>

        {/* Diamond Filigree Divider */}
        <div className="my-3 sm:my-4">
          <GoldenDiamondDivider className="mx-auto max-w-[220px]" />
        </div>

        {/* Date Announcement */}
        <div className="flex items-center justify-center gap-2.5 text-gold-200 font-invitation-serif italic text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] font-semibold">
          <Calendar className="w-4 h-4 text-gold-400" />
          <span>{invitation.dateFormatted}</span>
        </div>
      </motion.div>

      {/* 
        6. BOTTOM SECTION: Glowing "OPEN WEDDING INVITATION" Button
        Comfortably positioned at bottom with ample breathing room
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="relative z-20 pb-8 sm:pb-12 md:pb-14 flex flex-col items-center px-4 w-full"
      >
        <button
          onClick={handleOpenClick}
          disabled={isOpening}
          aria-label="Open Wedding Invitation"
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-4.5 rounded-full gold-shimmer-btn text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase shadow-2xl transition-all duration-300 cursor-pointer"
        >
          {/* Subtle animated golden pulse halo */}
          <span className="absolute -inset-1.5 rounded-full bg-gold-300/40 blur-md animate-pulse pointer-events-none"></span>

          <Sparkles
            className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy-950 animate-spin relative z-10"
            style={{ animationDuration: '6s' }}
          />
          <span className="font-invitation-serif italic font-bold text-burgundy-950 relative z-10">
            {isOpening ? 'Opening Invitation...' : 'Open Wedding Invitation'}
          </span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy-950 group-hover:translate-y-1 transition-transform relative z-10" />
        </button>

        <p className="font-invitation-serif italic text-[11px] sm:text-xs text-gold-300/90 tracking-widest uppercase mt-3 drop-shadow">
          Kindly click to unseal &amp; enter the celebration
        </p>
      </motion.div>
    </motion.div>
  );
};
