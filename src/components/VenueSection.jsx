import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider, CornerFlourish } from './FloralDecorations';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Car, Home, Compass } from 'lucide-react';

export const VenueSection = () => {
  const { venue } = weddingData;
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    venue.name + ', ' + venue.address
  )}`;

  return (
    <section id="venue" className="py-24 px-4 bg-cream-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-olive-700 font-semibold">
            Destination &amp; Setting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 mt-1">
            The Wedding Venue
          </h2>
          <BotanicalDivider className="mx-auto" />
          <p className="font-serif italic text-olive-700 text-sm max-w-lg mx-auto mt-2">
            {venue.tagline}
          </p>
        </div>

        {/* Main Grid: Venue Showcase + Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photos & Details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-cream-100/70 p-6 sm:p-8 rounded-3xl border border-gold-300/60 shadow-luxury"
          >
            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-gold-400/50 shadow-md mb-4">
              <img
                src={venue.images[activeImageIdx]}
                alt={venue.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-cream-100 font-serif">
                <span className="text-xs uppercase tracking-widest text-gold-300">Sanctuary</span>
                <h4 className="text-lg font-semibold">{venue.name}</h4>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {venue.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIdx === idx
                      ? 'border-gold-500 scale-102 shadow-md ring-2 ring-gold-400/30'
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Description */}
            <h3 className="font-serif text-2xl text-olive-900 font-semibold mb-2">
              {venue.name}
            </h3>
            <p className="font-serif text-sm text-olive-800 leading-relaxed mb-6">
              {venue.description}
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gold-300/40 pt-6">
              {venue.amenities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-olive-100 flex items-center justify-center text-olive-700 shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                  </div>
                  <div>
                    <h5 className="font-serif font-semibold text-xs uppercase tracking-wider text-olive-900">
                      {item.title}
                    </h5>
                    <p className="font-serif text-xs text-olive-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Address & Interactive Google Maps (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-cream-100/70 p-6 sm:p-8 rounded-3xl border border-gold-300/60 shadow-luxury flex flex-col justify-between h-full relative"
          >
            <CornerFlourish position="top-right" className="absolute top-3 right-3 w-8 h-8 text-gold-500/50" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-olive-800 font-serif text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5 text-gold-600" />
                <span>Location Details</span>
              </div>

              <h4 className="font-serif text-xl font-semibold text-olive-900 mb-2">
                Estate Address
              </h4>
              <p className="font-serif text-sm text-olive-800 leading-relaxed mb-4">
                {venue.address}
                <br />
                <span className="text-olive-600">{venue.cityState}</span>
              </p>

              {/* Embedded Google Map */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-gold-300/60 shadow-inner mb-6 relative bg-cream-200">
                <iframe
                  title="Venue Google Map"
                  src={venue.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-95"
                ></iframe>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gold-300/40">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-100 font-serif text-xs uppercase tracking-widest shadow-sm transition-all hover:shadow-luxury hover:-translate-y-0.5 border border-gold-400/40"
              >
                <ExternalLink className="w-4 h-4 text-gold-400" />
                <span>View Location</span>
              </a>

              <a
                href={getDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-cream-50 hover:bg-cream-200 text-olive-900 font-serif text-xs uppercase tracking-widest shadow-sm transition-all hover:-translate-y-0.5 border border-gold-400/60"
              >
                <Navigation className="w-4 h-4 text-gold-600" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

