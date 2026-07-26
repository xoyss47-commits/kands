import { useRef, useState, useEffect, useCallback } from "react";
import { Camera, User, Sparkles, RotateCcw, Save } from "lucide-react";
import { siteConfig } from "@/config";
import { compressImage, formatBytes } from "@/lib/compressImage";
import { useLanguage } from "@/i18n";

const BIO_PHOTO_KEY_1 = "kands_bio_photo_1_v1";
const BIO_PHOTO_KEY_2 = "kands_bio_photo_2_v1";
const AUTOSAVE_INTERVAL_MS = 30_000;

interface PersonProps {
  person: typeof siteConfig.person1;
  bio: typeof siteConfig.person1Bio;
  side: "left" | "right";
  storageKey: string;
}

function PersonCard({ person, bio, side, storageKey }: PersonProps) {
  const { t, locale } = useLanguage();
  const [photo, setPhoto] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved && saved.startsWith("data:image") ? saved : bio.defaultPhoto;
    } catch {
      return bio.defaultPhoto;
    }
  });
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<string>(photo);

  useEffect(() => {
    photoRef.current = photo;
  }, [photo]);

  const persist = useCallback((data: string) => {
    try {
      if (data === bio.defaultPhoto) {
        localStorage.removeItem(storageKey);
      } else if (data.startsWith("data:image")) {
        localStorage.setItem(storageKey, data);
      }
      setSaveError(null);
      setSavedAt(new Date());
      return true;
    } catch (err) {
      if (err instanceof DOMException && (err.name === "QuotaExceededError" || err.code === 22)) {
        const est = data.length * 2;
        setSaveError(t("about.errorQuota", { size: formatBytes(est) }));
      } else {
        setSaveError(t("about.errorGeneric"));
      }
      return false;
    }
  }, [storageKey, bio.defaultPhoto, t]);

  useEffect(() => {
    persist(photo);
  }, [photo, persist]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      persist(photoRef.current);
    }, AUTOSAVE_INTERVAL_MS);

    const onVisibility = () => {
      if (document.visibilityState === "hidden") persist(photoRef.current);
    };
    const onBeforeUnload = () => {
      persist(photoRef.current);
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("beforeunload", onBeforeUnload);
      persist(photoRef.current);
    };
  }, [persist]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsCompressing(true);
    setSaveError(null);
    try {
      const data = await compressImage(file, {
        maxWidth: 1024,
        maxHeight: 1024,
        quality: 0.86,
        type: "image/jpeg",
      });
      setPhoto(data);
    } catch {
      setSaveError(t("generic.errorFileRead"));
    } finally {
      setIsCompressing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const resetPhoto = () => setPhoto(bio.defaultPhoto);

  return (
    <div className={`glass-card romantic-shadow p-6 md:p-8 ${side === "right" ? "md:mt-10" : ""}`}>
      <div className="photo-upload-zone group mx-auto mb-6 max-w-xs">
        <div onClick={() => fileInputRef.current?.click()} className="absolute inset-0 cursor-pointer z-10" />
        <img src={photo} alt={person.name} className="w-full h-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex items-center gap-2 text-white font-medium text-sm">
            <Camera className="w-4 h-4" />
            <span>{t("about.replacePhoto")}</span>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            resetPhoto();
          }}
          className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-white/90 dark:bg-midnight-100/90 text-rose-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-midnight-50 hover:scale-110 duration-300 shadow-md"
          title={t("about.resetPhoto")}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
      </div>

      <div className="text-center">
        <p className="font-script text-lg text-blush-500 dark:text-lavender-300 mb-1">{person.role}</p>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-rose-700 dark:text-rose-100 mb-1">
          {person.name}
        </h3>
        <p className="font-body text-sm text-blush-500 dark:text-lavender-300 italic mb-4">
          &ldquo;{person.nickname}&rdquo;
        </p>

        <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-rose-300 dark:via-lavender-400 to-transparent mb-5" />

        <p className="font-body text-sm md:text-base text-rose-900/80 dark:text-midnight-50/85 leading-relaxed mb-6 px-2">
          {bio.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          {bio.traits.map((trait) => (
            <span
              key={trait}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-rose-100 to-lavender-100 dark:from-midnight-200/60 dark:to-lavender-800/40 text-rose-600 dark:text-rose-100 border border-rose-200/60 dark:border-lavender-600/40"
            >
              <Sparkles className="w-3 h-3" />
              {trait}
            </span>
          ))}
        </div>

        <div className="mt-5 min-h-[40px]">
          {saveError ? (
            <div className="p-2.5 rounded-2xl bg-rose-50/80 dark:bg-midnight-300/50 border border-rose-200 dark:border-rose-400/30 text-xs text-rose-700 dark:text-rose-100 text-left flex items-start gap-2">
              <span>⚠️</span>
              <span>{saveError}</span>
            </div>
          ) : isCompressing ? (
            <div className="p-2.5 rounded-2xl bg-amber-50/80 dark:bg-midnight-300/40 border border-amber-200 dark:border-amber-400/40 flex items-center justify-center gap-1.5 text-xs text-amber-700 dark:text-amber-100">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{t("about.compressing")}</span>
            </div>
          ) : savedAt ? (
            <div className="p-2.5 rounded-2xl bg-lavender-50/80 dark:bg-midnight-300/40 border border-lavender-200 dark:border-lavender-500/30 flex items-center justify-center gap-1.5 text-xs text-lavender-700 dark:text-lavender-200">
              <Save className="w-3.5 h-3.5" />
              <span>{t("about.lastSaved")} {savedAt.toLocaleTimeString(locale)} {t("about.autosave30s")}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function BioSection() {
  const { t } = useLanguage();
  return (
    <section id="hakkimizda" className="relative py-20 md:py-28 reveal-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blush-300" />
            <User className="w-6 h-6 text-blush-500" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blush-300" />
          </div>
          <h2 className="section-title">{t("about.sectionTitle")}</h2>
          <p className="section-subtitle">
            {t("about.sectionSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto items-start">
          <PersonCard person={siteConfig.person1} bio={siteConfig.person1Bio} side="left" storageKey={BIO_PHOTO_KEY_1} />
          <PersonCard person={siteConfig.person2} bio={siteConfig.person2Bio} side="right" storageKey={BIO_PHOTO_KEY_2} />
        </div>

        <div className="flex justify-center mt-10 -translate-y-6">
          <div className="relative w-20 h-20 md:w-24 md:h-24 glass-card rounded-full flex items-center justify-center romantic-shadow">
            <div className="text-4xl md:text-5xl animate-heart-beat">💕</div>
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-rose-200/30 via-blush-200/30 to-lavender-200/30 blur-xl -z-10 animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
