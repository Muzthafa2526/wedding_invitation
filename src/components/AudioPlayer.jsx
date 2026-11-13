import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc, Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown } from 'lucide-react';
import songAudio from '../assets/dekh-lena.mp3';

/**
 * Premium Luxury Audio Player for "Dekh Lena" (Hindi Vocal Song by Arijit Singh & Tulsi Kumar).
 * Uses bundled high-quality audio asset with HTML5 Audio for 100% audible, clear playback.
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(songAudio);
    audio.loop = true;
    audio.volume = 0.85;

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('play', () => {
      setIsPlaying(true);
    });

    audio.addEventListener('pause', () => {
      setIsPlaying(false);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayback = (e) => {
    e?.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Audio playback error:', err);
      });
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const seekTime = Number(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-serif">
      {/* Expanded Luxury Mini Player Panel */}
      {expanded && (
        <div className="bg-gradient-to-b from-burgundy-900 to-burgundy-950 p-5 rounded-3xl border-2 border-gold-400 shadow-2xl max-w-xs w-80 text-gold-100 animate-fadeIn relative">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-gold-400/30 text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
            <span>Now Playing</span>
            <button
              onClick={() => setExpanded(false)}
              className="text-gold-300 hover:text-white p-1 text-sm font-bold"
              aria-label="Close music panel"
            >
              ✕
            </button>
          </div>

          {/* Song Info & Artwork */}
          <div className="my-4 text-center">
            <div className="relative w-16 h-16 rounded-full bg-burgundy-800 border-2 border-gold-400 mx-auto flex items-center justify-center shadow-gold-glow mb-3">
              <Disc
                className={`w-8 h-8 text-gold-300 ${isPlaying ? 'animate-spin' : ''}`}
                style={{ animationDuration: '4s' }}
              />
              {isPlaying && (
                <div className="absolute inset-0 rounded-full border border-gold-300/40 animate-ping"></div>
              )}
            </div>

            <h4 className="font-calligraphy text-2xl text-gold-light leading-tight">
              Dekh Lena
            </h4>
            <p className="text-xs text-gold-300 font-serif mt-0.5">
              Arijit Singh &amp; Tulsi Kumar
            </p>
            <p className="text-[10px] text-gold-400/80 uppercase tracking-widest mt-1">
              Movie: Tum Bin 2 • Original Vocal
            </p>
          </div>

          {/* Scrub Bar */}
          <div className="my-3">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-burgundy-950 rounded-lg appearance-none cursor-pointer accent-gold-400"
            />
            <div className="flex justify-between text-[10px] text-gold-400/80 mt-1 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls: Mute & Big Play Button */}
          <div className="flex items-center justify-center gap-6 my-2">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-burgundy-800 border border-gold-400/50 text-gold-300 hover:text-white transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-gold-400" />}
            </button>

            <button
              onClick={togglePlayback}
              className="w-14 h-14 rounded-full gold-shimmer-btn flex items-center justify-center text-burgundy-950 shadow-gold-glow hover:scale-105 active:scale-95 transition-transform"
              aria-label={isPlaying ? "Pause Song" : "Play Song"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-burgundy-950" />
              ) : (
                <Play className="w-6 h-6 fill-burgundy-950 ml-0.5" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill Music Button */}
      <div className="flex items-center gap-2">
        {/* Expand Player Toggle Arrow */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Expand music player controls"
          className="w-9 h-9 rounded-full bg-burgundy-950/90 border border-gold-400/60 text-gold-300 flex items-center justify-center shadow-gold-glow hover:bg-burgundy-900 transition-colors"
        >
          {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

        {/* Primary Play / Pause Pill Button */}
        <button
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause Dekh Lena" : "Play Dekh Lena Hindi Song"}
          className={`group flex items-center gap-2.5 px-4.5 py-3 rounded-full shadow-gold-glow border transition-all duration-300 ${
            isPlaying
              ? 'bg-burgundy-900 text-gold-200 border-gold-400 ring-2 ring-gold-400/40'
              : 'bg-burgundy-950/95 hover:bg-burgundy-900 text-gold-300 border-gold-500/70'
          }`}
        >
          <span className="relative flex items-center justify-center">
            {isPlaying ? (
              <Disc
                className="w-5 h-5 animate-spin text-gold-300"
                style={{ animationDuration: '4s' }}
              />
            ) : (
              <Play className="w-4 h-4 fill-gold-400 text-gold-400 group-hover:scale-110 transition-transform" />
            )}
          </span>

          {/* Equalizer or Title */}
          {isPlaying ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gold-200">
                Dekh Lena (Playing)
              </span>
              <div className="flex items-end gap-[3px] h-4">
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
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-gold-400/80 font-bold leading-none">
                Hindi Song
              </span>
              <span className="text-xs tracking-wider font-semibold text-gold-200 leading-tight">
                Dekh Lena
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
