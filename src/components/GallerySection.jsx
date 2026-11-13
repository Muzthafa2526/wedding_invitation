import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider } from './FloralDecorations';
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
    <section id="gallery" className="py-24 px-4 bg-cream-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-olive-700 font-semibold">
            Captured Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 mt-1">
            Moments In Time
          </h2>
          <BotanicalDivider className="mx-auto" />
          <p className="font-serif italic text-olive-700 text-sm max-w-lg mx-auto mt-2">
            A visual anthology of quiet laughter, whispered vows, and sunsets shared together.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-serif text-xs uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-olive-700 text-cream-100 shadow-md border border-gold-400/50'
                  : 'bg-cream-100 text-olive-800 hover:bg-cream-50 border border-gold-300/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staggered / Masonry-style Grid */}
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
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-cream-50 border-2 border-gold-300/50 shadow-luxury hover:border-gold-500 hover:shadow-luxury-hover transition-all duration-500 ${
                    isTall ? 'sm:row-span-2' : ''
                  }`}
                  style={{ minHeight: isTall ? '420px' : '260px' }}
                >
                  {/* Photo */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Dark Olive & Gold Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/85 via-olive-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream-100/20 backdrop-blur-md text-gold-300 text-xs font-serif uppercase tracking-widest mb-2">
                        <Camera className="w-3 h-3" />
                        <span>{item.category}</span>
                      </div>
                      <h4 className="font-serif text-xl text-cream-100 font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="font-serif text-xs text-cream-200/90 italic">
                        {item.caption}
                      </p>
                    </div>

                    {/* Magnifier Icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-100/20 backdrop-blur-md flex items-center justify-center text-gold-300 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-olive-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20 hover:text-gold-300 transition-colors z-50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20 hover:text-gold-300 transition-colors z-50"
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
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20 hover:text-gold-300 transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Container */}
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
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border-2 border-gold-400/50 shadow-2xl"
              />

              {/* Caption Bar */}
              <div className="mt-4 text-center text-cream-100 font-serif">
                <span className="text-xs uppercase tracking-widest text-gold-400">
                  {activeLightboxIndex + 1} / {filteredImages.length} • {filteredImages[activeLightboxIndex].category}
                </span>
                <h3 className="text-lg font-semibold mt-0.5">
                  {filteredImages[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-cream-200/80 italic mt-1">
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

