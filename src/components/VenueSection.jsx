import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider } from './FloralDecorations';
import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export const VenueSection = () => {
  const { venue } = weddingData;
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    venue.name + ', ' + venue.address
  )}`;

  return (
    <section id="venue" className="py-24 px-4 bg-burgundy-900/60 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-invitation-serif italic text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Grand Destination &amp; Location
          </span>
          <h2 className="font-invitation-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            The Wedding Venue
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
          <p className="font-invitation-body italic text-gold-200/90 text-base max-w-lg mx-auto mt-2">
            {venue.tagline}
          </p>
        </div>

        {/* Main Grid: Venue Showcase + Info Card — Borderless */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photos & Details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-gradient-to-b from-burgundy-800/90 to-burgundy-950/95 p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,103,0.15)]"
          >
            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-4">
              <img
                src={venue.images[activeImageIdx]}
                alt={venue.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-5 text-gold-100 font-invitation-serif italic">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold">Ceremony Destination</span>
                <h4 className="text-lg sm:text-xl font-bold text-gold-light">{venue.name}</h4>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {venue.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`aspect-video rounded-xl overflow-hidden transition-all cursor-pointer ${
                    activeImageIdx === idx
                      ? 'scale-102 shadow-lg ring-2 ring-gold-400'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Description */}
            <h3 className="font-invitation-serif italic text-xl sm:text-2xl text-gold-light font-semibold mb-2">
              {venue.name}
            </h3>
            <p className="font-invitation-body italic text-sm sm:text-base text-gold-100/90 leading-relaxed mb-6">
              {venue.description}
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-burgundy-950/50 p-4 rounded-2xl">
              {venue.amenities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-burgundy-900 flex items-center justify-center text-gold-400 shrink-0 mt-0.5 shadow-md">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h5 className="font-invitation-serif italic font-semibold text-xs uppercase tracking-wider text-gold-200">
                      {item.title}
                    </h5>
                    <p className="font-invitation-body italic text-xs sm:text-sm text-gold-300/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Address & Embedded Google Maps (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-gradient-to-b from-burgundy-800/90 to-burgundy-950/95 p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,103,0.15)] flex flex-col justify-between h-full"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-950 text-gold-300 font-invitation-serif italic text-[11px] font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Venue &amp; Coordinates</span>
              </div>

              <h4 className="font-invitation-serif italic text-xl sm:text-2xl font-semibold text-gold-light mb-2">
                Hall Address
              </h4>
              <p className="font-invitation-body italic text-base text-gold-200 leading-relaxed mb-4">
                {venue.address}
                <br />
                <span className="text-gold-400 font-medium font-invitation-serif italic text-sm">{venue.cityState}</span>
              </p>

              {/* Embedded Google Map — Borderless with shadow */}
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl mb-6 relative bg-burgundy-950">
                <iframe
                  title="Nalanda Convention Centre Google Map"
                  src={venue.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-95 invert-[0.85] hue-rotate-[180deg]"
                ></iframe>
              </div>
            </div>

            {/* Action Buttons — Borderless */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy-950/90 hover:bg-burgundy-900 text-gold-200 font-invitation-serif italic text-xs uppercase tracking-widest shadow-md transition-all hover:-translate-y-0.5 cursor-pointer flex-1"
              >
                <span>View On Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              </a>

              <a
                href={getDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full gold-shimmer-btn font-invitation-serif italic text-xs uppercase tracking-widest font-bold shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer flex-1"
              >
                <Navigation className="w-3.5 h-3.5 text-burgundy-950" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
