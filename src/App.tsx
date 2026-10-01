import React, { useState, useEffect } from 'react';
import { useAudioController } from './hooks/useAudioController';
import { Header } from './components/Header';
import { ExhibitionStage } from './components/ExhibitionStage';
import { CollectionGallery } from './components/CollectionGallery';
import { AudioTransport } from './components/AudioTransport';
import { Footer } from './components/Footer';
import { LinerNotesModal } from './components/LinerNotesModal';

export const App: React.FC = () => {
  const audio = useAudioController();
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);

  // Keyboard shortcut for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsNotesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="relative min-h-[100dvh] flex flex-col justify-between text-ink-primary transition-colors duration-1000 selection:bg-white/20"
      style={{
        backgroundColor: audio.currentSong.atmosphere.bgCanvas,
      }}
    >
      {/* Fixed Subtle Film Grain Texture */}
      <div className="fixed inset-0 pointer-events-none film-grain z-50 opacity-[0.035]" />

      {/* Dynamic Artwork-Derived Atmospheric Lighting */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-all duration-1000 -z-10 ${
          audio.isPlaying ? 'animate-room-breathe' : ''
        }`}
        style={{
          background: `radial-gradient(ellipse at 50% 28%, ${audio.currentSong.atmosphere.ambientGlow} 0%, transparent 65%)`,
          opacity: audio.isPlaying ? 0.9 : 0.45,
        }}
      />

      {/* Minimal Header */}
      <Header
        currentSong={audio.currentSong}
        onSelectSong={audio.selectTrack}
        onOpenNotes={() => setIsNotesOpen(true)}
      />

      {/* Main Exhibition Sequence */}
      <main className="flex-1 flex flex-col justify-center">
        {/* The Listening Chamber (Hero Stage) */}
        <ExhibitionStage
          currentSong={audio.currentSong}
          playbackState={audio.playbackState}
          isPlaying={audio.isPlaying}
          isLoading={audio.isLoading}
          onTogglePlay={audio.togglePlay}
          onSelectNext={audio.playNext}
          onSelectPrev={audio.playPrev}
        />

        {/* The Curated Shelf Gallery */}
        <CollectionGallery
          currentSong={audio.currentSong}
          isPlaying={audio.isPlaying}
          onSelectSong={audio.selectTrack}
        />
      </main>

      {/* Poetic Sign-off Footer */}
      <Footer onOpenNotes={() => setIsNotesOpen(true)} />

      {/* Floating Featherlight Sound Dock */}
      <AudioTransport
        currentSong={audio.currentSong}
        playbackState={audio.playbackState}
        isPlaying={audio.isPlaying}
        isLoading={audio.isLoading}
        currentTime={audio.currentTime}
        duration={audio.duration}
        progress={audio.progress}
        volume={audio.volume}
        isMuted={audio.isMuted}
        errorMessage={audio.errorMessage}
        onTogglePlay={audio.togglePlay}
        onSeekPercent={audio.seekByPercent}
        onSetVolume={audio.setVolume}
        onToggleMute={audio.toggleMute}
        onPlayNext={audio.playNext}
        onPlayPrev={audio.playPrev}
      />

      {/* Curatorial Story Modal */}
      <LinerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />

    </div>
  );
};

export default App;
