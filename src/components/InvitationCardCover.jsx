import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ChevronDown } from 'lucide-react';

export const InvitationCardCover = ({ onOpenWebsite }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Celebratory metallic gold and champagne confetti shower
    try {
      confetti({
        particleCount: 120,
        spread: 85,
        origin: { y: 0.65 },
        colors: ['#D4AF67', '#F1D99A', '#FFF4DF', '#A77B35', '#590014'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    setTimeout(() => {
      onOpenWebsite();
      setTimeout(() => {
        const heroElem = document.getElementById('wedding-hero');
        if (heroElem) {
          heroElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-950 luxury-fabric-texture overflow-hidden p-2 sm:p-4 md:p-6">
      {/* Background Soft Lighting & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-burgundy-700/35 blur-[120px]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-[90px]"></div>
      </div>

      {/* Main Luxury Wedding Invitation Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.05 : 1,
          y: isOpening ? -30 : 0,
        }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[440px] sm:max-w-[480px] md:max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border-gold-card flex flex-col items-center justify-between bg-gradient-to-b from-burgundy-900 to-burgundy-950"
        style={{
          boxShadow: '0 25px 70px rgba(15, 0, 3, 0.95), 0 0 35px rgba(212, 175, 103, 0.3)',
        }}
      >
        {/* Exact Invitation Card Visual from User's Reference Upload */}
        <div className="relative w-full aspect-[1/1.42] overflow-hidden">
          <img
            src="/invitation-cover.jpg"
            alt="The Wedding of Samju M.C & Fahiza K - January 17, 2027"
            className="w-full h-full object-contain sm:object-cover"
            loading="eager"
          />

          {/* Shimmering Golden Overlay Line along bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-burgundy-950 via-burgundy-950/80 to-transparent"></div>
        </div>

        {/* Action Button Bar at Bottom */}
        <div className="w-full bg-burgundy-950 px-6 pt-2 pb-6 flex flex-col items-center border-t border-gold-400/30">
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            aria-label="Open Wedding Invitation"
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full gold-shimmer-btn font-serif font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shadow-lg transition-all duration-300 w-full max-w-xs sm:max-w-sm"
          >
            <Sparkles className="w-4 h-4 text-burgundy-950 animate-spin" style={{ animationDuration: '8s' }} />
            <span>{isOpening ? 'Opening Invitation...' : 'Open Wedding Invitation'}</span>
            <ChevronDown className="w-4 h-4 text-burgundy-950 group-hover:translate-y-1 transition-transform" />
          </button>
          <p className="font-serif text-[11px] text-gold-300/80 tracking-widest uppercase mt-2.5">
            Click to unseal &amp; enter the wedding celebration
          </p>
        </div>
      </motion.div>
    </div>
  );
};
