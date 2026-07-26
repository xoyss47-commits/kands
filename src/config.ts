// ============================================================
// 💕 AŞK SİTESİ KONFİGÜRASYON DOSYASI 💕
// Not: Çevrilebilir tüm içerik (biyografi, timeline başlıkları, galeri
// başlıkları, şarkı bilgileri, sürpriz mektup vb.) artık
// src/i18n/translations.ts içindeki "content.*" anahtarlarında saklanıyor
// ve her dil için ayrı ayrı tanımlanıyor.
// Bu dosya sadece statik yapı (ikon, URL, tip vb.) için kullanılır.
// ============================================================

import { reservedGallery, reservedBio1, reservedBio2 } from "./reservedPhotos";

export interface TimelineEvent {
  icon: "heart" | "star" | "coffee" | "ring" | "sparkles" | "plane" | "home" | "gift";
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface OurSong {
  coverUrl: string;
  youtubeVideoId?: string;
  audioUrl?: string;
}

export const siteConfig = {
  // ------------------------------------------------------------
  // 👫 İSİMLER - Çevrilmeyecek sabit isimler
  // (takma adlar ve roller content.person1.nickname vb. ile çevrilir)
  // ------------------------------------------------------------
  person1: {
    name: "Kemal",
  },
  person2: {
    name: "Sasha",
  },

  // ------------------------------------------------------------
  // 💕 İLİŞKİ BAŞLANGIÇ TARİHİ - Sayaç için
  // Format: YYYY-AA-GG Saat:Dakika (örnek: "2022-02-14 19:30")
  // ------------------------------------------------------------
  relationshipStartDate: "2022-02-14 19:30",

  // ------------------------------------------------------------
  // 📝 BİYOGRAFİLER - Hakkımızda bölümü
  // Metinler content.p1Bio.* ve content.p2Bio.* üzerinden çevrilir
  // ------------------------------------------------------------
  person1Bio: {
    defaultPhoto: reservedBio1,
  },
  person2Bio: {
    defaultPhoto: reservedBio2,
  },

  // ------------------------------------------------------------
  // 📖 ZAMAN TÜNELİ - Sadece ikonlar saklanır
  // Tarih, başlık ve açıklama content.tl.e{N}.* üzerinden gelir
  // ------------------------------------------------------------
  timeline: [
    { icon: "coffee" },
    { icon: "sparkles" },
    { icon: "heart" },
    { icon: "plane" },
    { icon: "gift" },
    { icon: "ring" },
  ] as TimelineEvent[],

  // ------------------------------------------------------------
  // 📸 GALERİ - Birlikte olduğumuz anlar
  // Başlıklar (caption) content.gallery.cap{N} üzerinden çevrilir
  // ------------------------------------------------------------
  gallery: reservedGallery.map((g, i) => ({
    src: g.src,
    caption: g.caption,
  })) as GalleryImage[],

  // ------------------------------------------------------------
  // 🎵 BİZİM ŞARKIMIZ - Sadece URL ve video id saklanır
  // Başlık, sanatçı vb. içerikler content.song.* üzerinden çevrilir
  // ------------------------------------------------------------
  ourSong: {
    coverUrl: "https://img.youtube.com/vi/VQ1Ap10ZuRM/hqdefault.jpg",
    youtubeVideoId: "VQ1Ap10ZuRM",
  } as OurSong,

  // ------------------------------------------------------------
  // 💌 SÜRPRİZ AŞK MESAJI - Sadece aksiyon id'leri saklanır
  // Tüm metinler content.surprise.* üzerinden çevrilir
  // ------------------------------------------------------------
  surpriseLoveLetter: {
    finalActions: [
      { action: "hug" },
      { action: "flower" },
      { action: "love" },
    ],
  },

  // ------------------------------------------------------------
  // 🎨 SİTE GENEL AYARLAR (meta) - t("site.title") vb. kullanılır
  // ------------------------------------------------------------
  meta: {},
};
