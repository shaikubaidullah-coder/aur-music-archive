import React from 'react';
import { Song, PlaybackState } from '../types/song';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExhibitionStageProps {
  currentSong: Song;
  playbackState: PlaybackState;
  isPlaying: boolean;
  isLoading: boolean;
  onTogglePlay: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const ExhibitionStage: React.FC<ExhibitionStageProps> = ({
  currentSong,
  isPlaying,
  isLoading,
  onTogglePlay,
}) => {
  return (
    <section className="relative w-full min-h-[88vh] sm:min-h-[84vh] flex flex-col justify-center items-center pt-2 sm:pt-6 pb-28 sm:pb-36 px-4 sm:px-6 select-none overflow-hidden">
      
      {/* Central Artwork & Physical Disc Presentation */}
      <div className="relative inline-flex items-center justify-center my-2 sm:my-6 max-w-full">
        
        {/* The Vinyl Disc (Glides out from right edge of sleeve upon playback) */}
        <motion.div
          animate={{
            x: isPlaying ? '55%' : '14%',
            opacity: isPlaying ? 1 : 0.65,
            scale: isPlaying ? 1 : 0.96,
          }}
          transition={{
            type: 'spring',
            stiffness: 125,
            damping: 20,
          }}
          onClick={onTogglePlay}
          className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] aspect-square rounded-full vinyl-disc border border-white/10 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer shadow-2xl flex items-center justify-center -z-0"
          title={isPlaying ? 'Pause recording' : 'Play recording'}
          aria-label={isPlaying ? 'Pause recording' : 'Play recording'}
        >
          {/* Light Sheen Refraction */}
          <div className="absolute inset-0 rounded-full vinyl-sheen pointer-events-none" />

          {/* Rotating Vinyl Core */}
          <div 
            className={`w-full h-full rounded-full flex items-center justify-center ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
            style={{
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          >
            {/* Concentric Grooves */}
            <div className="w-[88%] h-[88%] rounded-full border border-white/5 flex items-center justify-center">
              <div className="w-[78%] h-[78%] rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-[68%] h-[68%] rounded-full border border-white/5 flex items-center justify-center">
                  
                  {/* Center Record Label */}
                  <div 
                    className="w-[68px] h-[68px] sm:w-[88px] sm:h-[88px] md:w-[102px] md:h-[102px] rounded-full border border-white/15 flex flex-col items-center justify-center p-2 text-center shadow-inner relative overflow-hidden"
                    style={{
                      background: `radial-gradient(circle, ${currentSong.atmosphere.accent} 0%, #121316 100%)`,
                    }}
                  >
                    {/* Spindle hole */}
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0a0b0e] border border-white/30 absolute z-20 shadow-inner" />
                    
                    {/* Label type */}
                    <span className="text-[7px] sm:text-[8px] font-mono tracking-widest text-ink-primary/80 uppercase absolute top-2">
                      AUR · 33⅓
                    </span>
                    <span className="text-[10px] sm:text-[12px] font-urdu text-ink-primary font-bold px-1 line-clamp-1 absolute bottom-1.5 sm:bottom-2">
                      {currentSong.urduTitle}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Artwork Sleeve (The Protagonist) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSong.id}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={onTogglePlay}
            className="relative z-10 cursor-pointer rounded-sm overflow-hidden bg-surface-elevated border border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] max-w-[calc(100vw-3rem)] sm:max-w-[440px] group transition-transform duration-500 hover:scale-[1.01]"
          >
            {/* The Print Artwork Image */}
            <div className={`relative overflow-hidden flex items-center justify-center bg-black/40 ${isPlaying ? 'animate-artwork-breathe' : ''}`}>
              <img
                src={currentSong.posterSrc}
                alt={`${currentSong.title} artwork`}
                className="max-h-[235px] sm:max-h-[310px] md:max-h-[360px] w-auto max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="eager"
              />

              {/* Gentle Light Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5 pointer-events-none" />

              {/* Minimal Hover Play Cue */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 text-canvas flex items-center justify-center shadow-2xl active:scale-95 transition-transform">
                  {isPlaying ? (
                    <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-canvas text-canvas" />
                  ) : (
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-canvas text-canvas ml-1" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Film-Style Poetic Typographic Lockup */}
      <div className="text-center mt-5 sm:mt-8 space-y-2.5 max-w-2xl px-4 z-10">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSong.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2.5"
          >
            {/* Titles: English + Urdu */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-ink-primary tracking-tight leading-tight">
                {currentSong.title}
              </h1>
              <span 
                className="text-2xl sm:text-4xl font-urdu tracking-normal pt-1 sm:pt-0 leading-normal"
                style={{ color: currentSong.atmosphere.accent }}
              >
                {currentSong.urduTitle}
              </span>
            </div>

            {/* Artist & Year Credit */}
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-ink-secondary/80">
              {currentSong.artist} <span className="opacity-30 mx-2">/</span> {currentSong.year}
            </p>

            {/* Emotional Reflection */}
            <p className="text-xs sm:text-sm text-ink-secondary/75 font-sans font-light leading-relaxed max-w-md mx-auto pt-0.5">
              {currentSong.description}
            </p>

            {/* Whisper-quiet Playing State Indicator */}
            {(isPlaying || isLoading) && (
              <div className="pt-1 flex items-center justify-center">
                <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest uppercase text-ink-tertiary">
                  <span 
                    className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-ink-tertiary animate-pulse' : 'animate-ping'}`}
                    style={{ backgroundColor: isLoading ? undefined : currentSong.atmosphere.accent }}
                  />
                  <span className="text-ink-secondary font-medium">
                    {isLoading ? 'Loading master...' : 'Now Playing'}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
};
