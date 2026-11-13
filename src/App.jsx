import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLanding } from './components/HeroLanding';
import { InvitationCard } from './components/InvitationCard';
import { CountdownTimer } from './components/CountdownTimer';
import { CoupleDetails } from './components/CoupleDetails';
import { LoveStory } from './components/LoveStory';
import { EventsTimeline } from './components/EventsTimeline';
import { VenueSection } from './components/VenueSection';
import { GallerySection } from './components/GallerySection';
import { QuotesSection } from './components/QuotesSection';
import { RSVPSection } from './components/RSVPSection';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { FallingPetals } from './components/FallingPetals';
import { ShareModal } from './components/ShareModal';

export function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  return (
    <div className="min-h-screen bg-cream-200 text-olive-900 font-sans selection:bg-gold-500 selection:text-white relative">
      {/* Ambient Canvas Falling Petals & Leaves */}
      <FallingPetals />

      {/* Floating Audio Controller */}
      <AudioPlayer />

      {/* Top Navigation */}
      <Navbar
        isOpened={isOpened}
        onOpenInvitation={handleOpenInvitation}
      />

      <main>
        {/* 1. Welcome / Landing Screen with Envelope Opening */}
        <HeroLanding
          isOpened={isOpened}
          onOpenInvitation={handleOpenInvitation}
        />

        {/* 2. Official Wedding Invitation Card */}
        <InvitationCard
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* 3. Live Countdown Timer */}
        <CountdownTimer />

        {/* 4. Bride & Groom Dedicated Details */}
        <CoupleDetails />

        {/* 5. Couple's Romantic Love Story Timeline */}
        <LoveStory />

        {/* 6. Wedding Events & Schedule */}
        <EventsTimeline />

        {/* 7. Wedding Venue / Hall Details & Google Maps */}
        <VenueSection />

        {/* 8. Wedding Moments / Gallery with Lightbox */}
        <GallerySection />

        {/* 9. Romantic Quotes Section */}
        <QuotesSection />

        {/* 10. RSVP Form with WhatsApp integration */}
        <RSVPSection />
      </main>

      {/* 11. Footer & Thank You */}
      <Footer />

      {/* Share Invitation Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}

export default App;
