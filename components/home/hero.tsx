"use client";

import { motion } from "framer-motion";
import { Globe, Megaphone, Send, Users } from "lucide-react";

export default function FreedomHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-10 pb-10 sm:pt-0 sm:pb-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating icons and logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Icons */}
        {[Globe, Users, Megaphone].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
            }}
          >
            <Icon className="w-24 h-24 text-white" />
          </motion.div>
        ))}

        {/* Floating Logo 1 */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, -8, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute top-[15%] right-[15%]"
        >
          <img
            src="/images/floating/logoiranwing.webp"
            alt="Logo 1"
            className="w-24 h-24 object-contain opacity-50"
          />
        </motion.div>

        {/* Floating Logo 2 */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, -12, 0],
            rotate: [0, 6, 0],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 3,
          }}
          className="absolute bottom-[25%] right-[5%]"
        >
          <img
            src="/images/floating/lion.svg"
            alt="Logo 2"
            className="w-68 h-68 object-contain opacity-30"
          />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">
                فعال و آماده به اقدام
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-green-300 via-white to-red-300 bg-clip-text text-transparent leading-tight"
            style={{ direction: "rtl" }}
          >
            صدای ایران باشیم
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto px-4"
            style={{ direction: "rtl", lineHeight: "1.8" }}
          >
            در حالی که اینترنت در ایران قطع و سرکوب در اوج است، ما پیمان
            بسته‌ایم تا طنین فریاد هموطنانمان در تالارهای قدرت جهان باشیم. با
            ارسال یک نامه، مستقیماً از مقامات بین‌المللی بخواهید که سکوت خود را
            بشکنند.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(34, 197, 94, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/mail")}
              className="group relative px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-3"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span style={{ direction: "rtl" }}>همین حالا نامه بفرستید</span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = "/iranvoice")}

              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              style={{ direction: "rtl" }}
            >
              بیشتر بدانید
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "600+", label: "ایمیل های اضافه شده" },
              { number: "1+", label: "کشور فعال: فعلا آلمان" },
              { number: "24/7", label: "پشتیبانی" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div
                  className="text-gray-300 text-sm"
                  style={{ direction: "rtl" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
}
