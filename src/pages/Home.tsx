import { useEffect } from "react";
import Header from "@/components/Header";
import FloatingHearts from "@/components/FloatingHearts";
import LoveCounter from "@/components/LoveCounter";
import BioSection from "@/components/BioSection";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import SurpriseSection from "@/components/SurpriseSection";
import { siteConfig } from "@/config";
import { Heart } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <FloatingHearts />

      <div className="relative z-10">
        <Header />

        <main>
          <LoveCounter />
          <BioSection />
          <Timeline />
          <Gallery />
          <MusicPlayer />
          <SurpriseSection />
        </main>

        <footer className="relative border-t border-rose-100/80 dark:border-lavender-700/50 bg-white/40 dark:bg-midnight-500/60 backdrop-blur-md mt-20 py-10">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-300/60 animate-heart-beat" />
              <span className="font-display text-lg text-rose-700 dark:text-rose-100 font-semibold">
                {siteConfig.person1.name.split(" ")[0]} &amp; {siteConfig.person2.name.split(" ")[0]}
              </span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-300/60 animate-heart-beat" />
            </div>
            <p className="font-script text-xl text-blush-500 dark:text-lavender-200 mb-2">
              {siteConfig.meta.footerText}
            </p>
            <p className="font-body text-xs md:text-sm text-rose-900/50 dark:text-midnight-50/50">
              &copy; {new Date().getFullYear()} — Bu site, aşkımızın bir hatırası olarak sonsuza dek var olsun 💕
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
