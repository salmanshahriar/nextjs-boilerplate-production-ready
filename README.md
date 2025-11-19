# Next.js Production-Ready Boilerplate

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A fully-featured Next.js starter with i18n, RBAC, and everything you need to ship production apps faster**

[Live Demo](https://nextjs-boilerplate-production-ready.vercel.app/) • [Report Bug](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues) • [Request Feature](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues)

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lqn07o39ssdrp9xps988.jpg" alt="Next.js Production-Ready Boilerplate screenshot showing multi-language support, RBAC, and Tailwind UI">
</div>

---

## 🎯 Overview
<img src="https://nextjs-boilerplate-production-ready.vercel.app/og-image.png" alt="Next.js Production-Ready Boilerplate screenshot showing multi-language support, RBAC, and Tailwind UI">

This boilerplate eliminates weeks of setup work by providing a production-ready foundation for Next.js applications. Built with modern best practices, it includes authentication, internationalization, role-based access control, SEO optimization, and a complete design system.

## ✨ Features

### What you get in one line
Type-safe i18n with RTL support → Role-based access control → SEO-ready metadata → Dark mode theming → ESLint configuration → shadcn/ui components → All production-optimized and ready to ship.

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
│   ├── SEO/                 # SEO configuration
│   │   └── app-main-meta-data.json
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── ...                  # Custom components
├── locales/                 # Translation files
│   ├── en/                  # English translations
│   ├── bn/                  # Bengali translations
│   └── ar/                  # Arabic translations
├── lib/
│   ├── i18n.ts             # i18n configuration
│   └── utils.ts            # Utility functions
└── public/                  # Static assets
```

## ⚙️ Configuration

### SEO Configuration

Edit `app/SEO/app-main-meta-data.json` to customize your app's metadata:

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

  "manifest": "/manifest.json"
}
```

### Adding a New Language

1. Create translation file `locales/[lang]/common.json`:
   ```json
   {
     "navigation": {
       "home": "Home",
       "about": "About"
     }
   }
   ```

2. Update `app-main-meta-data.json` with new language configuration:
   ```json
   {
     "languages": {
       "supported": ["en", "bn", "ar", "es"],
       "locales": {
         "es": {
           "code": "es",
           "name": "Spanish",
           "nativeName": "Español",
           "locale": "es_ES",
           "direction": "ltr"
         }
       }
     }
   }
   ```

3. Update `lib/i18n.ts` to include the new language code

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

---
---
---

<div align="center">

## ⭐ Show Your Support

**If this project helped you, please consider giving it a star!**

[![GitHub stars](https://img.shields.io/github/stars/salmanshahriar/nextjs-boilerplate-production-ready?style=social)](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/stargazers)

**Star this repo** • **Share with others** • **Contribute**
</div>

