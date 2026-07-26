import type { LanguageCode } from "./types";

export type TranslationKey =
  | "site.title"
  | "site.footer"
  | "nav.counter"
  | "nav.about"
  | "nav.story"
  | "nav.gallery"
  | "nav.song"
  | "nav.surprise"
  | "nav.themeLight"
  | "nav.themeDark"
  | "nav.language"

  | "hero.title"
  | "hero.quote"
  | "hero.description"
  | "hero.ctaStory"
  | "hero.ctaSurprise"
  | "hero.scrollDown"

  | "counter.sectionTitle"
  | "counter.sectionSubtitle"
  | "counter.labelStart"
  | "counter.togetherSoFar"
  | "counter.days"
  | "counter.hoursWithYou"
  | "counter.hours"
  | "counter.quote"

  | "counter.modalTitle"
  | "counter.modalDateLabel"
  | "counter.modalTimeLabel"
  | "counter.modalSave"
  | "counter.modalCancel"

  | "about.sectionTitle"
  | "about.sectionSubtitle"
  | "about.replacePhoto"
  | "about.resetPhoto"
  | "about.bioRoleP1"
  | "about.bioRoleP2"
  | "about.lastSaved"
  | "about.autosave30s"
  | "about.compressing"
  | "about.errorQuota"
  | "about.errorGeneric"

  | "timeline.sectionTitle"
  | "timeline.sectionSubtitle"

  | "gallery.sectionTitle"
  | "gallery.sectionSubtitle"
  | "gallery.addPhoto"
  | "gallery.reset"
  | "gallery.uploadNewMemory"
  | "gallery.lastSaved"
  | "gallery.autosave30s"
  | "gallery.compressing"
  | "gallery.storageUsedTitle"
  | "gallery.storageErrorQuota"
  | "gallery.storageErrorGeneric"
  | "gallery.storageErrorGenericRead"
  | "gallery.errorAllFailed"
  | "gallery.storageBarLabel"

  | "song.sectionTitle"
  | "song.sectionSubtitle"
  | "song.note"
  | "song.youtubeOpen"
  | "song.nowPlaying"
  | "song.youtubeListen"
  | "song.waiting"

  | "surprise.sectionTitle"
  | "surprise.sectionSubtitle"
  | "surprise.hiddenButton"
  | "surprise.revealButton"
  | "surprise.letterTitle"
  | "surprise.signature"

  | "actions.hug"
  | "actions.flower"
  | "actions.love"
  | "actions.hugMessage"
  | "actions.flowerMessage"
  | "actions.loveMessage"

  | "generic.newMemoryCaption"
  | "generic.errorFileRead";

export type TranslationDict = Record<LanguageCode, Record<TranslationKey, string>>;

