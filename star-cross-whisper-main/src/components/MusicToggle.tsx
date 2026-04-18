import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Soft ambient piano loop (royalty free)
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=relaxing-145038.mp3"
    );
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed top-6 right-6 z-50 h-12 w-12 rounded-full border border-border/60 bg-background/40 backdrop-blur-md flex items-center justify-center text-starlight hover:text-rose-gold hover:border-rose-gold/50 transition-all duration-500 glow-soft"
    >
      {playing ? <Music className="h-4 w-4" /> : <VolumeX className="h-4 w-4 opacity-70" />}
    </button>
  );
};

export default MusicToggle;
