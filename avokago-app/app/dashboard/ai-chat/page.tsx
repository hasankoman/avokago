"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSession } from "next-auth/react";
import {
  Send,
  Bot,
  User,
  Sparkles,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Star,
  Clock,
  Leaf,
  Mountain,
  PartyPopper,
  Heart,
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Share2,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  suggestions?: string[];
  destinations?: any[];
  isTyping?: boolean;
}

interface QuickResponse {
  text: string;
  value: string;
  icon?: any;
}

const profileTypes = {
  peace: {
    title: "Ruh Arayan Keşifçi",
    icon: Leaf,
    greeting:
      "Merhaba! Huzurlu ve içsel keşif odaklı seyahat deneyimleri için buradayım. Size hangi konuda yardım edebilirim?",
    tone: "sakin ve huzurlu",
    color: "from-[#357A38] to-[#568203]",
  },
  excitement: {
    title: "Dingin Maceraperest",
    icon: Mountain,
    greeting:
      "Selam macera tutkunu! Adrenalin dolu ve heyecan verici deneyimler keşfetmeye hazır mısın?",
    tone: "enerjik ve cesur",
    color: "from-[#568203] to-[#A7C957]",
  },
  social: {
    title: "Sosyalleşen Kaçak",
    icon: PartyPopper,
    greeting:
      "Hey! Kültür, insanlar ve sosyal deneyimler konusunda en iyi rehberinizim. Neler keşfedelim?",
    tone: "samimi ve sosyal",
    color: "from-[#A7C957] to-[#F0E68C]",
  },
  romance: {
    title: "Romantik Rüyacı",
    icon: Heart,
    greeting:
      "Hoş geldiniz! Romantik kaçamaklar ve özel anlar yaratmak için buradayım. Nasıl yardımcı olabilirim?",
    tone: "sıcak ve romantik",
    color: "from-[#F0E68C] to-[#A7C957]",
  },
};

const quickResponses: QuickResponse[] = [
  { text: "Nereye gitsem?", value: "where_to_go", icon: MapPin },
  { text: "Bütçem sınırlı", value: "budget_limited", icon: DollarSign },
  { text: "Grup seyahati", value: "group_travel", icon: Users },
  { text: "Bu hafta sonu", value: "weekend", icon: Calendar },
  { text: "Doğa aktiviteleri", value: "nature", icon: Mountain },
  { text: "Şehir keşfi", value: "city", icon: MapPin },
];

const mockDestinations = [
  {
    id: "1",
    name: "Kapadokya Gizli Vadileri",
    location: "Nevşehir, Türkiye",
    price: "₺1,200",
    duration: "3 gün",
    rating: 4.8,
    matchPercentage: 95,
    image: "/api/placeholder/200/150",
    highlights: ["Balon turu", "Mağara otelleri", "Gün doğumu yoga"],
  },
  {
    id: "2",
    name: "Ayder Yaylası Retreat",
    location: "Rize, Türkiye",
    price: "₺950",
    duration: "2 gün",
    rating: 4.7,
    matchPercentage: 92,
    image: "/api/placeholder/200/150",
    highlights: ["Doğa yürüyüşü", "Termal su", "Meditasyon seansları"],
  },
];

// API endpoint for AI responses
const WEBHOOK_URL =
  //"http://localhost:5678/webhook/c49db7d9-4adc-4c5e-9904-cb0cd00390e6";
  "http://localhost:5678/webhook-test/c49db7d9-4adc-4c5e-9904-cb0cd00390e6";

