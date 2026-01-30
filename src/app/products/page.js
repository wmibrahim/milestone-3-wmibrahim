import Link from "next/link";

async function getProducts() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  const limitedProducts = products.slice(0, 8);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        RevoShop
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-600 transition"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold line-clamp-1">
                {product.title}
              </h3>

              <p className="text-sm text-zinc-400 mt-1 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold">
                  ${product.price}
                </span>

                <span className="text-sm underline">
                  View Detail
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
