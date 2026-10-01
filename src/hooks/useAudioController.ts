import { useState, useEffect, useRef, useCallback } from 'react';
import { Song, PlaybackState } from '../types/song';
import { SONGS_ARCHIVE } from '../data/songs';

export interface AudioController {
  currentSong: Song;
  currentIndex: number;
  playbackState: PlaybackState;
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  volume: number;
  isMuted: boolean;
  errorMessage: string | null;
  play: () => Promise<void>;
  pause: () => void;
  togglePlay: () => void;
  seek: (timeInSeconds: number) => void;
  seekByPercent: (percent: number) => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  playNext: () => void;
  playPrev: () => void;
  selectTrack: (songOrIndex: Song | number, shouldPlay?: boolean) => void;
}

export function useAudioController(): AudioController {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(SONGS_ARCHIVE[0].duration);
  const [volume, setVolumeState] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevVolumeRef = useRef<number>(0.85);

  const currentSong = SONGS_ARCHIVE[currentIndex] || SONGS_ARCHIVE[0];

  // Initialize Audio instance once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
      setErrorMessage(null);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleWaiting = () => {
      setPlaybackState('loading');
    };

    const handlePlaying = () => {
      setPlaybackState('playing');
      setErrorMessage(null);
    };

    const handlePause = () => {
      if (audio.ended) {
        // Track completed naturally
        setPlaybackState('paused');
      } else {
        setPlaybackState('paused');
      }
    };

    const handleEnded = () => {
      // Natural track conclusion: advance to next track
      setPlaybackState('paused');
      setCurrentIndex((prev) => (prev + 1) % SONGS_ARCHIVE.length);
    };

    const handleError = () => {
      setPlaybackState('error');
      setErrorMessage('This recording could not be loaded. Verify file path.');
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Update source when currentSong changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = playbackState === 'playing';
    audio.src = currentSong.audioSrc;
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(currentSong.duration);

    if (wasPlaying) {
      setPlaybackState('loading');
      audio.play().catch((err) => {
        console.warn('Playback prevented by browser policy:', err);
        setPlaybackState('paused');
      });
    }
  }, [currentIndex]);

  // Volume & Mute synchronizer
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    setErrorMessage(null);
    try {
      setPlaybackState('loading');
      await audioRef.current.play();
    } catch (err: unknown) {
      console.warn('Playback error:', err);
      setPlaybackState('paused');
      setErrorMessage('Playback interrupted or blocked by browser.');
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlaybackState('paused');
  }, []);

  const togglePlay = useCallback(() => {
    if (playbackState === 'playing') {
      pause();
    } else {
      play();
    }
  }, [playbackState, play, pause]);

  const seek = useCallback((timeInSeconds: number) => {
    if (!audioRef.current) return;
    const clamped = Math.max(0, Math.min(timeInSeconds, duration));
    audioRef.current.currentTime = clamped;
    setCurrentTime(clamped);
  }, [duration]);

  const seekByPercent = useCallback((percent: number) => {
    const clamped = Math.max(0, Math.min(percent, 1));
    seek(clamped * duration);
  }, [duration, seek]);

  const setVolume = useCallback((val: number) => {
    const clamped = Math.max(0, Math.min(val, 1));
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      if (!prev) {
        prevVolumeRef.current = volume;
        return true;
      } else {
        if (volume === 0) {
          setVolumeState(prevVolumeRef.current || 0.85);
        }
        return false;
      }
    });
  }, [volume]);

  const playNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SONGS_ARCHIVE.length);
  }, []);

  const playPrev = useCallback(() => {
    // If more than 3s into track, restart track; otherwise go to previous
    if (audioRef.current && audioRef.current.currentTime > 3) {
      seek(0);
    } else {
      setCurrentIndex((prev) => (prev - 1 + SONGS_ARCHIVE.length) % SONGS_ARCHIVE.length);
    }
  }, [seek]);

  const selectTrack = useCallback((songOrIndex: Song | number, shouldPlay: boolean = true) => {
    let index: number;
    if (typeof songOrIndex === 'number') {
      index = songOrIndex;
    } else {
      index = SONGS_ARCHIVE.findIndex((s) => s.id === songOrIndex.id);
    }

    if (index !== -1) {
      setCurrentIndex(index);
      if (shouldPlay && audioRef.current) {
        // Trigger play on next tick
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.play().catch(console.warn);
          }
        }, 50);
      }
    }
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is inside an input, textarea, or contentEditable
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight' && !e.shiftKey) {
        e.preventDefault();
        seek(currentTime + 5);
      } else if (e.code === 'ArrowLeft' && !e.shiftKey) {
        e.preventDefault();
        seek(currentTime - 5);
      } else if (e.code === 'ArrowRight' && e.shiftKey) {
        e.preventDefault();
        playNext();
      } else if (e.code === 'ArrowLeft' && e.shiftKey) {
        e.preventDefault();
        playPrev();
      } else if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMute();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, seek, currentTime, playNext, playPrev, toggleMute]);

  const isPlaying = playbackState === 'playing';
  const isLoading = playbackState === 'loading';
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return {
    currentSong,
    currentIndex,
    playbackState,
    isPlaying,
    isLoading,
    currentTime,
    duration,
    progress,
    volume,
    isMuted,
    errorMessage,
    play,
    pause,
    togglePlay,
    seek,
    seekByPercent,
    setVolume,
    toggleMute,
    playNext,
    playPrev,
    selectTrack,
  };
}
