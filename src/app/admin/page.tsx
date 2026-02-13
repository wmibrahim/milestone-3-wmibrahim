"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = async () => {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ title, price }),
    });

    alert("Product Added!");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="bg-white shadow-md rounded-xl p-6">
          <input
            className="border p-3 rounded-lg w-full mb-4"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg w-full mb-4"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}
