"use client"

import type React from "react"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { useAuth } from "@/lib/auth/auth-context"

export default function ProtectedLayout({
  children,
  user,
  admin,
}: {
  children: React.ReactNode
  user: React.ReactNode
  admin: React.ReactNode
}) {
  const { user: currentUser } = useAuth()

  const content = currentUser?.role === "admin" ? admin : user

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 md:ml-0">{content || children}</main>
    </div>
  )
}
