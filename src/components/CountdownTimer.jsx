import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider } from './FloralDecorations';
import { Clock, Heart } from 'lucide-react';

export const CountdownTimer = () => {
  const { weddingDateISO } = weddingData.invitation;

  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDateISO) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDateISO]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 bg-cream-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive-100 text-olive-800 border border-olive-300 text-xs font-serif uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-gold-600 fill-gold-600" />
            Until We Say "I Do"
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-olive-900">
            Counting Down The Moments
          </h2>
          <BotanicalDivider className="mx-auto" />
        </motion.div>

        {/* The 4 Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-2xl mx-auto">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-cream-50 border border-gold-300/60 shadow-luxury flex flex-col items-center justify-center group hover:border-gold-400 transition-colors"
            >
              {/* Corner delicate dots */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>

              {/* Number */}
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-olive-900 group-hover:text-gold-700 transition-colors tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>

              {/* Unit Label */}
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-olive-600 mt-2">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-serif italic text-olive-700/80 text-sm mt-8">
          November 28, 2026 • The Grand Belmond Villa
        </p>
      </div>
    </section>
  );
};

