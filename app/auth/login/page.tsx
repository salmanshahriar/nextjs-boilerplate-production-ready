"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth/auth-context"
import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslations } from "@/lib/i18n/get-translations"
import { useTranslations } from "@/lib/i18n/use-translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const router = useRouter()
  const { login, user, isLoading } = useAuth()
  const { locale } = useLanguage()
  const messages = getTranslations(locale)
  const { t } = useTranslations(messages)

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/dashboard")
    }
  }, [user, isLoading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoggingIn(true)

    if (!email || !password) {
      setError(t("auth.login.fillAllFields"))
      setIsLoggingIn(false)
      return
    }

    try {
      await login(email, password)
    } catch (err) {
      setError(t("auth.login.invalidCredentials"))
      setIsLoggingIn(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div>{t("common.loading")}</div>
      </div>
    )
  }

  if (user) {
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{t("auth.login.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("auth.login.email")}
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("auth.login.emailPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("auth.login.password")}
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("auth.login.passwordPlaceholder")}
              />
            </div>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p className="text-sm font-medium">
                {t("auth.login.testCredentials")}:
              </p>
              <div className="text-xs space-y-1">
                <p>
                  <strong>{t("auth.login.admin")}:</strong> admin@test.com /
                  12345
                </p>
                <p>
                  <strong>{t("auth.login.user")}:</strong> user@test.com / 12345
                </p>
              </div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full">
              {t("auth.login.submit")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
