import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getExternalProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  return res.json();
}

async function getLocalProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // ✅ Selalu fresh, tidak di-cache
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const [externalProducts, localProducts] = await Promise.all([
    getExternalProducts(),
    getLocalProducts(),
  ]);

  // ✅ Gabungkan produk lokal + external
  const allProducts = [...localProducts, ...externalProducts];

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.slice(0, 12).map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}