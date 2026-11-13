import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ChevronDown, Calendar } from 'lucide-react';
import {
  InterlockedGoldenRings,
  GoldenDiamondDivider,
  RoyalCornerFlourish,
} from './FloralDecorations';
import { weddingData } from '../data/weddingData';

// Background Floating Gold Dust Particles
const DUST_PARTICLES = [
  { id: 1, left: '8%', top: '22%', size: 3, delay: 0.2, duration: 9 },
  { id: 2, left: '16%', top: '65%', size: 4, delay: 1.5, duration: 11 },
  { id: 3, left: '22%', top: '38%', size: 2.5, delay: 0.8, duration: 10 },
  { id: 4, left: '12%', top: '82%', size: 3.5, delay: 2.2, duration: 12 },
  { id: 5, left: '84%', top: '18%', size: 3, delay: 0.5, duration: 9.5 },
  { id: 6, left: '92%', top: '48%', size: 4, delay: 1.8, duration: 11.5 },
  { id: 7, left: '78%', top: '72%', size: 2.5, delay: 2.8, duration: 10.5 },
  { id: 8, left: '88%', top: '86%', size: 3.5, delay: 1.1, duration: 13 },
  { id: 9, left: '5%', top: '48%', size: 2, delay: 3.0, duration: 10 },
  { id: 10, left: '95%', top: '32%', size: 2.5, delay: 2.4, duration: 12 },
];

