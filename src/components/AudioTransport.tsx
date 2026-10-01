import React from 'react';
import { Song, PlaybackState } from '../types/song';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, AlertCircle } from 'lucide-react';

interface AudioTransportProps {
  currentSong: Song;
  playbackState: PlaybackState;
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  volume: number;
  isMuted: boolean;
  errorMessage: string | null;
  onTogglePlay: () => void;
  onSeekPercent: (percent: number) => void;
  onSetVolume: (vol: number) => void;
  onToggleMute: () => void;
  onPlayNext: () => void;
  onPlayPrev: () => void;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export const AudioTransport: React.FC<AudioTransportProps> = ({
  currentSong,
  isPlaying,
  isLoading,
  currentTime,
  duration,
  progress,
  volume,
  isMuted,
  errorMessage,
  onTogglePlay,
  onSeekPercent,
  onSetVolume,
  onToggleMute,
  onPlayNext,
  onPlayPrev,
}) => {
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    onSeekPercent(percent);
  };

  return (
    <aside 
      aria-label="Audio Controls"
      className="fixed bottom-0 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none select-none flex justify-center"
      style={{
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))',
      }}
    >
      <div className="w-full max-w-xl pointer-events-auto">
        
        {/* Error notification if playback failed */}
        {errorMessage && (
          <div className="mb-2 max-w-sm mx-auto bg-red-950/80 border border-red-500/30 text-red-200 text-xs font-sans px-3 py-1.5 rounded-full flex items-center justify-between shadow-xl backdrop-blur-md">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-3.5 h-3.5 text-red-400" />
              <span>{errorMessage}</span>
            </div>
            <button onClick={onPlayNext} className="underline text-[10px] ml-2">Skip</button>
          </div>
        )}

        {/* Floating Minimal Sound Dock */}
        <div className="bg-surface/90 backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.85)] px-3.5 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between gap-2.5 sm:gap-6 transition-all duration-500">
          
          {/* Left: Artwork Thumbnail & Song Name */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-black/60 border border-white/10 shrink-0 flex items-center justify-center relative shadow-inner">
              <img
                src={currentSong.posterSrc}
                alt={currentSong.title}
                className={`w-full h-full object-contain ${isPlaying ? 'animate-spin-slow' : ''}`}
                style={{ animationDuration: '8s' }}
              />
            </div>

            <div className="min-w-0 max-w-[95px] xs:max-w-[120px] sm:max-w-[150px]">
              <div className="font-display text-sm sm:text-base text-ink-primary truncate leading-tight">
                {currentSong.title}
              </div>
              <div className="text-[10px] sm:text-[11px] text-ink-tertiary truncate">
                {currentSong.artist}
              </div>
            </div>
          </div>

          {/* Center: Playback Controls & Hairline Timeline */}
          <div className="flex flex-col items-center flex-1 max-w-xs space-y-1">
            
            {/* Tactile Buttons */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <button
                onClick={onPlayPrev}
                className="text-ink-tertiary hover:text-ink-primary transition-colors p-1 active:scale-90 cursor-pointer"
                title="Previous track"
                aria-label="Previous track"
              >
                <SkipBack className="w-3.5 h-3.5 fill-current" />
              </button>

              <button
                onClick={onTogglePlay}
                disabled={isLoading}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink-primary text-canvas flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-50"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause recording' : 'Play recording'}
              >
                {isLoading ? (
                  <div className="w-3.5 h-3.5 border-2 border-canvas border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-canvas text-canvas" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-canvas text-canvas ml-0.5" />
                )}
              </button>

              <button
                onClick={onPlayNext}
                className="text-ink-tertiary hover:text-ink-primary transition-colors p-1 active:scale-90 cursor-pointer"
                title="Next track"
                aria-label="Next track"
              >
                <SkipForward className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>

            {/* Hairline Timeline Bar */}
            <div className="w-full flex items-center space-x-2 text-[10px] font-mono text-ink-tertiary">
              <span className="w-7 text-right tabular-nums">
                {formatTime(currentTime)}
              </span>

              <div
                onClick={handleTimelineClick}
                className="relative flex-1 h-4 flex items-center cursor-pointer group py-1.5 touch-none"
                role="slider"
                aria-label="Timeline scrubber"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="w-full h-[2px] group-hover:h-[3px] bg-white/10 rounded-full overflow-hidden relative transition-all">
                  <div
                    className="h-full rounded-full transition-all duration-75"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: currentSong.atmosphere.accent,
                    }}
                  />
                </div>
              </div>

              <span className="w-7 text-left tabular-nums">
                {formatTime(duration)}
              </span>
            </div>

          </div>

          {/* Right: Ambient Sound Equalizer & Volume */}
          <div className="flex items-center space-x-3 shrink-0">
            
            {/* Subtle Sound Waveform Activity Indicator */}
            <div className="hidden sm:flex items-center space-x-0.5 h-3 px-1">
              <span 
                className={`w-0.5 rounded-full transition-all duration-300 ${isPlaying ? 'h-3 bg-white/80 animate-pulse' : 'h-1 bg-white/20'}`}
                style={{ animationDelay: '0ms' }}
              />
              <span 
                className={`w-0.5 rounded-full transition-all duration-300 ${isPlaying ? 'h-2 bg-white/80 animate-pulse' : 'h-1.5 bg-white/20'}`}
                style={{ animationDelay: '180ms' }}
              />
              <span 
                className={`w-0.5 rounded-full transition-all duration-300 ${isPlaying ? 'h-3.5 bg-white/80 animate-pulse' : 'h-1 bg-white/20'}`}
                style={{ animationDelay: '360ms' }}
              />
            </div>

            {/* Volume */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={onToggleMute}
                className="text-ink-tertiary hover:text-ink-primary p-1 active:scale-95 cursor-pointer"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5 text-red-400" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => onSetVolume(parseFloat(e.target.value))}
                className="w-12 sm:w-16 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white hidden sm:block"
                title="Volume"
              />
            </div>

          </div>

        </div>

      </div>
    </aside>
  );
};
