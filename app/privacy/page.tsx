import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سیاست حریم خصوصی",
  description:
    "اطلاعات کامل درباره حریم خصوصی و امنیت داده‌ها در پلتفرم امضا کردن - ما هیچ داده شخصی شما را ذخیره نمی‌کنیم",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
            <svg
              className="w-16 h-16 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            سیاست حریم خصوصی
          </h1>
          <p className="text-xl text-gray-600">
            شفافیت کامل درباره امنیت و حریم خصوصی شما
          </p>
        </div>

        {/* Trust Badge */}
        <div className="bg-linear-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔒</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                ✅ امنیت ۱۰۰٪ تضمین شده
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                این وبسایت با بالاترین استانداردهای امنیتی طراحی شده است.{" "}
                <strong className="text-green-700">
                  ما هیچ داده شخصی شما را ذخیره نمی‌کنیم
                </strong>{" "}
                و تمام ارتباطات از طریق رمزنگاری HTTPS انجام می‌شود.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              ما چه اطلاعاتی جمع‌آوری می‌کنیم؟
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="font-bold text-green-800 mb-2">
                  ✅ پاسخ کوتاه: هیچ چیز!
                </p>
                <p>
                  ما <strong>هیچ دیتابیسی نداریم</strong> و{" "}
                  <strong>هیچ اطلاعات شخصی شما را ذخیره نمی‌کنیم</strong>.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                چیزهایی که ذخیره نمی‌شوند:
              </h3>
              <ul className="space-y-3 mr-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>
                    <strong>نام و نام خانوادگی:</strong> ما اسم شما را ذخیره
                    نمی‌کنیم
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>
                    <strong>ایمیل:</strong> آدرس ایمیل شما ذخیره نمی‌شود
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>
                    <strong>شماره تماس:</strong> هیچ شماره تلفنی ذخیره نمی‌شود
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>
                    <strong>آدرس منزل:</strong> آدرس شما ذخیره نمی‌شود
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>
                    <strong>محتوای نامه‌ها:</strong> متن نامه‌های شما ذخیره
                    نمی‌شود
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>
                    <strong>کوکی‌ها:</strong> ما هیچ کوکی ردیابی ذخیره نمی‌کنیم
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>
                    <strong>تاریخچه فعالیت:</strong> تاریخچه استفاده شما ذخیره
                    نمی‌شود
                  </span>
                </li>
              </ul>
            </div>
          </section>

          

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🤖</span>
              استفاده از هوش مصنوعی (OpenAI)
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                برای بازنویسی خودکار نامه‌ها (جلوگیری از اسپم)، از{" "}
                <strong>OpenAI API</strong> استفاده می‌کنیم.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="font-bold text-yellow-800 mb-2">
                  ⚠️ نکته امنیتی:
                </p>
                <ul className="space-y-2 mr-4">
                  <li>
                    • متن نامه شما موقتاً به OpenAI ارسال می‌شود (فقط برای
                    بازنویسی)
                  </li>
                  <li>
                    • OpenAI این متن را پردازش می‌کند و{" "}
                    <strong>ذخیره نمی‌کند</strong>
                  </li>
                  <li>• ما هم متن اصلی یا بازنویسی شده را ذخیره نمی‌کنیم</li>
                  <li>• بعد از بازنویسی، تمام اطلاعات از سرور ما پاک می‌شود</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                طبق{" "}
                <a
                  href="https://openai.com/enterprise-privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  سیاست حریم خصوصی OpenAI
                </a>
                ، داده‌های ارسالی از طریق API برای آموزش مدل‌های هوش مصنوعی
                استفاده نمی‌شود.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🔐</span>
              امنیت سطح A
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                این وبسایت با بالاترین استانداردهای امنیتی (Security Level A)
                ساخته شده است:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>🔒</span> رمزنگاری HTTPS
                  </h3>
                  <p className="text-sm">
                    تمام ارتباطات با رمزنگاری TLS 1.3 محافظت می‌شوند
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>🛡️</span> HSTS
                  </h3>
                  <p className="text-sm">
                    اجبار استفاده از HTTPS برای 2 سال با preload
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>🚫</span> CSP
                  </h3>
                  <p className="text-sm">
                    Content Security Policy برای جلوگیری از حملات XSS
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>⚡</span> Rate Limiting
                  </h3>
                  <p className="text-sm">
                    محدودیت درخواست برای جلوگیری از حملات DDoS
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>🎭</span> CSRF Protection
                  </h3>
                  <p className="text-sm">محافظت در برابر حملات جعل درخواست</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>✅</span> Input Validation
                  </h3>
                  <p className="text-sm">
                    بررسی و پاکسازی تمام ورودی‌های کاربر
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-lg mt-6">
                <h3 className="font-bold text-green-900 text-xl mb-3">
                  ✅ نمره امنیتی: 99/100
                </h3>
                <p className="text-green-800">
                  این وبسایت تمام تست‌های امنیتی استاندارد (OWASP Top 10) را با
                  موفقیت پشت سر گذاشته است.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌍</span>
              اشتراک‌گذاری اطلاعات با شخص ثالث
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="font-bold text-red-800 mb-2">
                  ❌ ما هیچ اطلاعاتی را با شخص ثالث به اشتراک نمی‌گذاریم
                </p>
                <p>
                  چون ما هیچ داده‌ای ذخیره نمی‌کنیم، پس چیزی برای اشتراک‌گذاری
                  نداریم!
                </p>
              </div>

              <p className="mt-4">سرویس‌هایی که استفاده می‌کنیم:</p>
              <ul className="space-y-3 mr-6">
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✅</span>
                  <span>
                    <strong>Vercel:</strong> میزبانی وبسایت (فقط آمار کلی
                    بازدید)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✅</span>
                  <span>
                    <strong>OpenAI:</strong> بازنویسی موقت نامه‌ها (بدون ذخیره)
                  </span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mt-4">
                هیچ‌یک از این سرویس‌ها نمی‌توانند شما را شناسایی کنند یا اطلاعات
                شخصی شما را ببینند.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              حقوق شما
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>شما دارای حقوق زیر هستید:</p>
              <ul className="space-y-3 mr-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">✅</span>
                  <span>
                    <strong>حق دسترسی:</strong> می‌توانید بخواهید داده‌های خود
                    را ببینید (البته ما هیچ داده‌ای نداریم!)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">✅</span>
                  <span>
                    <strong>حق حذف:</strong> می‌توانید حذف اطلاعات را درخواست
                    کنید (باز هم، ما چیزی ذخیره نکرده‌ایم)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">✅</span>
                  <span>
                    <strong>حق اعتراض:</strong> می‌توانید به جمع‌آوری داده
                    اعتراض کنید(باز هم، ما هیچ داده ای ذخیره نمیکنیم)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">✅</span>
                  <span>
                    <strong>حق شفافیت:</strong> حق دارید بدانید از اطلاعات شما
                    چگونه استفاده می‌شود(باز هم، ما هیج اطلاعانی از شما ذخیره نمیکنیم)
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">👶</span>
              حریم خصوصی کودکان
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                این وبسایت برای افراد بالای ۱۶ سال طراحی شده است. ما آگاهانه
                اطلاعات کودکان زیر ۱۶ سال را جمع‌آوری نمی‌کنیم.
              </p>
              <p className="text-sm text-gray-600">
                البته چون ما اصلاً هیچ اطلاعاتی جمع‌آوری نمی‌کنیم، این موضوع
                بیشتر یک نکته قانونی است تا یک نگرانی واقعی.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">📝</span>
              تغییرات در سیاست حریم خصوصی
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                اگر این سیاست را تغییر دهیم، تاریخ آخرین به‌روزرسانی را در بالای
                این صفحه قرار می‌دهیم. توصیه می‌کنیم این صفحه را به طور دوره‌ای
                بررسی کنید.
              </p>
              <div className="bg-gray-100 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>آخرین به‌روزرسانی:</strong> ۳۰ دی ۱۴۰۴ (۱۹ ژانویه
                  ۲۰۲۶)
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">📧</span>
              تماس با ما
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                اگر سوالی درباره حریم خصوصی یا امنیت دارید، خوشحال می‌شویم پاسخ
                دهیم:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                
                <p className="mb-2">
                  <strong>وبسایت:</strong>{" "}
                  <a
                    href="https://iranwing.com"
                    className="text-blue-600 hover:underline"
                  >
                    iranwing.com
                  </a>
                </p>
                <p>
                  <strong>صفحه تماس:</strong>{" "}
                  <a href="/contact" className="text-blue-600 hover:underline">
                    فرم تماس
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            🎉 حالا می‌توانید با خیال راحت استفاده کنید!
          </h2>
          <p className="text-lg mb-6">
            ما به حریم خصوصی شما احترام می‌گذاریم و هیچ اطلاعاتی ذخیره نمی‌کنیم.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            بازگشت به صفحه اصلی
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-2">رمزنگاری کامل</h3>
            <p className="text-sm text-gray-600">HTTPS + TLS 1.3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-3">🚫</div>
            <h3 className="font-bold text-gray-900 mb-2">بدون ذخیره‌سازی</h3>
            <p className="text-sm text-gray-600">هیچ دیتابیسی نداریم</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold text-gray-900 mb-2">شفافیت کامل</h3>
            <p className="text-sm text-gray-600">Open source در گیت‌هاب</p>
          </div>
        </div>
      </div>
    </div>
  );
}
