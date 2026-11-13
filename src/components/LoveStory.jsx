import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider } from './FloralDecorations';
import { BookOpen, Compass, Sun, Gem, Heart, MapPin } from 'lucide-react';

const iconMap = {
  BookOpen: BookOpen,
  Compass: Compass,
  Sun: Sun,
  Gem: Gem,
  Heart: Heart,
};

export const LoveStory = () => {
  const { loveStory } = weddingData;

  return (
    <section id="story" className="py-24 px-4 bg-cream-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-olive-700 font-semibold">
            How Forever Began
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 mt-1">
            Our Love Story
          </h2>
          <BotanicalDivider className="mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Golden Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold-300 via-olive-400 to-gold-400"></div>

          <div className="space-y-12 md:space-y-16">
            {loveStory.map((chapter, index) => {
              const IconComponent = iconMap[chapter.icon] || Heart;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={chapter.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="bg-cream-50 p-6 sm:p-8 rounded-2xl border border-gold-300/60 shadow-luxury hover:border-gold-400 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-olive-100 text-olive-800 font-serif text-xs font-semibold uppercase tracking-wider">
                          {chapter.year}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gold-700 font-serif">
                          <MapPin className="w-3.5 h-3.5" />
                          {chapter.location}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-olive-900 font-semibold mb-2 group-hover:text-gold-700 transition-colors">
                        {chapter.title}
                      </h3>

                      <p className="font-serif text-sm text-olive-800 leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="my-4 md:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cream-100 border-2 border-gold-500 shadow-md text-olive-800 shrink-0">
                    <IconComponent className="w-5 h-5 text-gold-600" />
                  </div>

                  {/* Empty counterpart spacer for alternating desktop layout */}
                  <div className="hidden md:block w-1/2 md:px-8"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

