import EmailSelector from "@/components/mail";
import { generateSEO, pageKeywords } from "@/lib/seo-utils";

// SEO Metadata for Bundestag page
export const metadata = generateSEO({
  title: "بوندستاگ - نمایندگان مجلس آلمان",
  description:
    "مشاهده لیست کامل نمایندگان بوندستاگ (مجلس آلمان) و ارسال نامه به نمایندگان. با استفاده از قالب‌های آماده، پیام خود را به نمایندگان مجلس برسانید.",
  keywords: pageKeywords.bundestag,
  canonical: "https://iranwing.com/bundestag",
});

export default function BundestagPage() {
  return (
    <main className="flex min-h-screen min-w-full max-w-full flex-col items-center justify-between pt-12 px-4">
      <EmailSelector />
    </main>
  );
}
