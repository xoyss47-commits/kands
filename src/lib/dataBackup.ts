import type { GalleryImage } from "@/config";

const GALLERY_KEY = "kands_gallery_images_v1";
const BIO_PHOTO_KEY_1 = "kands_bio_photo_1_v1";
const BIO_PHOTO_KEY_2 = "kands_bio_photo_2_v1";

export interface BackupPayload {
  version: 1;
  exportedAt: string;
  gallery: GalleryImage[];
  bioPhoto1?: string | null;
  bioPhoto2?: string | null;
}

export function createBackup(): BackupPayload {
  const galleryRaw = localStorage.getItem(GALLERY_KEY);
  let gallery: GalleryImage[] = [];
  if (galleryRaw) {
    try {
      gallery = JSON.parse(galleryRaw) as GalleryImage[];
    } catch {}
  }
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    gallery,
    bioPhoto1: localStorage.getItem(BIO_PHOTO_KEY_1),
    bioPhoto2: localStorage.getItem(BIO_PHOTO_KEY_2),
  };
}

export function downloadJsonFile(data: unknown, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function applyBackup(payload: BackupPayload): { ok: boolean; galleryCount: number } {
  if (!payload || typeof payload !== "object") return { ok: false, galleryCount: 0 };
  let galleryCount = 0;
  try {
    if (Array.isArray(payload.gallery)) {
      localStorage.setItem(GALLERY_KEY, JSON.stringify(payload.gallery));
      galleryCount = payload.gallery.length;
    }
    if (typeof payload.bioPhoto1 === "string" && payload.bioPhoto1.startsWith("data:image")) {
      localStorage.setItem(BIO_PHOTO_KEY_1, payload.bioPhoto1);
    } else if (payload.bioPhoto1 === null) {
      localStorage.removeItem(BIO_PHOTO_KEY_1);
    }
    if (typeof payload.bioPhoto2 === "string" && payload.bioPhoto2.startsWith("data:image")) {
      localStorage.setItem(BIO_PHOTO_KEY_2, payload.bioPhoto2);
    } else if (payload.bioPhoto2 === null) {
      localStorage.removeItem(BIO_PHOTO_KEY_2);
    }
    return { ok: true, galleryCount };
  } catch {
    return { ok: false, galleryCount };
  }
}

export async function readJsonFile(file: File): Promise<BackupPayload | null> {
  try {
    const text = await file.text();
    const parsed = JSON.parse(text) as BackupPayload;
    if (parsed && parsed.version === 1 && Array.isArray(parsed.gallery)) return parsed;
    return null;
  } catch {
    return null;
  }
}
