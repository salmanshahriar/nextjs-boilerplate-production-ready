"use client"

import type React from "react"

import type { Locale } from "@/lib/i18n/types"
import { createContext, useContext, useEffect, useState } from "react"
import { DEFAULT_LOCALE } from "@/lib/i18n/types"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null
    if (stored) {
      setLocaleState(stored)
    }
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {mounted ? children : <>{children}</>}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
