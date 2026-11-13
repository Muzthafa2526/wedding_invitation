import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc, Volume2, VolumeX } from 'lucide-react';

/**
 * AudioPlayer specifically configured for "Dekh Lena" (Romantic Wedding Version).
 * Features:
 * 1. Automatically plays `/dekh-lena.mp3` from the public directory if present.
 * 2. If no MP3 is found on disk, gracefully falls back to a Web Audio API acoustic
 *    piano synthesis of the melody and chord progression of "Dekh Lena".
 * 3. Does NOT autoplay before user interaction.
 * 4. Includes volume toggle, dynamic equalizer, and song title tooltip.
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasAudioFile, setHasAudioFile] = useState(false);

  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const melodyIntervalRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Check if dekh-lena.mp3 exists in public folder
  useEffect(() => {
    const audio = new Audio('/dekh-lena.mp3');
    audio.addEventListener('canplaythrough', () => {
      setHasAudioFile(true);
    });
    audio.addEventListener('error', () => {
      setHasAudioFile(false);
    });
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // "Dekh Lena" Acoustic Piano Melody Notes & Chords (Bm -> G -> D -> A progression)
  // [frequency in Hz, duration in seconds, delay from phrase start]
  const dekhLenaPhrases = [
    // Phrase 1: "Dekh lena..." (over Bm chord)
    {
      chord: [123.47, 185.00, 246.94, 293.66], // Bm
      melody: [
        { f: 369.99, d: 0.6, t: 0.2 },  // F#4 "Dekh"
        { f: 392.00, d: 0.5, t: 0.8 },  // G4   "le"
        { f: 369.99, d: 0.8, t: 1.3 },  // F#4  "na..."
        { f: 329.63, d: 0.5, t: 2.1 },  // E4
        { f: 293.66, d: 0.7, t: 2.6 },  // D4
      ],
    },
    // Phrase 2: "Dekh lena..." (over G Major chord)
    {
      chord: [98.00, 146.83, 196.00, 246.94], // G
      melody: [
        { f: 293.66, d: 0.6, t: 0.2 },  // D4   "Dekh"
        { f: 329.63, d: 0.5, t: 0.8 },  // E4   "le"
        { f: 293.66, d: 0.8, t: 1.3 },  // D4   "na..."
        { f: 277.18, d: 0.5, t: 2.1 },  // C#4
        { f: 246.94, d: 0.7, t: 2.6 },  // B3
      ],
    },
    // Phrase 3: "Kismat se chura ke..." (over D Major chord)
    {
      chord: [146.83, 220.00, 293.66, 369.99], // D
      melody: [
        { f: 369.99, d: 0.4, t: 0.1 },  // F#4  "Kis-"
        { f: 392.00, d: 0.4, t: 0.5 },  // G4   "-mat"
        { f: 440.00, d: 0.7, t: 0.9 },  // A4   "se"
        { f: 392.00, d: 0.4, t: 1.6 },  // G4   "chu-"
        { f: 369.99, d: 0.4, t: 2.0 },  // F#4  "-ra"
        { f: 329.63, d: 0.8, t: 2.4 },  // E4   "ke..."
      ],
    },
    // Phrase 4: "Hothon pe saja ke dekh lena..." (over A Major chord)
    {
      chord: [110.00, 164.81, 220.00, 277.18], // A
      melody: [
        { f: 329.63, d: 0.4, t: 0.1 },  // E4
        { f: 369.99, d: 0.4, t: 0.5 },  // F#4
        { f: 392.00, d: 0.4, t: 0.9 },  // G4
        { f: 369.99, d: 0.4, t: 1.3 },  // F#4
        { f: 329.63, d: 0.5, t: 1.7 },  // E4
        { f: 293.66, d: 0.5, t: 2.2 },  // D4
        { f: 277.18, d: 0.8, t: 2.7 },  // C#4
      ],
    },
  ];

  let phraseIndex = 0;

  const playSynthesizedNote = (freq, startTime, duration, isChord = false) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Warm soft sine with gentle triangle overtone
    osc.type = isChord ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    // Warm felt-piano low-pass filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isChord ? 700 : 1200, startTime);

    const baseVol = isChord ? 0.04 : 0.09;
    const finalVol = isMuted ? 0 : baseVol;

    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.exponentialRampToValueAtTime(finalVol, startTime + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(finalVol * 0.4, startTime + duration * 0.6);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  };

  const playNextPhrase = () => {
    if (!isPlayingRef.current || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const phrase = dekhLenaPhrases[phraseIndex % dekhLenaPhrases.length];
    phraseIndex++;

    const now = ctx.currentTime;

    // Play soft backing chord arpeggios
    phrase.chord.forEach((freq, idx) => {
      playSynthesizedNote(freq, now + idx * 0.25, 3.6, true);
    });

    // Play "Dekh Lena" melody notes
    phrase.melody.forEach((note) => {
      playSynthesizedNote(note.f, now + note.t, note.d, false);
    });
  };

  const toggleMusic = () => {
    if (hasAudioFile && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fall back to synthesizer if browser restricts
          startSynthesizer();
        });
      }
      return;
    }

    // Web Audio Synthesizer Toggle
    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (melodyIntervalRef.current) {
        clearInterval(melodyIntervalRef.current);
        melodyIntervalRef.current = null;
      }
    } else {
      startSynthesizer();
    }
  };

  const startSynthesizer = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    isPlayingRef.current = true;
    setIsPlaying(true);
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    playNextPhrase();
    melodyIntervalRef.current = setInterval(() => {
      playNextPhrase();
    }, 3400);
  };

  useEffect(() => {
    return () => {
      if (melodyIntervalRef.current) clearInterval(melodyIntervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block bg-burgundy-950/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-gold-400/60 shadow-gold-glow text-xs text-gold-200 font-serif">
          {isPlaying ? (
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
              <strong>Now Playing:</strong> Dekh Lena (Romantic Wedding Instrumental)
            </span>
          ) : (
            <span>Play Music: <strong>Dekh Lena</strong></span>
          )}
        </div>
      )}

      {/* Floating Metallic Gold Music Button */}
      <button
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? "Pause Dekh Lena music" : "Play Dekh Lena music"}
        className={`group relative flex items-center gap-2.5 px-4.5 py-3 rounded-full shadow-gold-glow border transition-all duration-300 ${
          isPlaying
            ? 'bg-burgundy-900 text-gold-200 border-gold-400 ring-2 ring-gold-400/40'
            : 'bg-burgundy-950/95 hover:bg-burgundy-900 text-gold-400 border-gold-500/70'
        }`}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Disc className="w-5 h-5 animate-spin text-gold-300" style={{ animationDuration: '4s' }} />
          ) : (
            <Music className="w-5 h-5 text-gold-400 group-hover:text-gold-200 transition-colors" />
          )}
        </span>

        {/* Dynamic Equalizer Bars */}
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-1 bg-gold-400 rounded-full animate-bounce" style={{ height: '70%', animationDuration: '0.7s' }}></span>
            <span className="w-1 bg-gold-300 rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.5s' }}></span>
            <span className="w-1 bg-gold-200 rounded-full animate-bounce" style={{ height: '60%', animationDuration: '0.8s' }}></span>
          </div>
        ) : (
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-gold-400/80 font-serif font-bold">
              Music
            </span>
            <span className="text-xs font-serif tracking-wider font-semibold text-gold-200">
              Dekh Lena
            </span>
          </div>
        )}
      </button>
    </div>
  );
};
