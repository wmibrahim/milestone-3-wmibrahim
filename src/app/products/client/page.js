"use client";

import { useEffect, useState } from "react";

export default function ProductsClient() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?limit=8")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Products (Client)</h1>

      {products.map((p) => (
        <div key={p.id}>
          <strong>{p.title}</strong> – ${p.price}
        </div>
      ))}
    </div>
  );
}
