import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';

/**
 * AudioPlayer provides romantic ambient wedding background music.
 * It utilizes the Web Audio API to synthesize a lush, gentle acoustic piano/chime
 * chord progression (Canon in D / romantic cadence), with zero broken links or latency.
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Romantic chord progression in D major: D -> A -> Bm -> F#m -> G -> D -> G -> A
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

  const playChordNote = (freq, delay, duration = 3.5) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Warm soft sine + triangle blend
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

    // Filter to give a soft, warm acoustic felt-piano feel
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, ctx.currentTime);

    const now = ctx.currentTime + delay;
    const currentVol = volume * 0.12;

    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(currentVol, now + 0.15);
    gainNode.gain.exponentialRampToValueAtTime(currentVol * 0.4, now + 1.2);
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

    // Gently arpeggiate notes
    chord.forEach((freq, idx) => {
      playChordNote(freq, idx * 0.35, 4.0);
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
        <div className="hidden sm:block bg-cream-50/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-gold-300 shadow-luxury text-xs text-olive-800 font-serif">
          {isPlaying ? "Playing: Clair de Lune (Acoustic Ambient)" : "Play Romantic Wedding Music"}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? "Mute romantic background music" : "Play romantic background music"}
        className={`group relative flex items-center gap-2 px-4 py-3 rounded-full shadow-luxury-hover border transition-all duration-300 ${
          isPlaying
            ? 'bg-olive-700 text-gold-200 border-gold-400 ring-2 ring-gold-400/30'
            : 'bg-cream-100/90 hover:bg-cream-50 text-olive-800 border-gold-400/50'
        }`}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Disc className="w-5 h-5 animate-spin text-gold-300" style={{ animationDuration: '6s' }} />
          ) : (
            <Music className="w-5 h-5 text-olive-600 group-hover:text-gold-600 transition-colors" />
          )}
        </span>

        {/* Dynamic sound equalizer bars when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-1 bg-gold-300 rounded-full animate-bounce" style={{ height: '70%', animationDuration: '0.8s' }}></span>
            <span className="w-1 bg-gold-400 rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.6s' }}></span>
            <span className="w-1 bg-gold-200 rounded-full animate-bounce" style={{ height: '50%', animationDuration: '0.9s' }}></span>
          </div>
        ) : (
          <span className="text-xs font-serif tracking-wider uppercase font-semibold">
            Music
          </span>
        )}
      </button>
    </div>
  );
};

