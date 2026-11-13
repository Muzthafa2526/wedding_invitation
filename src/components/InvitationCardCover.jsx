import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ChevronDown } from 'lucide-react';
import { GoldenFloralBlossom, GoldenLaurelSprig } from './FloralDecorations';
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
        particleCount: 160,
        spread: 100,
        origin: { y: 0.65 },
        colors: ['#D4AF67', '#F1D99A', '#FFF4DF', '#A77B35', '#590014', '#FFE6A3'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    // 3. Smooth scroll down to main invitation section
    setTimeout(() => {
      const target = document.getElementById('invitation-message') || document.querySelector('main');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 450);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col items-center justify-between p-2.5 sm:p-4 md:p-6 bg-burgundy-950 luxury-fabric-texture select-none"
    >
      {/* 
        1. FULL-SCREEN AMBIENT LUXURY SPOTLIGHTS & VIGNETTE
        Creates cinematic lighting depth across the entire 100vw x 100vh canvas
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-burgundy-700/35 blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold-500/12 blur-[110px]"></div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full bg-gold-400/10 blur-[85px]"></div>
      </div>

      {/* 
        2. FULL-SCREEN THIN METALLIC GOLD OUTER FRAME
        Frames the entire 100vw x 100vh viewport with corner blossoms, making the entire display a royal card
      */}
      <div className="absolute inset-2.5 sm:inset-4 md:inset-6 pointer-events-none border border-gold-400/35 rounded-2xl md:rounded-3xl z-20">
        <div className="absolute -top-2.5 -left-2.5 text-gold-400/70 w-7 h-7 pointer-events-none">
          <GoldenFloralBlossom className="w-7 h-7" />
        </div>
        <div className="absolute -top-2.5 -right-2.5 text-gold-400/70 w-7 h-7 pointer-events-none">
          <GoldenFloralBlossom className="w-7 h-7" flip={true} />
        </div>
        <div className="absolute -bottom-2.5 -left-2.5 text-gold-400/70 w-7 h-7 pointer-events-none">
          <GoldenFloralBlossom className="w-7 h-7" />
        </div>
        <div className="absolute -bottom-2.5 -right-2.5 text-gold-400/70 w-7 h-7 pointer-events-none">
          <GoldenFloralBlossom className="w-7 h-7" flip={true} />
        </div>
      </div>

      {/* 
        3. WIDESCREEN LEFT FLANK DECORATIVE MOTIF (Desktop / Large Screens)
        Frames the central invitation with palatial symmetry and eliminates empty side space
      */}
      <div className="hidden lg:flex flex-col items-center justify-center absolute left-8 xl:left-14 top-1/2 -translate-y-1/2 pointer-events-none opacity-45 hover:opacity-65 transition-opacity z-20">
        <GoldenFloralBlossom className="w-16 h-16 xl:w-20 xl:h-20 text-gold-400 rotate-[-15deg] mb-4" />
        <div className="w-[1px] h-32 bg-gradient-to-b from-gold-400/70 via-gold-400/20 to-transparent"></div>
        <div className="flex items-center gap-2 my-4">
          <GoldenLaurelSprig direction="left" className="w-5 h-12 text-gold-400/80" />
          <span className="font-invitation-serif italic text-[11px] xl:text-xs tracking-[0.4em] uppercase text-gold-300 [writing-mode:vertical-lr] font-semibold">
            {couple.groom.shortName} &amp; {couple.bride.shortName}
          </span>
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-400/30 to-gold-400/70"></div>
      </div>

      {/* 
        4. WIDESCREEN RIGHT FLANK DECORATIVE MOTIF (Desktop / Large Screens)
        Balances the left flank with wedding date and royal botanical sprig
      */}
      <div className="hidden lg:flex flex-col items-center justify-center absolute right-8 xl:right-14 top-1/2 -translate-y-1/2 pointer-events-none opacity-45 hover:opacity-65 transition-opacity z-20">
        <GoldenFloralBlossom className="w-16 h-16 xl:w-20 xl:h-20 text-gold-400 rotate-[15deg] mb-4" flip={true} />
        <div className="w-[1px] h-32 bg-gradient-to-b from-gold-400/70 via-gold-400/20 to-transparent"></div>
        <div className="flex items-center gap-2 my-4">
          <span className="font-invitation-serif italic text-[11px] xl:text-xs tracking-[0.4em] uppercase text-gold-300 [writing-mode:vertical-lr] font-semibold">
            Sunday • {invitation.dateFormatted}
          </span>
          <GoldenLaurelSprig direction="right" className="w-5 h-12 text-gold-400/80" />
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-400/30 to-gold-400/70"></div>
      </div>

      {/* 
        5. CENTERPIECE: PROMINENT, MAJESTIC INVITATION ARTWORK
        Properly sized on desktop/laptops (maintains authentic 730:1024 aspect ratio without distortion)
      */}
      <div className="relative z-20 flex-1 flex items-center justify-center w-full max-h-[76vh] sm:max-h-[78vh] md:max-h-[80vh] my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isOpening ? 0 : 1,
            scale: isOpening ? 1.05 : 1,
            y: isOpening ? -35 : [0, -6, 0],
          }}
          transition={{
            y: { duration: 6, repeat: isOpening ? 0 : Infinity, ease: 'easeInOut' },
            duration: isOpening ? 0.8 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-full aspect-[730/1024] max-w-[94vw] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-burgundy-950"
          style={{
            boxShadow:
              '0 30px 85px rgba(0, 0, 0, 0.95), 0 0 55px rgba(212, 175, 103, 0.28), 0 0 95px rgba(89, 0, 20, 0.45)',
          }}
        >
          {/* Authentic High-Resolution Original Invitation Artwork */}
          <img
            src="/invitation-cover.jpg"
            alt={`The Wedding of ${couple.groom.shortName} & ${couple.bride.shortName} - ${invitation.dateFormatted}`}
            className="w-full h-full object-contain pointer-events-none select-none"
            loading="eager"
          />

          {/* Smooth Soft Vignette at very bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-burgundy-950/75 via-burgundy-950/30 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>

      {/* 
        6. BOTTOM SECTION: REDESIGNED PREMIUM CHAMPAGNE-GOLD BUTTON
        Champagne-gold gradient, dark burgundy text, animated light sweep shimmer, hover halo
      */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative z-30 pb-3 sm:pb-5 md:pb-6 flex flex-col items-center px-4 w-full"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenClick}
          disabled={isOpening}
          aria-label="Open Wedding Invitation"
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full champagne-gold-btn text-xs sm:text-sm tracking-[0.25em] uppercase cursor-pointer"
        >
          {/* Subtle animated golden pulse halo */}
          <span className="absolute -inset-1 rounded-full bg-gold-300/40 blur-md animate-pulse pointer-events-none"></span>

          <Sparkles
            className="w-4 h-4 text-burgundy-950 animate-spin relative z-10"
            style={{ animationDuration: '6s' }}
          />
          <span className="font-invitation-serif italic font-bold text-burgundy-950 relative z-10">
            {isOpening ? 'OPENING INVITATION...' : 'OPEN WEDDING INVITATION'}
          </span>
          <ChevronDown className="w-4 h-4 text-burgundy-950 group-hover:translate-y-1 transition-transform relative z-10" />
        </motion.button>

        <p className="font-invitation-serif italic text-[10px] sm:text-[11px] text-gold-300/85 tracking-widest uppercase mt-2.5 drop-shadow">
          Click to unseal &amp; enter the wedding celebration
        </p>
      </motion.div>
    </motion.div>
  );
};
