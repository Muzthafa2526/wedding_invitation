import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider } from './FloralDecorations';
import { Quote } from 'lucide-react';

export const QuotesSection = () => {
  const { quotes } = weddingData;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-20 px-4 bg-burgundy-950/70 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-burgundy-900/90 mx-auto flex items-center justify-center text-gold-300 shadow-[0_0_20px_rgba(212,175,103,0.3)] mb-6">
          <Quote className="w-5 h-5 rotate-180 text-gold-400" />
        </div>

        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <blockquote className="font-invitation-script italic text-2xl sm:text-3xl md:text-4xl text-gold-light leading-relaxed drop-shadow-[0_2px_12px_rgba(212,175,103,0.3)] max-w-2xl mx-auto">
                "{quotes[currentIndex].quote}"
              </blockquote>

              <div className="mt-5 flex flex-col items-center">
                <span className="font-invitation-serif italic text-xs uppercase tracking-[0.28em] text-gold-300 font-semibold">
                  {quotes[currentIndex].author}
                </span>
                {quotes[currentIndex].work && (
                  <span className="font-invitation-body text-xs text-gold-400/90 italic mt-0.5">
                    — {quotes[currentIndex].work}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to quote ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-gold-400' : 'w-2 bg-gold-600/50 hover:bg-gold-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
