import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider, CornerFlourish } from './FloralDecorations';
import { Wine, HeartHandshake, Sparkles, Music, Clock, MapPin, Calendar, Shirt } from 'lucide-react';

const eventIcons = {
  Wine: Wine,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  Music: Music,
};

export const EventsTimeline = () => {
  const { events } = weddingData;

  const createEventCalUrl = (event) => {
    const title = encodeURIComponent(`E&A Wedding: ${event.title}`);
    const details = encodeURIComponent(`${event.subtitle}. Venue: ${event.venue}. Dress code: ${event.dressCode}`);
    const location = encodeURIComponent(`${event.venue}, Monteverde Hills`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="events" className="py-24 px-4 bg-cream-100 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-olive-700 font-semibold">
            Wedding Itinerary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 mt-1">
            Celebration Events
          </h2>
          <BotanicalDivider className="mx-auto" />
          <p className="font-serif italic text-olive-700 text-sm max-w-lg mx-auto mt-2">
            We invite you to join us across these moments of joy, gratitude, and music.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const IconComponent = eventIcons[event.icon] || Sparkles;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-cream-50 p-6 sm:p-8 rounded-3xl border border-gold-300/60 shadow-luxury hover:border-gold-400 hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <CornerFlourish position="top-right" className="absolute top-3 right-3 w-7 h-7 text-gold-500/50" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-olive-100 border border-gold-300 flex items-center justify-center text-olive-800 group-hover:bg-olive-700 group-hover:text-gold-200 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-serif font-semibold px-3 py-1 rounded-full bg-cream-200 border border-gold-300 text-olive-800">
                      Part 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-olive-900 font-semibold mb-1 group-hover:text-gold-700 transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-serif text-xs text-olive-600 italic mb-4">
                    {event.subtitle}
                  </p>

                  {/* Metadata Details */}
                  <div className="space-y-2 text-xs sm:text-sm font-serif text-olive-800 mb-4 border-t border-b border-gold-300/30 py-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                      <span className="font-medium">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-gold-600 shrink-0" />
                      <span className="text-olive-700">Dress Code: {event.dressCode}</span>
                    </div>
                  </div>

                  <p className="font-serif text-xs text-olive-700/80 leading-relaxed mb-6">
                    {event.notes}
                  </p>
                </div>

                {/* Event Calendar Link */}
                <div className="pt-2">
                  <a
                    href={createEventCalUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-serif text-olive-700 hover:text-gold-600 font-semibold transition-colors"
                  >
                    <span>Add this event to calendar</span>
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

