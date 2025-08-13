"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ChevronLeft, ChevronRight, Brain, Heart, Map, Users, Compass, Camera, Coffee, Mountain,
    Tent, Plane, Car, Train, Ship, Sunset, Star, Zap, Shield, Book, Palette, Music,
    TreePine, Building2, Castle, Globe, Backpack, Target, Clock, Settings, Home, Wifi
} from "lucide-react";
import { useSession } from "next-auth/react";
import { updateUserTravelType } from "@/app/actions/travel-type";

interface TravelTypeTestProps {
    onComplete: (type: string) => void;
}

interface Question {
    id: number;
    question: string;
    category: 'lifestyle' | 'social' | 'adventure' | 'planning' | 'motivation' | 'preference' | 'personality';
    weight: number;
    options: {
        text: string;
        icon: React.ComponentType<any>;
        traits: { [key: string]: number };
    }[];
}

interface TravelTraits {
    adventure: number;      // Macera seviyesi (0-100)
    social: number;         // Sosyallik seviyesi (0-100)
    planning: number;       // Planlama eğilimi (0-100)
    nature: number;         // Doğa sevgisi (0-100)
    culture: number;        // Kültür ilgisi (0-100)
    luxury: number;         // Konfor/lüks tercihi (0-100)
    spontaneity: number;    // Spontanlık (0-100)
    spiritual: number;      // Ruhani arayış (0-100)
    learning: number;       // Öğrenme odaklılık (0-100)
    relaxation: number;     // Dinlenme odaklılık (0-100)
}

