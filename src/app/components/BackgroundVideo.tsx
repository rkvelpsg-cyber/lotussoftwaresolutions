export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/lotus_background_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/35" />
    </div>
  );
}
