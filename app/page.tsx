"use client";

import {
  ChevronRight,
  FileText,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function EmailSelector() {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState("en");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [userName, setUserName] = useState("");
  const [emailData, setEmailData] = useState({ to: "", subject: "", body: "" });

  // Data from JSON files
  const [countries, setCountries] = useState<any>({});
  const [states, setStates] = useState<any>({});
  const [templates, setTemplates] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRewriting, setIsRewriting] = useState(false);

  // Load JSON data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Load all JSON files
        const [countriesRes, statesRes, templatesRes] = await Promise.all([
          fetch("/data/countries.json"),
          fetch("/data/states.json"),
          fetch("/data/templates.json"),
        ]);

        if (!countriesRes.ok || !statesRes.ok || !templatesRes.ok) {
          throw new Error("Failed to load data files");
        }

        const countriesData = await countriesRes.json();
        const statesData = await statesRes.json();
        const templatesData = await templatesRes.json();

        setCountries(countriesData);
        setStates(statesData);
        setTemplates(templatesData);
        setError(null);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setSelectedState("");
    setSelectedTemplate("");
    setStep(2);
  };

  const handleStateSelect = (stateCode: string) => {
    setSelectedState(stateCode);
    setSelectedTemplate("");
    const email = states[stateCode]?.email || "";
    setEmailData({ ...emailData, to: email });
    setStep(3);
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = templates[templateId];
    setEmailData({
      to: emailData.to,
      subject: template.subject,
      body: template.body,
    });
    setStep(4);
  };

  const handleRewrite = async () => {
    setIsRewriting(true);
    try {
      const response = await fetch("/api/rewrite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: emailData.body,
          language: language,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to rewrite text");
      }

      const data = await response.json();
      setEmailData({ ...emailData, body: data.rewrittenText });
    } catch (error) {
      console.error("Error rewriting text:", error);
      alert(
        language === "en"
          ? "Failed to rewrite text. Please try again."
          : language === "de"
            ? "Fehler beim Umschreiben des Textes. Bitte versuchen Sie es erneut."
            : "خطا در بازنویسی متن. لطفا دوباره تلاش کنید.",
      );
    } finally {
      setIsRewriting(false);
    }
  };

  const handleSendEmail = (service: string) => {
    let url;
    const bodyWithName = userName
      ? `${emailData.body}\n\n${userName}`
      : emailData.body;

    switch (service) {
      case "gmail":
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailData.to)}&su=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(bodyWithName)}`;
        window.open(url, "_blank");
        break;
      case "outlook":
        url = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(emailData.to)}&subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(bodyWithName)}`;
        window.open(url, "_blank");
        break;
      case "yahoo":
        url = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(emailData.to)}&subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(bodyWithName)}`;
        window.open(url, "_blank");
        break;
      case "default":
        url = `mailto:${encodeURIComponent(emailData.to)}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(bodyWithName)}`;
        const link = document.createElement("a");
        link.href = url;
        link.click();
        break;
    }
  };

  // Get available states for selected country
  const availableStates =
    selectedCountry && countries[selectedCountry]
      ? countries[selectedCountry].states.map((stateCode: string) => ({
          code: stateCode,
          ...states[stateCode],
        }))
      : [];

  // Get available templates for selected state
  const availableTemplates =
    selectedState && states[selectedState]
      ? states[selectedState].templates.map((templateId: string) => ({
          id: templateId,
          ...templates[templateId],
        }))
      : [];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 max-w-md">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Error Loading Data
            </h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <p className="text-sm text-gray-500">
              Please ensure JSON files are in /public/data/ folder:
            </p>
            <ul className="text-sm text-gray-500 mt-2">
              <li>• countries.json</li>
              <li>• states.json</li>
              <li>• templates.json</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <div className="mb-6 flex justify-end gap-2">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              language === "en"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-300 hover:border-blue-400"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("de")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              language === "de"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-300 hover:border-blue-400"
            }`}
          >
            Deutsch
          </button>
          <button
            onClick={() => setLanguage("fa")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              language === "fa"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-300 hover:border-blue-400"
            }`}
          >
            فارسی
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {language === "en" && " Send Email to State Representatives"}
                  {language === "de" && "E-Mail an Landesvertreter senden"}
                  {language === "fa" && "ارسال ایمیل به نمایندگان ایالتی"}
                </h1>
                <p className="text-blue-100 text-sm mt-1">
                  {language === "en" && `Step ${step} of 4`}
                  {language === "de" && `Schritt ${step} von 4`}
                  {language === "fa" && `مرحله ${step} از 4`}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-100 h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Step 1: Country Selection */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {language === "en" && "Select Country"}
                    {language === "de" && "Land auswählen"}
                    {language === "fa" && "انتخاب کشور"}
                  </h2>
                </div>

                {Object.entries(countries).map(
                  ([code, country]: [string, any]) => (
                    <button
                      key={code}
                      onClick={() => handleCountrySelect(code)}
                      className="w-full p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-800">
                          {country.name[language]}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  ),
                )}
              </div>
            )}

            {/* Step 2: State Selection */}
            {step === 2 && selectedCountry && (
              <div className="space-y-4">
                <button
                  onClick={() => setStep(1)}
                  className="text-sm text-blue-600 hover:text-blue-700 mb-4"
                >
                  {language === "en" && "← Back to Country"}
                  {language === "de" && "← Zurück zum Land"}
                  {language === "fa" && "→ بازگشت به کشور"}
                </button>

                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {language === "en" && "Select State"}
                    {language === "de" && "Bundesland auswählen"}
                    {language === "fa" && "انتخاب ایالت"}
                  </h2>
                </div>

                {availableStates.map((state: any) => (
                  <button
                    key={state.code}
                    onClick={() => handleStateSelect(state.code)}
                    className="w-full p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">
                          {state.name?.[language] || state.code}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {state.email}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Template Selection */}
            {step === 3 && selectedState && (
              <div className="space-y-4">
                <button
                  onClick={() => setStep(2)}
                  className="text-sm text-blue-600 hover:text-blue-700 mb-4"
                >
                  {language === "en" && "← Back to State"}
                  {language === "de" && "← Zurück zum Bundesland"}
                  {language === "fa" && "→ بازگشت به ایالت"}
                </button>

                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {language === "en" && "Select Email Template"}
                    {language === "de" && " E-Mail-Vorlage auswählen"}
                    {language === "fa" && "انتخاب محتوای ایمیل"}
                  </h2>
                </div>

                {availableTemplates.map((template: any) => (
                  <button
                    key={template.id}
                    onClick={() => handleTemplateSelect(template.id)}
                    className="w-full p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-800">
                          {template.subject || template.id}
                        </div>
                        <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {template.body || ""}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 4: Review and Send */}
            {step === 4 && selectedTemplate && (
              <div className="space-y-6">
                <button
                  onClick={() => setStep(3)}
                  className="text-sm text-blue-600 hover:text-blue-700 mb-4"
                >
                  {language === "en" && "← Back to Templates"}
                  {language === "de" && "← Zurück zu Vorlagen"}
                  {language === "fa" && "→ بازگشت به الگوها"}
                </button>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900 mb-2">
                    {language === "en" && "Note: AI Rewriting"}
                    {language === "de" && "Hinweis: KI-Umschreibung"}
                    {language === "fa" && "توجه: بازنویسی با هوش مصنوعی"}
                  </p>
                  <p className="text-sm text-blue-800">
                    {language === "en" &&
                      "In the future, this content will be rewritten by ChatGPT API before sending to ensure uniqueness."}
                    {language === "de" &&
                      "In Zukunft wird dieser Inhalt vor dem Senden von der ChatGPT-API umgeschrieben, um Einzigartigkeit zu gewährleisten."}
                    {language === "fa" &&
                      "در آینده، این محتوا قبل از ارسال توسط ChatGPT بازنویسی خواهد شد تا منحصر به فرد باشد."}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {language === "en" && "Your Full Name"}
                    {language === "de" && "Ihr vollständiger Name"}
                    {language === "fa" && "نام کامل شما"}
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder={
                      language === "en"
                        ? "Enter your full name"
                        : language === "de"
                          ? "Geben Sie Ihren vollständigen Namen ein"
                          : "نام کامل خود را وارد کنید"
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {language === "en" && "To"}
                    {language === "de" && "An"}
                    {language === "fa" && "گیرنده"}
                  </label>
                  <input
                    type="email"
                    value={emailData.to}
                    readOnly
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {language === "en" && "Subject"}
                    {language === "de" && "Betreff"}
                    {language === "fa" && "موضوع"}
                  </label>
                  <input
                    type="text"
                    value={emailData.subject}
                    onChange={(e) =>
                      setEmailData({ ...emailData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      {language === "en" && "Message"}
                      {language === "de" && "Nachricht"}
                      {language === "fa" && "پیام"}
                    </label>
                    <button
                      onClick={handleRewrite}
                      disabled={isRewriting || !emailData.body}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-sm"
                    >
                      {isRewriting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {language === "en" && "Rewriting..."}
                          {language === "de" && "Umschreiben..."}
                          {language === "fa" && "در حال بازنویسی..."}
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                          {language === "en" && "Rewrite with AI"}
                          {language === "de" && "Mit KI umschreiben"}
                          {language === "fa" && "بازنویسی با هوش مصنوعی"}
                        </>
                      )}
                    </button>
                  </div>
                  <textarea
                    value={emailData.body}
                    onChange={(e) =>
                      setEmailData({ ...emailData, body: e.target.value })
                    }
                    rows={10}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-sm font-semibold text-gray-700">
                    {language === "en" && "Send via"}
                    {language === "de" && "Senden über"}
                    {language === "fa" && "ارسال از طریق"}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      onClick={() => handleSendEmail("gmail")}
                      className="group px-5 py-3.5 bg-white border-2 border-red-500 rounded-xl font-semibold text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Gmail
                    </button>

                    <button
                      onClick={() => handleSendEmail("outlook")}
                      className="group px-5 py-3.5 bg-white border-2 border-blue-600 rounded-xl font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Outlook
                    </button>

                    <button
                      onClick={() => handleSendEmail("yahoo")}
                      className="group px-5 py-3.5 bg-white border-2 border-purple-600 rounded-xl font-semibold text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Yahoo Mail
                    </button>

                    <button
                      onClick={() => handleSendEmail("default")}
                      className="group px-5 py-3.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Default
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
