'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Users, Lock, Database, Send, CheckCircle, AlertTriangle } from 'lucide-react';

export default function WhyItMatters() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="relative py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6" style={{ direction: 'rtl' }}>
              چرا حضور و اقدام شما حیاتی است؟
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Unity Power Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <img 
                  src="/images/why2.jpeg" 
                  alt="Unity Power" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ direction: 'rtl' }}>
                      قدرتِ اتحاد در برابر دیواره‌های سکوت
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-lg" style={{ direction: 'rtl', lineHeight: '2' }}>
                      در لحظاتی که اینترنت در داخل ایران به ابزاری برای قطع ارتباط مردم با جهان تبدیل شده و صدای حق‌طلبی با سرکوب پاسخ داده می‌شود، مسئولیت تاریخی ما که در خارج از مرزها هستیم، دوچندان است. رژیم حاکم هزینه‌های سنگینی را صرف می‌کند تا جنایات خود را در تاریکی مطلق انجام دهد؛ اما ما با «نور» به جنگ این تاریکی می‌رویم. هر نامه‌ای که از طریق این پلتفرم ارسال می‌شود، شکافی است در دیوار سکوت و بی‌تفاوتی جامعه جهانی.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
                <img 
                  src="/images/why1.jpg" 
                  alt="Breaking Silence" 
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Email Impact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <img 
                  src="/images/why3.webp" 
                  alt="Email Impact" 
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                  <Mail className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-slate-900" style={{ direction: 'rtl' }}>
                    آیا ارسال یک ایمیل واقعاً تاثیرگذار است؟
                  </h2>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg mb-6" style={{ direction: 'rtl', lineHeight: '2' }}>
                  بسیاری می‌پرسند: «آیا یک ایمیل من تغییری ایجاد می‌کند؟» پاسخ قاطعانه بله است. در عرف دیپلماتیک، حجم تماس‌های مردمی با دفتر یک نماینده یا یک نهاد بین‌المللی، «شاخص فوریت» محسوب می‌شود.
                </p>
                
                <div className="space-y-4">
                  {[
                    'آن موضوع از یک خبر ساده به یک فشار سیاسی تبدیل می‌شود.',
                    'نمایندگان پارلمان مجبور می‌شوند در جلسات علنی در مورد آن سوال بپرسند.',
                    'هزینه‌ی همدستی یا سکوت دولت‌ها در برابر سرکوبگران افزایش می‌یابد.'
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700" style={{ direction: 'rtl', lineHeight: '1.8' }}>
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed text-lg mt-6" style={{ direction: 'rtl', lineHeight: '2' }}>
                  شما با این کار، موضوع ایران را در صدر دستور کار (Agenda) سیاستمداران نگه می‌دارید.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Security & Privacy Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full mb-6">
              <Shield className="w-6 h-6" />
              <span className="font-bold text-lg" style={{ direction: 'rtl' }}>امنیت و حریم خصوصی شما؛ خط قرمز ما</span>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto" style={{ direction: 'rtl', lineHeight: '2' }}>
              ما به خوبی از حساسیت‌های امنیتی و نگرانی‌های شما آگاهیم. این پلتفرم با فلسفه «امنیت مطلق از طریق عدم دسترسی» طراحی شده است:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                color: 'red',
                title: 'عدم ذخیره‌سازی داده‌ها',
                description: 'این سایت هیچ‌گونه پایگاه داده‌ای (Database) برای ذخیره اطلاعات شخصی، نام، یا آدرس ایمیل شما ندارد. ما هیچ‌چیز از شما نمی‌پرسیم و هیچ‌چیز را ثبت نمی‌کنیم.',
                image: '/images/why6.webp'
              },
              {
                icon: Send,
                color: 'blue',
                title: 'ارسال مستقیم توسط خودتان',
                description: 'این اپلیکیشن برخلاف بسیاری از سایت‌های دیگر، ایمیل را از طرف شما ارسال نمی‌کند. کارکرد این سایت تنها بهینه‌سازی مسیر است؛ به این صورت که متن‌های دقیق حقوقی و آدرس‌های صحیح مقامات را آماده می‌کند و سپس با زدن دکمه ارسال، نرم‌افزار ایمیل شخصی خودتان (مثل Gmail، Outlook یا Mail گوشی) باز می‌شود.',
                image: '/images/why5.webp'
              },
              {
                icon: Lock,
                color: 'green',
                title: 'شفافیت کامل',
                description: 'ایمیل نهایتاً از سرور ارائه دهنده ایمیل خودتان ارسال می‌شود. این یعنی شما کنترل کامل دارید که چه زمانی، به چه کسی و با چه عنوانی پیام بفرستید. ما فقط «قلم» و «آدرس» را در اختیار شما می‌گذاریم تا سرعت عملتان در پاسخ به جنایات افزایش یابد.',
                image: '/images/why4.webp'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-${item.color}-100 mb-4`}>
                    <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ direction: 'rtl' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ direction: 'rtl', lineHeight: '1.9' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Your Role Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-size-[32px_32px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.div variants={fadeInUp}>
                <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ direction: 'rtl' }}>
                  نقش شما در این زنجیره
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-6" style={{ direction: 'rtl', lineHeight: '2' }}>
                  این سایت برای آن ساخته شده تا بهانه‌ی «وقت ندارم» یا «نمی‌دانم به چه کسی بنویسم» را از میان ببرد. ما اطمینان حاصل می‌کنیم که ایمیل‌های هدف کاملاً به‌روز هستند و متن‌ها با ادبیاتی نوشته شده‌اند که بیشترین تاثیر حقوقی را داشته باشند.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <p className="text-xl text-white font-semibold leading-relaxed" style={{ direction: 'rtl', lineHeight: '2' }}>
                    سهم شما، تنها چند کلیک است؛ اما همین چند کلیک، صدای یک ملت است که در راهروهای پارلمان‌ها طنین‌انداز می‌شود. اجازه ندهیم خون‌های پاک ریخته شده در سکوت به فراموشی سپرده شوند.
                  </p>
                </div>
              </motion.div>
            </div>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = "/mail")}
            className="bg-linear-to-r from-green-500 to-emerald-600 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 inline-flex items-center gap-3"
          >
            <Send className="w-6 h-6" />
            <span style={{ direction: 'rtl' }}>همین الان شروع کنید</span>
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}