import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider, GoldenFloralBlossom } from './FloralDecorations';
import { Wine, HeartHandshake, Sparkles, Clock, MapPin, Calendar, Shirt } from 'lucide-react';

const eventIcons = {
  Wine: Wine,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
};

export const EventsTimeline = () => {
  const { events, couple, venue } = weddingData;

  const createEventCalUrl = (event) => {
    const title = encodeURIComponent(`${couple.groom.shortName} & ${couple.bride.shortName}: ${event.title}`);
    const details = encodeURIComponent(`${event.subtitle}. Venue: ${event.venue}. Dress code: ${event.dressCode}`);
    const location = encodeURIComponent(`${event.venue}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="events" className="py-24 px-4 bg-burgundy-950 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Wedding Itinerary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light mt-1">
            Celebration Events
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
          <p className="font-serif italic text-gold-200/90 text-sm max-w-lg mx-auto mt-2">
            We warmly invite you to partake in each of our sacred ceremonies and joyful celebrations.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = eventIcons[event.icon] || Sparkles;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-gradient-to-b from-burgundy-900 to-burgundy-950 p-6 sm:p-8 rounded-3xl border border-gold-400/50 shadow-gold-glow hover:border-gold-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-burgundy-800 border border-gold-400 flex items-center justify-center text-gold-300 group-hover:bg-gold-500 group-hover:text-burgundy-950 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-serif font-semibold px-3 py-1 rounded-full bg-burgundy-900 border border-gold-400/60 text-gold-300">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-gold-light font-semibold mb-1 group-hover:text-gold-gradient transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-serif text-xs text-gold-300/80 italic mb-4">
                    {event.subtitle}
                  </p>

                  {/* Metadata Details */}
                  <div className="space-y-2.5 text-xs sm:text-sm font-serif text-gold-100 mb-4 border-t border-b border-gold-400/30 py-3.5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                      <span className="font-medium text-gold-200">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-gold-400 shrink-0" />
                      <span className="text-gold-300">Dress: {event.dressCode}</span>
                    </div>
                  </div>

                  <p className="font-serif text-xs text-gold-200/80 leading-relaxed mb-6">
                    {event.notes}
                  </p>
                </div>

                {/* Event Calendar Link */}
                <div className="pt-2">
                  <a
                    href={createEventCalUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-serif text-gold-400 hover:text-gold-200 font-semibold transition-colors"
                  >
                    <span>Add event to calendar</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
