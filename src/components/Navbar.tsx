"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cart } = useCartStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/me")
      .then((res) => setIsLoggedIn(res.ok))
      .catch(() => setIsLoggedIn(false));
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setIsLoggedIn(false);
    router.push("/admin/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-indigo-600">RevoShop</Link>
      <div className="flex gap-6 items-center">
        {isLoggedIn && (
          <Link href="/admin" className="text-gray-600 hover:text-indigo-600 transition">Admin</Link>
        )}
        <Link href="/checkout" className="text-gray-600 hover:text-indigo-600 transition">
          🛒 ({cart.length})
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        ) : (
          // ✅ Arahkan ke /admin/login
          <Link href="/admin/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}