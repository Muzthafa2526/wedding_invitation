import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc } from 'lucide-react';

/**
 * AudioPlayer provides romantic ambient background music in metallic gold styling.
 * Uses the Web Audio API to synthesize a soft acoustic piano chord progression.
 * Strictly respects the requirement: DOES NOT autoplay before user interaction.
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Romantic progression in D Major / B Minor
  const chords = [
    [293.66, 369.99, 440.00, 587.33], // D major
    [220.00, 277.18, 329.63, 440.00], // A major
    [246.94, 293.66, 369.99, 493.88], // B minor
    [185.00, 220.00, 277.18, 369.99], // F# minor
    [196.00, 246.94, 293.66, 392.00], // G major
    [220.00, 293.66, 369.99, 440.00], // D major
    [196.00, 246.94, 293.66, 392.00], // G major
    [220.00, 277.18, 329.63, 440.00], // A major
  ];

  let chordIndex = 0;

  const playChordNote = (freq, delay, duration = 3.6) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(850, ctx.currentTime);

    const now = ctx.currentTime + delay;
    const currentVol = 0.08;

    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(currentVol, now + 0.15);
    gainNode.gain.exponentialRampToValueAtTime(currentVol * 0.35, now + 1.2);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, now + duration);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.2);
  };

  const triggerNextChord = () => {
    if (!isPlayingRef.current) return;
    const chord = chords[chordIndex % chords.length];
    chordIndex++;

    chord.forEach((freq, idx) => {
      playChordNote(freq, idx * 0.35, 4.2);
    });
  };

  const toggleMusic = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }

    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      triggerNextChord();
      intervalRef.current = setInterval(() => {
        triggerNextChord();
      }, 3400);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block bg-burgundy-950/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-gold-400/50 shadow-gold-glow text-xs text-gold-200 font-serif">
          {isPlaying ? "Playing: Romantic Piano Serenade" : "Play Romantic Wedding Music"}
        </div>
      )}

      {/* Floating Metallic Gold Button */}
      <button
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? "Mute romantic background music" : "Play romantic background music"}
        className={`group relative flex items-center gap-2 px-4 py-3 rounded-full shadow-gold-glow border transition-all duration-300 ${
          isPlaying
            ? 'bg-burgundy-900 text-gold-300 border-gold-400 ring-2 ring-gold-400/40'
            : 'bg-burgundy-950/90 hover:bg-burgundy-900 text-gold-400 border-gold-500/60'
        }`}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Disc className="w-5 h-5 animate-spin text-gold-300" style={{ animationDuration: '6s' }} />
          ) : (
            <Music className="w-5 h-5 text-gold-400 group-hover:text-gold-200 transition-colors" />
          )}
        </span>

        {/* Dynamic Equalizer Bars */}
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-1 bg-gold-400 rounded-full animate-bounce" style={{ height: '70%', animationDuration: '0.8s' }}></span>
            <span className="w-1 bg-gold-300 rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.6s' }}></span>
            <span className="w-1 bg-gold-200 rounded-full animate-bounce" style={{ height: '50%', animationDuration: '0.9s' }}></span>
          </div>
        ) : (
          <span className="text-xs font-serif tracking-wider uppercase font-semibold text-gold-300">
            Music
          </span>
        )}
      </button>
    </div>
  );
};
