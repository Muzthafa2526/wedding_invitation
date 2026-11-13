import React from 'react';
import { weddingData } from '../data/weddingData';
import {
  GoldenDiamondDivider,
  InterlockedGoldenRings,
  GoldenFloralBlossom,
} from './FloralDecorations';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { couple, invitation, venue } = weddingData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-burgundy-900 to-burgundy-950 luxury-fabric-texture pt-20 pb-12 px-4 border-t border-gold-400/40 text-center overflow-hidden">
      {/* Decorative Blossoms */}
      <div className="absolute -bottom-6 -left-6 opacity-30 pointer-events-none hidden sm:block">
        <GoldenFloralBlossom className="w-36 h-36 text-gold-400" />
      </div>
      <div className="absolute -bottom-6 -right-6 opacity-30 pointer-events-none hidden sm:block">
        <GoldenFloralBlossom className="w-36 h-36 text-gold-400" flip={true} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top Blessing Badge */}
        <div className="mb-8">
          <InterlockedGoldenRings className="mx-auto mb-4" />
          <span className="font-serif text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Forever Begins Here
          </span>
          <h2 className="font-calligraphy text-4xl sm:text-6xl text-gold-light font-normal mt-2 mb-3">
            {couple.groom.shortName} <span className="font-serif text-3xl sm:text-4xl text-gold-300 font-light">&amp;</span> {couple.bride.shortName}
          </h2>
          <p className="font-serif text-xs uppercase tracking-[0.25em] text-gold-300">
            {invitation.dateFull} • {venue.name}
          </p>
        </div>

        <GoldenDiamondDivider className="mx-auto" />

        {/* Gratitude Message */}
        <div className="my-8 max-w-xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-gold-light font-semibold mb-3">
            Thank You For Being Part Of Our Special Day
          </h3>
          <p className="font-serif italic text-gold-200/90 text-sm leading-relaxed">
            "Your heartfelt presence, warm blessings, and prayers are the greatest gift as we begin this sacred journey of marriage together."
          </p>
          <p className="font-serif text-xs text-gold-400 tracking-wider mt-4">
            {couple.hashtag}
          </p>
        </div>

        {/* Back To Top Button */}
        <div className="my-8">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-burgundy-900 hover:bg-burgundy-800 border border-gold-400/60 text-gold-200 font-serif text-xs uppercase tracking-widest shadow-gold-glow transition-all hover:-translate-y-1"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-gold-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gold-400/25 text-xs font-serif text-gold-400/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; 2027 {couple.groom.shortName} &amp; {couple.bride.shortName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with devotion for our celebration of love</span>
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
