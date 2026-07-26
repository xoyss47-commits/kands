import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music2, SkipForward, SkipBack, Volume2, VolumeX, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config";
import { useLanguage } from "@/i18n";

function formatTime(sec: number): string {
  if (!isFinite(sec) || isNaN(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const uiLabels: Record<string, {
  loadError: string;
  autoplayError: string;
  youtubeBadge: string;
  nowPlaying: string;
  waiting: string;
  muteOn: string;
  muteOff: string;
  skipBack: string;
  skipFwd: string;
  pause: string;
  play: string;
  youtubeOpen: string;
  coverAlt: string;
}> = {
  tr: {
    loadError: "Şarkı şu an yüklenemedi. Lütfen config.ts'deki audioUrl adresini kontrol edin veya kendi şarkı dosyanızı yükleyin.",
    autoplayError: "Tarayıcı otomatik oynatmayı engelledi, lütfen butona tekrar basın.",
    youtubeBadge: "YouTube'da dinle 🎬",
    nowPlaying: "Şimdi çalıyor 🎶",
    waiting: "Seni bekliyor 💕",
    muteOn: "Sesi aç",
    muteOff: "Sesi kapat",
    skipBack: "10 sn geri",
    skipFwd: "10 sn ileri",
    pause: "Duraklat",
    play: "Oynat",
    youtubeOpen: "YouTube'da aç",
    coverAlt: "albüm kapağı",
  },
  ru: {
    loadError: "Песня сейчас не может быть загружена. Пожалуйста, проверь адрес audioUrl в config.ts или загрузи свой файл песни.",
    autoplayError: "Браузер заблокировал автопроигрывание, пожалуйста, нажми кнопку ещё раз.",
    youtubeBadge: "Слушать на YouTube 🎬",
    nowPlaying: "Играет сейчас 🎶",
    waiting: "Ждёт тебя 💕",
    muteOn: "Включить звук",
    muteOff: "Выключить звук",
    skipBack: "10 сек назад",
    skipFwd: "10 сек вперёд",
    pause: "Пауза",
    play: "Играть",
    youtubeOpen: "Открыть на YouTube",
    coverAlt: "обложка альбома",
  },
  en: {
    loadError: "Song cannot be loaded right now. Please check the audioUrl address in config.ts or upload your own song file.",
    autoplayError: "Browser blocked autoplay, please press the button again.",
    youtubeBadge: "Listen on YouTube 🎬",
    nowPlaying: "Now playing 🎶",
    waiting: "Waiting for you 💕",
    muteOn: "Unmute",
    muteOff: "Mute",
    skipBack: "10 sec back",
    skipFwd: "10 sec forward",
    pause: "Pause",
    play: "Play",
    youtubeOpen: "Open on YouTube",
    coverAlt: "album cover",
  },
  ro: {
    loadError: "Cântecul nu poate fi încărcat acum. Te rog, verifică adresa audioUrl din config.ts sau încarcă propriul fișier cu cântec.",
    autoplayError: "Browserul a blocat redarea automată, te rog apasă butonul din nou.",
    youtubeBadge: "Ascultă pe YouTube 🎬",
    nowPlaying: "Redă acum 🎶",
    waiting: "Te așteaptă 💕",
    muteOn: "Porneste sunetul",
    muteOff: "Opreste sunetul",
    skipBack: "10 sec înapoi",
    skipFwd: "10 sec înainte",
    pause: "Pauză",
    play: "Redă",
    youtubeOpen: "Deschide pe YouTube",
    coverAlt: "copertă album",
  },
};

export default function MusicPlayer() {
  const song = siteConfig.ourSong;
  const { t, lang } = useLanguage();
  const labels = uiLabels[lang] ?? uiLabels.en;
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const useYouTube = !!song.youtubeVideoId;

  const songTitle = t("content.song.title");
  const songArtist = t("content.song.artist");
  const songAlbum = t("content.song.album");

  useEffect(() => {
    if (useYouTube) return;
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setDuration(audio.duration || 0);
      setLoadError(null);
    };
    const onTime = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const onEnded = () => setIsPlaying(false);
    const onError = () => {
      setLoadError(labels.loadError);
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [song.audioUrl, isDragging, useYouTube, labels.loadError]);

  const togglePlay = async () => {
    if (useYouTube) return;
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      setLoadError(labels.autoplayError);
      setIsPlaying(false);
    }
  };

  const seekFromEvent = (clientX: number) => {
    const bar = progressRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const target = ratio * duration;
    audio.currentTime = target;
    setCurrentTime(target);
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    seekFromEvent(e.clientX);
    const onMove = (ev: MouseEvent) => seekFromEvent(ev.clientX);
    const onUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  const skip = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(audio.currentTime + delta, 0), duration || audio.duration || 0);
  };

  return (
    <section id="sarkimiz" className="relative py-20 md:py-28 reveal-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-lavender-300 dark:to-lavender-500/70" />
            <Music2 className="w-6 h-6 text-lavender-500 dark:text-lavender-300 animate-float" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-lavender-300 dark:to-lavender-500/70" />
          </div>
          <h2 className="section-title">{t("content.song.sectionTitle")}</h2>
          <p className="section-subtitle">{t("content.song.sectionSubtitle")}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card romantic-shadow p-5 md:p-7 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-lavender-200/60 to-rose-200/60 dark:from-lavender-500/20 dark:to-rose-500/20 blur-3xl animate-pulse-soft pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-rose-200/60 to-blush-200/60 dark:from-rose-500/20 dark:to-blush-400/20 blur-3xl animate-pulse-soft pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-center gap-5 md:gap-7">
              <div className="relative shrink-0">
                <div
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-white/70 dark:ring-midnight-200/60 romantic-shadow ${
                    isPlaying || useYouTube ? "animate-[spin_8s_linear_infinite]" : ""
                  }`}
                >
                  <img
                    src={song.coverUrl}
                    alt={`${songTitle} ${labels.coverAlt}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20vinyl%20album%20cover%20soft%20pastel%20pink%20purple%20dreamy%20aesthetic%20rose%20petals%20heart%20shape%20sparkles%20gentle%20gradient&image_size=square_hd";
                    }}
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.35)] pointer-events-none" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blush-300 to-lavender-400 dark:from-rose-400 dark:to-lavender-500 shadow-lg ring-4 ring-white/70 dark:ring-midnight-100/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-midnight-50" />
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-end gap-1 h-6 px-3 py-1 rounded-full bg-white/90 dark:bg-midnight-100/90 shadow-md">
                  <span className="w-1 rounded-full bg-rose-400 animate-[musicBar_0.9s_ease-in-out_infinite]" style={{ height: "40%", animationDelay: "0s" }} />
                  <span className="w-1 rounded-full bg-blush-400 animate-[musicBar_0.9s_ease-in-out_infinite]" style={{ height: "90%", animationDelay: "0.15s" }} />
                  <span className="w-1 rounded-full bg-lavender-400 animate-[musicBar_0.9s_ease-in-out_infinite]" style={{ height: "60%", animationDelay: "0.3s" }} />
                  <span className="w-1 rounded-full bg-rose-400 animate-[musicBar_0.9s_ease-in-out_infinite]" style={{ height: "85%", animationDelay: "0.45s" }} />
                  <span className="w-1 rounded-full bg-blush-400 animate-[musicBar_0.9s_ease-in-out_infinite]" style={{ height: "45%", animationDelay: "0.6s" }} />
                </div>
              </div>

              <div className="flex-1 w-full min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 dark:bg-rose-500/20 text-rose-600 dark:text-rose-100 text-xs font-medium mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 dark:bg-rose-200 animate-pulse" />
                      {useYouTube ? labels.youtubeBadge : isPlaying ? labels.nowPlaying : labels.waiting}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-rose-700 dark:text-rose-100 truncate">
                      {songTitle}
                    </h3>
                    <p className="font-body text-sm md:text-base text-blush-600 dark:text-lavender-200/90 truncate">
                      {songArtist} • <span className="opacity-80">{songAlbum}</span>
                    </p>
                  </div>

                  {!useYouTube && (
                    <button
                      onClick={() => {
                        const audio = audioRef.current;
                        if (!audio) return;
                        audio.muted = !audio.muted;
                        setIsMuted(audio.muted);
                      }}
                      className="shrink-0 w-9 h-9 rounded-full bg-white/60 dark:bg-midnight-200/60 hover:bg-white dark:hover:bg-midnight-100/90 text-blush-600 dark:text-lavender-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                      title={isMuted ? labels.muteOn : labels.muteOff}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  )}
                </div>

                {useYouTube ? (
                  <div className="mt-4">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-2 ring-white/60 dark:ring-midnight-100/40 aspect-video">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${song.youtubeVideoId}?rel=0&modestbranding=1`}
                        title={`${songTitle} - ${songArtist}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    {song.youtubeVideoId && (
                      <a
                        href={`https://www.youtube.com/watch?v=${song.youtubeVideoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-lavender-600 dark:text-lavender-200 hover:text-rose-600 dark:hover:text-rose-200 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {labels.youtubeOpen}
                      </a>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="mt-4">
                      <div
                        ref={progressRef}
                        onMouseDown={handleProgressMouseDown}
                        className="group relative w-full h-2 rounded-full bg-rose-100 dark:bg-midnight-200/70 cursor-pointer overflow-hidden"
                      >
                        <div
                          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-rose-400 via-blush-400 to-lavender-400 dark:from-rose-300 dark:via-blush-200 dark:to-lavender-300 transition-[width] duration-100 ease-linear"
                          style={{ width: `${progressPct}%` }}
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-midnight-50 shadow-lg ring-2 ring-rose-300 dark:ring-lavender-300 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ left: `${progressPct}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between mt-2 mb-4 font-body text-xs text-blush-600 dark:text-lavender-200/80 tabular-nums">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <button
                        onClick={() => skip(-10)}
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/60 dark:bg-midnight-200/60 hover:bg-white dark:hover:bg-midnight-100/90 text-rose-600 dark:text-rose-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                        title={labels.skipBack}
                      >
                        <SkipBack className="w-5 h-5" />
                      </button>

                      <button
                        onClick={togglePlay}
                        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-300/50 dark:shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden bg-gradient-to-r from-rose-400 via-blush-400 to-lavender-400"
                        title={isPlaying ? labels.pause : labels.play}
                      >
                        <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                        {isPlaying ? <Pause className="w-6 h-6 md:w-7 md:h-7" /> : <Play className="w-6 h-6 md:w-7 md:h-7 ml-0.5" />}
                      </button>

                      <button
                        onClick={() => skip(10)}
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/60 dark:bg-midnight-200/60 hover:bg-white dark:hover:bg-midnight-100/90 text-rose-600 dark:text-rose-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                        title={labels.skipFwd}
                      >
                        <SkipForward className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                )}

                <p className="mt-5 text-center font-script text-base md:text-lg text-lavender-500 dark:text-lavender-200/90">
                  {t("content.song.smallNote")}
                </p>

                {loadError && (
                  <div className="mt-4 p-3 rounded-2xl bg-rose-50/80 dark:bg-midnight-300/80 border border-rose-200 dark:border-rose-400/30 text-sm text-rose-700 dark:text-rose-100 text-center">
                    ⚠️ {loadError}
                  </div>
                )}
              </div>
            </div>

            {!useYouTube && song.audioUrl && (
              <audio
                ref={audioRef}
                src={song.audioUrl}
                preload="metadata"
                playsInline
                crossOrigin="anonymous"
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes musicBar {
          0%, 100% { transform: scaleY(0.3); transform-origin: bottom; }
          50%      { transform: scaleY(1);   transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
