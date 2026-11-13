import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider } from './FloralDecorations';
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection = () => {
  const { gallery } = weddingData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['All', 'Portraits', 'Moments', 'Details', 'Candids'];

  const filteredImages = selectedCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredImages.length);
    }
  };

  const showPrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredImages.length) % filteredImages.length
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
  }, [activeLightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className="py-24 px-4 bg-burgundy-950 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-invitation-serif text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Visual Anthology
          </span>
          <h2 className="font-invitation-serif text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            Wedding Moments &amp; Memories
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
          <p className="font-invitation-body italic text-gold-200/90 text-base max-w-lg mx-auto mt-2">
            Cherished glimpses of devotion, smiles, and the journey leading to our sacred day.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-invitation-serif text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'gold-shimmer-btn font-bold shadow-md'
                  : 'bg-burgundy-900 text-gold-300 hover:bg-burgundy-800 border border-gold-400/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((item, index) => {
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
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-burgundy-900 border border-gold-400/50 shadow-gold-glow hover:border-gold-300 hover:shadow-gold-glow-lg transition-all duration-500 ${
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
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-900/80 border border-gold-400/60 text-gold-300 text-[10px] font-invitation-serif uppercase tracking-widest mb-2">
                        <Camera className="w-3 h-3 text-gold-400" />
                        <span>{item.category}</span>
                      </div>
                      <h4 className="font-invitation-serif text-lg text-gold-light font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="font-invitation-body text-xs text-gold-200/90 italic">
                        {item.caption}
                      </p>
                    </div>

                    {/* Magnifier Icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-burgundy-900/80 border border-gold-400 flex items-center justify-center text-gold-300 transform scale-75 group-hover:scale-100 transition-transform duration-300">
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
              className="absolute top-6 right-6 p-2 rounded-full bg-burgundy-900/80 border border-gold-400 text-gold-200 hover:text-white transition-colors z-50 cursor-pointer"
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
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-burgundy-900/80 border border-gold-400 text-gold-200 hover:text-white transition-colors z-50 cursor-pointer"
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
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-burgundy-900/80 border border-gold-400 text-gold-200 hover:text-white transition-colors z-50 cursor-pointer"
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
                key={filteredImages[activeLightboxIndex].url}
                src={filteredImages[activeLightboxIndex].url}
                alt={filteredImages[activeLightboxIndex].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border-2 border-gold-400/80 shadow-2xl"
              />

              {/* Caption */}
              <div className="mt-4 text-center text-gold-100">
                <span className="font-invitation-serif text-xs uppercase tracking-widest text-gold-400">
                  {activeLightboxIndex + 1} / {filteredImages.length} • {filteredImages[activeLightboxIndex].category}
                </span>
                <h3 className="font-invitation-serif text-lg font-semibold mt-1 text-gold-light">
                  {filteredImages[activeLightboxIndex].title}
                </h3>
                <p className="font-invitation-body text-sm text-gold-200/90 italic mt-0.5">
                  {filteredImages[activeLightboxIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
