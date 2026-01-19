import Cards from "@/components/cards";
import { generateSEO, pageKeywords } from "@/lib/seo-utils";

// SEO Metadata for Germany page
export const metadata = generateSEO({
  title: "آلمان - ایالت‌ها و نمایندگان",
  description:
    "دسترسی به اطلاعات نمایندگان و مسئولان ایالت‌های مختلف آلمان. ارسال نامه به نمایندگان ایالتی و مسئولان محلی.",
  keywords: [
    ...pageKeywords.bundestag,
    "ایالت‌های آلمان",
    "نمایندگان ایالتی",
    "German states",
    "Bundesländer",
  ],
  canonical: "https://iranwing.com/germany",
});

export default function GermanyPage() {
  return (
    <main className="flex min-h-screen min-w-full max-w-full flex-col items-center justify-between pt-12 px-4">
      <Cards />
    </main>
  );
}
