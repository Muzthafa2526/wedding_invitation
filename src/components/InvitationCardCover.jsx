import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';
import {
  InterlockedGoldenRings,
  WavyGoldenRibbon,
  GoldenBotanicalLeaves,
  GoldenDiamondDivider,
} from './FloralDecorations';
import { Calendar, Sparkles, ChevronDown } from 'lucide-react';

export const InvitationCardCover = ({ onOpenWebsite }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { couple, invitation } = weddingData;

  const handleOpenClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Celebratory metallic gold and champagne confetti shower
    try {
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#D4AF67', '#F1D99A', '#FFF4DF', '#A77B35', '#590014'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    setTimeout(() => {
      onOpenWebsite();
      // Scroll smoothly to the main website hero
      setTimeout(() => {
        const heroElem = document.getElementById('wedding-hero');
        if (heroElem) {
          heroElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-900 luxury-fabric-texture overflow-hidden p-3 sm:p-6 md:p-8">
      {/* Background Soft Gold Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy-700/40 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-gold-500/10 blur-2xl"></div>
      </div>

      {/* Main Luxury Invitation Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{
          opacity: isAnimating ? 0 : 1,
          scale: isAnimating ? 1.05 : 1,
          y: isAnimating ? -30 : 0,
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[480px] sm:max-w-[520px] md:max-w-[560px] aspect-[1/1.55] sm:aspect-[1/1.5] max-h-[92vh] rounded-3xl bg-gradient-to-b from-burgundy-800 via-burgundy-900 to-burgundy-950 p-6 sm:p-10 flex flex-col justify-between items-center text-center shadow-2xl border-gold-card overflow-hidden"
      >
        {/* Elegant Thin Metallic Gold Outer Frame (as in reference image) */}
        <div className="absolute inset-3 sm:inset-4.5 pointer-events-none border border-gold-500/70 rounded-2xl"></div>
        <div className="absolute inset-4 sm:inset-5.5 pointer-events-none border border-gold-400/30 rounded-xl"></div>

        {/* Wavy Golden Glitter Ribbon on the Right Side (Exact Match to Reference Card) */}
        <div className="absolute top-0 right-0 bottom-0 w-28 sm:w-36 pointer-events-none overflow-hidden z-10">
          <WavyGoldenRibbon className="w-full h-full" />
        </div>

        {/* Golden Botanical Leaf Branch near Bottom-Right */}
        <div className="absolute bottom-6 right-3 sm:right-6 pointer-events-none z-15 transform rotate-[-8deg]">
          <GoldenBotanicalLeaves className="w-24 sm:w-32 h-36 sm:h-44 text-gold-400 drop-shadow-[0_2px_10px_rgba(212,175,103,0.3)]" />
        </div>

        {/* TOP ORNAMENT: Two Interlocked Golden Wedding Rings with Accent Lines */}
        <div className="pt-4 sm:pt-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <InterlockedGoldenRings className="mx-auto text-gold-400 drop-shadow-[0_0_8px_rgba(241,217,154,0.4)]" />
          </motion.div>

          {/* THE WEDDING OF */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.38em' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-[11px] sm:text-xs text-gold-300 uppercase font-medium mt-3 sm:mt-4 tracking-[0.38em]"
          >
            {invitation.badge}
          </motion.p>
        </div>

        {/* CENTER CONTENT: Couple Names in Flowing Metallic Gold Calligraphy */}
        <div className="my-auto py-2 z-20 w-full px-2">
          {/* Groom Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-gold-light leading-tight drop-shadow-[0_2px_12px_rgba(212,175,103,0.35)]"
          >
            {couple.groom.shortName}
          </motion.h1>

          {/* Ampersand & with subtle flanking lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex items-center justify-center gap-3 my-1 sm:my-2"
          >
            <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-gold-400/80 to-gold-400"></div>
            <span className="font-calligraphy text-2xl sm:text-3xl text-gold-300 font-normal">
              &amp;
            </span>
            <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-gold-400/80 to-gold-400"></div>
          </motion.div>

          {/* Bride Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-gold-light leading-tight drop-shadow-[0_2px_12px_rgba(212,175,103,0.35)]"
          >
            {couple.bride.shortName}
          </motion.h1>

          {/* Ornamental Diamond Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-3 sm:mt-4"
          >
            <GoldenDiamondDivider className="mx-auto max-w-[200px] sm:max-w-[240px]" />
          </motion.div>

          {/* Wedding Date Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-gold-200 font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mt-2"
          >
            <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{invitation.dateFormatted}</span>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Open Wedding Invitation Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="pb-3 sm:pb-5 z-30 w-full"
        >
          <button
            onClick={handleOpenClick}
            disabled={isAnimating}
            aria-label="Open Wedding Invitation"
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full gold-shimmer-btn font-serif font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shadow-lg transition-all duration-300 w-full max-w-xs sm:max-w-sm"
          >
            <Sparkles className="w-4 h-4 text-burgundy-950 animate-spin" style={{ animationDuration: '8s' }} />
            <span>{isAnimating ? 'Opening Invitation...' : 'Open Wedding Invitation'}</span>
            <ChevronDown className="w-4 h-4 text-burgundy-950 group-hover:translate-y-1 transition-transform" />
          </button>
          <p className="font-serif text-[11px] text-gold-300/70 tracking-widest uppercase mt-2.5">
            Click to unseal &amp; view complete celebration
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
