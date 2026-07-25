import { useState, useEffect } from "react";
import { Heart, Gift, Sparkles, MessageCircleHeart, Flower2 } from "lucide-react";
import { siteConfig } from "@/config";

const icons: Record<string, React.ReactNode> = {
  hug: <Heart className="w-5 h-5" />,
  flower: <Flower2 className="w-5 h-5" />,
  love: <MessageCircleHeart className="w-5 h-5" />,
};

function Confetti() {
  const [bits, setBits] = useState<{ id: number; left: number; delay: number; dur: number; color: string; emoji: string }[]>([]);

  useEffect(() => {
    const emojis = ["💕", "💖", "🌹", "✨", "💗", "💘", "🌸", "💞"];
    const colors = ["#f93d6b", "#eb6a61", "#a855f7", "#ffa0b3", "#f49188"];
    const arr = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.8,
      dur: Math.random() * 3 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      emoji: Math.random() > 0.5 ? emojis[Math.floor(Math.random() * emojis.length)] : "",
    }));
    setBits(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[60]">
      {bits.map((b) => (
        <div
          key={b.id}
          className="absolute -top-10"
          style={{
            left: `${b.left}%`,
            animation: `confettiFall ${b.dur}s ${b.delay}s ease-in forwards`,
            fontSize: "18px",
            color: b.color,
          }}
        >
          {b.emoji ? b.emoji : <span className="inline-block w-2 h-2 rounded-full" style={{ background: b.color }} />}
        </div>
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function SurpriseSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [actionCount, setActionCount] = useState<Record<string, number>>({});
  const [toast, setToast] = useState<string | null>(null);

  const doAction = (label: string, action: string) => {
    setActionCount((p) => ({ ...p, [action]: (p[action] || 0) + 1 }));
    setConfetti(true);
    setTimeout(() => setConfetti(false), 4500);

    const messages: Record<string, string[]> = {
      hug: [
        "Sana sarıldım, çok özledim 🤗💕",
        "Kollarım arasında seninle olmak paha biçilemez...",
        "Bu sarılmanın içinde bütün aşkım var 💗",
      ],
      flower: [
        "Sana kırmızı güller aldım 🌹💕",
        "Güller bile gülüşünün yanında soluk kalıyor...",
        "Her bir yaprağı 'seni seviyorum' dedi 🌹",
      ],
      love: [
        "Seni seviyorum! 💖",
        "Kalbim seninle atıyor, sonsuza dek! 💕",
        "Seni dünyadaki her şeyden çok seviyorum! 💗",
      ],
    };
    const list = messages[action] || ["Seni çok seviyorum 💕"];
    setToast(list[Math.floor(Math.random() * list.length)]);
    setTimeout(() => setToast(null), 3500);
  };

  const totalActions = Object.values(actionCount).reduce((a, b) => a + b, 0);

  return (
    <section id="surpriz" className="relative py-20 md:py-28 reveal-on-scroll">
      {confetti && <Confetti />}

      {toast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[70] glass-card romantic-shadow px-6 py-4 animate-fade-in-up max-w-md">
          <p className="font-script text-xl md:text-2xl text-gradient-romantic text-center">
            {toast}
          </p>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-lavender-300" />
            <Gift className="w-6 h-6 text-lavender-500 animate-heart-beat" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-lavender-300" />
          </div>
          <h2 className="section-title">Sana Sürprizim 💌</h2>
          <p className="section-subtitle">
            Kalbimden sana, en özel sözlerim...
          </p>
        </div>

        {!unlocked ? (
          <div className="max-w-2xl mx-auto">
            <div className="glass-card romantic-shadow p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-rose-200/60 to-lavender-200/60 blur-3xl animate-pulse-soft" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-blush-200/60 to-rose-200/60 blur-3xl animate-pulse-soft" />

              <div className="relative">
                <div className="text-7xl md:text-8xl mb-8 inline-block animate-heart-beat">💝</div>
                <p className="font-display text-xl md:text-2xl text-rose-700 dark:text-rose-100 mb-2">
                  Sevgilim, sana özel bir mektubum var
                </p>
                <p className="font-body text-rose-900/70 dark:text-midnight-50/80 mb-8">
                  Kalbimden kaleme alınan bu sözleri görmek için,
                  <br className="hidden md:block" />
                  sadece kalbinden dokun... 💕
                </p>

                <button
                  onClick={() => {
                    setUnlocked(true);
                    setConfetti(true);
                    setTimeout(() => setConfetti(false), 4500);
                  }}
                  className="btn-romantic flex items-center gap-2 mx-auto text-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  {siteConfig.surpriseLoveLetter.hiddenButtonText}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div
              className={`glass-card romantic-shadow p-8 md:p-14 relative overflow-hidden transition-all duration-1000 ${
                revealed
                  ? "bg-gradient-to-br from-rose-50/80 via-blush-50/80 to-lavender-50/80 dark:from-midnight-300/70 dark:via-midnight-200/70 dark:to-midnight-300/70"
                  : ""
              }`}
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-rose-200/60 to-lavender-200/60 dark:from-rose-500/30 dark:to-lavender-600/30 blur-3xl animate-pulse-soft" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-blush-200/60 to-rose-200/60 dark:from-blush-400/30 dark:to-rose-500/30 blur-3xl animate-pulse-soft" />

              <div className="relative">
                {!revealed ? (
                  <div className="text-center py-10">
                    <div className="text-6xl mb-6 inline-block animate-float">💌</div>
                    <h3 className="font-display text-2xl md:text-3xl text-rose-700 dark:text-rose-100 mb-4">
                      Mektup hazır...
                    </h3>
                    <p className="font-body text-rose-900/70 dark:text-midnight-50/80 mb-8">
                      Şimdi onu açmaya hazır mısın?
                    </p>
                    <button
                      onClick={() => {
                        setRevealed(true);
                        setConfetti(true);
                        setTimeout(() => setConfetti(false), 4500);
                      }}
                      className="btn-romantic flex items-center gap-2 mx-auto text-lg"
                    >
                      <Heart className="w-5 h-5 fill-white/80" />
                      {siteConfig.surpriseLoveLetter.revealButtonText}
                    </button>
                  </div>
                ) : (
                  <div className="animate-fade-in-up">
                    <div className="text-center mb-10">
                      <div className="inline-block mb-4 animate-heart-beat">
                        <div className="relative">
                          <Heart className="w-14 h-14 md:w-16 md:h-16 text-rose-500 fill-rose-400/60" />
                          <Sparkles className="w-5 h-5 text-blush-400 absolute -top-1 -right-1 animate-pulse-soft" />
                        </div>
                      </div>
                      <h3 className="font-display text-2xl md:text-4xl text-gradient-romantic font-semibold">
                        {siteConfig.surpriseLoveLetter.title}
                      </h3>
                    </div>

                    <div className="space-y-5 mb-10">
                      {siteConfig.surpriseLoveLetter.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="font-body text-base md:text-lg text-rose-900/85 dark:text-midnight-50/90 leading-relaxed"
                          style={{
                            animation: `fadeInUp 0.6s ${idx * 0.2}s ease-out both`,
                          }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="text-right mb-10 pr-4">
                      <p className="font-script text-2xl md:text-3xl text-rose-600 dark:text-rose-200">
                        {siteConfig.surpriseLoveLetter.signature}
                      </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-300 dark:via-lavender-400 to-transparent mb-8" />

                    <div>
                      <p className="text-center font-script text-xl md:text-2xl text-rose-500 dark:text-rose-200 mb-6">
                        Şimdi bana bir iyilik yap 👇
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center mb-8">
                        {siteConfig.surpriseLoveLetter.finalActions.map((a) => (
                          <button
                            key={a.action}
                            onClick={() => doAction(a.label, a.action)}
                            className={`btn-romantic flex items-center gap-2 relative ${
                              actionCount[a.action] ? "ring-4 ring-rose-200/60" : ""
                            }`}
                          >
                            {icons[a.action]}
                            <span>{a.label}</span>
                            {actionCount[a.action] ? (
                              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-rose-500 text-xs font-bold flex items-center justify-center shadow-md">
                                {actionCount[a.action]}
                              </span>
                            ) : null}
                          </button>
                        ))}
                      </div>

                      {totalActions > 0 && (
                        <div className="text-center animate-fade-in-up">
                          <div className="inline-block glass-card px-5 py-3 romantic-shadow">
                            <p className="font-script text-lg md:text-xl text-gradient-romantic">
                              {totalActions >= 10
                                ? `Seni ${totalActions} kere daha çok sevdim! 💖`
                                : totalActions >= 5
                                ? `Kalbime ${totalActions} tane daha sevgi ekledim 💕`
                                : `Sevgim kat ve kat arttı 💗`}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-12 text-center">
                      <button
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="btn-outline-romantic flex items-center gap-2 mx-auto"
                      >
                        <Sparkles className="w-4 h-4" />
                        Başa Dön ve Hikayemizi Tekrar Oku
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
