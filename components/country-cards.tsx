"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Lock, CheckCircle } from "lucide-react";

// داده‌های کشورها با اطلاعات کامل
const countriesData = [
  {
    id: "DE",
    code: "DE",
    nameFa: "آلمان",
    nameNative: "Deutschland",
    flagEmoji: "🇩🇪",
    url: "/germany",
    isActive: true,
  },
  {
    id: "FR",
    code: "FR",
    nameFa: "فرانسه",
    nameNative: "France",
    flagEmoji: "🇫🇷",
    url: "/france",
    isActive: false,
  },
  {
    id: "GB",
    code: "GB",
    nameFa: "انگلستان",
    nameNative: "United Kingdom",
    flagEmoji: "🇬🇧",
    url: "/united-kingdom",
    isActive: false,
  },
  {
    id: "IT",
    code: "IT",
    nameFa: "ایتالیا",
    nameNative: "Italia",
    flagEmoji: "🇮🇹",
    url: "/italy",
    isActive: false,
  },
  {
    id: "ES",
    code: "ES",
    nameFa: "اسپانیا",
    nameNative: "España",
    flagEmoji: "🇪🇸",
    url: "/spain",
    isActive: false,
  },
];

interface CountryCardProps {
  code: string;
  nameFa: string;
  nameNative: string;
  flagEmoji: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const CountryCard = ({
  code,
  nameFa,
  nameNative,
  flagEmoji,
  isActive,
  onClick,
  index,
}: CountryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={isActive ? { y: -10, scale: 1.02 } : {}}
      whileTap={isActive ? { scale: 0.98 } : {}}
      onClick={isActive ? onClick : undefined}
      className={`
        relative group
        ${isActive ? "cursor-pointer" : "cursor-not-allowed"}
      `}
    >
      <div
        className={`
          relative flex flex-col items-center p-6 rounded-2xl
          transition-all duration-300 overflow-hidden
          ${
            isActive
              ? "bg-white hover:shadow-2xl shadow-lg border border-gray-100"
              : "bg-gray-50 border border-gray-200"
          }
        `}
      >
        {/* Background gradient effect on hover */}
        {isActive && (
          <div className="absolute inset-0 bg-linear-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}

        {/* Active indicator badge */}
        {isActive && (
          <div className="absolute top-3 right-3 z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full"
            >
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span className="text-xs font-medium text-green-700">فعال</span>
            </motion.div>
          </div>
        )}

        {/* Inactive badge */}
        {!isActive && (
          <div className="absolute top-3 right-3 z-10">
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-full">
              <Lock className="w-3 h-3 text-gray-500" />
              <span className="text-xs font-medium text-gray-500">غیرفعال</span>
            </div>
          </div>
        )}

        {/* Flag circle */}
        <div className="relative z-10">
          <motion.div
            whileHover={isActive ? { rotate: [0, -5, 5, -5, 0] } : {}}
            transition={{ duration: 0.5 }}
            className={`
              relative w-28 h-28 rounded-full flex items-center justify-center
              border-4 transition-all duration-300 bg-linear-to-br
              ${
                isActive
                  ? "border-green-500 from-green-50 to-emerald-50 shadow-lg group-hover:shadow-green-200"
                  : "border-gray-300 from-gray-100 to-gray-200"
              }
            `}
          >
            {/* Glow effect for active cards */}
            {isActive && (
              <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            
            <span 
              className={`text-6xl leading-none z-10 transition-all duration-300 ${
                isActive ? "grayscale-0" : "grayscale opacity-50"
              }`}
            >
              {flagEmoji}
            </span>
          </motion.div>
        </div>

        {/* Country name in Persian */}
        <h3
          className={`
            relative z-10 mt-4 text-lg font-bold text-center transition-colors duration-300
            ${isActive ? "text-slate-900 group-hover:text-green-700" : "text-gray-400"}
          `}
          style={{ fontFamily: "Vazirmatn, sans-serif" }}
        >
          {nameFa}
        </h3>

        {/* Country name in native language */}
        <p
          className={`
            relative z-10 mt-1 text-sm text-center transition-colors duration-300
            ${isActive ? "text-slate-600 group-hover:text-green-600" : "text-gray-400"}
          `}
        >
          {nameNative}
        </p>

        {/* Hover indicator for active cards */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-3 left-0 right-0 flex justify-center"
          >
            <div className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
              کلیک کنید
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

interface CountryCardsProps {
  onCountrySelect?: (countryCode: string) => void;
}

export default function CountryCards({ onCountrySelect }: CountryCardsProps) {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCardClick = (countryCode: string, url: string) => {
    setSelectedCountry(countryCode);
    if (onCountrySelect) {
      onCountrySelect(countryCode);
    }
    console.log(`کشور انتخاب شده: ${countryCode}`);
    router.push(url);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-w-full max-w-full py-12">
      {/* Header section with gradient background */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center relative"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-100 to-emerald-100 mb-4">
          <Globe className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-700">انتخاب کشور</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-slate-900 via-green-800 to-slate-900 bg-clip-text text-transparent mb-3">
          انتخاب کشور
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
          Select Your Country
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={{ lineHeight: "1.8" }}>
          لطفاً کشور مورد نظر خود را انتخاب کنید | Please select your country of residence
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"
      >
        {countriesData.map((country, index) => (
          <CountryCard
            key={country.id}
            code={country.code}
            nameFa={country.nameFa}
            nameNative={country.nameNative}
            flagEmoji={country.flagEmoji}
            isActive={country.isActive}
            onClick={() => handleCardClick(country.code, country.url)}
            index={index}
          />
        ))}
      </motion.div>

      {/* Selected country indicator */}
      {selectedCountry && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 mx-auto max-w-md"
        >
          <div className="p-6 bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 shadow-lg">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-slate-900 font-semibold text-lg" style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                کشور انتخاب شده:{" "}
                <span className="text-green-700">{selectedCountry}</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Info note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-slate-500">
          کشورهای دیگر به زودی فعال خواهند شد | More countries coming soon
        </p>
      </motion.div>
    </div>
  );
}