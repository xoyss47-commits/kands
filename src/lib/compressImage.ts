export interface CompressOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  type?: "image/jpeg" | "image/webp" | "image/png";
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

export async function compressImage(
  file: File | Blob | string,
  opts: CompressOptions = {}
): Promise<string> {
  const {
    maxWidth = 1600,
    maxHeight = 1600,
    quality = 0.8,
    type = "image/jpeg",
  } = opts;

  let src = file;

  if (typeof file === "string") {
    if (file.startsWith("data:")) {
      const res = await fetch(file);
      src = await res.blob();
    } else {
      const response = await fetch(file);
      src = await response.blob();
    }
  }

  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => resolve(ev.target?.result as string);
    reader.onerror = () => reject(new Error("Dosya okunamadı"));
    reader.readAsDataURL(src as Blob);
  });

  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      const ratio = width / height;

      if (width > maxWidth || height > maxHeight) {
        if (ratio >= 1) {
          width = maxWidth;
          height = Math.round(maxWidth / ratio);
        } else {
          height = maxHeight;
          width = Math.round(maxHeight * ratio);
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas oluşturulamadı"));
        return;
      }

      if (type === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
      }
      ctx.drawImage(img, 0, 0, width, height);

      let finalType = type;
      if (finalType === "image/png" && (src as Blob).type !== "image/png") {
        finalType = "image/jpeg";
      }

      try {
        const result = canvas.toDataURL(finalType, quality);

        if (result === "data:,") {
          resolve(dataUrl);
        } else {
          resolve(result);
        }
      } catch {
        resolve(dataUrl);
      }
    };

    img.onerror = () => reject(new Error("Fotoğraf yüklenemedi"));
    img.src = dataUrl;
  });
}

export function estimateStorageSize(items: { src: string }[] | Record<string, string> | string): number {
  if (typeof items === "string") return items.length * 2;
  if (Array.isArray(items)) return items.reduce((sum, it) => sum + (it.src?.length || 0) * 2, 0);
  return Object.values(items).reduce((sum, s) => sum + (s?.length || 0) * 2, 0);
}

export function localStorageUsedBytes(): number {
  try {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      const val = localStorage.getItem(key) || "";
      total += key.length * 2 + val.length * 2;
    }
    return total;
  } catch {
    return 0;
  }
}
