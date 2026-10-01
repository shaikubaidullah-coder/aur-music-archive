import React, { useState } from 'react';
import { Song } from '../types/song';
import { SONGS } from '../data/songs';
import { motion } from 'framer-motion';

interface CollectionGalleryProps {
  currentSong: Song;
  isPlaying: boolean;
  onSelectSong: (song: Song, shouldPlay?: boolean) => void;
}

export const CollectionGallery: React.FC<CollectionGalleryProps> = ({
  currentSong,
  isPlaying,
  onSelectSong,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-20 border-t border-white/[0.04] transition-colors duration-700">
      
      {/* Editorial Section Introduction */}
      <div className="max-w-6xl mx-auto mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h2 className="font-display text-2xl sm:text-3xl text-ink-primary tracking-tight">
          The Four Records
        </h2>
        <span className="text-xs font-mono text-ink-tertiary tracking-widest uppercase">
          01 — 04
        </span>
      </div>

      {/* Asymmetric Exhibition Shelf / Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-end">
        {SONGS.map((song, index) => {
          const isActive = song.id === currentSong.id;
          const isHovered = hoveredId === song.id;
          const isDimmed = hoveredId !== null && !isHovered;

          // Asymmetric vertical offsets to mimic an art-book contact sheet
          const verticalOffset = index % 2 === 0 ? 'lg:-translate-y-4' : 'lg:translate-y-4';
          const aspectClass = 
            song.aspectRatio === '16:9' ? 'aspect-[16/9]' :
            song.aspectRatio === '9:16' ? 'aspect-[9/16]' :
            song.aspectRatio === '3:4' ? 'aspect-[3/4]' : 'aspect-square';

          return (
            <motion.div
              key={song.id}
              onMouseEnter={() => setHoveredId(song.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                onSelectSong(song, true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group relative cursor-pointer transition-all duration-500 ${verticalOffset} ${
                isDimmed ? 'opacity-40 scale-[0.98]' : 'opacity-100'
              }`}
            >
              {/* Sleeve Print Object */}
              <div 
                className={`relative rounded-sm overflow-hidden bg-surface-elevated shadow-xl transition-all duration-500 ease-out ${
                  isActive 
                    ? 'ring-1 ring-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.8)]' 
                    : 'group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)] group-hover:-translate-y-2'
                }`}
              >
                {/* Print Image with True Aspect Ratio */}
                <div className={`relative ${aspectClass} w-full overflow-hidden flex items-center justify-center bg-black/40`}>
                  <img
                    src={song.posterSrc}
                    alt={song.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Playing Pulse Dot */}
                  {isActive && isPlaying && (
                    <div className="absolute top-3 right-3 flex items-center space-x-1.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                      <span 
                        className="w-1.5 h-1.5 rounded-full animate-ping"
                        style={{ backgroundColor: song.atmosphere.accent }}
                      />
                      <span className="text-[9px] font-mono text-ink-primary tracking-widest uppercase">
                        Now
                      </span>
                    </div>
                  )}

                  {/* Soft paper reflection */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5 pointer-events-none" />
                </div>
              </div>

              {/* Minimal Editorial Caption Below */}
              <div className="mt-3.5 space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-mono text-ink-tertiary">
                    {song.index}
                  </span>
                  <span className="font-mono text-ink-tertiary text-[11px]">
                    {song.formattedDuration}
                  </span>
                </div>

                <div className="flex items-baseline space-x-2">
                  <h3 className="font-display text-lg text-ink-primary group-hover:text-white transition-colors">
                    {song.title}
                  </h3>
                  <span 
                    className="text-sm font-urdu"
                    style={{ color: song.atmosphere.accent }}
                  >
                    {song.urduTitle}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