// Get AI response from webhook
const getAIResponse = async (
  userMessage: string,
  userType: string = "peace",
  conversationHistory: Message[] = [],
  userId?: string
): Promise<Message> => {
  try {
    const profileType = profileTypes[userType as keyof typeof profileTypes];

    // Prepare the request payload
    const payload = {
      message: userMessage,
      userType: userType,
      profileType: profileType,
      userId: userId,
      conversationHistory: conversationHistory.map((msg) => ({
        type: msg.type,
        content: msg.content,
        timestamp: msg.timestamp.toISOString(),
      })),
    };

    console.log("Sending payload to webhook:", payload);

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Received response from webhook:", data);

    return {
      id: Date.now().toString(),
      type: "bot",
      content:
        data.content ||
        data.message ||
        data.output ||
        "Üzgünüm, şu anda yanıt veremiyorum. Lütfen tekrar deneyin.",
      timestamp: new Date(),
      suggestions: data.suggestions || [
        "Daha fazla bilgi ver",
        "Örnekler göster",
        "Alternatif öner",
      ],
      destinations:
        data.destinations ||
        (data.output && data.output.includes("destinasyon")
          ? mockDestinations
          : undefined),
    };
  } catch (error) {
    console.error("AI Response Error:", error);

    // Fallback response in case of error
    return {
      id: Date.now().toString(),
      type: "bot",
      content:
        "Üzgünüm, şu anda bir teknik sorun yaşıyorum. Lütfen birkaç saniye sonra tekrar deneyin.",
      timestamp: new Date(),
      suggestions: ["Tekrar dene", "Farklı bir soru sor"],
    };
  }
};

