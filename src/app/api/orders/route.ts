import { NextResponse } from "next/server";
import { createOrder, orders } from "@/lib/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("orderId");

  if (!orderId) {
    return NextResponse.json(orders);
  }

  const order = orders.find((item) => item.id === orderId);
  return order ? NextResponse.json({ order }) : NextResponse.json({ error: "Order not found" }, { status: 404 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { customerName, email, items, total, shipping } = body;

  if (!customerName || !email || !items?.length) {
    return NextResponse.json({ error: "Missing order data" }, { status: 400 });
  }

  const order = createOrder({ customerName, email, items, total, shipping });
  return NextResponse.json({ ok: true, order }, { status: 201 });
}
