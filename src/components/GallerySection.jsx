import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider } from './FloralDecorations';
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';

export const GallerySection = () => {
  const { gallery } = weddingData;
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % gallery.length);
    }
  };

  const showPrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + gallery.length) % gallery.length
      );
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, gallery.length]);

  return (
    <section id="gallery" className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="font-invitation-serif italic text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Visual Anthology
          </span>
          <h2 className="font-invitation-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            Wedding Moments &amp; Memories
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
          <p className="font-invitation-body italic text-gold-200/90 text-base max-w-lg mx-auto mt-2">
            Cherished glimpses of devotion, smiles, and the journey leading to our sacred day.
          </p>
        </div>

        {/* Dedicated "Moments" Button (No Category Filters) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-7 py-2.5 rounded-full gold-shimmer-btn font-invitation-serif italic text-xs uppercase tracking-[0.25em] font-bold shadow-lg select-none">
            <Camera className="w-3.5 h-3.5 text-burgundy-950" />
            <span>Moments</span>
            <Sparkles className="w-3 h-3 text-burgundy-950 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </div>

        {/* Masonry-Style Grid — Displaying all Wedding Moments */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {gallery.map((item, index) => {
              const isTall = item.aspect === 'portrait';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => openLightbox(index)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-burgundy-950/85 backdrop-blur-md border border-gold-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,103,0.15)] hover:border-gold-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,103,0.3)] transition-all duration-500 ${
                    isTall ? 'sm:row-span-2' : ''
                  }`}
                  style={{ minHeight: isTall ? '400px' : '260px' }}
                >
                  {/* Photo */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Dark Burgundy & Gold Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-950/90 border border-gold-400/50 text-gold-300 text-[10px] font-invitation-serif italic uppercase tracking-widest mb-2 shadow-sm">
                        <Camera className="w-3 h-3 text-gold-400" />
                        <span>Moments</span>
                      </div>
                      <h4 className="font-invitation-serif italic text-lg text-gold-light font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="font-invitation-body text-xs text-gold-200/90 italic">
                        {item.caption}
                      </p>
                    </div>

                    {/* Magnifier Icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-burgundy-950/90 border border-gold-400/70 shadow-md flex items-center justify-center text-gold-300 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-4 h-4 text-gold-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-burgundy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-burgundy-950/80 border border-gold-400/60 text-gold-200 hover:text-white transition-colors z-50 cursor-pointer shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-burgundy-950/80 border border-gold-400/60 text-gold-200 hover:text-white transition-colors z-50 cursor-pointer shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-burgundy-950/80 border border-gold-400/60 text-gold-200 hover:text-white transition-colors z-50 cursor-pointer shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Box */}
            <div
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={gallery[activeLightboxIndex].url}
                src={gallery[activeLightboxIndex].url}
                alt={gallery[activeLightboxIndex].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-gold-400/50 shadow-2xl"
              />

              {/* Caption */}
              <div className="mt-4 text-center text-gold-100">
                <span className="font-invitation-serif italic text-xs uppercase tracking-widest text-gold-400">
                  {activeLightboxIndex + 1} / {gallery.length} • Moments
                </span>
                <h3 className="font-invitation-serif italic text-lg font-semibold mt-1 text-gold-light">
                  {gallery[activeLightboxIndex].title}
                </h3>
                <p className="font-invitation-body text-sm text-gold-200/90 italic mt-0.5">
                  {gallery[activeLightboxIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
