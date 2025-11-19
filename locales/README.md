# i18n Translation Files

This directory contains all translation files organized by language.

## Structure

Each language has its own JSON file:
- `en.json` - English translations
- `bn.json` - Bengali translations  
- `ar.json` - Arabic translations

## Translation Namespaces

Translations are organized into logical namespaces:

- **common** - Common UI elements (buttons, labels, messages)
- **navigation** - Navigation menu items
- **auth** - Authentication related translations (login, logout)
- **dashboard** - Dashboard pages (admin and user)
- **hero** - Hero section content
- **about** - About page content
- **errors** - Error messages

## Adding New Translations

1. Add the translation key to all language files (`en.json`, `bn.json`, `ar.json`)
2. Add the key to the `TranslationKeys` type in `lib/i18n/types.ts`
3. Use the translation in your component using the `useTranslations` hook

## Example Usage

```tsx
import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslations } from "@/lib/i18n/get-translations"
import { useTranslations } from "@/lib/i18n/use-translations"

function MyComponent() {
  const { locale } = useLanguage()
  const messages = getTranslations(locale)
  const { t } = useTranslations(messages)
  
  return <h1>{t("common.welcome")}</h1>
}
```

## Type Safety

All translation keys are type-safe. TypeScript will autocomplete available keys and show errors for invalid keys.

