import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import {
  InterlockedGoldenRings,
  GoldenDiamondDivider,
  GoldenLaurelSprig,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Clock, MapPin } from 'lucide-react';

export const InvitationMessage = () => {
  const { couple, invitation, venue } = weddingData;

  return (
    <section
      id="invitation-message"
      className="pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 bg-burgundy-950/80 luxury-fabric-texture relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-invitation-serif text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Sacred Auspices &amp; Blessings
          </span>
          <h2 className="font-invitation-serif text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            Ceremonial Wedding Invitation
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
          <p className="font-invitation-body italic text-gold-200/90 text-base max-w-lg mx-auto mt-2">
            In the name of Almighty, with joyous hearts and loving blessings of our families.
          </p>
        </div>

        {/* The Luxury Ceremony Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="relative bg-gradient-to-b from-burgundy-900 via-burgundy-950 to-burgundy-950 rounded-3xl p-6 sm:p-12 md:p-14 border-gold-card text-center max-w-2xl mx-auto overflow-hidden shadow-2xl"
        >
          {/* Thin Metallic Gold Inner Frame */}
          <div className="absolute inset-3 sm:inset-5 pointer-events-none border border-gold-400/60 rounded-2xl"></div>
          <div className="absolute inset-4 sm:inset-6 pointer-events-none border border-gold-300/30 rounded-xl"></div>

          {/* Corner Floral Ornaments */}
          <div className="absolute top-4 left-4 pointer-events-none opacity-80">
            <GoldenFloralBlossom className="w-16 h-16 text-gold-400" />
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none opacity-80">
            <GoldenFloralBlossom className="w-16 h-16 text-gold-400" flip={true} />
          </div>

          {/* 1. Islamic Blessing Greeting */}
          <div className="mb-4 pt-2">
            <h3 className="font-serif text-3xl sm:text-4xl text-gold-light font-medium tracking-wide">
              {invitation.assalamuAlaikum}
            </h3>
            <span className="font-invitation-serif text-[11px] uppercase tracking-[0.35em] text-gold-400 block mt-1.5 font-semibold">
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
              <h2 className="font-invitation-script text-3xl sm:text-4xl md:text-5xl text-gold-light leading-tight drop-shadow-[0_2px_8px_rgba(212,175,103,0.35)]">
                {couple.groom.shortName}
              </h2>
              <div className="flex items-center justify-center gap-3 my-1">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold-400"></div>
                <span className="font-invitation-script text-2xl sm:text-3xl text-gold-300">&amp;</span>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold-400"></div>
              </div>
              <h2 className="font-invitation-script text-3xl sm:text-4xl md:text-5xl text-gold-light leading-tight drop-shadow-[0_2px_8px_rgba(212,175,103,0.35)]">
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
          <p className="font-invitation-serif text-[11px] sm:text-xs uppercase tracking-[0.24em] text-gold-300 font-bold max-w-md mx-auto leading-relaxed my-5">
            {invitation.ceremonyRequest}
          </p>

          {/* 6. Framed Date Block */}
          <div className="my-6 py-4 border-t border-b border-gold-400/50 max-w-sm mx-auto">
            <div className="text-[11px] font-invitation-serif uppercase tracking-[0.3em] text-gold-400 mb-1">
              {invitation.dayOfWeek},
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-5 text-gold-light">
              <span className="font-invitation-serif text-xs sm:text-sm tracking-[0.25em] font-semibold">
                {invitation.monthName}
              </span>
              <div className="h-7 w-[1px] bg-gold-400/60"></div>
              <span className="font-serif text-3xl sm:text-4xl font-bold italic text-gold-gradient">
                {invitation.dayNumber}
              </span>
              <div className="h-7 w-[1px] bg-gold-400/60"></div>
              <span className="font-invitation-serif text-xs sm:text-sm tracking-[0.25em] font-semibold">
                {invitation.yearNumber}
              </span>
            </div>
          </div>

          {/* 7. Time & Venue */}
          <div className="space-y-3 text-gold-200 my-6">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm tracking-widest uppercase font-invitation-serif">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>{invitation.timeFormatted}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-gold-light font-bold tracking-wider font-invitation-serif">
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
            <h4 className="font-serif text-3xl sm:text-4xl text-gold-light tracking-wide">
              {invitation.inshaAllah}
            </h4>
            <span className="font-invitation-serif text-[10px] uppercase tracking-[0.3em] text-gold-400 block mt-1 font-semibold">
              {invitation.inshaAllahEn}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
