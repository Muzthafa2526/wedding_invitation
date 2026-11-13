import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import {
  InterlockedGoldenRings,
  GoldenDiamondDivider,
  GoldenLaurelSprig,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Clock, MapPin, Calendar, BookmarkPlus, Eye, Sparkles } from 'lucide-react';

export const InvitationMessage = () => {
  const { couple, invitation, venue } = weddingData;
  const [showRealCard, setShowRealCard] = useState(false);

  const downloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Samju & Fahiza Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding of Samju M.C & Fahiza K',
      `DESCRIPTION:${invitation.invitationHeading} at ${venue.name}.`,
      `LOCATION:${venue.name}, ${venue.address}`,
      'DTSTART:20270117T110000',
      'DTEND:20270117T170000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Samju-and-Fahiza-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalUrl = () => {
    const title = encodeURIComponent(`The Wedding of ${couple.groom.fullName} & ${couple.bride.shortName}`);
    const details = encodeURIComponent(`${invitation.invitationHeading}. Ceremony at ${venue.name}.`);
    const location = encodeURIComponent(`${venue.name}, ${venue.address}`);
    const dates = '20270117T053000Z/20270117T113000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <section
      id="invitation-message"
      className="py-24 px-4 bg-burgundy-950 luxury-fabric-texture relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="font-invitation-serif italic text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Sacred Auspices &amp; Blessings
          </span>
          <h2 className="font-invitation-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            Ceremonial Wedding Invitation
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
          <p className="font-invitation-body italic text-gold-200/90 text-base max-w-lg mx-auto mt-2">
            In the name of Almighty, with joyous hearts and loving blessings of our families.
          </p>

          {/* Toggle between Interactive Card & Authentic Invitation Card Artwork */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setShowRealCard(false)}
              className={`px-5 py-2 rounded-full font-invitation-serif italic text-xs uppercase tracking-widest transition-all cursor-pointer ${
                !showRealCard
                  ? 'gold-shimmer-btn shadow-lg font-bold'
                  : 'bg-burgundy-900/80 text-gold-300 hover:bg-burgundy-800'
              }`}
            >
              Interactive Invitation
            </button>
            <button
              onClick={() => setShowRealCard(true)}
              className={`px-5 py-2 rounded-full font-invitation-serif italic text-xs uppercase tracking-widest transition-all cursor-pointer ${
                showRealCard
                  ? 'gold-shimmer-btn shadow-lg font-bold'
                  : 'bg-burgundy-900/80 text-gold-300 hover:bg-burgundy-800'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>Original Card Artwork</span>
              </span>
            </button>
          </div>
        </div>

        {/* View 1: Authentic Full Invitation Card Photo Display */}
        {showRealCard ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,103,0.3)] bg-burgundy-950"
          >
            <img
              src="/invitation-card-full.jpg"
              alt="Authentic Wedding Invitation Card - Nalanda Convention Centre"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ) : (
          /* View 2: The Luxury Digital Ceremony Invitation Card — Borderless */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9 }}
            className="relative bg-gradient-to-b from-burgundy-900/90 via-burgundy-950/95 to-burgundy-950 rounded-3xl p-6 sm:p-12 md:p-14 text-center max-w-2xl mx-auto overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,103,0.25)]"
          >
            {/* Corner Floral Ornaments */}
            <div className="absolute top-4 left-4 pointer-events-none opacity-70">
              <GoldenFloralBlossom className="w-16 h-16 text-gold-400" />
            </div>
            <div className="absolute bottom-4 right-4 pointer-events-none opacity-70">
              <GoldenFloralBlossom className="w-16 h-16 text-gold-400" flip={true} />
            </div>

            {/* 1. Islamic Blessing Greeting */}
            <div className="mb-4 pt-2">
              <h3 className="font-serif italic text-3xl sm:text-4xl text-gold-light font-medium tracking-wide">
                {invitation.assalamuAlaikum}
              </h3>
              <span className="font-invitation-serif italic text-[11px] uppercase tracking-[0.35em] text-gold-400 block mt-1.5 font-semibold">
                {invitation.assalamuAlaikumEn}
              </span>
            </div>

            <GoldenDiamondDivider className="mx-auto max-w-[180px] my-4" />

            {/* 2. Invitation Heading */}
            <p className="font-invitation-body italic text-sm sm:text-base text-gold-200 max-w-md mx-auto leading-relaxed mb-6">
              "{invitation.invitationHeading}"
            </p>

            {/* 3. Couple Names with Flanking Laurel Sprigs */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 my-4">
              <GoldenLaurelSprig direction="left" className="w-6 sm:w-8 h-16 sm:h-20 shrink-0" />
              <div className="text-center">
                <h2 className="font-invitation-script italic text-3xl sm:text-4xl md:text-5xl text-gold-light leading-tight drop-shadow-[0_2px_8px_rgba(212,175,103,0.35)]">
                  {couple.groom.shortName}
                </h2>
                <div className="flex items-center justify-center gap-3 my-1">
                  <span className="font-invitation-script italic text-2xl sm:text-3xl text-gold-300">&amp;</span>
                </div>
                <h2 className="font-invitation-script italic text-3xl sm:text-4xl md:text-5xl text-gold-light leading-tight drop-shadow-[0_2px_8px_rgba(212,175,103,0.35)]">
                  {couple.bride.shortName}
                </h2>
              </div>
              <GoldenLaurelSprig direction="right" className="w-6 sm:w-8 h-16 sm:h-20 shrink-0" />
            </div>

            {/* 4. Interlocked Wedding Rings */}
            <div className="my-4">
              <InterlockedGoldenRings className="mx-auto text-gold-400" />
            </div>

            {/* 5. Formal Ceremony Request */}
            <p className="font-invitation-serif italic text-[11px] sm:text-xs uppercase tracking-[0.24em] text-gold-300 font-bold max-w-md mx-auto leading-relaxed my-5">
              {invitation.ceremonyRequest}
            </p>

            {/* 6. Date Block — Borderless & Elegant */}
            <div className="my-6 py-4 max-w-sm mx-auto bg-burgundy-950/60 rounded-2xl shadow-inner">
              <div className="text-[11px] font-invitation-serif italic uppercase tracking-[0.3em] text-gold-400 mb-1">
                {invitation.dayOfWeek},
              </div>
              <div className="flex items-center justify-center gap-4 sm:gap-6 text-gold-light">
                <span className="font-invitation-serif italic text-xs sm:text-sm tracking-[0.25em] font-semibold">
                  {invitation.monthName}
                </span>
                <span className="font-serif italic text-3xl sm:text-4xl font-bold text-gold-gradient">
                  {invitation.dayNumber}
                </span>
                <span className="font-invitation-serif italic text-xs sm:text-sm tracking-[0.25em] font-semibold">
                  {invitation.yearNumber}
                </span>
              </div>
            </div>

            {/* 7. Time & Venue */}
            <div className="space-y-3 text-gold-200 my-6">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm tracking-widest uppercase font-invitation-serif italic">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>{invitation.timeFormatted}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-gold-light font-bold tracking-wider font-invitation-serif italic">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>{venue.name}</span>
              </div>
            </div>

            {/* 8. Blessing Note */}
            <p className="font-invitation-body italic text-sm sm:text-base text-gold-300/90 max-w-md mx-auto leading-relaxed my-5">
              "{invitation.blessingNote}"
            </p>

            <GoldenDiamondDivider className="mx-auto max-w-[180px] my-4" />

            {/* 9. Insha Allah Calligraphy */}
            <div className="mt-4 mb-2">
              <h4 className="font-serif italic text-3xl sm:text-4xl text-gold-light tracking-wide">
                {invitation.inshaAllah}
              </h4>
              <span className="font-invitation-serif italic text-[10px] uppercase tracking-[0.3em] text-gold-400 block mt-1 font-semibold">
                {invitation.inshaAllahEn}
              </span>
            </div>

            {/* Calendar Actions — Borderless */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-6">
              <button
                onClick={downloadIcs}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-burgundy-950/90 hover:bg-burgundy-900 text-gold-200 font-invitation-serif italic text-xs uppercase tracking-widest shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <BookmarkPlus className="w-3.5 h-3.5 text-gold-400" />
                <span>Download iCal / Outlook</span>
              </button>

              <a
                href={googleCalUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-shimmer-btn font-invitation-serif italic text-xs uppercase tracking-widest font-bold shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-burgundy-950" />
                <span>Add to Google Calendar</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
