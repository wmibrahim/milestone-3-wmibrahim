"use client";

import Navbar from "@/components/Navbar";
import { useCartStore } from "@/store/cartStore";

export default function Checkout() {
  const { cart, removeFromCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="bg-white shadow-md rounded-xl p-6">
          {cart.length === 0 && <p>Cart kosong</p>}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-4"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
