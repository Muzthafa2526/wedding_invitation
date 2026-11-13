import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider, LaurelWreath } from './FloralDecorations';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const QuotesSection = () => {
  const { quotes } = weddingData;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-20 px-4 bg-cream-50 relative overflow-hidden border-t border-b border-gold-300/40">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-olive-100 border border-gold-300 mx-auto flex items-center justify-center text-gold-600 mb-6">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-olive-900 leading-relaxed italic max-w-2xl mx-auto">
                "{quotes[currentIndex].quote}"
              </blockquote>

              <div className="mt-6 flex flex-col items-center">
                <span className="font-serif text-sm uppercase tracking-[0.25em] text-olive-800 font-semibold">
                  {quotes[currentIndex].author}
                </span>
                {quotes[currentIndex].work && (
                  <span className="font-serif text-xs text-gold-700 italic mt-0.5">
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
                currentIndex === idx ? 'w-8 bg-gold-600' : 'w-2 bg-gold-300 hover:bg-gold-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

