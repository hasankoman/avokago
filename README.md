# avokaGo - Kişiselleştirilmiş Seyahat Asistanı

**AI destekli kişilik analizi ile size özel seyahat deneyimleri yaşayın. Sadece nereye değil, nasıl hissedeceğinizi de planlar.**

![Tech Stack](https://img.shields.io/badge/Next.js-15.4.4-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06B6D4)
![NextAuth](https://img.shields.io/badge/NextAuth-4.24.11-purple)

## 📋 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Özellikler](#-özellikler)
- [Teknoloji Stack](#-teknoloji-stack)
- [Proje Yapısı](#-proje-yapısı)
- [Kurulum](#-kurulum)
- [Geliştirme](#-geliştirme)
- [Kişilik Profilleri](#-kişilik-profilleri)
- [API Entegrasyonu](#-api-entegrasyonu)
- [Deployment](#-deployment)
- [Katkıda Bulunma](#-katkıda-bulunma)

## 🎯 Proje Hakkında

avokaGo, kullanıcıların kişilik özelliklerine göre özelleştirilmiş seyahat deneyimleri sunan AI destekli bir platform. Geleneksel seyahat önerilerinin ötesinde, kullanıcıların ruh haline ve duygusal ihtiyaçlarına göre destinasyon önerileri sunuyor.

### Temel Vizyonumuz

- **Duygusal Eşleştirme**: Sadece "nereye gitmek" değil, "nasıl hissetmek" istediğinizi anlayan sistem
- **AI Destekli Analiz**: Kişilik testi ile benzersiz seyahat profili oluşturma
- **Deneyim Odaklı**: Turistik yerler yerine, kişisel dönüşüm odaklı rotalar
- **Sosyal Eşleştirme**: Aynı profildeki gezginlerle bağlantı kurma imkanı

## ✨ Özellikler

### 🧠 Duygusal Seyahat Profili

- AI destekli kişilik analizi (5 soruluk test)
- 4 farklı seyahat kişiliği tipi
- %92 kullanıcı memnuniyet oranı ile profil doğruluğu
- Ruh haline göre destinasyon önerileri

### 🤖 AI Seyahat Asistanı

- Gerçek zamanlı sohbet deneyimi
- n8n workflow entegrasyonu
- Kişiselleştirilmiş öneri motoru
- Sürekli öğrenen algoritma

### 🗺️ Deneyim Bazlı Rotalar

- 500+ özgün seyahat rotası
- Gizli nokta önerileri
- Aktivite bazlı planlama
- Grup veya bireysel seyahat seçenekleri

### 👥 Sosyal Özellikler

- Aynı profildeki kullanıcılarla eşleştirme
- Topluluk aktiviteleri
- Seyahat deneyimi paylaşımı
- Seyahat arkadaşı bulma

### 📱 Modern Kullanıcı Deneyimi

- Responsive tasarım
- Motion animasyonları
- Progressive Web App desteği
- Türkçe arayüz

## 🛠 Teknoloji Stack

### Frontend

- **Next.js 15.4.4** - React framework
- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons

### Backend & Authentication

- **NextAuth.js** - Authentication
- **Google OAuth** - Login provider
- **Next.js API Routes** - Backend endpoints

### AI & Automation

- **n8n** - Workflow automation
- **Google Gemini** - AI model
- **Webhook integrations** - Real-time AI responses

### Tools & DevOps

- **TypeScript** - Type checking
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Proje Yapısı

```
avokago/
├── avokago-app/                 # Ana uygulama
│   ├── app/
│   │   ├── api/auth/           # NextAuth konfigürasyonu
│   │   ├── auth/signin/        # Giriş sayfası
│   │   ├── dashboard/          # Dashboard ve alt sayfalar
│   │   │   ├── ai-chat/        # AI asistan
│   │   │   ├── explore/        # Destinasyon keşfi
│   │   │   ├── favorites/      # Favori destinasyonlar
│   │   │   ├── community/      # Topluluk
│   │   │   ├── plans/          # Seyahat planları
│   │   │   ├── profile/        # Kullanıcı profili
│   │   │   └── settings/       # Ayarlar
│   │   ├── onboarding/         # Kişilik testi
│   │   ├── layout.tsx          # Ana layout
│   │   └── page.tsx            # Ana sayfa
│   ├── components/             # Yeniden kullanılabilir bileşenler
│   │   ├── AuthGuard.tsx       # Kimlik doğrulama koruyucusu
│   │   └── DashboardHeader.tsx # Dashboard başlığı
│   ├── lib/
│   │   └── auth.ts             # Auth konfigürasyonu
│   └── public/                 # Statik dosyalar
│       └── nodes.json          # n8n workflow konfigürasyonu
├── avokago-landing/            # Landing page
│   ├── app/
│   │   ├── page.tsx            # Ana landing sayfası
│   │   └── layout.tsx          # Landing layout
│   └── public/
│       └── images/
│           └── logo.png        # Logo dosyası
└── package.json                # Workspace konfigürasyonu
```

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+
- npm veya yarn
- Google OAuth credentials (opsiyonel)
- n8n instance (AI özellikler için)

### 1. Repo'yu klonlayın

```bash
git clone https://github.com/hasankoman/avokago.git
cd avokago
```

### 2. Dependencies kurulumu

#### Ana workspace için:

```bash
npm install
```

#### Her iki app için ayrı ayrı:

```bash
cd avokago-app && npm install
cd ../avokago-landing && npm install
```

### 3. Environment Variables

`avokago-app/.env.local` dosyası oluşturun:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Google OAuth (opsiyonel)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# n8n Webhook URL (AI Chat için)
N8N_WEBHOOK_URL=http://localhost:5678/webhook/your-webhook-id
```

### 4. Development sunucularını başlatın

#### Ana app:

```bash
npm run dev-app
```

#### Landing page:

```bash
npm run dev-landing
```

Alternatif olarak, her iki uygulamayı ayrı terminallerde çalıştırabilirsiniz:

```bash
# Terminal 1 - Ana uygulama (port 3000)
cd avokago-app
npm run dev

# Terminal 2 - Landing page (port 3001)
cd avokago-landing
npm run dev
```

## 🛠 Geliştirme

### Available Scripts

```bash
# Development
npm run dev-app          # Ana uygulamayı başlat
npm run dev-landing      # Landing page'i başlat

# Build
npm run build-app        # Ana uygulamayı build et
npm run build-landing    # Landing page'i build et

# Production
npm run start-app        # Ana uygulamayı production'da çalıştır
npm run start-landing    # Landing page'i production'da çalıştır

# Linting
npm run lint-app         # Ana uygulama için lint
npm run lint-landing     # Landing page için lint
```

### Geliştirme Notları

1. **TypeScript**: Tüm proje TypeScript kullanıyor, type safety için dikkatli olun
2. **Tailwind CSS**: Utility-first CSS framework kullanılıyor
3. **Motion**: Animasyonlar için framer-motion kullanılıyor
4. **Component Structure**: Yeniden kullanılabilir bileşenler `/components` klasöründe

## 👤 Kişilik Profilleri

### 🌿 Ruh Arayan Keşifçi

- **Odak**: Huzur ve doğa
- **Özellikler**: İçsel keşif, meditasyon, doğayla bütünleşme
- **Önerilen Destinasyonlar**: Kapadokya, Ayder Yaylası, Olimpos
- **Aktiviteler**: Yoga, meditation, doğa yürüyüşleri

### 🏔️ Dingin Maceraperest

- **Odak**: Adrenalin ve fiziksel aktivite
- **Özellikler**: Extreme sporlar, sınır zorlama, aktif deneyimler
- **Önerilen Destinasyonlar**: Antalya Adventure, Fethiye Outdoor
- **Aktiviteler**: Tırmanış, paraşüt, su sporları

### 🎉 Sosyalleşen Kaçak

- **Odak**: Kültür ve sosyal deneyimler
- **Özellikler**: Yerel yaşam, festival, eğlence
- **Önerilen Destinasyonlar**: İstanbul, İzmir, Bodrum
- **Aktiviteler**: Kültür turları, gastronomi, gece hayatı

### 💕 Romantik Rüyacı

- **Odak**: İntim deneyimler ve çift aktiviteleri
- **Özellikler**: Romantik atmosfer, özel anlar
- **Önerilen Destinasyonlar**: Kaş, Alaçatı, Assos
- **Aktiviteler**: Romantik yemekler, sunset, spa

## 🔌 API Entegrasyonu

### AI Chat Integration

AI sohbet özelliği için n8n workflow kullanılıyor:

```typescript
// AI Response endpoint
const WEBHOOK_URL = "http://localhost:5678/webhook/your-webhook-id";

// Request payload
const payload = {
  message: userMessage,
  userType: userProfile,
  profileType: profileTypeData,
  conversationHistory: pastMessages,
};
```

### Webhook Configuration

`public/nodes.json` dosyası n8n workflow konfigürasyonunu içeriyor:

- Intent extraction
- Google Gemini AI integration
- Response formatting
- Error handling

## 🚀 Deployment

### Vercel (Önerilen)

#### Ana uygulama için:

```bash
cd avokago-app
vercel --prod
```

#### Landing page için:

```bash
cd avokago-landing
vercel --prod
```

### Environment Variables (Production)

Production deployment için gerekli environment variables:

- `NEXTAUTH_URL`: Production URL
- `NEXTAUTH_SECRET`: Güçlü secret key
- `GOOGLE_CLIENT_ID`: Google OAuth credentials
- `GOOGLE_CLIENT_SECRET`: Google OAuth secret
- `N8N_WEBHOOK_URL`: Production n8n webhook URL

### Build Optimization

Production build için:

```bash
npm run build-app
npm run build-landing
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### Development Guidelines

- TypeScript kullanın
- Commit message'larda Türkçe kullanın
- Component'ler için proper typing ekleyin
- Tailwind CSS utility classes kullanın
- Motion animasyonları için smooth transitions tercih edin

## 📞 İletişim & Destek

- **Email**: info@avokago.app
- **Website**: [avokago.app](https://avokago.app)
- **Issues**: [GitHub Issues](https://github.com/hasankoman/avokago/issues)

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

---

**avokaGo** ile seyahat planlamanızı kişiselleştirin ve ruh halinize uygun deneyimler yaşayın! 🌟