export default function AIChat() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userProfile] = useState("peace"); // This would come from user context
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const profileType = profileTypes[userProfile as keyof typeof profileTypes];
  const ProfileIcon = profileType.icon;

  // Show loading while session is being loaded
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#F9F9F4] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#357A38] mx-auto mb-4"></div>
          <p className="text-[#6B4F1D]">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Redirect to sign in if not authenticated
  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-[#F9F9F4] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B4F1D] mb-4">Lütfen giriş yapın</p>
          <Link href="/auth/signin" className="text-[#357A38] hover:underline">
            Giriş Yap
          </Link>
        </div>
      </div>
    );
  }

  // Debug: Show session info if user ID is missing
  if (session && !session.user?.id) {
    console.error("Session exists but user ID is missing:", session);
    return (
      <div className="min-h-screen bg-[#F9F9F4] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B4F1D] mb-4">
            Oturum sorunu: Kullanıcı ID'si bulunamadı
          </p>
          <p className="text-xs text-gray-500 mb-4">Konsolu kontrol edin</p>
          <Link href="/auth/signin" className="text-[#357A38] hover:underline">
            Tekrar Giriş Yap
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // Initial greeting message
    const initialMessage: Message = {
      id: "initial",
      type: "bot",
      content: profileType.greeting,
      timestamp: new Date(),
      suggestions: [
        "Nereye gitsem?",
        "Bütçem sınırlı",
        "Bu hafta sonu",
        "Grup seyahati",
      ],
    };

    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    console.log("Session:", session);
    console.log("User:", session?.user);
    console.log("User ID:", session?.user?.id);

    // Check if user is authenticated
    if (!session?.user?.id) {
      console.error("User not authenticated or user ID not available");
      console.error("Session status:", status);
      console.error("Session object:", session);
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Get AI response from webhook
      const aiResponse = await getAIResponse(
        content,
        userProfile,
        messages,
        session.user.id
      );
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      // Add error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        content: "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickResponse = (response: QuickResponse) => {
    handleSendMessage(response.text);
  };

  const TypingIndicator = () => (
    <motion.div
      className="flex items-center space-x-3 p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="w-8 h-8 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-full flex items-center justify-center">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white rounded-2xl rounded-bl-md p-3 shadow-sm">
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#A7C957] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  const DestinationCard = ({ destination }: { destination: any }) => (
    <motion.div
      className="bg-white rounded-2xl p-4 shadow-md border border-[#A7C957]/20 min-w-[280px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="w-full h-32 bg-gradient-to-br from-[#A7C957]/20 to-[#357A38]/20 rounded-xl mb-3 flex items-center justify-center">
        <Mountain className="w-8 h-8 text-[#357A38]" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-[#6B4F1D] text-sm">
            {destination.name}
          </h4>
          <span className="text-xs font-medium text-[#357A38] bg-[#357A38]/10 px-2 py-1 rounded-full">
            {destination.matchPercentage}%
          </span>
        </div>

        <p className="text-xs text-[#6B4F1D]/70">{destination.location}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-[#6B4F1D]/70">
            <Clock className="w-3 h-3" />
            <span>{destination.duration}</span>
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span>{destination.rating}</span>
          </div>
          <span className="font-semibold text-[#357A38] text-sm">
            {destination.price}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button className="text-xs text-[#357A38] font-medium hover:underline">
            Detaylar
          </button>
          <div className="flex items-center space-x-1">
            <button className="p-1 rounded-lg hover:bg-[#357A38]/10 transition-colors">
              <Bookmark className="w-3 h-3 text-[#357A38]" />
            </button>
            <button className="p-1 rounded-lg hover:bg-[#357A38]/10 transition-colors">
              <Share2 className="w-3 h-3 text-[#357A38]" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#F9F9F4] flex flex-col">
      {/* Header */}
      <motion.header
        className="bg-white border-b border-[#A7C957]/20 p-4 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link href="/dashboard">
          <motion.button
            className="flex items-center space-x-2 text-[#357A38] hover:text-[#568203]"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </motion.button>
        </Link>
        <div className="flex items-center space-x-3">
          <motion.div
            className={`w-10 h-10 bg-gradient-to-tr ${profileType.color} rounded-2xl flex items-center justify-center`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <ProfileIcon className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <h1 className="font-bold text-[#6B4F1D]">AI Seyahat Asistanı</h1>
            <p className="text-xs text-[#6B4F1D]/70">{profileType.title}</p>
          </div>
        </div>
        <div className="w-16"></div> {/* Spacer for balance */}
      </motion.header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 max-w-[80%] ${
                  message.type === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === "user"
                      ? "bg-[#6B4F1D] text-white"
                      : `bg-gradient-to-tr ${profileType.color} text-white`
                  }`}
                >
                  {message.type === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>

                {/* Message Content */}
                <div className="space-y-3">
                  <motion.div
                    className={`p-3 rounded-2xl shadow-sm ${
                      message.type === "user"
                        ? "bg-[#357A38] text-white rounded-br-md"
                        : "bg-white text-[#6B4F1D] rounded-bl-md border border-[#A7C957]/20"
                    }`}
                    whileHover={{ scale: 1.01 }}
                  >
                    <p className="text-sm">{message.content}</p>
                  </motion.div>

                  {/* Suggestions */}
                  {message.suggestions && (
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {message.suggestions.map((suggestion, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleSendMessage(suggestion)}
                          className="text-xs px-3 py-2 bg-[#A7C957]/20 text-[#357A38] rounded-full hover:bg-[#A7C957]/30 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {/* Destinations */}
                  {message.destinations && (
                    <motion.div
                      className="flex gap-3 overflow-x-auto pb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {message.destinations.map((destination) => (
                        <DestinationCard
                          key={destination.id}
                          destination={destination}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {isTyping && <TypingIndicator />}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Responses */}
      <motion.div
        className="p-4 bg-white border-t border-[#A7C957]/20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
          {quickResponses.map((response, index) => (
            <motion.button
              key={index}
              onClick={() => handleQuickResponse(response)}
              className="flex items-center space-x-2 px-3 py-2 bg-[#F9F9F4] hover:bg-[#A7C957]/20 rounded-full text-sm text-[#6B4F1D] border border-[#A7C957]/30 whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {response.icon && <response.icon className="w-4 h-4" />}
              <span>{response.text}</span>
            </motion.button>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && handleSendMessage(inputValue)
              }
              placeholder="Seyahat planınız hakkında soru sorun..."
              className="w-full p-3 pr-12 rounded-2xl border border-[#A7C957]/30 bg-[#F9F9F4] focus:outline-none focus:border-[#357A38] focus:ring-2 focus:ring-[#357A38]/20 transition-all"
            />
            <motion.button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-xl transition-all ${
                inputValue.trim() && !isTyping
                  ? "bg-[#357A38] text-white hover:bg-[#568203]"
                  : "bg-[#A7C957]/20 text-[#6B4F1D]/50"
              }`}
              whileHover={inputValue.trim() ? { scale: 1.1 } : {}}
              whileTap={inputValue.trim() ? { scale: 0.9 } : {}}
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
