#  Next.js Production-Ready Boilerplate

A modern, production-grade **Next.js** boilerplate featuring:
**Multi-language i18n**, **Role-based access control**, and **SEO optimization control**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**
(Built to jumpstart your next scalable web application.)

---

## 🌟 Features

### 🌐 i18next Multi-Language
Type-safe internationalization with **i18next** and **TypeScript**.
- ✅ Type-safe translations  
- 🌍 Supports **English**, **বাংলা**, **العربية**  
- ↔️ Full **RTL** (Right-to-Left) support  

### 🔐 Role-Based Access Control
Built-in **User** and **Admin** role management for protected routes.
- ✅ Role-based route protection  
- ✅ Secure parallel routes (`@admin`, `@user`)  
- ✅ Easy role extension  

### 🚀 Modern Tech Stack
- 🧱 **Next.js 15**  
- 🧩 **TypeScript**  
- 🎨 **Tailwind CSS** + [shadcn/ui](https://ui.shadcn.com)  

### 🎨 Theme & Design
- 🌗 Light / Dark / System theme modes  
- 📱 Fully responsive design  
- 💅 Utility-first styling  

### 🔍 SEO Optimized
- 🧠 Dynamic metadata generation  
- ⚡ Performance-optimized structure  
- 🧩 Built-in SEO configuration  

---

## 🧱 Folder Structure

```bash
.
├── app/
│   ├── (protected)/
│   │   ├── @admin/
│   │   │   └── dashboard/
│   │   ├── @user/
│   │   │   └── dashboard/
│   │   └── layout.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── hooks/
├── lib/
├── locales/
│   ├── en/
│   ├── bn/
│   └── ar/
├── styles/
├── utils/
└── package.json
