import React from 'react';
import { Song } from '../types/song';
import { SONGS } from '../data/songs';

interface HeaderProps {
  currentSong: Song;
  onSelectSong: (song: Song) => void;
  onOpenNotes: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSong,
  onSelectSong,
  onOpenNotes,
}) => {
  return (
    <header className="w-full py-6 px-6 sm:px-10 lg:px-16 flex items-center justify-between z-30 transition-colors duration-700">
      
      {/* Brand / Artist Mark */}
      <div className="flex items-center space-x-2.5 select-none">
        <img 
          src="/favicon.svg" 
          alt="" 
          className="w-4 h-4 opacity-80"
          aria-hidden="true" 
        />
        <div className="flex items-baseline space-x-2.5">
          <span className="font-display text-2xl tracking-wide text-ink-primary">
            AUR
          </span>
          <span className="text-[11px] text-ink-tertiary font-sans tracking-widest uppercase hidden sm:inline">
            Music Room
          </span>
        </div>
      </div>

      {/* Discrete Track Number Nav */}
      <nav aria-label="Track Navigation" className="flex items-center space-x-2 xs:space-x-3 sm:space-x-5 md:space-x-7 text-xs font-mono select-none">
        {SONGS.map((song) => {
          const isActive = song.id === currentSong.id;
          return (
            <button
              key={song.id}
              onClick={() => onSelectSong(song)}
              className={`relative py-1 transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-ink-primary font-medium scale-110'
                  : 'text-ink-tertiary hover:text-ink-secondary'
              }`}
              title={song.title}
            >
              <span>{song.index}</span>
              {isActive && (
                <span 
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full transition-colors duration-500"
                  style={{ backgroundColor: currentSong.atmosphere.accent }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Subtle Notes Trigger */}
      <div>
        <button
          onClick={onOpenNotes}
          className="text-xs font-sans text-ink-tertiary hover:text-ink-primary transition-colors tracking-wide py-1 cursor-pointer select-none"
        >
          Notes
        </button>
      </div>

    </header>
  );
};
