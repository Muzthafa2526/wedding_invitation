import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import {
  InterlockedGoldenRings,
  GoldenDiamondDivider,
  GoldenLaurelSprig,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Clock, MapPin, Calendar, BookmarkPlus } from 'lucide-react';

export const InvitationMessage = () => {
  const { couple, invitation, venue } = weddingData;

  // Calendar event generator
  const downloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Samju & Fahiza Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding of Samju M.C & Fahiza K.K',
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
    const title = encodeURIComponent(`The Wedding of ${couple.groom.fullName} & ${couple.bride.fullName}`);
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Sacred Auspices &amp; Blessings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light mt-1">
            Wedding Invitation Card
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
        </div>

        {/* The Luxury Invitation Card (Modeled precisely after reference image) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="relative bg-gradient-to-b from-burgundy-800 via-burgundy-900 to-burgundy-950 rounded-3xl p-8 sm:p-14 md:p-16 border-gold-card text-center max-w-2xl mx-auto overflow-hidden shadow-2xl"
        >
          {/* Ornate Gold Frame Lines with corner notches */}
          <div className="absolute inset-3 sm:inset-5 pointer-events-none border border-gold-400/60 rounded-2xl"></div>
          <div className="absolute inset-4 sm:inset-6 pointer-events-none border border-gold-300/30 rounded-xl"></div>

          {/* Corner Floral Ornaments */}
          <div className="absolute top-4 left-4 pointer-events-none opacity-80">
            <GoldenFloralBlossom className="w-16 h-16 text-gold-400" />
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none opacity-80">
            <GoldenFloralBlossom className="w-16 h-16 text-gold-400" flip={true} />
          </div>

          {/* 1. Arabic Greeting */}
          <div className="mb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-gold-light font-medium tracking-wide">
              {invitation.assalamuAlaikum}
            </h3>
            <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-gold-400 block mt-1">
              {invitation.assalamuAlaikumEn}
            </span>
          </div>

          <GoldenDiamondDivider className="mx-auto max-w-[180px] my-3" />

          {/* 2. Invitation Heading */}
          <p className="font-serif italic text-sm sm:text-base text-gold-200/95 max-w-md mx-auto leading-relaxed mt-2 mb-6">
            "{invitation.invitationHeading}"
          </p>

          {/* 3. Couple Names with Flanking Laurel Sprigs */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 my-4">
            <GoldenLaurelSprig direction="left" className="w-6 sm:w-8 h-16 sm:h-20 shrink-0" />
            <div className="text-center">
              <h2 className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-gold-light leading-tight drop-shadow-[0_2px_8px_rgba(212,175,103,0.3)]">
                {couple.groom.shortName}
              </h2>
              <div className="flex items-center justify-center gap-3 my-1">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold-400"></div>
                <span className="font-calligraphy text-2xl sm:text-3xl text-gold-300">&amp;</span>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold-400"></div>
              </div>
              <h2 className="font-calligraphy text-4xl sm:text-5xl md:text-6xl text-gold-light leading-tight drop-shadow-[0_2px_8px_rgba(212,175,103,0.3)]">
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
          <p className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gold-300 font-semibold max-w-md mx-auto leading-relaxed my-4">
            {invitation.ceremonyRequest}
          </p>

          {/* 6. Date Block (Framed exactly like reference image) */}
          <div className="my-6 py-4 border-t border-b border-gold-400/50 max-w-sm mx-auto">
            <div className="text-[11px] font-serif uppercase tracking-[0.3em] text-gold-400 mb-1">
              {invitation.dayOfWeek},
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-5 text-gold-light">
              <span className="font-serif text-sm sm:text-base tracking-[0.25em] font-semibold">
                {invitation.monthName}
              </span>
              <div className="h-8 w-[1px] bg-gold-400/60"></div>
              <span className="font-serif text-4xl sm:text-5xl font-bold italic text-gold-gradient">
                {invitation.dayNumber}
              </span>
              <div className="h-8 w-[1px] bg-gold-400/60"></div>
              <span className="font-serif text-sm sm:text-base tracking-[0.25em] font-semibold">
                {invitation.yearNumber}
              </span>
            </div>
          </div>

          {/* 7. Time & Venue */}
          <div className="space-y-3 font-serif text-gold-200 my-6">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm tracking-widest uppercase">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>{invitation.timeFormatted}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gold-light font-semibold tracking-wider">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>{venue.name}</span>
            </div>
          </div>

          {/* 8. Blessing Note */}
          <p className="font-serif italic text-xs sm:text-sm text-gold-300/90 max-w-md mx-auto leading-relaxed my-5">
            "{invitation.blessingNote}"
          </p>

          <GoldenDiamondDivider className="mx-auto max-w-[180px] my-4" />

          {/* 9. Bottom Insha Allah Calligraphy */}
          <div className="mt-4 mb-2">
            <h4 className="font-serif text-2xl sm:text-3xl text-gold-light tracking-wide">
              {invitation.inshaAllah}
            </h4>
            <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-gold-400 block mt-1">
              {invitation.inshaAllahEn}
            </span>
          </div>

          {/* Action Buttons: Add to Calendar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-6 border-t border-gold-400/30">
            <button
              onClick={downloadIcs}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-burgundy-950 hover:bg-burgundy-900 text-gold-200 font-serif text-xs uppercase tracking-widest border border-gold-400/60 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <BookmarkPlus className="w-3.5 h-3.5 text-gold-400" />
              <span>Download iCal / Outlook</span>
            </button>

            <a
              href={googleCalUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-shimmer-btn font-serif text-xs uppercase tracking-widest font-bold shadow-md transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-burgundy-950" />
              <span>Google Calendar</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
