"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const { cart } = useCartStore();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-indigo-600">
        E-Commerce
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/admin">Admin</Link>
        <Link href="/checkout">
          🛒 ({cart.length})
        </Link>
        <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Login
        </Link>
      </div>
    </nav>
  );
}
