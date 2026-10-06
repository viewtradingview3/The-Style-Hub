import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const CART_COOKIE = "velora-cart";

async function readCart() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(CART_COOKIE)?.value ?? "[]";
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function GET() {
  return NextResponse.json(await readCart());
}

export async function POST(request: Request) {
  const body = await request.json();
  const current = await readCart();
  const next = [...current, body];
  const cookieStore = await cookies();
  cookieStore.set(CART_COOKIE, JSON.stringify(next), { path: "/", httpOnly: true, sameSite: "lax" });
  return NextResponse.json(next);
}
