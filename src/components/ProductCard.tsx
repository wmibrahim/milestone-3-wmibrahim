"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCartStore();

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img
        src={product.images?.[0] || "https://via.placeholder.com/300"}
        alt={product.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg truncate">
          {product.title}
        </h2>

        <p className="text-indigo-600 font-bold mt-2">
          ${product.price}
        </p>

        <div className="flex gap-2 mt-4">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 border border-indigo-600 text-indigo-600 px-3 py-2 rounded-lg text-center"
          >
            Detail
          </Link>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
              })
            }
            className="flex-1 bg-indigo-600 text-white px-3 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