const questions: Question[] = [
    {
        id: 1,
        question: "Sabahları yeni bir yerde uyandığında, ilk olarak ne yapmak seni en mutlu eder?",
        category: 'lifestyle',
        weight: 8,
        options: [
            {
                text: "Sessizce gün doğumunu izlemek",
                icon: Sunset,
                traits: { nature: 85, spiritual: 70, relaxation: 90, planning: 20, social: 15 }
            },
            {
                text: "Şehirde kahvemi alıp sokaklara karışmak",
                icon: Coffee,
                traits: { culture: 80, social: 60, spontaneity: 75, luxury: 50, learning: 65 }
            },
            {
                text: "Meditasyonla güne başlamak",
                icon: Brain,
                traits: { spiritual: 95, relaxation: 85, planning: 70, nature: 40, social: 10 }
            },
            {
                text: "Hemen çıkıp çevreyi keşfe başlamak",
                icon: Map,
                traits: { adventure: 90, spontaneity: 85, learning: 80, social: 40, planning: 30 }
            },
            {
                text: "Otel konforunda kahvaltı yapmak",
                icon: Coffee,
                traits: { luxury: 85, relaxation: 70, planning: 60, social: 35, adventure: 20 }
            },
        ]
    },
    {
        id: 2,
        question: "İdeal seyahat konaklaman nasıl olmalı?",
        category: 'preference',
        weight: 7,
        options: [
            {
                text: "5 yıldızlı otellerde lüks konfor",
                icon: Star,
                traits: { luxury: 95, relaxation: 80, planning: 70, social: 50, adventure: 20 }
            },
            {
                text: "Doğanın içinde çadır",
                icon: Tent,
                traits: { nature: 90, adventure: 85, spontaneity: 70, luxury: 10, spiritual: 60 }
            },
            {
                text: "Yerel aile yanında misafirlik",
                icon: Home,
                traits: { culture: 90, social: 85, learning: 80, luxury: 30, spiritual: 50 }
            },
            {
                text: "Şehir merkezinde butik otel",
                icon: Building2,
                traits: { culture: 75, luxury: 70, social: 60, planning: 65, learning: 55 }
            },
            {
                text: "Backpacker hostel",
                icon: Backpack,
                traits: { social: 80, adventure: 70, spontaneity: 85, luxury: 20, learning: 75 }
            },
        ]
    },
    {
        id: 3,
        question: "Seyahat etmenin sana kattığı en önemli şey nedir?",
        category: 'motivation',
        weight: 10,
        options: [
            {
                text: "Kendimi keşfetmek ve büyümek",
                icon: Brain,
                traits: { spiritual: 90, learning: 85, relaxation: 60, social: 40, adventure: 50 }
            },
            {
                text: "Yeni kültürler ve insanlar tanımak",
                icon: Globe,
                traits: { culture: 95, social: 85, learning: 90, adventure: 50, luxury: 30 }
            },
            {
                text: "Adrenalin ve macera yaşamak",
                icon: Zap,
                traits: { adventure: 95, spontaneity: 85, social: 60, nature: 70, planning: 20 }
            },
            {
                text: "Stres atmak ve dinlenmek",
                icon: Heart,
                traits: { relaxation: 95, luxury: 70, spiritual: 60, planning: 50, social: 30 }
            },
            {
                text: "Hayata farklı perspektifler kazanmak",
                icon: Target,
                traits: { learning: 90, culture: 80, spiritual: 70, social: 60, adventure: 50 }
            },
        ]
    },
    {
        id: 4,
        question: "Kaybolduğunda ne yaparsın?",
        category: 'personality',
        weight: 8,
        options: [
            {
                text: "Haritaya bakar, rotamı bulurum",
                icon: Map,
                traits: { planning: 90, learning: 70, adventure: 30, spontaneity: 20, social: 40 }
            },
            {
                text: "Bırakırım akışa, nereye çıkarsa orası",
                icon: Compass,
                traits: { spontaneity: 95, adventure: 80, relaxation: 60, planning: 10, social: 50 }
            },
            {
                text: "Hemen birinden yardım isterim",
                icon: Users,
                traits: { social: 90, culture: 60, learning: 50, planning: 40, adventure: 30 }
            },
            {
                text: "Bu bir macera! Tadını çıkarırım",
                icon: Mountain,
                traits: { adventure: 95, spontaneity: 90, social: 40, relaxation: 30, planning: 15 }
            },
            {
                text: "Teknoloji yardımıyla çözüm ararım",
                icon: Wifi,
                traits: { planning: 75, luxury: 60, learning: 70, social: 40, adventure: 35 }
            },
        ]
    },
    {
        id: 5,
        question: "Seyahat planını nasıl yaparsın?",
        category: 'planning',
        weight: 9,
        options: [
            {
                text: "Her detayı önceden planlarım",
                icon: Clock,
                traits: { planning: 95, luxury: 60, learning: 70, relaxation: 50, spontaneity: 10 }
            },
            {
                text: "Sadece uçak ve otel, geri kalan spontane",
                icon: Plane,
                traits: { planning: 50, spontaneity: 80, adventure: 70, social: 60, luxury: 40 }
            },
            {
                text: "Hiç plan yapmam, akışına bırakırım",
                icon: Compass,
                traits: { spontaneity: 95, adventure: 85, relaxation: 60, planning: 5, social: 50 }
            },
            {
                text: "Araştırırım ama esnek kalırım",
                icon: Book,
                traits: { learning: 85, planning: 65, spontaneity: 60, culture: 75, adventure: 50 }
            },
            {
                text: "Tur şirketi aracılığıyla organize ettiririm",
                icon: Shield,
                traits: { luxury: 80, planning: 70, relaxation: 75, social: 60, adventure: 25 }
            },
        ]
    },
    {
        id: 6,
        question: "Kalabalık içinde olmayı mı, yalnız kalmayı mı tercih edersin?",
        category: 'social',
        weight: 8,
        options: [
            {
                text: "Kalabalıklar bana enerji verir",
                icon: Users,
                traits: { social: 95, culture: 70, adventure: 60, learning: 65, luxury: 40 }
            },
            {
                text: "Tek başıma daha özgürüm",
                icon: Compass,
                traits: { spontaneity: 85, spiritual: 70, relaxation: 80, social: 15, nature: 60 }
            },
            {
                text: "Az ama öz insanlarla",
                icon: Heart,
                traits: { social: 60, culture: 75, learning: 80, luxury: 50, spiritual: 60 }
            },
            {
                text: "Duruma göre değişir",
                icon: Settings,
                traits: { planning: 60, social: 55, spontaneity: 70, culture: 60, adventure: 50 }
            },
            {
                text: "Yalnızlıkta kendimi buluyorum",
                icon: Brain,
                traits: { spiritual: 90, relaxation: 85, nature: 70, social: 10, learning: 75 }
            },
        ]
    },


    {
        id: 7,
        question: "Tatil sırasında anı mı biriktirmek istersin, hikâye mi yaratmak?",
        category: 'personality',
        weight: 7,
        options: [
            {
                text: "Fotoğraflar ve güzel kareler",
                icon: Camera,
                traits: { culture: 70, social: 60, learning: 55, luxury: 50, planning: 55 }
            },
            {
                text: "Notlar, yazılar, duygular",
                icon: Book,
                traits: { spiritual: 85, learning: 90, relaxation: 70, social: 30, culture: 75 }
            },
            {
                text: "Vlog, sosyal medya paylaşımı",
                icon: Camera,
                traits: { social: 90, culture: 60, learning: 50, luxury: 55, adventure: 60 }
            },
            {
                text: "Sohbetler, deneyimler",
                icon: Users,
                traits: { social: 85, culture: 80, learning: 75, adventure: 60, spiritual: 50 }
            },
            {
                text: "O anı hissetmek yeterli",
                icon: Heart,
                traits: { spiritual: 90, relaxation: 85, nature: 70, spontaneity: 80, social: 25 }
            },
        ]
    },
    {
        id: 8,
        question: "Hangi atmosferi tercih edersin?",
        category: 'preference',
        weight: 8,
        options: [
            {
                text: "Büyük şehirlerin enerjisi",
                icon: Building2,
                traits: { culture: 85, social: 80, luxury: 65, learning: 70, adventure: 55 }
            },
            {
                text: "Doğanın sessizliği",
                icon: TreePine,
                traits: { nature: 95, spiritual: 80, relaxation: 90, social: 15, adventure: 60 }
            },
            {
                text: "Tarihi yerlerin mistik havası",
                icon: Castle,
                traits: { culture: 90, spiritual: 75, learning: 85, relaxation: 60, luxury: 50 }
            },
            {
                text: "Deniz kıyısının huzuru",
                icon: Sunset,
                traits: { relaxation: 90, nature: 85, luxury: 60, spiritual: 70, social: 40 }
            },
            {
                text: "Sanat ve müzik dolu ortamlar",
                icon: Palette,
                traits: { culture: 95, learning: 80, social: 70, luxury: 55, spiritual: 60 }
            },
        ]
    },
    {
        id: 9,
        question: "Seyahat arkadaşın nasıl olmalı?",
        category: 'social',
        weight: 6,
        options: [
            {
                text: "Benzer ilgi alanları olan yakın arkadaş",
                icon: Heart,
                traits: { social: 75, culture: 65, relaxation: 70, planning: 60, luxury: 50 }
            },
            {
                text: "Macerayı seven cesur tip",
                icon: Zap,
                traits: { adventure: 90, social: 70, spontaneity: 85, nature: 65, planning: 30 }
            },
            {
                text: "Tek başıma seyahat ederim",
                icon: Compass,
                traits: { spontaneity: 80, spiritual: 75, relaxation: 70, social: 10, adventure: 60 }
            },
            {
                text: "Organize grup turları",
                icon: Users,
                traits: { social: 85, planning: 75, luxury: 60, culture: 70, adventure: 40 }
            },
            {
                text: "Yeni tanıştığım insanlar",
                icon: Globe,
                traits: { social: 90, adventure: 70, culture: 80, spontaneity: 75, learning: 75 }
            },
        ]
    },
    {
        id: 10,
        question: "Şu cümleyi tamamla: 'Benim için ideal seyahat...'",
        category: 'motivation',
        weight: 9,
        options: [
            {
                text: "Doğayla iç içe olmalı",
                icon: TreePine,
                traits: { nature: 95, spiritual: 70, relaxation: 80, adventure: 65, social: 20 }
            },
            {
                text: "Sürekli yeni yerler görmeliyim",
                icon: Map,
                traits: { adventure: 85, learning: 80, culture: 75, spontaneity: 70, social: 50 }
            },
            {
                text: "Tam dinlenmeliyim",
                icon: Heart,
                traits: { relaxation: 95, luxury: 80, spiritual: 60, planning: 60, social: 35 }
            },
            {
                text: "Bolca sosyalleşmeli",
                icon: Users,
                traits: { social: 95, culture: 70, learning: 65, adventure: 50, luxury: 45 }
            },
            {
                text: "İç dünyama dönmeliyim",
                icon: Brain,
                traits: { spiritual: 95, relaxation: 80, learning: 75, social: 15, nature: 60 }
            },
        ]
    },
    {
        id: 11,
        question: "Hangi aktiviteyi yapmak seni daha çok heyecanlandırır?",
        category: 'adventure',
        weight: 8,
        options: [
            {
                text: "Dağ tırmanışı veya extreme sporlar",
                icon: Mountain,
                traits: { adventure: 95, nature: 80, spontaneity: 70, social: 40, luxury: 15 }
            },
            {
                text: "Müze ve sanat galerisi gezisi",
                icon: Palette,
                traits: { culture: 90, learning: 85, relaxation: 60, luxury: 55, social: 50 }
            },
            {
                text: "Spa ve wellness merkezleri",
                icon: Heart,
                traits: { relaxation: 95, luxury: 85, spiritual: 60, planning: 60, social: 30 }
            },
            {
                text: "Yerel festival ve etkinlikler",
                icon: Music,
                traits: { culture: 85, social: 90, learning: 70, adventure: 60, spontaneity: 75 }
            },
            {
                text: "Doğa yürüyüşü ve meditasyon",
                icon: TreePine,
                traits: { nature: 90, spiritual: 85, relaxation: 80, adventure: 50, social: 20 }
            },
        ]
    },
    {
        id: 12,
        question: "Seyahatlerinde teknoloji kullanımın nasıl?",
        category: 'lifestyle',
        weight: 5,
        options: [
            {
                text: "Sürekli fotoğraf çeker, paylaşırım",
                icon: Camera,
                traits: { social: 80, culture: 60, learning: 50, luxury: 50, planning: 55 }
            },
            {
                text: "Sadece gerekli durumlarda kullanırım",
                icon: Settings,
                traits: { planning: 70, relaxation: 65, spiritual: 60, nature: 65, social: 45 }
            },
            {
                text: "Tamamen digital detox yaparım",
                icon: TreePine,
                traits: { spiritual: 85, nature: 80, relaxation: 90, social: 20, spontaneity: 70 }
            },
            {
                text: "Her şeyi teknoloji ile organize ederim",
                icon: Wifi,
                traits: { planning: 90, luxury: 70, learning: 65, social: 55, adventure: 35 }
            },
            {
                text: "Deneyimlerimi kaydetmek için kullanırım",
                icon: Book,
                traits: { learning: 85, culture: 70, spiritual: 60, planning: 65, social: 50 }
            },
        ]
    },
    {
        id: 13,
        question: "Son olarak, seyahat sonrası en çok neyi özlersin?",
        category: 'motivation',
        weight: 7,
        options: [
            {
                text: "O anki huzur ve özgürlük hissini",
                icon: Heart,
                traits: { relaxation: 90, spiritual: 80, nature: 70, spontaneity: 75, social: 30 }
            },
            {
                text: "Yeni öğrendiğim bilgileri",
                icon: Book,
                traits: { learning: 95, culture: 85, spiritual: 60, planning: 70, social: 55 }
            },
            {
                text: "Tanıştığım insanları",
                icon: Users,
                traits: { social: 95, culture: 80, learning: 70, adventure: 50, luxury: 40 }
            },
            {
                text: "Yaşadığım adrenalin dolu anları",
                icon: Zap,
                traits: { adventure: 95, spontaneity: 85, nature: 60, social: 60, planning: 25 }
            },
            {
                text: "Kendimde fark ettiğim değişimi",
                icon: Brain,
                traits: { spiritual: 95, learning: 85, relaxation: 70, culture: 65, social: 40 }
            },
        ]
    },
];

