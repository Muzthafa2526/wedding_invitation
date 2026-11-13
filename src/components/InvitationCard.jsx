import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { CornerFlourish, BotanicalDivider, LaurelWreath } from './FloralDecorations';
import { Calendar, Clock, MapPin, Share2, BookmarkPlus } from 'lucide-react';

export const InvitationCard = ({ onOpenShare }) => {
  const { couple, invitation, venue } = weddingData;

  // Generate Google Calendar Link
  const googleCalUrl = () => {
    const title = encodeURIComponent(`${couple.bride.firstName} & ${couple.groom.firstName}'s Wedding`);
    const details = encodeURIComponent(`We joyfully invite you to celebrate the wedding of Evelyn Sinclair & Alexander Vance at ${venue.name}.`);
    const location = encodeURIComponent(`${venue.name}, ${venue.address}`);
    // 20261128T160000 to 20261128T235900 (UTC approx or local)
    const dates = '20261128T160000/20261128T235900';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  // Generate .ics download for Apple / Outlook
  const downloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Evelyn & Alexander Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding of Evelyn & Alexander',
      `DESCRIPTION:Celebration of Holy Matrimony & Reception at ${venue.name}`,
      `LOCATION:${venue.name}, ${venue.address}`,
      'DTSTART:20261128T160000',
      'DTEND:20261129T000000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Evelyn-and-Alexander-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="invitation" className="py-20 px-4 bg-cream-100/60 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-olive-700 font-semibold">
            Honoured Invitation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-olive-900 mt-1">
            Save The Date
          </h2>
          <BotanicalDivider className="mx-auto" />
        </div>

        {/* The Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-cream-50 rounded-3xl p-8 sm:p-14 md:p-16 border-card-luxury text-center max-w-3xl mx-auto overflow-hidden shadow-luxury"
        >
          {/* Ornate Corner Flourishes */}
          <CornerFlourish position="top-left" className="absolute top-4 left-4 w-12 sm:w-16 h-12 sm:h-16 text-gold-500/80" />
          <CornerFlourish position="top-right" className="absolute top-4 right-4 w-12 sm:w-16 h-12 sm:h-16 text-gold-500/80" />
          <CornerFlourish position="bottom-left" className="absolute bottom-4 left-4 w-12 sm:w-16 h-12 sm:h-16 text-gold-500/80" />
          <CornerFlourish position="bottom-right" className="absolute bottom-4 right-4 w-12 sm:w-16 h-12 sm:h-16 text-gold-500/80" />

          {/* Inner Decorative Double Border */}
          <div className="absolute inset-4 sm:inset-6 pointer-events-none border border-gold-300/40 rounded-2xl"></div>

          {/* Header Monogram / Laurel */}
          <div className="mb-4">
            <LaurelWreath className="w-24 h-24 text-gold-500/70 mx-auto">
              <span className="font-serif font-bold text-olive-800 text-sm tracking-widest">
                E &amp; A
              </span>
            </LaurelWreath>
          </div>

          {/* Family Invocation */}
          <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-olive-700 mb-2">
            {invitation.hostMessage}
          </p>

          <p className="font-script text-2xl sm:text-3xl text-gold-600 mb-6">
            {invitation.calligraphyTitle}
          </p>

          {/* Bride and Groom Names */}
          <div className="my-6">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 tracking-tight leading-snug">
              {couple.bride.fullName}
            </h3>
            <span className="block my-2 font-script text-3xl sm:text-4xl text-gold-600 font-normal">
              and
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 tracking-tight leading-snug">
              {couple.groom.fullName}
            </h3>
          </div>

          <p className="font-serif text-sm sm:text-base text-olive-700 max-w-lg mx-auto italic my-6 leading-relaxed">
            "{invitation.subMessage}"
          </p>

          <BotanicalDivider className="mx-auto" />

          {/* Date, Time & Venue Block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 text-olive-800 font-serif">
            <div className="flex flex-col items-center p-3 rounded-xl bg-cream-100/60 border border-gold-300/40">
              <Calendar className="w-5 h-5 text-gold-600 mb-1" />
              <span className="text-xs uppercase tracking-widest text-olive-600">The Date</span>
              <span className="font-semibold text-sm sm:text-base mt-0.5">{invitation.dateFormatted}</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-cream-100/60 border border-gold-300/40">
              <Clock className="w-5 h-5 text-gold-600 mb-1" />
              <span className="text-xs uppercase tracking-widest text-olive-600">The Time</span>
              <span className="font-semibold text-sm sm:text-base mt-0.5">{invitation.timeFormatted}</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-cream-100/60 border border-gold-300/40">
              <MapPin className="w-5 h-5 text-gold-600 mb-1" />
              <span className="text-xs uppercase tracking-widest text-olive-600">The Venue</span>
              <span className="font-semibold text-sm sm:text-base mt-0.5 text-center leading-tight">{venue.name}</span>
            </div>
          </div>

          {/* Dress Code Note */}
          <div className="inline-block px-5 py-2 rounded-full bg-olive-50 border border-olive-200 text-xs text-olive-800 font-serif tracking-wider mb-8">
            <strong className="text-olive-900">Attire:</strong> {invitation.dressCode}
          </div>

          {/* Action Buttons: Add to Calendar & Share */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={downloadIcs}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-100 font-serif text-xs uppercase tracking-widest shadow-sm transition-all hover:shadow-luxury hover:-translate-y-0.5 border border-gold-400/40"
            >
              <BookmarkPlus className="w-4 h-4 text-gold-400" />
              <span>Download iCal / Outlook</span>
            </button>

            <a
              href={googleCalUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-olive-900 font-serif text-xs uppercase tracking-widest shadow-sm transition-all hover:-translate-y-0.5 border border-gold-400/60"
            >
              <Calendar className="w-4 h-4 text-gold-600" />
              <span>Google Calendar</span>
            </a>

            <button
              onClick={onOpenShare}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-olive-900 font-serif text-xs uppercase tracking-widest shadow-sm transition-all hover:-translate-y-0.5 border border-gold-400/60"
            >
              <Share2 className="w-4 h-4 text-gold-600" />
              <span>Share Invitation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

