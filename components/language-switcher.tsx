"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { type Locale, LOCALES } from "@/lib/i18n/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from "react";

const localeLabels: Record<Locale, string> = {
  bn: "বাংলা",
  en: "English",
  ar: "العربية",
};

interface LanguageSwitcherProps {
  variant?: "default" | "titled";
  title?: string;
}

export default function LanguageSwitcher({
  variant = "default",
  title = "Language",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    if (locale === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const dropdownMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            className={locale === loc ? "bg-accent" : ""}
          >
            <span>{localeLabels[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (variant === "titled") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="group flex items-center justify-between rounded-md px-2 hover:bg-accent/60 transition-all flex-1 w-full text-left border-0 bg-transparent cursor-pointer">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate">
                {title}
              </span>
            </div>
            <div className="flex items-center justify-center h-9 w-9">
              <Languages className="h-4 w-4" />
            </div>
            <span className="sr-only">Change language</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {LOCALES.map((loc) => (
            <DropdownMenuItem
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={locale === loc ? "bg-accent" : ""}
            >
              <span>{localeLabels[loc]}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return dropdownMenu;
}