// Gelişmiş seyahat tipleri - Community ve Öneri sistemi için optimize edilmiş
const travelTypes = {
    "Maceraperest": {
        traits: { adventure: 90, spontaneity: 80, nature: 70, social: 60, luxury: 20 },
        description: "Extreme sporlar ve macera dolu aktivitelerle kendini test eden cesur gezgin.",
        emoji: "🏔️",
        color: "#FF6B35",
        compatibleTypes: ["Doğa Sever", "Spontane Gezgin", "Sosyal Gezgin"],
        preferredDestinations: ["dağlık_bölgeler", "safari_parkları", "extreme_sporlar"],
        recommendedActivities: ["trekking", "rafting", "zipline", "dağ_bisikleti", "paraşüt"],
        avoidActivities: ["spa", "müze_turları", "şehir_alışverişi"],
        travelStyle: "aktif_macera",
        budgetLevel: "orta",
        groupPreference: "küçük_grup"
    },
    "Kültür Aşığı": {
        traits: { culture: 90, learning: 85, social: 70, planning: 65, luxury: 55 },
        description: "Her seyahatte yeni kültürler keşfeden, tarih ve sanatla beslenan gezgin.",
        emoji: "🏛️",
        color: "#8B5A3C",
        compatibleTypes: ["Öğrenmeye Aç Gezgin", "Planlı Gezgin", "Sosyal Gezgin"],
        preferredDestinations: ["tarihi_şehirler", "müzeler", "antik_kentler"],
        recommendedActivities: ["müze_ziyaretleri", "tarihi_turlar", "yerel_atölyeler", "sanat_galerileri"],
        avoidActivities: ["extreme_sporlar", "gece_hayatı", "sadece_plaj"],
        travelStyle: "kültürel_keşif",
        budgetLevel: "orta_üst",
        groupPreference: "rehberli_grup"
    },
    "Sosyal Gezgin": {
        traits: { social: 90, culture: 75, adventure: 60, luxury: 55, learning: 70 },
        description: "Seyahatlerinde insanlarla bağlantı kuran, sosyal deneyimleri önemseyen gezgin.",
        emoji: "👥",
        color: "#FF9F1C",
        compatibleTypes: ["Kültür Aşığı", "Maceraperest", "Öğrenmeye Aç Gezgin"],
        preferredDestinations: ["canlı_şehirler", "festival_bölgeleri", "hostel_rotaları"],
        recommendedActivities: ["grup_turları", "yerel_festivaller", "gece_hayatı", "cooking_class"],
        avoidActivities: ["tek_başına_aktiviteler", "sessiz_retreatlar"],
        travelStyle: "sosyal_etkileşim",
        budgetLevel: "orta",
        groupPreference: "büyük_grup"
    },
    "Lüks Yaşam Tutkunu": {
        traits: { luxury: 90, relaxation: 80, planning: 75, culture: 60, social: 50 },
        description: "Konfor ve kaliteyi ön planda tutan, lüks deneyimler arayan gezgin.",
        emoji: "⭐",
        color: "#D4AF37",
        compatibleTypes: ["Huzur Arayıcısı", "Planlı Gezgin", "Kültür Aşığı"],
        preferredDestinations: ["5_yıldız_resortlar", "lüks_şehirler", "premium_destinasyonlar"],
        recommendedActivities: ["spa_tedavileri", "fine_dining", "özel_turlar", "yacht_gezileri"],
        avoidActivities: ["backpacking", "budget_hosteller", "kamp"],
        travelStyle: "lüks_konfor",
        budgetLevel: "yüksek",
        groupPreference: "özel_grup"
    },
    "Doğa Sever": {
        traits: { nature: 95, spiritual: 70, adventure: 65, relaxation: 80, social: 25 },
        description: "Doğanın güzelliklerini keşfeden, çevre bilinciyle seyahat eden gezgin.",
        emoji: "🌿",
        color: "#355E3B",
        compatibleTypes: ["Ruhani Arayıcı", "Maceraperest", "Huzur Arayıcısı"],
        preferredDestinations: ["milli_parklar", "doğa_rezervleri", "eco_lodge"],
        recommendedActivities: ["doğa_yürüyüşü", "kuş_gözlemi", "kamp", "doğa_fotoğrafçılığı"],
        avoidActivities: ["şehir_turları", "alışveriş_merkezleri", "gece_kulüpleri"],
        travelStyle: "doğa_odaklı",
        budgetLevel: "orta",
        groupPreference: "az_kişi"
    },
    "Spontane Gezgin": {
        traits: { spontaneity: 90, adventure: 75, social: 65, nature: 60, planning: 15 },
        description: "Plan yapmayı sevmeyen, akışına bırakan, sürprizleri seven gezgin.",
        emoji: "🎲",
        color: "#FF6B9D",
        compatibleTypes: ["Maceraperest", "Sosyal Gezgin", "Doğa Sever"],
        preferredDestinations: ["keşfedilmemiş_yerler", "backpacker_rotaları", "esnek_destinasyonlar"],
        recommendedActivities: ["spontane_keşifler", "yerel_deneyimler", "rastgele_turlar"],
        avoidActivities: ["sıkı_programlar", "önceden_rezervasyonlar", "zamanlanmış_turlar"],
        travelStyle: "esnek_keşif",
        budgetLevel: "düşük_orta",
        groupPreference: "esnek_grup"
    },
    "Planlı Gezgin": {
        traits: { planning: 90, learning: 80, culture: 75, luxury: 60, adventure: 45 },
        description: "Her detayı önceden planlayan, organize seyahatler tercih eden gezgin.",
        emoji: "📋",
        color: "#4A90E2",
        compatibleTypes: ["Kültür Aşığı", "Lüks Yaşam Tutkunu", "Öğrenmeye Aç Gezgin"],
        preferredDestinations: ["güvenli_destinasyonlar", "organize_turlar", "planlı_rotalar"],
        recommendedActivities: ["rehberli_turlar", "müze_ziyaretleri", "planlı_aktiviteler"],
        avoidActivities: ["spontane_aktiviteler", "belirsiz_planlar", "risk_içeren_sporlar"],
        travelStyle: "organize_tur",
        budgetLevel: "orta_üst",
        groupPreference: "organize_grup"
    },
    "Huzur Arayıcısı": {
        traits: { relaxation: 95, luxury: 70, spiritual: 75, nature: 65, social: 35 },
        description: "Seyahatlerinde dinlenmeyi ve huzuru ön planda tutan gezgin.",
        emoji: "🧘",
        color: "#87CEEB",
        compatibleTypes: ["Ruhani Arayıcı", "Doğa Sever", "Lüks Yaşam Tutkunu"],
        preferredDestinations: ["spa_resortları", "sessiz_sahiller", "wellness_merkezleri"],
        recommendedActivities: ["spa_tedavileri", "yoga_retreatları", "meditasyon", "beach_relaxation"],
        avoidActivities: ["gece_hayatı", "extreme_sporlar", "yoğun_turlar"],
        travelStyle: "dinlendirici",
        budgetLevel: "orta_üst",
        groupPreference: "az_kişi"
    },
    "Öğrenmeye Aç Gezgin": {
        traits: { learning: 95, culture: 85, planning: 70, spiritual: 60, social: 55 },
        description: "Her seyahatte yeni şeyler öğrenmeyi hedefleyen, meraklı gezgin.",
        emoji: "📚",
        color: "#9B59B6",
        compatibleTypes: ["Kültür Aşığı", "Planlı Gezgin", "Ruhani Arayıcı"],
        preferredDestinations: ["eğitim_merkezleri", "kültürel_siteler", "workshop_destinasyonları"],
        recommendedActivities: ["atölye_çalışmaları", "dil_kursları", "tarihi_araştırmalar", "uzman_turları"],
        avoidActivities: ["sadece_eğlence", "pasif_dinlenme", "tek_düze_aktiviteler"],
        travelStyle: "eğitici_keşif",
        budgetLevel: "orta",
        groupPreference: "küçük_grup"
    },
    "Ruhani Arayıcı": {
        traits: { spiritual: 95, nature: 75, relaxation: 80, learning: 70, social: 30 },
        description: "Manevi gelişim ve iç keşif odaklı seyahatler yapan gezgin.",
        emoji: "🕯️",
        color: "#6B4F4F",
        compatibleTypes: ["Doğa Sever", "Huzur Arayıcısı", "Öğrenmeye Aç Gezgin"],
        preferredDestinations: ["manevi_merkezler", "eski_tapınaklar", "meditation_retreat"],
        recommendedActivities: ["meditasyon_retreatları", "ruhani_turlar", "yoga", "manevi_öğretiler"],
        avoidActivities: ["gece_hayatı", "alışveriş", "gürültülü_aktiviteler"],
        travelStyle: "manevi_yolculuk",
        budgetLevel: "orta",
        groupPreference: "tek_başına"
    }
};

