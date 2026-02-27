import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

export const revalidate = 60;

async function getProduct(id: string) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Next.js 15: params harus di-await
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/500"}
            alt={product.title}
            className="w-full md:w-1/2 rounded-lg object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-6 text-2xl font-bold text-indigo-600">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
