import { useRef, useState, useEffect } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Hero() {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleEnterExperience = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 0.8;
    video.play();

    setSoundOn(true);
    setHasEntered(true);
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = soundOn;
    setSoundOn(!soundOn);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black isolate">
      
      {/* --- 1. THE ENTER OVERLAY --- */}
      {!hasEntered && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-700 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6 sm:mb-8 tracking-tighter drop-shadow-lg text-center">
            LAKSHYA 2026
          </h1>
          <button
            onClick={handleEnterExperience}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-red-600 hover:bg-red-700 text-white text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] flex items-center gap-2"
          >
            <PlayArrowIcon className="text-xl sm:text-2xl" />
            ENTER EXPERIENCE
          </button>
        </div>
      )}

      {/* --- 2. BACKGROUND VIDEO --- */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`
          absolute inset-0 w-full h-full
          ${isMobile ? 'object-contain' : 'object-cover'}
        `}
      >
        <source src="/backgroundvid.mp4" type="video/mp4" />
      </video>

      {/* --- 2.5 MOBILE GRADIENT OVERLAY (optional for better text readability) --- */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10 pointer-events-none" />
      )}

      {/* --- 3. SOUND TOGGLE --- */}
      {hasEntered && (
        <button
          onClick={toggleSound}
          aria-label={soundOn ? "Mute sound" : "Enable sound"}
          className="
            absolute bottom-20 right-4 sm:bottom-24 sm:right-6 z-40
            p-2.5 sm:p-3 rounded-full
            bg-white/10 backdrop-blur-md
            text-white
            hover:bg-white/20
            transition
            flex items-center justify-center
            border border-white/10
          "
        >
          {soundOn ? (
            <VolumeUpIcon fontSize={isMobile ? "small" : "medium"} />
          ) : (
            <VolumeOffIcon fontSize={isMobile ? "small" : "medium"} />
          )}
        </button>
      )}

      {/* --- 4. SKEWED DIVIDER --- */}
      <div
        className="absolute -bottom-10 left-0 w-[110%] h-20 sm:h-24 bg-black -rotate-2 origin-bottom-left z-20 pointer-events-none"
        style={{ transform: "rotate(-2deg) scale(1.1)" }}
      />
    </div>
  );
}

export default Hero;