import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { GoldenDiamondDivider, InterlockedGoldenRings } from './FloralDecorations';
import { Sparkles } from 'lucide-react';

export const CountdownTimer = () => {
  const { weddingDateISO } = weddingData.invitation;

  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDateISO) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: false,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      };
    } else {
      timeLeft.isExpired = true;
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
    <section className="py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-950/80 text-gold-300 border border-gold-400/30 text-xs font-invitation-serif uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Until We Say "Qubool Hai"
          </div>
          <h2 className="font-invitation-serif text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1">
            Counting Down The Auspicious Moments
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
        </motion.div>

        {timeLeft.isExpired ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-3xl bg-burgundy-950/80 backdrop-blur-md border border-gold-400/30 max-w-lg mx-auto my-8 shadow-2xl"
          >
            <InterlockedGoldenRings className="mx-auto mb-4" />
            <h3 className="font-invitation-serif text-2xl text-gold-light font-bold mb-2">
              Today Is The Day!
            </h3>
            <p className="font-invitation-body text-gold-200">
              The wedding celebration of Samju M.C &amp; Fahiza K.K is taking place right now!
            </p>
          </motion.div>
        ) : (
          /* The 4 Countdown Cards */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-2xl mx-auto">
            {units.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-5 sm:p-6 rounded-2xl bg-burgundy-950/80 backdrop-blur-md border border-gold-400/30 shadow-gold-glow flex flex-col items-center justify-center group hover:border-gold-300 transition-all duration-300"
              >
                {/* Corner delicate golden dots */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gold-400/60"></div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400/60"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gold-400/60"></div>
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400/60"></div>

                {/* Number in Metallic Gold */}
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient group-hover:scale-105 transition-transform tabular-nums drop-shadow-[0_2px_8px_rgba(212,175,103,0.3)]">
                  {String(unit.value).padStart(2, '0')}
                </span>

                {/* Unit Label */}
                <span className="font-invitation-serif text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-300 mt-2 font-medium">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <p className="font-invitation-serif italic text-gold-300/80 text-xs sm:text-sm mt-8">
          January 17, 2027 • Nalanda Convention Centre, Calicut
        </p>
      </div>
    </section>
  );
};
