import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LANGUAGES, LANGUAGE_STORAGE_KEY, getInitialLanguage, type LanguageCode, type LanguageInfo } from "./types";
import { translations, type TranslationKey } from "./translations";

export type InterpolateParams = Record<string, string | number>;

export interface LanguageContextValue {
  lang: LanguageCode;
  locale: string;
  info: LanguageInfo;
  available: LanguageInfo[];
  setLanguage: (code: LanguageCode) => void;
  t: (key: TranslationKey, params?: InterpolateParams) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function interpolate(text: string, params?: InterpolateParams): string {
  if (!params) return text;
  let out = text;
  for (const key of Object.keys(params)) {
    const val = String(params[key]);
    out = out.split(`{${key}}`).join(val);
  }
  return out;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>(() => getInitialLanguage());

  const info = useMemo(
    () => LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0],
    [lang]
  );

  const setLanguage = useCallback((code: LanguageCode) => {
    setLang(code);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    } catch { /* ignore */ }
    try {
      document.documentElement.lang = code;
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch { /* ignore */ }
  }, [lang]);

  const t = useCallback(
    (key: TranslationKey, params?: InterpolateParams) => {
      const dict = translations[lang] ?? translations.en;
      const text = (dict[key] as string | undefined) ?? (translations.en[key] as string | undefined) ?? key;
      return interpolate(text, params);
    },
    [lang]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      locale: info.locale,
      info,
      available: LANGUAGES,
      setLanguage,
      t,
    }),
    [lang, info, setLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
