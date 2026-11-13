import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc, Play, Pause, Volume2, VolumeX, Upload, ExternalLink, X, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Premium Luxury Audio Player for "Dekh Lena" (Official Hindi Vocal Song by Arijit Singh & Tulsi Kumar)
 * Supports:
 * 1. Embedded Official YouTube stream of "Dekh Lena" (oU86I2n_g0w) for direct vocal playback.
 * 2. Local MP3 playback from `/dekh-lena.mp3` if placed in public directory.
 * 3. File selector to load a local MP3 file directly from device.
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [audioSource, setAudioSource] = useState('youtube'); // 'youtube' | 'local'
  const [localAudioUrl, setLocalAudioUrl] = useState('/dekh-lena.mp3');
  const [hasLocalFile, setHasLocalFile] = useState(false);
  const [userUploadedName, setUserUploadedName] = useState(null);

  const audioRef = useRef(null);
  const ytPlayerRef = useRef(null);
  const fileInputRef = useRef(null);

  // Check if dekh-lena.mp3 exists in public folder
  useEffect(() => {
    const audio = new Audio('/dekh-lena.mp3');
    audio.addEventListener('canplaythrough', () => {
      setHasLocalFile(true);
    });
    audio.addEventListener('error', () => {
      setHasLocalFile(false);
    });
  }, []);

  // Handle local file selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalAudioUrl(url);
      setUserUploadedName(file.name);
      setAudioSource('local');
      setHasLocalFile(true);

      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const togglePlayback = () => {
    if (audioSource === 'local') {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      // Toggle YouTube Playback via postMessage to iframe
      const iframe = document.getElementById('youtube-dekh-lena-iframe');
      if (iframe && iframe.contentWindow) {
        if (isPlaying) {
          iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          setIsPlaying(false);
        } else {
          iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          setIsPlaying(true);
        }
      } else {
        setIsPlaying(!isPlaying);
      }
    }
  };

  return (
    <>
      {/* Hidden HTML5 Audio Element for Local MP3 */}
      <audio
        ref={audioRef}
        src={localAudioUrl}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="hidden"
      />

      {/* Hidden / Background YouTube IFrame for Official Hindi Vocal Song */}
      <div className="fixed -top-[9999px] -left-[9999px] pointer-events-none opacity-0">
        <iframe
          id="youtube-dekh-lena-iframe"
          title="Dekh Lena Hindi Song - Arijit Singh"
          width="320"
          height="180"
          src={`https://www.youtube-nocookie.com/embed/oU86I2n_g0w?enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Hidden file input for custom MP3 upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* FLOATING MUSIC CONTROLLER (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-serif">
        {/* Expanded Music Player Card */}
        {expanded && (
          <div className="bg-gradient-to-b from-burgundy-900 to-burgundy-950 p-5 rounded-3xl border-2 border-gold-400 shadow-2xl max-w-xs w-80 text-gold-100 animate-fadeIn relative">
            {/* Header with Close */}
            <div className="flex items-center justify-between pb-3 border-b border-gold-400/30">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                Wedding Soundtrack
              </span>
              <button
                onClick={() => setExpanded(false)}
                className="text-gold-300 hover:text-white p-1"
                aria-label="Close music panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Song Details */}
            <div className="my-4 text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy-800 border-2 border-gold-400 mx-auto flex items-center justify-center shadow-gold-glow mb-3">
                <Disc className={`w-8 h-8 text-gold-300 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
              </div>
              <h4 className="font-calligraphy text-2xl text-gold-light leading-tight">
                Dekh Lena
              </h4>
              <p className="text-xs text-gold-300 font-serif mt-0.5">
                Arijit Singh &amp; Tulsi Kumar
              </p>
              <p className="text-[10px] text-gold-400/80 uppercase tracking-widest mt-1">
                Movie: Tum Bin 2 • Hindi Vocals
              </p>
            </div>

            {/* Play / Pause Big Button */}
            <div className="flex items-center justify-center gap-4 my-4">
              <button
                onClick={togglePlayback}
                className="w-14 h-14 rounded-full gold-shimmer-btn flex items-center justify-center text-burgundy-950 shadow-gold-glow hover:scale-105 active:scale-95 transition-transform"
                aria-label={isPlaying ? "Pause Song" : "Play Song"}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-burgundy-950" /> : <Play className="w-6 h-6 fill-burgundy-950 ml-0.5" />}
              </button>
            </div>

            {/* Sound Source Switcher / Options */}
            <div className="pt-3 border-t border-gold-400/30 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[11px] text-gold-300">
                <span>Audio Source:</span>
                <span className="font-semibold text-gold-200">
                  {audioSource === 'youtube' ? 'Official Hindi Song' : (userUploadedName || 'Local Audio')}
                </span>
              </div>

              {/* Upload Song MP3 Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-burgundy-800/80 hover:bg-burgundy-800 border border-gold-400/50 text-gold-200 text-xs font-serif transition-colors"
              >
                <Upload className="w-3.5 h-3.5 text-gold-400" />
                <span>Select / Change MP3 File</span>
              </button>

              <p className="text-[9px] text-center text-gold-400/70 italic mt-1">
                Plays official vocal Hindi track. You can also place dekh-lena.mp3 in the public folder.
              </p>
            </div>
          </div>
        )}

        {/* Floating Pill Toggle Button */}
        <div className="flex items-center gap-2">
          {/* Quick Expand Toggle Arrow */}
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle music options"
            className="w-9 h-9 rounded-full bg-burgundy-950/90 border border-gold-400/60 text-gold-300 flex items-center justify-center shadow-gold-glow hover:bg-burgundy-900 transition-colors"
          >
            {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>

          {/* Main Play/Pause Music Button */}
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
                <Disc className="w-5 h-5 animate-spin text-gold-300" style={{ animationDuration: '4s' }} />
              ) : (
                <Play className="w-4 h-4 fill-gold-400 text-gold-400 group-hover:scale-110 transition-transform" />
              )}
            </span>

            {/* Dynamic Sound Equalizer */}
            {isPlaying ? (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gold-200">
                  Dekh Lena (Playing)
                </span>
                <div className="flex items-end gap-[3px] h-4">
                  <span className="w-1 bg-gold-400 rounded-full animate-bounce" style={{ height: '70%', animationDuration: '0.6s' }}></span>
                  <span className="w-1 bg-gold-300 rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.4s' }}></span>
                  <span className="w-1 bg-gold-200 rounded-full animate-bounce" style={{ height: '50%', animationDuration: '0.7s' }}></span>
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
    </>
  );
};
