import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { InvitationCardCover } from './components/InvitationCardCover';
import { Navbar } from './components/Navbar';
import { InvitationMessage } from './components/InvitationMessage';
import { CountdownTimer } from './components/CountdownTimer';
import { CoupleDetails } from './components/CoupleDetails';
import { VenueSection } from './components/VenueSection';
import { GallerySection } from './components/GallerySection';
import { QuotesSection } from './components/QuotesSection';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { GoldParticles } from './components/GoldParticles';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable vertical scrolling completely on initial screen until "Open Wedding Invitation" is clicked
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOpenWebsite = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen luxury-fabric-texture text-gold-100 font-serif italic selection:bg-gold-500 selection:text-burgundy-950 relative">
      {/* Subtle Ethereal Gold Dust Particles Effect */}
      <GoldParticles />

      {/* Preloaded Luxury Audio Engine (Plays automatically on unseal) */}
      <AudioPlayer isWebsiteOpened={isOpen} />

      {/* 
        STRICT REQUIREMENT 4:
        Initially, ONLY the invitation card is visible.
        The main website remains hidden until the visitor clicks "OPEN WEDDING INVITATION".
      */}
      <AnimatePresence>
        {!isOpen && (
          <InvitationCardCover onOpenWebsite={handleOpenWebsite} />
        )}
      </AnimatePresence>

      {/* Main Wedding Website (Revealed upon opening) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Sticky Luxury Navigation */}
          <Navbar />

          <main>
            {/* 1. Formal Wedding Invitation Card & Message */}
            <InvitationMessage />

            {/* 2. Live Countdown Timer for January 17, 2027 */}
            <div id="countdown">
              <CountdownTimer />
            </div>

            {/* 3. Dedicated Groom (Samju M.C) & Bride (Fahiza K.K) Sections */}
            <CoupleDetails />

            {/* 4. Wedding Venue (Nalanda Convention Centre) & Google Maps */}
            <VenueSection />

            {/* 8. Wedding Moments Gallery with Lightbox */}
            <GallerySection />

            {/* 9. Romantic Literary & Quranic Quotes Carousel */}
            <QuotesSection />
          </main>

          {/* 10. Footer & Closing Gratitude */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
