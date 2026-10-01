import React from 'react';

interface FooterProps {
  onOpenNotes: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenNotes }) => {
  return (
    <footer className="w-full pb-32 pt-16 px-6 sm:px-12 lg:px-20 text-xs font-sans text-ink-tertiary select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.04] pt-8">
        
        {/* Left: Artist Identification */}
        <div className="flex items-center space-x-2">
          <span className="font-display text-base text-ink-secondary">AUR</span>
          <span className="text-ink-tertiary font-light">/ Personal Archive</span>
        </div>

        {/* Center: Quiet Sign-off */}
        <p className="text-ink-tertiary font-light text-center sm:text-left">
          Recorded in quiet rooms. Preserved for quiet listening.
        </p>

        {/* Right: Notes */}
        <div>
          <button
            onClick={onOpenNotes}
            className="hover:text-ink-primary transition-colors cursor-pointer font-light"
          >
            About these songs
          </button>
        </div>

      </div>
    </footer>
  );
};
