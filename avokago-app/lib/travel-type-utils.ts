// Seyahat tipi utility fonksiyonları

export interface TravelTypeProfile {
    name: string;
    traits: { [key: string]: number };
    description: string;
    emoji: string;
    color: string;
    compatibleTypes: string[];
    preferredDestinations: string[];
    recommendedActivities: string[];
    avoidActivities: string[];
    travelStyle: string;
    budgetLevel: string;
    groupPreference: string;
}

// Tüm seyahat tiplerinin profilleri
export const travelTypeProfiles: { [key: string]: TravelTypeProfile } = {
    "Maceraperest": {
        name: "Maceraperest",
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
        name: "Kültür Aşığı",
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
        name: "Sosyal Gezgin",
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
        name: "Lüks Yaşam Tutkunu",
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
        name: "Doğa Sever",
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
        name: "Spontane Gezgin",
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
        name: "Planlı Gezgin",
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
        name: "Huzur Arayıcısı",
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
        name: "Öğrenmeye Aç Gezgin",
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
        name: "Ruhani Arayıcı",
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

// Seyahat tipi profili al
export function getTravelTypeProfile(travelType: string): TravelTypeProfile | null {
    return travelTypeProfiles[travelType] || null;
}

// Uyumlu seyahat tiplerini bul
export function getCompatibleTravelTypes(userTravelType: string): TravelTypeProfile[] {
    const userProfile = getTravelTypeProfile(userTravelType);
    if (!userProfile) return [];

    return userProfile.compatibleTypes
        .map(type => getTravelTypeProfile(type))
        .filter(profile => profile !== null) as TravelTypeProfile[];
}

// Seyahat tipi uyumluluk skoru hesapla (0-100)
export function calculateCompatibilityScore(type1: string, type2: string): number {
    const profile1 = getTravelTypeProfile(type1);
    const profile2 = getTravelTypeProfile(type2);
    
    if (!profile1 || !profile2) return 0;

    // Trait benzerlik skorunu hesapla
    const commonTraits = ['adventure', 'social', 'planning', 'nature', 'culture', 'luxury', 'spontaneity', 'spiritual', 'learning', 'relaxation'];
    let totalDifference = 0;
    let traitCount = 0;

    commonTraits.forEach(trait => {
        if (profile1.traits[trait] !== undefined && profile2.traits[trait] !== undefined) {
            totalDifference += Math.abs(profile1.traits[trait] - profile2.traits[trait]);
            traitCount++;
        }
    });

    if (traitCount === 0) return 0;

    // Ortalama farkı 0-100 uyumluluk skoruna çevir
    const averageDifference = totalDifference / traitCount;
    const compatibilityScore = Math.max(0, 100 - averageDifference);

    // Eğer birbirlerinin uyumlu listesinde varsa bonus ver
    const mutualCompatibility = profile1.compatibleTypes.includes(type2) || profile2.compatibleTypes.includes(type1);
    
    return mutualCompatibility ? Math.min(100, compatibilityScore + 15) : compatibilityScore;
}

// Öneri türü al
export function getRecommendationsForTravelType(travelType: string) {
    const profile = getTravelTypeProfile(travelType);
    if (!profile) return null;

    return {
        destinations: profile.preferredDestinations,
        activities: profile.recommendedActivities,
        avoidActivities: profile.avoidActivities,
        travelStyle: profile.travelStyle,
        budgetLevel: profile.budgetLevel,
        groupPreference: profile.groupPreference
    };
}

// Benzer kullanıcıları bul (mock fonksiyon - gerçekte database'den gelir)
export function findSimilarUsers(userTravelType: string, allUsers: Array<{id: string, name: string, travelType: string}>) {
    const compatibleTypes = getCompatibleTravelTypes(userTravelType).map(profile => profile.name);
    compatibleTypes.push(userTravelType); // Aynı tip de dahil

    return allUsers.filter(user => compatibleTypes.includes(user.travelType));
}

// Seyahat tipine göre renk al
export function getTravelTypeColor(travelType: string): string {
    const profile = getTravelTypeProfile(travelType);
    return profile?.color || "#6B7280";
}

// Seyahat tipine göre emoji al
export function getTravelTypeEmoji(travelType: string): string {
    const profile = getTravelTypeProfile(travelType);
    return profile?.emoji || "🧳";
}

// Aktivite önerisi ver (AI chatbot için)
export function generateActivityPrompt(travelType: string, destination: string): string {
    const profile = getTravelTypeProfile(travelType);
    if (!profile) return "";

    return `Kullanıcı "${travelType}" tipinde bir gezgin. ${destination} için ${profile.travelStyle} tarzında aktiviteler öner. 
    Önerilen aktiviteler: ${profile.recommendedActivities.join(', ')}. 
    Kaçınılması gereken aktiviteler: ${profile.avoidActivities.join(', ')}.
    Grup tercihi: ${profile.groupPreference}.
    Bütçe seviyesi: ${profile.budgetLevel}.`;
}
