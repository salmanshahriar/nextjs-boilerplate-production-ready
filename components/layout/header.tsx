"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { getTranslations } from "@/lib/i18n/get-translations";
import { useTranslations } from "@/lib/i18n/use-translations";
import { useAuth } from "@/lib/auth/auth-context";
import LanguageSwitcher from "../language-switcher";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const { locale } = useLanguage();
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const messages = getTranslations(locale);
  const { t } = useTranslations(messages);
  const isRtl = locale === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          <div className="flex items-center z-10">
            <Link
              href="/"
              className={cn(
                "font-bold text-primary flex items-center gap-2.5",
                isRtl && "flex-row-reverse",
              )}
            >
              <Globe className="h-5 w-5 shrink-0" />
              <div className="flex flex-col text-lg leading-tight font-semibold whitespace-nowrap">
                Next.js Boilerplate
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === "/"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
            >
              {t("navigation.home")}
            </Link>
            <Link
              href="/about"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === "/about"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
            >
              {t("navigation.about")}
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname?.startsWith("/dashboard")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {t("navigation.dashboard")}
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-2 z-10">
            <div className="flex items-center gap-1 border-r border-border pr-2 mr-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            {user ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted/50">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-xs text-muted-foreground truncate max-w-[120px]">
                    {user.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={logout}
                >
                  {t("navigation.logout")}
                </Button>
              </div>
            ) : (
              <Link href="/auth/login">
                <Button size="sm" className="h-8 text-xs">
                  {t("navigation.login")}
                </Button>
              </Link>
            )}
          </div>

          <div className="flex md:hidden items-center gap-2 z-10">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === "/"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {t("navigation.home")}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === "/about"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {t("navigation.about")}
              </Link>
              {user && (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname?.startsWith("/dashboard")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                  )}
                >
                  {t("navigation.dashboard")}
                </Link>
              )}
            </nav>

            <div className="pt-3 border-t border-border">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted/50">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t("navigation.logout")}
                  </Button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    {t("navigation.login")}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
