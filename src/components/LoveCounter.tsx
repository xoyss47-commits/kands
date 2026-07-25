import { useEffect, useState } from "react";
import { Heart, CalendarCog, RotateCcw, Check } from "lucide-react";
import { siteConfig } from "@/config";

interface TimeDiff {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
}

const STORAGE_KEY = "kands_relationship_start";

function toInputValue(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function defaultDate(): Date {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = new Date(stored);
      if (!Number.isNaN(parsed.getTime())) return parsed;
    }
  }
  return new Date(siteConfig.relationshipStartDate.replace(" ", "T"));
}

function calcDiff(start: Date): TimeDiff {
  const now = new Date();
  let diffMs = now.getTime() - start.getTime();
  if (diffMs < 0) diffMs = 0;

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours() - start.getHours();
  const adjHours = hours < 0 ? hours + 24 : hours;
  const minutes = now.getMinutes() - start.getMinutes();
  const adjMinutes = minutes < 0 ? minutes + 60 : minutes;
  const seconds = now.getSeconds() - start.getSeconds();
  const adjSeconds = seconds < 0 ? seconds + 60 : seconds;

  return {
    years,
    months,
    days,
    hours: adjHours,
    minutes: adjMinutes,
    seconds: adjSeconds,
    totalDays,
    totalHours,
  };
}

