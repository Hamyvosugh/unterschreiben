"use client";

import { motion } from "framer-motion";
import {
  Database,
  Instagram,
  Lock,
  Mail,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "حامی وثوق  ",
    nameEn: "Hamy Vosough",
    role: "  توسعه دهنده",
    roleEn: " Developer",
    instagram: "https://www.instagram.com/hamy.vosugh2/",
    image: "/images/team/hamyvosugh.webp",
  },
  {
    id: 2,
    name: "عسل فراهانی ",
    nameEn: "Asal Farahani",
    role: " ادمین ",
    roleEn: " Admin",
    instagram: "https://www.instagram.com/asal.pdf_/",
    image: "/images/team/asalfarahani.webp",
  },
];

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-white font-medium">
                راه‌های ارتباطی
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ direction: "rtl" }}
            >
              درباره ما و راه‌های ارتباطی
            </h1>
            <p className="text-xl text-gray-200" style={{ direction: "rtl" }}>
              Contact Us & About the Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Security Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-red-100 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h2
                  className="text-3xl font-bold text-slate-900"
                  style={{ direction: "rtl" }}
                >
                  چرا امنیت برای ما یک اصل غیرقابل مذاکره است؟
                </h2>
              </div>

              <p
                className="text-slate-700 text-lg leading-relaxed mb-8"
                style={{ direction: "rtl", lineHeight: "2" }}
              >
                این پلتفرم با هدف مبارزه با ظلم و رساندن صدای مظلومان ایران به
                جهانیان بنا شده است. ما می‌دانیم که فعالیت در این مسیر، همواره
                با تهدیدات سایبری و تلاش برای نفوذ یا اختلال همراه است. به همین
                دلیل، ساختار این سایت بر پایه «امنیت حداکثری» طراحی شده است.
              </p>

              <p
                className="text-slate-700 text-lg leading-relaxed mb-6"
                style={{ direction: "rtl", lineHeight: "2" }}
              >
                ما آگاهانه تصمیم گرفته‌ایم که هیچ‌گونه درگاه باز (Entry Point)
                برای دریافت، پردازش یا ذخیره اطلاعات در این وب‌سایت قرار ندهیم.
                این یعنی:
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Database,
                    text: "هیچ پایگاه داده‌ای (Database) برای ذخیره پیام‌های شما وجود ندارد.",
                  },
                  {
                    icon: Lock,
                    text: "هیچ فرم تماسی که بتواند هدف حملات سایبری قرار بگیرد یا راهی برای نفوذ باز کند، در سایت تعبیه نشده است.",
                  },
                  {
                    icon: Shield,
                    text: "ما هیچ ردپایی از هویت یا پیام‌های شما را در این فضا ثبت نمی‌کنیم.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <p
                      className="text-slate-700 leading-relaxed pt-1.5"
                      style={{ direction: "rtl", lineHeight: "1.9" }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* How to Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h2
                  className="text-3xl font-bold text-slate-900"
                  style={{ direction: "rtl" }}
                >
                  چطور با ما در تماس باشید؟
                </h2>
              </div>

              <p
                className="text-slate-700 text-lg leading-relaxed"
                style={{ direction: "rtl", lineHeight: "2" }}
              >
                ما به گفتگو، شنیدن پیشنهادهای شما و همکاری با تمام کسانی که
                دلشان برای ایران می‌تپد، باور داریم. اما برای حفظ امنیتِ این
                ارتباط، ترجیح می‌دهیم گفتگوها در پلتفرم‌های امن و مستقیم انجام
                شود.
              </p>

              <div className="mt-8 p-6 bg-white rounded-2xl border border-green-200">
                <p
                  className="text-slate-700 leading-relaxed"
                  style={{ direction: "rtl", lineHeight: "2" }}
                >
                  اگر پیشنهادی برای بهبود متن نامه‌ها دارید، آدرس‌های جدیدی از
                  مقامات بین‌المللی جمع‌آوری کرده‌اید، یا می‌خواهید در توسعه این
                  مسیر با ما همراه شوید، لطفاً از طریق حساب‌های رسمی ما در
                  شبکه‌های اجتماعی که در زیر آمده است، مستقیماً با تیم مدیریت و
                  داوطلبان در تماس باشید.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-4">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                تیم ما
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-slate-900 mb-4"
              style={{ direction: "rtl" }}
            >
              ارتباط با ما
            </h2>
            <p className="text-slate-600 text-lg" style={{ direction: "rtl" }}>
              Contact Us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Profile Image */}
                    <div className="relative overflow-hidden aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Instagram Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-20">
                        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                          <Instagram className="w-5 h-5 text-white" />
                          <span className="text-white text-sm font-medium">
                            Instagram
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 text-center">
                      <h3
                        className="text-xl font-bold text-slate-900 mb-2"
                        style={{ fontFamily: "Vazirmatn, sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">
                        {member.nameEn}
                      </p>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                        <p
                          className="text-sm font-medium text-green-700"
                          style={{ fontFamily: "Vazirmatn, sans-serif" }}
                        >
                          {member.role}
                        </p>
                        <p className="text-xs text-green-600">
                          {member.roleEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-size-[32px_32px]" />

            <div className="relative z-10">
              <Mail className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3
                className="text-3xl font-bold text-white mb-4"
                style={{ direction: "rtl" }}
              >
                همین حالا با ما در تماس باشید
              </h3>
              <p
                className="text-gray-200 mb-8 leading-relaxed"
                style={{ direction: "rtl", lineHeight: "2" }}
              >
                برای همکاری، پیشنهادات و یا هر گونه سوال، از طریق اینستاگرام
                اعضای تیم با ما در ارتباط باشید
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://www.instagram.com/hamy.vosugh2/", "_blank")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                  دنبال کردن در اینستاگرام
                </span>
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
