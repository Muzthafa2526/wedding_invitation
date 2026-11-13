import React from 'react';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider, OliveBranchLeft, OliveBranchRight, LaurelWreath } from './FloralDecorations';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { couple, invitation } = weddingData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-cream-200 pt-20 pb-12 px-4 border-t border-gold-300/40 text-center overflow-hidden">
      {/* Decorative side branches */}
      <div className="absolute -bottom-6 -left-6 opacity-40 pointer-events-none hidden sm:block">
        <OliveBranchLeft className="w-32 h-32 text-olive-600" />
      </div>
      <div className="absolute -bottom-6 -right-6 opacity-40 pointer-events-none hidden sm:block">
        <OliveBranchRight className="w-32 h-32 text-olive-600" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Thank You Note */}
        <div className="mb-12">
          <LaurelWreath className="w-20 h-20 text-gold-500/80 mx-auto mb-4">
            <Heart className="w-6 h-6 text-gold-500 fill-gold-500" />
          </LaurelWreath>

          <span className="font-serif text-xs uppercase tracking-[0.3em] text-olive-700 font-semibold">
            With Heartfelt Gratitude
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl text-olive-900 font-semibold mt-2 mb-4">
            Thank You For Being Part Of Our Story
          </h3>

          <p className="font-serif italic text-olive-800 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            "Your presence, love, and prayers are the greatest gifts we could ever receive as we begin this new chapter of our lives together."
          </p>
        </div>

        <BotanicalDivider className="mx-auto" />

        {/* Couple Names & Date */}
        <div className="my-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-olive-900 font-semibold">
            {couple.bride.firstName} <span className="font-script text-3xl text-gold-600">&amp;</span> {couple.groom.firstName}
          </h2>
          <p className="font-serif text-xs uppercase tracking-widest text-gold-700 mt-2">
            {invitation.dateFormatted} • {weddingData.venue.name}
          </p>
          <p className="font-serif text-xs text-olive-600 tracking-wider mt-1">
            {couple.hashtag}
          </p>
        </div>

        {/* Back To Top Button */}
        <div className="my-8">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cream-50 hover:bg-cream-100 border border-gold-300 text-olive-800 font-serif text-xs uppercase tracking-widest shadow-sm transition-all hover:shadow-luxury hover:-translate-y-1"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-gold-600 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Made with Love credit & copyright */}
        <div className="pt-6 border-t border-gold-300/30 text-xs font-serif text-olive-600/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; 2026 {couple.bride.firstName} &amp; {couple.groom.firstName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-gold-600 fill-gold-600 inline" />
            <span>for our celebration of love</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

