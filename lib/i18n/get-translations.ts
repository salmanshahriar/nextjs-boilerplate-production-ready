import type { Locale } from "./types"
import type { TranslationKeys } from "./types"
import enTranslations from "@/locales/en.json"
import bnTranslations from "@/locales/bn.json"
import arTranslations from "@/locales/ar.json"

// Translation files mapping
const translations = {
  en: enTranslations,
  bn: bnTranslations,
  ar: arTranslations,
} as const

export type Messages = typeof enTranslations

/**
 * Get translations for a specific locale
 * @param locale - The locale to get translations for
 * @returns Translation messages for the locale
 */
export function getTranslations(locale: Locale): Messages {
  return translations[locale] || translations.bn
}

/**
 * Get nested value from an object using dot notation path
 * @param obj - The object to search in
 * @param path - Dot notation path (e.g., "common.welcome")
 * @returns The value at the path or the path itself if not found
 */
export function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((current, prop) => current?.[prop], obj) || path
}

/**
 * Type-safe translation getter
 * @param messages - Translation messages object
 * @param key - Translation key in dot notation
 * @param defaultValue - Optional default value if key not found
 * @returns Translated string
 */
export function t(
  messages: Messages,
  key: TranslationKeys,
  defaultValue?: string
): string {
  const value = getNestedValue(messages, key)
  return typeof value === "string" ? value : defaultValue || key
}
