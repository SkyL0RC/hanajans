# Hanajans - Kurumsal Baskı ve Reklam Çözümleri

"Bir Tek Düşüncelere Baskı Yapmıyoruz" sloganıyla hizmet veren Hanajans'ın modern ve şık web sitesi.

## 📋 Proje Hakkında

Bu proje, tabela, dijital baskı ve promosyon ürünleri alanında hizmet veren Hanajans firması için geliştirilmiş modern bir web uygulamasıdır. React, TypeScript ve modern web teknolojileri kullanılarak oluşturulmuştur.

### ✨ Özellikler

- 🎨 **Modern Tasarım**: Minimalist ve şık arayüz
- 🌊 **Animasyonlar**: Framer Motion ile akıcı geçişler
- 🎭 **3D Efektler**: Three.js ile interaktif noktalı yüzey efekti
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- 🎯 **Hizmet Vitrin**: Detaylı hizmet kartları
- 💼 **Portfolio**: Gerçekleştirilen projeler galerisi
- ⭐ **Müşteri Yorumları**: Müşteri memnuniyeti bölümü
- 📞 **İletişim Formu**: Kolay erişim ve iletişim

### 🛠️ Teknolojiler

- **React 19.2.0** - Modern UI framework
- **TypeScript** - Tip güvenli geliştirme
- **Vite** - Hızlı geliştirme ve build
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion** - Profesyonel animasyonlar
- **Three.js** - 3D grafikler
- **Lucide React** - Modern ikonlar
- **ESLint** - Kod kalitesi

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi Klonlayın**
\`\`\`bash
git clone <repository-url>
cd hanajans2
\`\`\`

2. **Bağımlılıkları Yükleyin**
\`\`\`bash
npm install
\`\`\`

3. **Geliştirme Sunucusunu Başlatın**
\`\`\`bash
npm run dev
\`\`\`

Uygulama varsayılan olarak [http://localhost:5173](http://localhost:5173) adresinde çalışacaktır.

## 📝 Komutlar

\`\`\`bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build önizlemesi
npm run preview

# Lint kontrolü
npm run lint
\`\`\`

## 📂 Proje Yapısı

\`\`\`
hanajans2/
├── public/              # Statik dosyalar
│   └── pics/           # Görsel dosyaları
│       ├── hizmetler/  # Hizmet görselleri
│       └── logo/       # Logo dosyaları
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer bileşenleri
│   │   ├── sections/   # Ana sayfa bölümleri
│   │   └── ui/         # UI bileşenleri
│   ├── lib/            # Yardımcı fonksiyonlar
│   ├── App.tsx         # Ana uygulama bileşeni
│   ├── main.tsx        # Giriş noktası
│   └── index.css       # Global stiller
├── index.html          # HTML şablonu
├── vite.config.ts      # Vite yapılandırması
├── tailwind.config.js  # Tailwind yapılandırması
└── tsconfig.json       # TypeScript yapılandırması
\`\`\`

## 🎨 Bileşenler

### Layout Bileşenleri
- **Header**: Navigasyon menüsü
- **Footer**: Alt bilgi ve bağlantılar

### Section Bileşenleri
- **Services**: Sunulan hizmetler kartları
- **Portfolio**: Proje galerisi
- **Reviews**: Müşteri yorumları
- **Contact**: İletişim formu ve bilgileri

### UI Bileşenleri
- **DottedSurface**: Animasyonlu 3D nokta yüzeyi

## 🎯 Hizmetler

Web sitesinde tanıtılan hizmetler:
- 📄 Davetiye Baskı
- 📢 Reklam Çözümleri
- 👕 Tişört Baskı
- ☕ Kupa Baskı
- 💳 Kartvizit Baskı
- 📋 Broşür Baskı
- 🧥 Polar Baskı
- 🧢 Şapka Baskı

## 🔧 Yapılandırma

### Tailwind CSS
Proje Tailwind CSS 4.x kullanmaktadır. Özelleştirmeler için \`tailwind.config.js\` dosyasını düzenleyin.

### TypeScript
TypeScript yapılandırması için:
- \`tsconfig.json\` - Temel yapılandırma
- \`tsconfig.app.json\` - Uygulama yapılandırması
- \`tsconfig.node.json\` - Node.js yapılandırması

## 🌐 Production Build

Production build oluşturmak için:

\`\`\`bash
npm run build
\`\`\`

Build dosyaları \`dist/\` klasörüne oluşturulacaktır.

## 📄 Lisans

Bu proje Hanajans firması için özel olarak geliştirilmiştir.

## 📞 İletişim

Sorularınız için proje sahibi ile iletişime geçebilirsiniz.
