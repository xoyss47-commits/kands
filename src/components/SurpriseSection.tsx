import { useState, useEffect } from "react";
import { Heart, Gift, Sparkles, MessageCircleHeart, Flower2 } from "lucide-react";
import { siteConfig } from "@/config";
import { useLanguage } from "@/i18n";

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

const actionMessagesByLang: Record<string, Record<string, string[]>> = {
  tr: {
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
  },
  ru: {
    hug: [
      "Я обнял тебя, так сильно скучал 🤗💕",
      "Быть с тобой в моих объятиях — бесценно...",
      "В этом объятии — вся моя любовь 💗",
    ],
    flower: [
      "Я купил тебе красные розы 🌹💕",
      "Даже розы бледнеют рядом с твоей улыбкой...",
      "Каждый лепесток сказал «я тебя люблю» 🌹",
    ],
    love: [
      "Я тебя люблю! 💖",
      "Моё сердце бьётся с тобой, вечно! 💕",
      "Я люблю тебя больше всего на свете! 💗",
    ],
  },
  en: {
    hug: [
      "I hugged you, missed you so much 🤗💕",
      "Being with you in my arms is priceless...",
      "All my love is inside this hug 💗",
    ],
    flower: [
      "I got you red roses 🌹💕",
      "Even roses fade next to your smile...",
      "Every petal said 'I love you' 🌹",
    ],
    love: [
      "I love you! 💖",
      "My heart beats with you, forever! 💕",
      "I love you more than anything in the world! 💗",
    ],
  },
  ro: {
    hug: [
      "Te-am îmbrățișat, mi-e atât de dor de tine 🤗💕",
      "Să fiu cu tine în brațele mele — nu are preț...",
      "În această îmbrățișare este toată dragostea mea 💗",
    ],
    flower: [
      "Am cumpărat trandafiri roșii pentru tine 🌹💕",
      "Chiar și trandafirii se estompează lângă zâmbetul tău...",
      "Fiecare petal a spus «te iubesc» 🌹",
    ],
    love: [
      "Te iubesc! 💖",
      "Inima mea bate cu a ta, pentru totdeauna! 💕",
      "Te iubesc mai mult decât orice în lume! 💗",
    ],
  },
};

const surpriseUILabels: Record<string, {
  introTitle: string;
  introBody: string;
  readyTitle: string;
  readyBody: string;
  callToAction: string;
  scrollTopButton: string;
  totalMsg1: string;
  totalMsg2: string;
  totalMsg3: string;
  fallbackMsg: string;
}> = {
  tr: {
    introTitle: "Sevgilim, sana özel bir mektubum var",
    introBody:
      "Kalbimden kaleme alınan bu sözleri görmek için,\n sadece kalbinden dokun... 💕",
    readyTitle: "Mektup hazır...",
    readyBody: "Şimdi onu açmaya hazır mısın?",
    callToAction: "Şimdi bana bir iyilik yap 👇",
    scrollTopButton: "Başa Dön ve Hikayemizi Tekrar Oku",
    totalMsg1: "Seni {n} kere daha çok sevdim! 💖",
    totalMsg2: "Kalbime {n} tane daha sevgi ekledim 💕",
    totalMsg3: "Sevgim kat ve kat arttı 💗",
    fallbackMsg: "Seni çok seviyorum 💕",
  },
  ru: {
    introTitle: "Моё любимое, у меня для тебя особое письмо",
    introBody:
      "Чтобы увидеть эти слова, написанные от сердца,\n просто коснись своим сердцем... 💕",
    readyTitle: "Письмо готово...",
    readyBody: "Теперь ты готова его открыть?",
    callToAction: "Теперь сделай мне одолжение 👇",
    scrollTopButton: "Вернуться наверх и перечитать нашу историю",
    totalMsg1: "Я полюбил тебя ещё {n} раз сильнее! 💖",
    totalMsg2: "Я добавил ещё {n} порций любви в моё сердце 💕",
    totalMsg3: "Моя любовь стала в разы сильнее 💗",
    fallbackMsg: "Я очень сильно тебя люблю 💕",
  },
  en: {
    introTitle: "My love, I have a special letter for you",
    introBody:
      "To see these words written from my heart,\n just touch with your heart... 💕",
    readyTitle: "The letter is ready...",
    readyBody: "Are you ready to open it now?",
    callToAction: "Now do me a favour 👇",
    scrollTopButton: "Back to Top and Read Our Story Again",
    totalMsg1: "I loved you {n} times even more! 💖",
    totalMsg2: "I added {n} more loves to my heart 💕",
    totalMsg3: "My love grew many times over 💗",
    fallbackMsg: "I love you so much 💕",
  },
  ro: {
    introTitle: "Iubirea mea, am o scrisoare specială pentru tine",
    introBody:
      "Ca să vezi aceste cuvinte scrise din inimă,\n atinge pur și simplu cu inima ta... 💕",
    readyTitle: "Scrisoarea este gata...",
    readyBody: "Ești gata să o deschizi acum?",
    callToAction: "Acum fă-mi o favoare 👇",
    scrollTopButton: "Înapoi Sus și Citește Din Nou Povestea Noastră",
    totalMsg1: "Te-am iubit cu {n} ori mai mult! 💖",
    totalMsg2: "Am adăugat încă {n} iubiri în inima mea 💕",
    totalMsg3: "Dragostea mea a crescut de multe ori 💗",
    fallbackMsg: "Te iubesc foarte mult 💕",
  },
};

