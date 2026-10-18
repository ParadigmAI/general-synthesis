"use client";

import { useEffect, useRef, useState } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Full-bleed looping background clip with a pause control. Autoplays muted
// unless the visitor prefers reduced motion, in which case only the poster shows.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={`${base}/media/hero.mp4`}
        poster={`${base}/media/hero-poster.jpg`}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute right-5 bottom-5 z-20 grid size-9 place-items-center rounded-full border border-white/50 bg-ink/35 text-white backdrop-blur-sm transition-colors hover:bg-ink/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:bottom-8"
      >
        {playing ? (
          <svg viewBox="0 0 12 12" className="size-3" fill="currentColor" aria-hidden="true">
            <rect x="2" y="1" width="3" height="10" />
            <rect x="7" y="1" width="3" height="10" />
          </svg>
        ) : (
          <svg viewBox="0 0 12 12" className="size-3" fill="currentColor" aria-hidden="true">
            <path d="M3 1.5v9l7-4.5z" />
          </svg>
        )}
      </button>
    </>
  );
}
