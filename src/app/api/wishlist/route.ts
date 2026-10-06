import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const WISHLIST_COOKIE = "velora-wishlist";

async function readWishlist() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(WISHLIST_COOKIE)?.value ?? "[]";
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function GET() {
  return NextResponse.json(await readWishlist());
}

export async function POST(request: Request) {
  const body = await request.json();
  const current = await readWishlist();
  const next = current.includes(body.id) ? current : [...current, body.id];
  const cookieStore = await cookies();
  cookieStore.set(WISHLIST_COOKIE, JSON.stringify(next), { path: "/", httpOnly: true, sameSite: "lax" });
  return NextResponse.json(next);
}
