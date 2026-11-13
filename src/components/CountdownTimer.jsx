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
    <section className="py-20 px-4 bg-burgundy-900/60 luxury-fabric-texture relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-800/80 text-gold-300 text-xs font-invitation-serif italic uppercase tracking-[0.25em] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Until We Say "Qubool Hai"
          </div>
          <h2 className="font-invitation-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-light mt-1">
            Counting Down The Auspicious Moments
          </h2>
          <GoldenDiamondDivider className="mx-auto" />
        </motion.div>

        {timeLeft.isExpired ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-3xl bg-burgundy-800 max-w-lg mx-auto my-8 shadow-2xl"
          >
            <InterlockedGoldenRings className="mx-auto mb-4" />
            <h3 className="font-invitation-serif italic text-2xl text-gold-light font-bold mb-2">
              Today Is The Day!
            </h3>
            <p className="font-invitation-body italic text-gold-200">
              The wedding celebration of Samju M.C &amp; Fahiza K is taking place right now!
            </p>
          </motion.div>
        ) : (
          /* The 4 Countdown Cards — Borderless with Golden Ambient Glow */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-2xl mx-auto">
            {units.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-burgundy-800/90 to-burgundy-950/95 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,103,0.15)] flex flex-col items-center justify-center group hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,103,0.3)] transition-all duration-300"
              >
                {/* Corner delicate golden dots */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>
                <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>
                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-gold-400/50"></div>

                <div className="font-serif italic text-4xl sm:text-5xl font-bold text-gold-gradient tracking-tight my-1 drop-shadow-[0_2px_8px_rgba(212,175,103,0.3)]">
                  {String(unit.value).padStart(2, '0')}
                </div>

                <div className="font-invitation-serif italic text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-300/90 font-semibold mt-1">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