function formatMsg(template: string, n: number): string {
  return template.split("{n}").join(String(n));
}

function resolveActionLabel(action: string, t: (k: any, v?: any) => string): string {
  if (action === "hug") return t("content.surprise.act1");
  if (action === "flower") return t("content.surprise.act2");
  if (action === "love") return t("content.surprise.act3");
  return action;
}

export default function SurpriseSection() {
  const { t, lang } = useLanguage();
  const labels = surpriseUILabels[lang] ?? surpriseUILabels.en;
  const msgBank = actionMessagesByLang[lang] ?? actionMessagesByLang.en;

  const [unlocked, setUnlocked] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [actionCount, setActionCount] = useState<Record<string, number>>({});
  const [toast, setToast] = useState<string | null>(null);

  const doAction = (action: string) => {
    setActionCount((p) => ({ ...p, [action]: (p[action] || 0) + 1 }));
    setConfetti(true);
    setTimeout(() => setConfetti(false), 4500);

    const list = msgBank[action] || [labels.fallbackMsg];
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
          <h2 className="section-title">{t("surprise.sectionTitle")}</h2>
          <p className="section-subtitle">
            {t("surprise.sectionSubtitle")}
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
                  {t("surprise.letterTitle")}
                </p>
                <p className="font-body text-rose-900/70 dark:text-midnight-50/80 mb-8">
                  {labels.introBody.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < labels.introBody.split("\n").length - 1 && (
                        <br className="hidden md:block" />
                      )}
                    </span>
                  ))}
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
                  {t("content.surprise.hiddenBtn")}
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
                      {labels.readyTitle}
                    </h3>
                    <p className="font-body text-rose-900/70 dark:text-midnight-50/80 mb-8">
                      {labels.readyBody}
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
                      {t("content.surprise.revealBtn")}
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
                        {t("content.surprise.title")}
                      </h3>
                    </div>

                    <div className="space-y-5 mb-10">
                      {[
                        t("content.surprise.p1"),
                        t("content.surprise.p2"),
                        t("content.surprise.p3"),
                        t("content.surprise.p4"),
                        t("content.surprise.p5"),
                        t("content.surprise.p6"),
                      ].map((p, idx) => (
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
                        {t("content.surprise.signature")}
                      </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-300 dark:via-lavender-400 to-transparent mb-8" />

                    <div>
                      <p className="text-center font-script text-xl md:text-2xl text-rose-500 dark:text-rose-200 mb-6">
                        {labels.callToAction}
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center mb-8">
                        {siteConfig.surpriseLoveLetter.finalActions.map((a) => {
                          const label = resolveActionLabel(a.action, t);
                          return (
                            <button
                              key={a.action}
                              onClick={() => doAction(a.action)}
                              className={`btn-romantic flex items-center gap-2 relative ${
                                actionCount[a.action] ? "ring-4 ring-rose-200/60" : ""
                              }`}
                            >
                              {icons[a.action]}
                              <span>{label}</span>
                              {actionCount[a.action] ? (
                                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-rose-500 text-xs font-bold flex items-center justify-center shadow-md">
                                  {actionCount[a.action]}
                                </span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>

                      {totalActions > 0 && (
                        <div className="text-center animate-fade-in-up">
                          <div className="inline-block glass-card px-5 py-3 romantic-shadow">
                            <p className="font-script text-lg md:text-xl text-gradient-romantic">
                              {totalActions >= 10
                                ? formatMsg(labels.totalMsg1, totalActions)
                                : totalActions >= 5
                                ? formatMsg(labels.totalMsg2, totalActions)
                                : labels.totalMsg3}
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
                        {labels.scrollTopButton}
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
