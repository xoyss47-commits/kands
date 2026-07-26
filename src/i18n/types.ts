export type LanguageCode = "tr" | "ru" | "en" | "ro";

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  flag: string;
  locale: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷", locale: "tr-TR" },
  { code: "ru", name: "Русский", flag: "🇷🇺", locale: "ru-RU" },
  { code: "en", name: "English", flag: "🇬🇧", locale: "en-US" },
  { code: "ro", name: "Română", flag: "🇷🇴", locale: "ro-RO" },
];

export const LANGUAGE_STORAGE_KEY = "kands_language_v1";

export function getInitialLanguage(): LanguageCode {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved) {
      const lc = saved.toLowerCase();
      const found = LANGUAGES.find((l) => l.code === lc);
      if (found) return found.code;
    }
  } catch { /* ignore */ }
  try {
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("tr")) return "tr";
    if (nav.startsWith("ru")) return "ru";
    if (nav.startsWith("ro")) return "ro";
  } catch { /* ignore */ }
  return "en";
}
