let products: any[] = [];

export async function GET() {
  return Response.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  products.push({ ...body, id: Date.now() });
  return Response.json({ success: true });
}
