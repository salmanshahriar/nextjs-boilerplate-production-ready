<div align="center">
<h1>Next.js Production-Ready Boilerplate</h1>
<p><strong>Ship in days, not weeks.</strong> One config. i18n, RBAC, Google OAuth, SEO & More (ready to go).</p>
</div>
<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1.11-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/salmanshahriar/nextjs-boilerplate-production-ready?style=social)](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/stargazers)

[**Live Demo** ↗](https://nextjs-boilerplate-production-ready.vercel.app/) · [**Use this template** ↗](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/generate) · [Report Bug ↗](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues) · [Request Feature ↗](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues)

<img src="https://nextjs-boilerplate-production-ready.vercel.app/og-image.webp" alt="Next.js Production-Ready Boilerplate" width="720" />

</div>

---

## Motivation

Most Next.js starters leave you wiring from scratch. This boilerplate prioritizes **app-ready defaults**: one central config, type-safe i18n with RTL, role-based access, optional Google sign-in, and full SEO (sitemap, robots, manifest). Clone, edit one JSON file, and ship.

## Integrated features

### Boilerplate

With this template you get:

- [Next.js 15](https://nextjs.org/) - App Router, Server Components, recommended stable 15.x
- [TypeScript](https://www.typescriptlang.org/) - Strict mode for type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) - Accessible, customizable components (Radix + CVA)
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode with system preference and manual toggle
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) - Lint and format (Tailwind plugin, format on save in `.vscode`)
- Type-safe i18n - Multi-language with compile-time validation; English, বাংলা, العربية; RTL support
- [NextAuth.js](https://next-auth.js.org/) - Auth with optional [Google OAuth](https://next-auth.js.org/providers/google) and demo credentials; admin role via `AUTH_ADMIN_EMAILS`
- Role-based access control - [Next.js 15 parallel routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) for User and Admin; easy to extend
- Central config - Single [app-main-meta-data.json](lib/config/app-main-meta-data.json) for app name, SEO, languages, organization, theme; drives metadata, sitemap, robots, manifest
- SEO - Open Graph, Twitter Card, JSON-LD, multi-language meta, dynamic sitemap, canonical URLs
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/react) - Unit and component tests
- [Playwright](https://playwright.dev/) - E2E tests in `e2e/`; optional WebKit-only for lower disk use
- [GitHub Actions](https://github.com/features/actions) - Check workflow (lint, format, test, build) and Playwright E2E workflow
- Health check - `GET /api/health` returns `{ status: "ok" }` for load balancers and Kubernetes probes

### Infrastructure & deployments

#### Vercel

Deploy with [Vercel](https://vercel.com) by clicking the button below:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/salmanshahriar/nextjs-boilerplate-production-ready)

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Next.js version

This boilerplate uses **Next.js 15** (15.1.11) for **stability and security**. You can use Next.js 16 if you prefer, but 15 is recommended to avoid known security issues and to keep compatibility with the ecosystem (e.g. NextAuth.js). Stay on the latest 15.x patch for security updates.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/salmanshahriar/nextjs-boilerplate-production-ready.git
   cd nextjs-boilerplate-production-ready
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** at `http://localhost:3000`

**Like it?** [Star the repo](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready) — it helps others find it.

### First-time setup

1. Copy `.env.example` to `.env` and set `NEXT_PUBLIC_APP_URL` if you need to override the site URL (e.g. in production).
2. Edit **`lib/config/app-main-meta-data.json`** — main config for app name, domain, SEO, languages, organization, and theme. Sitemap, robots, and manifest are generated from it.
3. For **Google sign-in**: set `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` in `.env`, then set `NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=true`. See [Google OAuth setup](#google-oauth-setup) below.

## 📁 Project Structure

```
.
├── app/
│   ├── (protected)/          # Protected routes requiring authentication
│   │   ├── @admin/          # Admin-only parallel route
│   │   │   └── dashboard/   # Admin dashboard pages
│   │   ├── @user/           # User parallel route
│   │   │   └── dashboard/   # User dashboard pages
│   │   └── layout.tsx       # Protected layout with role-based routing
│   ├── api/                  # API routes (auth, health)
│   ├── auth/login/           # Login page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── ...                  # Custom components
├── locales/                 # Translation files (en.json, bn.json, ar.json)
├── lib/
│   ├── config/              # Central config (site, baseUrl, app-main-meta-data.json)
│   ├── i18n/                # i18n (locales from app-main-meta-data.json)
│   └── utils.ts
├── e2e/                     # Playwright E2E tests
├── .github/workflows/        # CI (check.yml, playwright.yml)
└── public/                  # Static assets
```

## ⚙️ Configuration

### Site & SEO configuration

Edit **`lib/config/app-main-meta-data.json`** to customize app name, domain, SEO, languages, organization, theme. It drives metadata, sitemap, robots, manifest, and i18n locales.

```json
{
  "appName": "Next.js Boilerplate",
  "appType": "SaaS Platform",
  "tagline": "Your Tagline Here",
  "title": "Next.js i18n & Role-Based Access Boilerplate",
  "description": "Production-ready Next.js boilerplate with multi-language support (i18n) and role-based access control (RBAC)",
  "locale": "en_US",
  "language": "en-US",
  "domain": "https://yourdomain.com",
  "canonicalPath": "/",
  "applicationCategory": "WebApplication",
  "audience": "Developers, Businesses",
  "keywords": ["nextjs", "i18n", "rbac", "boilerplate", "multilanguage"],
  "features": ["Multi-language Support", "Role-Based Access Control", "Production Ready"],

  "languages": {
    "supported": ["en", "bn", "ar"],
    "default": "en",
    "locales": {
      "en": {
        "code": "en",
        "name": "English",
        "nativeName": "English",
        "locale": "en_US",
        "direction": "ltr"
      },
      "bn": {
        "code": "bn",
        "name": "Bengali",
        "nativeName": "বাংলা",
        "locale": "bn_BD",
        "direction": "ltr"
      },
      "ar": {
        "code": "ar",
        "name": "Arabic",
        "nativeName": "العربية",
        "locale": "ar_SA",
        "direction": "rtl"
      }
    }
  },

  "organization": {
    "name": "Your Organization",
    "legalName": "Your Organization Legal Name",
    "url": "https://yourdomain.com",
    "logo": "/logo.png",
    "description": "Your organization description",
    "foundingDate": "2024-01-01",
    "email": "contact@yourdomain.com",
    "phone": "+1-234-567-8900",
    "address": {
      "street": "123 Main Street",
      "city": "New York",
      "region": "NY",
      "postalCode": "10001",
      "country": "United States",
      "countryCode": "US"
    }
  },

  "contact": {
    "supportEmail": "support@yourdomain.com",
    "salesEmail": "sales@yourdomain.com",
    "phoneNumber": "+1-234-567-8900"
  },

  "social": {
    "facebook": "https://facebook.com/yourpage",
    "twitter": "@yourhandle",
    "linkedin": "https://linkedin.com/company/yourcompany",
    "instagram": "https://instagram.com/yourhandle",
    "youtube": "https://youtube.com/@yourchannel",
    "github": "https://github.com/yourusername"
  },

  "images": {
    "og": "/og-image.png",
    "logo": "/logo.png",
    "ogWidth": 1200,
    "ogHeight": 630
  },

  "icons": {
    "favicon": "/favicon.ico",
    "svg": "/icon.svg",
    "appleTouchIcon": "/apple-touch-icon.png"
  },

  "theme": {
    "dark": "#000000",
    "light": "#ffffff"
  },

  "pricing": {
    "model": "freemium",
    "currency": "USD",
    "minPrice": "0",
    "maxPrice": "99"
  },

  "manifest": "/manifest.webmanifest"
}
```

### Adding a New Language

1. Add **`lib/config/app-main-meta-data.json`** entry:
   - Append the language code to `languages.supported` (e.g. `"es"`).
   - Add an entry under `languages.locales` (e.g. `"es": { "code": "es", "name": "Spanish", "nativeName": "Español", "locale": "es_ES", "direction": "ltr" }`).
2. Create **`locales/es.json`** (or your code) with the same structure as `locales/en.json`.
3. In **`lib/i18n/get-translations.ts`**, import the new file and add it to the `translations` object. Add the new key to the `TranslationKeys` union in **`lib/i18n/types.ts`** if you use strict keys.

### Google OAuth setup

1. **Google Cloud Console**: Go to [APIs & Credentials](https://console.cloud.google.com/apis/credentials) and create an OAuth 2.0 Client ID (Web application).
2. **Authorized redirect URI**: Add `http://localhost:3000/api/auth/callback/google` (dev) and your production URL (e.g. `https://yourdomain.com/api/auth/callback/google`).
3. **`.env`**: Set `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_URL` (e.g. `http://localhost:3000`), and `NEXTAUTH_SECRET` (e.g. `openssl rand -base64 32`). Set `NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=true` to show the Google sign-in button.
4. **Admin role**: Optionally set `AUTH_ADMIN_EMAILS=admin@yourdomain.com` (comma-separated) so those Google accounts get the admin role.

### Adding a New Role

1. Create a new parallel route folder:

   ```bash
   mkdir -p app/(protected)/@moderator/dashboard
   ```

2. Add your role-specific pages inside the folder

3. Update `app/(protected)/layout.tsx` to handle the new role:
   ```typescript
   if (role === "MODERATOR") return moderator;
   ```

## 🧪 Testing

- **Unit / component:** [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react). Run `npm run test` or `npm run test:watch`.
- **E2E:** [Playwright](https://playwright.dev) in `e2e/`. Run `npm run e2e` (starts dev server automatically). Use `npm run e2e:ui` for the UI.
- **E2E with Safari only:** To save disk space, install only WebKit and run with Safari: `npx playwright install webkit` then `npm run e2e:webkit`.
- **Coverage:** `npm run test:coverage`.

## 🔄 CI / DX

- **GitHub Actions:** `.github/workflows/check.yml` runs on push/PR: lint, Prettier check, unit tests, build. `.github/workflows/playwright.yml` runs E2E (Chromium, Firefox, WebKit).
- **Prettier:** `prettier.config.js` + Tailwind plugin. `npm run prettier` to check, `npm run prettier:fix` to fix.
- **Editor:** `.vscode/settings.json` enables format on save and ESLint fix on save.

## 🏥 Infra

- **Health check:** `GET /api/health` returns `{ status: "ok" }` for load balancers and Kubernetes probes.

## 🛠️ Available Scripts

| Command                 | Description                     |
| ----------------------- | ------------------------------- |
| `npm run dev`           | Start development server        |
| `npm run build`         | Build for production            |
| `npm run start`         | Start production server         |
| `npm run lint`          | Run ESLint                      |
| `npm run lint:fix`      | Fix ESLint errors               |
| `npm run test`          | Run unit tests (Vitest)         |
| `npm run test:watch`    | Run unit tests in watch mode    |
| `npm run test:coverage` | Run unit tests with coverage    |
| `npm run e2e`           | Run Playwright E2E tests        |
| `npm run e2e:ui`        | Run Playwright with UI          |
| `npm run e2e:webkit`    | Run E2E in WebKit (Safari) only |
| `npm run prettier`      | Check formatting                |
| `npm run prettier:fix`  | Fix formatting                  |

## 🧪 Tech Stack

- **Framework:** Next.js 15.1.11 (App Router)
- **Language:** TypeScript
- **Auth:** NextAuth.js (Google OAuth, JWT session)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Internationalization:** Type-safe i18n (locales from config)
- **Code Quality:** ESLint, Prettier, TypeScript strict mode
- **Testing:** Vitest, React Testing Library, Playwright
- **Icons:** Lucide React

## 📝 Use Cases

This boilerplate is ideal for:

- ✅ SaaS applications with multiple user types
- ✅ International applications requiring multi-language support
- ✅ MVPs that need professional infrastructure
- ✅ Projects requiring rapid deployment

May not be suitable for:

- ❌ Simple landing pages (over-engineered)
- ❌ Projects with highly custom authentication requirements
- ❌ Applications without internationalization needs

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing ESLint configuration and includes appropriate documentation.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
<br/><br/><br/>

<div align="center">

## ⭐ Show your support

**[ If this boilerplate saved you time, a star helps more devs discover it ]**

[![GitHub stars](https://img.shields.io/github/stars/salmanshahriar/nextjs-boilerplate-production-ready?style=social)](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/stargazers)

[![Star History Chart](https://api.star-history.com/svg?repos=salmanshahriar/nextjs-boilerplate-production-ready&type=date&legend=top-left)](https://www.star-history.com/#salmanshahriar/nextjs-boilerplate-production-ready&type=date&legend=top-left)

[**Star the repo**](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/stargazers) · Share with your team · [Contribute](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/blob/main/README.md#-contributing)

</div>
