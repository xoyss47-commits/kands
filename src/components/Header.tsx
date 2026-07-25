import { useEffect, useState } from "react";
import { Heart, Menu, X, Calendar, Users, BookOpen, Images, Gift, ArrowDown, Sun, Moon, Music2 } from "lucide-react";
import { siteConfig } from "@/config";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { id: "sayac", label: "Sayaç", icon: Calendar },
  { id: "hakkimizda", label: "Biz", icon: Users },
  { id: "hikaye", label: "Hikaye", icon: BookOpen },
  { id: "galeri", label: "Galeri", icon: Images },
  { id: "sarkimiz", label: "Şarkımız", icon: Music2 },
  { id: "surpriz", label: "Sürpriz", icon: Gift },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 scrolled:always ${
          scrolled ? "scrolled" : ""
        } ${
          scrolled
            ? "bg-white/70 dark:bg-midnight-400/70 backdrop-blur-lg border-b border-rose-100/80 dark:border-lavender-700/50 shadow-sm shadow-rose-100/40 dark:shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <Heart className="w-7 h-7 md:w-8 md:h-8 text-rose-500 fill-rose-300/70 animate-heart-beat" />
            </div>
            <span className="font-display text-lg md:text-xl font-semibold text-gradient-romantic whitespace-nowrap">
              {siteConfig.person1.name.split(" ")[0]} &amp; {siteConfig.person2.name.split(" ")[0]}
            </span>
          </a>

          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-rose-700/80 dark:text-rose-100/90 hover:text-rose-600 dark:hover:text-rose-200 hover:bg-rose-50 dark:hover:bg-midnight-300/60 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
              title={isDark ? "Açık tema ☀️" : "Koyu tema 🌙"}
              className="relative w-11 h-11 rounded-full border border-rose-200 dark:border-lavender-600/60 bg-white/70 dark:bg-midnight-400/80 backdrop-blur flex items-center justify-center text-rose-600 dark:text-lavender-200 shadow-sm hover:scale-110 hover:bg-rose-50 dark:hover:bg-midnight-300 transition-all duration-300 overflow-hidden"
            >
              <Sun
                className={`w-5 h-5 transition-all duration-500 ${
                  isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                } absolute`}
              />
              <Moon
                className={`w-5 h-5 transition-all duration-500 ${
                  isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                } absolute`}
              />
            </button>

            <button
              className="md:hidden w-10 h-10 rounded-full bg-white/60 dark:bg-midnight-400/70 backdrop-blur flex items-center justify-center text-rose-600 dark:text-lavender-200 border border-rose-100 dark:border-lavender-700/50"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menüyü aç"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white/90 dark:bg-midnight-400/90 backdrop-blur-lg border-t border-rose-100/80 dark:border-lavender-700/50 animate-fade-in-up">
            <div className="container mx-auto px-4 py-3 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl text-rose-700 dark:text-rose-100 bg-rose-50/60 dark:bg-midnight-300/60 hover:bg-rose-100 dark:hover:bg-midnight-200/70 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-rose-500 dark:text-rose-300" />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-rose-200/40 dark:bg-rose-500/20 blur-3xl animate-float-slow" />
          <div className="absolute top-40 right-5 w-72 h-72 md:w-96 md:h-96 rounded-full bg-lavender-200/50 dark:bg-lavender-500/25 blur-3xl animate-float" />
          <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-blush-200/50 dark:bg-blush-400/20 blur-3xl animate-float-fast" />
          <div className="absolute bottom-40 right-1/4 w-60 h-60 rounded-full bg-lavender-100/60 dark:bg-lavender-400/20 blur-3xl animate-float-slow" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 dark:bg-midnight-400/60 backdrop-blur-md border border-white/80 dark:border-lavender-700/50 mb-8 animate-fade-in">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-300 animate-heart-beat" />
            <span className="font-body text-sm text-rose-600 dark:text-lavender-200 font-medium tracking-wide uppercase">
              {siteConfig.meta.siteTitle}
            </span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="block text-gradient-romantic">
              {siteConfig.person1.name.split(" ")[0]}
            </span>
            <span className="inline-block mx-3 md:mx-5 text-4xl md:text-6xl align-middle animate-heart-beat">
              💕
            </span>
            <span className="block text-gradient-romantic">
              {siteConfig.person2.name.split(" ")[0]}
            </span>
          </h1>

          <p
            className="font-script text-2xl md:text-4xl text-blush-500 dark:text-lavender-200 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            {siteConfig.meta.heroQuote}
          </p>

          <p
            className="font-body text-base md:text-lg text-rose-900/70 dark:text-midnight-50/80 max-w-2xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Bu site, sana sevgimin ne kadar büyük olduğunu hatırlatmak için,
            kalbim seninle attığı her saniye için hazırlandı.
            <br className="hidden md:block" />
            Hadi birlikte hikayemizi yeniden yaşayalım 💕
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            <button onClick={() => scrollTo("sayac")} className="btn-romantic flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Hikayemize Başla
            </button>
            <button onClick={() => scrollTo("surpriz")} className="btn-outline-romantic flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Sana Sürprizim Var
            </button>
          </div>

          <button
            onClick={() => scrollTo("sayac")}
            className="inline-flex flex-col items-center gap-2 group animate-float"
            aria-label="Aşağı in"
          >
            <span className="font-body text-xs uppercase tracking-[0.2em] text-rose-400 dark:text-lavender-300 group-hover:text-rose-600 dark:group-hover:text-lavender-100 transition-colors">
              Aşağı kaydır
            </span>
            <div className="w-10 h-10 rounded-full border-2 border-rose-300 dark:border-lavender-400/70 flex items-center justify-center group-hover:bg-rose-50 dark:group-hover:bg-midnight-300/60 transition-colors">
              <ArrowDown className="w-4 h-4 text-rose-500 dark:text-lavender-300 animate-bounce" />
            </div>
          </button>
        </div>

        <svg
          className="absolute bottom-0 inset-x-0 w-full h-20 md:h-32 -z-0"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,120 480,20 720,60 C960,100 1200,20 1440,70 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.35)"
            className="dark:hidden"
          />
          <path
            d="M0,90 C240,110 480,50 720,80 C960,110 1200,50 1440,95 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.55)"
            className="dark:hidden"
          />
          <path
            d="M0,80 C240,120 480,20 720,60 C960,100 1200,20 1440,70 L1440,120 L0,120 Z"
            fill="rgba(26, 11, 43, 0.3)"
            className="hidden dark:block"
          />
          <path
            d="M0,90 C240,110 480,50 720,80 C960,110 1200,50 1440,95 L1440,120 L0,120 Z"
            fill="rgba(19, 7, 33, 0.5)"
            className="hidden dark:block"
          />
        </svg>
      </section>
    </>
  );
}
