declare global {
  var productStore: { id: number; title: string; price: number }[];
}

if (!global.productStore) {
  global.productStore = [];
}

export async function GET() {
  return Response.json(global.productStore);
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.title || body.price === undefined) {
    return Response.json({ error: "Title dan price wajib diisi" }, { status: 400 });
  }
  const newProduct = { id: Date.now(), title: body.title, price: Number(body.price) };
  global.productStore.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}