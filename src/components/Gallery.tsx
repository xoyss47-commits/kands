import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { Images, Plus, X, ChevronLeft, ChevronRight, Camera, RotateCcw, Info, Save, HardDrive, Download, Upload } from "lucide-react";
import { siteConfig, type GalleryImage } from "@/config";
import { compressImage, formatBytes, localStorageUsedBytes } from "@/lib/compressImage";
import { useLanguage } from "@/i18n";
import { applyBackup, createBackup, downloadJsonFile, readJsonFile } from "@/lib/dataBackup";
import { ensureStorageVersion } from "@/lib/storageVersion";

const GALLERY_KEY = "kands_gallery_images_v1";
const AUTOSAVE_INTERVAL_MS = 30_000;
const STORAGE_LIMIT_BYTES = 5 * 1024 * 1024;

function hasUserCustomized(parsed: GalleryImage[]): boolean {
  if (parsed.length !== siteConfig.gallery.length) return true;
  for (let i = 0; i < parsed.length; i++) {
    const src = parsed[i]?.src;
    if (!src) return true;
    if (src.startsWith("data:")) return true;
    if (src !== siteConfig.gallery[i]?.src) return true;
  }
  return false;
}

function loadGalleryFromStorageOrDefaults(): GalleryImage[] {
  try {
    ensureStorageVersion();
    const raw = localStorage.getItem(GALLERY_KEY);
    if (!raw) return siteConfig.gallery;
    const parsed = JSON.parse(raw) as GalleryImage[];
    if (!Array.isArray(parsed) || parsed.length === 0) return siteConfig.gallery;
    if (hasUserCustomized(parsed)) return parsed;
    return siteConfig.gallery;
  } catch {
    return siteConfig.gallery;
  }
}

async function readAndCompressFile(file: File): Promise<GalleryImage> {
  const src = await compressImage(file, {
    maxWidth: 1600,
    maxHeight: 1600,
    quality: 0.82,
    type: "image/jpeg",
  });
  return {
    src,
    caption: "Yeni anımız 💕",
  };
}

function resolveCaption(
  img: GalleryImage,
  globalIndex: number,
  t: (key: any, vars?: any) => string,
  defaultGallery: GalleryImage[],
): string {
  const defaultIdx = defaultGallery.findIndex((d) => d.src === img.src);
  if (defaultIdx >= 0 && defaultIdx < 10) {
    return t(`content.gallery.cap${defaultIdx + 1}` as const);
  }
  if (globalIndex < 10 && img.caption === siteConfig.gallery[globalIndex]?.caption) {
    return t(`content.gallery.cap${globalIndex + 1}` as const);
  }
  return img.caption;
}

