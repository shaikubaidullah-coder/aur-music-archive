import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LinerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinerNotesModal: React.FC<LinerNotesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        
        {/* Subtle backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Notes Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-surface-elevated/95 border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 p-6 sm:p-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
            <span className="font-display text-xl text-ink-primary">
              About this collection
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-ink-tertiary hover:text-ink-primary hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Book-like reflection */}
          <div className="py-6 space-y-4 text-ink-secondary/90 font-sans text-sm sm:text-base leading-relaxed font-light">
            <p>
              AUR began with three friends in Karachi — Ahad, Usama, and Raffey — writing melodies in quiet rooms. No studio machinery, no focus groups. Just nylon-string guitar, honest Urdu poetry, and close harmonies.
            </p>

            <p>
              When <em>Tu Hai Kahan</em> crossed borders and found millions of listeners, it did so because of a vulnerability that cannot be manufactured.
            </p>

            <p>
              This website is a small private place built to hold these recordings without algorithms, ranking, or social feeds. Just the artwork, the songs, and space to listen.
            </p>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-ink-tertiary">
            <span>Press Esc to close</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-ink-primary text-canvas rounded-full hover:bg-white transition-colors cursor-pointer font-medium"
            >
              Return to music
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
