"use client"

import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth/auth-context"
import Header from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { user } = useAuth()
  const pathname = usePathname()


  const protectedRoutes = ["/dashboard"]
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname?.startsWith(route)
  )


  const showSidebar = user && isProtectedRoute

  const showHeader = !isProtectedRoute

  return (
    <div className="flex flex-col min-h-screen">
      {showHeader && <Header />}
      {showSidebar && <Sidebar />}
      <main className="flex-1 w-full">{children}</main>
    </div>
  )
}