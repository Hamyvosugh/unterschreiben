"use client";

import CountryCards from "@/components/country-cards";

export default function MailPage() {
  return (
    <main>

    <div className="flex min-h-screen min-w-full max-w-full  flex-col items-center justify-between pt-12 px-4">
      
      <CountryCards onCountrySelect={(code) => console.log(code)} />
        </div>
    </main>
  );
}
