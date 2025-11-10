"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslations } from "@/lib/i18n/get-translations"
import { useTranslations } from "@/lib/i18n/use-translations"

export default function AboutPage() {
  const { locale } = useLanguage()
  const messages = getTranslations(locale)
  const { t } = useTranslations(messages)
  const isRtl = locale === "ar"

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-12 ${
        isRtl ? "text-right" : "text-left"
      }`}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          : )
        </h1>
      </div>
    </div>
  )
}
