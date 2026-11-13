import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider } from './FloralDecorations';
import { Wine, HeartHandshake, Sparkles, Clock, MapPin, Calendar, Shirt } from 'lucide-react';

const eventIcons = {
  Wine: Wine,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
};

export const EventsTimeline = () => {
  const { events, couple } = weddingData;

  const createEventCalUrl = (event) => {
    const title = encodeURIComponent(`${couple.groom.shortName} & ${couple.bride.shortName}: ${event.title}`);
    const details = encodeURIComponent(`${event.subtitle}. Venue: ${event.venue}. Dress code: ${event.dressCode}`);
    const location = encodeURIComponent(`${event.venue}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="events" className="py-24 px-4 bg-burgundy-950/80 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-invitation-serif italic text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Wedding Itinerary
          </span>
          <h2 className="font-invitation-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            Celebration Events
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
          <p className="font-invitation-body italic text-gold-200/90 text-base max-w-lg mx-auto mt-2">
            We warmly invite you to partake in each of our sacred ceremonies and joyful celebrations.
          </p>
        </div>

        {/* Events Grid — Borderless */}
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
                className="relative bg-gradient-to-b from-burgundy-900/90 to-burgundy-950/95 p-6 sm:p-7 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,103,0.15)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,103,0.3)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-burgundy-800 flex items-center justify-center text-gold-300 shadow-md group-hover:bg-gold-500 group-hover:text-burgundy-950 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-invitation-serif italic font-semibold px-3 py-1 rounded-full bg-burgundy-950 text-gold-300 shadow-sm">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-invitation-serif italic text-lg sm:text-xl text-gold-light font-semibold mb-1 group-hover:text-gold-gradient transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-invitation-body text-xs text-gold-300/80 italic mb-4">
                    {event.subtitle}
                  </p>

                  {/* Metadata Details — Borderless with subtle backdrop */}
                  <div className="space-y-2 text-xs font-invitation-body italic text-gold-100 mb-4 bg-burgundy-950/50 p-3 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="font-medium text-gold-200">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shirt className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="text-gold-300">Dress: {event.dressCode}</span>
                    </div>
                  </div>

                  <p className="font-invitation-body italic text-xs text-gold-200/80 leading-relaxed mb-5">
                    {event.notes}
                  </p>
                </div>

                {/* Event Calendar Link */}
                <div className="pt-2">
                  <a
                    href={createEventCalUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-invitation-serif italic text-gold-400 hover:text-gold-200 font-semibold transition-colors"
                  >
                    <span>Add to calendar</span>
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
