import { useRef, useState, useEffect, useCallback } from "react";
import { Images, Plus, X, ChevronLeft, ChevronRight, Camera, RotateCcw, Info, Save } from "lucide-react";
import { siteConfig, type GalleryImage } from "@/config";

const GALLERY_KEY = "kands_gallery_images_v1";
const AUTOSAVE_INTERVAL_MS = 30_000;

function loadGallery(): GalleryImage[] {
  try {
    const raw = localStorage.getItem(GALLERY_KEY);
    if (!raw) return siteConfig.gallery;
    const parsed = JSON.parse(raw) as GalleryImage[];
    if (!Array.isArray(parsed) || parsed.length === 0) return siteConfig.gallery;
    return parsed;
  } catch {
    return siteConfig.gallery;
  }
}

function readFileAsDataURL(file: File): Promise<GalleryImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      resolve({
        src: ev.target?.result as string,
        caption: "Yeni anımız 💕",
      });
    };
    reader.onerror = () => reject(new Error("Dosya okunamadı"));
    reader.readAsDataURL(file);
  });
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>(() => loadGallery());
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [storageWarn, setStorageWarn] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const imagesRef = useRef<GalleryImage[]>(images);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  const persist = useCallback((data: GalleryImage[]) => {
    try {
      localStorage.setItem(GALLERY_KEY, JSON.stringify(data));
      setStorageWarn(null);
      setSavedAt(new Date());
      return true;
    } catch (err) {
      if (err instanceof DOMException && (err.name === "QuotaExceededError" || err.code === 22)) {
        setStorageWarn(
          "Fotoğraflar çok büyük olduğu için tarayıcı kaydedemiyor. Daha küçük boyutlu fotoğraflar veya daha az sayıda fotoğraf kullanmayı dene."
        );
      } else {
        setStorageWarn("Fotoğraflar kaydedilirken bir hata oluştu.");
      }
      return false;
    }
  }, []);

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

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    try {
      const newOnes = await Promise.all(Array.from(files).map(readFileAsDataURL));
      setImages((prev) => [...newOnes, ...prev]);
    } catch {
      setStorageWarn("Bazı dosyalar okunamadı, lütfen tekrar deneyin.");
    } finally {
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
          <h2 className="section-title">Anılar Galerisi</h2>
          <p className="section-subtitle">
            Her fotoğraf, bir his ve bir hatıra...
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <button onClick={openUpload} className="btn-outline-romantic flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Fotoğraf Ekle
            </button>
            <button onClick={resetGallery} className="btn-outline-romantic flex items-center gap-2" title="Varsayılan fotoğraflara geri döner">
              <RotateCcw className="w-4 h-4" />
              Sıfırla
            </button>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </div>
          {storageWarn && (
            <div className="max-w-xl mx-auto mt-4 p-3 rounded-2xl bg-rose-50/80 dark:bg-midnight-300/80 border border-rose-200 dark:border-rose-400/30 flex items-start gap-2 text-sm text-rose-700 dark:text-rose-100 text-left">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{storageWarn}</span>
            </div>
          )}
          {!storageWarn && savedAt && (
            <div className="max-w-xl mx-auto mt-4 p-3 rounded-2xl bg-lavender-50/80 dark:bg-midnight-300/50 border border-lavender-200 dark:border-lavender-500/30 flex items-center justify-center gap-2 text-sm text-lavender-700 dark:text-lavender-200">
              <Save className="w-4 h-4" />
              <span>Son kayıt: {savedAt.toLocaleTimeString("tr-TR")} (Her 30 sn'de bir otomatik kaydedilir)</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`gallery-item relative group ${
                idx % 5 === 0 ? "md:row-span-2 md:col-span-1 aspect-[3/4] md:aspect-auto" : "aspect-square"
              }`}
              onClick={() => setLightbox(idx)}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <p className="font-script text-white text-lg md:text-xl mb-2">{img.caption}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeAt(idx);
                }}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 text-rose-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110 duration-300 shadow-md"
                title="Fotoğrafı kaldır"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}

          <button
            onClick={openUpload}
            className="photo-upload-zone flex flex-col items-center justify-center aspect-square group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-200 to-lavender-200 dark:from-rose-500/40 dark:to-lavender-600/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-7 h-7 text-rose-500 dark:text-rose-100" />
            </div>
            <p className="font-display text-rose-600 dark:text-rose-100 font-medium">Fotoğraf Ekle</p>
            <p className="font-body text-xs text-blush-500 dark:text-lavender-200 mt-1">Yeni anılar oluştur</p>
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
              alt={images[lightbox].caption}
              className="max-h-[78vh] max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <p className="font-script text-2xl md:text-3xl text-white mt-5 text-center">
              {images[lightbox].caption}
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