export const translations: TranslationDict = {
  tr: {
    "site.title": "Bizim Hikayemiz 💕",
    "site.footer": "Sevgiyle hazırlandı ✨",

    "nav.counter": "Sayaç",
    "nav.about": "Biz",
    "nav.story": "Hikaye",
    "nav.gallery": "Galeri",
    "nav.song": "Şarkımız",
    "nav.surprise": "Sürpriz",
    "nav.themeLight": "Aydınlık temaya geç",
    "nav.themeDark": "Koyu temaya geç",
    "nav.language": "Dil",

    "hero.title": "{p1} 💕 {p2}",
    "hero.quote": "İki kalbin birleştiği yerde, zaman durur.",
    "hero.description":
      "Bu site, sana sevgimin ne kadar büyük olduğunu hatırlatmak için, kalbim seninle attığı her saniye için hazırlandı. Hadi birlikte hikayemizi yeniden yaşayalım 💕",
    "hero.ctaStory": "Hikayemize Başla",
    "hero.ctaSurprise": "Sana Sürprizim Var",
    "hero.scrollDown": "Aşağı in",

    "counter.sectionTitle": "İlişki Sayaç",
    "counter.sectionSubtitle": "Kalbim seninle birlikte attığı günden beri...",
    "counter.labelStart": "Başlangıç tarihimiz:",
    "counter.togetherSoFar": "Şimdiye kadar birlikte",
    "counter.days": "Gün",
    "counter.hoursWithYou": "Seninle geçen her saat",
    "counter.hours": "Saat",
    "counter.quote": "“Her saniye seninle geçen, bana bir ömre bedel.”",

    "counter.modalTitle": "Sayaç Ayarları",
    "counter.modalDateLabel": "İlişki Başlangıç Tarihi",
    "counter.modalTimeLabel": "Saat (opsiyonel)",
    "counter.modalSave": "Kaydet",
    "counter.modalCancel": "İptal",

    "about.sectionTitle": "Hakkımızda",
    "about.sectionSubtitle": "İki farklı dünyanın, tek bir kalpte buluşması...",
    "about.replacePhoto": "Fotoğrafı Değiştir",
    "about.resetPhoto": "Varsayılan fotoğrafa geri döner",
    "about.bioRoleP1": "Erkek Sevgili",
    "about.bioRoleP2": "Kız Sevgili",
    "about.lastSaved": "Kayıt:",
    "about.autosave30s": "• 30 sn'de bir",
    "about.compressing": "Fotoğraf sıkıştırılıyor, biraz bekle...",
    "about.errorQuota":
      "Fotoğraf kaydedilemiyor (boyut: {size}). Galeriden birkaç fotoğraf silip tekrar deneyin — tarayıcı depolama alanı doldu.",
    "about.errorGeneric": "Fotoğraf kaydedilemedi.",

    "timeline.sectionTitle": "Bizim Hikayemiz",
    "timeline.sectionSubtitle": "Bir kahve sohbetinden, ömür boyu sürecek bir masala...",

    "gallery.sectionTitle": "Anılar Galerisi",
    "gallery.sectionSubtitle": "Her fotoğraf, bir his ve bir hatıra...",
    "gallery.addPhoto": "Fotoğraf Ekle",
    "gallery.reset": "Sıfırla",
    "gallery.uploadNewMemory": "Yeni anılar oluştur",
    "gallery.lastSaved": "Son kayıt:",
    "gallery.autosave30s": "(Her 30 sn'de bir otomatik kaydedilir)",
    "gallery.compressing": "Fotoğraflar sıkıştırılıyor...",
    "gallery.storageUsedTitle": "Galeri:",
    "gallery.storageBarLabel": "Galeri: {galSize} • Toplam: {total} / 5 MB",
    "gallery.storageErrorQuota":
      "Fotoğraflar tarayıcı sınırına (5MB) yaklaştı. Galeri boyutu: {size}. Bazı eski fotoğrafları silerek veya daha az sayıda fotoğraf yükleyerek tekrar deneyin. Fotoğraflar otomatik olarak sıkıştırılıyor ama sınır zorlanıyor.",
    "gallery.storageErrorGeneric": "Fotoğraflar kaydedilirken bir hata oluştu.",
    "gallery.errorAllFailed": "Hiçbir fotoğraf yüklenemedi. Lütfen tekrar deneyin.",
    "gallery.storageErrorGenericRead": "Bazı dosyalar okunamadı, lütfen tekrar deneyin.",

    "song.sectionTitle": "Bizim Şarkımız 🎵",
    "song.sectionSubtitle": "Seni dinlediğimde, seni düşündüğümde...",
    "song.note": "Birlikte ilk kez dinlediğimiz şarkı 💕",
    "song.youtubeOpen": "YouTube'da aç",
    "song.nowPlaying": "Şimdi çalıyor 🎶",
    "song.youtubeListen": "YouTube'da dinle 🎬",
    "song.waiting": "Seni bekliyor 💕",

    "surprise.sectionTitle": "Sana Sürprizim 💌",
    "surprise.sectionSubtitle": "Kalbimden sana, en özel sözlerim...",
    "surprise.hiddenButton": "💕 Sürprizi görmek için tıkla 💕",
    "surprise.revealButton": "❤️ Aşkımı oku ❤️",
    "surprise.letterTitle": "Sevgilim, sana özel bir mektubum var",
    "surprise.signature": "Sonsuza dek senin, 💕",

    "actions.hug": "💖 Bana sarıl",
    "actions.flower": "🌹 Çiçek al",
    "actions.love": "✨ Seni seviyorum",
    "actions.hugMessage": "Seni çok sıkıştırarak, sımsıkı sarılıyorum 💕",
    "actions.flowerMessage": "Sana bu gülleri, kokusuyla birlikte gönderiyorum 🌹🥺",
    "actions.loveMessage": "Seni her şeyden çok seviyorum, bir ömür boyu benimle kal 💖",

    "generic.newMemoryCaption": "Yeni anımız 💕",
    "generic.errorFileRead": "Dosya okunamadı, lütfen tekrar deneyin.",
  },

  ru: {
    "site.title": "Наша история 💕",
    "site.footer": "Сделано с любовью ✨",

    "nav.counter": "Счётчик",
    "nav.about": "Мы",
    "nav.story": "История",
    "nav.gallery": "Галерея",
    "nav.song": "Наша песня",
    "nav.surprise": "Сюрприз",
    "nav.themeLight": "Светлая тема",
    "nav.themeDark": "Тёмная тема",
    "nav.language": "Язык",

    "hero.title": "{p1} 💕 {p2}",
    "hero.quote": "Там, где встречаются два сердца, время останавливается.",
    "hero.description":
      "Этот сайт создан, чтобы напомнить тебе, как велика моя любовь. За каждую секунду, что моё сердце бьётся рядом с тобой. Давай вместе переживём нашу историю заново 💕",
    "hero.ctaStory": "Начать нашу историю",
    "hero.ctaSurprise": "Для тебя есть сюрприз",
    "hero.scrollDown": "Прокрутить вниз",

    "counter.sectionTitle": "Счётчик наших отношений",
    "counter.sectionSubtitle": "С того дня, как моё сердце стало биться с тобой...",
    "counter.labelStart": "Дата нашего начала:",
    "counter.togetherSoFar": "Вместе до сих пор",
    "counter.days": "Дней",
    "counter.hoursWithYou": "Каждый час с тобой",
    "counter.hours": "Часов",
    "counter.quote": "“Каждая секунда с тобой стоит для меня целой жизни.”",

    "counter.modalTitle": "Настройки счётчика",
    "counter.modalDateLabel": "Дата начала отношений",
    "counter.modalTimeLabel": "Время (необязательно)",
    "counter.modalSave": "Сохранить",
    "counter.modalCancel": "Отмена",

    "about.sectionTitle": "О нас",
    "about.sectionSubtitle": "Два разных мира, встретившихся в одном сердце...",
    "about.replacePhoto": "Сменить фото",
    "about.resetPhoto": "Вернуть фото по умолчанию",
    "about.bioRoleP1": "Любимый парень",
    "about.bioRoleP2": "Любимая девушка",
    "about.lastSaved": "Сохранено:",
    "about.autosave30s": "• каждые 30 сек",
    "about.compressing": "Фото сжимается, подожди немного...",
    "about.errorQuota":
      "Фото не сохраняется (размер: {size}). Удали несколько фото из галереи и попробуй снова — память браузера заполнена.",
    "about.errorGeneric": "Не удалось сохранить фото.",

    "timeline.sectionTitle": "Наша история",
    "timeline.sectionSubtitle": "От разговора за кофе до сказки на всю жизнь...",

    "gallery.sectionTitle": "Галерея воспоминаний",
    "gallery.sectionSubtitle": "Каждое фото — одно чувство и одно воспоминание...",
    "gallery.addPhoto": "Добавить фото",
    "gallery.reset": "Сбросить",
    "gallery.uploadNewMemory": "Создавать новые воспоминания",
    "gallery.lastSaved": "Последнее сохранение:",
    "gallery.autosave30s": "(Сохраняется автоматически каждые 30 сек)",
    "gallery.compressing": "Фото сжимаются...",
    "gallery.storageUsedTitle": "Галерея:",
    "gallery.storageBarLabel": "Галерея: {galSize} • Всего: {total} / 5 МБ",
    "gallery.storageErrorQuota":
      "Фото приближаются к лимиту браузера (5 МБ). Размер галереи: {size}. Попробуй удалить несколько старых фото или загрузить меньше штук. Фото автоматически сжимаются, но лимит близко.",
    "gallery.storageErrorGeneric": "При сохранении фото произошла ошибка.",
    "gallery.errorAllFailed": "Ни одно фото не удалось загрузить. Пожалуйста, попробуй ещё раз.",
    "gallery.storageErrorGenericRead": "Некоторые файлы не удалось прочитать, попробуй ещё раз.",

    "song.sectionTitle": "Наша песня 🎵",
    "song.sectionSubtitle": "Когда я слушаю её, я думаю о тебе...",
    "song.note": "Песня, которую мы впервые послушали вместе 💕",
    "song.youtubeOpen": "Открыть на YouTube",
    "song.nowPlaying": "Играет сейчас 🎶",
    "song.youtubeListen": "Слушать на YouTube 🎬",
    "song.waiting": "Ждёт тебя 💕",

    "surprise.sectionTitle": "Сюрприз для тебя 💌",
    "surprise.sectionSubtitle": "Самые особенные слова — от сердца к тебе...",
    "surprise.hiddenButton": "💕 Нажми, чтобы увидеть сюрприз 💕",
    "surprise.revealButton": "❤️ Прочитать мою любовь ❤️",
    "surprise.letterTitle": "Моё любимое, у меня для тебя особое письмо",
    "surprise.signature": "Твой навсегда, 💕",

    "actions.hug": "💖 Обними меня",
    "actions.flower": "🌹 Подари цветы",
    "actions.love": "✨ Я тебя люблю",
    "actions.hugMessage": "Крепко-крепко обнимаю тебя 💕",
    "actions.flowerMessage": "Отправляю тебе эти розы вместе с их ароматом 🌹🥺",
    "actions.loveMessage": "Я люблю тебя больше всего на свете. Оставайся со мной всю жизнь 💖",

    "generic.newMemoryCaption": "Наше новое мгновение 💕",
    "generic.errorFileRead": "Не удалось прочитать файл, пожалуйста, попробуй ещё раз.",
  },

  en: {
    "site.title": "Our Story 💕",
    "site.footer": "Made with love ✨",

    "nav.counter": "Counter",
    "nav.about": "Us",
    "nav.story": "Story",
    "nav.gallery": "Gallery",
    "nav.song": "Our Song",
    "nav.surprise": "Surprise",
    "nav.themeLight": "Switch to light mode",
    "nav.themeDark": "Switch to dark mode",
    "nav.language": "Language",

    "hero.title": "{p1} 💕 {p2}",
    "hero.quote": "Where two hearts meet, time stands still.",
    "hero.description":
      "This site was built to remind you of how big my love is — for every second my heart beats with yours. Let's relive our story together 💕",
    "hero.ctaStory": "Start Our Story",
    "hero.ctaSurprise": "I Have a Surprise for You",
    "hero.scrollDown": "Scroll down",

    "counter.sectionTitle": "Relationship Counter",
    "counter.sectionSubtitle": "Ever since my heart started beating with yours...",
    "counter.labelStart": "Our start date:",
    "counter.togetherSoFar": "Together so far",
    "counter.days": "Days",
    "counter.hoursWithYou": "Every hour spent with you",
    "counter.hours": "Hours",
    "counter.quote": "“Every second spent with you is worth a lifetime to me.”",

    "counter.modalTitle": "Counter Settings",
    "counter.modalDateLabel": "Relationship Start Date",
    "counter.modalTimeLabel": "Time (optional)",
    "counter.modalSave": "Save",
    "counter.modalCancel": "Cancel",

    "about.sectionTitle": "About Us",
    "about.sectionSubtitle": "Two different worlds meeting in a single heart...",
    "about.replacePhoto": "Change photo",
    "about.resetPhoto": "Revert to default photo",
    "about.bioRoleP1": "Boyfriend",
    "about.bioRoleP2": "Girlfriend",
    "about.lastSaved": "Saved:",
    "about.autosave30s": "• every 30 s",
    "about.compressing": "Compressing photo, hold on...",
    "about.errorQuota":
      "Photo cannot be saved (size: {size}). Delete a few from the gallery and try again — browser storage is full.",
    "about.errorGeneric": "Could not save photo.",

    "timeline.sectionTitle": "Our Story",
    "timeline.sectionSubtitle": "From a coffee chat to a lifelong fairy tale...",

    "gallery.sectionTitle": "Memory Gallery",
    "gallery.sectionSubtitle": "Every photo, a feeling and a memory...",
    "gallery.addPhoto": "Add Photo",
    "gallery.reset": "Reset",
    "gallery.uploadNewMemory": "Make new memories",
    "gallery.lastSaved": "Last saved:",
    "gallery.autosave30s": "(Auto-saved every 30 seconds)",
    "gallery.compressing": "Compressing photos...",
    "gallery.storageUsedTitle": "Gallery:",
    "gallery.storageBarLabel": "Gallery: {galSize} • Total: {total} / 5 MB",
    "gallery.storageErrorQuota":
      "Photos are near the browser limit (5 MB). Gallery size: {size}. Try deleting some old photos or uploading fewer. Photos are automatically compressed, but the limit is close.",
    "gallery.storageErrorGeneric": "An error occurred while saving photos.",
    "gallery.errorAllFailed": "No photos could be uploaded. Please try again.",
    "gallery.storageErrorGenericRead": "Some files could not be read, please try again.",

    "song.sectionTitle": "Our Song 🎵",
    "song.sectionSubtitle": "When I listen to it, I think of you...",
    "song.note": "The first song we ever listened to together 💕",
    "song.youtubeOpen": "Open on YouTube",
    "song.nowPlaying": "Now playing 🎶",
    "song.youtubeListen": "Listen on YouTube 🎬",
    "song.waiting": "Waiting for you 💕",

    "surprise.sectionTitle": "A Surprise for You 💌",
    "surprise.sectionSubtitle": "My most special words — from heart to you...",
    "surprise.hiddenButton": "💕 Click to see the surprise 💕",
    "surprise.revealButton": "❤️ Read my love ❤️",
    "surprise.letterTitle": "My love, I have a special letter for you",
    "surprise.signature": "Forever yours, 💕",

    "actions.hug": "💖 Hug me",
    "actions.flower": "🌹 Give flowers",
    "actions.love": "✨ I love you",
    "actions.hugMessage": "I'm hugging you so tightly — as tight as I can 💕",
    "actions.flowerMessage": "I'm sending you these roses, together with their fragrance 🌹🥺",
    "actions.loveMessage": "I love you more than anything. Stay with me all my life 💖",

    "generic.newMemoryCaption": "Our new memory 💕",
    "generic.errorFileRead": "File could not be read, please try again.",
  },

  ro: {
    "site.title": "Povestea Noastră 💕",
    "site.footer": "Făcut cu dragoste ✨",

    "nav.counter": "Contor",
    "nav.about": "Noi",
    "nav.story": "Poveste",
    "nav.gallery": "Galerie",
    "nav.song": "Cântecul Nostru",
    "nav.surprise": "Surpriză",
    "nav.themeLight": "Temă deschisă",
    "nav.themeDark": "Temă închisă",
    "nav.language": "Limbă",

    "hero.title": "{p1} 💕 {p2}",
    "hero.quote": "Acolo unde două inimi se întâlnesc, timpul se oprește.",
    "hero.description":
      "Acest site a fost făcut ca să-ți amintesc cât de mare este dragostea mea — pentru fiecare secundă în care inima mea bate cu a ta. Hai să retrăim împreună povestea noastră 💕",
    "hero.ctaStory": "Începe Povestea Noastră",
    "hero.ctaSurprise": "Am O Surpriză Pentru Tine",
    "hero.scrollDown": "Derulează în jos",

    "counter.sectionTitle": "Contor Relație",
    "counter.sectionSubtitle": "De când inima mea începe să bată cu a ta...",
    "counter.labelStart": "Data de început:",
    "counter.togetherSoFar": "Împreună până acum",
    "counter.days": "Zile",
    "counter.hoursWithYou": "Fiecare oră petrecută cu tine",
    "counter.hours": "Ore",
    "counter.quote": "“Fiecare secundă petrecută cu tine valorează o întreagă viață pentru mine.”",

    "counter.modalTitle": "Setări Contor",
    "counter.modalDateLabel": "Data Începerii Relației",
    "counter.modalTimeLabel": "Oră (opțional)",
    "counter.modalSave": "Salvează",
    "counter.modalCancel": "Anulează",

    "about.sectionTitle": "Despre Noi",
    "about.sectionSubtitle": "Două lumi diferite, întâlnite într-o singură inimă...",
    "about.replacePhoto": "Schimbă poza",
    "about.resetPhoto": "Revenire la poză implicită",
    "about.bioRoleP1": "Iubit",
    "about.bioRoleP2": "Iubită",
    "about.lastSaved": "Salvat:",
    "about.autosave30s": "• la fiecare 30 s",
    "about.compressing": "Se comprimă poza, așteaptă puțin...",
    "about.errorQuota":
      "Poza nu poate fi salvată (dimensiune: {size}). Șterge câteva din galerie și încearcă din nou — stocarea browserului este plină.",
    "about.errorGeneric": "Nu s-a putut salva poza.",

    "timeline.sectionTitle": "Povestea Noastră",
    "timeline.sectionSubtitle": "De la o discuție la cafea, până la un basm pe viață...",

    "gallery.sectionTitle": "Galerie de Amintiri",
    "gallery.sectionSubtitle": "Fiecare poză, un sentiment și o amintire...",
    "gallery.addPhoto": "Adaugă Poză",
    "gallery.reset": "Resetează",
    "gallery.uploadNewMemory": "Creează noi amintiri",
    "gallery.lastSaved": "Ultima salvare:",
    "gallery.autosave30s": "(Salvare automată la fiecare 30 de secunde)",
    "gallery.compressing": "Se comprimă pozele...",
    "gallery.storageUsedTitle": "Galerie:",
    "gallery.storageBarLabel": "Galerie: {galSize} • Total: {total} / 5 MB",
    "gallery.storageErrorQuota":
      "Pozele sunt aproape de limita browserului (5 MB). Dimensiunea galeriei: {size}. Încearcă să ștergi câteva poze vechi sau să încarci mai puține. Pozele sunt comprimate automat, dar limita este aproape atinsă.",
    "gallery.storageErrorGeneric": "A apărut o eroare la salvarea pozelor.",
    "gallery.errorAllFailed": "Nicio poză nu a putut fi încărcată. Te rog, încearcă din nou.",
    "gallery.storageErrorGenericRead": "Unele fișiere nu au putut fi citite, încearcă din nou.",

    "song.sectionTitle": "Cântecul Nostru 🎵",
    "song.sectionSubtitle": "Când îl ascult, mă gândesc la tine...",
    "song.note": "Primul cântec pe care l-am ascultat împreună 💕",
    "song.youtubeOpen": "Deschide pe YouTube",
    "song.nowPlaying": "Redă acum 🎶",
    "song.youtubeListen": "Ascultă pe YouTube 🎬",
    "song.waiting": "Te așteaptă 💕",

    "surprise.sectionTitle": "O Surpriză Pentru Tine 💌",
    "surprise.sectionSubtitle": "Cuvintele mele cele mai speciale — de la inimă, pentru tine...",
    "surprise.hiddenButton": "💕 Apasă pentru a vedea surpriza 💕",
    "surprise.revealButton": "❤️ Citește dragostea mea ❤️",
    "surprise.letterTitle": "Iubirea mea, am o scrisoare specială pentru tine",
    "surprise.signature": "Al tău pentru totdeauna, 💕",

    "actions.hug": "💖 Îmbrățișează-mă",
    "actions.flower": "🌹 Dă flori",
    "actions.love": "✨ Te iubesc",
    "actions.hugMessage": "Te îmbrățișez foarte tare — cât pot de tare 💕",
    "actions.flowerMessage": "Îți trimit aceste trandafiri, împreună cu parfumul lor 🌹🥺",
    "actions.loveMessage": "Te iubesc mai mult decât orice. Rămâi cu mine toată viața 💖",

    "generic.newMemoryCaption": "Noua noastră amintire 💕",
    "generic.errorFileRead": "Fișierul nu a putut fi citit, te rog, încearcă din nou.",
  },
};
