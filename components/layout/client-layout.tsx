"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/layout/header"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()

  const protectedRoutes = ["/dashboard"]
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname?.startsWith(route)
  )

  const showHeader = !isProtectedRoute

  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  )
}
