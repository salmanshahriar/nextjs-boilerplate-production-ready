"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react"
import { useAuth } from "@/lib/auth/auth-context"
import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslations } from "@/lib/i18n/get-translations"
import { useTranslations } from "@/lib/i18n/use-translations"
import { ThemeToggle } from "../theme-toggle"
import LanguageSwitcher from "../language-switcher"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [collapsed, setCollapsed] = React.useState(false)
  const { user, logout } = useAuth()
  const { locale } = useLanguage()
  const pathname = usePathname()
  const messages = getTranslations(locale)
  const { t } = useTranslations(messages)
  const isRtl = locale === "ar"

  React.useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed")
    if (saved !== null) {
      setCollapsed(JSON.parse(saved))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed))
  }, [collapsed])

  const userTitle =
    user?.role === "admin" ? t("sidebar.adminPanel") : t("sidebar.userPanel")

  const menuItems = [
    {
      label: t("navigation.dashboard"),
      href: "/dashboard",
      icon: LayoutDashboard,
    },
  ]

  const SidebarContent = ({
    onItemClick,
    isCollapsed,
  }: {
    onItemClick?: () => void
    isCollapsed?: boolean
  }) => (
    <div
      className={cn(
        "flex h-full flex-col bg-background",
        isRtl && "text-right"
      )}
    >
      <div
        className={cn(
          "flex items-center border-b border-border transition-all",
          isCollapsed ? "h-14 justify-center px-2" : "h-14 px-4"
        )}
      >
        <Link
          href="/"
          onClick={onItemClick}
          className={cn(
            "flex items-center gap-2 font-bold text-primary transition-all",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          <Globe className="h-5 w-5 shrink-0" />
          {!isCollapsed && (
            <div className="flex flex-col text-md leading-tight font-semibold whitespace-nowrap">
              Next.js Boilerplate
            </div>
          )}
        </Link>
      </div>

      {!isCollapsed && user && (
        <div className="border-b border-border px-3 py-2.5 flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-primary truncate">
              {userTitle}
            </div>
            <div className="text-[10px] text-muted-foreground truncate mt-0.5">
              {user.email}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 shrink-0 hover:bg-accent/60"
            onClick={() => setCollapsed(true)}
          >
            {isRtl ? (
              <ChevronRight className="h-3.5 w-3.5" />
            ) : (
              <ChevronLeft className="h-3.5 w-3.5" />
            )}
            <span className="sr-only">Collapse sidebar</span>
          </Button>
        </div>
      )}

      <nav className="flex-1 space-y-1 px-2 py-3 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          const content = (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-all",
                "hover:bg-accent hover:text-accent-foreground",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground",
                isCollapsed && "justify-center px-2"
              )}
            >
              <Icon
                className={cn("h-4 w-4 shrink-0", isCollapsed && "mx-auto")}
              />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          )

          if (isCollapsed) {
            return (
              <TooltipProvider key={item.href} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>{content}</TooltipTrigger>
                  <TooltipContent side={isRtl ? "left" : "right"}>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          }

          return content
        })}
      </nav>

      <div className="border-t border-border bg-muted/30">
        <div className="p-2">
          {isCollapsed ? (
            <div className="space-y-0.5">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center py-1.5">
                      <ThemeToggle />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side={isRtl ? "left" : "right"}>
                    <p>{t("sidebar.theme")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center py-1.5">
                      <LanguageSwitcher />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side={isRtl ? "left" : "right"}>
                    <p>{t("sidebar.language")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <ThemeToggle variant="titled" title={t("sidebar.theme")} />

              <LanguageSwitcher
                variant="titled"
                title={t("sidebar.language")}
              />
            </div>
          )}
        </div>

        <div className="h-px bg-border mx-2" />

        <div className="p-2 space-y-0.5">
          {isCollapsed ? (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="w-full h-8"
                    onClick={() => {
                      logout()
                      onItemClick?.()
                    }}
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span className="sr-only">{t("navigation.logout")}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side={isRtl ? "left" : "right"}>
                  <p>{t("navigation.logout")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button
              variant="destructive"
              size="sm"
              className="w-full justify-start gap-2 h-8 text-[11px] font-medium"
              onClick={() => {
                logout()
                onItemClick?.()
              }}
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>{t("navigation.logout")}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Burger Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">{t("sidebar.menu")}</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side={isRtl ? "right" : "left"}
            className="w-[240px] p-0"
          >
            <SidebarContent onItemClick={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex fixed left-0 top-0 h-screen flex-col border-r border-border bg-background z-40 transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-56"
        )}
      >
        <SidebarContent isCollapsed={collapsed} />

        {collapsed && (
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-50">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full border-2 border-background shadow-md"
              onClick={() => setCollapsed(false)}
            >
              {isRtl ? (
                <ChevronLeft className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
              <span className="sr-only">Expand sidebar</span>
            </Button>
          </div>
        )}
      </aside>
    </>
  )
}