export const InvitationCardCover = ({ onOpenWebsite }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { invitation } = weddingData;

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Immediately trigger audio playback & unlock scrolling in direct user-initiated click handler
    onOpenWebsite();

    // 2. Celebratory royal gold & champagne confetti shower
    try {
      confetti({
        particleCount: 160,
        spread: 110,
        origin: { y: 0.62 },
        colors: ['#D4AF67', '#F1D99A', '#FFF4DF', '#A77B35', '#590014', '#FFE6A3'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    // 3. Smooth scroll down to main invitation message once unsealed
    setTimeout(() => {
      const target = document.getElementById('invitation-message') || document.querySelector('main');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 600);
  };

  // Staggered Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      exit={{
        opacity: 0,
        scale: 1.06,
        filter: 'blur(12px)',
      }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col items-center justify-between p-3 sm:p-5 md:p-6 bg-burgundy-950 luxury-fabric-texture select-none"
    >
      {/* 
        1. CINEMATIC AMBIENT LIGHTING & RADIAL VIGNETTE
        Soft burgundy spotlights, gold ambient glow, zero ghosting artifacts
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial vignette drawing focus into the center hero card */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(67, 0, 13, 0.2) 0%, rgba(20, 0, 4, 0.88) 75%, rgba(10, 0, 2, 0.98) 100%)',
          }}
        ></div>

        {/* Central warm gold luminescence behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-gold-500/10 blur-[130px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-burgundy-600/30 blur-[100px]"></div>

        {/* Left & Right Soft Gold Bokeh Orbs */}
        <div className="hidden lg:block absolute left-12 top-1/3 w-64 h-64 rounded-full bg-gold-400/8 blur-[90px] animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="hidden lg:block absolute right-12 top-2/3 w-64 h-64 rounded-full bg-gold-400/8 blur-[90px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* 
        2. FLOATING GOLD DUST PARTICLES (Background ambience)
      */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {DUST_PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-t from-gold-400 to-gold-200 pointer-events-none"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              boxShadow: '0 0 10px rgba(241, 217, 154, 0.8), 0 0 4px rgba(255, 244, 223, 0.9)',
              animation: `floatSlow ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 
        3. FAINT ARISTOCRATIC MANDALA / DAMASK FLANKS (Replaces bug-like ghost elements)
        Intentionally faint (3.5% opacity) geometric gold embroidery balancing large screens
      */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-[0.035] text-gold-300 z-10">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="30" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              transform={`rotate(${i * 15} 100 100)`}
              strokeOpacity="0.6"
            />
          ))}
        </svg>
      </div>

      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-[0.035] text-gold-300 z-10">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="30" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              transform={`rotate(${i * 15} 100 100)`}
              strokeOpacity="0.6"
            />
          ))}
        </svg>
      </div>

      {/* 
        4. FULL-SCREEN DOUBLE-LINE METALLIC GOLD OUTER FRAME
        With matching RoyalCornerFlourish ornaments at all four corners
      */}
      <div className="absolute inset-2.5 sm:inset-4 md:inset-6 pointer-events-none z-20">
        {/* Outer line */}
        <div className="absolute inset-0 border border-gold-400/35 rounded-2xl md:rounded-3xl pointer-events-none"></div>
        {/* Inner line */}
        <div className="absolute inset-1.5 sm:inset-2 border border-gold-400/20 rounded-xl md:rounded-2xl pointer-events-none"></div>

        {/* Four Matching Ornate Corner Flourishes */}
        <RoyalCornerFlourish
          position="top-left"
          className="absolute -top-1 -left-1 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/80 pointer-events-none"
        />
        <RoyalCornerFlourish
          position="top-right"
          className="absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/80 pointer-events-none"
        />
        <RoyalCornerFlourish
          position="bottom-left"
          className="absolute -bottom-1 -left-1 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/80 pointer-events-none"
        />
        <RoyalCornerFlourish
          position="bottom-right"
          className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 text-gold-400/80 pointer-events-none"
        />
      </div>

      {/* 
        5. CENTERPIECE HERO INVITATION CARD
        Occupies ~80-84vh on desktop and edge-to-edge on mobile.
        Rendered with crisp vector calligraphy, shimmering flowing ribbon, and double gold frame.
      */}
      <div className="relative z-30 flex-1 flex items-center justify-center w-full max-h-[78vh] sm:max-h-[80vh] md:max-h-[82vh] my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{
            opacity: isOpening ? 0 : 1,
            scale: isOpening ? 1.06 : 1,
            y: isOpening ? -30 : [0, -5, 0],
          }}
          transition={{
            y: { duration: 6.5, repeat: isOpening ? 0 : Infinity, ease: 'easeInOut' },
            duration: isOpening ? 0.9 : 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative h-full aspect-[730/1024] max-w-[94vw] sm:max-w-[85vw] md:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center select-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 90% 90% at 45% 35%, rgba(89, 0, 20, 0.5) 0%, rgba(35, 0, 7, 0.96) 100%), url("/wedding-marble-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:
              '0 35px 95px rgba(0, 0, 0, 0.95), 0 0 50px rgba(212, 175, 103, 0.28), 0 0 85px rgba(89, 0, 20, 0.45)',
          }}
        >
          {/* Card Inner Double-Line Gold Frame */}
          <div className="absolute inset-3 sm:inset-4 md:inset-5 pointer-events-none z-20">
            <div className="absolute inset-0 border border-gold-400/50 rounded-xl sm:rounded-2xl"></div>
            <div className="absolute inset-1 sm:inset-1.5 border border-gold-400/25 rounded-lg sm:rounded-xl"></div>

            {/* Inset Corner Flourishes */}
            <RoyalCornerFlourish
              position="top-left"
              className="absolute -top-1 -left-1 w-6 h-6 sm:w-8 sm:h-8 text-gold-400/75"
            />
            <RoyalCornerFlourish
              position="top-right"
              className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 text-gold-400/75"
            />
            <RoyalCornerFlourish
              position="bottom-left"
              className="absolute -bottom-1 -left-1 w-6 h-6 sm:w-8 sm:h-8 text-gold-400/75"
            />
            <RoyalCornerFlourish
              position="bottom-right"
              className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 text-gold-400/75"
            />
          </div>

          {/* 
            NATURAL FLOWING GOLDEN GLITTER RIBBON & BOTANICAL LEAF SPRAY
            Uses tapered fade so the ribbon dissolves seamlessly inside the card with zero awkward cropping!
          */}
          <div className="absolute right-0 top-0 bottom-0 h-full w-[46%] sm:w-[48%] pointer-events-none select-none z-10 overflow-hidden">
            <img
              src="/golden-ribbon-flowing.png"
              alt="Golden Ribbon & Leaves"
              className="w-full h-full object-contain object-right-bottom ribbon-glow-animate pointer-events-none select-none"
              loading="eager"
            />
          </div>

          {/* 
            CENTRAL ROYAL TYPOGRAPHY & EMBLEMS (High Contrast, Crisp & Scalable)
            Staggered reveal on page load
          */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-[82%] sm:max-w-[76%] my-auto space-y-2 sm:space-y-3 md:space-y-4"
          >
            {/* 1. Interlocked Golden Wedding Rings with subtle glow */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <InterlockedGoldenRings className="w-24 sm:w-28 md:w-32 h-7 sm:h-8 md:h-9" />
            </motion.div>

            {/* 2. THE WEDDING OF Badge */}
            <motion.div variants={itemVariants}>
              <span className="font-invitation-serif uppercase tracking-[0.35em] sm:tracking-[0.45em] text-[10px] sm:text-xs md:text-sm text-gold-300 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                THE WEDDING OF
              </span>
            </motion.div>

            {/* 3. Groom: Samju M.C in Large Royal Calligraphy Script */}
            <motion.div variants={itemVariants} className="w-full">
              <h1
                className="font-invitation-script text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] text-gold-shimmer font-normal tracking-wide leading-tight select-none"
                style={{
                  filter:
                    'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 18px rgba(212, 175, 103, 0.35))',
                }}
              >
                Samju M.C
              </h1>
            </motion.div>

            {/* 4. Ampersand (&) flanked by horizontal accent lines */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 my-0.5">
              <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
              <span className="font-invitation-script text-xl sm:text-2xl md:text-3xl text-gold-300 drop-shadow">
                &amp;
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
            </motion.div>

            {/* 5. Bride: Fahiza K in Large Royal Calligraphy Script */}
            <motion.div variants={itemVariants} className="w-full">
              <h2
                className="font-invitation-script text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] text-gold-shimmer font-normal tracking-wide leading-tight select-none"
                style={{
                  filter:
                    'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 18px rgba(212, 175, 103, 0.35))',
                }}
              >
                Fahiza K
              </h2>
            </motion.div>

            {/* 6. Golden Diamond Ornamental Divider */}
            <motion.div variants={itemVariants} className="flex justify-center w-full">
              <GoldenDiamondDivider className="w-32 sm:w-44 h-3 sm:h-4 my-1 sm:my-1.5" />
            </motion.div>

            {/* 7. Wedding Date with Gold Calendar Icon */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 shadow-inner">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                <span className="font-invitation-serif tracking-[0.25em] text-[10px] sm:text-xs text-gold-200 uppercase font-semibold drop-shadow">
                  {invitation.dateFormatted}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 
        6. LUXURY CHAMPAGNE-GOLD BUTTON & READABLE HELPER TEXT
        Generous spacing below the card, pulsing halo glow, animated light sweep, gentle bounce
      */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.65 }}
        className="relative z-30 pb-2 sm:pb-3 md:pb-4 flex flex-col items-center px-4 w-full shrink-0 mt-3 sm:mt-4 md:mt-5"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenClick}
          disabled={isOpening}
          aria-label="Open Wedding Invitation"
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full champagne-gold-btn text-xs sm:text-sm tracking-[0.22em] uppercase cursor-pointer"
        >
          {/* Subtle animated golden pulse halo */}
          <span className="absolute -inset-1 rounded-full bg-gold-300/40 blur-md animate-pulse pointer-events-none"></span>

          <Sparkles
            className="w-4 h-4 text-burgundy-950 animate-spin relative z-10 shrink-0"
            style={{ animationDuration: '6s' }}
          />
          <span className="font-invitation-serif italic font-bold text-burgundy-950 relative z-10">
            {isOpening ? 'OPENING INVITATION...' : 'OPEN WEDDING INVITATION'}
          </span>
          <ChevronDown className="w-4 h-4 text-burgundy-950 group-hover:translate-y-1 transition-transform relative z-10 shrink-0" />
        </motion.button>

        {/* Clear, highly readable helper text */}
        <p className="font-invitation-serif italic text-xs sm:text-[13px] text-gold-200/95 tracking-[0.22em] uppercase mt-2.5 sm:mt-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-center font-medium">
          Click to unseal &amp; enter the wedding celebration
        </p>
      </motion.div>
    </motion.div>
  );
};
