import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider } from './FloralDecorations';
import { BookOpen, Compass, Gem, Heart, MapPin } from 'lucide-react';

const iconMap = {
  BookOpen: BookOpen,
  Compass: Compass,
  Gem: Gem,
  Heart: Heart,
};

export const LoveStory = () => {
  const { loveStory } = weddingData;

  return (
    <section id="story" className="py-24 px-4 bg-burgundy-900 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-invitation-serif text-xs md:text-sm uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Our Journey of Love
          </span>
          <h2 className="font-invitation-serif text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1.5">
            How Forever Began
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Golden Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold-400/20 via-gold-400 to-gold-400/20"></div>

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
                    <div className="bg-gradient-to-b from-burgundy-800 to-burgundy-950 p-6 sm:p-7 rounded-2xl border border-gold-400/50 shadow-gold-glow hover:border-gold-300 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-burgundy-900 border border-gold-400/60 text-gold-300 font-invitation-serif text-[11px] font-semibold uppercase tracking-wider">
                          {chapter.year}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gold-400 font-invitation-serif">
                          <MapPin className="w-3.5 h-3.5" />
                          {chapter.location}
                        </span>
                      </div>

                      <h3 className="font-invitation-serif text-lg sm:text-xl text-gold-light font-semibold mb-2 group-hover:text-gold-gradient transition-colors">
                        {chapter.title}
                      </h3>

                      <p className="font-invitation-body text-sm sm:text-base text-gold-100/90 leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="my-4 md:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-burgundy-950 border-2 border-gold-400 shadow-gold-glow text-gold-300 shrink-0">
                    <IconComponent className="w-5 h-5 text-gold-400" />
                  </div>

                  {/* Spacer for alternating layout */}
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
