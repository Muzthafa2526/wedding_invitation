import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc, Play, Pause } from 'lucide-react';
import songAudio from '../assets/dekh-lena.mp3';

/**
 * Premium Luxury Audio Controller for "Dekh Lena"
 * Automatically starts playing as soon as the visitor clicks "Open Wedding Invitation".
 * Features an elegant, refined golden medallion floating toggle button.
 */
export const AudioPlayer = ({ isWebsiteOpened }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  // Initialize and preload Audio instance
  useEffect(() => {
    const audio = new Audio(songAudio);
    audio.loop = true;
    audio.volume = 0.85;

    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', () => setIsPlaying(false));

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // When website is opened via the "Open Wedding Invitation" click, immediately play music!
  useEffect(() => {
    if (isWebsiteOpened && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Autoplay policy caught, will play on next interaction:', err);
      });
    }
  }, [isWebsiteOpened]);

  const togglePlayback = (e) => {
    e?.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Play error:', err);
      });
    }
  };

  // Only display the floating button once the invitation has been opened
  if (!isWebsiteOpened) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 font-serif">
      {/* Floating Hover Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block bg-burgundy-950/95 backdrop-blur-md px-4 py-2 rounded-full border border-gold-400/70 shadow-gold-glow text-xs text-gold-200">
          {isPlaying ? (
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
              <span><strong>Playing:</strong> Dekh Lena (Arijit Singh)</span>
            </span>
          ) : (
            <span>Click to Play: <strong>Dekh Lena</strong></span>
          )}
        </div>
      )}

      {/* Redesigned Luxury Gold Music Medallion Button */}
      <button
        onClick={togglePlayback}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? "Pause Dekh Lena music" : "Play Dekh Lena music"}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-gold-glow cursor-pointer ${
          isPlaying
            ? 'bg-gradient-to-r from-burgundy-900 to-burgundy-950 text-gold-200 border-gold-400 ring-2 ring-gold-400/40 hover:border-gold-300'
            : 'bg-burgundy-950/90 hover:bg-burgundy-900 text-gold-400 border-gold-500/70'
        }`}
      >
        {/* Spinning Gold Disc or Play Icon */}
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Disc
              className="w-5 h-5 text-gold-300 animate-spin"
              style={{ animationDuration: '4s' }}
            />
          ) : (
            <Play className="w-4 h-4 fill-gold-400 text-gold-400 group-hover:scale-110 transition-transform" />
          )}
        </span>

        {/* Dynamic Soundwave Equalizer or Song Title */}
        {isPlaying ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gold-100 tracking-wider">
              Dekh Lena
            </span>
            <div className="flex items-end gap-[3px] h-3.5">
              <span
                className="w-1 bg-gold-400 rounded-full animate-bounce"
                style={{ height: '70%', animationDuration: '0.6s' }}
              ></span>
              <span
                className="w-1 bg-gold-300 rounded-full animate-bounce"
                style={{ height: '100%', animationDuration: '0.4s' }}
              ></span>
              <span
                className="w-1 bg-gold-200 rounded-full animate-bounce"
                style={{ height: '50%', animationDuration: '0.7s' }}
              ></span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-semibold text-gold-300 tracking-wider">
              Play Music
            </span>
          </div>
        )}
      </button>
    </div>
  );
};