export default function Gallery() {
  const { t, locale } = useLanguage();
  const [images, setImages] = useState<GalleryImage[]>(() => siteConfig.gallery);

  useEffect(() => {
    setImages(loadGalleryFromStorageOrDefaults());
  }, []);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [storageWarn, setStorageWarn] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [backupMsg, setBackupMsg] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const importRef = useRef<HTMLInputElement>(null);
  const imagesRef = useRef<GalleryImage[]>(images);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  const galleryBytes = useMemo(() => {
    return JSON.stringify(images).length * 2;
  }, [images]);
  const totalUsedBytes = useMemo(() => localStorageUsedBytes(), [images, savedAt, storageWarn]);
  const usedPct = Math.min(100, Math.round((totalUsedBytes / STORAGE_LIMIT_BYTES) * 100));

  const persist = useCallback((data: GalleryImage[]) => {
    try {
      localStorage.setItem(GALLERY_KEY, JSON.stringify(data));
      setStorageWarn(null);
      setSavedAt(new Date());
      return true;
    } catch (err) {
      if (err instanceof DOMException && (err.name === "QuotaExceededError" || err.code === 22)) {
        const estTotal = JSON.stringify(data).length * 2;
        setStorageWarn(t("gallery.storageErrorQuota", { size: formatBytes(estTotal) }));
      } else {
        setStorageWarn(t("gallery.storageErrorGeneric"));
      }
      return false;
    }
  }, [t]);

  useEffect(() => {
    persist(images);
  }, [images, persist]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      persist(imagesRef.current);
    }, AUTOSAVE_INTERVAL_MS);

    const onVisibility = () => {
      if (document.visibilityState === "hidden") persist(imagesRef.current);
    };
    const onBeforeUnload = () => {
      persist(imagesRef.current);
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("beforeunload", onBeforeUnload);
      persist(imagesRef.current);
    };
  }, [persist]);

  const openUpload = () => fileRef.current?.click();

  const resetGallery = () => {
    setImages(siteConfig.gallery);
    setStorageWarn(null);
  };

  const handleExport = () => {
    const backup = createBackup();
    downloadJsonFile(backup, t("data.exportedFilename"));
    setBackupMsg(t("gallery.lastSaved") + " " + new Date().toLocaleTimeString(locale));
    window.setTimeout(() => setBackupMsg(null), 3500);
  };

  const openImport = () => importRef.current?.click();

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const payload = await readJsonFile(file);
    if (!payload) {
      setBackupMsg(t("data.importError"));
      window.setTimeout(() => setBackupMsg(null), 4000);
      return;
    }
    const res = applyBackup(payload);
    if (res.ok) {
      setImages(loadGalleryFromStorageOrDefaults());
      window.dispatchEvent(new CustomEvent("kands:backup-imported"));
      setBackupMsg(t("data.importSuccess"));
      window.setTimeout(() => setBackupMsg(null), 4000);
    } else {
      setBackupMsg(t("data.importError"));
      window.setTimeout(() => setBackupMsg(null), 4000);
    }
    if (importRef.current) importRef.current.value = "";
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsCompressing(true);
    try {
      const tasks = Array.from(files).map(async (file) => {
        try {
          const img = await readAndCompressFile(file);
          return { ...img, caption: t("generic.newMemoryCaption") };
        } catch {
          return null;
        }
      });
      const results = await Promise.all(tasks);
      const newOnes = results.filter((x): x is GalleryImage => x !== null);
      if (newOnes.length === 0) {
        setStorageWarn(t("gallery.errorAllFailed"));
        return;
      }
      setImages((prev) => [...newOnes, ...prev]);
    } finally {
      setIsCompressing(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const removeAt = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    if (lightbox === idx) setLightbox(null);
    if (typeof lightbox === "number" && lightbox > idx) setLightbox(lightbox - 1);
  };

  const prev = () => setLightbox((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () => setLightbox((i) => (i === null ? i : (i + 1) % images.length));

  return (
    <section id="galeri" className="relative py-20 md:py-28 reveal-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-rose-300" />
            <Images className="w-6 h-6 text-rose-500" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-rose-300" />
          </div>
          <h2 className="section-title">{t("gallery.sectionTitle")}</h2>
          <p className="section-subtitle">
            {t("gallery.sectionSubtitle")}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <button onClick={openUpload} className="btn-outline-romantic flex items-center gap-2">
              <Plus className="w-4 h-4" />
              {t("gallery.addPhoto")}
            </button>
            <button onClick={resetGallery} className="btn-outline-romantic flex items-center gap-2" title={t("about.resetPhoto")}>
              <RotateCcw className="w-4 h-4" />
              {t("gallery.reset")}
            </button>
            <button onClick={handleExport} className="btn-outline-romantic flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t("data.exportAll")}
            </button>
            <button onClick={openImport} className="btn-outline-romantic flex items-center gap-2">
              <Upload className="w-4 h-4" />
              {t("data.importAll")}
            </button>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
            <input
              ref={importRef}
              type="file"
              accept="application/json,.json"
              onChange={handleImport}
              className="hidden"
            />
          </div>
          {backupMsg && (
            <div className="max-w-xl mx-auto mt-3 p-3 rounded-2xl bg-lavender-50/80 dark:bg-midnight-300/60 border border-lavender-200 dark:border-lavender-500/30 flex items-center justify-center gap-2 text-sm text-lavender-700 dark:text-lavender-200">
              <span>{backupMsg}</span>
            </div>
          )}
          {storageWarn && (
            <div className="max-w-xl mx-auto mt-4 p-3 rounded-2xl bg-rose-50/80 dark:bg-midnight-300/80 border border-rose-200 dark:border-rose-400/30 flex items-start gap-2 text-sm text-rose-700 dark:text-rose-100 text-left">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{storageWarn}</span>
            </div>
          )}
          {!storageWarn && savedAt && (
            <div className="max-w-xl mx-auto mt-4 p-3 rounded-2xl bg-lavender-50/80 dark:bg-midnight-300/50 border border-lavender-200 dark:border-lavender-500/30 flex items-center justify-center gap-2 text-sm text-lavender-700 dark:text-lavender-200">
              <Save className="w-4 h-4" />
              <span>{t("gallery.lastSaved")} {savedAt.toLocaleTimeString(locale)} {t("gallery.autosave30s")}</span>
            </div>
          )}

          <div className="max-w-xl mx-auto mt-4">
            <div className="flex items-center justify-between mb-1.5 text-xs text-lavender-600 dark:text-lavender-300">
              <div className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5" />
                <span>{t("gallery.storageBarLabel", { galSize: formatBytes(galleryBytes), total: formatBytes(totalUsedBytes) })}</span>
              </div>
              {isCompressing && (
                <span className="inline-flex items-center gap-1 text-rose-500 dark:text-rose-300 font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  {t("gallery.compressing")}
                </span>
              )}
            </div>
            <div className="w-full h-2 rounded-full bg-lavender-100/60 dark:bg-midnight-200/40 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  usedPct >= 90 ? "bg-gradient-to-r from-rose-500 to-red-500" :
                  usedPct >= 70 ? "bg-gradient-to-r from-amber-400 to-orange-500" :
                  "bg-gradient-to-r from-rose-400 to-lavender-500"
                }`}
                style={{ width: `${usedPct}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => {
            const caption = resolveCaption(img, idx, t, siteConfig.gallery);
            return (
              <div
                key={idx}
                className={`gallery-item relative group ${
                  idx % 5 === 0 ? "md:row-span-2 md:col-span-1 aspect-[3/4] md:aspect-auto" : "aspect-square"
                }`}
                onClick={() => setLightbox(idx)}
              >
                <img src={img.src} alt={caption} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="font-script text-white text-lg md:text-xl mb-2">{caption}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeAt(idx);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 text-rose-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110 duration-300 shadow-md"
                  title={`${t("gallery.reset")} ❌`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            );
          })}

          <button
            onClick={openUpload}
            className="photo-upload-zone flex flex-col items-center justify-center aspect-square group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-200 to-lavender-200 dark:from-rose-500/40 dark:to-lavender-600/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-7 h-7 text-rose-500 dark:text-rose-100" />
            </div>
            <p className="font-display text-rose-600 dark:text-rose-100 font-medium">{t("gallery.addPhoto")}</p>
            <p className="font-body text-xs text-blush-500 dark:text-lavender-200 mt-1">{t("gallery.uploadNewMemory")}</p>
          </button>
        </div>
      </div>

      {typeof lightbox === "number" && images[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={resolveCaption(images[lightbox], lightbox, t, siteConfig.gallery)}
              className="max-h-[78vh] max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <p className="font-script text-2xl md:text-3xl text-white mt-5 text-center">
              {resolveCaption(images[lightbox], lightbox, t, siteConfig.gallery)}
            </p>
            <p className="text-white/60 text-sm mt-2">
              {lightbox + 1} / {images.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-rose-500/80 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
