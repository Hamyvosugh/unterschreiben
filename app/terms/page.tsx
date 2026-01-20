import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شرایط استفاده",
  description: "شرایط و قوانین استفاده از پلتفرم امضا کردن - Terms of Service",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
            <svg
              className="w-16 h-16 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            شرایط استفاده
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Terms of Service
          </h2>
          <p className="text-lg text-gray-600">
            آخرین به‌روزرسانی: ۳۰ دی ۱۴۰۴ (۱۹ ژانویه ۲۰۲۶)
          </p>
          <p className="text-md text-gray-500">
            Last Updated: January 19, 2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-12">
          {/* Section 1 - Acceptance */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۱. پذیرش شرایط
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              1. Acceptance of Terms
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                با استفاده از وبسایت iranwing.com (به اختصار "سایت" یا "خدمات")،
                شما با این شرایط استفاده موافقت می‌کنید. اگر با این شرایط موافق
                نیستید، لطفاً از سایت استفاده نکنید.
              </p>
              <p className="text-md text-gray-600 italic">
                By using iranwing.com (the "Site" or "Services"), you agree to
                be bound by these Terms of Service. If you do not agree to these
                terms, please do not use the Site.
              </p>
            </div>
          </section>

          {/* Section 2 - Service Description */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۲. توضیح خدمات
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              2. Service Description
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                iranwing.com یک پلتفرم رایگان است که به کاربران امکان می‌دهد:
              </p>
              <ul className="space-y-2 mr-6 text-lg">
                <li>• نامه به نمایندگان مجلس آلمان (بوندستاگ) ارسال کنند</li>
                <li>• در کمپین‌های اجتماعی و حقوق بشری شرکت کنند</li>
                <li>
                  • از قالب‌های از پیش آماده شده برای نامه‌نویسی استفاده کنند
                </li>
                <li>• از ابزار بازنویسی خودکار (AI) استفاده کنند</li>
              </ul>

              <p className="text-md text-gray-600 italic mt-4">
                iranwing.com is a free platform that enables users to: send
                letters to German parliament members (Bundestag), participate in
                social and human rights campaigns, use pre-written letter
                templates, and utilize AI-powered text rewriting tools.
              </p>
            </div>
          </section>

          {/* Section 3 - User Responsibilities */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۳. مسئولیت‌های کاربر
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              3. User Responsibilities
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-bold text-gray-900">شما موظفید:</p>
              <p className="text-md font-bold text-gray-700">You agree to:</p>

              <ul className="space-y-3 mr-6 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p>از سایت به صورت قانونی و اخلاقی استفاده کنید</p>
                    <p className="text-sm text-gray-600 italic">
                      Use the site legally and ethically
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p>مسئولیت محتوای نامه‌های خود را بپذیرید</p>
                    <p className="text-sm text-gray-600 italic">
                      Take responsibility for the content of your letters
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p>اطلاعات صحیح و دقیق ارائه دهید</p>
                    <p className="text-sm text-gray-600 italic">
                      Provide accurate and truthful information
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p>از حقوق دیگران احترام کنید</p>
                    <p className="text-sm text-gray-600 italic">
                      Respect the rights of others
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 - Prohibited Uses */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۴. استفاده‌های ممنوع
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              4. Prohibited Uses
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-lg font-bold text-red-800 mb-3">
                  ممنوع است:
                </p>
                <p className="text-md font-bold text-red-700 mb-3">
                  You must NOT:
                </p>
              </div>

              <ul className="space-y-3 mr-6 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <p>ارسال محتوای توهین‌آمیز، نژادپرستانه یا تبعیض‌آمیز</p>
                    <p className="text-sm text-gray-600 italic">
                      Send offensive, racist, or discriminatory content
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <p>ارسال spam یا محتوای تبلیغاتی</p>
                    <p className="text-sm text-gray-600 italic">
                      Send spam or advertising content
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <p>تهدید، ارعاب یا آزار دیگران</p>
                    <p className="text-sm text-gray-600 italic">
                      Threaten, intimidate, or harass others
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <p>نقض قوانین آلمان یا اتحادیه اروپا</p>
                    <p className="text-sm text-gray-600 italic">
                      Violate German or EU laws
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <p>تلاش برای هک، نفوذ یا آسیب به سیستم</p>
                    <p className="text-sm text-gray-600 italic">
                      Attempt to hack, penetrate, or damage the system
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <p>استفاده از ربات یا ابزار خودکار برای ارسال انبوه</p>
                    <p className="text-sm text-gray-600 italic">
                      Use bots or automated tools for mass submissions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <div>
                    <p>جعل هویت یا گمراه کردن دریافت‌کنندگان</p>
                    <p className="text-sm text-gray-600 italic">
                      Impersonate others or mislead recipients
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 - AI Service */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۵. استفاده از هوش مصنوعی
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              5. AI Services
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                سایت از OpenAI برای بازنویسی خودکار نامه‌ها استفاده می‌کند. با
                استفاده از این ابزار:
              </p>
              <ul className="space-y-2 mr-6">
                <li>• شما مسئولیت محتوای نهایی نامه را دارید</li>
                <li>• باید محتوای بازنویسی شده را قبل از ارسال بررسی کنید</li>
                <li>• AI ممکن است خطا داشته باشد - همیشه محتوا را چک کنید</li>
                <li>• ما مسئولیتی در قبال خطاهای AI نداریم</li>
              </ul>

              <p className="text-md text-gray-600 italic mt-4">
                The site uses OpenAI for automatic text rewriting. By using this
                tool, you are responsible for the final content, must review the
                rewritten text before sending, acknowledge that AI may contain
                errors, and understand that we are not liable for AI-generated
                mistakes.
              </p>
            </div>
          </section>

          {/* Section 6 - Disclaimer */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۶. سلب مسئولیت
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              6. Disclaimer
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <p className="text-lg font-bold mb-3">
                  ⚠️ خدمات "همان‌گونه که هست" (AS IS) ارائه می‌شود:
                </p>
                <ul className="space-y-2 mr-4">
                  <li>
                    • ما تضمینی برای دریافت یا پاسخگویی نمایندگان نمی‌دهیم
                  </li>
                  <li>• مسئولیت محتوای نامه کاملاً بر عهده شماست</li>
                  <li>• ما واسطه هستیم، نه نماینده قانونی شما</li>
                  <li>• این سایت مشاوره حقوقی ارائه نمی‌دهد</li>
                  <li>• نتایج قابل تضمین نیست</li>
                </ul>
              </div>

              <p className="text-md text-gray-600 italic mt-4">
                Services are provided "AS IS" without warranties. We do not
                guarantee that representatives will receive or respond to
                letters. You are solely responsible for letter content. We are
                an intermediary, not your legal representative. This site does
                not provide legal advice. Results cannot be guaranteed.
              </p>
            </div>
          </section>

          {/* Section 7 - Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۷. محدودیت مسئولیت
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              7. Limitation of Liability
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                iranwing.com و تیم آن در قبال موارد زیر مسئولیتی ندارند:
              </p>
              <ul className="space-y-2 mr-6">
                <li>• خسارات مستقیم، غیرمستقیم یا تبعی ناشی از استفاده</li>
                <li>• از دست دادن داده، سود یا فرصت</li>
                <li>• قطعی خدمات یا خطاهای فنی</li>
                <li>• محتوای تولید شده توسط AI</li>
                <li>• اقدامات یا واکنش نمایندگان</li>
                <li>• نتایج سیاسی یا حقوقی</li>
              </ul>

              <p className="text-md text-gray-600 italic mt-4">
                iranwing.com and its team are not liable for: direct, indirect,
                or consequential damages from use; loss of data, profit, or
                opportunity; service interruptions or technical errors;
                AI-generated content; actions or reactions of representatives;
                political or legal outcomes.
              </p>
            </div>
          </section>

          {/* Section 8 - Intellectual Property */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۸. مالکیت معنوی
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              8. Intellectual Property
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                تمام محتوای سایت (طراحی، کد، قالب‌ها، متن) متعلق به iranwing.com
                است. شما مجازید:
              </p>
              <ul className="space-y-2 mr-6 text-green-700">
                <li>✓ از قالب‌های نامه برای استفاده شخصی استفاده کنید</li>
                <li>✓ محتوا را ویرایش و شخصی‌سازی کنید</li>
              </ul>
              <p className="text-lg mt-4">شما مجاز نیستید:</p>
              <ul className="space-y-2 mr-6 text-red-700">
                <li>✗ کد یا طراحی سایت را کپی کنید</li>
                <li>✗ محتوا را بدون اجازه در جای دیگر منتشر کنید</li>
                <li>✗ سایت مشابه با محتوای ما بسازید</li>
              </ul>

              <p className="text-md text-gray-600 italic mt-4">
                All site content (design, code, templates, text) belongs to
                iranwing.com. You may use letter templates for personal use and
                edit/customize content. You may not copy site code or design,
                republish content without permission, or create a similar site
                with our content.
              </p>
            </div>
          </section>

          {/* Section 9 - Changes to Terms */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۹. تغییرات در شرایط
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              9. Changes to Terms
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                ما ممکن است این شرایط را در هر زمان تغییر دهیم. تغییرات با
                انتشار در این صفحه اعمال می‌شود. استفاده مستمر شما از سایت به
                معنای پذیرش شرایط جدید است.
              </p>
              <p className="text-md text-gray-600 italic">
                We may change these terms at any time. Changes will be effective
                upon posting on this page. Your continued use of the site
                constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* Section 10 - Governing Law */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۱۰. قانون حاکم
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              10. Governing Law
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                این شرایط تحت قوانین جمهوری فدرال آلمان و اتحادیه اروپا اداره
                می‌شود. هر گونه اختلاف در دادگاه‌های صلاحیت‌دار آلمان حل و فصل
                خواهد شد.
              </p>
              <p className="text-md text-gray-600 italic">
                These terms are governed by the laws of the Federal Republic of
                Germany and the European Union. Any disputes will be resolved in
                the competent courts of Germany.
              </p>
            </div>
          </section>

          {/* Section 11 - Termination */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۱۱. قطع خدمات
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              11. Termination
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                ما حق داریم دسترسی شما را در صورت نقض این شرایط، بدون اطلاع
                قبلی، محدود یا قطع کنیم. شما می‌توانید در هر زمان از استفاده
                سایت خودداری کنید.
              </p>
              <p className="text-md text-gray-600 italic">
                We reserve the right to limit or terminate your access if you
                violate these terms, without prior notice. You may stop using
                the site at any time.
              </p>
            </div>
          </section>

          {/* Section 12 - Contact */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ۱۲. تماس با ما
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              12. Contact Us
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                اگر سوالی درباره این شرایط دارید، با ما تماس بگیرید:
              </p>
              <p className="text-md text-gray-600 italic">
                If you have questions about these terms, contact us:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
       
                <p>
                  <strong>صفحه تماس / Contact Page:</strong>{" "}
                  <a href="/contact" className="text-blue-600 hover:underline">
                    iranwing.com/contact
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-3xl font-bold mb-2">
            با پذیرش این شرایط، می‌توانید از سایت استفاده کنید
          </h2>
          <p className="text-2xl font-bold mb-4">
            By accepting these terms, you may use the site
          </p>
          <p className="text-lg mb-6">
            استفاده از سایت به معنای پذیرش کامل این شرایط است
          </p>
          <p className="text-md mb-6 italic">
            Using the site constitutes full acceptance of these terms
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            بازگشت به صفحه اصلی / Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
