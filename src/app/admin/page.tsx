"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
}

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => { fetchProducts(); }, []);

  const resetForm = () => { setTitle(""); setPrice(""); setEditId(null); };

  const handleSubmit = async () => {
    if (!title || !price) { alert("Title dan Price wajib diisi!"); return; }
    setLoading(true);
    if (editId !== null) {
      await fetch(`/api/products/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price: Number(price) }),
      });
      alert("Produk berhasil diupdate!");
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price: Number(price) }),
      });
      alert("Produk berhasil ditambahkan!");
    }
    resetForm();
    fetchProducts();
    setLoading(false);
  };

  const handleEdit = (product: Product) => {
    setEditId(product.id);
    setTitle(product.title);
    setPrice(String(product.price));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Logout</button>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{editId !== null ? "✏️ Edit Produk" : "➕ Tambah Produk Baru"}</h2>
          <input
            className="border p-3 rounded-lg w-full mb-4"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border p-3 rounded-lg w-full mb-4"
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-6 py-3 rounded-lg text-white font-semibold ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} transition`}
            >
              {loading ? "Loading..." : editId !== null ? "Update Produk" : "Tambah Produk"}
            </button>
            {editId !== null && (
              <button onClick={resetForm} className="px-6 py-3 rounded-lg border border-gray-400 text-gray-600 hover:bg-gray-100 transition">Batal</button>
            )}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">📦 Daftar Produk</h2>
          {products.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Belum ada produk. Tambahkan produk di atas!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="p-3">ID</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 text-gray-500 text-sm">{product.id}</td>
                      <td className="p-3">{product.title}</td>
                      <td className="p-3 text-indigo-600 font-semibold">${product.price}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(product)} className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-500 transition">Edit</button>
                          <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">Hapus</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}