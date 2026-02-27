# 🛍️ RevoShop — Milestone 3

A full-stack e-commerce web application built with **Next.js 14**, featuring product listing, shopping cart, checkout, and admin dashboard with CRUD functionality.

## 🚀 Live Demo

[https://milestone-3-wmibrahim.vercel.app](https://milestone-3-wmibrahim.vercel.app)

## ✨ Features

- 🛒 **Product Listing** — Browse products fetched from external API
- 🔍 **Product Detail** — View detail of each product
- 🧺 **Shopping Cart** — Add/remove products using Zustand state management
- 💳 **Checkout** — Protected checkout page (login required)
- 🔐 **Authentication** — Admin login with cookie-based auth & middleware protection
- ⚙️ **Admin Dashboard** — Full CRUD (Create, Read, Update, Delete) for products

## 🗂️ Project Structure

```
src/
├── app/
│   ├── page.tsx               # Homepage - product listing
│   ├── admin/
│   │   ├── page.tsx           # Admin dashboard (CRUD)
│   │   └── login/page.tsx     # Admin login page
│   ├── api/
│   │   ├── login/route.ts     # Login API
│   │   ├── logout/route.ts    # Logout API
│   │   ├── me/route.ts        # Auth check API
│   │   └── products/          # Products CRUD API
│   ├── products/[id]/         # Product detail page
│   ├── checkout/page.tsx      # Checkout page
│   └── login/page.tsx         # User login page
├── components/
│   ├── Navbar.tsx             # Navigation bar
│   └── ProductCard.tsx        # Product card component
├── lib/
│   └── auth.ts                # Auth helper
├── store/
│   └── cartStore.ts           # Zustand cart store
├── tests/
│   └── ProductCard.test.tsx   # Unit test
└── middleware.ts               # Route protection middleware
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Authentication:** Cookie-based + Middleware
- **External API:** [Platzi Fake Store API](https://api.escuelajs.co/api/v1)
- **Deployment:** Vercel

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/wmibrahim/milestone-3-wmibrahim.git
cd milestone-3-wmibrahim
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔐 Admin Access

| URL | Credentials |
|---|---|
| `/admin/login` | username: `admin` / password: `123456` |

## 🧪 Running Tests

```bash
npm run test
```
