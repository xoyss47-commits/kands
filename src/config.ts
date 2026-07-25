// ============================================================
// 💕 AŞK SİTESİ KONFİGÜRASYON DOSYASI 💕
// Buradan tüm metinleri, tarihleri ve ayarları kolayca değiştirebilirsin!
// ============================================================

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: "heart" | "star" | "coffee" | "ring" | "sparkles" | "plane" | "home" | "gift";
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface OurSong {
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  sectionTitle: string;
  sectionSubtitle: string;
  smallNote: string;
  youtubeVideoId?: string;
  audioUrl?: string;
}

export const siteConfig = {
  // ------------------------------------------------------------
  // 👫 İSİMLER - İkimizin isimleri
  // ------------------------------------------------------------
  person1: {
    name: "Kemal",
    nickname: "Kemalcim",
    role: "Erkek Sevgili",
  },
  person2: {
    name: "Sasha",
    nickname: "Sashicim",
    role: "Kız Sevgili",
  },

  // ------------------------------------------------------------
  // 💕 İLİŞKİ BAŞLANGIÇ TARİHİ - Sayaç için
  // Format: YYYY-AA-GG Saat:Dakika (örnek: "2022-02-14 19:30")
  // ------------------------------------------------------------
  relationshipStartDate: "2022-02-14 19:30",

  // ------------------------------------------------------------
  // 📝 BİYOGRAFİLER - Hakkımızda bölümü
  // ------------------------------------------------------------
  person1Bio: {
    description:
      "Hayalleri büyük, kalbi sıcak bir insan. Kahve içmeyi, yürüyüş yapmayı ve en çok da seninle vakit geçirmeyi sever. Gülüşü dünyayı aydınlatan, yanında her şeyin daha güzel olduğu biri. Seni çok seviyor.",
    traits: ["Sabırlı", "Romantik", "Yaratıcı", "Sadık"],
    defaultPhoto:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20romantic%20person%20with%20soft%20pastel%20lighting%20dreamy%20aesthetic%20gentle%20smile&image_size=square_hd",
  },
  person2Bio: {
    description:
      "Güzel bir ruh, inanılmaz bir kalp. Hayata baktığı açıyla her şeyi daha anlamlı kılan, varlığı bile şifa olan biri. Gözlerine bakmak bile dünyanın en güzel yeri. Seni her şeyden çok seviyor.",
    traits: ["Güzel Kalpli", "Zeki", "Neşeli", "Sevgi Dolu"],
    defaultPhoto:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20gentle%20loving%20person%20soft%20pink%20dreamy%20aesthetic%20warm%20smile%20pastel%20tones&image_size=square_hd",
  },

  // ------------------------------------------------------------
  // 📖 ZAMAN TÜNELİ - Tanışma ve ilişki hikayemiz
  // İstediğin kadar olay ekleyebilirsin!
  // ------------------------------------------------------------
  timeline: [
    {
      date: "14 Şubat 2022",
      title: "İlk Tanışma 💫",
      description:
        "Kafe önerildiğinde hiç tahmin etmezdim ki hayatımın en güzel günü olacaktı. Gözlerinin içine baktığım anda, zamanın durduğunu hissettim. O günden beri sen olmadan bir gün bile düşünemiyorum.",
      icon: "coffee",
    },
    {
      date: "15 Mart 2022",
      title: "İlk Buluşmamız 🌹",
      description:
        "Ellerimiz ilk kez değdiğinde bütün tüylerim diken diken oldu. Seninle geçen her dakika, bir ömre bedeldi. O gün gece uyuyamadım, sadece gülümsedim durdum.",
      icon: "sparkles",
    },
    {
      date: "20 Nisan 2022",
      title: "Resmi Sevgili olduk 💞",
      description:
        "'Sevgili olur muyuz?' dediğinde kalbim göğsümden çıkacak gibiydi. Evet, bir milyon kez evet! O andan beri şanslı olduğumu her gün hatırlatıyor bana varlığın.",
      icon: "heart",
    },
    {
      date: "15 Temmuz 2022",
      title: "İlk Tatilimiz 🌊",
      description:
        "Güneşin battığı yerde oturmuş el ele tutuştuk. 'Bu kadar mükemmel olabilir mi?' diye sormuştum. Gülüp 'Bundan daha güzel günlerimiz olacak' demişsin. Haklı çıktın.",
      icon: "plane",
    },
    {
      date: "31 Aralık 2022",
      title: "İlk Yıl Dönümümüz ✨",
      description:
        "Bir yıl nasıl geçti anlamadım. Yanında her dakika bir saniye gibi gidiyor. Seninle geçen her yıla, bin tane daha istiyorum. Sonsuza kadar kadar birlikte olalım.",
      icon: "gift",
    },
    {
      date: "Bugün 💗",
      title: "Ve Hala Seviyorum...",
      description:
        "Tanıştığımızdan beri her gün biraz daha seni seviyorum. Yanlışlarımız, üzüntülerimiz, güzelliklerimiz... Hepsi birlikte olduğumuz için anlamlı. Bana şans verdiğin için teşekkür ederim. Sen olmadan yaşayamam.",
      icon: "ring",
    },
  ] as TimelineEvent[],

  // ------------------------------------------------------------
  // 📸 GALERİ - Birlikte olduğumuz anlar
  // İstediğin kadar fotoğraf ekleyebilirsin!
  // ------------------------------------------------------------
  gallery: [
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20couple%20holding%20hands%20sunset%20beach%20pastel%20colors%20dreamy%20soft%20focus%20love%20aesthetic&image_size=square_hd",
      caption: "Gün batımında el ele 💫",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20couple%20at%20cafe%20drinking%20coffee%20together%20warm%20cozy%20atmosphere%20pastel%20pink%20aesthetic&image_size=square_hd",
      caption: "Kafe sohbetlerimiz ☕",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20couple%20walking%20in%20park%20autumn%20leaves%20holding%20hands%20soft%20warm%20colors%20love%20story&image_size=square_hd",
      caption: "Sonbahar yürüyüşleri 🍂",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=couple%20dancing%20under%20stars%20night%20romantic%20magical%20dreamy%20atmosphere%20pastel%20purple%20blue%20lights&image_size=square_hd",
      caption: "Yıldızların altında 🌟",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=happy%20couple%20on%20picnic%20flowers%20sunny%20day%20green%20grass%20romantic%20soft%20aesthetic%20pastel%20tones&image_size=square_hd",
      caption: "Piknik keyfimiz 🧺",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20couple%20hugging%20rainy%20day%20umbrella%20city%20streets%20soft%20moody%20dreamy%20love%20aesthetic&image_size=square_hd",
      caption: "Yağmurda ıslanmak 🌧️",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20couple%20cooking%20together%20kitchen%20warm%20cozy%20home%20loving%20moment%20pastel%20aesthetic&image_size=square_hd",
      caption: "Birlikte yemek yapmak 🍳",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=couple%20watching%20movie%20together%20couch%20blanket%20cozy%20home%20night%20soft%20lights%20romantic&image_size=square_hd",
      caption: "Film maratonları 🎬",
    },
    {
      src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20couple%20forehead%20kiss%20soft%20golden%20hour%20lighting%20gentle%20love%20emotion%20dreamy%20aesthetic&image_size=square_hd",
      caption: "Sessiz anlarımız 💝",
    },
  ] as GalleryImage[],

  // ------------------------------------------------------------
  // 🎵 BİZİM ŞARKIMIZ - Ortak sevdiğimiz şarkı
  // audioUrl: Kendi şarkı dosyanızın URL'sini yapıştırın
  //   (Örn: Google Drive MP3 linki, kendi yüklediğiniz dosya, vs.)
  // ------------------------------------------------------------
  ourSong: {
    sectionTitle: "Bizim Şarkımız 🎵",
    sectionSubtitle: "Seni dinlediğimde, seni düşündüğümde...",
    smallNote: "Birlikte ilk kez dinlediğimiz şarkı 💕",
    title: "Тёмная Ночь",
    artist: "Баста (Basta)",
    album: "GAZ LIVE",
    coverUrl: "https://img.youtube.com/vi/VQ1Ap10ZuRM/hqdefault.jpg",
    youtubeVideoId: "VQ1Ap10ZuRM",
  } as OurSong,

  // ------------------------------------------------------------
  // 💌 SÜRPRİZ AŞK MESAJI - Sayfanın sonundaki özel bölüm
  // ------------------------------------------------------------
  surpriseLoveLetter: {
    hiddenButtonText: "💕 Sürprizi görmek için tıkla 💕",
    revealButtonText: "❤️ Aşkımı oku ❤️",
    title: "Sana En Özel Şarkım 💗",
    paragraphs: [
      "Sevgilim,",
      "Bugün sana bir şey demek istiyorum. Belki çok kez söyledim ama her gün yeniden hissettiğim bir şey var: Sen olmadan hayatımı düşünemiyorum. Bazen kavga ederiz, bazen kızarız, bazen yanlış anlarız... Ama bütün bunlara rağmen, kalbim hep seninle atıyor.",
      "İltifat etmek istediğim çok şey var: Gülüşün, sesin, gözlerinin içindeki ışık, beni anlaman, zor zamanlarda bile yanımda durman... Ama en önemlisi, sen olduğun için varlık gösterdiğin için çok şanslı olduğumu biliyorum.",
      "Aramızda boşluklar olsa bile, kalbimde senin için her zaman açılan bir kapı var. Beni bugüne kadar taşıdığın, bana değer verdiğin, sevgini her gün hissetttiğin için sana minnettarım.",
      "Seni tekrar tekrar seçmek isterdim. Her hayatta, her evrende, her durumda... Seni seviyorum. Ve seveceğim. Sonsuza dek.",
      "Sadece senin olman yeter. Çünkü sen benim her şeyimsin. 💕",
    ],
    signature: "Sonsuza dek senin, 💕",
    finalActions: [
      { label: "💖 Bana sarıl", action: "hug" },
      { label: "🌹 Çiçek al", action: "flower" },
      { label: "✨ Seni seviyorum", action: "love" },
    ],
  },

  // ------------------------------------------------------------
  // 🎨 SİTE GENEL AYARLARI
  // ------------------------------------------------------------
  meta: {
    siteTitle: "Bizim Hikayemiz 💕",
    heroQuote: "İki kalbin birleştiği yerde, zaman durur.",
    footerText: "Sevgiyle hazırlandı ✨",
  },
};
