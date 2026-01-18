"use client";

import { useState } from "react";

// داده‌های کارت‌ها با دو زبان
const cardsData = [
  {
    id: 1,
    image: "/images/germany/bundestag.webp",
    title: {
      fa: "  نامه به نمایندگان ایالتی",
      de: "Brief an die Landesvertreter",
    },
    description: {
      fa: "ارسال ایمیل به نمایندگان ایالتی که در آن هستید",
      de: "Senden Sie eine E-Mail an die Landesvertreter, in deren Gebiet Sie sich befinden.",
    },
    link: "/bundestag",
  },
  {
    id: 2,
    image: "/images/germany/personen.jpg",
    title: {
      fa: "  نامه به افراد تاثیرگذار در آلمان",
      de: "Brief an einflussreiche Personen in Deutschland",
    },
    description: {
      fa: "ارسال نامه به افراد مهم در آلمان",
      de: "Brief an wichtige Persönlichkeiten in Deutschland",
    },
    link: "/germany/personen",
  },
  {
    id: 3,
    image: "/images/germany/wirtschaft.webp",
    title: {
      fa: "  نامه به مراکز اقتصادی مهم در آلمان",
      de: "Brief an wichtige Wirtschaftszentren in Deutschland",
    },
    description: {
      fa: "مراکز اقتصادی مهمی که با ایران روابط مالی کلانی دارند",
      de: "Wichtige Wirtschaftszentren mit umfangreichen Finanzbeziehungen zum Iran",
    },
    link: "/germany/wirtschaft",
  },
];

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

type Language = "fa" | "de";

// کامپوننت کارت تکی
function Card({ image, title, description, link }: CardProps) {
  return (
    <a
      href={link}
      className="group block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* تصویر با نسبت ۱۶:۹ */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* محتوای کارت */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </a>
  );
}

// کامپوننت اصلی که همه کارت‌ها را نمایش می‌دهد
export default function Cards() {
  const [language, setLanguage] = useState<Language>("fa");

  return (
    <div className="container mx-auto px-4 py-8 min-w-full max-w-full ">
      {/* دکمه‌های تغییر زبان */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setLanguage("fa")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            language === "fa"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          فارسی
        </button>
        <button
          onClick={() => setLanguage("de")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            language === "de"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Deutsch
        </button>
      </div>

      {/* نمایش کارت‌ها */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  md:gap-6 ${language === "fa" ? "rtl" : "ltr"}`}
      >
        {cardsData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title[language]}
            description={card.description[language]}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
