export default function CartPage({ searchParams }) {
  const productId = searchParams?.id;

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Cart
      </h1>

      {productId ? (
        <p className="mt-4">
          Product ID <b>{productId}</b> berhasil ditambahkan 🛒
        </p>
      ) : (
        <p className="mt-4">
          Cart masih kosong
        </p>
      )}
    </div>
  );
}
