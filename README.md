# Next.js Production-Ready Boilerplate

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A fully-featured Next.js starter with i18n, RBAC, and everything you need to ship production apps faster**

[Live Demo](https://nextjs-boilerplate-production-ready.vercel.app/) • [Report Bug](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues) • [Request Feature](https://github.com/salmanshahriar/nextjs-boilerplate-production-ready/issues)

</div>

---

## 🎯 Overview

This boilerplate eliminates weeks of setup work by providing a production-ready foundation for Next.js applications. Built with modern best practices, it includes authentication, internationalization, role-based access control, SEO optimization, and a complete design system.

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
  "appName": "Your App Name",
  "title": "Your App Title",
  "description": "Your app description",
  "domain": "https://yourdomain.com",
  "keywords": ["keyword1", "keyword2"],
  "organization": {
    "name": "Your Organization",
    "email": "contact@yourdomain.com"
  },
  "social": {
    "twitter": "@yourhandle",
    "github": "https://github.com/yourusername"
  }
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

<div align="center">

**If this project helped you, please consider giving it a ⭐️**

Made with ❤️

</div>