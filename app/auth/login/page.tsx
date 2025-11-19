"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/auth-context";
import { useLanguage } from "@/lib/i18n/language-context";
import { getTranslations } from "@/lib/i18n/get-translations";
import { useTranslations } from "@/lib/i18n/use-translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import InputError from "@/components/ui/input-error";
import TextLink from "@/components/text-link";
import { HeadManager } from "@/components/common/head-manager";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();
  const { login, user, isLoading } = useAuth();
  const { locale } = useLanguage();
  const messages = getTranslations(locale);
  const { t } = useTranslations(messages);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (
    text: string,
    itemId: string,
  ): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const canResetPassword = true;

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/dashboard");
    }
  }, [user, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoggingIn(true);

    if (!email || !password) {
      setError(t("auth.login.fillAllFields"));
      setIsLoggingIn(false);
      return;
    }

    try {
      await login(email, password);
    } catch {
      setError(t("auth.login.invalidCredentials"));
      setPassword("");
      setIsLoggingIn(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div>{t("common.loading")}</div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <>
      <HeadManager
        title={`${t("navigation.login")} | ${t("common.appName")}`}
      />
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{t("auth.login.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-4 sm:gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("auth.login.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    autoFocus
                    tabIndex={1}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                  />
                  <InputError message={error && !password ? error : ""} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">{t("auth.login.password")}</Label>
                  <PasswordInput
                    id="password"
                    required
                    tabIndex={2}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("auth.login.passwordPlaceholder")}
                  />
                  <InputError message={error && password ? error : ""} />
                </div>

                {canResetPassword && (
                  <TextLink
                    href="/password-reset"
                    className="ml-auto text-xs text-primary sm:text-sm"
                    tabIndex={4}
                  >
                    {t("auth.login.forgotPassword")}
                  </TextLink>
                )}

                <Button type="submit" tabIndex={3} disabled={isLoggingIn}>
                  {t("auth.login.submit")}
                </Button>
              </div>
            </form>

            <div className="bg-muted p-4 rounded-lg space-y-2 mt-4 max-w-md">
              <p className="text-sm font-medium">Test Credentials:</p>
              <div className="text-xs space-y-2">
                <div>
                  <div className="flex items-center justify-around">
                    <p className="font-semibold">Admin:</p>
                    <div className="flex items-center">
                      <span className="text-muted-foreground">Email:</span>
                      <code className="ml-1 bg-background px-2 py-0.5 rounded border">
                        admin@test.com
                      </code>
                      <button
                        onClick={() =>
                          copyToClipboard("admin@test.com", "admin-email")
                        }
                        className="ml-2 p-1 hover:bg-accent rounded transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedItem === "admin-email" ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-muted-foreground">Pass:</span>
                      <code className="ml-1 bg-background px-2 py-0.5 rounded border">
                        12345
                      </code>
                      <button
                        onClick={() => copyToClipboard("12345", "admin-pass")}
                        className="ml-2 p-1 hover:bg-accent rounded transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedItem === "admin-pass" ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-around">
                    <p className="font-semibold">User:</p>
                    <div className="flex items-center">
                      <span className="text-muted-foreground">Email:</span>
                      <code className="ml-1 bg-background px-2 py-0.5 rounded border">
                        user@test.com
                      </code>
                      <button
                        onClick={() =>
                          copyToClipboard("user@test.com", "user-email")
                        }
                        className="ml-2 p-1 hover:bg-accent rounded transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedItem === "user-email" ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-muted-foreground">Pass:</span>
                      <code className="ml-1 bg-background px-2 py-0.5 rounded border">
                        12345
                      </code>
                      <button
                        onClick={() => copyToClipboard("12345", "user-pass")}
                        className="ml-2 p-1 hover:bg-accent rounded transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedItem === "user-pass" ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
