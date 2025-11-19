"use client";

import { useAuth } from "@/lib/auth/auth-context";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useLanguage } from "@/lib/i18n/language-context";
import { getTranslations } from "@/lib/i18n/get-translations";
import { useTranslations } from "@/lib/i18n/use-translations";
import { HeadManager } from "@/components/common/head-manager";

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const { locale } = useLanguage();
  const messages = getTranslations(locale);
  const { t } = useTranslations(messages);

  return (
    <>
      <HeadManager
        title={`${t("dashboard.admin.title")} | ${t("common.appName")}`}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 md:pt-12 pt-20">
        <h1 className="text-3xl font-bold mb-8">
          {t("dashboard.admin.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("dashboard.admin.totalUsers")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("dashboard.admin.activeSessions")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("dashboard.admin.adminUsers")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("dashboard.admin.adminInfo")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {t("dashboard.admin.loggedInAs")}: {user?.email}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("dashboard.admin.adminOnly")}
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
