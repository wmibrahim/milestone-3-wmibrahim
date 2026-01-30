import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id) {
  if (!id) return null;

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${Number(id)}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductDetail({ params }) {
  // ⬇️ WAJIB await params (Next.js baru)
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="w-full h-96 object-cover rounded-xl"
      />

      <div>
        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="text-zinc-400 mt-4">
          {product.description}
        </p>

        <p className="text-2xl font-bold mt-6">
          ${product.price}
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            href={`/cart?id=${product.id}`}
            className="bg-zinc-100 text-zinc-900 px-6 py-2 rounded-md"
          >
            Add to Cart
          </Link>

          <Link
            href="/products"
            className="border border-zinc-700 px-6 py-2 rounded-md"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
