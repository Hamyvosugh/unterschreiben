'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function EmailDraftSender() {
  const [emailData, setEmailData] = useState({
    to: 'example@email.com',
    subject: 'موضوع پیشفرض ایمیل',
    body: `سلام،

این یک متن نمونه است که به صورت خودکار در بدنه ایمیل قرار می‌گیرد.

می‌توانید محتوا را ویرایش کنید و سپس ارسال کنید.

با تشکر`
  });

  const handleSendEmail = (service: string) => {
    let url;
    
    switch(service) {
      case 'gmail':
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailData.to)}&su=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
        window.open(url, '_blank');
        break;
      case 'outlook':
        url = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(emailData.to)}&subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
        window.open(url, '_blank');
        break;
      case 'yahoo':
        url = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(emailData.to)}&subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
        window.open(url, '_blank');
        break;
      case 'default':
        // برای mailto باید از تگ a استفاده کنیم
        url = `mailto:${encodeURIComponent(emailData.to)}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
        const link = document.createElement('a');
        link.href = url;
        link.click();
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">ارسال ایمیل سریع</h1>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Recipient */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                گیرنده:
              </label>
              <input
                type="email"
                value={emailData.to}
                onChange={(e) => setEmailData({...emailData, to: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="email@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                موضوع:
              </label>
              <input
                type="text"
                value={emailData.subject}
                onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="موضوع ایمیل"
              />
            </div>

            {/* Body */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                متن پیام:
              </label>
              <textarea
                value={emailData.body}
                onChange={(e) => setEmailData({...emailData, body: e.target.value})}
                rows={10}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="متن پیام شما..."
              />
            </div>

            {/* Send Buttons */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">انتخاب سرویس ایمیل:</p>
              
              {/* Gmail */}
              <button
                onClick={() => handleSendEmail('gmail')}
                className="w-full bg-white border-2 border-red-500 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Gmail
              </button>

              {/* Outlook */}
              <button
                onClick={() => handleSendEmail('outlook')}
                className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Outlook
              </button>

              {/* Yahoo */}
              <button
                onClick={() => handleSendEmail('yahoo')}
                className="w-full bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Yahoo Mail
              </button>

              {/* Default Email Client */}
              <button
                onClick={() => handleSendEmail('default')}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                کلاینت پیشفرض سیستم
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>نکته:</strong> سرویس ایمیل دلخواه خود را انتخاب کنید. draft آماده شده و فقط کافی است دکمه Send را بزنید.
            </p>
            <ul className="mt-2 text-xs text-gray-600 space-y-1 mr-4">
              <li>• Gmail, Outlook, Yahoo: در تب جدید باز می‌شود</li>
              <li>• کلاینت پیشفرض: برنامه ایمیل سیستم شما را باز می‌کند</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}