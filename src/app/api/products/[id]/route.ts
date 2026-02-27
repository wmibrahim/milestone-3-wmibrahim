declare global {
  var productStore: { id: number; title: string; price: number }[];
}

if (!global.productStore) {
  global.productStore = [];
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const numId = Number(id);
  const index = global.productStore.findIndex((p) => p.id === numId);
  if (index === -1) return Response.json({ error: "Tidak ditemukan" }, { status: 404 });
  global.productStore[index] = { ...global.productStore[index], title: body.title, price: Number(body.price) };
  return Response.json(global.productStore[index]);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numId = Number(id);
  const index = global.productStore.findIndex((p) => p.id === numId);
  if (index === -1) return Response.json({ error: "Tidak ditemukan" }, { status: 404 });
  global.productStore.splice(index, 1);
  return Response.json({ success: true });
}