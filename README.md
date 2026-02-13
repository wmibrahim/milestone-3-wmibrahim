# 🛒 Next.js E-Commerce App

quick link milestone-3-wmibrahim.vercel.app

Modern E-Commerce website built with:

- ⚡ Next.js 14 (App Router)
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🗂 Zustand (Cart State + Persist)
- 🔐 Authentication (Fake Store API)
- 🛠 Admin Dashboard (CRUD API Routes)
- ♻️ ISR (Incremental Static Regeneration)
- 🧪 Jest + React Testing Library

---

# 🚀 Features

## 🔐 Authentication
- Fetch users from Platzi Fake API
- Simple login validation
- Middleware protection for Checkout page

## 🛒 Shopping Cart
- Zustand state management
- Persist cart in localStorage
- Add & remove products
- Checkout summary

## 🛠 Admin Dashboard
- Create products (API Route)
- View product list
- Basic CRUD system
- ISR enabled for product pages

## ⚡ Performance Optimization
- ISR enabled (revalidate: 60)
- Lazy loading components
- Optimized fetch handling
- Server Components

---

# 📦 API Source

This project uses:

https://api.escuelajs.co/api/v1


Endpoints used:

- `/products`
- `/products/:id`
- `/users`

---

# 🏗 Project Structure

app/
├── page.tsx
├── login/
├── checkout/
├── admin/
├── products/[id]/
├── api/products/
├── middleware.ts

components/
├── Navbar.tsx
├── ProductCard.tsx

store/
├── cartStore.ts

lib/
├── auth.ts

