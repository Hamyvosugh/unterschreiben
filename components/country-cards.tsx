"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
}

const CountryCard = ({
  code,
  nameFa,
  nameNative,
  flagEmoji,
  isActive,
  onClick,
}: CountryCardProps) => {
  return (
    <div
      onClick={isActive ? onClick : undefined}
      className={`
        relative flex flex-col items-center p-6 rounded-2xl
        transition-all duration-300
        ${
          isActive
            ? "cursor-pointer hover:bg-transparent hover:scale-105 "
            : "cursor-not-allowed opacity-40"
        }
      `}
      style={{
        backgroundColor: "transparent",
      }}
    >
      {/* فریم دایره‌ای پرچم */}
      <div
        className={`
          relative w-32 h-32 rounded-full flex items-center justify-center overflow-hidden
          border-4 transition-all duration-300 bg-white/5
          ${isActive ? "border-bundesamt-blue shadow-lg" : "border-gray-300"}
        `}
      >
        <span className="text-[7rem] leading-none scale-150">{flagEmoji}</span>
      </div>

      {/* نام کشور به فارسی */}
      <h3
        className={`
          mt-4 text-lg font-bold text-center
          ${isActive ? "text-bundesamt-dark" : "text-gray-400"}
        `}
        style={{ fontFamily: "Vazirmatn, sans-serif" }}
      >
        {nameFa}
      </h3>

      {/* نام کشور به زبان بومی */}
      <p
        className={`
          mt-1 text-sm text-center
          ${isActive ? "text-bundesamt-blue" : "text-gray-400"}
        `}
      >
        {nameNative}
      </p>

      {/* نشانگر غیرفعال */}
      {!isActive && (
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-500 bg-gray-200 rounded-full">
            غیرفعال
          </span>
        </div>
      )}
    </div>
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
    // redirect به صفحه کشور
    router.push(url);
  };

  return (
    <div className="   min-w-full max-w-full">
      {/* عنوان */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-bundesamt-dark mb-2">
          انتخاب کشور
        </h2>
        <h2 className="text-3xl font-bold text-bundesamt-dark mb-2">
          Select Country
        </h2>
        <p className="text-bundesamt-blue">
          لطفاً کشور مورد نظر خود را انتخاب کنید | Please select your country
        </p>
      </div>

      {/* گرید کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {countriesData.map((country) => (
          <CountryCard
            key={country.id}
            code={country.code}
            nameFa={country.nameFa}
            nameNative={country.nameNative}
            flagEmoji={country.flagEmoji}
            isActive={country.isActive}
            onClick={() => handleCardClick(country.code, country.url)}
          />
        ))}
      </div>

      {/* نمایش کشور انتخاب شده */}
      {selectedCountry && (
        <div className="mt-8 p-4 bg-bundesamt-light-blue rounded-lg text-center">
          <p className="text-bundesamt-dark font-medium">
            کشور انتخاب شده:{" "}
            <span className="font-bold">{selectedCountry}</span>
          </p>
        </div>
      )}
    </div>
  );
}
