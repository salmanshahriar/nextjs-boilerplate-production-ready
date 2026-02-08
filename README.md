<div align="center">
<h1>Next.js Production-Ready Boilerplate</h1>
</div>
<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A fully-featured Next.js starter with i18n, RBAC, and everything you need to ship production apps faster**

[Live Demo](https://nextjs-boilerplate-production-ready.vercel.app/) • [Report Bug](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues) • [Request Feature](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues)
<br/><br/>
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lqn07o39ssdrp9xps988.jpg">
</div>

---

## 🎯 Overview

This boilerplate eliminates weeks of setup work by providing a production-ready foundation for Next.js applications. Built with modern best practices, it includes authentication, internationalization, role-based access control, SEO optimization, and a complete design system. <br/><br/>
<img src="https://nextjs-boilerplate-production-ready.vercel.app/og-image.png" alt="Next.js Production-Ready Boilerplate screenshot showing multi-language support, RBAC, and Tailwind UI">


## ✨ Features

### Core Features
- 🚀 **Next.js 15** - Latest App Router with Server Components
- 📘 **TypeScript** - Strict mode enabled for type safety
- 🎨 **Tailwind CSS** - Utility-first styling with sensible defaults
- 🧩 **shadcn/ui** - Accessible, customizable component library
- 🌗 **Dark Mode** - System preference detection and manual toggle

### Advanced Features
- 🌍 **Type-Safe i18n** - Multi-language support with compile-time validation
  - English, বাংলা (Bengali), and العربية (Arabic) included
  - RTL layout support for Arabic
  - Easy addition of new languages
  
- 🔐 **Role-Based Access Control** - Scalable RBAC using Next.js 15 parallel routes
  - Pre-configured User and Admin roles
  - Automatic role-based dashboard routing
  - Easy to extend with additional roles

- 📊 **SEO Optimized** - JSON-based configuration system
  - Open Graph and Twitter Card tags
  - JSON-LD structured data
  - Multi-language meta tags
  - Dynamic sitemap generation
  - Canonical URLs

- 🔧 **ESLint Configuration** - Production-grade linting
  - Next.js 15 and TypeScript rules
  - Import sorting and organization
  - React hooks best practices
  - Accessibility (a11y) checks

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

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

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### First-time setup

1. Copy `.env.example` to `.env` and set `NEXT_PUBLIC_APP_URL` if you need to override the site URL (e.g. in production).
2. Edit **`app/seo/app-main-meta-data.json`** — this is the main config for app name, domain, SEO, languages, organization, and theme. Sitemap, robots, and manifest are generated from it.

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
│   ├── seo/                 # Site & SEO config (single source of truth)
│   │   └── app-main-meta-data.json
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── ...                  # Custom components
├── locales/                 # Translation files (en.json, bn.json, ar.json)
├── lib/
│   ├── config/              # Central config (site, baseUrl)
│   ├── i18n/                # i18n (locales from app-main-meta-data.json)
│   └── utils.ts
└── public/                  # Static assets
```

## ⚙️ Configuration

### Site & SEO configuration

Edit **`app/seo/app-main-meta-data.json`** to customize app name, domain, SEO, languages, organization, theme. It drives metadata, sitemap, robots, manifest, and i18n locales.

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

1. Add **`app/seo/app-main-meta-data.json`** entry:
   - Append the language code to `languages.supported` (e.g. `"es"`).
   - Add an entry under `languages.locales` (e.g. `"es": { "code": "es", "name": "Spanish", "nativeName": "Español", "locale": "es_ES", "direction": "ltr" }`).
2. Create **`locales/es.json`** (or your code) with the same structure as `locales/en.json`.
3. In **`lib/i18n/get-translations.ts`**, import the new file and add it to the `translations` object. Add the new key to the `TranslationKeys` union in **`lib/i18n/types.ts`** if you use strict keys.

### Adding a New Role

1. Create a new parallel route folder:
   ```bash
   mkdir -p app/(protected)/@moderator/dashboard
   ```

2. Add your role-specific pages inside the folder

3. Update `app/(protected)/layout.tsx` to handle the new role:
   ```typescript
   if (role === 'MODERATOR') return moderator
   ```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |

## 🧪 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Internationalization:** i18next, react-i18next
- **Code Quality:** ESLint, TypeScript strict mode
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

## ⭐ Show Your Support

**If this project helped you, please consider giving it a star!**

[![GitHub stars](https://img.shields.io/github/stars/salmanshahriar/nextjs-boilerplate-production-ready?style=social)](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/stargazers)

**Star this repo** • **Share with others** • **Contribute**
</div>

