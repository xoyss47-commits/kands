const STORAGE_VERSION = "2026-07-26_v5";
const STORAGE_VERSION_KEY = "kands_storage_version";

const STORAGE_KEYS_TO_RESET = [
  "kands_bio_photo_1_v1",
  "kands_bio_photo_2_v1",
  "kands_gallery_images_v1",
  "kands_storage_version",
];

export function ensureStorageVersion(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const current = localStorage.getItem(STORAGE_VERSION_KEY);
    if (current === STORAGE_VERSION) return false;
    for (const k of STORAGE_KEYS_TO_RESET) {
      try {
        localStorage.removeItem(k);
      } catch {}
    }
    localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
    return true;
  } catch {
    return false;
  }
}

export function forceResetAllUserStorage() {
  if (typeof window === "undefined") return;
  try {
    for (const k of STORAGE_KEYS_TO_RESET) localStorage.removeItem(k);
  } catch {}
  try {
    localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
  } catch {}
}
