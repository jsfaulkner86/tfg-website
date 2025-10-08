import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio ref={audioRef} loop>
        <source src="/classical-calm.mp3" type="audio/mpeg" />
      </audio>

      <div className="flex flex-col items-end gap-2">
        {showControls && (
          <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg animate-fade-in flex flex-col gap-3 min-w-[200px]">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="h-8 w-8"
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
              <Slider
                value={[volume]}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="flex-1"
                disabled={isMuted}
              />
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowControls(!showControls)}
            className="h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur-sm hover:bg-accent"
          >
            <Music className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            className="h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur-sm hover:bg-accent"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
