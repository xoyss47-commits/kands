import { Heart, Star, Coffee, CircleDot, Sparkles, Plane, Home, Gift, BookOpen } from "lucide-react";
import { siteConfig, type TimelineEvent } from "@/config";
import { useLanguage } from "@/i18n";

const iconMap: Record<TimelineEvent["icon"], React.ReactNode> = {
  heart: <Heart className="w-5 h-5" />,
  star: <Star className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  ring: <CircleDot className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  plane: <Plane className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
  gift: <Gift className="w-5 h-5" />,
};

const timelineEnd: Record<string, string> = {
  tr: "...ve hikayemiz devam ediyor 💕",
  ru: "...и наша история продолжается 💕",
  en: "...and our story continues 💕",
  ro: "...și povestea noastră continuă 💕",
};

export default function Timeline() {
  const { t, lang } = useLanguage();
  return (
    <section id="hikaye" className="relative py-20 md:py-28 reveal-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-lavender-300" />
            <BookOpen className="w-6 h-6 text-lavender-500" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-lavender-300" />
          </div>
          <h2 className="section-title">{t("timeline.sectionTitle")}</h2>
          <p className="section-subtitle">
            {t("timeline.sectionSubtitle")}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="timeline-line" />

          <div className="space-y-10 md:space-y-16">
            {siteConfig.timeline.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              const n = idx + 1;
              const date = t(`content.tl.e${n}.date` as const);
              const title = t(`content.tl.e${n}.title` as const);
              const desc = t(`content.tl.e${n}.desc` as const);
              return (
                <div key={idx} className="relative reveal-on-scroll">
                  <div className="flex flex-col md:flex-row items-start">
                    <div
                      className={`w-full md:w-1/2 ${
                        isLeft ? "md:pr-12 md:text-right order-2 md:order-1 md:mt-0 mt-6 md:mt-0" : "md:pl-12 md:ml-auto order-2 mt-6 md:mt-0"
                      } pl-16 md:pl-0`}
                    >
                      <div className={`glass-card romantic-shadow p-5 md:p-7 inline-block text-left w-full md:w-[92%] ${isLeft ? "md:ml-auto" : ""}`}>
                        <p className="font-script text-lg text-rose-500 dark:text-rose-300 mb-2 flex items-center gap-2">
                          <span className="inline-block w-1 h-1 rounded-full bg-rose-400 dark:bg-rose-300" />
                          {date}
                        </p>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-rose-700 dark:text-rose-100 mb-3">
                          {title}
                        </h3>
                        <p className="font-body text-sm md:text-base text-rose-900/75 dark:text-midnight-50/80 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 md:top-4 z-10 order-1 md:order-none">
                      <div className="relative">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-rose-300 via-blush-300 to-lavender-300 flex items-center justify-center text-white shadow-lg shadow-rose-200">
                          {iconMap[event.icon]}
                        </div>
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-rose-200/50 to-lavender-200/50 blur-md -z-10 animate-pulse-soft" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="font-script text-2xl md:text-3xl text-gradient-romantic">
            {timelineEnd[lang] ?? timelineEnd.en}
          </p>
        </div>
      </div>
    </section>
  );
}
