import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ChevronDown } from 'lucide-react';
import { GoldenFloralBlossom, InterlockedGoldenRings } from './FloralDecorations';

export const InvitationCardCover = ({ onOpenWebsite }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Immediately trigger open & audio playback within user click gesture!
    onOpenWebsite();

    // 2. Celebratory metallic gold and champagne confetti shower
    try {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#D4AF67', '#F1D99A', '#FFF4DF', '#A77B35', '#590014'],
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
    <div className="fixed inset-0 z-50 flex items-center justify-center luxury-fabric-texture overflow-hidden p-3 sm:p-6 select-none">
      {/* Soft Ambient Cinematic Spotlights for Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-burgundy-700/30 blur-[130px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/15 blur-[100px]"></div>
      </div>

      {/* Regal Left Flank Decorative Botanical Motif (Desktop Only) */}
      <div className="hidden lg:flex flex-col items-center justify-center absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 hover:opacity-60 transition-opacity">
        <GoldenFloralBlossom className="w-24 h-24 xl:w-32 xl:h-32 text-gold-400 rotate-[-15deg] mb-6" />
        <div className="w-[1px] h-48 bg-gradient-to-b from-gold-400/60 via-gold-400/20 to-transparent"></div>
        <span className="font-invitation-serif italic text-[10px] tracking-[0.4em] uppercase text-gold-400/70 [writing-mode:vertical-lr] my-4">
          Samju &amp; Fahiza
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold-400/30 to-gold-400/60"></div>
      </div>

      {/* Regal Right Flank Decorative Botanical Motif (Desktop Only) */}
      <div className="hidden lg:flex flex-col items-center justify-center absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 hover:opacity-60 transition-opacity">
        <GoldenFloralBlossom className="w-24 h-24 xl:w-32 xl:h-32 text-gold-400 flip rotate-[15deg] mb-6" flip={true} />
        <div className="w-[1px] h-48 bg-gradient-to-b from-gold-400/60 via-gold-400/20 to-transparent"></div>
        <span className="font-invitation-serif italic text-[10px] tracking-[0.4em] uppercase text-gold-400/70 [writing-mode:vertical-lr] my-4">
          January 17, 2027
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold-400/30 to-gold-400/60"></div>
      </div>

      {/* Main Luxury Wedding Invitation Card Presentation */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[480px] sm:max-w-[520px] md:max-w-[540px] lg:max-w-[560px]">
        {/* Top Royal Crest Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3 sm:mb-4"
        >
          <div className="flex items-center justify-center gap-3 text-gold-300">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold-400/60"></span>
            <span className="font-invitation-serif italic text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold-300 font-semibold">
              The Royal Wedding Invitation
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold-400/60"></span>
          </div>
        </motion.div>

        {/* Floating Card Container — Majestic, Borderless, Layered Golden Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: isOpening ? 0 : 1,
            scale: isOpening ? 1.05 : 1,
            y: isOpening ? -35 : [0, -6, 0],
          }}
          transition={{
            y: { duration: 6, repeat: isOpening ? 0 : Infinity, ease: 'easeInOut' },
            duration: isOpening ? 0.85 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-h-[84vh] rounded-3xl overflow-hidden flex flex-col items-center justify-between"
          style={{
            boxShadow:
              '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 60px rgba(212, 175, 103, 0.28), 0 0 120px rgba(89, 0, 20, 0.45)',
          }}
        >
          {/* Authentic High-Resolution Card Artwork (Reference Image) */}
          <div className="relative w-full aspect-[1/1.44] overflow-hidden flex items-center justify-center bg-burgundy-950">
            <img
              src="/invitation-cover.jpg"
              alt="The Wedding of Samju M.C & Fahiza K - January 17, 2027"
              className="w-full h-full object-contain"
              loading="eager"
            />

            {/* Smooth Seamless Bottom Gradient to Host Floating Action Button */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-burgundy-950 via-burgundy-950/85 to-transparent pointer-events-none"></div>

            {/* Floating Action Button Anchored Seamlessly at Bottom of Card */}
            <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-6 flex flex-col items-center pointer-events-auto">
              <button
                onClick={handleOpenClick}
                disabled={isOpening}
                aria-label="Open Wedding Invitation"
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full gold-shimmer-btn text-xs sm:text-sm tracking-[0.22em] uppercase shadow-2xl transition-all duration-300 w-full max-w-xs sm:max-w-sm cursor-pointer"
              >
                {/* Subtle animated golden pulse halo */}
                <span className="absolute -inset-1 rounded-full bg-gold-300/35 blur-sm animate-pulse pointer-events-none"></span>

                <Sparkles
                  className="w-4 h-4 text-burgundy-950 animate-spin relative z-10"
                  style={{ animationDuration: '7s' }}
                />
                <span className="font-invitation-serif italic font-bold relative z-10">
                  {isOpening ? 'Opening Invitation...' : 'Open Wedding Invitation'}
                </span>
                <ChevronDown className="w-4 h-4 text-burgundy-950 group-hover:translate-y-1 transition-transform relative z-10" />
              </button>

              <p className="font-invitation-serif italic text-[11px] text-gold-300/90 tracking-widest uppercase mt-2.5 drop-shadow">
                Kindly click to unseal &amp; enter the celebration
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