export default function AdvancedTravelTypeTest({ onComplete }: TravelTypeTestProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session } = useSession();

    const handleAnswer = (optionIndex: number) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = optionIndex;
        setSelectedAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
            }, 300);
        } else {
            calculateAdvancedResult(newAnswers);
        }
    };

    const calculateAdvancedResult = async (answers: number[]) => {
        setIsLoading(true);

        // Toplam trait puanlarını hesapla
        const totalTraits: TravelTraits = {
            adventure: 0, social: 0, planning: 0, nature: 0, culture: 0,
            luxury: 0, spontaneity: 0, spiritual: 0, learning: 0, relaxation: 0
        };

        let totalWeight = 0;

        // Her soruyu analiz et
        answers.forEach((answerIndex, questionIndex) => {
            const question = questions[questionIndex];
            const selectedOption = question.options[answerIndex];
            const weight = question.weight;

            // Ağırlıklı puanlama
            Object.keys(selectedOption.traits).forEach(trait => {
                if (totalTraits.hasOwnProperty(trait)) {
                    totalTraits[trait as keyof TravelTraits] +=
                        (selectedOption.traits[trait] * weight) / 10;
                }
            });

            totalWeight += weight;
        });

        // Ortalama trait skorlarını hesapla
        Object.keys(totalTraits).forEach(trait => {
            totalTraits[trait as keyof TravelTraits] =
                totalTraits[trait as keyof TravelTraits] / answers.length;
        });

        // En uygun seyahat tipini bul
        let bestMatch = "Çok Yönlü Gezgin";
        let bestScore = 0;

        Object.entries(travelTypes).forEach(([typeName, typeData]) => {
            let score = 0;
            let matchCount = 0;

            Object.entries(typeData.traits).forEach(([trait, expectedValue]) => {
                const userValue = totalTraits[trait as keyof TravelTraits];

                // Benzerlik hesaplama (0-100 arası fark)
                const similarity = 100 - Math.abs(expectedValue - userValue);
                score += similarity;
                matchCount++;
            });

            // Ortalama benzerlik skoru
            const avgScore = score / matchCount;

            // Tutarlılık bonusu - dominant trait'ler için
            const dominantTraits = Object.entries(totalTraits)
                .filter(([_, value]) => value > 70)
                .map(([trait, _]) => trait);

            const typeTraits = Object.entries(typeData.traits)
                .filter(([_, value]) => value > 70)
                .map(([trait, _]) => trait);

            const commonDominant = dominantTraits.filter(trait =>
                typeTraits.includes(trait)
            ).length;

            const consistencyBonus = commonDominant * 5; // Her ortak dominant trait için +5

            const finalScore = avgScore + consistencyBonus;

            if (finalScore > bestScore) {
                bestScore = finalScore;
                bestMatch = typeName;
            }
        });

        // Database'e kaydet
        if (session?.user?.email) {
            try {
                const result = await updateUserTravelType(bestMatch);
                if (result.error) {
                    console.error('Travel type kaydedilirken hata:', result.error);
                }
            } catch (error) {
                console.error('Database güncelleme hatası:', error);
            }
        }

        setIsLoading(false);
        onComplete(bestMatch);
    };

    const goBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const currentQ = questions[currentQuestion];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                        Soru {currentQuestion + 1} / {questions.length}
                    </span>
                    <span className="text-sm text-gray-600">
                        %{Math.round(((currentQuestion + 1) / questions.length) * 100)}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Question Category Badge */}
            <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {currentQ.category === 'lifestyle' && '🎯 Yaşam Tarzı'}
                    {currentQ.category === 'social' && '👥 Sosyal Tercihler'}
                    {currentQ.category === 'adventure' && '⚡ Macera Seviyesi'}
                    {currentQ.category === 'planning' && '📅 Planlama Yaklaşımı'}
                    {currentQ.category === 'motivation' && '💡 Motivasyon'}
                    {currentQ.category === 'preference' && '🎨 Tercihler'}
                    {currentQ.category === 'personality' && '🧠 Kişilik'}
                </span>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        {currentQ.question}
                    </h2>

                    <div className="space-y-3">
                        {currentQ.options.map((option, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-3 ${selectedAnswers[currentQuestion] === index
                                    ? "border-green-500 bg-green-50 text-green-700"
                                    : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                                    }`}
                                onClick={() => handleAnswer(index)}
                            >
                                <div className={`p-2 rounded-lg ${selectedAnswers[currentQuestion] === index
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-100 text-gray-600"
                                    }`}>
                                    <option.icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium">{option.text}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentQuestion > 0
                        ? "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        : "text-gray-400 cursor-not-allowed"
                        }`}
                    onClick={goBack}
                    disabled={currentQuestion === 0}
                >
                    <ChevronLeft className="w-4 h-4" />
                    Geri
                </motion.button>

                <div className="text-sm text-gray-500">
                    {currentQuestion + 1} / {questions.length}
                </div>
            </div>

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 flex items-center gap-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
                        <span>Gelişmiş algoritma analiz yapıyor...</span>
                    </div>
                </div>
            )}
        </div>
    );
}
