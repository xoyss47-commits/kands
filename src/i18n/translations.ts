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
  | "generic.errorFileRead"

  | "data.exportAll"
  | "data.importAll"
  | "data.exportedFilename"
  | "data.importSuccess"
  | "data.importError"

  | "content.person1.role"
  | "content.person1.nickname"
  | "content.person2.role"
  | "content.person2.nickname"

  | "content.p1Bio.desc"
  | "content.p1Bio.trait1"
  | "content.p1Bio.trait2"
  | "content.p1Bio.trait3"
  | "content.p1Bio.trait4"

  | "content.p2Bio.desc"
  | "content.p2Bio.trait1"
  | "content.p2Bio.trait2"
  | "content.p2Bio.trait3"
  | "content.p2Bio.trait4"

  | "content.tl.e1.date"
  | "content.tl.e1.title"
  | "content.tl.e1.desc"
  | "content.tl.e2.date"
  | "content.tl.e2.title"
  | "content.tl.e2.desc"
  | "content.tl.e3.date"
  | "content.tl.e3.title"
  | "content.tl.e3.desc"
  | "content.tl.e4.date"
  | "content.tl.e4.title"
  | "content.tl.e4.desc"
  | "content.tl.e5.date"
  | "content.tl.e5.title"
  | "content.tl.e5.desc"
  | "content.tl.e6.date"
  | "content.tl.e6.title"
  | "content.tl.e6.desc"

  | "content.gallery.cap1"
  | "content.gallery.cap2"
  | "content.gallery.cap3"
  | "content.gallery.cap4"
  | "content.gallery.cap5"
  | "content.gallery.cap6"
  | "content.gallery.cap7"
  | "content.gallery.cap8"
  | "content.gallery.cap9"
  | "content.gallery.cap10"

  | "content.song.sectionTitle"
  | "content.song.sectionSubtitle"
  | "content.song.smallNote"
  | "content.song.title"
  | "content.song.artist"
  | "content.song.album"

  | "content.surprise.hiddenBtn"
  | "content.surprise.revealBtn"
  | "content.surprise.title"
  | "content.surprise.p1"
  | "content.surprise.p2"
  | "content.surprise.p3"
  | "content.surprise.p4"
  | "content.surprise.p5"
  | "content.surprise.p6"
  | "content.surprise.signature"
  | "content.surprise.act1"
  | "content.surprise.act2"
  | "content.surprise.act3";

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

    "data.exportAll": "💾 Fotoğrafları Dışa Aktar",
    "data.importAll": "📂 Fotoğrafları İçe Aktar",
    "data.exportedFilename": "kands-fotograflar-yedek.json",
    "data.importSuccess": "✅ Fotoğraflar başarıyla yüklendi!",
    "data.importError": "❌ Dosya okunamadı, geçerli bir yedek dosyası seçin.",

    "content.person1.role": "Erkek Sevgili",
    "content.person1.nickname": "Kemalcim",
    "content.person2.role": "Kız Sevgili",
    "content.person2.nickname": "Sashicim",

    "content.p1Bio.desc":
      "Hayalleri büyük, kalbi sıcak bir insan. Kahve içmeyi, yürüyüş yapmayı ve en çok da seninle vakit geçirmeyi sever. Gülüşü dünyayı aydınlatan, yanında her şeyin daha güzel olduğu biri. Seni çok seviyor.",
    "content.p1Bio.trait1": "Sabırlı",
    "content.p1Bio.trait2": "Romantik",
    "content.p1Bio.trait3": "Yaratıcı",
    "content.p1Bio.trait4": "Sadık",

    "content.p2Bio.desc":
      "Güzel bir ruh, inanılmaz bir kalp. Hayata baktığı açıyla her şeyi daha anlamlı kılan, varlığı bile şifa olan biri. Gözlerine bakmak bile dünyanın en güzel yeri. Seni her şeyden çok seviyor.",
    "content.p2Bio.trait1": "Güzel Kalpli",
    "content.p2Bio.trait2": "Zeki",
    "content.p2Bio.trait3": "Neşeli",
    "content.p2Bio.trait4": "Sevgi Dolu",

    "content.tl.e1.date": "14 Şubat 2022",
    "content.tl.e1.title": "İlk Tanışma 💫",
    "content.tl.e1.desc":
      "Kafe önerildiğinde hiç tahmin etmezdim ki hayatımın en güzel günü olacaktı. Gözlerinin içine baktığım anda, zamanın durduğunu hissettim. O günden beri sen olmadan bir gün bile düşünemiyorum.",

    "content.tl.e2.date": "15 Mart 2022",
    "content.tl.e2.title": "İlk Buluşmamız 🌹",
    "content.tl.e2.desc":
      "Ellerimiz ilk kez değdiğinde bütün tüylerim diken diken oldu. Seninle geçen her dakika, bir ömre bedeldi. O gün gece uyuyamadım, sadece gülümsedim durdum.",

    "content.tl.e3.date": "20 Nisan 2022",
    "content.tl.e3.title": "Resmi Sevgili olduk 💞",
    "content.tl.e3.desc":
      "'Sevgili olur muyuz?' dediğinde kalbim göğsümden çıkacak gibiydi. Evet, bir milyon kez evet! O andan beri şanslı olduğumu her gün hatırlatıyor bana varlığın.",

    "content.tl.e4.date": "15 Temmuz 2022",
    "content.tl.e4.title": "İlk Tatilimiz 🌊",
    "content.tl.e4.desc":
      "Güneşin battığı yerde oturmuş el ele tutuştuk. 'Bu kadar mükemmel olabilir mi?' diye sormuştum. Gülüp 'Bundan daha güzel günlerimiz olacak' demişsin. Haklı çıktın.",

    "content.tl.e5.date": "31 Aralık 2022",
    "content.tl.e5.title": "İlk Yıl Dönümümüz ✨",
    "content.tl.e5.desc":
      "Bir yıl nasıl geçti anlamadım. Yanında her dakika bir saniye gibi gidiyor. Seninle geçen her yıla, bin tane daha istiyorum. Sonsuza kadar kadar birlikte olalım.",

    "content.tl.e6.date": "Bugün 💗",
    "content.tl.e6.title": "Ve Hala Seviyorum...",
    "content.tl.e6.desc":
      "Tanıştığımızdan beri her gün biraz daha seni seviyorum. Yanlışlarımız, üzüntülerimiz, güzelliklerimiz... Hepsi birlikte olduğumuz için anlamlı. Bana şans verdiğin için teşekkür ederim. Sen olmadan yaşayamam.",

    "content.gallery.cap1": "İlk anımız 💕",
    "content.gallery.cap2": "Birlikte gülümsediğimiz gün 💖",
    "content.gallery.cap3": "Seninle geçen güzel bir an 🌹",
    "content.gallery.cap4": "Yıldızlar altında 🌟",
    "content.gallery.cap5": "Seni özlediğim an 💗",
    "content.gallery.cap6": "El ele tutuştuk 🤝💕",
    "content.gallery.cap7": "Güneşin altında seninle ☀️",
    "content.gallery.cap8": "Birlikte sonsuz an ✨",
    "content.gallery.cap9": "Kalbim seninle atıyor 💓",
    "content.gallery.cap10": "Sonsuza dek birlikte 💕",

    "content.song.sectionTitle": "Bizim Şarkımız 🎵",
    "content.song.sectionSubtitle": "Seni dinlediğimde, seni düşündüğümde...",
    "content.song.smallNote": "Birlikte ilk kez dinlediğimiz şarkı 💕",
    "content.song.title": "Тёмная Ночь",
    "content.song.artist": "Баста (Basta)",
    "content.song.album": "GAZ LIVE",

    "content.surprise.hiddenBtn": "💕 Sürprizi görmek için tıkla 💕",
    "content.surprise.revealBtn": "❤️ Aşkımı oku ❤️",
    "content.surprise.title": "Sana En Özel Şarkım 💗",
    "content.surprise.p1": "Sevgilim,",
    "content.surprise.p2":
      "Bugün sana bir şey demek istiyorum. Belki çok kez söyledim ama her gün yeniden hissettiğim bir şey var: Sen olmadan hayatımı düşünemiyorum. Bazen kavga ederiz, bazen kızarız, bazen yanlış anlarız... Ama bütün bunlara rağmen, kalbim hep seninle atıyor.",
    "content.surprise.p3":
      "İltifat etmek istediğim çok şey var: Gülüşün, sesin, gözlerinin içindeki ışık, beni anlaman, zor zamanlarda bile yanımda durman... Ama en önemlisi, sen olduğun için varlık gösterdiğin için çok şanslı olduğumu biliyorum.",
    "content.surprise.p4":
      "Aramızda boşluklar olsa bile, kalbimde senin için her zaman açılan bir kapı var. Beni bugüne kadar taşıdığın, bana değer verdiğin, sevgini her gün hissetttiğin için sana minnettarım.",
    "content.surprise.p5":
      "Seni tekrar tekrar seçmek isterdim. Her hayatta, her evrende, her durumda... Seni seviyorum. Ve seveceğim. Sonsuza dek.",
    "content.surprise.p6": "Sadece senin olman yeter. Çünkü sen benim her şeyimsin. 💕",
    "content.surprise.signature": "Sonsuza dek senin, 💕",
    "content.surprise.act1": "💖 Bana sarıl",
    "content.surprise.act2": "🌹 Çiçek al",
    "content.surprise.act3": "✨ Seni seviyorum",
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

    "data.exportAll": "💾 Экспорт фото",
    "data.importAll": "📂 Импорт фото",
    "data.exportedFilename": "kands-foto-rezerv.json",
    "data.importSuccess": "✅ Фото успешно загружены!",
    "data.importError": "❌ Не удалось прочитать файл, выбери правильную резервную копию.",

    "content.person1.role": "Любимый парень",
    "content.person1.nickname": "Кемальчик",
    "content.person2.role": "Любимая девушка",
    "content.person2.nickname": "Сашачик",

    "content.p1Bio.desc":
      "Человек с большими мечтами и горячим сердцем. Любит пить кофе, гулять и больше всего — проводить время с тобой. Его улыбка освещает мир, с ним всё становится красивее. Он очень сильно тебя любит.",
    "content.p1Bio.trait1": "Терпеливый",
    "content.p1Bio.trait2": "Романтичный",
    "content.p1Bio.trait3": "Творческий",
    "content.p1Bio.trait4": "Верный",

    "content.p2Bio.desc":
      "Прекрасная душа, невероятное сердце. Своим взглядом на жизнь она делает всё более осмысленным, одно её присутствие — как лекарство. Даже смотреть в её глаза — самое прекрасное место на земле. Она любит тебя больше всего на свете.",
    "content.p2Bio.trait1": "С добрым сердцем",
    "content.p2Bio.trait2": "Умная",
    "content.p2Bio.trait3": "Весёлая",
    "content.p2Bio.trait4": "Полная любви",

    "content.tl.e1.date": "14 февраля 2022",
    "content.tl.e1.title": "Первая встреча 💫",
    "content.tl.e1.desc":
      "Когда предложили встретиться в кафе, я и не предполагал, что это будет самый прекрасный день в моей жизни. В тот миг, когда я заглянул тебе в глаза, я почувствовал, что время остановилось. С того дня я не могу представить ни одного дня без тебя.",

    "content.tl.e2.date": "15 марта 2022",
    "content.tl.e2.title": "Наша первая прогулка 🌹",
    "content.tl.e2.desc":
      "Когда наши руки впервые коснулись, у меня пробежали мурашки по коже. Каждая минута, проведённая с тобой, стоит целой жизни. Тогда я ночью не мог уснуть, просто всё время улыбался.",

    "content.tl.e3.date": "20 апреля 2022",
    "content.tl.e3.title": "Мы официально стали парой 💞",
    "content.tl.e3.desc":
      "Когда ты сказала «Будешь моей девушкой?», у меня сердце чуть не выпрыгнуло из груди. Да, да — миллион раз да! С того момента твоё присутствие каждый день напоминает мне, какой я счастливый.",

    "content.tl.e4.date": "15 июля 2022",
    "content.tl.e4.title": "Наше первое путешествие 🌊",
    "content.tl.e4.desc":
      "Мы сидели там, где садится солнце, и держались за руки. Я спросил: «Возможно ли быть настолько идеально?» — а ты улыбнулась и сказала: «У нас будут ещё более прекрасные дни». И ты оказалась права.",

    "content.tl.e5.date": "31 декабря 2022",
    "content.tl.e5.title": "Наша первая годовщина ✨",
    "content.tl.e5.desc":
      "Я и не понял, как пролетел целый год. Рядом с тобой каждая минута летит как секунда. За каждый прожитый с тобой год я хочу ещё тысячу. Давай будем вместе вечно.",

    "content.tl.e6.date": "Сегодня 💗",
    "content.tl.e6.title": "И я всё ещё люблю тебя...",
    "content.tl.e6.desc":
      "С дня нашего знакомства я люблю тебя всё сильнее с каждым днём. Наши ошибки, грусти, радости... Всё это имеет смысл только потому, что мы вместе. Спасибо, что дала мне этот шанс. Я не могу жить без тебя.",

    "content.gallery.cap1": "Наше первое мгновение 💕",
    "content.gallery.cap2": "День, когда мы улыбались вместе 💖",
    "content.gallery.cap3": "Прекрасный момент с тобой 🌹",
    "content.gallery.cap4": "Под звёздами 🌟",
    "content.gallery.cap5": "Мгновение, когда я скучаю по тебе 💗",
    "content.gallery.cap6": "Мы держались за руки 🤝💕",
    "content.gallery.cap7": "С тобой под солнцем ☀️",
    "content.gallery.cap8": "Вечное мгновение вместе ✨",
    "content.gallery.cap9": "Моё сердце бьётся с тобой 💓",
    "content.gallery.cap10": "Вместе навеки 💕",

    "content.song.sectionTitle": "Наша песня 🎵",
    "content.song.sectionSubtitle": "Когда я слушаю её, я думаю о тебе...",
    "content.song.smallNote": "Песня, которую мы впервые послушали вместе 💕",
    "content.song.title": "Тёмная Ночь",
    "content.song.artist": "Баста (Basta)",
    "content.song.album": "GAZ LIVE",

    "content.surprise.hiddenBtn": "💕 Нажми, чтобы увидеть сюрприз 💕",
    "content.surprise.revealBtn": "❤️ Прочитать мою любовь ❤️",
    "content.surprise.title": "Моё самое особенное послание тебе 💗",
    "content.surprise.p1": "Моё любимое,",
    "content.surprise.p2":
      "Сегодня я хочу тебе кое-что сказать. Может, я уже говорил это тысячу раз, но это чувство я ощущаю заново каждый день: я не могу представить свою жизнь без тебя. Иногда мы ругаемся, иногда злимся, иногда неправильно понимаем друг друга... Но несмотря ни на что, моё сердце всегда бьётся с тобой.",
    "content.surprise.p3":
      "Я так хочу сделать тебе тысячу комплиментов: твоя улыбка, твой голос, огонёк в твоих глазах, то, как ты меня понимаешь, то, что ты остаёшься рядом даже в трудные моменты... Но самое главное — я знаю, какой я счастливый, что ты есть и что ты именно ты.",
    "content.surprise.p4":
      "Даже если между нами бывают расстояния, в моём сердце для тебя всегда открыта дверь. Я благодарю тебя за то, что вела меня всё это время, что ценишь меня, что каждый день даёшь мне ощущать свою любовь.",
    "content.surprise.p5":
      "Я выбирал бы тебя снова и снова. В каждой жизни, в каждой вселенной, при любых обстоятельствах... Я люблю тебя. И буду любить. Вечно.",
    "content.surprise.p6": "Достаточно просто быть тобой. Ведь ты — моё всё. 💕",
    "content.surprise.signature": "Твой навсегда, 💕",
    "content.surprise.act1": "💖 Обними меня",
    "content.surprise.act2": "🌹 Подари цветы",
    "content.surprise.act3": "✨ Я тебя люблю",
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

    "data.exportAll": "💾 Export Photos",
    "data.importAll": "📂 Import Photos",
    "data.exportedFilename": "kands-photos-backup.json",
    "data.importSuccess": "✅ Photos loaded successfully!",
    "data.importError": "❌ Could not read file, please select a valid backup file.",

    "content.person1.role": "Boyfriend",
    "content.person1.nickname": "Kemal my love",
    "content.person2.role": "Girlfriend",
    "content.person2.nickname": "Sasha my love",

    "content.p1Bio.desc":
      "A big-dreaming, warm-hearted person. He loves drinking coffee, going on walks and — most of all — spending time with you. His smile lights up the world and everything feels more beautiful with him around. He loves you so much.",
    "content.p1Bio.trait1": "Patient",
    "content.p1Bio.trait2": "Romantic",
    "content.p1Bio.trait3": "Creative",
    "content.p1Bio.trait4": "Loyal",

    "content.p2Bio.desc":
      "A beautiful soul with an incredible heart. She makes everything more meaningful with the way she looks at life, and her very presence feels like healing. Even looking into her eyes is the most beautiful place on earth. She loves you more than anything.",
    "content.p2Bio.trait1": "Kind-hearted",
    "content.p2Bio.trait2": "Smart",
    "content.p2Bio.trait3": "Cheerful",
    "content.p2Bio.trait4": "Full of love",

    "content.tl.e1.date": "February 14, 2022",
    "content.tl.e1.title": "First Meeting 💫",
    "content.tl.e1.desc":
      "When the coffee date was suggested, I never imagined it would be the most beautiful day of my life. The moment I looked into your eyes, I felt time stop. Since that day I can't imagine a single day without you.",

    "content.tl.e2.date": "March 15, 2022",
    "content.tl.e2.title": "Our First Date 🌹",
    "content.tl.e2.desc":
      "The first time our hands touched, I got chills all over. Every minute spent with you was worth a lifetime. That night I couldn't sleep — I just kept smiling.",

    "content.tl.e3.date": "April 20, 2022",
    "content.tl.e3.title": "We Became Official 💞",
    "content.tl.e3.desc":
      "When you asked 'Will you be my love?' my heart almost jumped out of my chest. Yes, yes, a million times yes! Since that moment your presence reminds me every day how lucky I am.",

    "content.tl.e4.date": "July 15, 2022",
    "content.tl.e4.title": "Our First Vacation 🌊",
    "content.tl.e4.desc":
      "We sat hand in hand watching the sunset. I asked you 'Can it really be this perfect?' You smiled and said 'Even more beautiful days await us.' You were right.",

    "content.tl.e5.date": "December 31, 2022",
    "content.tl.e5.title": "Our First Anniversary ✨",
    "content.tl.e5.desc":
      "I can't believe a whole year went by so fast. Every minute next to you flies like a second. For every year I spend with you, I want a thousand more. Let's stay together forever.",

    "content.tl.e6.date": "Today 💗",
    "content.tl.e6.title": "And I Still Love You...",
    "content.tl.e6.desc":
      "Since the day we met I've loved you a little more every single day. Our mistakes, our sadness, our joy — it all only means something because we're together. Thank you for giving me the chance. I can't live without you.",

    "content.gallery.cap1": "Our first moment 💕",
    "content.gallery.cap2": "The day we smiled together 💖",
    "content.gallery.cap3": "A beautiful moment with you 🌹",
    "content.gallery.cap4": "Under the stars 🌟",
    "content.gallery.cap5": "The moment I miss you 💗",
    "content.gallery.cap6": "We held hands 🤝💕",
    "content.gallery.cap7": "With you under the sun ☀️",
    "content.gallery.cap8": "An endless moment together ✨",
    "content.gallery.cap9": "My heart beats with you 💓",
    "content.gallery.cap10": "Together forever 💕",

    "content.song.sectionTitle": "Our Song 🎵",
    "content.song.sectionSubtitle": "When I listen to it, I think of you...",
    "content.song.smallNote": "The first song we ever listened to together 💕",
    "content.song.title": "Тёмная Ночь",
    "content.song.artist": "Баста (Basta)",
    "content.song.album": "GAZ LIVE",

    "content.surprise.hiddenBtn": "💕 Click to see the surprise 💕",
    "content.surprise.revealBtn": "❤️ Read my love ❤️",
    "content.surprise.title": "My Most Special Message for You 💗",
    "content.surprise.p1": "My love,",
    "content.surprise.p2":
      "Today I want to tell you something. I've said it many times, but I feel it all over again every single day: I can't imagine my life without you. Sometimes we fight, sometimes we get angry, sometimes we misunderstand each other... But despite it all, my heart always beats with yours.",
    "content.surprise.p3":
      "There are so many things I want to praise you for: your smile, your voice, the light in your eyes, the way you understand me, the way you stay by my side even through hard times... But most of all I know how lucky I am that you exist and that it's you.",
    "content.surprise.p4":
      "Even when there are distances between us, there's always a door open in my heart just for you. Thank you for carrying me this far, for valuing me, for making me feel loved every single day.",
    "content.surprise.p5":
      "I would choose you over and over again. In every life, in every universe, in every situation... I love you. And I always will. Forever.",
    "content.surprise.p6": "You just being you is enough. Because you are my everything. 💕",
    "content.surprise.signature": "Forever yours, 💕",
    "content.surprise.act1": "💖 Hug me",
    "content.surprise.act2": "🌹 Give me flowers",
    "content.surprise.act3": "✨ I love you",
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

    "data.exportAll": "💾 Exportă Poze",
    "data.importAll": "📂 Importă Poze",
    "data.exportedFilename": "kands-poze-backup.json",
    "data.importSuccess": "✅ Pozele au fost încărcate cu succes!",
    "data.importError": "❌ Nu s-a putut citi fișierul, selectează o copie de rezervă validă.",

    "content.person1.role": "Iubit",
    "content.person1.nickname": "Kemal",
    "content.person2.role": "Iubită",
    "content.person2.nickname": "Sasha",

    "content.p1Bio.desc":
      "O persoană cu vise mari și inima caldă. Îi place să bea cafea, să meargă la plimbări și, cel mai mult, să petreacă timp cu tine. Zâmbetul lui luminează lumea, iar alături de el totul pare mai frumos. Te iubește foarte mult.",
    "content.p1Bio.trait1": "Răbdător",
    "content.p1Bio.trait2": "Romantic",
    "content.p1Bio.trait3": "Creativ",
    "content.p1Bio.trait4": "Fidel",

    "content.p2Bio.desc":
      "Un suflet frumos, o inimă incredibilă. Ea face totul mai semnificativ prin modul în care privește viața, iar prezența ei însăși este ca o vindecare. Chiar și a te uita în ochii ei este cel mai frumos loc de pe pământ. Te iubește mai mult decât orice.",
    "content.p2Bio.trait1": "Cu inima bună",
    "content.p2Bio.trait2": "Inteligentă",
    "content.p2Bio.trait3": "Veselă",
    "content.p2Bio.trait4": "Plină de iubire",

    "content.tl.e1.date": "14 februarie 2022",
    "content.tl.e1.title": "Prima Întâlnire 💫",
    "content.tl.e1.desc":
      "Când s-a sugerat întâlnirea la cafea, nu mi-am imaginat niciodată că va fi cea mai frumoasă zi din viața mea. În momentul în care am privit în ochii tăi, am simțit că timpul s-a oprit. De atunci nu pot imagina nicio zi fără tine.",

    "content.tl.e2.date": "15 martie 2022",
    "content.tl.e2.title": "Prima Noastră Plimbare 🌹",
    "content.tl.e2.desc":
      "Când mâinile noastre s-au atins pentru prima dată, am simțit fiori. Fiecare minut petrecut cu tine valorează o viață întreagă. În acea noapte nu am putut dormi — doar am zâmbit continuu.",

    "content.tl.e3.date": "20 aprilie 2022",
    "content.tl.e3.title": "Am Devenit Cuplu Oficial 💞",
    "content.tl.e3.desc":
      "Când mi-ai spus „Vrei să fim iubiți?”, inima mi-a ieșit aproape din piept. Da, da — de un milion de ori da! Din acel moment prezența ta îmi amintește în fiecare zi ce norocos sunt.",

    "content.tl.e4.date": "15 iulie 2022",
    "content.tl.e4.title": "Prima Noastră Vacanță 🌊",
    "content.tl.e4.desc":
      "Am stat așezați mână în mână, privind apusul. Te-am întrebat „Poate fi chiar așa de perfect?” — iar tu ai zâmbit și ai spus „Ne așteaptă zile și mai frumoase”. Ai avut dreptate.",

    "content.tl.e5.date": "31 decembrie 2022",
    "content.tl.e5.title": "Prima Noastră Aniversare ✨",
    "content.tl.e5.desc":
      "Nu cred că a trecut tot un an atât de repede. Alături de tine fiecare minut zboară ca o secundă. Pentru fiecare an petrecut cu tine, îmi mai vreau o mie. Hai să fim împreună pentru totdeauna.",

    "content.tl.e6.date": "Astăzi 💗",
    "content.tl.e6.title": "Și tot Te Iubesc...",
    "content.tl.e6.desc":
      "De când ne-am cunoscut, te iubesc cu puțin mai mult în fiecare zi. Greșelile noastre, tristețile noastre, bucuriile noastre — totul are sens doar pentru că suntem împreună. Mulțumesc că mi-ai dat șansa asta. Nu pot trăi fără tine.",

    "content.gallery.cap1": "Primul nostru moment 💕",
    "content.gallery.cap2": "Ziua în care am zâmbit împreună 💖",
    "content.gallery.cap3": "Un moment frumos cu tine 🌹",
    "content.gallery.cap4": "Sub stele 🌟",
    "content.gallery.cap5": "Clipă în care îmi este dor de tine 💗",
    "content.gallery.cap6": "Am ținut mâini 🤝💕",
    "content.gallery.cap7": "Cu tine sub soare ☀️",
    "content.gallery.cap8": "Un moment nesfârșit împreună ✨",
    "content.gallery.cap9": "Inima mea bate cu a ta 💓",
    "content.gallery.cap10": "Împreună pentru totdeauna 💕",

    "content.song.sectionTitle": "Cântecul Nostru 🎵",
    "content.song.sectionSubtitle": "Când îl ascult, mă gândesc la tine...",
    "content.song.smallNote": "Primul cântec pe care l-am ascultat împreună 💕",
    "content.song.title": "Тёмная Ночь",
    "content.song.artist": "Баста (Basta)",
    "content.song.album": "GAZ LIVE",

    "content.surprise.hiddenBtn": "💕 Apasă pentru a vedea surpriza 💕",
    "content.surprise.revealBtn": "❤️ Citește dragostea mea ❤️",
    "content.surprise.title": "Cel Mai Special Mesaj Pentru Tine 💗",
    "content.surprise.p1": "Iubirea mea,",
    "content.surprise.p2":
      "Azi vreau să-ți spun ceva. Poate că am spus-o de multe ori, dar simt asta din nou în fiecare zi: nu-mi pot imagina viața fără tine. Câteodată ne certăm, câteodată ne supărăm, câteodată nu ne înțelegem corect... Dar, în ciuda tuturor, inima mea bate întotdeauna cu a ta.",
    "content.surprise.p3":
      "Sunt atâtea lucruri pe care vreau să ți le povestesc: zâmbetul tău, vocea ta, lumina din ochii tăi, modul în care mă înțelegi, modul în care rămâi alături de mine chiar și în momente grele... Dar cel mai important — știu ce norocos sunt că ești tu și că ești chiar tu.",
    "content.surprise.p4":
      "Chiar dacă între noi există uneori distanțe, în inima mea există mereu o ușă deschisă numai pentru tine. Mulțumesc că m-ai purtat până azi, că mă prețuiești, că mă faci să simt dragostea în fiecare zi.",
    "content.surprise.p5":
      "Te-aș alege din nou și din nou. În fiecare viață, în fiecare univers, în orice situație... Te iubesc. Și te voi iubi mereu. Pentru totdeauna.",
    "content.surprise.p6": "Să fii tu însuți este de ajuns. Pentru că tu ești totul pentru mine. 💕",
    "content.surprise.signature": "Al tău pentru totdeauna, 💕",
    "content.surprise.act1": "💖 Îmbrățișează-mă",
    "content.surprise.act2": "🌹 Dă-mi flori",
    "content.surprise.act3": "✨ Te iubesc",
  },
};
