"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { getTranslations } from "@/lib/i18n/get-translations";
import { useTranslations } from "@/lib/i18n/use-translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const { locale } = useLanguage();
  const messages = getTranslations(locale);
  const { t } = useTranslations(messages);
  const isRtl = locale === "ar";

  const features = [
    {
      icon: "🌐",
      title: "i18next Multi-Language",
      description: t("home.features.typeSafe"),
      details: [
        "Type-safe translations",
        "3 languages: English, বাংলা, العربية",
        "RTL support",
      ],
    },
    {
      icon: "🔐",
      title: "Role-Based Access Control",
      description: t("home.features.rbac"),
      details: ["User & Admin roles", "Protected routes", "Parallel routes"],
    },
    {
      icon: "🚀",
      title: "Next.js + TypeScript + Tailwind",
      description: t("home.features.stack"),
      details: [
        "Next.js 15 + Eslint Setup",
        "TypeScript",
        "Tailwind CSS + shadcn/ui",
      ],
    },
    {
      icon: "🎨",
      title: "Theme & Design",
      description: t("home.features.ui-experience"),
      details: ["Light/Dark/System modes", "Responsive design", "Tailwind CSS"],
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: t("home.features.seo"),
      details: ["Dynamic metadata", "Detailed SEO", "Performance optimized"],
    },
    {
      icon: "👨‍💻",
      title: "Built by Salman Shahriar",
      description: "",
      details: [],
    },
  ];

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-12 ${
        isRtl ? "text-right" : "text-left"
      }`}
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Next.js Production-Ready Boilerplate
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-2">{feature.icon}</div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {feature.description && (
                <p className="text-sm text-muted-foreground mb-3">
                  {feature.description}
                </p>
              )}
              {feature.details.length > 0 ? (
                <ul className="space-y-1">
                  {feature.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className="text-primary">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://github.com/salmanshahriar/nextjs-boilerplate-production-ready"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    💻 Source code (GitHub)
                  </a>
                  <a
                    href="https://salmanshahriar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    🌐 My Website
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
