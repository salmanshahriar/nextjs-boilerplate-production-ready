# Next.js Production-Ready Boilerplate

A modern, enterprise-grade **Next.js** boilerplate designed to accelerate your development workflow with built-in internationalization, authentication, and best practices out of the box.

🔗 <a href="https://nextjs-boilerplate-production-ready.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>

<img src="https://nextjs-boilerplate-production-ready.vercel.app/og-image.png" alt="Next.js Production-Ready Boilerplate screenshot showing multi-language support, RBAC, and Tailwind UI">

## ✨ Key Features

### 🌐 Internationalization (i18n)
Fully type-safe multi-language support powered by **i18next** and **TypeScript**.

- **Type-safe translations** – Catch translation errors at compile time
- **Multi-language support** – Pre-configured for English, বাংলা (Bengali), and العربية (Arabic)
- **RTL layout support** – Automatic right-to-left rendering for Arabic and other RTL languages
- **Easy language switching** – Seamless user experience across languages
- **Extensible** – Add more languages as needed with simple configuration

### 🔐 Role-Based Access Control (RBAC)
Enterprise-ready authentication and authorization system with granular access control.

- **Multi-role support** – Built-in User and Admin roles with easy extensibility
- **Protected routes** – Secure routing with parallel route segments (`@admin`, `@user`)
- **Type-safe permissions** – TypeScript-enforced role checking throughout your application
- **Scalable architecture** – Add new roles (Moderator, Manager, etc.) without refactoring existing code

### 🚀 Modern Tech Stack
Built with industry-leading technologies for optimal developer experience and performance.

- **Next.js 15** – Latest App Router with server components and streaming
- **TypeScript** – Full type safety across your entire application
- **Tailwind CSS** – Utility-first styling for rapid UI development
- **shadcn/ui** – Beautiful, accessible component library
- **ESLint** – Pre-configured linting rules for code quality and consistency

### 🎨 Theming & Design System
Professional, accessible design system ready for customization.

- **Multi-theme support** – Light, Dark, and System preference modes
- **Responsive design** – Mobile-first approach that works on all devices
- **Accessible components** – WCAG-compliant UI elements from shadcn/ui
- **Consistent styling** – Centralized design tokens and utility classes

### 🔍 SEO & Performance
Optimized for search engines and Core Web Vitals out of the box.

- **Dynamic metadata** – Automatic generation of meta tags, Open Graph, and Twitter cards
- **Performance optimized** – Code splitting, lazy loading, and image optimization
- **SEO best practices** – Semantic HTML, structured data, and proper heading hierarchy
- **Configurable** – Easy-to-customize SEO settings per route

---

## 📁 Project Structure

```
.
├── app/                          # Next.js App Router
│   ├── (protected)/              # Protected route group
│   │   ├── @admin/               # Admin parallel route
│   │   │   └── dashboard/        # Admin dashboard pages
│   │   ├── @user/                # User parallel route
│   │   │   └── dashboard/        # User dashboard pages
│   │   └── layout.tsx            # Protected routes layout
│   ├── SEO/                      # SEO configuration
│   │   └── app-main-meta-data.json  # Main metadata config
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable React components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries and configurations
├── locales/                      # i18n translation files
│   ├── en/                       # English translations
│   ├── bn/                       # Bengali translations
│   └── ar/                       # Arabic translations
└── package.json                  # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **bun**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/salmanshahriar/nextjs-boilerplate-production-ready.git

# Navigate to project directory
cd nextjs-boilerplate

# Install dependencies
npm install
# or
bun install
# or
yarn install
# or
pnpm install

```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## 🛠️ Configuration

### SEO Configuration

The SEO configuration is stored in `app/SEO/app-main-meta-data.json`. This configuration file dynamically generates metadata for your application including Open Graph tags, Twitter cards, structured data, and more.

**Configuration Structure:**

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

**Note:** This configuration is automatically loaded and applied to your application's metadata. Simply update the values in `app/SEO/app-main-meta-data.json` to customize your SEO settings.

### Adding a New Language

1. Create a new folder in `locales/` (e.g., `locales/es/` for Spanish)
2. Add translation JSON files matching the structure of existing languages
3. Update the `languages` section in `app/SEO/app-main-meta-data.json`:

```json
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
```

4. Update the i18n configuration in `lib/i18n.ts`
5. Add the language to your language switcher component

### Customizing Roles

To add a new role (e.g., "Moderator"):

1. Update your authentication provider to include the new role
2. Create a new parallel route: `app/(protected)/@moderator/`
3. Update the layout in `app/(protected)/layout.tsx` to handle the new role
4. Add role-specific route protection as needed

### Customizing Theme

Edit the theme colors in `app/SEO/app-main-meta-data.json`:

```json
"theme": {
  "dark": "#0a0a0a",
  "light": "#f5f5f5"
}
```

And update your Tailwind configuration accordingly.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues).

---

## 📧 Support

For questions or support, please [open an issue](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues/new) or contact the maintainers at the email provided in your SEO configuration.

---

**Built with ❤️**