export default function LoveCounter() {
  const [startDate, setStartDate] = useState<Date>(() => defaultDate());
  const [diff, setDiff] = useState<TimeDiff>(() => calcDiff(defaultDate()));
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<string>(() => toInputValue(defaultDate()));
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setDiff(calcDiff(startDate)), 1000);
    return () => clearInterval(id);
  }, [startDate]);

  const openEdit = () => {
    setDraft(toInputValue(startDate));
    setEditing(true);
  };

  const applyDate = () => {
    if (!draft) return;
    const newDate = new Date(draft);
    if (Number.isNaN(newDate.getTime())) {
      setToast("Lütfen geçerli bir tarih seçin ⚠️");
      setTimeout(() => setToast(null), 2500);
      return;
    }
    if (newDate.getTime() > Date.now()) {
      setToast("Tarih bugünden sonra olamaz ⚠️");
      setTimeout(() => setToast(null), 2500);
      return;
    }
    setStartDate(newDate);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, newDate.toISOString());
    }
    setEditing(false);
    setToast("Sayaç kaydedildi 💕");
    setTimeout(() => setToast(null), 2500);
  };

  const resetDefault = () => {
    const def = new Date(siteConfig.relationshipStartDate.replace(" ", "T"));
    setStartDate(def);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setEditing(false);
    setToast("Varsayılan tarihe dönüldü ✨");
    setTimeout(() => setToast(null), 2500);
  };

  const formatDatePretty = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    return `${pad(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()} - ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  return (
    <section id="sayac" className="relative py-20 md:py-28 reveal-on-scroll">
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-card romantic-shadow px-5 py-3 animate-fade-in-up">
          <p className="font-script text-lg text-gradient-romantic">{toast}</p>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-rose-300" />
            <Heart className="w-6 h-6 text-rose-500 animate-heart-beat fill-rose-400/40" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-rose-300" />
          </div>
          <h2 className="section-title">İlişki Sayaç</h2>
          <p className="section-subtitle">
            Kalbim seninle birlikte attığı günden beri...
          </p>
        </div>

        <div className="glass-card romantic-shadow p-6 md:p-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8 p-4 md:px-5 rounded-2xl bg-gradient-to-r from-rose-50/70 via-blush-50/70 to-lavender-50/70 dark:from-midnight-300/70 dark:via-midnight-200/70 dark:to-midnight-300/70 border border-rose-100 dark:border-lavender-700/50">
            <div className="text-left">
              <p className="font-script text-lg text-rose-500 dark:text-rose-300">Başlangıç tarihimiz:</p>
              <p className="font-display text-lg md:text-xl text-rose-700 dark:text-rose-100 font-semibold">
                📅 {formatDatePretty(startDate)}
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              {!editing ? (
                <button
                  onClick={openEdit}
                  className="btn-outline-romantic !px-4 !py-2 !text-sm flex items-center gap-2"
                >
                  <CalendarCog className="w-4 h-4" />
                  Sayacı Ayarla
                </button>
              ) : (
                <>
                  <button
                    onClick={resetDefault}
                    title="Varsayılana döner"
                    className="px-3 py-2 rounded-full border-2 border-lavender-200 dark:border-lavender-500/60 text-lavender-600 dark:text-lavender-200 bg-white/70 dark:bg-midnight-400/80 hover:bg-lavender-50 dark:hover:bg-midnight-300 transition-colors text-sm flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span className="hidden sm:inline">Sıfırla</span>
                  </button>
                  <button
                    onClick={applyDate}
                    className="btn-romantic !px-4 !py-2 !text-sm flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Kaydet
                  </button>
                </>
              )}
            </div>
          </div>

          {editing && (
            <div className="mb-8 p-5 rounded-2xl bg-white/70 dark:bg-midnight-400/60 border-2 border-dashed border-rose-200 dark:border-lavender-600/60 animate-fade-in-up">
              <div className="grid md:grid-cols-[1fr_auto] gap-3 items-end">
                <div>
                  <label className="block font-body text-sm text-rose-700 dark:text-rose-100 font-medium mb-2">
                    ✨ Birlikte olduğumuz ilk gün ve saat:
                  </label>
                  <input
                    type="datetime-local"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-midnight-400 border-2 border-rose-200 dark:border-lavender-600/60 focus:border-rose-400 dark:focus:border-lavender-400 focus:ring-4 focus:ring-rose-100 dark:focus:ring-lavender-900/50 outline-none transition-all font-display text-rose-700 dark:text-rose-100 text-base"
                    max={toInputValue(new Date())}
                  />
                </div>
                <div className="text-xs md:text-sm text-blush-600 dark:text-lavender-200 font-body md:pb-3">
                  Örn: 14 Şubat 2022, 19:30
                </div>
              </div>
              <p className="text-xs text-rose-900/60 dark:text-midnight-50/70 mt-3 font-body">
                💡 Bu ayar tarayıcında saklanır. Başka bir cihazda aynı tarihi görmek için <code className="bg-rose-100 dark:bg-midnight-200/60 px-1.5 py-0.5 rounded text-rose-700 dark:text-lavender-200">config.ts</code> dosyasından da değiştirebilirsin.
              </p>
            </div>
          )}

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5 mb-8">
            <div className="counter-card">
              <div className="counter-number">{String(diff.years).padStart(2, "0")}</div>
              <div className="counter-label">Yıl</div>
            </div>
            <div className="counter-card">
              <div className="counter-number">{String(diff.months).padStart(2, "0")}</div>
              <div className="counter-label">Ay</div>
            </div>
            <div className="counter-card">
              <div className="counter-number">{String(diff.days).padStart(2, "0")}</div>
              <div className="counter-label">Gün</div>
            </div>
            <div className="counter-card">
              <div className="counter-number">{String(diff.hours).padStart(2, "0")}</div>
              <div className="counter-label">Saat</div>
            </div>
            <div className="counter-card">
              <div className="counter-number">{String(diff.minutes).padStart(2, "0")}</div>
              <div className="counter-label">Dakika</div>
            </div>
            <div className="counter-card">
              <div className="counter-number">{String(diff.seconds).padStart(2, "0")}</div>
              <div className="counter-label">Saniye</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-midnight-300/80 dark:to-rose-900/30 rounded-2xl p-6 text-center border border-rose-100 dark:border-lavender-700/50">
              <p className="font-script text-lg md:text-xl text-rose-500 dark:text-rose-200 mb-2">
                Şimdiye kadar birlikte
              </p>
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-romantic">
                {diff.totalDays.toLocaleString("tr-TR")}
              </p>
              <p className="font-body text-sm text-blush-600 dark:text-lavender-200 uppercase tracking-widest mt-2">
                Gün
              </p>
            </div>
            <div className="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-midnight-300/80 dark:to-lavender-900/30 rounded-2xl p-6 text-center border border-lavender-100 dark:border-lavender-700/50">
              <p className="font-script text-lg md:text-xl text-lavender-600 dark:text-lavender-200 mb-2">
                Seninle geçen her saat
              </p>
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-romantic">
                {diff.totalHours.toLocaleString("tr-TR")}
              </p>
              <p className="font-body text-sm text-blush-600 dark:text-lavender-200 uppercase tracking-widest mt-2">
                Saat
              </p>
            </div>
          </div>

          <p className="text-center font-script text-xl md:text-2xl text-rose-500 dark:text-rose-200 mt-10">
            &ldquo;Her saniye seninle geçen, bana bir ömre bedel.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
