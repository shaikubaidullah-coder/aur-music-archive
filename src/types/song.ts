export interface Song {
  id: string;
  index: string; // "01", "02", etc.
  title: string;
  urduTitle: string;
  artist: string;
  duration: number; // in seconds
  formattedDuration: string;
  audioSrc: string;
  posterSrc: string;
  aspectRatio: '16:9' | '9:16' | '1:1' | '3:4';
  year: string;
  description: string;
  atmosphere: {
    bgCanvas: string;
    accent: string;
    ambientGlow: string;
    roomTint: string;
  };
}

export type PlaybackState = 'idle' | 'loading' | 'playing' | 'paused' | 'error';
