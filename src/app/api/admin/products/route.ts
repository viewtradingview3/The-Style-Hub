import { NextResponse } from "next/server";
import { addProduct, products } from "@/lib/store";

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const product = {
    ...body,
    salePrice: body.salePrice ?? body.price,
    newArrival: true,
    featured: true,
  };

  addProduct(product);
  return NextResponse.json({ ok: true, product }, { status: 201 });
}
