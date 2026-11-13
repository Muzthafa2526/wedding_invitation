import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';
import { OliveBranchLeft, OliveBranchRight, BotanicalDivider, MonogramSeal, CornerFlourish } from './FloralDecorations';
import { Sparkles, ArrowDown, MailOpen, Calendar, MapPin } from 'lucide-react';

export const HeroLanding = ({ isOpened, onOpenInvitation }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { couple, invitation, venue } = weddingData;

  const handleOpenClick = () => {
    if (isOpened || isOpening) return;
    setIsOpening(true);

    // Trigger celebratory gold and cream confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A46D', '#F4EBDA', '#737B4B', '#FFFFFF', '#D5B87E'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    setTimeout(() => {
      onOpenInvitation();
      setIsOpening(false);

      // Smooth scroll to invitation card section
      setTimeout(() => {
        const target = document.getElementById('invitation');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 600);
    }, 1200);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-200 py-16 px-4">
      {/* Background Decorative Floral Accents & Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full bg-gold-300/30 blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-olive-300/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-400/20"></div>
      </div>

      {/* Floating Botanical Corner Sprigs */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-60 hidden md:block">
        <OliveBranchLeft className="w-28 h-28 text-olive-600" />
      </div>
      <div className="absolute top-6 right-6 pointer-events-none opacity-60 hidden md:block">
        <OliveBranchRight className="w-28 h-28 text-olive-600" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {/* Header Invitation Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.35em] text-olive-700 font-semibold mb-2">
            The Wedding Celebration
          </span>
          <p className="font-script text-2xl md:text-3xl text-gold-600">
            Together with their families
          </p>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="my-4"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-olive-900 tracking-tight leading-none">
            {couple.bride.firstName}
            <span className="block my-1 font-script text-4xl sm:text-5xl md:text-6xl text-gold-600 font-normal">
              &amp;
            </span>
            {couple.groom.firstName}
          </h1>
        </motion.div>

        {/* Date & Location Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-6 text-sm md:text-base text-olive-800 font-serif"
        >
          <span className="flex items-center gap-2 tracking-widest uppercase">
            <Calendar className="w-4 h-4 text-gold-600" />
            {invitation.dateFormatted}
          </span>
          <span className="hidden sm:inline text-gold-500 font-serif">♦</span>
          <span className="flex items-center gap-2 tracking-widest uppercase">
            <MapPin className="w-4 h-4 text-gold-600" />
            {venue.cityState}
          </span>
        </motion.div>

        <BotanicalDivider className="mx-auto" />

        {/* ENVELOPE / CARD INTERACTION SECTION */}
        <div className="relative mt-8 sm:mt-12 max-w-lg mx-auto perspective-1000">
          <AnimatePresence mode="wait">
            {!isOpened ? (
              /* Closed Envelope View */
              <motion.div
                key="envelope"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -40 }}
                transition={{ duration: 0.8 }}
                className="relative bg-cream-100 rounded-2xl p-6 sm:p-8 envelope-shadow border-2 border-gold-300/70 overflow-hidden"
              >
                {/* Decorative border corners */}
                <CornerFlourish position="top-left" className="absolute top-2 left-2 w-8 h-8 text-gold-500/70" />
                <CornerFlourish position="top-right" className="absolute top-2 right-2 w-8 h-8 text-gold-500/70" />
                <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-gold-500/70" />
                <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-gold-500/70" />

                {/* Envelope Flap visual */}
                <motion.div
                  className="w-full h-16 border-b-2 border-gold-400/40 flex items-center justify-center mb-6 relative"
                  animate={isOpening ? { rotateX: -120, opacity: 0.4 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute top-0 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-t-[70px] border-t-cream-300/40"></div>
                </motion.div>

                {/* Wax Seal Button */}
                <div className="relative my-4 flex flex-col items-center">
                  <motion.div
                    animate={
                      isOpening
                        ? { scale: [1, 1.3, 0.9], opacity: 0 }
                        : { scale: [1, 1.05, 1] }
                    }
                    transition={{
                      repeat: isOpening ? 0 : Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                  >
                    <MonogramSeal
                      initials="E &amp; A"
                      size="lg"
                      onClick={handleOpenClick}
                      className="shadow-2xl"
                    />
                  </motion.div>

                  <span className="mt-3 text-xs tracking-widest uppercase text-olive-600 font-serif">
                    Official Wedding Invitation
                  </span>
                </div>

                {/* Open Invitation CTA Button */}
                <div className="mt-6">
                  <button
                    onClick={handleOpenClick}
                    disabled={isOpening}
                    className="relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-100 font-serif text-sm tracking-widest uppercase shadow-luxury transition-all duration-300 hover:shadow-luxury-hover hover:-translate-y-0.5 border border-gold-400/50"
                  >
                    <MailOpen className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                    <span>{isOpening ? 'Opening Invitation...' : 'Open Invitation'}</span>
                    <Sparkles className="w-4 h-4 text-gold-300 animate-pulse" />
                  </button>
                  <p className="mt-2 text-xs text-olive-600/70 italic font-serif">
                    Click to unseal the card &amp; enter our celebration
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Opened Invitation Summary Badge */
              <motion.div
                key="opened-badge"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-cream-100/90 backdrop-blur-md rounded-2xl p-6 border border-gold-300/60 shadow-md flex flex-col items-center gap-4"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive-100 text-olive-800 border border-olive-300 text-xs font-serif tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  Invitation Unsealed
                </div>
                <p className="font-serif text-olive-900 text-base max-w-md">
                  We are delighted to share our special day with you. Scroll down to view the invitation card, ceremony timeline, and RSVP.
                </p>
                <a
                  href="#invitation"
                  className="inline-flex items-center gap-2 text-olive-700 hover:text-gold-600 font-serif text-sm tracking-widest uppercase transition-colors"
                >
                  <span>Explore Invitation</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

