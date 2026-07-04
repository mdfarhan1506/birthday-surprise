"use client";

import { useEffect, useRef } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playMusic = () => {
      audioRef.current?.play().catch(() => {});
      window.removeEventListener("click", playMusic);
      window.removeEventListener("touchstart", playMusic);
    };

    window.addEventListener("click", playMusic);
    window.addEventListener("touchstart", playMusic);

    return () => {
      window.removeEventListener("click", playMusic);
      window.removeEventListener("touchstart", playMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/happy.mp3"
      loop
    />
  );
}