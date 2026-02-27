"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Login gagal");
        return;
      }

      window.location.href = "/admin";

    } catch {
      setError("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-2 text-center text-indigo-600">Admin Login</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Halaman ini hanya untuk administrator</p>

        {error && (
          <p className="text-red-500 mb-4 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
        )}

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full border p-3 rounded-lg mb-6"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold ${
            loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          } transition`}
        >
          {loading ? "Loading..." : "Login sebagai Admin"}
        </button>

        <Link href="/" className="block w-full py-3 mt-3 rounded-lg text-center border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
          ← Back to Homepage
        </Link>

        <p className="text-xs text-gray-400 text-center mt-4">
          Username: <strong>admin</strong> | Password: <strong>123456</strong>
        </p>
      </div>
    </div>
  );
}